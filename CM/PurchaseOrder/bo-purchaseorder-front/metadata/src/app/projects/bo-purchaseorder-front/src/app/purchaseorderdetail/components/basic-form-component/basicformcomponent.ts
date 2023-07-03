
import { Component, OnInit, Injector, AfterViewInit, OnDestroy, ViewChild, HostBinding, TemplateRef, ElementRef, ViewContainerRef, NgModuleFactory, Input, ComponentRef} from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { Form, FrameEvent, FrameEventBus, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, StateMachine, BindingData, Repository, UIState, NgSubscription, Declaration, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { FocusInvalidService } from '@farris/command-services';

import { LookupGridComponent } from '@farris/ui-lookup';

import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { __decorate, __metadata } from 'tslib';

import { QDP_COMMAND_SERVICE_PROVIDERS } from '@qdp/command-services';
import { ConditionDialogComponent, QueryFrameworkLayoutComponent } from '@qdp/query-framework';
import { QdpViewComponent } from '@qdp/spread';
import { BasicFormViewmodel } from '../../viewmodels/basicformviewmodel';
import { PurchaseOrderRepository } from '../../models/purchaseorderrepository';
import { LangService } from '../../lang/lang-pipe';

import { BasicFormViewmodelForm } from '../../viewmodels/form/basicformviewmodelform';
import { BasicFormViewmodelUIState } from '../../viewmodels/uistate/basicformviewmodeluistate';

@Component({
    selector: 'app-basicformcomponent',
    templateUrl: './basicformcomponent.html',
    styleUrls: ['./basicformcomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'basic-form-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: PurchaseOrderRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        QDP_COMMAND_SERVICE_PROVIDERS,
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: Form, useClass: BasicFormViewmodelForm },
        { provide: UIState, useClass: BasicFormViewmodelUIState },
        { provide: ViewModel, useClass: BasicFormViewmodel },
        { provide: EXCEPTION_HANDLER, useValue: null },
]
})
export class BasicFormComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('purchaseDept_PurchaseDept_name_a6a5688e_ss3h')
    purchaseDept_PurchaseDept_name_a6a5688e_ss3h: LookupGridComponent;
            
    @ViewChild('purchaser_Purchaser_Name_8e36074b_1h8e')
    purchaser_Purchaser_Name_8e36074b_1h8e: LookupGridComponent;
            

    @HostBinding('class')
    cls = 'f-struct-wrapper ';
    public viewModel: BasicFormViewmodel;
    lang: string ="";
    size: any = {};
    enabledLanguageList: any[] = [];
    @ViewChild(ConditionDialogComponent) conditionDialog: ConditionDialogComponent;
    @ViewChild(QdpViewComponent) qdpViewComponent: QdpViewComponent;
    @ViewChild(QueryFrameworkLayoutComponent) queryFrameworkLayoutComponent: QueryFrameworkLayoutComponent;
    constructor(
        private wizardSer: WizardService,
        private keybindingService: KeybindingService,
        private langService: LangService,
        private route: ActivatedRoute,
        private router: Router,
        private rootElement: ElementRef,
        private localizationService: LocalizationService,
        private frmI18nSettingService: FrmI18nSettingService,
        private focusInvalidService: FocusInvalidService,
        private componentManagerService: ComponentManagerService,
        private sanitizer: DomSanitizer,
        public injector: Injector
    ) {
        super(injector);
        this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        this.viewModel.verifycationChanged.subscribe((verifyInformations: any) => {
            this.focusInvalidService.focusInvalidInput(verifyInformations, this.rootElement);
        });

        if (this.frmI18nSettingService) {
            const i18nSetting = this.frmI18nSettingService.getSetting();
            if (i18nSetting && i18nSetting.languages && i18nSetting.languages.length > 0) {
                i18nSetting.languages.forEach((item) => {
                    this.enabledLanguageList.push({
                        code: item.code,
                        name: item.name
                    });
                });
            } else {
                console.warn("get current enable languages is null. if this occurs,please ensure the form into the framework.");
                this.enabledLanguageList.push({ "code": "en", "name": "English" });
                this.enabledLanguageList.push({ "code": "zh-CHS", "name": "中文简体" });
            }
        }
    }
    ngOnInit() {
            
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach((keyBinding, method) => {
                this.keybindingService.register(keyBinding, () => {
                    return this.viewModel[method]();
                });
            });
        }
        this.onFormLoad(); 
    }

    ngAfterViewInit(): void {
        this.componentManagerService.appendControl('purchaseDept_PurchaseDept_name_a6a5688e_ss3h', this.purchaseDept_PurchaseDept_name_a6a5688e_ss3h);
        this.componentManagerService.appendControl('purchaser_Purchaser_Name_8e36074b_1h8e', this.purchaser_Purchaser_Name_8e36074b_1h8e);
    }

    ngOnDestroy(): void {
        // 增加表单的自我销毁
        this.context.dispose && this.context.dispose();
        this.context = null;
        this.subscription = null;
        this.declaration = null;
        this.wizardSer = null;
        this.keybindingService = null;
        this.langService = null;
        this.route = null;
        this.router = null;
        this.rootElement = null;
        this.localizationService = null;
        this.frmI18nSettingService = null;
        
        this.focusInvalidService = null;
        this.sanitizer = null;
        this.injector = null;
        this.enabledLanguageList = [];

    }

    handleSizeChange(size: any) {
        this.size = size;
    } 

    public onFormLoad() {
    } 
    tabsToolbarStates = new BehaviorSubject({});
    tabsToolbarVisibleStates = new BehaviorSubject({});
    SectionbasicformsectionMainTitle = this.langService.transform('Section/basic-form-section/mainTitle', this.lang, "基本信息");
    SectionbasicformsectionSubTitle = this.langService.transform('Section/basic-form-section/subTitle', this.lang, "");
    LookupEditpurchaseDeptPurchaseDeptnamea6a5688ess3hDialogTitle = this.langService.transform('LookupEdit/purchaseDept_PurchaseDept_name_a6a5688e_ss3h/dialogTitle', this.lang, "");
    purchaseDept_PurchaseDept_name_a6a5688e_ss3h_PlaceHolder = this.langService.transform('LookupEdit/purchaseDept_PurchaseDept_name_a6a5688e_ss3h/placeHolder', this.lang, "");
    purchaseDept_PurchaseDept_name_a6a5688e_ss3hQuickSelect = {
        "enable": false,
        "showItemsCount": 10,
        "showMore": true
    }
    LookupEditpurchaserPurchaserName8e36074b1h8eDialogTitle = this.langService.transform('LookupEdit/purchaser_Purchaser_Name_8e36074b_1h8e/dialogTitle', this.lang, "");
    purchaser_Purchaser_Name_8e36074b_1h8e_PlaceHolder = this.langService.transform('LookupEdit/purchaser_Purchaser_Name_8e36074b_1h8e/placeHolder', this.lang, "");
    purchaser_Purchaser_Name_8e36074b_1h8eQuickSelect = {
        "enable": false,
        "showItemsCount": 10,
        "showMore": true
    }

    totalPrice_b3c131a8_xth5_PlaceHolder = this.langService.transform('NumericBox/totalPrice_b3c131a8_xth5/placeHolder', this.lang, "");
    totalPriceB3c131a8Xth5TextOptions = {
        "type": "number",
        "useThousands": true,
        "precision": 2,
    }
    orderDate_56f7fcde_n04v_PlaceHolder = this.langService.transform('DateBox/orderDate_56f7fcde_n04v/placeHolder', this.lang, "");
    orderCode_8f6f5647_uaby_PlaceHolder = this.langService.transform('TextBox/orderCode_8f6f5647_uaby/placeHolder', this.lang, "");
    orderName_35bceb1e_r0en_PlaceHolder = this.langService.transform('TextBox/orderName_35bceb1e_r0en/placeHolder', this.lang, "");
}