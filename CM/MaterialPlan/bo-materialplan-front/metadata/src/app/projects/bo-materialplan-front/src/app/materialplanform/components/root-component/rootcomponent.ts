
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

import { CHANGE_SET_POLICY_TOKEN } from '@farris/devkit';
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

import { RootViewmodel } from '../../viewmodels/rootviewmodel';
import { MaterialPlanRepository } from '../../models/materialplanrepository';
import { LangService } from '../../lang/lang-pipe';

import { RootViewmodelForm } from '../../viewmodels/form/rootviewmodelform';
import { RootViewmodelStateMachine } from '../../viewmodels/statemachine/rootviewmodelstatemachine';
import { RootViewmodelUIState } from '../../viewmodels/uistate/rootviewmodeluistate';
import { Load1Handler } from '../../viewmodels/handlers/load1handler';
import { Search1Handler } from '../../viewmodels/handlers/search1handler';
import { RemoveRows1Handler } from '../../viewmodels/handlers/removerows1handler';
import { Add1Handler } from '../../viewmodels/handlers/add1handler';
import { View1Handler } from '../../viewmodels/handlers/view1handler';
import { Edit1Handler } from '../../viewmodels/handlers/edit1handler';
import { Remove1Handler } from '../../viewmodels/handlers/remove1handler';
import { Filter1Handler } from '../../viewmodels/handlers/filter1handler';
import { submitWithBizDefKey1Handler } from '../../viewmodels/handlers/submitwithbizdefkey1handler';
import { cancelSubmitWithDataId1Handler } from '../../viewmodels/handlers/cancelsubmitwithdataid1handler';
import { rootviewmodelLoad1Handler } from '../../viewmodels/handlers/rootviewmodelload1handler';
import { MaterialPlanProxy } from '../../models/materialplanproxy';

@Component({
    selector: 'app-rootcomponent',
    templateUrl: './rootcomponent.html',
    styleUrls: ['./rootcomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'root-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: MaterialPlanRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: Form, useClass: RootViewmodelForm },
        { provide: StateMachine, useClass: RootViewmodelStateMachine },
        { provide: UIState, useClass: RootViewmodelUIState },
        FrameworkSessionService,
        UriService,
        MaterialPlanProxy,
        MaterialPlanRepository,
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
        { provide: FORM_ID, useValue: "d5d6ccf3-5d06-44e2-92eb-e75d8fb2fcd3" },
        { provide: BE_SESSION_HANDLING_STRATEGY_TOKEN, useValue: "SeparatedSession" },
        { provide: EXCEPTION_HANDLER, useClass: ExceptionHandler },
        { provide: CHANGE_SET_POLICY_TOKEN, useValue: 'valid' },
        { provide: BACK_END_MESSAGE_HANDLER_TOKEN, useClass: BackEndMessageHandler },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Load1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Search1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: RemoveRows1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Add1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: View1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Edit1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Remove1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Filter1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: submitWithBizDefKey1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: cancelSubmitWithDataId1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelLoad1Handler, multi: true },
]
})
export class RootComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {

    @HostBinding('class')
    cls = 'f-page-root  ';
    public viewModel: RootViewmodel;
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
        private frameworkService: FrameworkService,
        private applicationParamsService: ApplicationParamService,
        private verifyService: VerifyDetailService,
        private stateMachine: StateMachine,
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
        this.stateMachine.stateChange.subscribe(() => {
            const pageHeaderToolbarToolbarItemsstates = {
                'toolBarItem-epjr': false,
                'button-add': !this.viewModel.stateMachine['canAdd'],
                'button-edit': this.viewModel.stateMachine['canOperation'],
                'button-view': !this.viewModel.stateMachine['canView'],
                'button-delete': this.viewModel.stateMachine['canOperation'],
                'button-approve': !this.viewModel.stateMachine['canApprove'],
                'button-cancel-approve': !this.viewModel.stateMachine['canCancelApprove'],
            }
        this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
        });
        
        this.stateMachine.stateChange.subscribe(() => {
            
            const pageHeaderToolbarToolbarItemsvisibleStates = {
            'toolBarItem-epjr': true,
            'button-add': true,
            'button-edit': true,
            'button-view': true,
            'button-delete': true,
            'button-approve': true,
            'button-cancel-approve': true,
        }
            this.pageHeaderToolbarToolbarItemsVisibleStates.next(pageHeaderToolbarToolbarItemsvisibleStates);
    });

        this.pageHeaderToolbarToolbarItems.forEach((toolbarItem) => {
            
            const transformText = this.langService.transform(toolbarItem.resourceId, this.lang, toolbarItem.text);
            if (transformText) {
                toolbarItem.text = transformText;
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
        
        this.frameworkService = null;
        this.applicationParamsService = null;
        this.verifyService.clear();
        this.verifyService = null;
        this.stateMachine = null;
        this.sanitizer = null;
        this.injector = null;
        this.enabledLanguageList = [];

    }

    handleSizeChange(size: any) {
        this.size = size;
    } 

    public onFormLoad() {
        this.viewModel.Filter1(); 
    } 
    pageHeaderToolbarToolbarItems = [{
        "id": "toolBarItem-epjr",
        "text": this.langService.transform("toolBarItem-epjr", this.lang, "同步"),
        "resourceId": "toolBarItem-epjr",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-add",
        "text": this.langService.transform("button-add", this.lang, "新增"),
        "resourceId": "button-add",
        "isDP": false,
        "class": "btn-primary",
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-edit",
        "text": this.langService.transform("button-edit", this.lang, "编辑"),
        "resourceId": "button-edit",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-view",
        "text": this.langService.transform("button-view", this.lang, "查看"),
        "resourceId": "button-view",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-delete",
        "text": this.langService.transform("button-delete", this.lang, "删除"),
        "resourceId": "button-delete",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-approve",
        "text": this.langService.transform("button-approve", this.lang, "提交审批"),
        "resourceId": "button-approve",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-cancel-approve",
        "text": this.langService.transform("button-cancel-approve", this.lang, "取消提交审批"),
        "resourceId": "button-cancel-approve",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        }
    ]; 

    pageHeaderToolbarToolbarItemsStates = new BehaviorSubject({});
    pageHeaderToolbarToolbarItemsVisibleStates = new BehaviorSubject({});

    pageHeaderToolbarClickHandler (args) {
        
        switch (args.id) {

            case 'toolBarItem-epjr': 
                this.viewModel.rootviewmodelLoad1(args);
                break;
            case 'button-add': 
                this.viewModel.Add1(args);
                break;
            case 'button-edit': 
                this.viewModel.Edit1(args);
                break;
            case 'button-view': 
                this.viewModel.View1(args);
                break;
            case 'button-delete': 
                this.viewModel.Remove1(args);
                break;
            case 'button-approve': 
                this.viewModel.submitWithBizDefKey1(args);
                break;
            case 'button-cancel-approve': 
                this.viewModel.cancelSubmitWithDataId1(args);
                break;
        }
    }
    tabsToolbarStates = new BehaviorSubject({});
    tabsToolbarVisibleStates = new BehaviorSubject({});
    sectionsToolbarStates = new BehaviorSubject({});
    sectionsToolbarVisibleStates = new BehaviorSubject({});
    querySchemeSection = {
        position: 'inHead',
        contents: [
        ]
    }
    SectionqueryschemesectionMainTitle = this.langService.transform("Section/query-scheme-section/mainTitle", this.lang, "主标题");
    SectionqueryschemesectionSubTitle = this.langService.transform("Section/query-scheme-section/subTitle", this.lang, "");
    QuerySolutionqueryscheme1 = this.langService.transform("query-scheme-1", this.lang, "默认筛选方案"); 
    fieldConfigsqueryscheme1 = [
        {
            "id": "f73f5927-a02c-491c-9b5c-cd74be14d2fa",
            "labelCode": "ID",
            "code": "ID",
            "name": this.langService.transform("QueryScheme/query-scheme-1/f73f5927-a02c-491c-9b5c-cd74be14d2fa", this.lang, "主键"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/f73f5927-a02c-491c-9b5c-cd74be14d2fa/placeHolder", this.lang, ""),
            "control": {"id":"f73f5927-a02c-491c-9b5c-cd74be14d2fa","controltype":"text","require":false,"className":"","modalConfig":{"modalCmp":null,"mapFields":null,"showHeader":true,"title":"","showCloseButton":true,"showMaxButton":true,"width":800,"height":600,"showFooterButtons":true,"footerButtons":[]}}
        },
        {
            "id": "040f40dd-c841-498f-86c5-d8d58afb91d7",
            "labelCode": "Version",
            "code": "Version",
            "name": this.langService.transform("QueryScheme/query-scheme-1/040f40dd-c841-498f-86c5-d8d58afb91d7", this.lang, "版本"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/040f40dd-c841-498f-86c5-d8d58afb91d7/placeHolder", this.lang, ""),
            "control": {"id":"040f40dd-c841-498f-86c5-d8d58afb91d7","controltype":"date","require":false,"format":"yyyy-MM-dd","weekSelect":false}
        },
        {
            "id": "6a6f7e09-0101-468f-ae3f-40c76c0f06b0",
            "labelCode": "BillStatus.BillState",
            "code": "BillState",
            "name": this.langService.transform("QueryScheme/query-scheme-1/6a6f7e09-0101-468f-ae3f-40c76c0f06b0", this.lang, "状态"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/6a6f7e09-0101-468f-ae3f-40c76c0f06b0/placeHolder", this.lang, ""),
            "control": {
                "controltype": "dropdown",
                "require": false,
                "valueType": "1",
                "multiSelect": false,
                "enumValues": [
                    {
                        "value": "Billing",
                        "name": this.langService.transform("QueryScheme/query-scheme-1/6a6f7e09-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Billing", this.lang, "制单")
                    },
                    {
                        "value": "SubmitApproval",
                        "name": this.langService.transform("QueryScheme/query-scheme-1/6a6f7e09-0101-468f-ae3f-40c76c0f06b0/control/enumValues/SubmitApproval", this.lang, "提交审批")
                    },
                    {
                        "value": "Approved",
                        "name": this.langService.transform("QueryScheme/query-scheme-1/6a6f7e09-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Approved", this.lang, "审批通过")
                    },
                    {
                        "value": "ApprovalNotPassed",
                        "name": this.langService.transform("QueryScheme/query-scheme-1/6a6f7e09-0101-468f-ae3f-40c76c0f06b0/control/enumValues/ApprovalNotPassed", this.lang, "审批不通过")
                    }]
            }
        },
        {
            "id": "502cfc60-ad8f-4da3-a430-c8a7f2162135",
            "labelCode": "ProcessInstance.ProcessInstance",
            "code": "ProcessInstance",
            "name": this.langService.transform("QueryScheme/query-scheme-1/502cfc60-ad8f-4da3-a430-c8a7f2162135", this.lang, "流程实例"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/502cfc60-ad8f-4da3-a430-c8a7f2162135/placeHolder", this.lang, ""),
            "control": {"id":"502cfc60-ad8f-4da3-a430-c8a7f2162135","controltype":"text","require":false,"className":""}
        },
        {
            "id": "a50f04eb-fc31-457c-8c85-0c5ab0cae592",
            "labelCode": "Applicant.Applicant",
            "code": "Applicant",
            "name": this.langService.transform("QueryScheme/query-scheme-1/a50f04eb-fc31-457c-8c85-0c5ab0cae592", this.lang, "制单人"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/a50f04eb-fc31-457c-8c85-0c5ab0cae592/placeHolder", this.lang, ""),
            "control": {"id":"a50f04eb-fc31-457c-8c85-0c5ab0cae592","controltype":"text","require":false,"className":""}
        },
        {
            "id": "493e5d57-896f-46dd-a9a7-af9a5a54d0a1",
            "labelCode": "Applicant.Applicant_ID",
            "code": "ID",
            "name": this.langService.transform("QueryScheme/query-scheme-1/493e5d57-896f-46dd-a9a7-af9a5a54d0a1", this.lang, "ID"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/493e5d57-896f-46dd-a9a7-af9a5a54d0a1/placeHolder", this.lang, ""),
            "control": {"id":"493e5d57-896f-46dd-a9a7-af9a5a54d0a1","controltype":"text","require":false,"className":""}
        },
        {
            "id": "36e050c8-bb2f-4649-8974-9b4af77eeb21",
            "labelCode": "Applicant.Applicant_Name",
            "code": "Name",
            "name": this.langService.transform("QueryScheme/query-scheme-1/36e050c8-bb2f-4649-8974-9b4af77eeb21", this.lang, "名称"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/36e050c8-bb2f-4649-8974-9b4af77eeb21/placeHolder", this.lang, ""),
            "control": {"id":"36e050c8-bb2f-4649-8974-9b4af77eeb21","controltype":"text","require":false,"className":""}
        },
        {
            "id": "19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a",
            "labelCode": "DeliveryDate",
            "code": "DeliveryDate",
            "name": this.langService.transform("QueryScheme/query-scheme-1/19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a", this.lang, "交货日期"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a/placeHolder", this.lang, ""),
            "control": {"id":"19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a","controltype":"date","require":false,"format":"yyyy-MM-dd","weekSelect":false}
        },
        {
            "id": "f9f7f6fd-68a4-430c-856a-adda5d47fd52",
            "labelCode": "PurchaseDept.PurchaseDept",
            "code": "PurchaseDept",
            "name": this.langService.transform("QueryScheme/query-scheme-1/f9f7f6fd-68a4-430c-856a-adda5d47fd52", this.lang, "采购部门"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/f9f7f6fd-68a4-430c-856a-adda5d47fd52/placeHolder", this.lang, ""),
            "control": {"id":"f9f7f6fd-68a4-430c-856a-adda5d47fd52","controltype":"text","require":false,"className":"","modalConfig":{"modalCmp":null,"mapFields":null,"showHeader":true,"title":"","showCloseButton":true,"showMaxButton":true,"width":800,"height":600,"showFooterButtons":true,"footerButtons":[]}}
        },
        {
            "id": "97d95d4b-8497-4df5-bec8-8838acc68ee7",
            "labelCode": "PurchaseDept.PurchaseDept_ID",
            "code": "ID",
            "name": this.langService.transform("QueryScheme/query-scheme-1/97d95d4b-8497-4df5-bec8-8838acc68ee7", this.lang, "采购部门"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/97d95d4b-8497-4df5-bec8-8838acc68ee7/placeHolder", this.lang, ""),
            "control": {
                "controltype": "help",
                "require": false,
                "uri": "MaterialPlan.purchaseDept_PurchaseDept_ID",
                "textField": "name",
                "valueField": "id",
                "idField": "id",
                "helpId": "b524a702-7323-4d46-998e-5ba0c6abcd49",
                "displayType": "TreeList",
                "loadTreeDataType": 'default',
                "enableFullTree": false,
                "editable": false,
                "dialogTitle": this.langService.transform("QueryScheme/query-scheme-1/97d95d4b-8497-4df5-bec8-8838acc68ee7/control/help/dialogTitle", this.lang, ""),
                "singleSelect": true,
                "enableCascade": false,
                "cascadeStatus": "enable",
                "pageSize": 20,
                "pageList": "10,20,30,50,100",
                "nosearch": false,
                "expandLevel": -1,
                "context": {
                    "enableExtendLoadMethod": false
                },
                "quickSelect": {
                    "enable": false,
                    "showMore": true,
                    "showItemsCount": 10
                }
            }
        },
        {
            "id": "53265c41-b6d3-4977-9dde-450cb0505c91",
            "labelCode": "PurchaseDept.PurchaseDept_name",
            "code": "name",
            "name": this.langService.transform("QueryScheme/query-scheme-1/53265c41-b6d3-4977-9dde-450cb0505c91", this.lang, "名称"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/53265c41-b6d3-4977-9dde-450cb0505c91/placeHolder", this.lang, ""),
            "control": {"id":"53265c41-b6d3-4977-9dde-450cb0505c91","controltype":"text","require":false,"className":""}
        },
        {
            "id": "210f7065-4c19-4009-81e3-3cafec40792a",
            "labelCode": "PlanCode",
            "code": "PlanCode",
            "name": this.langService.transform("QueryScheme/query-scheme-1/210f7065-4c19-4009-81e3-3cafec40792a", this.lang, "计划编号"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/210f7065-4c19-4009-81e3-3cafec40792a/placeHolder", this.lang, ""),
            "control": {"id":"210f7065-4c19-4009-81e3-3cafec40792a","controltype":"text","require":false,"className":""}
        },
        {
            "id": "4f24ebc0-acb5-4039-8ee5-9e1fd296f133",
            "labelCode": "PlanName",
            "code": "PlanName",
            "name": this.langService.transform("QueryScheme/query-scheme-1/4f24ebc0-acb5-4039-8ee5-9e1fd296f133", this.lang, "计划名称"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/4f24ebc0-acb5-4039-8ee5-9e1fd296f133/placeHolder", this.lang, ""),
            "control": {"id":"4f24ebc0-acb5-4039-8ee5-9e1fd296f133","controltype":"text","require":false,"className":""}
        },
        {
            "id": "75108363-b463-4d9a-8ee1-899a42e20e04",
            "labelCode": "IsPurchaseOrder",
            "code": "IsPurchaseOrder",
            "name": this.langService.transform("QueryScheme/query-scheme-1/75108363-b463-4d9a-8ee1-899a42e20e04", this.lang, "是否已生成采购订单"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/75108363-b463-4d9a-8ee1-899a42e20e04/placeHolder", this.lang, ""),
            "control": {
                "controltype": "dropdown",
                "require": false,
                "valueType": "2",
                "multiSelect": false,
                "enumValues": [
                    {
                        "value": "true",
                        "name": this.langService.transform("QueryScheme/query-scheme-1/75108363-b463-4d9a-8ee1-899a42e20e04/control/enumValues/true", this.lang, "true")
                    },
                    {
                        "value": "false",
                        "name": this.langService.transform("QueryScheme/query-scheme-1/75108363-b463-4d9a-8ee1-899a42e20e04/control/enumValues/false", this.lang, "false")
                    }]
            }
        },
        {
            "id": "da36cd69-7e29-4add-85f0-ea43a2691188",
            "labelCode": "TotalPrice",
            "code": "TotalPrice",
            "name": this.langService.transform("QueryScheme/query-scheme-1/da36cd69-7e29-4add-85f0-ea43a2691188", this.lang, "物料总价"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/da36cd69-7e29-4add-85f0-ea43a2691188/placeHolder", this.lang, ""),
            "control": {"id":"da36cd69-7e29-4add-85f0-ea43a2691188","controltype":"number","require":false,"className":"","textAlign":"left","precision":2,"isBigNumber":false}
        },
        {
            "id": "f039a9da-8150-4935-8af3-836b7aca3bef",
            "labelCode": "Purchaser.Purchaser",
            "code": "Purchaser",
            "name": this.langService.transform("QueryScheme/query-scheme-1/f039a9da-8150-4935-8af3-836b7aca3bef", this.lang, "采购员"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/f039a9da-8150-4935-8af3-836b7aca3bef/placeHolder", this.lang, ""),
            "control": {"id":"f039a9da-8150-4935-8af3-836b7aca3bef","controltype":"text","require":false,"className":""}
        },
        {
            "id": "8a441b44-720b-4e36-aa28-a20d4008658e",
            "labelCode": "Purchaser.Purchaser_ID",
            "code": "ID",
            "name": this.langService.transform("QueryScheme/query-scheme-1/8a441b44-720b-4e36-aa28-a20d4008658e", this.lang, "ID"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/8a441b44-720b-4e36-aa28-a20d4008658e/placeHolder", this.lang, ""),
            "control": {"id":"8a441b44-720b-4e36-aa28-a20d4008658e","controltype":"text","require":false,"className":""}
        },
        {
            "id": "e646ee4c-4ae8-4df5-a9b4-0c39402adff8",
            "labelCode": "Purchaser.Purchaser_Name",
            "code": "Name",
            "name": this.langService.transform("QueryScheme/query-scheme-1/e646ee4c-4ae8-4df5-a9b4-0c39402adff8", this.lang, "名称"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/e646ee4c-4ae8-4df5-a9b4-0c39402adff8/placeHolder", this.lang, ""),
            "control": {"id":"e646ee4c-4ae8-4df5-a9b4-0c39402adff8","controltype":"text","require":false,"className":""}
        }]
    presetFieldConfigsqueryscheme1 = [
        {
            "id": "210f7065-4c19-4009-81e3-3cafec40792a",
            "labelCode": "PlanCode",
            "code": "PlanCode",
            "name": this.langService.transform("QueryScheme/query-scheme-1/210f7065-4c19-4009-81e3-3cafec40792a", this.lang, "计划编号"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/210f7065-4c19-4009-81e3-3cafec40792a/placeHolder", this.lang, ""),
            "control": {"id":"210f7065-4c19-4009-81e3-3cafec40792a","controltype":"text","require":false,"className":""}
        },
        {
            "id": "4f24ebc0-acb5-4039-8ee5-9e1fd296f133",
            "labelCode": "PlanName",
            "code": "PlanName",
            "name": this.langService.transform("QueryScheme/query-scheme-1/4f24ebc0-acb5-4039-8ee5-9e1fd296f133", this.lang, "计划名称"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/4f24ebc0-acb5-4039-8ee5-9e1fd296f133/placeHolder", this.lang, ""),
            "control": {"id":"4f24ebc0-acb5-4039-8ee5-9e1fd296f133","controltype":"text","require":false,"className":""}
        },
        {
            "id": "19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a",
            "labelCode": "DeliveryDate",
            "code": "DeliveryDate",
            "name": this.langService.transform("QueryScheme/query-scheme-1/19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a", this.lang, "交货日期"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a/placeHolder", this.lang, ""),
            "control": {"id":"19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a","controltype":"date","require":false,"format":"yyyy-MM-dd","weekSelect":false}
        },
        {
            "id": "97d95d4b-8497-4df5-bec8-8838acc68ee7",
            "labelCode": "PurchaseDept.PurchaseDept_ID",
            "code": "ID",
            "name": this.langService.transform("QueryScheme/query-scheme-1/97d95d4b-8497-4df5-bec8-8838acc68ee7", this.lang, "采购部门"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/97d95d4b-8497-4df5-bec8-8838acc68ee7/placeHolder", this.lang, ""),
            "control": {
                "controltype": "help",
                "require": false,
                "uri": "MaterialPlan.purchaseDept_PurchaseDept_ID",
                "textField": "name",
                "valueField": "id",
                "idField": "id",
                "helpId": "b524a702-7323-4d46-998e-5ba0c6abcd49",
                "displayType": "TreeList",
                "loadTreeDataType": 'default',
                "enableFullTree": false,
                "editable": false,
                "dialogTitle": this.langService.transform("QueryScheme/query-scheme-1/97d95d4b-8497-4df5-bec8-8838acc68ee7/control/help/dialogTitle", this.lang, ""),
                "singleSelect": true,
                "enableCascade": false,
                "cascadeStatus": "enable",
                "pageSize": 20,
                "pageList": "10,20,30,50,100",
                "nosearch": false,
                "expandLevel": -1,
                "context": {
                    "enableExtendLoadMethod": false
                },
                "quickSelect": {
                    "enable": false,
                    "showMore": true,
                    "showItemsCount": 10
                }
            }
        }]
                
                
}