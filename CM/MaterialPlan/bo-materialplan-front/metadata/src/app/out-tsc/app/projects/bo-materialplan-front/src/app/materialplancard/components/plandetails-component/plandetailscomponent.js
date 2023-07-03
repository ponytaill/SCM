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
import { CalculationType, DatagridComponent, GRID_SETTINGS_HTTP } from '@farris/ui-datagrid';
import { CommonUtils } from '@farris/ui-common';
import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { PlandetailsComponentViewmodel } from '../../viewmodels/plandetailscomponentviewmodel';
import { MaterialPlanRepository } from '../../models/materialplanrepository';
import { LangService } from '../../lang/lang-pipe';
import { PlandetailsComponentViewmodelForm } from '../../viewmodels/form/plandetailscomponentviewmodelform';
import { PlandetailsComponentViewmodelUIState } from '../../viewmodels/uistate/plandetailscomponentviewmodeluistate';
import { plandetailsAddItem1Handler } from '../../viewmodels/handlers/plandetailsadditem1handler';
import { plandetailsRemoveItem1Handler } from '../../viewmodels/handlers/plandetailsremoveitem1handler';
import { rootviewmodelInsert1Handler } from '../../viewmodels/handlers/rootviewmodelinsert1handler';
import { rootviewmodelAddItem1Handler } from '../../viewmodels/handlers/rootviewmodeladditem1handler';
import { DIP_DATAIE_SERVICE } from '@gsp-dip/data-imp-exp';
var PlandetailsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PlandetailsComponent, _super);
    function PlandetailsComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, farrisGridUtils, sanitizer, injector) {
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
        _this.dataGrid_plandetailsColumns = [];
        _this.cls = 'f-struct-is-subgrid ';
        _this.lang = "";
        _this.size = {};
        _this.enabledLanguageList = [];
        _this.tabsToolbarStates = new BehaviorSubject({});
        _this.tabsToolbarVisibleStates = new BehaviorSubject({});
        _this.dataGrid_plandetailslineNumberTitle = _this.langService.transform('DataGrid/dataGrid_plandetails/lineNumberTitle', _this.lang, "");
        _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
            _this.focusInvalidService.focusGridCell(verifyInformations, _this.dataGrid_plandetailsDataGrid);
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
    PlandetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                _this.keybindingService.register(keyBinding, function () {
                    return _this.viewModel[method]();
                });
            });
        }
        this.dataGrid_plandetailsColumns = [
            [
                {
                    id: 'materialId_MaterialId_MaterialCode_08ca00c7_ao7g',
                    field: 'materialId.materialId_MaterialCode',
                    width: 120,
                    title: this.langService.transform('materialId_MaterialId_MaterialCode_08ca00c7_ao7g', this.lang, "物料编号"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.LOOKUP,
                        options: {
                            "type": 'EditorTypes.LOOKUP',
                            "uri": 'PlanDetails.materialId_MaterialId_MaterialCode',
                            "readonly": false,
                            "idField": 'id',
                            "singleSelect": true,
                            "textField": 'materialCode',
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
                            "title": this.langService.transform('GridField/materialId_MaterialId_MaterialCode_08ca00c7_ao7g/editor/LookupEdit/materialId_MaterialId_MaterialCode_08ca00c7_bba6/dialogTitle', this.lang, ""),
                            "nosearch": false,
                            "context": {
                                "enableExtendLoadMethod": true
                            },
                            "isRecordSize": false
                        }
                    },
                    sortable: true,
                    validators: [{ "type": "required", "message": "该字段不能为空！" }],
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
                    id: 'materialId_MaterialId_MaterialName_0d109a4f_7r0m',
                    field: 'materialId.materialId_MaterialName',
                    width: 120,
                    title: this.langService.transform('materialId_MaterialId_MaterialName_0d109a4f_7r0m', this.lang, "物料名称"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "materialId_MaterialId_MaterialName_0d109a4f_c6sl", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
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
                    id: 'materialId_MaterialId_EvePrice_998dde09_udfc',
                    field: 'materialId.materialId_EvePrice',
                    width: 120,
                    title: this.langService.transform('materialId_MaterialId_EvePrice_998dde09_udfc', this.lang, "市场价格"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.NUMBERBOX,
                        options: { "id": "materialId_MaterialId_EvePrice_998dde09_znlr", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 2, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
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
                    formatter: { "type": "number", "options": { "precision": 2, "thousand": ",", "prefix": "￥", "suffix": "", "decimal": "." } }
                },
                {
                    id: 'materialId_MaterialId_MaterialCat_CatName_e6f48613_344b',
                    field: 'materialId.materialId_MaterialCat_CatName',
                    width: 120,
                    title: this.langService.transform('materialId_MaterialId_MaterialCat_CatName_e6f48613_344b', this.lang, "物料类别"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "materialId_MaterialId_MaterialCat_CatName_e6f48613_vwbv", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
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
                    id: 'materiaAmount_143b71b6_wiiv',
                    field: 'materialAmount',
                    width: 120,
                    title: this.langService.transform('materiaAmount_143b71b6_wiiv', this.lang, "物料数量"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.NUMBERBOX,
                        options: { "id": "materiaAmount_143b71b6_5utc", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 0, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": false }
                    },
                    sortable: true,
                    footer: {
                        options: {
                            calculationType: CalculationType.sum,
                        },
                        formatter: { "precision": 0, "thousand": ",", "prefix": "", "suffix": "件", "decimal": ".", "type": "number" },
                        styler: function (value, rowData, rowIndex) {
                            return {
                                style: {
                                    color: 'red',
                                    fontWeight: 800
                                }
                            };
                        },
                        align: 'center'
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
                    id: 'supplier_Supplier_SupplierCode_1d93ad3d_alr2',
                    field: 'supplier.supplier_SupplierCode',
                    width: 120,
                    title: this.langService.transform('supplier_Supplier_SupplierCode_1d93ad3d_alr2', this.lang, "供应商编号"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.LOOKUP,
                        options: {
                            "type": 'EditorTypes.LOOKUP',
                            "uri": 'PlanDetails.supplier_Supplier_SupplierCode',
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
                            "title": this.langService.transform('GridField/supplier_Supplier_SupplierCode_1d93ad3d_alr2/editor/LookupEdit/supplier_Supplier_SupplierCode_1d93ad3d_6lav/dialogTitle', this.lang, ""),
                            "nosearch": false,
                            "context": {
                                "enableExtendLoadMethod": true
                            },
                            "isRecordSize": false
                        }
                    },
                    sortable: true,
                    validators: [{ "type": "required", "message": "该字段不能为空！" }],
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
                    id: 'supplier_Supplier_SupplierName_a4a0e5d0_ju44',
                    field: 'supplier.supplier_SupplierName',
                    width: 120,
                    title: this.langService.transform('supplier_Supplier_SupplierName_a4a0e5d0_ju44', this.lang, "供应商名称"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "supplier_Supplier_SupplierName_a4a0e5d0_2by7", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
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
                    id: 'supplier_Supplier_ContactsEmail_9f031afb_8tfe',
                    field: 'supplier.supplier_ContactsEmail',
                    width: 120,
                    title: this.langService.transform('supplier_Supplier_ContactsEmail_9f031afb_8tfe', this.lang, "联系人邮箱"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "supplier_Supplier_ContactsEmail_9f031afb_4z9p", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 100 }
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
                    id: 'supplier_Supplier_ContactsAddress_27ddf90a_w9yq',
                    field: 'supplier.supplier_ContactsAddress',
                    width: 120,
                    title: this.langService.transform('supplier_Supplier_ContactsAddress_27ddf90a_w9yq', this.lang, "办公地址"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "supplier_Supplier_ContactsAddress_27ddf90a_zycw", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 100 }
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
                }
            ]
        ];
        this.viewModel.dataGrid_plandetailsColumns = this.dataGrid_plandetailsColumns;
        this.viewModel.dataGridColumnsName = "dataGrid_plandetailsColumns";
        this.onFormLoad();
    };
    PlandetailsComponent.prototype.ngAfterViewInit = function () {
    };
    PlandetailsComponent.prototype.ngOnDestroy = function () {
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
    PlandetailsComponent.prototype.handleSizeChange = function (size) {
        this.size = size;
    };
    PlandetailsComponent.prototype.onFormLoad = function () {
    };
    tslib_1.__decorate([
        ViewChild('dataGrid_plandetailsDataGrid'),
        tslib_1.__metadata("design:type", DatagridComponent)
    ], PlandetailsComponent.prototype, "dataGrid_plandetailsDataGrid", void 0);
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], PlandetailsComponent.prototype, "cls", void 0);
    PlandetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-plandetailscomponent',
            templateUrl: './plandetailscomponent.html',
            styleUrls: ['./plandetailscomponent.scss'],
            providers: [
                FARRIS_DEVKIT_FRAME_PROVIDERS,
                FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                { provide: FRAME_ID, useValue: 'plandetails-component' },
                { provide: BindingData, useClass: BindingData },
                { provide: Repository, useExisting: MaterialPlanRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
                { provide: Form, useClass: PlandetailsComponentViewmodelForm },
                { provide: UIState, useClass: PlandetailsComponentViewmodelUIState },
                DIP_DATAIE_SERVICE,
                { provide: ViewModel, useClass: PlandetailsComponentViewmodel },
                { provide: EXCEPTION_HANDLER, useValue: null },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: plandetailsAddItem1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: plandetailsRemoveItem1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelInsert1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelAddItem1Handler, multi: true },
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
    ], PlandetailsComponent);
    return PlandetailsComponent;
}(FrameComponent));
export { PlandetailsComponent };
