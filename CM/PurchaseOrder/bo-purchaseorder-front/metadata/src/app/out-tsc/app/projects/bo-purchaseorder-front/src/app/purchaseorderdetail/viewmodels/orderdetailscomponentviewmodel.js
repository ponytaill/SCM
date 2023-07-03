import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var ɵ0 = { type: 'string' };
var OrderdetailsComponentViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(OrderdetailsComponentViewmodel, _super);
    function OrderdetailsComponentViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/orderDetailss';
        _this.dom = {
            "dataGrid_orderdetails": {
                "type": "DataGrid",
                "resourceId": "dataGrid_orderdetails",
                "visible": {
                    "useQuote": false,
                    "isExpression": false,
                    "value": true
                },
                "id": "dataGrid_orderdetails",
                "size": {},
                "readonly": {
                    "useQuote": false,
                    "isExpression": false,
                    "value": false
                },
                "fields": [
                    {
                        "type": "GridField",
                        "resourceId": "materialId_MaterialId_MaterialCode_4b4e149b_20en",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "materialId_MaterialId_MaterialCode_4b4e149b_20en",
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
                            "resourceId": "materialId_MaterialId_MaterialCode_4b4e149b_2ctd",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "materialId_MaterialId_MaterialCode_4b4e149b_2ctd",
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
                                "uri": "OrderDetails.materialId_MaterialId_MaterialCode",
                                "displayName": "物料管理帮助",
                                "idField": "id",
                                "type": "ViewObject"
                            },
                            "valueField": "id",
                            "textField": "materialName",
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
                        "resourceId": "materialId_MaterialId_MaterialName_a5c03a88_809u",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "materialId_MaterialId_MaterialName_a5c03a88_809u",
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
                            "resourceId": "materialId_MaterialId_MaterialName_a5c03a88_02gq",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "materialId_MaterialId_MaterialName_a5c03a88_02gq",
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
                        "resourceId": "materialId_MaterialId_MaterialCat_CatName_d031c736_pe2r",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "materialId_MaterialId_MaterialCat_CatName_d031c736_pe2r",
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
                        "caption": "类别名称",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "materialId_MaterialId_MaterialCat_CatName_d031c736_0alv",
                            "defaultI18nValue": "类别名称",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "materialId_MaterialId_MaterialCat_CatName_d031c736_0alv",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "materialId_MaterialId_MaterialCat_CatName",
                                "fullPath": "MaterialId.MaterialId_MaterialCat_CatName",
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
                        "resourceId": "materialId_MaterialId_EvePrice_e3cd5498_b9ip",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "materialId_MaterialId_EvePrice_e3cd5498_b9ip",
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
                            "resourceId": "materialId_MaterialId_EvePrice_e3cd5498_49kl",
                            "defaultI18nValue": "数值框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "materialId_MaterialId_EvePrice_e3cd5498_49kl",
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
                            "decimal": "."
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "amount_58fd9353_fn66",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "amount_58fd9353_fn66",
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
                            "path": "amount",
                            "fullPath": "Amount",
                            "isExpression": false,
                            "value": "amount"
                        },
                        "dataField": "amount",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "物料数量",
                        "editor": {
                            "type": "FarrisNumberSpinner",
                            "isTextArea": true,
                            "resourceId": "amount_58fd9353_0crg",
                            "defaultI18nValue": "数值框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "amount_58fd9353_0crg",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "amount",
                                "isExpression": false,
                                "value": "amount"
                            },
                            "disable": false,
                            "minValue": 0,
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
                        "resourceId": "supplier_Supplier_SupplierCode_ae2bec36_wkv2",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "supplier_Supplier_SupplierCode_ae2bec36_wkv2",
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
                            "resourceId": "supplier_Supplier_SupplierCode_ae2bec36_6df1",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "supplier_Supplier_SupplierCode_ae2bec36_6df1",
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
                                "uri": "OrderDetails.supplier_Supplier_SupplierCode",
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
                        "resourceId": "supplier_Supplier_SupplierName_63c38913_j2pw",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "supplier_Supplier_SupplierName_63c38913_j2pw",
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
                            "resourceId": "supplier_Supplier_SupplierName_63c38913_ac4f",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "supplier_Supplier_SupplierName_63c38913_ac4f",
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
                        "resourceId": "supplier_Supplier_ContactsEmail_bbc84198_n9pv",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "supplier_Supplier_ContactsEmail_bbc84198_n9pv",
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
                            "resourceId": "supplier_Supplier_ContactsEmail_bbc84198_dkci",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "supplier_Supplier_ContactsEmail_bbc84198_dkci",
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
                        "resourceId": "supplier_Supplier_ContactsAddress_65f7e3ff_389o",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "supplier_Supplier_ContactsAddress_65f7e3ff_389o",
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
                            "resourceId": "supplier_Supplier_ContactsAddress_65f7e3ff_ggel",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "supplier_Supplier_ContactsAddress_65f7e3ff_ggel",
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
                "multiSelect": false,
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
    OrderdetailsComponentViewmodel.prototype.orderdetailsAddItem1 = function (commandParam) { return; };
    OrderdetailsComponentViewmodel.prototype.orderdetailsRemoveItem1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'orderdetailsAddItem1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], OrderdetailsComponentViewmodel.prototype, "orderdetailsAddItem1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'orderdetailsRemoveItem1',
            params: {
                id: '{DATA~/#{orderdetails-component}/orderDetailss/id}'
            },
            paramDescriptions: {
                id: ɵ0
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], OrderdetailsComponentViewmodel.prototype, "orderdetailsRemoveItem1", null);
    OrderdetailsComponentViewmodel = tslib_1.__decorate([
        Injectable()
    ], OrderdetailsComponentViewmodel);
    return OrderdetailsComponentViewmodel;
}(ViewModel));
export { OrderdetailsComponentViewmodel };
export { ɵ0 };
