import * as tslib_1 from "tslib";
import { Component, Injector, HostBinding, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Form, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, StateMachine, BindingData, Repository, UIState, Declaration, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { ExceptionHandler } from '@farris/command-services';
import { FrameworkSessionService, UriService } from '@farris/bef';
import { FrameworkService } from '@gsp-sys/rtf-common';
import { ApplicationParamService } from '@farris/command-services';
import { EventDeclaration } from '../../events/event';
import { FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS } from '@farris/devkit';
import { WFSubmiteService } from '@gsp-wf/rtdevkit';
import { CloudprintService } from '@gsp-svc/cloudprint';
import { WFFlowchartService } from '@gsp-wf/ui-flowchart';
import { TranslateToken, FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS } from '@farris/devkit';
import { VerifyDetailService } from '@farris/ui-verify-detail';
import { AppContext, FORM_ID, PARAM_TYPE_TRANSFORM_TOKEN } from '@farris/devkit';
import { BE_SESSION_HANDLING_STRATEGY_TOKEN } from '@farris/bef';
import { BACK_END_MESSAGE_HANDLER_TOKEN } from '@farris/devkit';
import { BackEndMessageHandler } from '@farris/command-services';
import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
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
import { MaterialPlanProxy } from '../../models/materialplanproxy';
var RootComponent = /** @class */ (function (_super) {
    tslib_1.__extends(RootComponent, _super);
    function RootComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, frameworkService, applicationParamsService, verifyService, stateMachine, sanitizer, injector) {
        var _this = _super.call(this, injector) || this;
        _this.wizardSer = wizardSer;
        _this.keybindingService = keybindingService;
        _this.langService = langService;
        _this.route = route;
        _this.router = router;
        _this.rootElement = rootElement;
        _this.localizationService = localizationService;
        _this.frmI18nSettingService = frmI18nSettingService;
        _this.frameworkService = frameworkService;
        _this.applicationParamsService = applicationParamsService;
        _this.verifyService = verifyService;
        _this.stateMachine = stateMachine;
        _this.sanitizer = sanitizer;
        _this.injector = injector;
        _this.cls = 'f-page-root  ';
        _this.lang = "";
        _this.size = {};
        _this.enabledLanguageList = [];
        _this.pageHeaderToolbarToolbarItems = [{
                "id": "button-add",
                "text": _this.langService.transform('button-add', _this.lang, "新增"),
                "resourceId": "button-add",
                "isDP": false,
                "class": "btn-primary",
                "tipsEnable": false,
                "icon": "",
                "children": []
            }, {
                "id": "button-edit",
                "text": _this.langService.transform('button-edit', _this.lang, "编辑"),
                "resourceId": "button-edit",
                "isDP": false,
                "tipsEnable": false,
                "icon": "",
                "children": []
            }, {
                "id": "button-view",
                "text": _this.langService.transform('button-view', _this.lang, "查看"),
                "resourceId": "button-view",
                "isDP": false,
                "tipsEnable": false,
                "icon": "",
                "children": []
            }, {
                "id": "button-delete",
                "text": _this.langService.transform('button-delete', _this.lang, "删除"),
                "resourceId": "button-delete",
                "isDP": false,
                "tipsEnable": false,
                "icon": "",
                "children": []
            }, {
                "id": "button-approve",
                "text": _this.langService.transform('button-approve', _this.lang, "提交审批"),
                "resourceId": "button-approve",
                "isDP": false,
                "tipsEnable": false,
                "icon": "",
                "children": []
            }, {
                "id": "button-cancel-approve",
                "text": _this.langService.transform('button-cancel-approve', _this.lang, "取消提交审批"),
                "resourceId": "button-cancel-approve",
                "isDP": false,
                "tipsEnable": false,
                "icon": "",
                "children": []
            }
        ];
        _this.pageHeaderToolbarToolbarItemsStates = new BehaviorSubject({});
        _this.pageHeaderToolbarToolbarItemsVisibleStates = new BehaviorSubject({});
        _this.tabsToolbarStates = new BehaviorSubject({});
        _this.tabsToolbarVisibleStates = new BehaviorSubject({});
        _this.sectionsToolbarStates = new BehaviorSubject({});
        _this.sectionsToolbarVisibleStates = new BehaviorSubject({});
        _this.querySchemeSection = {
            position: 'inHead',
            contents: []
        };
        _this.SectionqueryschemesectionMainTitle = _this.langService.transform('Section/query-scheme-section/mainTitle', _this.lang, "主标题");
        _this.SectionqueryschemesectionSubTitle = _this.langService.transform('Section/query-scheme-section/subTitle', _this.lang, "");
        _this.QuerySolutionqueryscheme1 = _this.langService.transform('query-scheme-1', _this.lang, "默认筛选方案");
        _this.fieldConfigsqueryscheme1 = [
            {
                "id": "f73f5927-a02c-491c-9b5c-cd74be14d2fa",
                "labelCode": "ID",
                "code": "ID",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/f73f5927-a02c-491c-9b5c-cd74be14d2fa', _this.lang, "主键"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/f73f5927-a02c-491c-9b5c-cd74be14d2fa/placeHolder', _this.lang, ""),
                "control": { "id": "f73f5927-a02c-491c-9b5c-cd74be14d2fa", "controltype": "text", "require": false, "className": "", "modalConfig": { "modalCmp": null, "mapFields": null, "showHeader": true, "title": "", "showCloseButton": true, "showMaxButton": true, "width": 800, "height": 600, "showFooterButtons": true, "footerButtons": [] } }
            },
            {
                "id": "040f40dd-c841-498f-86c5-d8d58afb91d7",
                "labelCode": "Version",
                "code": "Version",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/040f40dd-c841-498f-86c5-d8d58afb91d7', _this.lang, "版本"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/040f40dd-c841-498f-86c5-d8d58afb91d7/placeHolder', _this.lang, ""),
                "control": { "id": "040f40dd-c841-498f-86c5-d8d58afb91d7", "controltype": "date", "require": false, "format": "yyyy-MM-dd", "weekSelect": false }
            },
            {
                "id": "6a6f7e09-0101-468f-ae3f-40c76c0f06b0",
                "labelCode": "BillStatus.BillState",
                "code": "BillState",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/6a6f7e09-0101-468f-ae3f-40c76c0f06b0', _this.lang, "状态"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/6a6f7e09-0101-468f-ae3f-40c76c0f06b0/placeHolder', _this.lang, ""),
                "control": {
                    "controltype": "dropdown",
                    "require": false,
                    "valueType": "1",
                    "multiSelect": false,
                    "enumValues": [
                        {
                            "value": "Billing",
                            "name": _this.langService.transform('QueryScheme/query-scheme-1/6a6f7e09-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Billing', _this.lang, "制单")
                        },
                        {
                            "value": "SubmitApproval",
                            "name": _this.langService.transform('QueryScheme/query-scheme-1/6a6f7e09-0101-468f-ae3f-40c76c0f06b0/control/enumValues/SubmitApproval', _this.lang, "提交审批")
                        },
                        {
                            "value": "Approved",
                            "name": _this.langService.transform('QueryScheme/query-scheme-1/6a6f7e09-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Approved', _this.lang, "审批通过")
                        },
                        {
                            "value": "ApprovalNotPassed",
                            "name": _this.langService.transform('QueryScheme/query-scheme-1/6a6f7e09-0101-468f-ae3f-40c76c0f06b0/control/enumValues/ApprovalNotPassed', _this.lang, "审批不通过")
                        }
                    ]
                }
            },
            {
                "id": "502cfc60-ad8f-4da3-a430-c8a7f2162135",
                "labelCode": "ProcessInstance.ProcessInstance",
                "code": "ProcessInstance",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/502cfc60-ad8f-4da3-a430-c8a7f2162135', _this.lang, "流程实例"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/502cfc60-ad8f-4da3-a430-c8a7f2162135/placeHolder', _this.lang, ""),
                "control": { "id": "502cfc60-ad8f-4da3-a430-c8a7f2162135", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "a50f04eb-fc31-457c-8c85-0c5ab0cae592",
                "labelCode": "Applicant.Applicant",
                "code": "Applicant",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/a50f04eb-fc31-457c-8c85-0c5ab0cae592', _this.lang, "制单人"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/a50f04eb-fc31-457c-8c85-0c5ab0cae592/placeHolder', _this.lang, ""),
                "control": { "id": "a50f04eb-fc31-457c-8c85-0c5ab0cae592", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "493e5d57-896f-46dd-a9a7-af9a5a54d0a1",
                "labelCode": "Applicant.Applicant_ID",
                "code": "ID",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/493e5d57-896f-46dd-a9a7-af9a5a54d0a1', _this.lang, "ID"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/493e5d57-896f-46dd-a9a7-af9a5a54d0a1/placeHolder', _this.lang, ""),
                "control": { "id": "493e5d57-896f-46dd-a9a7-af9a5a54d0a1", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "36e050c8-bb2f-4649-8974-9b4af77eeb21",
                "labelCode": "Applicant.Applicant_Name",
                "code": "Name",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/36e050c8-bb2f-4649-8974-9b4af77eeb21', _this.lang, "名称"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/36e050c8-bb2f-4649-8974-9b4af77eeb21/placeHolder', _this.lang, ""),
                "control": { "id": "36e050c8-bb2f-4649-8974-9b4af77eeb21", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a",
                "labelCode": "DeliveryDate",
                "code": "DeliveryDate",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a', _this.lang, "交货日期"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a/placeHolder', _this.lang, ""),
                "control": { "id": "19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a", "controltype": "date", "require": false, "format": "yyyy-MM-dd", "weekSelect": false }
            },
            {
                "id": "f9f7f6fd-68a4-430c-856a-adda5d47fd52",
                "labelCode": "PurchaseDept.PurchaseDept",
                "code": "PurchaseDept",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/f9f7f6fd-68a4-430c-856a-adda5d47fd52', _this.lang, "采购部门"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/f9f7f6fd-68a4-430c-856a-adda5d47fd52/placeHolder', _this.lang, ""),
                "control": { "id": "f9f7f6fd-68a4-430c-856a-adda5d47fd52", "controltype": "text", "require": false, "className": "", "modalConfig": { "modalCmp": null, "mapFields": null, "showHeader": true, "title": "", "showCloseButton": true, "showMaxButton": true, "width": 800, "height": 600, "showFooterButtons": true, "footerButtons": [] } }
            },
            {
                "id": "97d95d4b-8497-4df5-bec8-8838acc68ee7",
                "labelCode": "PurchaseDept.PurchaseDept_ID",
                "code": "ID",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/97d95d4b-8497-4df5-bec8-8838acc68ee7', _this.lang, "采购部门"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/97d95d4b-8497-4df5-bec8-8838acc68ee7/placeHolder', _this.lang, ""),
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
                    "dialogTitle": _this.langService.transform('QueryScheme/query-scheme-1/97d95d4b-8497-4df5-bec8-8838acc68ee7/control/help/dialogTitle', _this.lang, ""),
                    "singleSelect": true,
                    "enableCascade": false,
                    "pageSize": 20,
                    "pageList": "10,20,30,50,100",
                    "nosearch": false,
                    "expandLevel": -1,
                    "context": {
                        "enableExtendLoadMethod": true
                    }
                }
            },
            {
                "id": "53265c41-b6d3-4977-9dde-450cb0505c91",
                "labelCode": "PurchaseDept.PurchaseDept_name",
                "code": "name",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/53265c41-b6d3-4977-9dde-450cb0505c91', _this.lang, "名称"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/53265c41-b6d3-4977-9dde-450cb0505c91/placeHolder', _this.lang, ""),
                "control": { "id": "53265c41-b6d3-4977-9dde-450cb0505c91", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "210f7065-4c19-4009-81e3-3cafec40792a",
                "labelCode": "PlanCode",
                "code": "PlanCode",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/210f7065-4c19-4009-81e3-3cafec40792a', _this.lang, "计划编号"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/210f7065-4c19-4009-81e3-3cafec40792a/placeHolder', _this.lang, ""),
                "control": { "id": "210f7065-4c19-4009-81e3-3cafec40792a", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "4f24ebc0-acb5-4039-8ee5-9e1fd296f133",
                "labelCode": "PlanName",
                "code": "PlanName",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/4f24ebc0-acb5-4039-8ee5-9e1fd296f133', _this.lang, "计划名称"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/4f24ebc0-acb5-4039-8ee5-9e1fd296f133/placeHolder', _this.lang, ""),
                "control": { "id": "4f24ebc0-acb5-4039-8ee5-9e1fd296f133", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "75108363-b463-4d9a-8ee1-899a42e20e04",
                "labelCode": "IsPurchaseOrder",
                "code": "IsPurchaseOrder",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/75108363-b463-4d9a-8ee1-899a42e20e04', _this.lang, "是否已生成采购订单"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/75108363-b463-4d9a-8ee1-899a42e20e04/placeHolder', _this.lang, ""),
                "control": {
                    "controltype": "dropdown",
                    "require": false,
                    "valueType": "2",
                    "multiSelect": false,
                    "enumValues": [
                        {
                            "value": "true",
                            "name": _this.langService.transform('QueryScheme/query-scheme-1/75108363-b463-4d9a-8ee1-899a42e20e04/control/enumValues/true', _this.lang, "true")
                        },
                        {
                            "value": "false",
                            "name": _this.langService.transform('QueryScheme/query-scheme-1/75108363-b463-4d9a-8ee1-899a42e20e04/control/enumValues/false', _this.lang, "false")
                        }
                    ]
                }
            },
            {
                "id": "da36cd69-7e29-4add-85f0-ea43a2691188",
                "labelCode": "TotalPrice",
                "code": "TotalPrice",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/da36cd69-7e29-4add-85f0-ea43a2691188', _this.lang, "物料总价"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/da36cd69-7e29-4add-85f0-ea43a2691188/placeHolder', _this.lang, ""),
                "control": { "id": "da36cd69-7e29-4add-85f0-ea43a2691188", "controltype": "number", "require": false, "className": "", "textAlign": "left", "precision": 2, "isBigNumber": false }
            },
            {
                "id": "f039a9da-8150-4935-8af3-836b7aca3bef",
                "labelCode": "Purchaser.Purchaser",
                "code": "Purchaser",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/f039a9da-8150-4935-8af3-836b7aca3bef', _this.lang, "采购员"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/f039a9da-8150-4935-8af3-836b7aca3bef/placeHolder', _this.lang, ""),
                "control": { "id": "f039a9da-8150-4935-8af3-836b7aca3bef", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "8a441b44-720b-4e36-aa28-a20d4008658e",
                "labelCode": "Purchaser.Purchaser_ID",
                "code": "ID",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/8a441b44-720b-4e36-aa28-a20d4008658e', _this.lang, "ID"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/8a441b44-720b-4e36-aa28-a20d4008658e/placeHolder', _this.lang, ""),
                "control": { "id": "8a441b44-720b-4e36-aa28-a20d4008658e", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "e646ee4c-4ae8-4df5-a9b4-0c39402adff8",
                "labelCode": "Purchaser.Purchaser_Name",
                "code": "Name",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/e646ee4c-4ae8-4df5-a9b4-0c39402adff8', _this.lang, "名称"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/e646ee4c-4ae8-4df5-a9b4-0c39402adff8/placeHolder', _this.lang, ""),
                "control": { "id": "e646ee4c-4ae8-4df5-a9b4-0c39402adff8", "controltype": "text", "require": false, "className": "" }
            }
        ];
        _this.presetFieldConfigsqueryscheme1 = [
            {
                "id": "210f7065-4c19-4009-81e3-3cafec40792a",
                "labelCode": "PlanCode",
                "code": "PlanCode",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/210f7065-4c19-4009-81e3-3cafec40792a', _this.lang, "计划编号"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/210f7065-4c19-4009-81e3-3cafec40792a/placeHolder', _this.lang, ""),
                "control": { "id": "210f7065-4c19-4009-81e3-3cafec40792a", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "4f24ebc0-acb5-4039-8ee5-9e1fd296f133",
                "labelCode": "PlanName",
                "code": "PlanName",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/4f24ebc0-acb5-4039-8ee5-9e1fd296f133', _this.lang, "计划名称"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/4f24ebc0-acb5-4039-8ee5-9e1fd296f133/placeHolder', _this.lang, ""),
                "control": { "id": "4f24ebc0-acb5-4039-8ee5-9e1fd296f133", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a",
                "labelCode": "DeliveryDate",
                "code": "DeliveryDate",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a', _this.lang, "交货日期"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a/placeHolder', _this.lang, ""),
                "control": { "id": "19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a", "controltype": "date", "require": false, "format": "yyyy-MM-dd", "weekSelect": false }
            },
            {
                "id": "97d95d4b-8497-4df5-bec8-8838acc68ee7",
                "labelCode": "PurchaseDept.PurchaseDept_ID",
                "code": "ID",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/97d95d4b-8497-4df5-bec8-8838acc68ee7', _this.lang, "采购部门"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/97d95d4b-8497-4df5-bec8-8838acc68ee7/placeHolder', _this.lang, ""),
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
                    "dialogTitle": _this.langService.transform('QueryScheme/query-scheme-1/97d95d4b-8497-4df5-bec8-8838acc68ee7/control/help/dialogTitle', _this.lang, ""),
                    "singleSelect": true,
                    "enableCascade": false,
                    "pageSize": 20,
                    "pageList": "10,20,30,50,100",
                    "nosearch": false,
                    "expandLevel": -1,
                    "context": {
                        "enableExtendLoadMethod": true
                    }
                }
            }
        ];
        _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        if (_this.frmI18nSettingService) {
            var i18nSetting = _this.frmI18nSettingService.getSetting();
            if (i18nSetting && i18nSetting.languages && i18nSetting.languages.length > 0) {
                i18nSetting.languages.forEach(function (item) {
                    _this.enabledLanguageList.push({
                        code: item.code,
                        name: item.name
                    });
                });
            }
            else {
                console.warn("get current enable languages is null. if this occurs,please ensure the form into the framework.");
                _this.enabledLanguageList.push({ "code": "en", "name": "English" });
                _this.enabledLanguageList.push({ "code": "zh-CHS", "name": "中文简体" });
            }
        }
        return _this;
    }
    RootComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                _this.keybindingService.register(keyBinding, function () {
                    return _this.viewModel[method]();
                });
            });
        }
        this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
            if (verifyInformations.length) {
                _this.verifyService.createVerify({
                    'parent': _this.rootElement,
                    'verifyList': verifyInformations,
                    'showType': 'all'
                });
            }
            else {
                _this.verifyService.clear();
            }
        });
        this.stateMachine.stateChange.subscribe(function () {
            var pageHeaderToolbarToolbarItemsstates = {
                'button-add': !_this.viewModel.stateMachine['canAdd'],
                'button-edit': _this.viewModel.stateMachine['canOperation'],
                'button-view': !_this.viewModel.stateMachine['canView'],
                'button-delete': _this.viewModel.stateMachine['canOperation'],
                'button-approve': !_this.viewModel.stateMachine['canApprove'],
                'button-cancel-approve': !_this.viewModel.stateMachine['canCancelApprove'],
            };
            _this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
        });
        this.stateMachine.stateChange.subscribe(function () {
            var pageHeaderToolbarToolbarItemsvisibleStates = {
                'button-add': true,
                'button-edit': true,
                'button-view': true,
                'button-delete': true,
                'button-approve': true,
                'button-cancel-approve': true,
            };
            _this.pageHeaderToolbarToolbarItemsVisibleStates.next(pageHeaderToolbarToolbarItemsvisibleStates);
        });
        this.pageHeaderToolbarToolbarItems.forEach(function (toolbarItem) {
            var transformText = _this.langService.transform(toolbarItem.resourceId, _this.lang, toolbarItem.text);
            if (transformText) {
                toolbarItem.text = transformText;
            }
        });
        this.applicationParamsService.parseParams(this.route, this.frameworkService, this.viewModel, function () {
            _this.onFormLoad();
        });
    };
    RootComponent.prototype.ngAfterViewInit = function () {
    };
    RootComponent.prototype.ngOnDestroy = function () {
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
    };
    RootComponent.prototype.handleSizeChange = function (size) {
        this.size = size;
    };
    RootComponent.prototype.onFormLoad = function () {
        this.viewModel.Filter1();
    };
    RootComponent.prototype.pageHeaderToolbarClickHandler = function (args) {
        switch (args.id) {
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
    };
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], RootComponent.prototype, "cls", void 0);
    RootComponent = tslib_1.__decorate([
        Component({
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
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [WizardService,
            KeybindingService,
            LangService,
            ActivatedRoute,
            Router,
            ElementRef,
            LocalizationService,
            FrmI18nSettingService,
            FrameworkService,
            ApplicationParamService,
            VerifyDetailService,
            StateMachine,
            DomSanitizer,
            Injector])
    ], RootComponent);
    return RootComponent;
}(FrameComponent));
export { RootComponent };
