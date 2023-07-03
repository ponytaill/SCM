{
  "Header" : {
    "Code" : "PurchaseOrderList",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Front",
    "CertId" : null,
    "Name" : "采购订单列表",
    "FileName" : "PurchaseOrderList.frm",
    "BizobjectID" : "8de461f4-9c5e-b7fc-9d76-c1108500332d",
    "Language" : null,
    "Extendable" : false,
    "ID" : "e3af421f-8e5a-4684-92b5-3ac56d690c00",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "ca4f3d47-d020-4459-8aa0-237b9ff7825e",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Front",
      "Code" : "PurchaseOrderList.frm",
      "Name" : "PurchaseOrderList.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "8de461f4-9c5e-b7fc-9d76-c1108500332d"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Contents" : {
      "module" : {
        "id" : "PurchaseOrderList",
        "code" : "PurchaseOrderList",
        "name" : "采购订单列表",
        "caption" : "采购订单列表",
        "type" : "Module",
        "creator" : "shizhiyuan",
        "creationDate" : "2023-06-25T06:34:46.068Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "list-template",
        "templateId" : "list-template",
        "schemas" : [ {
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "code" : "PurchaseOrderList_frm",
          "id" : "67bf7e4e-c035-4e86-829f-59fb5e345215",
          "entities" : [ {
            "type" : {
              "$type" : "EntityType",
              "fields" : [ {
                "$type" : "SimpleField",
                "readonly" : false,
                "require" : true,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "bindingField" : "id",
                "bindingPath" : "id",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "ID",
                "code" : "ID",
                "id" : "dadae0fb-54bb-4ed6-a545-a515d1b28040",
                "label" : "id",
                "originalId" : "dadae0fb-54bb-4ed6-a545-a515d1b28040",
                "name" : "主键"
              }, {
                "$type" : "SimpleField",
                "readonly" : false,
                "require" : false,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "DateBox",
                  "format" : "'yyyy-MM-dd'"
                },
                "defaultValue" : "",
                "bindingField" : "version",
                "bindingPath" : "version",
                "type" : {
                  "$type" : "DateTimeType",
                  "name" : "DateTime",
                  "displayName" : "日期时间"
                },
                "path" : "Version",
                "code" : "Version",
                "id" : "cb1fe066-486c-44e1-ac69-398598d5265f",
                "label" : "version",
                "originalId" : "cb1fe066-486c-44e1-ac69-398598d5265f",
                "name" : "版本"
              }, {
                "$type" : "SimpleField",
                "readonly" : false,
                "require" : false,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "bindingField" : "orderCode",
                "bindingPath" : "orderCode",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "OrderCode",
                "code" : "OrderCode",
                "id" : "57e3230a-9a80-48c2-97b0-785bb6c77fe2",
                "label" : "orderCode",
                "originalId" : "57e3230a-9a80-48c2-97b0-785bb6c77fe2",
                "name" : "订单编号"
              }, {
                "$type" : "SimpleField",
                "readonly" : false,
                "require" : false,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "bindingField" : "orderName",
                "bindingPath" : "orderName",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "OrderName",
                "code" : "OrderName",
                "id" : "547b5e91-bb43-463e-8898-bf5f87ca15f1",
                "label" : "orderName",
                "originalId" : "547b5e91-bb43-463e-8898-bf5f87ca15f1",
                "name" : "订单名称"
              }, {
                "$type" : "ComplexField",
                "bindingField" : "purchaseDept",
                "bindingPath" : "purchaseDept",
                "type" : {
                  "$type" : "EntityType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "readonly" : false,
                    "require" : false,
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "bindingField" : "purchaseDept",
                    "bindingPath" : "purchaseDept.purchaseDept",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "PurchaseDept.PurchaseDept",
                    "code" : "PurchaseDept",
                    "id" : "77e5638b-b411-490b-88b5-dce038429686",
                    "label" : "purchaseDept",
                    "originalId" : "77e5638b-b411-490b-88b5-dce038429686",
                    "name" : "采购部门"
                  }, {
                    "$type" : "SimpleField",
                    "readonly" : false,
                    "require" : false,
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "bindingField" : "purchaseDept_PurchaseDept_ID",
                    "bindingPath" : "purchaseDept.purchaseDept_ID",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "PurchaseDept.PurchaseDept_ID",
                    "code" : "ID",
                    "id" : "ad7604d9-6461-4cb6-a7d9-631d4764910b",
                    "label" : "purchaseDept_ID",
                    "originalId" : "ad7604d9-6461-4cb6-a7d9-631d4764910b",
                    "name" : "ID"
                  }, {
                    "$type" : "SimpleField",
                    "readonly" : false,
                    "require" : false,
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "bindingField" : "purchaseDept_PurchaseDept_name",
                    "bindingPath" : "purchaseDept.purchaseDept_name",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 100,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "PurchaseDept.PurchaseDept_name",
                    "code" : "name",
                    "id" : "2c6c71c1-fb98-47cb-a806-7e89b050d591",
                    "label" : "purchaseDept_name",
                    "originalId" : "2c6c71c1-fb98-47cb-a806-7e89b050d591",
                    "name" : "名称"
                  } ],
                  "primary" : "purchaseDept",
                  "entities" : [ ],
                  "name" : "SysOrg77e5",
                  "displayName" : "系统组织"
                },
                "path" : "PurchaseDept",
                "code" : "PurchaseDept",
                "id" : "f4273524-2b41-48df-8ea9-204223083c50",
                "label" : "purchaseDept",
                "originalId" : "f4273524-2b41-48df-8ea9-204223083c50",
                "name" : "采购部门"
              }, {
                "$type" : "ComplexField",
                "bindingField" : "purchaser",
                "bindingPath" : "purchaser",
                "type" : {
                  "$type" : "EntityType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "readonly" : false,
                    "require" : false,
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "bindingField" : "purchaser",
                    "bindingPath" : "purchaser.purchaser",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Purchaser.Purchaser",
                    "code" : "Purchaser",
                    "id" : "57e9e09f-9b5c-4d6a-a497-4d5d7db904b4",
                    "label" : "purchaser",
                    "originalId" : "57e9e09f-9b5c-4d6a-a497-4d5d7db904b4",
                    "name" : "采购员"
                  }, {
                    "$type" : "SimpleField",
                    "readonly" : false,
                    "require" : false,
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "bindingField" : "purchaser_Purchaser_ID",
                    "bindingPath" : "purchaser.purchaser_ID",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Purchaser.Purchaser_ID",
                    "code" : "ID",
                    "id" : "981a9463-30e2-41c9-884c-d234ce80bec8",
                    "label" : "purchaser_ID",
                    "originalId" : "981a9463-30e2-41c9-884c-d234ce80bec8",
                    "name" : "ID"
                  }, {
                    "$type" : "SimpleField",
                    "readonly" : false,
                    "require" : false,
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "bindingField" : "purchaser_Purchaser_Name",
                    "bindingPath" : "purchaser.purchaser_Name",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Purchaser.Purchaser_Name",
                    "code" : "Name",
                    "id" : "c5bf6949-627b-4cd8-9b65-42db21acf995",
                    "label" : "purchaser_Name",
                    "originalId" : "c5bf6949-627b-4cd8-9b65-42db21acf995",
                    "name" : "名称"
                  } ],
                  "primary" : "purchaser",
                  "entities" : [ ],
                  "name" : "GspUser57e9",
                  "displayName" : "用户"
                },
                "path" : "Purchaser",
                "code" : "Purchaser",
                "id" : "dc46c618-b54d-4d6a-94d7-47fd60eb5cfe",
                "label" : "purchaser",
                "originalId" : "dc46c618-b54d-4d6a-94d7-47fd60eb5cfe",
                "name" : "采购员"
              }, {
                "$type" : "SimpleField",
                "readonly" : false,
                "require" : false,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "DateBox",
                  "format" : "'yyyy-MM-dd'"
                },
                "defaultValue" : "",
                "bindingField" : "orderDate",
                "bindingPath" : "orderDate",
                "type" : {
                  "$type" : "DateType",
                  "name" : "Date",
                  "displayName" : "日期"
                },
                "path" : "OrderDate",
                "code" : "OrderDate",
                "id" : "a51eb05d-b4c3-4c45-8a30-95eae4357279",
                "label" : "orderDate",
                "originalId" : "a51eb05d-b4c3-4c45-8a30-95eae4357279",
                "name" : "下单日期"
              }, {
                "$type" : "SimpleField",
                "readonly" : false,
                "require" : false,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "NumericBox"
                },
                "defaultValue" : "",
                "bindingField" : "totalPrice",
                "bindingPath" : "totalPrice",
                "type" : {
                  "$type" : "NumericType",
                  "precision" : 2,
                  "length" : 18,
                  "name" : "Number",
                  "displayName" : "数字"
                },
                "path" : "TotalPrice",
                "code" : "TotalPrice",
                "id" : "a5be115d-f47f-4b2b-aa4a-0920ff22d51a",
                "label" : "totalPrice",
                "originalId" : "a5be115d-f47f-4b2b-aa4a-0920ff22d51a",
                "name" : "物料总价"
              }, {
                "$type" : "ComplexField",
                "name" : "状态",
                "id" : "cedeee00-0ca8-4ac5-b7d6-15876fec78de",
                "type" : {
                  "$type" : "ObjectType",
                  "name" : "BillStateCede",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "EnumField"
                    },
                    "readonly" : false,
                    "multiLanguage" : false,
                    "require" : false,
                    "name" : "状态",
                    "id" : "cedeee00-0101-468f-ae3f-40c76c0f06b0",
                    "type" : {
                      "$type" : "EnumType",
                      "name" : "Enum",
                      "displayName" : "枚举",
                      "valueType" : {
                        "$type" : "StringType",
                        "length" : 36,
                        "name" : "String",
                        "displayName" : "字符串"
                      },
                      "enumValues" : [ {
                        "name" : "制单",
                        "value" : "Billing"
                      }, {
                        "name" : "提交审批",
                        "value" : "SubmitApproval"
                      }, {
                        "name" : "审批通过",
                        "value" : "Approved"
                      }, {
                        "name" : "审批不通过",
                        "value" : "ApprovalNotPassed"
                      } ]
                    },
                    "path" : "BillStatus.BillState",
                    "originalId" : "a0b19650-0101-468f-ae3f-40c76c0f06b0",
                    "label" : "billState",
                    "bindingPath" : "billStatus.billState",
                    "bindingField" : "billStatus_BillState",
                    "code" : "BillState"
                  } ],
                  "displayName" : "状态"
                },
                "path" : "BillStatus",
                "originalId" : "cedeee00-0ca8-4ac5-b7d6-15876fec78de",
                "label" : "billStatus",
                "bindingPath" : "billStatus",
                "bindingField" : "billStatus",
                "code" : "BillStatus"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "editor" : {
                  "$type" : "EnumField"
                },
                "readonly" : false,
                "multiLanguage" : false,
                "require" : false,
                "name" : "入库状态",
                "id" : "91d7235a-9426-42fd-8b06-78d66f80c0c7",
                "type" : {
                  "$type" : "EnumType",
                  "name" : "Enum",
                  "displayName" : "枚举",
                  "valueType" : {
                    "$type" : "StringType",
                    "length" : 36,
                    "name" : "String",
                    "displayName" : "字符串"
                  },
                  "enumValues" : [ {
                    "name" : "已入库",
                    "value" : "yes"
                  }, {
                    "name" : "未入库",
                    "value" : "no"
                  } ]
                },
                "path" : "IsFinished",
                "originalId" : "91d7235a-9426-42fd-8b06-78d66f80c0c7",
                "label" : "isFinished",
                "bindingPath" : "isFinished",
                "bindingField" : "isFinished",
                "code" : "IsFinished"
              } ],
              "primary" : "id",
              "entities" : [ {
                "type" : {
                  "$type" : "EntityType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "readonly" : false,
                    "require" : true,
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "bindingField" : "id",
                    "bindingPath" : "id",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "ID",
                    "code" : "ID",
                    "id" : "e0264cd9-a9fa-4fb7-9736-b227667fe530",
                    "label" : "id",
                    "originalId" : "e0264cd9-a9fa-4fb7-9736-b227667fe530",
                    "name" : "主键"
                  }, {
                    "$type" : "SimpleField",
                    "readonly" : false,
                    "require" : true,
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "bindingField" : "parentID",
                    "bindingPath" : "parentID",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "ParentID",
                    "code" : "ParentID",
                    "id" : "23f35bda-4034-4046-88e9-f87387ba013b",
                    "label" : "parentID",
                    "originalId" : "23f35bda-4034-4046-88e9-f87387ba013b",
                    "name" : "上级对象主键"
                  }, {
                    "$type" : "ComplexField",
                    "bindingField" : "materialId",
                    "bindingPath" : "materialId",
                    "type" : {
                      "$type" : "EntityType",
                      "fields" : [ {
                        "$type" : "SimpleField",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "bindingField" : "materialId",
                        "bindingPath" : "materialId.materialId",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "MaterialId.MaterialId",
                        "code" : "MaterialId",
                        "id" : "e577212f-9025-4cb3-a15e-dc1506535fcd",
                        "label" : "materialId",
                        "originalId" : "e577212f-9025-4cb3-a15e-dc1506535fcd",
                        "name" : "物料名称"
                      }, {
                        "$type" : "SimpleField",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "bindingField" : "materialId_MaterialId_ID",
                        "bindingPath" : "materialId.materialId_ID",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "MaterialId.MaterialId_ID",
                        "code" : "ID",
                        "id" : "f4cb37e6-76e2-4c53-9592-f0f3984289d0",
                        "label" : "materialId_ID",
                        "originalId" : "f4cb37e6-76e2-4c53-9592-f0f3984289d0",
                        "name" : "主键"
                      }, {
                        "$type" : "SimpleField",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "bindingField" : "materialId_MaterialId_MaterialCode",
                        "bindingPath" : "materialId.materialId_MaterialCode",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "MaterialId.MaterialId_MaterialCode",
                        "code" : "MaterialCode",
                        "id" : "1b323a86-01cc-4575-93ec-da9104aed55d",
                        "label" : "materialId_MaterialCode",
                        "originalId" : "1b323a86-01cc-4575-93ec-da9104aed55d",
                        "name" : "物料编号"
                      }, {
                        "$type" : "SimpleField",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "bindingField" : "materialId_MaterialId_MaterialName",
                        "bindingPath" : "materialId.materialId_MaterialName",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "MaterialId.MaterialId_MaterialName",
                        "code" : "MaterialName",
                        "id" : "4cc7de9d-2656-4107-9648-99800c4cf2af",
                        "label" : "materialId_MaterialName",
                        "originalId" : "4cc7de9d-2656-4107-9648-99800c4cf2af",
                        "name" : "物料名称"
                      }, {
                        "$type" : "SimpleField",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "editor" : {
                          "$type" : "NumericBox"
                        },
                        "defaultValue" : "",
                        "bindingField" : "materialId_MaterialId_EvePrice",
                        "bindingPath" : "materialId.materialId_EvePrice",
                        "type" : {
                          "$type" : "NumericType",
                          "precision" : 2,
                          "length" : 18,
                          "name" : "Number",
                          "displayName" : "数字"
                        },
                        "path" : "MaterialId.MaterialId_EvePrice",
                        "code" : "EvePrice",
                        "id" : "b2168fd2-9793-4334-a061-e784257ec54e",
                        "label" : "materialId_EvePrice",
                        "originalId" : "b2168fd2-9793-4334-a061-e784257ec54e",
                        "name" : "市场价格"
                      }, {
                        "$type" : "SimpleField",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "bindingField" : "materialId_MaterialId_MaterialCat_CatName",
                        "bindingPath" : "materialId.materialId_MaterialCat_CatName",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "MaterialId.MaterialId_MaterialCat_CatName",
                        "code" : "CatName(MaterialCat)",
                        "id" : "163ffdd5-0838-43c6-9fce-000a8f81ca03",
                        "label" : "materialId_MaterialCat_CatName",
                        "originalId" : "163ffdd5-0838-43c6-9fce-000a8f81ca03",
                        "name" : "类别名称"
                      } ],
                      "primary" : "materialId",
                      "entities" : [ ],
                      "name" : "MaterialE577",
                      "displayName" : "物料管理"
                    },
                    "path" : "MaterialId",
                    "code" : "MaterialId",
                    "id" : "11103d84-2aa6-4493-b0ea-66db3c1b728c",
                    "label" : "materialId",
                    "originalId" : "11103d84-2aa6-4493-b0ea-66db3c1b728c",
                    "name" : "物料名称"
                  }, {
                    "$type" : "SimpleField",
                    "readonly" : false,
                    "require" : false,
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "NumericBox"
                    },
                    "defaultValue" : "",
                    "bindingField" : "amount",
                    "bindingPath" : "amount",
                    "type" : {
                      "$type" : "NumericType",
                      "precision" : 0,
                      "length" : 0,
                      "name" : "Number",
                      "displayName" : "数字"
                    },
                    "path" : "Amount",
                    "code" : "Amount",
                    "id" : "50221b5b-b956-44a4-b988-e74ae0dd9149",
                    "label" : "amount",
                    "originalId" : "50221b5b-b956-44a4-b988-e74ae0dd9149",
                    "name" : "物料数量"
                  }, {
                    "$type" : "ComplexField",
                    "bindingField" : "supplier",
                    "bindingPath" : "supplier",
                    "type" : {
                      "$type" : "EntityType",
                      "fields" : [ {
                        "$type" : "SimpleField",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "bindingField" : "supplier",
                        "bindingPath" : "supplier.supplier",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "Supplier.Supplier",
                        "code" : "Supplier",
                        "id" : "64aea18c-48fc-40f1-b3cb-33ce602487bc",
                        "label" : "supplier",
                        "originalId" : "64aea18c-48fc-40f1-b3cb-33ce602487bc",
                        "name" : "供应商"
                      }, {
                        "$type" : "SimpleField",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "bindingField" : "supplier_Supplier_ID",
                        "bindingPath" : "supplier.supplier_ID",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "Supplier.Supplier_ID",
                        "code" : "ID",
                        "id" : "48e677ba-4f78-49b7-a6e1-b7443671576f",
                        "label" : "supplier_ID",
                        "originalId" : "48e677ba-4f78-49b7-a6e1-b7443671576f",
                        "name" : "主键"
                      }, {
                        "$type" : "SimpleField",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "bindingField" : "supplier_Supplier_SupplierName",
                        "bindingPath" : "supplier.supplier_SupplierName",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "Supplier.Supplier_SupplierName",
                        "code" : "SupplierName",
                        "id" : "06a3934f-23ea-4e80-b4e8-2f579d695841",
                        "label" : "supplier_SupplierName",
                        "originalId" : "06a3934f-23ea-4e80-b4e8-2f579d695841",
                        "name" : "供应商名称"
                      }, {
                        "$type" : "SimpleField",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "bindingField" : "supplier_Supplier_SupplierCode",
                        "bindingPath" : "supplier.supplier_SupplierCode",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "Supplier.Supplier_SupplierCode",
                        "code" : "SupplierCode",
                        "id" : "9f3e737c-80ac-483d-b618-3307f8961c28",
                        "label" : "supplier_SupplierCode",
                        "originalId" : "9f3e737c-80ac-483d-b618-3307f8961c28",
                        "name" : "供应商编号"
                      }, {
                        "$type" : "SimpleField",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "bindingField" : "supplier_Supplier_ContactsEmail",
                        "bindingPath" : "supplier.supplier_ContactsEmail",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 100,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "Supplier.Supplier_ContactsEmail",
                        "code" : "ContactsEmail",
                        "id" : "26a6a973-6263-4c75-95d3-09ce18202839",
                        "label" : "supplier_ContactsEmail",
                        "originalId" : "26a6a973-6263-4c75-95d3-09ce18202839",
                        "name" : "联系人邮箱"
                      }, {
                        "$type" : "SimpleField",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "bindingField" : "supplier_Supplier_ContactsAddress",
                        "bindingPath" : "supplier.supplier_ContactsAddress",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 100,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "Supplier.Supplier_ContactsAddress",
                        "code" : "ContactsAddress",
                        "id" : "60bf67ae-6a62-4689-a005-ee369a49a266",
                        "label" : "supplier_ContactsAddress",
                        "originalId" : "60bf67ae-6a62-4689-a005-ee369a49a266",
                        "name" : "办公地址"
                      } ],
                      "primary" : "supplier",
                      "entities" : [ ],
                      "name" : "SupplierMa64ae",
                      "displayName" : "供应商管理"
                    },
                    "path" : "Supplier",
                    "code" : "Supplier",
                    "id" : "5f5e6666-f778-42e3-a3a3-bfd2cc6b2e0e",
                    "label" : "supplier",
                    "originalId" : "5f5e6666-f778-42e3-a3a3-bfd2cc6b2e0e",
                    "name" : "供应商"
                  } ],
                  "primary" : "id",
                  "entities" : [ ],
                  "name" : "OrderDetails",
                  "displayName" : "采购订单明细"
                },
                "code" : "OrderDetails",
                "id" : "c29a9886-4cfd-4fdd-93db-cea8ebaaf877",
                "label" : "orderDetailss",
                "name" : "采购订单明细"
              } ],
              "name" : "PurchaseOrder",
              "displayName" : "采购订单"
            },
            "code" : "PurchaseOrder",
            "id" : "28b98cc6-fe4d-4a15-9c47-527432c3b43e",
            "label" : "purchaseOrders",
            "name" : "采购订单"
          } ],
          "sourceType" : "vo",
          "variables" : [ ],
          "sourceUri" : "api/scm/cm/v1.0/PurchaseOrderList_frm",
          "name" : "采购订单列表_frm",
          "eapiId" : "8dce83a7-3f8a-46f1-aab5-d89740e9c624",
          "eapiCode" : "PurchaseOrderList_frm",
          "eapiName" : "采购订单列表_frm",
          "eapiNameSpace" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Front",
          "voPath" : "SCM/CM/PurchaseOrder/bo-purchaseorder-front/metadata/components",
          "voNameSpace" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Front"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "PurchaseOrderList_state_machine",
          "name" : "采购订单列表_frm",
          "uri" : "2119e50e-0c33-470c-a712-af12227a7dd1",
          "code" : "PurchaseOrderList_frm",
          "nameSpace" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "采购订单",
          "fields" : [ ],
          "stateMachine" : "PurchaseOrderList_state_machine",
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "93ee1cd2-cf0b-40b3-b99f-958a3d1fad1c",
            "code" : "Load1",
            "name" : "加载数据",
            "params" : [ {
              "name" : "filter",
              "shownName" : "过滤条件",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "sort",
              "shownName" : "排序条件",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "Load",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "71ae8a4c-6202-4875-9246-2e2d959da37f",
            "code" : "Search1",
            "name" : "查询数据",
            "params" : [ {
              "name" : "filter",
              "shownName" : "过滤条件",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "sort",
              "shownName" : "排序条件",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "pageSize",
              "shownName" : "分页大小",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "pageIndex",
              "shownName" : "当前页码",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "specialFilterValues",
              "shownName" : "要排除的过滤条件值",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "Search",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "6d5a354f-871f-43e6-82bc-7837184380d3",
            "code" : "RemoveRows1",
            "name" : "删除多行数据",
            "params" : [ {
              "name" : "ids",
              "shownName" : "待删除数据的标识",
              "value" : "{UISTATE~/data-grid-component/ids}",
              "defaultValue" : null
            }, {
              "name" : "refreshCommandName",
              "shownName" : "删除后回调方法",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "refreshCommandFrameId",
              "shownName" : "目标组件",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "successMsg",
              "shownName" : "删除成功提示信息",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "RemoveRows",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "77556491-41c0-4356-8ccf-25e39817060e",
            "code" : "Add1",
            "name" : "在新页签中新增数据",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "b343c796-589b-4722-bf12-34dab0a29f5b",
              "defaultValue" : null
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"action\":\"LoadAndAdd1\"}",
              "defaultValue" : null
            }, {
              "name" : "enableRefresh",
              "shownName" : "支持刷新列表数据",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "tabName",
              "shownName" : "标签页标题",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "destructuring",
              "shownName" : "是否解构参数",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "Add",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "52fdcac3-46c8-466e-aa5d-19920ece2076",
            "code" : "View1",
            "name" : "在新页签中查看数据",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "b343c796-589b-4722-bf12-34dab0a29f5b",
              "defaultValue" : null
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"action\":\"LoadAndView1\", \"id\":\"{DATA~/data-grid-component/id}\"}",
              "defaultValue" : null
            }, {
              "name" : "idToView",
              "shownName" : "待查看数据的标识",
              "value" : "{DATA~/data-grid-component/id}",
              "defaultValue" : null
            }, {
              "name" : "enableRefresh",
              "shownName" : "支持刷新列表数据",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "tabName",
              "shownName" : "标签页标题",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "destructuring",
              "shownName" : "是否解构参数",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "View",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "7ade9996-0531-4401-b1bc-fb9ec8ee3f8e",
            "code" : "Edit1",
            "name" : "在新页签中编辑数据",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "b343c796-589b-4722-bf12-34dab0a29f5b",
              "defaultValue" : null
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"action\":\"LoadAndEdit1\", \"id\":\"{DATA~/data-grid-component/id}\"}",
              "defaultValue" : null
            }, {
              "name" : "idToEdit",
              "shownName" : "待编辑数据的标识",
              "value" : "{DATA~/data-grid-component/id}",
              "defaultValue" : null
            }, {
              "name" : "enableRefresh",
              "shownName" : "支持刷新列表数据",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "tabName",
              "shownName" : "标签页标题",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "destructuring",
              "shownName" : "是否解构参数",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "Edit",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "debae2dd-3387-48cf-90ba-96e74ab5a8e5",
            "code" : "Remove1",
            "name" : "删除当前数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除数据的标识",
              "value" : "{DATA~/data-grid-component/id}",
              "defaultValue" : null
            }, {
              "name" : "refreshCommandName",
              "shownName" : "删除后回调方法",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "refreshCommandFrameId",
              "shownName" : "目标组件",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "successMsg",
              "shownName" : "删除成功提示信息",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "Remove",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "0d36eb0a-fe86-4769-b232-b84c72dcc02f",
            "code" : "Filter1",
            "name" : "过滤并加载数据1",
            "params" : [ {
              "name" : "filter",
              "shownName" : "过滤条件",
              "value" : "{UISTATE~/root-component/originalFilterConditionList}",
              "defaultValue" : null
            }, {
              "name" : "sort",
              "shownName" : "排序条件",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "Filter",
            "cmpId" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "b9b25f42-56b6-4d77-8659-1323930838ae",
            "code" : "rootviewmodelchangeLog1",
            "name" : "changeLog1",
            "params" : [ ],
            "handlerName" : "changeLog",
            "cmpId" : "3c879d05-7849-4a15-806b-0f61cf6b993a",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "ad7b2267-f4ef-4901-bbeb-bb5cdf8f8780",
            "code" : "rootviewmodelprintSingle1",
            "name" : "打印单条数据1",
            "params" : [ {
              "name" : "beMetaId",
              "shownName" : "数据源Id",
              "value" : "385d8182-1b4a-4c7d-9d7f-2fe1ca5283ab",
              "defaultValue" : null
            }, {
              "name" : "bizBillId",
              "shownName" : "业务单据ID",
              "value" : "{UISTATE~/data-grid-component/ids}",
              "defaultValue" : null
            } ],
            "handlerName" : "printSingle",
            "cmpId" : "e353b4e9-e073-4e18-b9f7-ec4cc8ac72b1",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "5237cfe8-6375-4098-95c0-32fe05ae8c95",
            "code" : "rootviewmodelsendGoods1",
            "name" : "方法11",
            "params" : [ {
              "name" : "id",
              "shownName" : "id",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "IsFinished",
              "shownName" : "IsFinished",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "loadCmdName",
              "shownName" : "数据刷新命令名称",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "loadCmdFrameId",
              "shownName" : "数据刷新命令对应的FrameId",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "sendGoods",
            "cmpId" : "af556706-842f-48cf-ac14-36cfeb8d5beb",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "6c319cdb-66fa-4dc2-ad58-bb752de6fd9b",
            "code" : "rootviewmodelsendGoods2",
            "name" : "Instorage2",
            "params" : [ {
              "name" : "id",
              "shownName" : "id",
              "value" : "{DATA~/data-grid-component/id}"
            }, {
              "name" : "IsFinished",
              "shownName" : "IsFinished",
              "value" : "yes"
            }, {
              "name" : "loadCmdName",
              "shownName" : "数据刷新命令名称",
              "value" : "Load1"
            }, {
              "name" : "loadCmdFrameId",
              "shownName" : "数据刷新命令对应的FrameId",
              "value" : "#{root-component}"
            } ],
            "handlerName" : "sendGoods",
            "cmpId" : "af556706-842f-48cf-ac14-36cfeb8d5beb",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "root-component"
          } ],
          "states" : [ {
            "id" : "ad1250a9-fe0c-4dcf-81fe-9c2c52608c66",
            "category" : "locale",
            "code" : "originalFilterConditionList",
            "name" : "筛选方案筛选条件",
            "type" : "String"
          } ],
          "bindTo" : "/",
          "enableUnifiedSession" : false
        }, {
          "id" : "data-grid-component-viewmodel",
          "code" : "data-grid-component-viewmodel",
          "name" : "采购订单",
          "fields" : [ {
            "type" : "Form",
            "id" : "57e3230a-9a80-48c2-97b0-785bb6c77fe2",
            "fieldName" : "orderCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "547b5e91-bb43-463e-8898-bf5f87ca15f1",
            "fieldName" : "orderName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "2c6c71c1-fb98-47cb-a806-7e89b050d591",
            "fieldName" : "purchaseDept_PurchaseDept_name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "c5bf6949-627b-4cd8-9b65-42db21acf995",
            "fieldName" : "purchaser_Purchaser_Name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "a51eb05d-b4c3-4c45-8a30-95eae4357279",
            "fieldName" : "orderDate",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "a5be115d-f47f-4b2b-aa4a-0920ff22d51a",
            "fieldName" : "totalPrice",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "91d7235a-9426-42fd-8b06-78d66f80c0c7",
            "fieldName" : "isFinished",
            "groupId" : "",
            "groupName" : "",
            "valueChanging" : "",
            "valueChanged" : "",
            "updateOn" : "change",
            "fieldSchema" : {
              "readonly" : true
            }
          } ],
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "1a1b7c33-38f0-469f-a017-223086ee6259",
            "code" : "ChangePage1",
            "name" : "切换页码",
            "params" : [ {
              "name" : "loadCommandName",
              "shownName" : "切换页面后回调方法",
              "value" : "Filter1"
            }, {
              "name" : "loadCommandFrameId",
              "shownName" : "目标组件",
              "value" : "root-component"
            } ],
            "handlerName" : "ChangePage",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "data-grid-component"
          }, {
            "id" : "7f4ce21d-d8c0-4248-8835-4e3d3b172f79",
            "code" : "datagridcomponentviewmodelEdit1",
            "name" : "在新页签中编辑数据1",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "b343c796-589b-4722-bf12-34dab0a29f5b"
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"action\":\"LoadAndEdit1\",\"id\":\"{DATA~/data-grid-component/id}\"}"
            }, {
              "name" : "idToEdit",
              "shownName" : "待编辑数据的标识",
              "value" : "{DATA~/data-grid-component/id}"
            }, {
              "name" : "enableRefresh",
              "shownName" : "支持刷新列表数据",
              "value" : true
            }, {
              "name" : "tabName",
              "shownName" : "标签页标题",
              "value" : ""
            }, {
              "name" : "destructuring",
              "shownName" : "是否解构参数",
              "value" : ""
            } ],
            "handlerName" : "Edit",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : true,
            "targetComponent" : "data-grid-component"
          }, {
            "id" : "e0dd64f5-46fe-43a2-b75c-8715de231c69",
            "code" : "datagridcomponentviewmodelRemove1",
            "name" : "删除当前数据1",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除数据的标识",
              "value" : "{DATA~/data-grid-component/id}"
            }, {
              "name" : "refreshCommandName",
              "shownName" : "删除后回调方法",
              "value" : ""
            }, {
              "name" : "refreshCommandFrameId",
              "shownName" : "目标组件",
              "value" : ""
            }, {
              "name" : "successMsg",
              "shownName" : "删除成功提示信息",
              "value" : ""
            } ],
            "handlerName" : "Remove",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : true,
            "targetComponent" : "data-grid-component"
          } ],
          "states" : [ ],
          "bindTo" : "/",
          "parent" : "root-viewmodel",
          "pagination" : {
            "enable" : true,
            "pageSize" : 20,
            "pageList" : "10,20,30,50,100"
          },
          "enableValidation" : false
        } ],
        "components" : [ {
          "id" : "root-component",
          "type" : "Component",
          "componentType" : "Frame",
          "viewModel" : "root-viewmodel",
          "onInit" : "Filter1",
          "contents" : [ {
            "id" : "root-layout",
            "type" : "ContentContainer",
            "appearance" : {
              "class" : "f-page f-page-is-managelist f-page-has-scheme"
            },
            "size" : null,
            "contents" : [ {
              "id" : "query-scheme-section",
              "type" : "Section",
              "appearance" : {
                "class" : "f-section-scheme f-section-in-managelist"
              },
              "size" : null,
              "fill" : false,
              "expanded" : true,
              "showHeader" : false,
              "contents" : [ {
                "id" : "query-scheme-1",
                "type" : "QueryScheme",
                "appearance" : null,
                "fieldConfigs" : [ {
                  "id" : "dadae0fb-54bb-4ed6-a545-a515d1b28040",
                  "labelCode" : "ID",
                  "code" : "ID",
                  "name" : "主键",
                  "control" : {
                    "id" : "dadae0fb-54bb-4ed6-a545-a515d1b28040",
                    "controltype" : "text",
                    "require" : false,
                    "className" : "",
                    "modalConfig" : {
                      "modalCmp" : null,
                      "mapFields" : null,
                      "showHeader" : true,
                      "title" : "",
                      "showCloseButton" : true,
                      "showMaxButton" : true,
                      "width" : 800,
                      "height" : 600,
                      "showFooterButtons" : true,
                      "footerButtons" : [ ]
                    }
                  }
                }, {
                  "id" : "cb1fe066-486c-44e1-ac69-398598d5265f",
                  "labelCode" : "Version",
                  "code" : "Version",
                  "name" : "版本",
                  "control" : {
                    "id" : "cb1fe066-486c-44e1-ac69-398598d5265f",
                    "controltype" : "date",
                    "require" : false,
                    "format" : "yyyy-MM-dd",
                    "weekSelect" : false
                  }
                }, {
                  "id" : "57e3230a-9a80-48c2-97b0-785bb6c77fe2",
                  "labelCode" : "OrderCode",
                  "code" : "OrderCode",
                  "name" : "订单编号",
                  "control" : {
                    "id" : "57e3230a-9a80-48c2-97b0-785bb6c77fe2",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "547b5e91-bb43-463e-8898-bf5f87ca15f1",
                  "labelCode" : "OrderName",
                  "code" : "OrderName",
                  "name" : "订单名称",
                  "control" : {
                    "id" : "547b5e91-bb43-463e-8898-bf5f87ca15f1",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "77e5638b-b411-490b-88b5-dce038429686",
                  "labelCode" : "PurchaseDept.PurchaseDept",
                  "code" : "PurchaseDept",
                  "name" : "采购部门",
                  "control" : {
                    "id" : "77e5638b-b411-490b-88b5-dce038429686",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "ad7604d9-6461-4cb6-a7d9-631d4764910b",
                  "labelCode" : "PurchaseDept.PurchaseDept_ID",
                  "code" : "ID",
                  "name" : "采购部门",
                  "control" : {
                    "id" : "ad7604d9-6461-4cb6-a7d9-631d4764910b",
                    "controltype" : "help",
                    "require" : false,
                    "helpId" : "b524a702-7323-4d46-998e-5ba0c6abcd49",
                    "uri" : "PurchaseOrder.purchaseDept_PurchaseDept_ID",
                    "idField" : "id",
                    "valueField" : "id",
                    "textField" : "name",
                    "displayType" : "TreeList",
                    "enableExtendLoadMethod" : false,
                    "enableFullTree" : false,
                    "loadTreeDataType" : "default",
                    "multiSelect" : false,
                    "enableCascade" : false,
                    "cascadeStatus" : "enable",
                    "expandLevel" : -1,
                    "className" : "",
                    "nosearch" : false,
                    "displayFields" : "",
                    "clearFields" : "",
                    "editable" : false,
                    "pageList" : "10,20,30,50,100",
                    "pageSize" : 20,
                    "dialogTitle" : "",
                    "panelHeight" : null,
                    "panelWidth" : null,
                    "quickSelect" : {
                      "enable" : false,
                      "showItemsCount" : 10,
                      "formatter" : null,
                      "showMore" : true
                    },
                    "conditions" : null
                  }
                }, {
                  "id" : "2c6c71c1-fb98-47cb-a806-7e89b050d591",
                  "labelCode" : "PurchaseDept.PurchaseDept_name",
                  "code" : "name",
                  "name" : "名称",
                  "control" : {
                    "id" : "2c6c71c1-fb98-47cb-a806-7e89b050d591",
                    "controltype" : "text",
                    "require" : false,
                    "className" : "",
                    "modalConfig" : {
                      "modalCmp" : null,
                      "mapFields" : null,
                      "showHeader" : true,
                      "title" : "",
                      "showCloseButton" : true,
                      "showMaxButton" : true,
                      "width" : 800,
                      "height" : 600,
                      "showFooterButtons" : true,
                      "footerButtons" : [ ]
                    }
                  }
                }, {
                  "id" : "57e9e09f-9b5c-4d6a-a497-4d5d7db904b4",
                  "labelCode" : "Purchaser.Purchaser",
                  "code" : "Purchaser",
                  "name" : "采购员",
                  "control" : {
                    "id" : "57e9e09f-9b5c-4d6a-a497-4d5d7db904b4",
                    "controltype" : "text",
                    "require" : false,
                    "className" : "",
                    "modalConfig" : {
                      "modalCmp" : null,
                      "mapFields" : null,
                      "showHeader" : true,
                      "title" : "",
                      "showCloseButton" : true,
                      "showMaxButton" : true,
                      "width" : 800,
                      "height" : 600,
                      "showFooterButtons" : true,
                      "footerButtons" : [ ]
                    }
                  }
                }, {
                  "id" : "981a9463-30e2-41c9-884c-d234ce80bec8",
                  "labelCode" : "Purchaser.Purchaser_ID",
                  "code" : "ID",
                  "name" : "采购人",
                  "control" : {
                    "id" : "981a9463-30e2-41c9-884c-d234ce80bec8",
                    "controltype" : "help",
                    "require" : false,
                    "helpId" : "915a0b20-975a-4df1-8cfd-888c3dda0009",
                    "uri" : "PurchaseOrder.purchaser_Purchaser_ID",
                    "idField" : "id",
                    "valueField" : "id",
                    "textField" : "name",
                    "displayType" : "List",
                    "enableExtendLoadMethod" : false,
                    "enableFullTree" : false,
                    "loadTreeDataType" : "default",
                    "multiSelect" : false,
                    "enableCascade" : false,
                    "cascadeStatus" : "enable",
                    "expandLevel" : -1,
                    "className" : "",
                    "nosearch" : false,
                    "displayFields" : "",
                    "clearFields" : "",
                    "editable" : false,
                    "pageList" : "10,20,30,50,100",
                    "pageSize" : 20,
                    "dialogTitle" : "",
                    "panelHeight" : null,
                    "panelWidth" : null,
                    "quickSelect" : {
                      "enable" : false,
                      "showItemsCount" : 10,
                      "formatter" : null,
                      "showMore" : true
                    },
                    "conditions" : [ ]
                  }
                }, {
                  "id" : "c5bf6949-627b-4cd8-9b65-42db21acf995",
                  "labelCode" : "Purchaser.Purchaser_Name",
                  "code" : "Name",
                  "name" : "名称",
                  "control" : {
                    "id" : "c5bf6949-627b-4cd8-9b65-42db21acf995",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "a51eb05d-b4c3-4c45-8a30-95eae4357279",
                  "labelCode" : "OrderDate",
                  "code" : "OrderDate",
                  "name" : "下单日期",
                  "control" : {
                    "id" : "a51eb05d-b4c3-4c45-8a30-95eae4357279",
                    "controltype" : "date",
                    "require" : false,
                    "format" : "yyyy-MM-dd",
                    "weekSelect" : false
                  }
                }, {
                  "id" : "a5be115d-f47f-4b2b-aa4a-0920ff22d51a",
                  "labelCode" : "TotalPrice",
                  "code" : "TotalPrice",
                  "name" : "物料总价",
                  "control" : {
                    "id" : "a5be115d-f47f-4b2b-aa4a-0920ff22d51a",
                    "controltype" : "number",
                    "require" : false,
                    "className" : "",
                    "textAlign" : "left",
                    "precision" : 2,
                    "isBigNumber" : false
                  }
                } ],
                "presetFieldConfigs" : [ {
                  "id" : "57e3230a-9a80-48c2-97b0-785bb6c77fe2",
                  "labelCode" : "OrderCode",
                  "code" : "OrderCode",
                  "name" : "订单编号",
                  "control" : {
                    "id" : "57e3230a-9a80-48c2-97b0-785bb6c77fe2",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "547b5e91-bb43-463e-8898-bf5f87ca15f1",
                  "labelCode" : "OrderName",
                  "code" : "OrderName",
                  "name" : "订单名称",
                  "control" : {
                    "id" : "547b5e91-bb43-463e-8898-bf5f87ca15f1",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "ad7604d9-6461-4cb6-a7d9-631d4764910b",
                  "labelCode" : "PurchaseDept.PurchaseDept_ID",
                  "code" : "ID",
                  "name" : "采购部门",
                  "control" : {
                    "id" : "ad7604d9-6461-4cb6-a7d9-631d4764910b",
                    "controltype" : "help",
                    "require" : false,
                    "helpId" : "b524a702-7323-4d46-998e-5ba0c6abcd49",
                    "uri" : "PurchaseOrder.purchaseDept_PurchaseDept_ID",
                    "idField" : "id",
                    "valueField" : "id",
                    "textField" : "name",
                    "displayType" : "TreeList",
                    "enableExtendLoadMethod" : false,
                    "enableFullTree" : false,
                    "loadTreeDataType" : "default",
                    "multiSelect" : false,
                    "enableCascade" : false,
                    "cascadeStatus" : "enable",
                    "expandLevel" : -1,
                    "className" : "",
                    "nosearch" : false,
                    "displayFields" : "",
                    "clearFields" : "",
                    "editable" : false,
                    "pageList" : "10,20,30,50,100",
                    "pageSize" : 20,
                    "dialogTitle" : "",
                    "panelHeight" : null,
                    "panelWidth" : null,
                    "quickSelect" : {
                      "enable" : false,
                      "showItemsCount" : 10,
                      "formatter" : null,
                      "showMore" : true
                    },
                    "conditions" : null
                  }
                }, {
                  "id" : "981a9463-30e2-41c9-884c-d234ce80bec8",
                  "labelCode" : "Purchaser.Purchaser_ID",
                  "code" : "ID",
                  "name" : "采购人",
                  "control" : {
                    "id" : "981a9463-30e2-41c9-884c-d234ce80bec8",
                    "controltype" : "help",
                    "require" : false,
                    "helpId" : "915a0b20-975a-4df1-8cfd-888c3dda0009",
                    "uri" : "PurchaseOrder.purchaser_Purchaser_ID",
                    "idField" : "id",
                    "valueField" : "id",
                    "textField" : "name",
                    "displayType" : "List",
                    "enableExtendLoadMethod" : false,
                    "enableFullTree" : false,
                    "loadTreeDataType" : "default",
                    "multiSelect" : false,
                    "enableCascade" : false,
                    "cascadeStatus" : "enable",
                    "expandLevel" : -1,
                    "className" : "",
                    "nosearch" : false,
                    "displayFields" : "",
                    "clearFields" : "",
                    "editable" : false,
                    "pageList" : "10,20,30,50,100",
                    "pageSize" : 20,
                    "dialogTitle" : "",
                    "panelHeight" : null,
                    "panelWidth" : null,
                    "quickSelect" : {
                      "enable" : false,
                      "showItemsCount" : 10,
                      "formatter" : null,
                      "showMore" : true
                    },
                    "conditions" : [ ]
                  }
                } ],
                "formId" : "PurchaseOrderList",
                "isDisabled" : false,
                "presetQuerySolutionName" : "默认筛选方案",
                "onQuery" : "Filter1",
                "isControlInline" : true,
                "visible" : true,
                "binding" : null,
                "enableInitQuery" : false,
                "showCompleteLabel" : false,
                "expanded" : true,
                "enableHistory" : false
              } ],
              "visible" : true,
              "mainTitle" : "主标题",
              "subTitle" : "",
              "headerClass" : "",
              "titleClass" : "",
              "extendedHeaderAreaClass" : "",
              "toolbarClass" : "",
              "extendedAreaClass" : "",
              "contentTemplateClass" : "",
              "enableMaximize" : false,
              "enableAccordion" : true,
              "accordionMode" : "default",
              "headerTemplate" : "",
              "titleTemplate" : "",
              "extendedHeaderAreaTemplate" : "",
              "toolbarTemplate" : "",
              "extendedAreaTemplate" : "",
              "isScrollSpyItem" : false,
              "toolbar" : {
                "type" : "SectionToolbar",
                "position" : "inHead",
                "contents" : [ ]
              }
            }, {
              "id" : "page-header",
              "type" : "ContentContainer",
              "appearance" : {
                "class" : "f-page-header"
              },
              "size" : null,
              "contents" : [ {
                "id" : "header-nav",
                "type" : "ContentContainer",
                "appearance" : {
                  "class" : "f-page-header-base"
                },
                "size" : null,
                "contents" : [ {
                  "id" : "header-title-container",
                  "type" : "ContentContainer",
                  "appearance" : {
                    "class" : "f-title"
                  },
                  "size" : null,
                  "contents" : [ {
                    "id" : "page-header-title",
                    "type" : "HtmlTemplate",
                    "html" : "<span class=\"f-title-icon f-text-orna-manage\"><i class=\"f-icon f-icon-page-title-administer\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'采购订单列表'}}</h4>"
                  } ],
                  "visible" : true,
                  "isScrollspyContainer" : false
                }, {
                  "id" : "page-header-toolbar",
                  "type" : "ToolBar",
                  "appearance" : {
                    "class" : "col-7 f-toolbar"
                  },
                  "size" : null,
                  "items" : [ {
                    "id" : "button-add",
                    "type" : "ToolBarItem",
                    "appearance" : {
                      "class" : "btn-primary"
                    },
                    "disable" : "!viewModel.stateMachine['canAdd']",
                    "text" : "新增",
                    "visible" : true,
                    "click" : "Add1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-edit",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "viewModel.stateMachine['canStore']",
                    "text" : "编辑",
                    "visible" : true,
                    "click" : "Edit1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-view",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canView']",
                    "text" : "查看",
                    "visible" : true,
                    "click" : "View1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-delete",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canRemove']",
                    "text" : "删除",
                    "visible" : true,
                    "click" : "Remove1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "toolBarItem-9y89",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : false,
                    "text" : "查看变更日志",
                    "items" : [ ],
                    "visible" : true,
                    "click" : "rootviewmodelchangeLog1",
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "toolBarItem-lo8j",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : false,
                    "text" : "打印",
                    "items" : [ ],
                    "visible" : true,
                    "click" : "rootviewmodelprintSingle1",
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "toolBarItem-kw71",
                    "type" : "ToolBarItem",
                    "appearance" : {
                      "class" : "btn-danger"
                    },
                    "disable" : "viewModel.stateMachine['canStore']",
                    "text" : "提交订单",
                    "items" : [ ],
                    "visible" : true,
                    "click" : "rootviewmodelsendGoods2",
                    "usageMode" : "button",
                    "modalConfig" : null,
                    "icon" : {
                      "iconName" : "",
                      "iconClass" : ""
                    },
                    "tipsEnable" : false
                  } ],
                  "visible" : true,
                  "buttonSize" : "default",
                  "popDirection" : "default"
                } ],
                "visible" : true,
                "isScrollspyContainer" : false
              } ],
              "visible" : true,
              "isScrollspyContainer" : false
            }, {
              "id" : "page-main",
              "type" : "ContentContainer",
              "appearance" : {
                "class" : "f-page-main"
              },
              "size" : null,
              "contents" : [ {
                "id" : "data-grid-component-ref",
                "type" : "ComponentRef",
                "component" : "data-grid-component",
                "visible" : true
              } ],
              "visible" : true,
              "isScrollspyContainer" : false
            } ],
            "visible" : true,
            "isScrollspyContainer" : false
          } ],
          "appearance" : null,
          "visible" : true,
          "afterViewInit" : null,
          "name" : "根组件"
        }, {
          "id" : "data-grid-component",
          "type" : "Component",
          "componentType" : "dataGrid",
          "viewModel" : "data-grid-component-viewmodel",
          "appearance" : {
            "class" : "f-struct-wrapper f-utils-fill-flex-column"
          },
          "onInit" : "",
          "contents" : [ {
            "id" : "data-grid-section",
            "type" : "Section",
            "appearance" : {
              "class" : "f-section-grid f-section-in-managelist"
            },
            "size" : null,
            "mainTitle" : "",
            "subTitle" : "",
            "headerClass" : "",
            "titleClass" : "",
            "extendedHeaderAreaClass" : "",
            "toolbarClass" : "",
            "extendedAreaClass" : "",
            "contentTemplateClass" : "",
            "fill" : true,
            "expanded" : true,
            "enableMaximize" : true,
            "enableAccordion" : true,
            "accordionMode" : "default",
            "showHeader" : false,
            "headerTemplate" : "",
            "titleTemplate" : "",
            "extendedHeaderAreaTemplate" : "",
            "toolbarTemplate" : "",
            "extendedAreaTemplate" : "",
            "contents" : [ {
              "id" : "dataGrid",
              "type" : "DataGrid",
              "controlSource" : "Farris",
              "appearance" : {
                "class" : "f-component-grid"
              },
              "size" : null,
              "dataSource" : "purchaseOrders",
              "fields" : [ {
                "id" : "orderCode_57e3230a_bnu4",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "订单编号",
                "captionTemplate" : null,
                "dataField" : "orderCode",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "orderCode",
                  "field" : "57e3230a-9a80-48c2-97b0-785bb6c77fe2",
                  "fullPath" : "OrderCode"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "localizationType" : "Date"
              }, {
                "id" : "orderName_547b5e91_ui0i",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "订单名称",
                "captionTemplate" : null,
                "dataField" : "orderName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "orderName",
                  "field" : "547b5e91-bb43-463e-8898-bf5f87ca15f1",
                  "fullPath" : "OrderName"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "localizationType" : "Date"
              }, {
                "id" : "purchaseDept_PurchaseDept_name_2c6c71c1_a32l",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "名称",
                "captionTemplate" : null,
                "dataField" : "purchaseDept.purchaseDept_name",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "purchaseDept_PurchaseDept_name",
                  "field" : "2c6c71c1-fb98-47cb-a806-7e89b050d591",
                  "fullPath" : "PurchaseDept.PurchaseDept_name"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "localizationType" : "Date"
              }, {
                "id" : "purchaser_Purchaser_Name_c5bf6949_w6ao",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "名称",
                "captionTemplate" : null,
                "dataField" : "purchaser.purchaser_Name",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "purchaser_Purchaser_Name",
                  "field" : "c5bf6949-627b-4cd8-9b65-42db21acf995",
                  "fullPath" : "Purchaser.Purchaser_Name"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "localizationType" : "Date"
              }, {
                "id" : "orderDate_a51eb05d_5ohq",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "下单日期",
                "captionTemplate" : null,
                "dataField" : "orderDate",
                "dataType" : "date",
                "binding" : {
                  "type" : "Form",
                  "path" : "orderDate",
                  "field" : "a51eb05d-b4c3-4c45-8a30-95eae4357279",
                  "fullPath" : "OrderDate"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "date",
                  "dateFormat" : "yyyy-MM-dd"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "localizationType" : "Date",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : ""
              }, {
                "id" : "totalPrice_a5be115d_7il8",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "物料总价",
                "captionTemplate" : null,
                "dataField" : "totalPrice",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "totalPrice",
                  "field" : "a5be115d-f47f-4b2b-aa4a-0920ff22d51a",
                  "fullPath" : "TotalPrice"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "number",
                  "precision" : 2,
                  "thousand" : ",",
                  "decimal" : "."
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : ""
              }, {
                "id" : "isFinished_91d7235a_1sa3",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "入库状态",
                "binding" : {
                  "type" : "Form",
                  "path" : "isFinished",
                  "field" : "91d7235a-9426-42fd-8b06-78d66f80c0c7",
                  "fullPath" : "IsFinished"
                },
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "readonly" : true,
                "dataField" : "isFinished",
                "dataType" : "enum",
                "displayTemplate" : null,
                "captionTemplate" : null,
                "editor" : null,
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "enumData" : [ {
                  "name" : "已入库",
                  "value" : "yes"
                }, {
                  "name" : "未入库",
                  "value" : "no"
                } ],
                "idField" : "value",
                "textField" : "name",
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "enum"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "visible" : true,
                "enableFilter" : false,
                "headerStyler" : "",
                "styler" : "",
                "localization" : false,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "colTemplate" : "<div style=\"display: flex;flex-direction: row;align-items: center;\" class=\"f-datagrid-cell-content\">\r\n    <ng-container [ngSwitch]=\"ctx.rowData['isFinished']\">\r\n        <span class=\"badge badge-border-danger\" *ngSwitchCase=\"'no'\">未入库</span>\r\n        <span class=\"badge badge-border-success\" *ngSwitchCase=\"'yes'\">已入库</span>\r\n        <span *ngSwitchDefault></span>\r\n    </ng-container>\r\n</div>"
              } ],
              "focusedItem" : null,
              "focusedIndex" : null,
              "identifyField" : null,
              "multiSelect" : false,
              "selectable" : null,
              "showCheckbox" : false,
              "showAllCheckbox" : false,
              "checkOnSelect" : false,
              "selectOnCheck" : false,
              "itemTemplate" : null,
              "toolBar" : null,
              "summary" : null,
              "groupable" : false,
              "group" : null,
              "showGroupColumn" : true,
              "groupFormatter" : null,
              "groupStyler" : null,
              "groupFooter" : false,
              "fitColumns" : true,
              "autoFitColumns" : true,
              "virtualized" : false,
              "virtualizedAsyncLoad" : false,
              "scrollYLoad" : "ChangePage1",
              "onSelectionChange" : null,
              "fieldEditable" : false,
              "appendRow" : null,
              "disable" : false,
              "pageChange" : "ChangePage1",
              "pageSizeChanged" : "ChangePage1",
              "styler" : "(rowData) => {\r\n    if (rowData.totalPrice > 10000) {\r\n        return {\r\n            style: {\r\n                color: 'red',\r\n            }\r\n        };\r\n    }\r\n}",
              "multiSort" : false,
              "showBorder" : false,
              "striped" : true,
              "showLineNumber" : true,
              "disableRow" : null,
              "beforeSelect" : null,
              "beforeUnSelect" : null,
              "beforeCheck" : null,
              "beforeUnCheck" : null,
              "dblClickRow" : null,
              "showFooter" : false,
              "footerTemplate" : "",
              "footerDataFrom" : "client",
              "footerDataCommand" : null,
              "enableFilterRow" : false,
              "remoteFilter" : false,
              "showFilterBar" : false,
              "useControlPanel" : false,
              "autoHeight" : false,
              "showSelectedList" : false,
              "selectedItemFormatter" : null,
              "lineNumberWidth" : 36,
              "enableMorePageSelect" : false,
              "pagination" : true,
              "lockPagination" : "viewModel.stateMachine&&viewModel.stateMachine['editable']",
              "showPageSize" : false,
              "editable" : null,
              "fixedColumns" : [ ],
              "enableCommandColumn" : false,
              "onEditClicked" : "datagridcomponentviewmodelEdit1",
              "onDeleteClicked" : "datagridcomponentviewmodelRemove1",
              "commandColumnWidth" : 120,
              "showCommandColumn" : true,
              "checkedChange" : null,
              "footerHeight" : 29,
              "filterType" : "none",
              "enableSmartFilter" : false,
              "lineNumberTitle" : "序",
              "rowClick" : null,
              "headerWrap" : false,
              "emptyTemplate" : null,
              "emptyDataHeight" : 36,
              "maxHeight" : 300,
              "rowHeight" : 30,
              "enableHighlightCell" : false,
              "enableEditCellStyle" : false,
              "showRowGroupPanel" : false,
              "enableDragColumn" : false,
              "groupSummaryPosition" : "groupFooterRow",
              "clearSelectionsWhenDataIsEmpty" : true,
              "keepSelect" : true,
              "enableEditByCard" : "none",
              "visible" : true,
              "showGotoInput" : false,
              "scrollBarShowMode" : "auto",
              "showScrollArrow" : false,
              "footerPosition" : "bottom",
              "footerStyler" : null,
              "selectOnEditing" : false,
              "selectionMode" : "default",
              "enableContextMenu" : false,
              "disableGroupOnEditing" : true,
              "enableSimpleMode" : false,
              "enableScheme" : false,
              "beforeEdit" : null,
              "nowrap" : true,
              "mergeCell" : false,
              "remoteSort" : false,
              "columnSorted" : null,
              "enableHeaderGroup" : false,
              "headerGroup" : null,
              "AutoColumnWidthUseDblclick" : true,
              "pagerContentTemplate" : null,
              "expandGroupRows" : true,
              "useBlankWhenDataIsEmpty" : false,
              "pageList" : "10,20,30,50,100",
              "pageSize" : 20,
              "checked" : null,
              "unChecked" : null,
              "checkAll" : null,
              "unCheckAll" : null,
              "filterChanged" : null
            } ],
            "visible" : true,
            "isScrollSpyItem" : false,
            "toolbar" : {
              "type" : "SectionToolbar",
              "position" : "inHead",
              "contents" : [ ]
            }
          } ],
          "visible" : true,
          "afterViewInit" : null,
          "name" : "表格组件"
        } ],
        "webcmds" : [ {
          "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
          "path" : "/projects/packages/Inspur.GS.Gsp.Web.WebCmp/webcmd",
          "name" : "ListController.webcmd",
          "refedHandlers" : [ {
            "host" : "93ee1cd2-cf0b-40b3-b99f-958a3d1fad1c",
            "handler" : "Load"
          }, {
            "host" : "71ae8a4c-6202-4875-9246-2e2d959da37f",
            "handler" : "Search"
          }, {
            "host" : "77556491-41c0-4356-8ccf-25e39817060e",
            "handler" : "Add"
          }, {
            "host" : "52fdcac3-46c8-466e-aa5d-19920ece2076",
            "handler" : "View"
          }, {
            "host" : "7ade9996-0531-4401-b1bc-fb9ec8ee3f8e",
            "handler" : "Edit"
          }, {
            "host" : "6d5a354f-871f-43e6-82bc-7837184380d3",
            "handler" : "RemoveRows"
          }, {
            "host" : "1a1b7c33-38f0-469f-a017-223086ee6259",
            "handler" : "ChangePage"
          }, {
            "host" : "debae2dd-3387-48cf-90ba-96e74ab5a8e5",
            "handler" : "Remove"
          }, {
            "host" : "7f4ce21d-d8c0-4248-8835-4e3d3b172f79",
            "handler" : "Edit"
          }, {
            "host" : "e0dd64f5-46fe-43a2-b75c-8715de231c69",
            "handler" : "Remove"
          } ],
          "code" : "ListController",
          "nameSpace" : "Inspur.GS.Gsp.Web.WebCmp"
        }, {
          "id" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9",
          "path" : "igix/Web/WebCmp/bo-webcmp/metadata/webcmd/data-commands",
          "name" : "LoadCommands.webcmd",
          "refedHandlers" : [ {
            "host" : "0d36eb0a-fe86-4769-b232-b84c72dcc02f",
            "handler" : "Filter"
          } ],
          "code" : "LoadCommands",
          "nameSpace" : "Inspur.GS.Gsp.Web.WebCmp"
        }, {
          "id" : "3c879d05-7849-4a15-806b-0f61cf6b993a",
          "path" : "SCM/CM/PurchaseOrder/bo-purchaseorder-front/metadata/components",
          "name" : "PurchaseOrderList_frm_changeLog.webcmd",
          "refedHandlers" : [ {
            "host" : "b9b25f42-56b6-4d77-8659-1323930838ae",
            "handler" : "changeLog"
          } ],
          "code" : "PurchaseOrderList_frm_changeLog",
          "nameSpace" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Front"
        }, {
          "id" : "e353b4e9-e073-4e18-b9f7-ec4cc8ac72b1",
          "path" : "SCM/CM/PurchaseOrder/bo-purchaseorder-front/metadata/components",
          "name" : "PrintService.webcmd",
          "refedHandlers" : [ {
            "host" : "ad7b2267-f4ef-4901-bbeb-bb5cdf8f8780",
            "handler" : "printSingle"
          } ],
          "code" : "PrintService",
          "nameSpace" : "Inspur.GS.Gsp.Web.PrintService"
        }, {
          "id" : "93e3abaa-a680-4e3b-ba2b-222daab593ef",
          "path" : "SCM/CM/PurchaseOrder/bo-purchaseorder-front/metadata/components",
          "name" : "PurchaseOrderList_frm_Add.webcmd",
          "refedHandlers" : [ ],
          "code" : "PurchaseOrderList_frm_Add",
          "nameSpace" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Front"
        }, {
          "id" : "af556706-842f-48cf-ac14-36cfeb8d5beb",
          "path" : "SCM/CM/PurchaseOrder/bo-purchaseorder-front/metadata/components",
          "name" : "PurchaseOrderList_frm_Controller.webcmd",
          "refedHandlers" : [ {
            "host" : "5237cfe8-6375-4098-95c0-32fe05ae8c95",
            "handler" : "sendGoods"
          }, {
            "host" : "6c319cdb-66fa-4dc2-ad58-bb752de6fd9b",
            "handler" : "sendGoods"
          } ],
          "code" : "PurchaseOrderList_frm_Controller",
          "nameSpace" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Front"
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-purchaseorder-front",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "expressions" : [ ],
        "metadataId" : "e3af421f-8e5a-4684-92b5-3ac56d690c00",
        "actions" : [ {
          "sourceComponent" : {
            "id" : "query-scheme-1",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "onQuery",
                "name" : "查询"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "0d36eb0a-fe86-4769-b232-b84c72dcc02f",
                "label" : "Filter1",
                "name" : "过滤并加载数据1",
                "handlerName" : "Filter",
                "params" : [ {
                  "name" : "filter",
                  "shownName" : "过滤条件",
                  "value" : "{UISTATE~/root-component/originalFilterConditionList}",
                  "defaultValue" : null
                }, {
                  "name" : "sort",
                  "shownName" : "排序条件",
                  "value" : "",
                  "defaultValue" : null
                } ],
                "cmpId" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9",
                "label" : "LoadCommands",
                "name" : "数据加载相关命令"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-add",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "77556491-41c0-4356-8ccf-25e39817060e",
                "label" : "Add1",
                "name" : "在新页签中新增数据",
                "handlerName" : "Add",
                "params" : [ {
                  "name" : "url",
                  "shownName" : "功能菜单标识",
                  "value" : "b343c796-589b-4722-bf12-34dab0a29f5b",
                  "defaultValue" : null
                }, {
                  "name" : "params",
                  "shownName" : "附加参数",
                  "value" : "{\"action\":\"LoadAndAdd1\"}",
                  "defaultValue" : null
                }, {
                  "name" : "enableRefresh",
                  "shownName" : "支持刷新列表数据",
                  "value" : "",
                  "defaultValue" : null
                }, {
                  "name" : "tabName",
                  "shownName" : "标签页标题",
                  "value" : "",
                  "defaultValue" : null
                }, {
                  "name" : "destructuring",
                  "shownName" : "是否解构参数",
                  "value" : "",
                  "defaultValue" : null
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "label" : "ListController",
                "name" : "列表控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-edit",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "7ade9996-0531-4401-b1bc-fb9ec8ee3f8e",
                "label" : "Edit1",
                "name" : "在新页签中编辑数据",
                "handlerName" : "Edit",
                "params" : [ {
                  "name" : "url",
                  "shownName" : "功能菜单标识",
                  "value" : "b343c796-589b-4722-bf12-34dab0a29f5b",
                  "defaultValue" : null
                }, {
                  "name" : "params",
                  "shownName" : "附加参数",
                  "value" : "{\"action\":\"LoadAndEdit1\", \"id\":\"{DATA~/data-grid-component/id}\"}",
                  "defaultValue" : null
                }, {
                  "name" : "idToEdit",
                  "shownName" : "待编辑数据的标识",
                  "value" : "{DATA~/data-grid-component/id}",
                  "defaultValue" : null
                }, {
                  "name" : "enableRefresh",
                  "shownName" : "支持刷新列表数据",
                  "value" : "",
                  "defaultValue" : null
                }, {
                  "name" : "tabName",
                  "shownName" : "标签页标题",
                  "value" : "",
                  "defaultValue" : null
                }, {
                  "name" : "destructuring",
                  "shownName" : "是否解构参数",
                  "value" : "",
                  "defaultValue" : null
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "label" : "ListController",
                "name" : "列表控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-view",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "52fdcac3-46c8-466e-aa5d-19920ece2076",
                "label" : "View1",
                "name" : "在新页签中查看数据",
                "handlerName" : "View",
                "params" : [ {
                  "name" : "url",
                  "shownName" : "功能菜单标识",
                  "value" : "b343c796-589b-4722-bf12-34dab0a29f5b",
                  "defaultValue" : null
                }, {
                  "name" : "params",
                  "shownName" : "附加参数",
                  "value" : "{\"action\":\"LoadAndView1\", \"id\":\"{DATA~/data-grid-component/id}\"}",
                  "defaultValue" : null
                }, {
                  "name" : "idToView",
                  "shownName" : "待查看数据的标识",
                  "value" : "{DATA~/data-grid-component/id}",
                  "defaultValue" : null
                }, {
                  "name" : "enableRefresh",
                  "shownName" : "支持刷新列表数据",
                  "value" : "",
                  "defaultValue" : null
                }, {
                  "name" : "tabName",
                  "shownName" : "标签页标题",
                  "value" : "",
                  "defaultValue" : null
                }, {
                  "name" : "destructuring",
                  "shownName" : "是否解构参数",
                  "value" : "",
                  "defaultValue" : null
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "label" : "ListController",
                "name" : "列表控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-delete",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "debae2dd-3387-48cf-90ba-96e74ab5a8e5",
                "label" : "Remove1",
                "name" : "删除当前数据",
                "handlerName" : "Remove",
                "params" : [ {
                  "name" : "id",
                  "shownName" : "待删除数据的标识",
                  "value" : "{DATA~/data-grid-component/id}",
                  "defaultValue" : null
                }, {
                  "name" : "refreshCommandName",
                  "shownName" : "删除后回调方法",
                  "value" : "",
                  "defaultValue" : null
                }, {
                  "name" : "refreshCommandFrameId",
                  "shownName" : "目标组件",
                  "value" : "",
                  "defaultValue" : null
                }, {
                  "name" : "successMsg",
                  "shownName" : "删除成功提示信息",
                  "value" : "",
                  "defaultValue" : null
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "label" : "ListController",
                "name" : "列表控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "toolBarItem-9y89",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "b9b25f42-56b6-4d77-8659-1323930838ae",
                "label" : "rootviewmodelchangeLog1",
                "name" : "changeLog1",
                "handlerName" : "changeLog",
                "params" : [ ],
                "cmpId" : "3c879d05-7849-4a15-806b-0f61cf6b993a",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "3c879d05-7849-4a15-806b-0f61cf6b993a",
                "label" : "PurchaseOrderList_frm_changeLog",
                "name" : "采购订单列表_frm_查看变更日志"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "toolBarItem-lo8j",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "ad7b2267-f4ef-4901-bbeb-bb5cdf8f8780",
                "label" : "rootviewmodelprintSingle1",
                "name" : "打印单条数据1",
                "handlerName" : "printSingle",
                "params" : [ {
                  "name" : "beMetaId",
                  "shownName" : "数据源Id",
                  "value" : "385d8182-1b4a-4c7d-9d7f-2fe1ca5283ab",
                  "defaultValue" : null
                }, {
                  "name" : "bizBillId",
                  "shownName" : "业务单据ID",
                  "value" : "{UISTATE~/data-grid-component/ids}",
                  "defaultValue" : null
                } ],
                "cmpId" : "e353b4e9-e073-4e18-b9f7-ec4cc8ac72b1",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "e353b4e9-e073-4e18-b9f7-ec4cc8ac72b1",
                "label" : "PrintService",
                "name" : "打印控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "toolBarItem-kw71",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "6c319cdb-66fa-4dc2-ad58-bb752de6fd9b",
                "label" : "rootviewmodelsendGoods2",
                "name" : "Instorage2",
                "handlerName" : "sendGoods",
                "params" : [ {
                  "name" : "id",
                  "shownName" : "id",
                  "value" : "{DATA~/data-grid-component/id}"
                }, {
                  "name" : "IsFinished",
                  "shownName" : "IsFinished",
                  "value" : "yes"
                }, {
                  "name" : "loadCmdName",
                  "shownName" : "数据刷新命令名称",
                  "value" : "Load1"
                }, {
                  "name" : "loadCmdFrameId",
                  "shownName" : "数据刷新命令对应的FrameId",
                  "value" : "#{root-component}"
                } ],
                "cmpId" : "af556706-842f-48cf-ac14-36cfeb8d5beb",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "af556706-842f-48cf-ac14-36cfeb8d5beb",
                "label" : "PurchaseOrderList_frm_Controller",
                "name" : "采购订单列表_frm_Controller"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "root-component",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "onInit",
                "name" : "初始化事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "0d36eb0a-fe86-4769-b232-b84c72dcc02f",
                "label" : "Filter1",
                "name" : "过滤并加载数据1",
                "handlerName" : "Filter",
                "params" : [ {
                  "name" : "filter",
                  "shownName" : "过滤条件",
                  "value" : "{UISTATE~/root-component/originalFilterConditionList}",
                  "defaultValue" : null
                }, {
                  "name" : "sort",
                  "shownName" : "排序条件",
                  "value" : "",
                  "defaultValue" : null
                } ],
                "cmpId" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9",
                "label" : "LoadCommands",
                "name" : "数据加载相关命令"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "dataGrid",
            "viewModelId" : "data-grid-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "pageChange",
                "name" : "切换页码"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "1a1b7c33-38f0-469f-a017-223086ee6259",
                "label" : "ChangePage1",
                "name" : "切换页码",
                "handlerName" : "ChangePage",
                "params" : [ {
                  "name" : "loadCommandName",
                  "shownName" : "切换页面后回调方法",
                  "value" : "Filter1"
                }, {
                  "name" : "loadCommandFrameId",
                  "shownName" : "目标组件",
                  "value" : "root-component"
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "label" : "ListController",
                "name" : "列表控制器"
              }
            }, {
              "event" : {
                "label" : "pageSizeChanged",
                "name" : "分页条数变化事件"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "1a1b7c33-38f0-469f-a017-223086ee6259",
                "label" : "ChangePage1",
                "name" : "切换页码",
                "handlerName" : "ChangePage",
                "params" : [ {
                  "name" : "loadCommandName",
                  "shownName" : "切换页面后回调方法",
                  "value" : "Filter1"
                }, {
                  "name" : "loadCommandFrameId",
                  "shownName" : "目标组件",
                  "value" : "root-component"
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "label" : "ListController",
                "name" : "列表控制器"
              }
            }, {
              "event" : {
                "label" : "scrollYLoad",
                "name" : "滚动加载事件"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "1a1b7c33-38f0-469f-a017-223086ee6259",
                "label" : "ChangePage1",
                "name" : "切换页码",
                "handlerName" : "ChangePage",
                "params" : [ {
                  "name" : "loadCommandName",
                  "shownName" : "切换页面后回调方法",
                  "value" : "Filter1"
                }, {
                  "name" : "loadCommandFrameId",
                  "shownName" : "目标组件",
                  "value" : "root-component"
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "label" : "ListController",
                "name" : "列表控制器"
              }
            }, {
              "event" : {
                "label" : "onEditClicked",
                "name" : "操作列点击编辑"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "7f4ce21d-d8c0-4248-8835-4e3d3b172f79",
                "label" : "datagridcomponentviewmodelEdit1",
                "name" : "在新页签中编辑数据1",
                "handlerName" : "Edit",
                "params" : [ {
                  "name" : "url",
                  "shownName" : "功能菜单标识",
                  "value" : "b343c796-589b-4722-bf12-34dab0a29f5b"
                }, {
                  "name" : "params",
                  "shownName" : "附加参数",
                  "value" : "{\"action\":\"LoadAndEdit1\",\"id\":\"{DATA~/data-grid-component/id}\"}"
                }, {
                  "name" : "idToEdit",
                  "shownName" : "待编辑数据的标识",
                  "value" : "{DATA~/data-grid-component/id}"
                }, {
                  "name" : "enableRefresh",
                  "shownName" : "支持刷新列表数据",
                  "value" : true
                }, {
                  "name" : "tabName",
                  "shownName" : "标签页标题",
                  "value" : ""
                }, {
                  "name" : "destructuring",
                  "shownName" : "是否解构参数",
                  "value" : ""
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "isNewGenerated" : true,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "label" : "ListController",
                "name" : "列表控制器"
              }
            }, {
              "event" : {
                "label" : "onDeleteClicked",
                "name" : "操作列点击删除"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "e0dd64f5-46fe-43a2-b75c-8715de231c69",
                "label" : "datagridcomponentviewmodelRemove1",
                "name" : "删除当前数据1",
                "handlerName" : "Remove",
                "params" : [ {
                  "name" : "id",
                  "shownName" : "待删除数据的标识",
                  "value" : "{DATA~/data-grid-component/id}"
                }, {
                  "name" : "refreshCommandName",
                  "shownName" : "删除后回调方法",
                  "value" : ""
                }, {
                  "name" : "refreshCommandFrameId",
                  "shownName" : "目标组件",
                  "value" : ""
                }, {
                  "name" : "successMsg",
                  "shownName" : "删除成功提示信息",
                  "value" : ""
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "isNewGenerated" : true,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "label" : "ListController",
                "name" : "列表控制器"
              }
            } ]
          }
        } ],
        "extraImports" : [ {
          "name" : "ChgdrModule",
          "path" : "@gsp-cmp/chgdr"
        } ]
      },
      "options" : {
        "enableTextArea" : true,
        "renderMode" : "compile",
        "enableDeleteSourceCode" : true,
        "changeSetPolicy" : "valid"
      }
    },
    "Id" : "e3af421f-8e5a-4684-92b5-3ac56d690c00",
    "CreationDate" : null
  },
  "ExtendRule" : null,
  "RelativePath" : "SCM/CM/PurchaseOrder/bo-purchaseorder-front/metadata/components",
  "ExtendProperty" : "",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}