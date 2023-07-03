
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
        "resourceId": "supplierName_8347d63a_bhow",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "supplierName_8347d63a_bhow",
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
          "path": "supplierName",
          "fullPath": "SupplierName",
          "isExpression": false,
          "value": "supplierName"
        },
        "dataField": "supplierName",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "供应商名称",
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
        "resourceId": "supplierCode_cff3b19d_scg5",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "supplierCode_cff3b19d_scg5",
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
          "path": "supplierCode",
          "fullPath": "SupplierCode",
          "isExpression": false,
          "value": "supplierCode"
        },
        "dataField": "supplierCode",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "供应商编号",
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
        "resourceId": "contacts_Contacts_Name_b340437c_f4rv",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "contacts_Contacts_Name_b340437c_f4rv",
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
          "path": "contacts_Contacts_Name",
          "fullPath": "Contacts.Contacts_Name",
          "isExpression": false,
          "value": "contacts_Contacts_Name"
        },
        "dataField": "contacts.contacts_Name",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "联系人",
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
        "resourceId": "contactsEmail_d64a584e_qs3a",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "contactsEmail_d64a584e_qs3a",
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
          "path": "contactsEmail",
          "fullPath": "ContactsEmail",
          "isExpression": false,
          "value": "contactsEmail"
        },
        "dataField": "contactsEmail",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "联系人邮箱",
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
        "resourceId": "contactsAddress_0413715c_u5sw",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "contactsAddress_0413715c_u5sw",
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
          "path": "contactsAddress",
          "fullPath": "ContactsAddress",
          "isExpression": false,
          "value": "contactsAddress"
        },
        "dataField": "contactsAddress",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "办公地址",
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
        "resourceId": "signTime_9a10dffd_sb3z",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "signTime_9a10dffd_sb3z",
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
          "path": "signTime",
          "fullPath": "SignTime",
          "isExpression": false,
          "value": "signTime"
        },
        "dataField": "signTime",
        "dataType": "datetime",
        "multiLanguage": false,
        "caption": "注册时间",
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
        "resourceId": "remark_8a27efaa_zbgx",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "remark_8a27efaa_zbgx",
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
          "path": "remark",
          "fullPath": "Remark",
          "isExpression": false,
          "value": "remark"
        },
        "dataField": "remark",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "备注",
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
      }
    ],
    "multiSelect": false,
    "showLineNumber": false,
    "lineNumberTitle": "#",
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

}