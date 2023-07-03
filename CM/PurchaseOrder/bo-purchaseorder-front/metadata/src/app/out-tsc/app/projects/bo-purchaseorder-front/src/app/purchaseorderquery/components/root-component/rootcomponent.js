import * as tslib_1 from "tslib";
import { Component, Injector, ViewChild, HostBinding, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Form, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, BindingData, Repository, UIState, Declaration, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
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
var RootComponent = /** @class */ (function (_super) {
    tslib_1.__extends(RootComponent, _super);
    function RootComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, menuController, frameworkService, applicationParamsService, verifyService, sanitizer, injector) {
        var _this = _super.call(this, injector) || this;
        _this.wizardSer = wizardSer;
        _this.keybindingService = keybindingService;
        _this.langService = langService;
        _this.route = route;
        _this.router = router;
        _this.rootElement = rootElement;
        _this.localizationService = localizationService;
        _this.frmI18nSettingService = frmI18nSettingService;
        _this.menuController = menuController;
        _this.frameworkService = frameworkService;
        _this.applicationParamsService = applicationParamsService;
        _this.verifyService = verifyService;
        _this.sanitizer = sanitizer;
        _this.injector = injector;
        _this.cls = 'f-page-root  ';
        _this.lang = "";
        _this.size = {};
        _this.enabledLanguageList = [];
        _this.tabsToolbarStates = new BehaviorSubject({});
        _this.tabsToolbarVisibleStates = new BehaviorSubject({});
        _this.SectionqueryschemesectionMainTitle = _this.langService.transform('Section/query-scheme-section/mainTitle', _this.lang, "主标题");
        _this.SectionqueryschemesectionSubTitle = _this.langService.transform('Section/query-scheme-section/subTitle', _this.lang, "");
        _this.QuerySolutionqueryscheme1 = _this.langService.transform('query-scheme-1', _this.lang, "默认筛选方案");
        _this.fieldConfigsqueryscheme1 = [
            {
                "id": "f8898411-9a81-4c9f-8c30-cbaed73a5ab0",
                "labelCode": "ID",
                "code": "ID",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/f8898411-9a81-4c9f-8c30-cbaed73a5ab0', _this.lang, "ID"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/f8898411-9a81-4c9f-8c30-cbaed73a5ab0/placeHolder', _this.lang, ""),
                "control": { "id": "f8898411-9a81-4c9f-8c30-cbaed73a5ab0", "controltype": "text", "require": false, "className": "", "modalConfig": { "modalCmp": null, "mapFields": null, "showHeader": true, "title": "", "showCloseButton": true, "showMaxButton": true, "width": 800, "height": 600, "showFooterButtons": true, "footerButtons": [] } }
            },
            {
                "id": "22e61c91-a90c-42b6-a214-3f922955f595",
                "labelCode": "OrderName",
                "code": "OrderName",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/22e61c91-a90c-42b6-a214-3f922955f595', _this.lang, "订单名称"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/22e61c91-a90c-42b6-a214-3f922955f595/placeHolder', _this.lang, ""),
                "control": { "id": "22e61c91-a90c-42b6-a214-3f922955f595", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "9a2239eb-37f6-40eb-8338-5a02ddc190b8",
                "labelCode": "OrderDate",
                "code": "OrderDate",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/9a2239eb-37f6-40eb-8338-5a02ddc190b8', _this.lang, "下单日期"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/9a2239eb-37f6-40eb-8338-5a02ddc190b8/placeHolder', _this.lang, ""),
                "control": { "id": "9a2239eb-37f6-40eb-8338-5a02ddc190b8", "controltype": "date-time", "require": false, "enableCustomFormat": true, "format": "yyyy-MM-dd HH:mm:ss", "returnFormat": "yyyy-MM-dd HH:mm:ss" }
            },
            {
                "id": "9db630bc-9ca2-4e08-aa8f-73447c45a9e7",
                "labelCode": "OrderCode",
                "code": "OrderCode",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/9db630bc-9ca2-4e08-aa8f-73447c45a9e7', _this.lang, "订单编号"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/9db630bc-9ca2-4e08-aa8f-73447c45a9e7/placeHolder', _this.lang, ""),
                "control": { "id": "9db630bc-9ca2-4e08-aa8f-73447c45a9e7", "controltype": "text", "require": false, "className": "", "modalConfig": { "modalCmp": null, "mapFields": null, "showHeader": true, "title": "", "showCloseButton": true, "showMaxButton": true, "width": 800, "height": 600, "showFooterButtons": true, "footerButtons": [] } }
            }
        ];
        _this.presetFieldConfigsqueryscheme1 = [
            {
                "id": "22e61c91-a90c-42b6-a214-3f922955f595",
                "labelCode": "OrderName",
                "code": "OrderName",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/22e61c91-a90c-42b6-a214-3f922955f595', _this.lang, "订单名称"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/22e61c91-a90c-42b6-a214-3f922955f595/placeHolder', _this.lang, ""),
                "control": { "id": "22e61c91-a90c-42b6-a214-3f922955f595", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "9a2239eb-37f6-40eb-8338-5a02ddc190b8",
                "labelCode": "OrderDate",
                "code": "OrderDate",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/9a2239eb-37f6-40eb-8338-5a02ddc190b8', _this.lang, "下单日期"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/9a2239eb-37f6-40eb-8338-5a02ddc190b8/placeHolder', _this.lang, ""),
                "control": { "id": "9a2239eb-37f6-40eb-8338-5a02ddc190b8", "controltype": "date-time", "require": false, "enableCustomFormat": true, "format": "yyyy-MM-dd HH:mm:ss", "returnFormat": "yyyy-MM-dd HH:mm:ss" }
            },
            {
                "id": "9db630bc-9ca2-4e08-aa8f-73447c45a9e7",
                "labelCode": "OrderCode",
                "code": "OrderCode",
                "name": _this.langService.transform('QueryScheme/query-scheme-1/9db630bc-9ca2-4e08-aa8f-73447c45a9e7', _this.lang, "订单编号"),
                "placeHolder": _this.langService.transform('QueryScheme/query-scheme-1/9db630bc-9ca2-4e08-aa8f-73447c45a9e7/placeHolder', _this.lang, ""),
                "control": { "id": "9db630bc-9ca2-4e08-aa8f-73447c45a9e7", "controltype": "text", "require": false, "className": "", "modalConfig": { "modalCmp": null, "mapFields": null, "showHeader": true, "title": "", "showCloseButton": true, "showMaxButton": true, "width": 800, "height": 600, "showFooterButtons": true, "footerButtons": [] } }
            }
        ];
        _this.QdpFrameworkQueryNameqdpframeworkcomponent = _this.langService.transform('qdp-framework-component', _this.lang, "采购订单查询");
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
        this.menuController = null;
        this.frameworkService = null;
        this.applicationParamsService = null;
        this.verifyService.clear();
        this.verifyService = null;
        this.sanitizer = null;
        this.injector = null;
        this.enabledLanguageList = [];
    };
    RootComponent.prototype.handleSizeChange = function (size) {
        this.size = size;
    };
    RootComponent.prototype.onFormLoad = function () {
    };
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], RootComponent.prototype, "cls", void 0);
    tslib_1.__decorate([
        ViewChild('menu', { read: ElementRef }),
        tslib_1.__metadata("design:type", ElementRef)
    ], RootComponent.prototype, "menuElement", void 0);
    tslib_1.__decorate([
        ViewChild(QdpViewComponent, { read: ElementRef }),
        tslib_1.__metadata("design:type", ElementRef)
    ], RootComponent.prototype, "qdpViewElementRef", void 0);
    tslib_1.__decorate([
        ViewChild(QdpViewComponent),
        tslib_1.__metadata("design:type", Object)
    ], RootComponent.prototype, "qdpView", void 0);
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
        }),
        tslib_1.__metadata("design:paramtypes", [WizardService,
            KeybindingService,
            LangService,
            ActivatedRoute,
            Router,
            ElementRef,
            LocalizationService,
            FrmI18nSettingService,
            MenuControllerService,
            FrameworkService,
            ApplicationParamService,
            VerifyDetailService,
            DomSanitizer,
            Injector])
    ], RootComponent);
    return RootComponent;
}(FrameComponent));
export { RootComponent };
