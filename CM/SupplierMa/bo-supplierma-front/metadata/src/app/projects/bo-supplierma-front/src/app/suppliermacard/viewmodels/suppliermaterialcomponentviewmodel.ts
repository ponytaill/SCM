
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class SuppliermaterialComponentViewmodel extends ViewModel {
    public bindingPath = '/supplierMaterials';
    // farrisDataGrid列集合定义 在对应component中赋值
    public dataGrid_suppliermaterialColumns:any;
    // datGrid 列集合名称 用以bindData使用
    public dataGridColumnsName:string;

    public dom = {
  "dataGrid_suppliermaterial": {
    "type": "DataGrid",
    "resourceId": "dataGrid_suppliermaterial",
    "visible": {
      "useQuote": false,
      "isExpression": false,
      "value": true
    },
    "id": "dataGrid_suppliermaterial",
    "size": {},
    "readonly": {
      "useQuote": false,
      "isExpression": false,
      "value": false
    },
    "fields": [
      {
        "type": "GridField",
        "resourceId": "materialId_MaterialId_MaterialCode_06287e26_x36n",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "materialId_MaterialId_MaterialCode_06287e26_x36n",
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
          "type": "TextBox",
          "isTextArea": true,
          "resourceId": "materialId_MaterialId_MaterialCode_06287e26_6gh9",
          "defaultI18nValue": "文本",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "materialId_MaterialId_MaterialCode_06287e26_6gh9",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "materialId_MaterialId_MaterialCode",
            "isExpression": false,
            "value": "materialId_MaterialId_MaterialCode"
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
        "resourceId": "materialId_MaterialId_MaterialName_655b8865_v7zg",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "materialId_MaterialId_MaterialName_655b8865_v7zg",
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
          "type": "LookupEdit",
          "isTextArea": true,
          "resourceId": "materialId_MaterialId_MaterialName_655b8865_1gmu",
          "defaultI18nValue": "文本",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "materialId_MaterialId_MaterialName_655b8865_1gmu",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "materialId_MaterialId_MaterialName",
            "fullPath": "MaterialId.MaterialId_MaterialName",
            "isExpression": false,
            "value": "materialId_MaterialId_MaterialName"
          },
          "disable": false,
          "dataSource": {
            "uri": "SupplierMaterial.materialId_MaterialId_MaterialName",
            "displayName": "物料管理帮助",
            "idField": "id",
            "type": "ViewObject"
          },
          "valueField": "id",
          "textField": "materialName",
          "multiSelect": false,
          "pageSize": 20,
          "mapFields": {
            "id": "materialId.materialId",
            "materialCode": "materialId.materialId_MaterialCode",
            "materialName": "materialId.materialId_MaterialName",
            "evePrice": "materialId.materialId_EvePrice",
            "repertory": "materialId.materialId_Repertory",
            "materialCat.materialCat_CatName": "materialId.materialId_MaterialCat_CatName"
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
        "resourceId": "materialId_MaterialId_EvePrice_1f7da955_komu",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "materialId_MaterialId_EvePrice_1f7da955_komu",
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
          "resourceId": "materialId_MaterialId_EvePrice_1f7da955_sbb0",
          "defaultI18nValue": "数值框",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "materialId_MaterialId_EvePrice_1f7da955_sbb0",
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
        "resourceId": "materialId_MaterialId_Repertory_3befcd45_5gw0",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "materialId_MaterialId_Repertory_3befcd45_5gw0",
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
          "path": "materialId_MaterialId_Repertory",
          "fullPath": "MaterialId.MaterialId_Repertory",
          "isExpression": false,
          "value": "materialId_MaterialId_Repertory"
        },
        "dataField": "materialId.materialId_Repertory",
        "dataType": "number",
        "multiLanguage": false,
        "caption": "库存数量",
        "editor": {
          "type": "FarrisNumberSpinner",
          "isTextArea": true,
          "resourceId": "materialId_MaterialId_Repertory_3befcd45_2bg2",
          "defaultI18nValue": "数值框",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "materialId_MaterialId_Repertory_3befcd45_2bg2",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "materialId_MaterialId_Repertory",
            "isExpression": false,
            "value": "materialId_MaterialId_Repertory"
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
          "precision": 0,
          "thousand": ",",
          "decimal": "."
        }
      },
      {
        "type": "GridField",
        "resourceId": "materialId_MaterialId_MaterialCat_CatName_9856022b_2dzp",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "materialId_MaterialId_MaterialCat_CatName_9856022b_2dzp",
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
          "resourceId": "materialId_MaterialId_MaterialCat_CatName_9856022b_by5d",
          "defaultI18nValue": "文本",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "materialId_MaterialId_MaterialCat_CatName_9856022b_by5d",
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
    @NgCommand({
        name: 'suppliermaterialAddItem1',
        params: {
        }
    })
    public suppliermaterialAddItem1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'suppliermaterialRemoveItem1',
        params: {
            id: '{DATA~/#{suppliermaterial-component}/supplierMaterials/id}'
        },
        paramDescriptions: {
            id: { type: 'string' }
        }
    })
    public suppliermaterialRemoveItem1(commandParam?: any): Observable<any> { return; }

}