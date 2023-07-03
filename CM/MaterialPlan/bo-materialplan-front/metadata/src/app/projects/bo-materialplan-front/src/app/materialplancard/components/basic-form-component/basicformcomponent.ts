
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

import { BasicFormViewmodel } from '../../viewmodels/basicformviewmodel';
import { MaterialPlanRepository } from '../../models/materialplanrepository';
import { LangService } from '../../lang/lang-pipe';

import { BasicFormViewmodelForm } from '../../viewmodels/form/basicformviewmodelform';
import { BasicFormViewmodelUIState } from '../../viewmodels/uistate/basicformviewmodeluistate';
import { DIP_DATAIE_SERVICE } from '@gsp-dip/data-imp-exp';

@Component({
    selector: 'app-basicformcomponent',
    templateUrl: './basicformcomponent.html',
    styleUrls: ['./basicformcomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'basic-form-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: MaterialPlanRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: Form, useClass: BasicFormViewmodelForm },
        { provide: UIState, useClass: BasicFormViewmodelUIState },
        DIP_DATAIE_SERVICE,
        { provide: ViewModel, useClass: BasicFormViewmodel },
        { provide: EXCEPTION_HANDLER, useValue: null },
]
})
export class BasicFormComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('applicant_Applicant_Name_d4373c28_6dic')
    applicant_Applicant_Name_d4373c28_6dic: LookupGridComponent;
            
    @ViewChild('purchaseDept_PurchaseDept_name_8d6e8922_yvzr')
    purchaseDept_PurchaseDept_name_8d6e8922_yvzr: LookupGridComponent;
            
    @ViewChild('purchaser_Purchaser_Name_55f1e399_hz5j')
    purchaser_Purchaser_Name_55f1e399_hz5j: LookupGridComponent;
            

    @HostBinding('class')
    cls = 'f-struct-wrapper ';
    public viewModel: BasicFormViewmodel;
    lang: string ="";
    size: any = {};
    enabledLanguageList: any[] = [];
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
        this.componentManagerService.appendControl('applicant_Applicant_Name_d4373c28_6dic', this.applicant_Applicant_Name_d4373c28_6dic);
        this.componentManagerService.appendControl('purchaseDept_PurchaseDept_name_8d6e8922_yvzr', this.purchaseDept_PurchaseDept_name_8d6e8922_yvzr);
        this.componentManagerService.appendControl('purchaser_Purchaser_Name_55f1e399_hz5j', this.purchaser_Purchaser_Name_55f1e399_hz5j);
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
    LookupEditapplicantApplicantNamed4373c286dicDialogTitle = this.langService.transform('LookupEdit/applicant_Applicant_Name_d4373c28_6dic/dialogTitle', this.lang, "");
    applicant_Applicant_Name_d4373c28_6dic_PlaceHolder = this.langService.transform('LookupEdit/applicant_Applicant_Name_d4373c28_6dic/placeHolder', this.lang, "");
    applicant_Applicant_Name_d4373c28_6dicQuickSelect = {
        "enable": false,
        "showItemsCount": 10,
        "showMore": true
    }
    LookupEditpurchaseDeptPurchaseDeptname8d6e8922yvzrDialogTitle = this.langService.transform('LookupEdit/purchaseDept_PurchaseDept_name_8d6e8922_yvzr/dialogTitle', this.lang, "");
    purchaseDept_PurchaseDept_name_8d6e8922_yvzr_PlaceHolder = this.langService.transform('LookupEdit/purchaseDept_PurchaseDept_name_8d6e8922_yvzr/placeHolder', this.lang, "");
    purchaseDept_PurchaseDept_name_8d6e8922_yvzrQuickSelect = {
        "enable": false,
        "showItemsCount": 10,
        "showMore": true
    }
    LookupEditpurchaserPurchaserName55f1e399hz5jDialogTitle = this.langService.transform('LookupEdit/purchaser_Purchaser_Name_55f1e399_hz5j/dialogTitle', this.lang, "");
    purchaser_Purchaser_Name_55f1e399_hz5j_PlaceHolder = this.langService.transform('LookupEdit/purchaser_Purchaser_Name_55f1e399_hz5j/placeHolder', this.lang, "");
    purchaser_Purchaser_Name_55f1e399_hz5jQuickSelect = {
        "enable": false,
        "showItemsCount": 10,
        "showMore": true
    }

    totalPrice_1c1f8bdb_p30m_PlaceHolder = this.langService.transform('NumericBox/totalPrice_1c1f8bdb_p30m/placeHolder', this.lang, "");
    totalPrice1c1f8bdbP30mTextOptions = {
        "type": "number",
        "useThousands": true,
        "precision": 2,
    }
    deliveryDate_7be8a928_jelq_PlaceHolder = this.langService.transform('DateBox/deliveryDate_7be8a928_jelq/placeHolder', this.lang, "");
    planCode_7b926633_5dke_PlaceHolder = this.langService.transform('TextBox/planCode_7b926633_5dke/placeHolder', this.lang, "");
    planName_fbe5d590_15n2_PlaceHolder = this.langService.transform('TextBox/planName_fbe5d590_15n2/placeHolder', this.lang, "");
}