import * as tslib_1 from "tslib";
import { Component, Injector, ViewChild, HostBinding, TemplateRef, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Form, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, BindingData, Repository, UIState, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { FocusInvalidService } from '@farris/command-services';
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
import { DataGridComponentViewmodel } from '../../viewmodels/datagridcomponentviewmodel';
import { PurchaseOrderRepository } from '../../models/purchaseorderrepository';
import { LangService } from '../../lang/lang-pipe';
import { DataGridComponentViewmodelForm } from '../../viewmodels/form/datagridcomponentviewmodelform';
import { DataGridComponentViewmodelUIState } from '../../viewmodels/uistate/datagridcomponentviewmodeluistate';
import { ChangePage1Handler } from '../../viewmodels/handlers/changepage1handler';
import { datagridcomponentviewmodelEdit1Handler } from '../../viewmodels/handlers/datagridcomponentviewmodeledit1handler';
import { datagridcomponentviewmodelRemove1Handler } from '../../viewmodels/handlers/datagridcomponentviewmodelremove1handler';
var DataGridComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DataGridComponent, _super);
    function DataGridComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, farrisGridUtils, sanitizer, injector) {
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
        _this.dataGridColumns = [];
        _this.cls = 'f-struct-wrapper f-utils-fill-flex-column ';
        _this.lang = "";
        _this.size = {};
        _this.enabledLanguageList = [];
        _this.tabsToolbarStates = new BehaviorSubject({});
        _this.tabsToolbarVisibleStates = new BehaviorSubject({});
        _this.SectiondatagridsectionMainTitle = _this.langService.transform('Section/data-grid-section/mainTitle', _this.lang, "");
        _this.SectiondatagridsectionSubTitle = _this.langService.transform('Section/data-grid-section/subTitle', _this.lang, "");
        _this.dataGridRowStyle = function (rowData) {
            if (rowData.totalPrice > 10000) {
                return {
                    style: {
                        color: 'red',
                    }
                };
            }
        };
        _this.dataGridlineNumberTitle = _this.langService.transform('DataGrid/dataGrid/lineNumberTitle', _this.lang, "序");
        _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
            _this.focusInvalidService.focusGridCell(verifyInformations, _this.dataGridDataGrid);
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
    DataGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                _this.keybindingService.register(keyBinding, function () {
                    return _this.viewModel[method]();
                });
            });
        }
        this.dataGridColumns = [
            [
                {
                    id: 'orderCode_57e3230a_bnu4',
                    field: 'orderCode',
                    width: 120,
                    title: this.langService.transform('orderCode_57e3230a_bnu4', this.lang, "订单编号"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
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
                    id: 'orderName_547b5e91_ui0i',
                    field: 'orderName',
                    width: 120,
                    title: this.langService.transform('orderName_547b5e91_ui0i', this.lang, "订单名称"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
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
                    id: 'purchaseDept_PurchaseDept_name_2c6c71c1_a32l',
                    field: 'purchaseDept.purchaseDept_name',
                    width: 120,
                    title: this.langService.transform('purchaseDept_PurchaseDept_name_2c6c71c1_a32l', this.lang, "名称"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
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
                    id: 'purchaser_Purchaser_Name_c5bf6949_w6ao',
                    field: 'purchaser.purchaser_Name',
                    width: 120,
                    title: this.langService.transform('purchaser_Purchaser_Name_c5bf6949_w6ao', this.lang, "名称"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
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
                    id: 'orderDate_a51eb05d_5ohq',
                    field: 'orderDate',
                    width: 120,
                    title: this.langService.transform('orderDate_a51eb05d_5ohq', this.lang, "下单日期"),
                    dataType: 'date',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
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
                    formatter: { "type": "datetime", "options": { "format": "yyyy-MM-dd" } }
                },
                {
                    id: 'totalPrice_a5be115d_7il8',
                    field: 'totalPrice',
                    width: 120,
                    title: this.langService.transform('totalPrice_a5be115d_7il8', this.lang, "物料总价"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
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
                    formatter: { "type": "number", "options": { "precision": 2, "thousand": ",", "decimal": "." } }
                },
                {
                    id: 'isFinished_91d7235a_1sa3',
                    field: 'isFinished',
                    width: 120,
                    title: this.langService.transform('isFinished_91d7235a_1sa3', this.lang, "入库状态"),
                    dataType: 'enum',
                    template: this.dataGridisFinishedTemplate,
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
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
                    formatter: {
                        "type": "enum",
                        "options": {
                            "valueField": "value",
                            "textField": "name",
                            "data": [
                                {
                                    "value": "yes",
                                    "name": this.langService.transform('GridField/isFinished_91d7235a_1sa3/enumData/yes', this.lang, "已入库")
                                },
                                {
                                    "value": "no",
                                    "name": this.langService.transform('GridField/isFinished_91d7235a_1sa3/enumData/no', this.lang, "未入库")
                                }
                            ]
                        }
                    }
                }
            ]
        ];
        this.viewModel.dataGridColumns = this.dataGridColumns;
        this.viewModel.dataGridColumnsName = "dataGridColumns";
        this.onFormLoad();
    };
    DataGridComponent.prototype.ngAfterViewInit = function () {
    };
    DataGridComponent.prototype.ngOnDestroy = function () {
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
    DataGridComponent.prototype.handleSizeChange = function (size) {
        this.size = size;
    };
    DataGridComponent.prototype.onFormLoad = function () {
    };
    tslib_1.__decorate([
        ViewChild('dataGridDataGrid'),
        tslib_1.__metadata("design:type", DatagridComponent)
    ], DataGridComponent.prototype, "dataGridDataGrid", void 0);
    tslib_1.__decorate([
        ViewChild('dataGridisFinishedTemplate'),
        tslib_1.__metadata("design:type", TemplateRef)
    ], DataGridComponent.prototype, "dataGridisFinishedTemplate", void 0);
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], DataGridComponent.prototype, "cls", void 0);
    tslib_1.__decorate([
        ViewChild(ConditionDialogComponent),
        tslib_1.__metadata("design:type", ConditionDialogComponent)
    ], DataGridComponent.prototype, "conditionDialog", void 0);
    tslib_1.__decorate([
        ViewChild(QdpViewComponent),
        tslib_1.__metadata("design:type", QdpViewComponent)
    ], DataGridComponent.prototype, "qdpViewComponent", void 0);
    tslib_1.__decorate([
        ViewChild(QueryFrameworkLayoutComponent),
        tslib_1.__metadata("design:type", QueryFrameworkLayoutComponent)
    ], DataGridComponent.prototype, "queryFrameworkLayoutComponent", void 0);
    DataGridComponent = tslib_1.__decorate([
        Component({
            selector: 'app-datagridcomponent',
            templateUrl: './datagridcomponent.html',
            styleUrls: ['./datagridcomponent.scss'],
            providers: [
                FARRIS_DEVKIT_FRAME_PROVIDERS,
                FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                { provide: FRAME_ID, useValue: 'data-grid-component' },
                { provide: BindingData, useClass: BindingData },
                { provide: Repository, useExisting: PurchaseOrderRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                QDP_COMMAND_SERVICE_PROVIDERS,
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
                { provide: Form, useClass: DataGridComponentViewmodelForm },
                { provide: UIState, useClass: DataGridComponentViewmodelUIState },
                { provide: ViewModel, useClass: DataGridComponentViewmodel },
                { provide: EXCEPTION_HANDLER, useValue: null },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: ChangePage1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: datagridcomponentviewmodelEdit1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: datagridcomponentviewmodelRemove1Handler, multi: true },
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
    ], DataGridComponent);
    return DataGridComponent;
}(FrameComponent));
export { DataGridComponent };
