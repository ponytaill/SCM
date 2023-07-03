
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

import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { __decorate, __metadata } from 'tslib';

import { MaterialfileF59oComponentViewmodel } from '../../viewmodels/materialfilef59ocomponentviewmodel';
import { MaterialRepository } from '../../models/materialrepository';
import { LangService } from '../../lang/lang-pipe';

import { MaterialfileF59oComponentViewmodelForm } from '../../viewmodels/form/materialfilef59ocomponentviewmodelform';
import { MaterialfileF59oComponentViewmodelUIState } from '../../viewmodels/uistate/materialfilef59ocomponentviewmodeluistate';
import { materialfilef59ocomponentviewmodeladdFileRows1Handler } from '../../viewmodels/handlers/materialfilef59ocomponentviewmodeladdfilerows1handler';
import { materialfilef59ocomponentviewmodelremoveFileRows1Handler } from '../../viewmodels/handlers/materialfilef59ocomponentviewmodelremovefilerows1handler';

@Component({
    selector: 'app-materialfilef59ocomponent',
    templateUrl: './materialfilef59ocomponent.html',
    styleUrls: ['./materialfilef59ocomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'materialfile-f59o-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: MaterialRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: Form, useClass: MaterialfileF59oComponentViewmodelForm },
        { provide: UIState, useClass: MaterialfileF59oComponentViewmodelUIState },
        { provide: ViewModel, useClass: MaterialfileF59oComponentViewmodel },
        { provide: EXCEPTION_HANDLER, useValue: null },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: materialfilef59ocomponentviewmodeladdFileRows1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: materialfilef59ocomponentviewmodelremoveFileRows1Handler, multi: true },
]
})
export class MaterialfileF59oComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {

    @HostBinding('class')
    cls = 'f-struct-wrapper ';
    public viewModel: MaterialfileF59oComponentViewmodel;
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
    Sectionmaterialfilef59osectionMainTitle = this.langService.transform('Section/materialfile-f59o-section/mainTitle', this.lang, "相关附件");
    Sectionmaterialfilef59osectionSubTitle = this.langService.transform('Section/materialfile-f59o-section/subTitle', this.lang, "");
    fileUpload_materialfile_f59o_file_SelectText = this.langService.transform('FileUploadPreview/materialfile-f59o-file/uploadSelectText', this.lang, "上传附件");
    file_materialfile_f59o_file_DefaultName = this.langService.transform('FileUploadPreview/materialfile-f59o-file/previewDefaultRename', this.lang, "");
}