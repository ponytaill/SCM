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
import { SuppliermaterialComponentViewmodel } from '../../viewmodels/suppliermaterialcomponentviewmodel';
import { SupplierMaRepository } from '../../models/suppliermarepository';
import { LangService } from '../../lang/lang-pipe';
import { SuppliermaterialComponentViewmodelForm } from '../../viewmodels/form/suppliermaterialcomponentviewmodelform';
import { SuppliermaterialComponentViewmodelUIState } from '../../viewmodels/uistate/suppliermaterialcomponentviewmodeluistate';
import { suppliermaterialAddItem1Handler } from '../../viewmodels/handlers/suppliermaterialadditem1handler';
import { suppliermaterialRemoveItem1Handler } from '../../viewmodels/handlers/suppliermaterialremoveitem1handler';
import { DIP_DATAIE_SERVICE } from '@gsp-dip/data-imp-exp';
var SuppliermaterialComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SuppliermaterialComponent, _super);
    function SuppliermaterialComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, farrisGridUtils, sanitizer, injector) {
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
        _this.dataGrid_suppliermaterialColumns = [];
        _this.cls = 'f-struct-is-subgrid ';
        _this.lang = "";
        _this.size = {};
        _this.enabledLanguageList = [];
        _this.tabsToolbarStates = new BehaviorSubject({});
        _this.tabsToolbarVisibleStates = new BehaviorSubject({});
        _this.dataGrid_suppliermateriallineNumberTitle = _this.langService.transform('DataGrid/dataGrid_suppliermaterial/lineNumberTitle', _this.lang, "");
        _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
            _this.focusInvalidService.focusGridCell(verifyInformations, _this.dataGrid_suppliermaterialDataGrid);
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
    SuppliermaterialComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                _this.keybindingService.register(keyBinding, function () {
                    return _this.viewModel[method]();
                });
            });
        }
        this.dataGrid_suppliermaterialColumns = [
            [
                {
                    id: 'materialId_MaterialId_MaterialCode_06287e26_x36n',
                    field: 'materialId.materialId_MaterialCode',
                    width: 120,
                    title: this.langService.transform('materialId_MaterialId_MaterialCode_06287e26_x36n', this.lang, "物料编号"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "materialId_MaterialId_MaterialCode_06287e26_6gh9", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
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
                    id: 'materialId_MaterialId_MaterialName_655b8865_v7zg',
                    field: 'materialId.materialId_MaterialName',
                    width: 120,
                    title: this.langService.transform('materialId_MaterialId_MaterialName_655b8865_v7zg', this.lang, "物料名称"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.LOOKUP,
                        options: {
                            "type": 'EditorTypes.LOOKUP',
                            "uri": 'SupplierMaterial.materialId_MaterialId_MaterialName',
                            "readonly": false,
                            "idField": 'id',
                            "singleSelect": true,
                            "textField": 'materialName',
                            "valueField": 'id',
                            "pagination": null,
                            "pageSize": 20,
                            "pageIndex": null,
                            "displayType": 'List',
                            "mapFields": { 'id': 'materialId.materialId', 'materialCode': 'materialId.materialId_MaterialCode', 'materialName': 'materialId.materialId_MaterialName', 'evePrice': 'materialId.materialId_EvePrice', 'repertory': 'materialId.materialId_Repertory', 'materialCat.materialCat_CatName': 'materialId.materialId_MaterialCat_CatName' },
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
                            "title": this.langService.transform('GridField/materialId_MaterialId_MaterialName_655b8865_v7zg/editor/LookupEdit/materialId_MaterialId_MaterialName_655b8865_1gmu/dialogTitle', this.lang, ""),
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
                    id: 'materialId_MaterialId_EvePrice_1f7da955_komu',
                    field: 'materialId.materialId_EvePrice',
                    width: 120,
                    title: this.langService.transform('materialId_MaterialId_EvePrice_1f7da955_komu', this.lang, "市场价格"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.NUMBERBOX,
                        options: { "id": "materialId_MaterialId_EvePrice_1f7da955_sbb0", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 2, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
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
                    id: 'materialId_MaterialId_Repertory_3befcd45_5gw0',
                    field: 'materialId.materialId_Repertory',
                    width: 120,
                    title: this.langService.transform('materialId_MaterialId_Repertory_3befcd45_5gw0', this.lang, "库存数量"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.NUMBERBOX,
                        options: { "id": "materialId_MaterialId_Repertory_3befcd45_2bg2", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 0, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
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
                    formatter: { "type": "number", "options": { "precision": 0, "thousand": ",", "decimal": "." } }
                },
                {
                    id: 'materialId_MaterialId_MaterialCat_CatName_9856022b_2dzp',
                    field: 'materialId.materialId_MaterialCat_CatName',
                    width: 120,
                    title: this.langService.transform('materialId_MaterialId_MaterialCat_CatName_9856022b_2dzp', this.lang, "类别名称"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "materialId_MaterialId_MaterialCat_CatName_9856022b_by5d", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
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
        this.viewModel.dataGrid_suppliermaterialColumns = this.dataGrid_suppliermaterialColumns;
        this.viewModel.dataGridColumnsName = "dataGrid_suppliermaterialColumns";
        this.onFormLoad();
    };
    SuppliermaterialComponent.prototype.ngAfterViewInit = function () {
    };
    SuppliermaterialComponent.prototype.ngOnDestroy = function () {
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
    SuppliermaterialComponent.prototype.handleSizeChange = function (size) {
        this.size = size;
    };
    SuppliermaterialComponent.prototype.onFormLoad = function () {
    };
    tslib_1.__decorate([
        ViewChild('dataGrid_suppliermaterialDataGrid'),
        tslib_1.__metadata("design:type", DatagridComponent)
    ], SuppliermaterialComponent.prototype, "dataGrid_suppliermaterialDataGrid", void 0);
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], SuppliermaterialComponent.prototype, "cls", void 0);
    SuppliermaterialComponent = tslib_1.__decorate([
        Component({
            selector: 'app-suppliermaterialcomponent',
            templateUrl: './suppliermaterialcomponent.html',
            styleUrls: ['./suppliermaterialcomponent.scss'],
            providers: [
                FARRIS_DEVKIT_FRAME_PROVIDERS,
                FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                { provide: FRAME_ID, useValue: 'suppliermaterial-component' },
                { provide: BindingData, useClass: BindingData },
                { provide: Repository, useExisting: SupplierMaRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
                { provide: Form, useClass: SuppliermaterialComponentViewmodelForm },
                { provide: UIState, useClass: SuppliermaterialComponentViewmodelUIState },
                DIP_DATAIE_SERVICE,
                { provide: ViewModel, useClass: SuppliermaterialComponentViewmodel },
                { provide: EXCEPTION_HANDLER, useValue: null },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: suppliermaterialAddItem1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: suppliermaterialRemoveItem1Handler, multi: true },
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
    ], SuppliermaterialComponent);
    return SuppliermaterialComponent;
}(FrameComponent));
export { SuppliermaterialComponent };
