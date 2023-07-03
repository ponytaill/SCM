import * as tslib_1 from "tslib";
import { Component, Injector, ViewChild, HostBinding, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Form, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, BindingData, Repository, UIState, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { FocusInvalidService } from '@farris/command-services';
import { EditorTypes } from '@farris/ui-datagrid-editors';
import { DatagridComponent, GRID_SETTINGS_HTTP } from '@farris/ui-datagrid';
import { CommonUtils } from '@farris/ui-common';
import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { QDP_COMMAND_SERVICE_PROVIDERS } from '@qdp/command-services';
import { ConditionDialogComponent, QueryFrameworkLayoutComponent } from '@qdp/query-framework';
import { QdpViewComponent } from '@qdp/spread';
import { OrderdetailsComponentViewmodel } from '../../viewmodels/orderdetailscomponentviewmodel';
import { PurchaseOrderRepository } from '../../models/purchaseorderrepository';
import { LangService } from '../../lang/lang-pipe';
import { OrderdetailsComponentViewmodelForm } from '../../viewmodels/form/orderdetailscomponentviewmodelform';
import { OrderdetailsComponentViewmodelUIState } from '../../viewmodels/uistate/orderdetailscomponentviewmodeluistate';
import { orderdetailsAddItem1Handler } from '../../viewmodels/handlers/orderdetailsadditem1handler';
import { orderdetailsRemoveItem1Handler } from '../../viewmodels/handlers/orderdetailsremoveitem1handler';
var OrderdetailsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(OrderdetailsComponent, _super);
    function OrderdetailsComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, farrisGridUtils, sanitizer, injector) {
        var _this = _super.call(this, injector) || this;
        _this.wizardSer = wizardSer;
        _this.keybindingService = keybindingService;
        _this.langService = langService;
        _this.route = route;
        _this.router = router;
        _this.rootElement = rootElement;
        _this.localizationService = localizationService;
        _this.frmI18nSettingService = frmI18nSettingService;
        _this.focusInvalidService = focusInvalidService;
        _this.farrisGridUtils = farrisGridUtils;
        _this.sanitizer = sanitizer;
        _this.injector = injector;
        _this.dataGrid_orderdetailsColumns = [];
        _this.cls = 'f-struct-is-subgrid ';
        _this.lang = "";
        _this.size = {};
        _this.enabledLanguageList = [];
        _this.tabsToolbarStates = new BehaviorSubject({});
        _this.tabsToolbarVisibleStates = new BehaviorSubject({});
        _this.dataGrid_orderdetailslineNumberTitle = _this.langService.transform('DataGrid/dataGrid_orderdetails/lineNumberTitle', _this.lang, "");
        _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
            _this.focusInvalidService.focusGridCell(verifyInformations, _this.dataGrid_orderdetailsDataGrid);
        });
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
    OrderdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                _this.keybindingService.register(keyBinding, function () {
                    return _this.viewModel[method]();
                });
            });
        }
        this.dataGrid_orderdetailsColumns = [
            [
                {
                    id: 'materialId_MaterialId_MaterialCode_4b4e149b_20en',
                    field: 'materialId.materialId_MaterialCode',
                    width: 120,
                    title: this.langService.transform('materialId_MaterialId_MaterialCode_4b4e149b_20en', this.lang, "物料编号"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.LOOKUP,
                        options: {
                            "type": 'EditorTypes.LOOKUP',
                            "uri": 'OrderDetails.materialId_MaterialId_MaterialCode',
                            "readonly": false,
                            "idField": 'id',
                            "singleSelect": true,
                            "textField": 'materialName',
                            "valueField": 'id',
                            "pagination": null,
                            "pageSize": 20,
                            "pageIndex": null,
                            "displayType": 'List',
                            "mapFields": { 'id': 'materialId.materialId,materialId.materialId_ID', 'materialCode': 'materialId.materialId_MaterialCode', 'materialName': 'materialId.materialId_MaterialName', 'materialCat.materialCat_CatName': 'materialId.materialId_MaterialCat_CatName', 'evePrice': 'materialId.materialId_EvePrice' },
                            "expandLevel": -1,
                            "cascadeStatus": 'enable',
                            "editable": false,
                            "enableCascade": false,
                            "quickSelect": {
                                "enable": false,
                                "showItemsCount": 10,
                                "showMore": true
                            },
                            "useFavorite": true,
                            "enableFullTree": false,
                            "enableClear": true,
                            "loadTreeDataType": 'default',
                            "useTip": false,
                            "selectFirstInNav": false,
                            "loadDataWhenOpen": true,
                            "title": this.langService.transform('GridField/materialId_MaterialId_MaterialCode_4b4e149b_20en/editor/LookupEdit/materialId_MaterialId_MaterialCode_4b4e149b_2ctd/dialogTitle', this.lang, ""),
                            "nosearch": false,
                            "context": {
                                "enableExtendLoadMethod": true
                            },
                            "isRecordSize": false
                        }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'materialId_MaterialId_MaterialName_a5c03a88_809u',
                    field: 'materialId.materialId_MaterialName',
                    width: 120,
                    title: this.langService.transform('materialId_MaterialId_MaterialName_a5c03a88_809u', this.lang, "物料名称"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "materialId_MaterialId_MaterialName_a5c03a88_02gq", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: true,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'materialId_MaterialId_MaterialCat_CatName_d031c736_pe2r',
                    field: 'materialId.materialId_MaterialCat_CatName',
                    width: 120,
                    title: this.langService.transform('materialId_MaterialId_MaterialCat_CatName_d031c736_pe2r', this.lang, "类别名称"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "materialId_MaterialId_MaterialCat_CatName_d031c736_0alv", "title": "类别名称", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: true,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'materialId_MaterialId_EvePrice_e3cd5498_b9ip',
                    field: 'materialId.materialId_EvePrice',
                    width: 120,
                    title: this.langService.transform('materialId_MaterialId_EvePrice_e3cd5498_b9ip', this.lang, "市场价格"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.NUMBERBOX,
                        options: { "id": "materialId_MaterialId_EvePrice_e3cd5498_49kl", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 2, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: true,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: { "type": "number", "options": { "precision": 2, "thousand": ",", "decimal": "." } }
                },
                {
                    id: 'amount_58fd9353_fn66',
                    field: 'amount',
                    width: 120,
                    title: this.langService.transform('amount_58fd9353_fn66', this.lang, "物料数量"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.NUMBERBOX,
                        options: { "id": "amount_58fd9353_0crg", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 0, "step": 1, "min": 0, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: { "type": "number", "options": { "precision": 0, "thousand": ",", "decimal": "." } }
                },
                {
                    id: 'supplier_Supplier_SupplierCode_ae2bec36_wkv2',
                    field: 'supplier.supplier_SupplierCode',
                    width: 120,
                    title: this.langService.transform('supplier_Supplier_SupplierCode_ae2bec36_wkv2', this.lang, "供应商编号"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.LOOKUP,
                        options: {
                            "type": 'EditorTypes.LOOKUP',
                            "uri": 'OrderDetails.supplier_Supplier_SupplierCode',
                            "readonly": false,
                            "idField": 'id',
                            "singleSelect": true,
                            "textField": 'supplierCode',
                            "valueField": 'id',
                            "pagination": null,
                            "pageSize": 20,
                            "pageIndex": null,
                            "displayType": 'List',
                            "mapFields": { 'id': 'supplier.supplier,supplier.supplier_ID', 'supplierName': 'supplier.supplier_SupplierName', 'supplierCode': 'supplier.supplier_SupplierCode', 'contactsEmail': 'supplier.supplier_ContactsEmail', 'contactsAddress': 'supplier.supplier_ContactsAddress' },
                            "expandLevel": -1,
                            "cascadeStatus": 'enable',
                            "editable": false,
                            "enableCascade": false,
                            "quickSelect": {
                                "enable": false,
                                "showItemsCount": 10,
                                "showMore": true
                            },
                            "useFavorite": true,
                            "enableFullTree": false,
                            "enableClear": true,
                            "loadTreeDataType": 'default',
                            "useTip": false,
                            "selectFirstInNav": false,
                            "loadDataWhenOpen": true,
                            "title": this.langService.transform('GridField/supplier_Supplier_SupplierCode_ae2bec36_wkv2/editor/LookupEdit/supplier_Supplier_SupplierCode_ae2bec36_6df1/dialogTitle', this.lang, ""),
                            "nosearch": false,
                            "context": {
                                "enableExtendLoadMethod": true
                            },
                            "isRecordSize": false
                        }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'supplier_Supplier_SupplierName_63c38913_j2pw',
                    field: 'supplier.supplier_SupplierName',
                    width: 120,
                    title: this.langService.transform('supplier_Supplier_SupplierName_63c38913_j2pw', this.lang, "供应商名称"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "supplier_Supplier_SupplierName_63c38913_ac4f", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: true,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'supplier_Supplier_ContactsEmail_bbc84198_n9pv',
                    field: 'supplier.supplier_ContactsEmail',
                    width: 120,
                    title: this.langService.transform('supplier_Supplier_ContactsEmail_bbc84198_n9pv', this.lang, "联系人邮箱"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "supplier_Supplier_ContactsEmail_bbc84198_dkci", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 100 }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: true,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'supplier_Supplier_ContactsAddress_65f7e3ff_389o',
                    field: 'supplier.supplier_ContactsAddress',
                    width: 120,
                    title: this.langService.transform('supplier_Supplier_ContactsAddress_65f7e3ff_389o', this.lang, "办公地址"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "supplier_Supplier_ContactsAddress_65f7e3ff_ggel", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 100 }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: true,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                }
            ]
        ];
        this.viewModel.dataGrid_orderdetailsColumns = this.dataGrid_orderdetailsColumns;
        this.viewModel.dataGridColumnsName = "dataGrid_orderdetailsColumns";
        this.onFormLoad();
    };
    OrderdetailsComponent.prototype.ngAfterViewInit = function () {
    };
    OrderdetailsComponent.prototype.ngOnDestroy = function () {
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
        this.farrisGridUtils = null;
        this.sanitizer = null;
        this.injector = null;
        this.enabledLanguageList = [];
    };
    OrderdetailsComponent.prototype.handleSizeChange = function (size) {
        this.size = size;
    };
    OrderdetailsComponent.prototype.onFormLoad = function () {
    };
    tslib_1.__decorate([
        ViewChild('dataGrid_orderdetailsDataGrid'),
        tslib_1.__metadata("design:type", DatagridComponent)
    ], OrderdetailsComponent.prototype, "dataGrid_orderdetailsDataGrid", void 0);
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], OrderdetailsComponent.prototype, "cls", void 0);
    tslib_1.__decorate([
        ViewChild(ConditionDialogComponent),
        tslib_1.__metadata("design:type", ConditionDialogComponent)
    ], OrderdetailsComponent.prototype, "conditionDialog", void 0);
    tslib_1.__decorate([
        ViewChild(QdpViewComponent),
        tslib_1.__metadata("design:type", QdpViewComponent)
    ], OrderdetailsComponent.prototype, "qdpViewComponent", void 0);
    tslib_1.__decorate([
        ViewChild(QueryFrameworkLayoutComponent),
        tslib_1.__metadata("design:type", QueryFrameworkLayoutComponent)
    ], OrderdetailsComponent.prototype, "queryFrameworkLayoutComponent", void 0);
    OrderdetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-orderdetailscomponent',
            templateUrl: './orderdetailscomponent.html',
            styleUrls: ['./orderdetailscomponent.scss'],
            providers: [
                FARRIS_DEVKIT_FRAME_PROVIDERS,
                FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                { provide: FRAME_ID, useValue: 'orderdetails-component' },
                { provide: BindingData, useClass: BindingData },
                { provide: Repository, useExisting: PurchaseOrderRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                QDP_COMMAND_SERVICE_PROVIDERS,
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
                { provide: Form, useClass: OrderdetailsComponentViewmodelForm },
                { provide: UIState, useClass: OrderdetailsComponentViewmodelUIState },
                { provide: ViewModel, useClass: OrderdetailsComponentViewmodel },
                { provide: EXCEPTION_HANDLER, useValue: null },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: orderdetailsAddItem1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: orderdetailsRemoveItem1Handler, multi: true },
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
            FocusInvalidService,
            CommonUtils,
            DomSanitizer,
            Injector])
    ], OrderdetailsComponent);
    return OrderdetailsComponent;
}(FrameComponent));
export { OrderdetailsComponent };
