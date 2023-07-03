import * as tslib_1 from "tslib";
import { Component, Injector, ViewChild, HostBinding, ElementRef } from '@angular/core';
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
import { QDP_COMMAND_SERVICE_PROVIDERS } from '@qdp/command-services';
import { ConditionDialogComponent, QueryFrameworkLayoutComponent } from '@qdp/query-framework';
import { QdpViewComponent } from '@qdp/spread';
import { RootViewmodel } from '../../viewmodels/rootviewmodel';
import { PurchaseOrderRepository } from '../../models/purchaseorderrepository';
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
import { rootviewmodelchangeLog1Handler } from '../../viewmodels/handlers/rootviewmodelchangelog1handler';
import { rootviewmodelprintSingle1Handler } from '../../viewmodels/handlers/rootviewmodelprintsingle1handler';
import { rootviewmodelsendGoods1Handler } from '../../viewmodels/handlers/rootviewmodelsendgoods1handler';
import { rootviewmodelsendGoods2Handler } from '../../viewmodels/handlers/rootviewmodelsendgoods2handler';
import { PurchaseOrderFormFrmChangeLogService as PurchaseOrderFormFrmChangeLogService1 } from '../../services/purchaseorderlist_frm_changelog';
import { PurchaseOrderListFrmControllerService as PurchaseOrderListFrmControllerService1 } from '../../services/purchaseorderlist_frm_controller';
import { PurchaseOrderProxy } from '../../models/purchaseorderproxy';
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
                "id": "toolBarItem-9y89",
                "text": _this.langService.transform('toolBarItem-9y89', _this.lang, "查看变更日志"),
                "resourceId": "toolBarItem-9y89",
                "isDP": false,
                "tipsEnable": false,
                "icon": "",
                "children": []
            }, {
                "id": "toolBarItem-lo8j",
                "text": _this.langService.transform('toolBarItem-lo8j', _this.lang, "打印"),
                "resourceId": "toolBarItem-lo8j",
                "isDP": false,
                "tipsEnable": false,
                "icon": "",
                "children": []
            }, {
                "id": "toolBarItem-kw71",
                "text": _this.langService.transform('toolBarItem-kw71', _this.lang, "提交订单"),
                "resourceId": "toolBarItem-kw71",
                "isDP": false,
                "class": "btn-danger",
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
                "id": "dadae0fb-54bb-4ed6-a545-a515d1b28040",
                "labelCode": "ID",
                "code": "ID",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/dadae0fb-54bb-4ed6-a545-a515d1b28040', _this.lang, "主键"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/dadae0fb-54bb-4ed6-a545-a515d1b28040/placeHolder', _this.lang, ""),
                "control": { "id": "dadae0fb-54bb-4ed6-a545-a515d1b28040", "controltype": "text", "require": false, "className": "", "modalConfig": { "modalCmp": null, "mapFields": null, "showHeader": true, "title": "", "showCloseButton": true, "showMaxButton": true, "width": 800, "height": 600, "showFooterButtons": true, "footerButtons": [] } }
            },
            {
                "id": "cb1fe066-486c-44e1-ac69-398598d5265f",
                "labelCode": "Version",
                "code": "Version",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/cb1fe066-486c-44e1-ac69-398598d5265f', _this.lang, "版本"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/cb1fe066-486c-44e1-ac69-398598d5265f/placeHolder', _this.lang, ""),
                "control": { "id": "cb1fe066-486c-44e1-ac69-398598d5265f", "controltype": "date", "require": false, "format": "yyyy-MM-dd", "weekSelect": false }
            },
            {
                "id": "57e3230a-9a80-48c2-97b0-785bb6c77fe2",
                "labelCode": "OrderCode",
                "code": "OrderCode",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/57e3230a-9a80-48c2-97b0-785bb6c77fe2', _this.lang, "订单编号"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/57e3230a-9a80-48c2-97b0-785bb6c77fe2/placeHolder', _this.lang, ""),
                "control": { "id": "57e3230a-9a80-48c2-97b0-785bb6c77fe2", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "547b5e91-bb43-463e-8898-bf5f87ca15f1",
                "labelCode": "OrderName",
                "code": "OrderName",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/547b5e91-bb43-463e-8898-bf5f87ca15f1', _this.lang, "订单名称"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/547b5e91-bb43-463e-8898-bf5f87ca15f1/placeHolder', _this.lang, ""),
                "control": { "id": "547b5e91-bb43-463e-8898-bf5f87ca15f1", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "77e5638b-b411-490b-88b5-dce038429686",
                "labelCode": "PurchaseDept.PurchaseDept",
                "code": "PurchaseDept",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/77e5638b-b411-490b-88b5-dce038429686', _this.lang, "采购部门"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/77e5638b-b411-490b-88b5-dce038429686/placeHolder', _this.lang, ""),
                "control": { "id": "77e5638b-b411-490b-88b5-dce038429686", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "ad7604d9-6461-4cb6-a7d9-631d4764910b",
                "labelCode": "PurchaseDept.PurchaseDept_ID",
                "code": "ID",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/ad7604d9-6461-4cb6-a7d9-631d4764910b', _this.lang, "采购部门"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/ad7604d9-6461-4cb6-a7d9-631d4764910b/placeHolder', _this.lang, ""),
                "control": {
                    "controltype": "help",
                    "require": false,
                    "uri": "PurchaseOrder.purchaseDept_PurchaseDept_ID",
                    "textField": "name",
                    "valueField": "id",
                    "idField": "id",
                    "helpId": "b524a702-7323-4d46-998e-5ba0c6abcd49",
                    "displayType": "TreeList",
                    "loadTreeDataType": 'default',
                    "enableFullTree": false,
                    "editable": false,
                    "dialogTitle": _this.langService.transform('QueryScheme/query-scheme-1/ad7604d9-6461-4cb6-a7d9-631d4764910b/control/help/dialogTitle', _this.lang, ""),
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
                "id": "2c6c71c1-fb98-47cb-a806-7e89b050d591",
                "labelCode": "PurchaseDept.PurchaseDept_name",
                "code": "name",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/2c6c71c1-fb98-47cb-a806-7e89b050d591', _this.lang, "名称"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/2c6c71c1-fb98-47cb-a806-7e89b050d591/placeHolder', _this.lang, ""),
                "control": { "id": "2c6c71c1-fb98-47cb-a806-7e89b050d591", "controltype": "text", "require": false, "className": "", "modalConfig": { "modalCmp": null, "mapFields": null, "showHeader": true, "title": "", "showCloseButton": true, "showMaxButton": true, "width": 800, "height": 600, "showFooterButtons": true, "footerButtons": [] } }
            },
            {
                "id": "57e9e09f-9b5c-4d6a-a497-4d5d7db904b4",
                "labelCode": "Purchaser.Purchaser",
                "code": "Purchaser",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/57e9e09f-9b5c-4d6a-a497-4d5d7db904b4', _this.lang, "采购员"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/57e9e09f-9b5c-4d6a-a497-4d5d7db904b4/placeHolder', _this.lang, ""),
                "control": { "id": "57e9e09f-9b5c-4d6a-a497-4d5d7db904b4", "controltype": "text", "require": false, "className": "", "modalConfig": { "modalCmp": null, "mapFields": null, "showHeader": true, "title": "", "showCloseButton": true, "showMaxButton": true, "width": 800, "height": 600, "showFooterButtons": true, "footerButtons": [] } }
            },
            {
                "id": "981a9463-30e2-41c9-884c-d234ce80bec8",
                "labelCode": "Purchaser.Purchaser_ID",
                "code": "ID",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/981a9463-30e2-41c9-884c-d234ce80bec8', _this.lang, "采购人"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/981a9463-30e2-41c9-884c-d234ce80bec8/placeHolder', _this.lang, ""),
                "control": {
                    "controltype": "help",
                    "require": false,
                    "uri": "PurchaseOrder.purchaser_Purchaser_ID",
                    "textField": "name",
                    "valueField": "id",
                    "idField": "id",
                    "helpId": "915a0b20-975a-4df1-8cfd-888c3dda0009",
                    "displayType": "List",
                    "loadTreeDataType": 'default',
                    "enableFullTree": false,
                    "editable": false,
                    "dialogTitle": _this.langService.transform('QueryScheme/query-scheme-1/981a9463-30e2-41c9-884c-d234ce80bec8/control/help/dialogTitle', _this.lang, ""),
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
                "id": "c5bf6949-627b-4cd8-9b65-42db21acf995",
                "labelCode": "Purchaser.Purchaser_Name",
                "code": "Name",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/c5bf6949-627b-4cd8-9b65-42db21acf995', _this.lang, "名称"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/c5bf6949-627b-4cd8-9b65-42db21acf995/placeHolder', _this.lang, ""),
                "control": { "id": "c5bf6949-627b-4cd8-9b65-42db21acf995", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "a51eb05d-b4c3-4c45-8a30-95eae4357279",
                "labelCode": "OrderDate",
                "code": "OrderDate",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/a51eb05d-b4c3-4c45-8a30-95eae4357279', _this.lang, "下单日期"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/a51eb05d-b4c3-4c45-8a30-95eae4357279/placeHolder', _this.lang, ""),
                "control": { "id": "a51eb05d-b4c3-4c45-8a30-95eae4357279", "controltype": "date", "require": false, "format": "yyyy-MM-dd", "weekSelect": false }
            },
            {
                "id": "a5be115d-f47f-4b2b-aa4a-0920ff22d51a",
                "labelCode": "TotalPrice",
                "code": "TotalPrice",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/a5be115d-f47f-4b2b-aa4a-0920ff22d51a', _this.lang, "物料总价"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/a5be115d-f47f-4b2b-aa4a-0920ff22d51a/placeHolder', _this.lang, ""),
                "control": { "id": "a5be115d-f47f-4b2b-aa4a-0920ff22d51a", "controltype": "number", "require": false, "className": "", "textAlign": "left", "precision": 2, "isBigNumber": false }
            }
        ];
        _this.presetFieldConfigsqueryscheme1 = [
            {
                "id": "57e3230a-9a80-48c2-97b0-785bb6c77fe2",
                "labelCode": "OrderCode",
                "code": "OrderCode",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/57e3230a-9a80-48c2-97b0-785bb6c77fe2', _this.lang, "订单编号"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/57e3230a-9a80-48c2-97b0-785bb6c77fe2/placeHolder', _this.lang, ""),
                "control": { "id": "57e3230a-9a80-48c2-97b0-785bb6c77fe2", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "547b5e91-bb43-463e-8898-bf5f87ca15f1",
                "labelCode": "OrderName",
                "code": "OrderName",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/547b5e91-bb43-463e-8898-bf5f87ca15f1', _this.lang, "订单名称"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/547b5e91-bb43-463e-8898-bf5f87ca15f1/placeHolder', _this.lang, ""),
                "control": { "id": "547b5e91-bb43-463e-8898-bf5f87ca15f1", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "ad7604d9-6461-4cb6-a7d9-631d4764910b",
                "labelCode": "PurchaseDept.PurchaseDept_ID",
                "code": "ID",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/ad7604d9-6461-4cb6-a7d9-631d4764910b', _this.lang, "采购部门"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/ad7604d9-6461-4cb6-a7d9-631d4764910b/placeHolder', _this.lang, ""),
                "control": {
                    "controltype": "help",
                    "require": false,
                    "uri": "PurchaseOrder.purchaseDept_PurchaseDept_ID",
                    "textField": "name",
                    "valueField": "id",
                    "idField": "id",
                    "helpId": "b524a702-7323-4d46-998e-5ba0c6abcd49",
                    "displayType": "TreeList",
                    "loadTreeDataType": 'default',
                    "enableFullTree": false,
                    "editable": false,
                    "dialogTitle": _this.langService.transform('QueryScheme/query-scheme-1/ad7604d9-6461-4cb6-a7d9-631d4764910b/control/help/dialogTitle', _this.lang, ""),
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
                "id": "981a9463-30e2-41c9-884c-d234ce80bec8",
                "labelCode": "Purchaser.Purchaser_ID",
                "code": "ID",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/981a9463-30e2-41c9-884c-d234ce80bec8', _this.lang, "采购人"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/981a9463-30e2-41c9-884c-d234ce80bec8/placeHolder', _this.lang, ""),
                "control": {
                    "controltype": "help",
                    "require": false,
                    "uri": "PurchaseOrder.purchaser_Purchaser_ID",
                    "textField": "name",
                    "valueField": "id",
                    "idField": "id",
                    "helpId": "915a0b20-975a-4df1-8cfd-888c3dda0009",
                    "displayType": "List",
                    "loadTreeDataType": 'default',
                    "enableFullTree": false,
                    "editable": false,
                    "dialogTitle": _this.langService.transform('QueryScheme/query-scheme-1/981a9463-30e2-41c9-884c-d234ce80bec8/control/help/dialogTitle', _this.lang, ""),
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
                'button-edit': _this.viewModel.stateMachine['canStore'],
                'button-view': !_this.viewModel.stateMachine['canView'],
                'button-delete': !_this.viewModel.stateMachine['canRemove'],
                'toolBarItem-9y89': false,
                'toolBarItem-lo8j': false,
                'toolBarItem-kw71': _this.viewModel.stateMachine['canStore'],
            };
            _this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
        });
        this.stateMachine.stateChange.subscribe(function () {
            var pageHeaderToolbarToolbarItemsvisibleStates = {
                'button-add': true,
                'button-edit': true,
                'button-view': true,
                'button-delete': true,
                'toolBarItem-9y89': true,
                'toolBarItem-lo8j': true,
                'toolBarItem-kw71': true,
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
            case 'toolBarItem-9y89':
                this.viewModel.rootviewmodelchangeLog1(args);
                break;
            case 'toolBarItem-lo8j':
                this.viewModel.rootviewmodelprintSingle1(args);
                break;
            case 'toolBarItem-kw71':
                this.viewModel.rootviewmodelsendGoods2(args);
                break;
        }
    };
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], RootComponent.prototype, "cls", void 0);
    tslib_1.__decorate([
        ViewChild(ConditionDialogComponent),
        tslib_1.__metadata("design:type", ConditionDialogComponent)
    ], RootComponent.prototype, "conditionDialog", void 0);
    tslib_1.__decorate([
        ViewChild(QdpViewComponent),
        tslib_1.__metadata("design:type", QdpViewComponent)
    ], RootComponent.prototype, "qdpViewComponent", void 0);
    tslib_1.__decorate([
        ViewChild(QueryFrameworkLayoutComponent),
        tslib_1.__metadata("design:type", QueryFrameworkLayoutComponent)
    ], RootComponent.prototype, "queryFrameworkLayoutComponent", void 0);
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
                { provide: Repository, useExisting: PurchaseOrderRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                QDP_COMMAND_SERVICE_PROVIDERS,
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: Form, useClass: RootViewmodelForm },
                { provide: StateMachine, useClass: RootViewmodelStateMachine },
                { provide: UIState, useClass: RootViewmodelUIState },
                PurchaseOrderFormFrmChangeLogService1,
                PurchaseOrderListFrmControllerService1,
                FrameworkSessionService,
                UriService,
                PurchaseOrderProxy,
                PurchaseOrderRepository,
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
                { provide: FORM_ID, useValue: "67bf7e4e-c035-4e86-829f-59fb5e345215" },
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
                { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelchangeLog1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelprintSingle1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelsendGoods1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelsendGoods2Handler, multi: true },
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
