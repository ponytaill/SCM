import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var ɵ0 = { type: 'string' };
var PlandetailsComponentViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(PlandetailsComponentViewmodel, _super);
    function PlandetailsComponentViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/planDetailss';
        _this.dom = {
            "dataGrid_plandetails": {
                "type": "DataGrid",
                "resourceId": "dataGrid_plandetails",
                "visible": {
                    "useQuote": false,
                    "isExpression": false,
                    "value": true
                },
                "id": "dataGrid_plandetails",
                "size": {},
                "readonly": {
                    "useQuote": false,
                    "isExpression": false,
                    "value": false
                },
                "fields": [
                    {
                        "type": "GridField",
                        "resourceId": "materialId_MaterialId_MaterialCode_08ca00c7_ao7g",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "materialId_MaterialId_MaterialCode_08ca00c7_ao7g",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": false
                        },
                        "binding": {
                            "type": "Form",
                            "path": "materialId_MaterialId_MaterialCode",
                            "fullPath": "MaterialId.MaterialId_MaterialCode",
                            "isExpression": false,
                            "value": "materialId_MaterialId_MaterialCode"
                        },
                        "dataField": "materialId.materialId_MaterialCode",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "物料编号",
                        "editor": {
                            "type": "LookupEdit",
                            "isTextArea": true,
                            "resourceId": "materialId_MaterialId_MaterialCode_08ca00c7_bba6",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "materialId_MaterialId_MaterialCode_08ca00c7_bba6",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "materialId_MaterialId_MaterialCode",
                                "fullPath": "MaterialId.MaterialId_MaterialCode",
                                "isExpression": false,
                                "value": "materialId_MaterialId_MaterialCode"
                            },
                            "disable": false,
                            "dataSource": {
                                "uri": "PlanDetails.materialId_MaterialId_MaterialCode",
                                "displayName": "物料管理帮助",
                                "idField": "id",
                                "type": "ViewObject"
                            },
                            "valueField": "id",
                            "textField": "materialCode",
                            "multiSelect": false,
                            "pageSize": 20,
                            "mapFields": {
                                "id": "materialId.materialId,materialId.materialId_ID",
                                "materialCode": "materialId.materialId_MaterialCode",
                                "materialName": "materialId.materialId_MaterialName",
                                "materialCat.materialCat_CatName": "materialId.materialId_MaterialCat_CatName",
                                "evePrice": "materialId.materialId_EvePrice"
                            },
                            "displayType": "List",
                            "enableExtendLoadMethod": true,
                            "editable": false,
                            "noSearch": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "useTip": false,
                            "useFavorite": true,
                            "enableToSelect": false,
                            "isRecordSize": false,
                            "expandLevel": -1,
                            "enableFullTree": false,
                            "context": {
                                "enableExtendLoadMethod": true
                            },
                            "loadTreeDataType": "default",
                            "enableClear": true,
                            "enableCascade": false
                        },
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "aggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "formatter": {
                            "type": "none"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "materialId_MaterialId_MaterialName_0d109a4f_7r0m",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "materialId_MaterialId_MaterialName_0d109a4f_7r0m",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "binding": {
                            "type": "Form",
                            "path": "materialId_MaterialId_MaterialName",
                            "fullPath": "MaterialId.MaterialId_MaterialName",
                            "isExpression": false,
                            "value": "materialId_MaterialId_MaterialName"
                        },
                        "dataField": "materialId.materialId_MaterialName",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "物料名称",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "materialId_MaterialId_MaterialName_0d109a4f_c6sl",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "materialId_MaterialId_MaterialName_0d109a4f_c6sl",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "materialId_MaterialId_MaterialName",
                                "isExpression": false,
                                "value": "materialId_MaterialId_MaterialName"
                            },
                            "disable": false,
                            "maxLength": 36,
                            "isPassword": false,
                            "enableViewPassword": false
                        },
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "aggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "formatter": {
                            "type": "none"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "materialId_MaterialId_EvePrice_998dde09_udfc",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "materialId_MaterialId_EvePrice_998dde09_udfc",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "binding": {
                            "type": "Form",
                            "path": "materialId_MaterialId_EvePrice",
                            "fullPath": "MaterialId.MaterialId_EvePrice",
                            "isExpression": false,
                            "value": "materialId_MaterialId_EvePrice"
                        },
                        "dataField": "materialId.materialId_EvePrice",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "市场价格",
                        "editor": {
                            "type": "FarrisNumberSpinner",
                            "isTextArea": true,
                            "resourceId": "materialId_MaterialId_EvePrice_998dde09_znlr",
                            "defaultI18nValue": "数值框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "materialId_MaterialId_EvePrice_998dde09_znlr",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "materialId_MaterialId_EvePrice",
                                "isExpression": false,
                                "value": "materialId_MaterialId_EvePrice"
                            },
                            "disable": false,
                            "step": 1,
                            "useThousands": true,
                            "textAlign": "left",
                            "precision": 2
                        },
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "aggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "formatter": {
                            "type": "number",
                            "precision": 2,
                            "thousand": ",",
                            "decimal": ".",
                            "prefix": "￥",
                            "suffix": ""
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "materialId_MaterialId_MaterialCat_CatName_e6f48613_344b",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "materialId_MaterialId_MaterialCat_CatName_e6f48613_344b",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "binding": {
                            "type": "Form",
                            "path": "materialId_MaterialId_MaterialCat_CatName",
                            "fullPath": "MaterialId.MaterialId_MaterialCat_CatName",
                            "isExpression": false,
                            "value": "materialId_MaterialId_MaterialCat_CatName"
                        },
                        "dataField": "materialId.materialId_MaterialCat_CatName",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "物料类别",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "materialId_MaterialId_MaterialCat_CatName_e6f48613_vwbv",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "materialId_MaterialId_MaterialCat_CatName_e6f48613_vwbv",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "materialId_MaterialId_MaterialCat_CatName",
                                "isExpression": false,
                                "value": "materialId_MaterialId_MaterialCat_CatName"
                            },
                            "disable": false,
                            "maxLength": 36,
                            "isPassword": false,
                            "enableViewPassword": false
                        },
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "aggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "formatter": {
                            "type": "none"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "materiaAmount_143b71b6_wiiv",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "materiaAmount_143b71b6_wiiv",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": false
                        },
                        "binding": {
                            "type": "Form",
                            "path": "materialAmount",
                            "fullPath": "MaterialAmount",
                            "isExpression": false,
                            "value": "materialAmount"
                        },
                        "dataField": "materialAmount",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "物料数量",
                        "editor": {
                            "type": "FarrisNumberSpinner",
                            "isTextArea": true,
                            "resourceId": "materiaAmount_143b71b6_5utc",
                            "defaultI18nValue": "数值框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "materiaAmount_143b71b6_5utc",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "materialAmount",
                                "fullPath": "MaterialAmount",
                                "isExpression": false,
                                "value": "materialAmount"
                            },
                            "disable": false,
                            "step": 1,
                            "useThousands": true,
                            "textAlign": "left",
                            "precision": 0
                        },
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "aggregate": {
                            "type": "sum",
                            "formatter": {
                                "precision": 0,
                                "thousand": ",",
                                "prefix": "",
                                "suffix": "件",
                                "decimal": ".",
                                "type": "number"
                            },
                            "align": "center",
                            "styler": "(value, rowData, rowIndex) => {\r\n    return {\r\n        style: {\r\n            color: 'red',\r\n            fontWeight: 800\r\n        }\r\n    };\r\n}"
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "updateOn": "blur",
                        "formatter": {
                            "type": "number",
                            "precision": 0,
                            "thousand": ",",
                            "decimal": "."
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "supplier_Supplier_SupplierCode_1d93ad3d_alr2",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "supplier_Supplier_SupplierCode_1d93ad3d_alr2",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": false
                        },
                        "binding": {
                            "type": "Form",
                            "path": "supplier_Supplier_SupplierCode",
                            "fullPath": "Supplier.Supplier_SupplierCode",
                            "isExpression": false,
                            "value": "supplier_Supplier_SupplierCode"
                        },
                        "dataField": "supplier.supplier_SupplierCode",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "供应商编号",
                        "editor": {
                            "type": "LookupEdit",
                            "isTextArea": true,
                            "resourceId": "supplier_Supplier_SupplierCode_1d93ad3d_6lav",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "supplier_Supplier_SupplierCode_1d93ad3d_6lav",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "supplier_Supplier_SupplierCode",
                                "fullPath": "Supplier.Supplier_SupplierCode",
                                "isExpression": false,
                                "value": "supplier_Supplier_SupplierCode"
                            },
                            "disable": false,
                            "dataSource": {
                                "uri": "PlanDetails.supplier_Supplier_SupplierCode",
                                "displayName": "供应商管理帮助",
                                "idField": "id",
                                "type": "ViewObject"
                            },
                            "valueField": "id",
                            "textField": "supplierCode",
                            "multiSelect": false,
                            "pageSize": 20,
                            "mapFields": {
                                "id": "supplier.supplier,supplier.supplier_ID",
                                "supplierName": "supplier.supplier_SupplierName",
                                "supplierCode": "supplier.supplier_SupplierCode",
                                "contactsEmail": "supplier.supplier_ContactsEmail",
                                "contactsAddress": "supplier.supplier_ContactsAddress"
                            },
                            "displayType": "List",
                            "enableExtendLoadMethod": true,
                            "editable": false,
                            "noSearch": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "useTip": false,
                            "useFavorite": true,
                            "enableToSelect": true,
                            "isRecordSize": false,
                            "expandLevel": -1,
                            "enableFullTree": false,
                            "context": {
                                "enableExtendLoadMethod": true
                            },
                            "loadTreeDataType": "default",
                            "enableClear": true,
                            "enableCascade": false
                        },
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "aggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "formatter": {
                            "type": "none"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "supplier_Supplier_SupplierName_a4a0e5d0_ju44",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "supplier_Supplier_SupplierName_a4a0e5d0_ju44",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "binding": {
                            "type": "Form",
                            "path": "supplier_Supplier_SupplierName",
                            "fullPath": "Supplier.Supplier_SupplierName",
                            "isExpression": false,
                            "value": "supplier_Supplier_SupplierName"
                        },
                        "dataField": "supplier.supplier_SupplierName",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "供应商名称",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "supplier_Supplier_SupplierName_a4a0e5d0_2by7",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "supplier_Supplier_SupplierName_a4a0e5d0_2by7",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "supplier_Supplier_SupplierName",
                                "isExpression": false,
                                "value": "supplier_Supplier_SupplierName"
                            },
                            "disable": false,
                            "maxLength": 36,
                            "isPassword": false,
                            "enableViewPassword": false
                        },
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "aggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "formatter": {
                            "type": "none"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "supplier_Supplier_ContactsEmail_9f031afb_8tfe",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "supplier_Supplier_ContactsEmail_9f031afb_8tfe",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": false
                        },
                        "binding": {
                            "type": "Form",
                            "path": "supplier_Supplier_ContactsEmail",
                            "fullPath": "Supplier.Supplier_ContactsEmail",
                            "isExpression": false,
                            "value": "supplier_Supplier_ContactsEmail"
                        },
                        "dataField": "supplier.supplier_ContactsEmail",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "联系人邮箱",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "supplier_Supplier_ContactsEmail_9f031afb_4z9p",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "supplier_Supplier_ContactsEmail_9f031afb_4z9p",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "supplier_Supplier_ContactsEmail",
                                "isExpression": false,
                                "value": "supplier_Supplier_ContactsEmail"
                            },
                            "disable": false,
                            "maxLength": 100,
                            "isPassword": false,
                            "enableViewPassword": false
                        },
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "aggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "formatter": {
                            "type": "none"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "supplier_Supplier_ContactsAddress_27ddf90a_w9yq",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "supplier_Supplier_ContactsAddress_27ddf90a_w9yq",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": false
                        },
                        "binding": {
                            "type": "Form",
                            "path": "supplier_Supplier_ContactsAddress",
                            "fullPath": "Supplier.Supplier_ContactsAddress",
                            "isExpression": false,
                            "value": "supplier_Supplier_ContactsAddress"
                        },
                        "dataField": "supplier.supplier_ContactsAddress",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "办公地址",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "supplier_Supplier_ContactsAddress_27ddf90a_zycw",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "supplier_Supplier_ContactsAddress_27ddf90a_zycw",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "supplier_Supplier_ContactsAddress",
                                "isExpression": false,
                                "value": "supplier_Supplier_ContactsAddress"
                            },
                            "disable": false,
                            "maxLength": 100,
                            "isPassword": false,
                            "enableViewPassword": false
                        },
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "aggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "formatter": {
                            "type": "none"
                        }
                    }
                ],
                "multiSelect": true,
                "editable": "viewModel.stateMachine['editable']",
                "showLineNumber": false,
                "lineNumberTitle": "#",
                "groupTotalText": "Total",
                "filterable": false,
                "groupable": false,
                "rowClass": ""
            }
        };
        return _this;
    }
    PlandetailsComponentViewmodel.prototype.plandetailsAddItem1 = function (commandParam) { return; };
    PlandetailsComponentViewmodel.prototype.plandetailsRemoveItem1 = function (commandParam) { return; };
    PlandetailsComponentViewmodel.prototype.rootviewmodelInsert1 = function (commandParam) { return; };
    PlandetailsComponentViewmodel.prototype.rootviewmodelAddItem1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'plandetailsAddItem1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], PlandetailsComponentViewmodel.prototype, "plandetailsAddItem1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'plandetailsRemoveItem1',
            params: {
                id: '{DATA~/#{plandetails-component}/planDetailss/id}'
            },
            paramDescriptions: {
                id: ɵ0
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], PlandetailsComponentViewmodel.prototype, "plandetailsRemoveItem1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootviewmodelInsert1',
            params: {
                position: '1'
            },
            paramDescriptions: {
                position: { type: 'int' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], PlandetailsComponentViewmodel.prototype, "rootviewmodelInsert1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootviewmodelAddItem1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], PlandetailsComponentViewmodel.prototype, "rootviewmodelAddItem1", null);
    PlandetailsComponentViewmodel = tslib_1.__decorate([
        Injectable()
    ], PlandetailsComponentViewmodel);
    return PlandetailsComponentViewmodel;
}(ViewModel));
export { PlandetailsComponentViewmodel };
export { ɵ0 };
