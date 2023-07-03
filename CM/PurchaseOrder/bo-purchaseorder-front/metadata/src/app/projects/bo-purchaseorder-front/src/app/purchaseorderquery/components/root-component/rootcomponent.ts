
import { Component, OnInit, Injector, AfterViewInit, OnDestroy, ViewChild, HostBinding, TemplateRef, ElementRef, ViewContainerRef, NgModuleFactory, Input, ComponentRef} from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { Form, FrameEvent, FrameEventBus, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, StateMachine, BindingData, Repository, UIState, NgSubscription, Declaration, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { ExceptionHandler } from '@farris/command-services';
import { FrameworkSessionService, UriService } from '@farris/bef';
import { FrameworkService } from '@gsp-sys/rtf-common';
import { ApplicationParamService } from '@farris/command-services';
import { EventDeclaration } from '../../events/event';
import { FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS} from '@farris/devkit';
import { WFSubmiteService } from '@gsp-wf/rtdevkit';
import { CloudprintService } from '@gsp-svc/cloudprint';
import { WFFlowchartService } from '@gsp-wf/ui-flowchart';

import { TranslateToken, FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS } from '@farris/devkit';
import { VerifyDetailService } from '@farris/ui-verify-detail';
import { AppContext, FORM_ID,  PARAM_TYPE_TRANSFORM_TOKEN } from '@farris/devkit';
import { BE_SESSION_HANDLING_STRATEGY_TOKEN } from '@farris/bef';
import { BACK_END_MESSAGE_HANDLER_TOKEN } from '@farris/devkit';
import { BackEndMessageHandler } from '@farris/command-services';
import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { __decorate, __metadata } from 'tslib';

import { QDP_COMMAND_SERVICE_PROVIDERS } from '@qdp/command-services';
import { ConditionDialogComponent, QueryFrameworkLayoutComponent } from '@qdp/query-framework';
import { QdpViewComponent } from '@qdp/spread';
import { MenuControllerService } from '@qdp/search-join';

import { RootViewmodel } from '../../viewmodels/rootviewmodel';
import { PurchaseOrderQueryFrmRepository } from '../../models/purchaseorderqueryfrmrepository';
import { LangService } from '../../lang/lang-pipe';

import { RootViewmodelForm } from '../../viewmodels/form/rootviewmodelform';
import { RootViewmodelUIState } from '../../viewmodels/uistate/rootviewmodeluistate';
import { Close1Handler } from '../../viewmodels/handlers/close1handler';
import { Load1Handler } from '../../viewmodels/handlers/load1handler';
import { filterQDP1Handler } from '../../viewmodels/handlers/filterqdp1handler';
import { PurchaseOrderQueryFrmProxy } from '../../models/purchaseorderqueryfrmproxy';

@Component({
    selector: 'app-rootcomponent',
    templateUrl: './rootcomponent.html',
    styleUrls: ['./rootcomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'root-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: PurchaseOrderQueryFrmRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        QDP_COMMAND_SERVICE_PROVIDERS,
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: Form, useClass: RootViewmodelForm },
        { provide: UIState, useClass: RootViewmodelUIState },
        FrameworkSessionService,
        UriService,
        PurchaseOrderQueryFrmProxy,
        PurchaseOrderQueryFrmRepository,
        { provide: ViewModel, useClass: RootViewmodel },
        { provide: Declaration, useClass: EventDeclaration },
        { provide: TranslateToken, useExisting: LangService },
        VerifyDetailService,
        { provide: WFSubmiteService, useClass: WFSubmiteService },
        { provide: CloudprintService, useClass: CloudprintService },
        { provide: WFFlowchartService, useClass: WFFlowchartService },
        FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS,
        FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS,
        FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS,

        AppContext,
        ComponentManagerService,
        { provide: PARAM_TYPE_TRANSFORM_TOKEN, useValue: false },
        { provide: FORM_ID, useValue: "029795b9-706c-4b0b-aa1e-0817af5d8380" },
        { provide: BE_SESSION_HANDLING_STRATEGY_TOKEN, useValue: "SeparatedSession" },
        { provide: EXCEPTION_HANDLER, useClass: ExceptionHandler },
        { provide: BACK_END_MESSAGE_HANDLER_TOKEN, useClass: BackEndMessageHandler },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Close1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Load1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: filterQDP1Handler, multi: true },
]
})
export class RootComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {

    @HostBinding('class')
    cls = 'f-page-root  ';
        @ViewChild('menu', { read: ElementRef }) public menuElement: ElementRef;
        @ViewChild(QdpViewComponent, { read: ElementRef }) public qdpViewElementRef: ElementRef;
        @ViewChild(QdpViewComponent) public qdpView: any;
    
    public viewModel: RootViewmodel;
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
        public menuController: MenuControllerService,
        private frameworkService: FrameworkService,
        private applicationParamsService: ApplicationParamService,
        private verifyService: VerifyDetailService,
        private sanitizer: DomSanitizer,
        public injector: Injector
    ) {
        super(injector);
        this.lang = localStorage.getItem('languageCode') || "zh-CHS";
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
        this.viewModel.verifycationChanged.subscribe((verifyInformations) => {
            if (verifyInformations.length) {
                this.verifyService.createVerify({
                    'parent': this.rootElement,
                    'verifyList': verifyInformations,
                    'showType': 'all'
                });
            } else {
                this.verifyService.clear();
            }
        });
        this.applicationParamsService.parseParams(this.route, this.frameworkService, this.viewModel, () => {
            this.onFormLoad();
        })
                
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
        
        this.menuController = null;
        this.frameworkService = null;
        this.applicationParamsService = null;
        this.verifyService.clear();
        this.verifyService = null;
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
    SectionqueryschemesectionMainTitle = this.langService.transform('Section/query-scheme-section/mainTitle', this.lang, "主标题");
    SectionqueryschemesectionSubTitle = this.langService.transform('Section/query-scheme-section/subTitle', this.lang, "");
    QuerySolutionqueryscheme1 = this.langService.transform('query-scheme-1', this.lang, "默认筛选方案"); 
    fieldConfigsqueryscheme1 = [
        {
            "id": "f8898411-9a81-4c9f-8c30-cbaed73a5ab0",
            "labelCode": "ID",
            "code": "ID",
            "name": this.langService.transform('QueryScheme/query-scheme-1/f8898411-9a81-4c9f-8c30-cbaed73a5ab0', this.lang, "ID"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/f8898411-9a81-4c9f-8c30-cbaed73a5ab0/placeHolder', this.lang, ""),
            "control": {"id":"f8898411-9a81-4c9f-8c30-cbaed73a5ab0","controltype":"text","require":false,"className":"","modalConfig":{"modalCmp":null,"mapFields":null,"showHeader":true,"title":"","showCloseButton":true,"showMaxButton":true,"width":800,"height":600,"showFooterButtons":true,"footerButtons":[]}}
        },
        {
            "id": "22e61c91-a90c-42b6-a214-3f922955f595",
            "labelCode": "OrderName",
            "code": "OrderName",
            "name": this.langService.transform('QueryScheme/query-scheme-1/22e61c91-a90c-42b6-a214-3f922955f595', this.lang, "订单名称"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/22e61c91-a90c-42b6-a214-3f922955f595/placeHolder', this.lang, ""),
            "control": {"id":"22e61c91-a90c-42b6-a214-3f922955f595","controltype":"text","require":false,"className":""}
        },
        {
            "id": "9a2239eb-37f6-40eb-8338-5a02ddc190b8",
            "labelCode": "OrderDate",
            "code": "OrderDate",
            "name": this.langService.transform('QueryScheme/query-scheme-1/9a2239eb-37f6-40eb-8338-5a02ddc190b8', this.lang, "下单日期"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/9a2239eb-37f6-40eb-8338-5a02ddc190b8/placeHolder', this.lang, ""),
            "control": {"id":"9a2239eb-37f6-40eb-8338-5a02ddc190b8","controltype":"date-time","require":false,"enableCustomFormat":true,"format":"yyyy-MM-dd HH:mm:ss","returnFormat":"yyyy-MM-dd HH:mm:ss"}
        },
        {
            "id": "9db630bc-9ca2-4e08-aa8f-73447c45a9e7",
            "labelCode": "OrderCode",
            "code": "OrderCode",
            "name": this.langService.transform('QueryScheme/query-scheme-1/9db630bc-9ca2-4e08-aa8f-73447c45a9e7', this.lang, "订单编号"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/9db630bc-9ca2-4e08-aa8f-73447c45a9e7/placeHolder', this.lang, ""),
            "control": {"id":"9db630bc-9ca2-4e08-aa8f-73447c45a9e7","controltype":"text","require":false,"className":"","modalConfig":{"modalCmp":null,"mapFields":null,"showHeader":true,"title":"","showCloseButton":true,"showMaxButton":true,"width":800,"height":600,"showFooterButtons":true,"footerButtons":[]}}
        }]
    presetFieldConfigsqueryscheme1 = [
        {
            "id": "22e61c91-a90c-42b6-a214-3f922955f595",
            "labelCode": "OrderName",
            "code": "OrderName",
            "name": this.langService.transform('QueryScheme/query-scheme-1/22e61c91-a90c-42b6-a214-3f922955f595', this.lang, "订单名称"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/22e61c91-a90c-42b6-a214-3f922955f595/placeHolder', this.lang, ""),
            "control": {"id":"22e61c91-a90c-42b6-a214-3f922955f595","controltype":"text","require":false,"className":""}
        },
        {
            "id": "9a2239eb-37f6-40eb-8338-5a02ddc190b8",
            "labelCode": "OrderDate",
            "code": "OrderDate",
            "name": this.langService.transform('QueryScheme/query-scheme-1/9a2239eb-37f6-40eb-8338-5a02ddc190b8', this.lang, "下单日期"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/9a2239eb-37f6-40eb-8338-5a02ddc190b8/placeHolder', this.lang, ""),
            "control": {"id":"9a2239eb-37f6-40eb-8338-5a02ddc190b8","controltype":"date-time","require":false,"enableCustomFormat":true,"format":"yyyy-MM-dd HH:mm:ss","returnFormat":"yyyy-MM-dd HH:mm:ss"}
        },
        {
            "id": "9db630bc-9ca2-4e08-aa8f-73447c45a9e7",
            "labelCode": "OrderCode",
            "code": "OrderCode",
            "name": this.langService.transform('QueryScheme/query-scheme-1/9db630bc-9ca2-4e08-aa8f-73447c45a9e7', this.lang, "订单编号"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/9db630bc-9ca2-4e08-aa8f-73447c45a9e7/placeHolder', this.lang, ""),
            "control": {"id":"9db630bc-9ca2-4e08-aa8f-73447c45a9e7","controltype":"text","require":false,"className":"","modalConfig":{"modalCmp":null,"mapFields":null,"showHeader":true,"title":"","showCloseButton":true,"showMaxButton":true,"width":800,"height":600,"showFooterButtons":true,"footerButtons":[]}}
        }]
                
                
QdpFrameworkQueryNameqdpframeworkcomponent = this.langService.transform('qdp-framework-component', this.lang, "采购订单查询");
}