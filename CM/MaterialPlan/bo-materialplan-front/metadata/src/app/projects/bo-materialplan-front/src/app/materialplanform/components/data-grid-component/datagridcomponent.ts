
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

import { EditorTypes } from '@farris/ui-datagrid-editors';
import { CalculationType, DatagridComponent, GRID_SETTINGS_HTTP } from '@farris/ui-datagrid';
import { CommonUtils } from '@farris/ui-common';

import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { __decorate, __metadata } from 'tslib';

import { DataGridComponentViewmodel } from '../../viewmodels/datagridcomponentviewmodel';
import { MaterialPlanRepository } from '../../models/materialplanrepository';
import { LangService } from '../../lang/lang-pipe';

import { DataGridComponentViewmodelForm } from '../../viewmodels/form/datagridcomponentviewmodelform';
import { DataGridComponentViewmodelUIState } from '../../viewmodels/uistate/datagridcomponentviewmodeluistate';
import { ChangePage1Handler } from '../../viewmodels/handlers/changepage1handler';
import { datagridcomponentviewmodelView1Handler } from '../../viewmodels/handlers/datagridcomponentviewmodelview1handler';

@Component({
    selector: 'app-datagridcomponent',
    templateUrl: './datagridcomponent.html',
    styleUrls: ['./datagridcomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'data-grid-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: MaterialPlanRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
        { provide: Form, useClass: DataGridComponentViewmodelForm },
        { provide: UIState, useClass: DataGridComponentViewmodelUIState },
        { provide: ViewModel, useClass: DataGridComponentViewmodel },
        { provide: EXCEPTION_HANDLER, useValue: null },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: ChangePage1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: datagridcomponentviewmodelView1Handler, multi: true },
]
})
export class DataGridComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('dataGridDataGrid')
    dataGridDataGrid: DatagridComponent;
    dataGridColumns =[];
    @ViewChild('dataGridbillStatus_billStateTemplate') dataGridbillStatus_billStateTemplate: TemplateRef<any>;
    @ViewChild('dataGridplanCodeTemplate') dataGridplanCodeTemplate: TemplateRef<any>;

    @HostBinding('class')
    cls = 'f-struct-wrapper f-utils-fill-flex-column ';
    public viewModel: DataGridComponentViewmodel;
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
        private farrisGridUtils: CommonUtils,
        private sanitizer: DomSanitizer,
        public injector: Injector
    ) {
        super(injector);
        this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        this.viewModel.verifycationChanged.subscribe((verifyInformations: any) => {
            this.focusInvalidService.focusGridCell(verifyInformations, this.dataGridDataGrid);
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
        this.dataGridColumns =[
            [
                {
                    id: 'billStatus_BillState_6a6f7e09_pbh3',
                    field: 'billStatus.billState',
                    width: 120,
                    title: this.langService.transform('billStatus_BillState_6a6f7e09_pbh3', this.lang, "审批状态"),
                    dataType: 'enum',
                    template: this.dataGridbillStatus_billStateTemplate,
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: 
                    {
                        "type": "enum",
                        "options":
                        {
                            "valueField": "value",
                            "textField": "name",
                            "data": [
                                {
                                    "value": "Billing",
                                    "name": this.langService.transform('GridField/billStatus_BillState_6a6f7e09_pbh3/enumData/Billing', this.lang, "制单")
                                },
                                {
                                    "value": "SubmitApproval",
                                    "name": this.langService.transform('GridField/billStatus_BillState_6a6f7e09_pbh3/enumData/SubmitApproval', this.lang, "提交审批")
                                },
                                {
                                    "value": "Approved",
                                    "name": this.langService.transform('GridField/billStatus_BillState_6a6f7e09_pbh3/enumData/Approved', this.lang, "审批通过")
                                },
                                {
                                    "value": "ApprovalNotPassed",
                                    "name": this.langService.transform('GridField/billStatus_BillState_6a6f7e09_pbh3/enumData/ApprovalNotPassed', this.lang, "审批不通过")
                                }]
                        }
                    }
                },
                {
                    id: 'planCode_210f7065_7a35',
                    field: 'planCode',
                    width: 120,
                    title: this.langService.transform('planCode_210f7065_7a35', this.lang, "计划编号"),
                    dataType: 'string',
                    template: this.dataGridplanCodeTemplate,
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'applicant_Applicant_Name_36e050c8_radi',
                    field: 'applicant.applicant_Name',
                    width: 120,
                    title: this.langService.transform('applicant_Applicant_Name_36e050c8_radi', this.lang, "制单人"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'purchaseDept_PurchaseDept_name_53265c41_3q8s',
                    field: 'purchaseDept.purchaseDept_name',
                    width: 120,
                    title: this.langService.transform('purchaseDept_PurchaseDept_name_53265c41_3q8s', this.lang, "采购部门"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'purchaser_Purchaser_Name_e646ee4c_5c6k',
                    field: 'purchaser.purchaser_Name',
                    width: 120,
                    title: this.langService.transform('purchaser_Purchaser_Name_e646ee4c_5c6k', this.lang, "采购员"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'deliveryDate_19bd9bfb_nnlo',
                    field: 'deliveryDate',
                    width: 120,
                    title: this.langService.transform('deliveryDate_19bd9bfb_nnlo', this.lang, "交货日期"),
                    dataType: 'datetime',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {"type":"datetime","options":{"format":"yyyy-MM-dd HH:mm:ss"}}
                },
                {
                    id: 'planName_4f24ebc0_a9kt',
                    field: 'planName',
                    width: 120,
                    title: this.langService.transform('planName_4f24ebc0_a9kt', this.lang, "计划名称"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'totalPrice_da36cd69_48ad',
                    field: 'totalPrice',
                    width: 120,
                    title: this.langService.transform('totalPrice_da36cd69_48ad', this.lang, "物料总价"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                            calculationType: CalculationType.sum,
                        },
                        formatter: {"type":"none"},
                        styler: (value, rowData, rowIndex) => {
    return {
        style: {
            color: 'red',
            fontWeight: 800
        }
    };
},
                        align: 'center'
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {"type":"number","options":{"precision":2,"thousand":",","decimal":"."}}
                },
                {
                    id: 'isPurchaseOrder_75108363_6uu3',
                    field: 'isPurchaseOrder',
                    width: 120,
                    title: this.langService.transform('isPurchaseOrder_75108363_6uu3', this.lang, "是否已生成采购订单"),
                    dataType: 'boolean',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: 
                    {
                        "type": "boolean",
                        "options":
                        {
            
                            "trueText": '<span class="f-icon f-icon-checkbox-checked f-datagrid-default-show-icon"></span>',
                            "falseText": '<span class="f-icon f-icon-checkbox f-datagrid-default-show-icon"></span>',
                    }
                }
                }
            ]
        ]; 
        this.viewModel.dataGridColumns= this.dataGridColumns;
        this.viewModel.dataGridColumnsName= "dataGridColumns";
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
        this.farrisGridUtils = null;
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
    SectiondatagridsectionMainTitle = this.langService.transform('Section/data-grid-section/mainTitle', this.lang, "");
    SectiondatagridsectionSubTitle = this.langService.transform('Section/data-grid-section/subTitle', this.lang, "");
    dataGridlineNumberTitle = this.langService.transform('DataGrid/dataGrid/lineNumberTitle', this.lang, "序");
}