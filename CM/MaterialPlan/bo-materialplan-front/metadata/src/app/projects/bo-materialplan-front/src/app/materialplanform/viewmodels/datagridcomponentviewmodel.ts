
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class DataGridComponentViewmodel extends ViewModel {
    public bindingPath = '/';
    // farrisDataGrid列集合定义 在对应component中赋值
    public dataGridColumns:any;
    // datGrid 列集合名称 用以bindData使用
    public dataGridColumnsName:string;

    public dom = {
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
        "resourceId": "billStatus_BillState_6a6f7e09_pbh3",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "billStatus_BillState_6a6f7e09_pbh3",
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
          "path": "billStatus_BillState",
          "fullPath": "BillStatus.BillState",
          "isExpression": false,
          "value": "billStatus_BillState"
        },
        "dataField": "billStatus.billState",
        "dataType": "enum",
        "multiLanguage": false,
        "caption": "审批状态",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "enumData": [
          {
            "name": "制单",
            "value": "Billing"
          },
          {
            "name": "提交审批",
            "value": "SubmitApproval"
          },
          {
            "name": "审批通过",
            "value": "Approved"
          },
          {
            "name": "审批不通过",
            "value": "ApprovalNotPassed"
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
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "planCode_210f7065_7a35",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "planCode_210f7065_7a35",
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
          "path": "planCode",
          "fullPath": "PlanCode",
          "isExpression": false,
          "value": "planCode"
        },
        "dataField": "planCode",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "计划编号",
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
        "linkedLabelEnabled": true,
        "updateOn": "blur",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "applicant_Applicant_Name_36e050c8_radi",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "applicant_Applicant_Name_36e050c8_radi",
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
          "path": "applicant_Applicant_Name",
          "fullPath": "Applicant.Applicant_Name",
          "isExpression": false,
          "value": "applicant_Applicant_Name"
        },
        "dataField": "applicant.applicant_Name",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "制单人",
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
        "resourceId": "purchaseDept_PurchaseDept_name_53265c41_3q8s",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "purchaseDept_PurchaseDept_name_53265c41_3q8s",
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
        "caption": "采购部门",
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
        "resourceId": "purchaser_Purchaser_Name_e646ee4c_5c6k",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "purchaser_Purchaser_Name_e646ee4c_5c6k",
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
        "caption": "采购员",
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
        "resourceId": "deliveryDate_19bd9bfb_nnlo",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "deliveryDate_19bd9bfb_nnlo",
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
          "path": "deliveryDate",
          "fullPath": "DeliveryDate",
          "isExpression": false,
          "value": "deliveryDate"
        },
        "dataField": "deliveryDate",
        "dataType": "datetime",
        "multiLanguage": false,
        "caption": "交货日期",
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
          "dateFormat": "yyyy-MM-dd HH:mm:ss"
        }
      },
      {
        "type": "GridField",
        "resourceId": "planName_4f24ebc0_a9kt",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "planName_4f24ebc0_a9kt",
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
          "path": "planName",
          "fullPath": "PlanName",
          "isExpression": false,
          "value": "planName"
        },
        "dataField": "planName",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "计划名称",
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
        "resourceId": "totalPrice_da36cd69_48ad",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "totalPrice_da36cd69_48ad",
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
          "type": "sum",
          "formatter": {
            "type": "none"
          },
          "align": "center",
          "styler": "(value, rowData, rowIndex) => {\r\n    return {\r\n        style: {\r\n            color: 'red',\r\n            fontWeight: 800\r\n        }\r\n    };\r\n}"
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
        "resourceId": "isPurchaseOrder_75108363_6uu3",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "isPurchaseOrder_75108363_6uu3",
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
          "path": "isPurchaseOrder",
          "fullPath": "IsPurchaseOrder",
          "isExpression": false,
          "value": "isPurchaseOrder"
        },
        "dataField": "isPurchaseOrder",
        "dataType": "boolean",
        "multiLanguage": false,
        "caption": "是否已生成采购订单",
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
        "updateOn": "change",
        "formatter": {
          "type": "boolean2",
          "trueText": "<span class=\"f-icon f-icon-checkbox-checked f-datagrid-default-show-icon\"></span>",
          "falseText": "<span class=\"f-icon f-icon-checkbox f-datagrid-default-show-icon\"></span>"
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
    @NgCommand({
        name: 'ChangePage1',
        params: {
            loadCommandName: 'Filter1',
            loadCommandFrameId: 'root-component'
        },
        paramDescriptions: {
            loadCommandName: { type: 'string' },
            loadCommandFrameId: { type: 'string' }
        }
    })
    public ChangePage1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'datagridcomponentviewmodelView1',
        params: {
            url: '8652724f-5e15-4348-b87b-5e735ed06830',
            params: '{"id":"{DATA~/data-grid-component/id}","action":"LoadAndView1"}',
            idToView: '{DATA~/data-grid-component/id}',
            enableRefresh: 'true',
            tabName: '物料需求计划详情',
            destructuring: ''
        },
        paramDescriptions: {
            url: { type: 'string' },
            params: { type: 'string' },
            idToView: { type: 'string' },
            enableRefresh: { type: 'string' },
            tabName: { type: 'string' },
            destructuring: { type: 'string' }
        }
    })
    public datagridcomponentviewmodelView1(commandParam?: any): Observable<any> { return; }

}