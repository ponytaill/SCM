
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

import { SuppliermaOholComponentViewmodel } from '../../viewmodels/suppliermaoholcomponentviewmodel';
import { SupplierMaRepository } from '../../models/suppliermarepository';
import { LangService } from '../../lang/lang-pipe';

import { SuppliermaOholComponentViewmodelForm } from '../../viewmodels/form/suppliermaoholcomponentviewmodelform';
import { SuppliermaOholComponentViewmodelUIState } from '../../viewmodels/uistate/suppliermaoholcomponentviewmodeluistate';
import { DIP_DATAIE_SERVICE } from '@gsp-dip/data-imp-exp';

@Component({
    selector: 'app-suppliermaoholcomponent',
    templateUrl: './suppliermaoholcomponent.html',
    styleUrls: ['./suppliermaoholcomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'supplierma-ohol-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: SupplierMaRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: Form, useClass: SuppliermaOholComponentViewmodelForm },
        { provide: UIState, useClass: SuppliermaOholComponentViewmodelUIState },
        DIP_DATAIE_SERVICE,
        { provide: ViewModel, useClass: SuppliermaOholComponentViewmodel },
        { provide: EXCEPTION_HANDLER, useValue: null },
]
})
export class SuppliermaOholComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('contacts_Contacts_Name_95a3cc07_th3j')
    contacts_Contacts_Name_95a3cc07_th3j: LookupGridComponent;
            

    @HostBinding('class')
    cls = 'f-struct-wrapper ';
    public viewModel: SuppliermaOholComponentViewmodel;
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
        this.componentManagerService.appendControl('contacts_Contacts_Name_95a3cc07_th3j', this.contacts_Contacts_Name_95a3cc07_th3j);
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
    SectionsuppliermaoholformsectionMainTitle = this.langService.transform('Section/supplierma-ohol-form-section/mainTitle', this.lang, "联系方式");
    SectionsuppliermaoholformsectionSubTitle = this.langService.transform('Section/supplierma-ohol-form-section/subTitle', this.lang, "");
    LookupEditcontactsContactsName95a3cc07th3jDialogTitle = this.langService.transform('LookupEdit/contacts_Contacts_Name_95a3cc07_th3j/dialogTitle', this.lang, "");
    contacts_Contacts_Name_95a3cc07_th3j_PlaceHolder = this.langService.transform('LookupEdit/contacts_Contacts_Name_95a3cc07_th3j/placeHolder', this.lang, "");
    contacts_Contacts_Name_95a3cc07_th3jQuickSelect = {
        "enable": false,
        "showItemsCount": 10,
        "showMore": true
    }
    contactsEmail_90701715_rtno_PlaceHolder = this.langService.transform('TextBox/contactsEmail_90701715_rtno/placeHolder', this.lang, "");
    contactsAddress_f119b011_sfjn_PlaceHolder = this.langService.transform('TextBox/contactsAddress_f119b011_sfjn/placeHolder', this.lang, "");
}