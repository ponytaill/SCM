import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var ɵ0 = { type: 'string' };
var DataGridComponentViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(DataGridComponentViewmodel, _super);
    function DataGridComponentViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/';
        _this.dom = {
            "dataGrid": {
                "type": "DataGrid",
                "resourceId": "dataGrid",
                "visible": {
                    "useQuote": false,
                    "isExpression": false,
                    "value": true
                },
                "id": "dataGrid",
                "size": {},
                "readonly": {
                    "useQuote": false,
                    "isExpression": false,
                    "value": false
                },
                "fields": [
                    {
                        "type": "GridField",
                        "resourceId": "orderCode_57e3230a_bnu4",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "orderCode_57e3230a_bnu4",
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
                            "path": "orderCode",
                            "fullPath": "OrderCode",
                            "isExpression": false,
                            "value": "orderCode"
                        },
                        "dataField": "orderCode",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "订单编号",
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
                            "type": "none"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "orderName_547b5e91_ui0i",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "orderName_547b5e91_ui0i",
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
                            "path": "orderName",
                            "fullPath": "OrderName",
                            "isExpression": false,
                            "value": "orderName"
                        },
                        "dataField": "orderName",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "订单名称",
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
                            "type": "none"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "purchaseDept_PurchaseDept_name_2c6c71c1_a32l",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "purchaseDept_PurchaseDept_name_2c6c71c1_a32l",
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
                            "path": "purchaseDept_PurchaseDept_name",
                            "fullPath": "PurchaseDept.PurchaseDept_name",
                            "isExpression": false,
                            "value": "purchaseDept_PurchaseDept_name"
                        },
                        "dataField": "purchaseDept.purchaseDept_name",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "名称",
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
                        "resourceId": "purchaser_Purchaser_Name_c5bf6949_w6ao",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "purchaser_Purchaser_Name_c5bf6949_w6ao",
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
                            "path": "purchaser_Purchaser_Name",
                            "fullPath": "Purchaser.Purchaser_Name",
                            "isExpression": false,
                            "value": "purchaser_Purchaser_Name"
                        },
                        "dataField": "purchaser.purchaser_Name",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "名称",
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
                        "resourceId": "orderDate_a51eb05d_5ohq",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "orderDate_a51eb05d_5ohq",
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
                            "path": "orderDate",
                            "fullPath": "OrderDate",
                            "isExpression": false,
                            "value": "orderDate"
                        },
                        "dataField": "orderDate",
                        "dataType": "date",
                        "multiLanguage": false,
                        "caption": "下单日期",
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
                            "type": "date",
                            "dateFormat": "yyyy-MM-dd"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "totalPrice_a5be115d_7il8",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "totalPrice_a5be115d_7il8",
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
                            "path": "totalPrice",
                            "fullPath": "TotalPrice",
                            "isExpression": false,
                            "value": "totalPrice"
                        },
                        "dataField": "totalPrice",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "物料总价",
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
                            "precision": 2,
                            "thousand": ",",
                            "decimal": "."
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "isFinished_91d7235a_1sa3",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "isFinished_91d7235a_1sa3",
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
                            "path": "isFinished",
                            "fullPath": "IsFinished",
                            "isExpression": false,
                            "value": "isFinished"
                        },
                        "dataField": "isFinished",
                        "dataType": "enum",
                        "multiLanguage": false,
                        "caption": "入库状态",
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "enumData": [
                            {
                                "name": "已入库",
                                "value": "yes"
                            },
                            {
                                "name": "未入库",
                                "value": "no"
                            }
                        ],
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
                        "updateOn": "change",
                        "formatter": {
                            "type": "enum"
                        }
                    }
                ],
                "multiSelect": false,
                "showLineNumber": true,
                "lineNumberTitle": "序",
                "groupTotalText": "Total",
                "filterable": false,
                "groupable": false,
                "rowClass": ""
            }
        };
        return _this;
    }
    DataGridComponentViewmodel.prototype.ChangePage1 = function (commandParam) { return; };
    DataGridComponentViewmodel.prototype.datagridcomponentviewmodelEdit1 = function (commandParam) { return; };
    DataGridComponentViewmodel.prototype.datagridcomponentviewmodelRemove1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'ChangePage1',
            params: {
                loadCommandName: 'Filter1',
                loadCommandFrameId: 'root-component'
            },
            paramDescriptions: {
                loadCommandName: { type: 'string' },
                loadCommandFrameId: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DataGridComponentViewmodel.prototype, "ChangePage1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'datagridcomponentviewmodelEdit1',
            params: {
                url: 'b343c796-589b-4722-bf12-34dab0a29f5b',
                params: '{"action":"LoadAndEdit1","id":"{DATA~/data-grid-component/id}"}',
                idToEdit: '{DATA~/data-grid-component/id}',
                enableRefresh: 'true',
                tabName: '',
                destructuring: ''
            },
            paramDescriptions: {
                url: { type: 'string' },
                params: { type: 'string' },
                idToEdit: { type: 'string' },
                enableRefresh: { type: 'string' },
                tabName: { type: 'string' },
                destructuring: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DataGridComponentViewmodel.prototype, "datagridcomponentviewmodelEdit1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'datagridcomponentviewmodelRemove1',
            params: {
                id: '{DATA~/data-grid-component/id}',
                refreshCommandName: '',
                refreshCommandFrameId: '',
                successMsg: ''
            },
            paramDescriptions: {
                id: ɵ0,
                refreshCommandName: { type: 'string' },
                refreshCommandFrameId: { type: 'string' },
                successMsg: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DataGridComponentViewmodel.prototype, "datagridcomponentviewmodelRemove1", null);
    DataGridComponentViewmodel = tslib_1.__decorate([
        Injectable()
    ], DataGridComponentViewmodel);
    return DataGridComponentViewmodel;
}(ViewModel));
export { DataGridComponentViewmodel };
export { ɵ0 };
