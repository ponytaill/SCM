
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
        "resourceId": "materialCode_8e70b36b_vkei",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "materialCode_8e70b36b_vkei",
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
          "path": "materialCode",
          "fullPath": "MaterialCode",
          "isExpression": false,
          "value": "materialCode"
        },
        "dataField": "materialCode",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "物料编号",
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
        "resourceId": "materialName_56e54326_wg3t",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "materialName_56e54326_wg3t",
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
          "path": "materialName",
          "fullPath": "MaterialName",
          "isExpression": false,
          "value": "materialName"
        },
        "dataField": "materialName",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "物料名称",
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
        "resourceId": "repertory_f8eb1982_xmhs",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "repertory_f8eb1982_xmhs",
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
          "path": "repertory",
          "fullPath": "Repertory",
          "isExpression": false,
          "value": "repertory"
        },
        "dataField": "repertory",
        "dataType": "number",
        "multiLanguage": false,
        "caption": "库存数量",
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
        "updateOn": "blur",
        "formatter": {
          "type": "number",
          "precision": 0,
          "thousand": ",",
          "decimal": "."
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
        name: 'loadList1',
        params: {
        }
    })
    public loadList1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'remove1',
        params: {
            id: '{DATA~/data-grid-component/id}'
        },
        paramDescriptions: {
            id: { type: 'string' }
        }
    })
    public remove1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'loadCard1',
        params: {
        }
    })
    public loadCard1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'add1',
        params: {
        }
    })
    public add1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'changePage1',
        params: {
            loadCommandName: 'loadList1',
            loadCommandFrameId: 'data-grid-component'
        },
        paramDescriptions: {
            loadCommandName: { type: 'string' },
            loadCommandFrameId: { type: 'string' }
        }
    })
    public changePage1(commandParam?: any): Observable<any> { return; }

}