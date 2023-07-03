{
  "Header" : {
    "Code" : "PurchaseOrderDetail",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Front",
    "CertId" : null,
    "Name" : "采购订单详情",
    "FileName" : "PurchaseOrderDetail.frm",
    "BizobjectID" : "8de461f4-9c5e-b7fc-9d76-c1108500332d",
    "Language" : null,
    "Extendable" : false,
    "ID" : "4cad6faa-e321-421e-8f5d-9238173ed6b5",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "36798c83-1465-4fa6-821b-8cf93ece066a",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Front",
      "Code" : "PurchaseOrderDetail.frm",
      "Name" : "PurchaseOrderDetail.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "8de461f4-9c5e-b7fc-9d76-c1108500332d"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Id" : "4cad6faa-e321-421e-8f5d-9238173ed6b5",
    "Contents" : {
      "module" : {
        "id" : "PurchaseOrderDetail",
        "code" : "PurchaseOrderDetail",
        "name" : "采购订单详情",
        "caption" : "采购订单详情",
        "type" : "Module",
        "creator" : "shizhiyuan",
        "creationDate" : "2023-06-25T03:17:06.610Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "card-template",
        "templateId" : "card-template",
        "schemas" : [ {
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "code" : "PurchaseOrderDetail_frm",
          "id" : "9c4742c3-a1f7-49fe-969d-21dd36f60c5d",
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
                "id" : "69aa0726-6d15-4bb0-a971-1259c125473f",
                "label" : "id",
                "originalId" : "69aa0726-6d15-4bb0-a971-1259c125473f",
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
                "id" : "5dedca27-583c-4ac8-b64c-aee82f797e67",
                "label" : "version",
                "originalId" : "5dedca27-583c-4ac8-b64c-aee82f797e67",
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
                "id" : "8f6f5647-0183-4b93-a527-c32c3e0122d1",
                "label" : "orderCode",
                "originalId" : "8f6f5647-0183-4b93-a527-c32c3e0122d1",
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
                "id" : "35bceb1e-c0e3-437e-b5e2-8961d8c07d7c",
                "label" : "orderName",
                "originalId" : "35bceb1e-c0e3-437e-b5e2-8961d8c07d7c",
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
                    "id" : "9b597498-17d0-440a-a9cb-6ef8076ac3f6",
                    "label" : "purchaseDept_ID",
                    "originalId" : "9b597498-17d0-440a-a9cb-6ef8076ac3f6",
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
                    "id" : "a6a5688e-0dec-44a0-b589-a0994bb210fe",
                    "label" : "purchaseDept_name",
                    "originalId" : "a6a5688e-0dec-44a0-b589-a0994bb210fe",
                    "name" : "名称"
                  } ],
                  "primary" : "purchaseDept",
                  "entities" : [ ],
                  "name" : "SysOrg77e5",
                  "displayName" : "系统组织"
                },
                "path" : "PurchaseDept",
                "code" : "PurchaseDept",
                "id" : "f3d53165-6e4a-4f4e-a9d0-aa5312887885",
                "label" : "purchaseDept",
                "originalId" : "f3d53165-6e4a-4f4e-a9d0-aa5312887885",
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
                    "id" : "a3a8f251-b51e-40ae-804a-4da5e0ffd4b3",
                    "label" : "purchaser_ID",
                    "originalId" : "a3a8f251-b51e-40ae-804a-4da5e0ffd4b3",
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
                    "id" : "8e36074b-2ce1-4eb6-93fa-7b3d306bca28",
                    "label" : "purchaser_Name",
                    "originalId" : "8e36074b-2ce1-4eb6-93fa-7b3d306bca28",
                    "name" : "名称"
                  } ],
                  "primary" : "purchaser",
                  "entities" : [ ],
                  "name" : "GspUser57e9",
                  "displayName" : "用户"
                },
                "path" : "Purchaser",
                "code" : "Purchaser",
                "id" : "edc8e2f6-c74c-4d0a-a130-690af20ef2fa",
                "label" : "purchaser",
                "originalId" : "edc8e2f6-c74c-4d0a-a130-690af20ef2fa",
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
                "id" : "56f7fcde-371c-49f8-a2bc-30a748baa995",
                "label" : "orderDate",
                "originalId" : "56f7fcde-371c-49f8-a2bc-30a748baa995",
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
                "id" : "b3c131a8-baa8-47e0-bf39-97dbacc7167a",
                "label" : "totalPrice",
                "originalId" : "b3c131a8-baa8-47e0-bf39-97dbacc7167a",
                "name" : "物料总价"
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
                    "id" : "5cf5c69f-7542-4a98-bc3f-7017b5b1fe3a",
                    "label" : "id",
                    "originalId" : "5cf5c69f-7542-4a98-bc3f-7017b5b1fe3a",
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
                    "id" : "d5c70544-3144-4486-a0f7-698e068d09ac",
                    "label" : "parentID",
                    "originalId" : "d5c70544-3144-4486-a0f7-698e068d09ac",
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
                        "id" : "157adf3d-a317-4cd8-9642-58a7941e62f6",
                        "label" : "materialId_ID",
                        "originalId" : "157adf3d-a317-4cd8-9642-58a7941e62f6",
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
                        "id" : "4b4e149b-d3bd-4e88-bc82-dd62908f1232",
                        "label" : "materialId_MaterialCode",
                        "originalId" : "4b4e149b-d3bd-4e88-bc82-dd62908f1232",
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
                        "id" : "a5c03a88-a5f0-45a7-a071-682171d9dce8",
                        "label" : "materialId_MaterialName",
                        "originalId" : "a5c03a88-a5f0-45a7-a071-682171d9dce8",
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
                        "id" : "e3cd5498-447c-4aff-aa1a-d45d414f2be3",
                        "label" : "materialId_EvePrice",
                        "originalId" : "e3cd5498-447c-4aff-aa1a-d45d414f2be3",
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
                        "id" : "d031c736-1a00-4bf5-a959-976f210c8836",
                        "label" : "materialId_MaterialCat_CatName",
                        "originalId" : "d031c736-1a00-4bf5-a959-976f210c8836",
                        "name" : "类别名称"
                      } ],
                      "primary" : "materialId",
                      "entities" : [ ],
                      "name" : "MaterialE577",
                      "displayName" : "物料管理"
                    },
                    "path" : "MaterialId",
                    "code" : "MaterialId",
                    "id" : "62f72808-b326-473e-b631-b83598e8cb65",
                    "label" : "materialId",
                    "originalId" : "62f72808-b326-473e-b631-b83598e8cb65",
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
                    "id" : "58fd9353-d79e-4b69-a56b-f9965e39a5c8",
                    "label" : "amount",
                    "originalId" : "58fd9353-d79e-4b69-a56b-f9965e39a5c8",
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
                        "id" : "88036938-073d-4b15-9a7c-f2c497540660",
                        "label" : "supplier_ID",
                        "originalId" : "88036938-073d-4b15-9a7c-f2c497540660",
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
                        "id" : "63c38913-593b-45f9-ac09-4cc825ec926d",
                        "label" : "supplier_SupplierName",
                        "originalId" : "63c38913-593b-45f9-ac09-4cc825ec926d",
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
                        "id" : "ae2bec36-a4bf-45db-b418-ff30f7fa8fa8",
                        "label" : "supplier_SupplierCode",
                        "originalId" : "ae2bec36-a4bf-45db-b418-ff30f7fa8fa8",
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
                        "id" : "bbc84198-6c76-48a5-a182-8aa4ef57cc3b",
                        "label" : "supplier_ContactsEmail",
                        "originalId" : "bbc84198-6c76-48a5-a182-8aa4ef57cc3b",
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
                        "id" : "65f7e3ff-56e0-4faf-8a87-fe7fb8fe5a78",
                        "label" : "supplier_ContactsAddress",
                        "originalId" : "65f7e3ff-56e0-4faf-8a87-fe7fb8fe5a78",
                        "name" : "办公地址"
                      } ],
                      "primary" : "supplier",
                      "entities" : [ ],
                      "name" : "SupplierMa64ae",
                      "displayName" : "供应商管理"
                    },
                    "path" : "Supplier",
                    "code" : "Supplier",
                    "id" : "a38de9ae-39f0-452b-bdc1-fe3b75acb636",
                    "label" : "supplier",
                    "originalId" : "a38de9ae-39f0-452b-bdc1-fe3b75acb636",
                    "name" : "供应商"
                  } ],
                  "primary" : "id",
                  "entities" : [ ],
                  "name" : "OrderDetails",
                  "displayName" : "采购订单明细"
                },
                "code" : "OrderDetails",
                "id" : "40c26608-1d4d-4b0b-a79e-06bb4878c3ba",
                "label" : "orderDetailss",
                "name" : "采购订单明细"
              } ],
              "name" : "PurchaseOrder",
              "displayName" : "采购订单"
            },
            "code" : "PurchaseOrder",
            "id" : "50ccf6b5-ae68-468e-b806-c588c54c470e",
            "label" : "purchaseOrders",
            "name" : "采购订单"
          } ],
          "sourceType" : "vo",
          "variables" : [ ],
          "sourceUri" : "api/scm/cm/v1.0/PurchaseOrderDetail_frm",
          "name" : "采购订单详情_frm",
          "eapiId" : "abb501e5-96a9-488a-bfcf-046fa2f8d931",
          "eapiCode" : "PurchaseOrderDetail_frm",
          "eapiName" : "采购订单详情_frm",
          "eapiNameSpace" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Front",
          "voPath" : "SCM/CM/PurchaseOrder/bo-purchaseorder-front/metadata/components",
          "voNameSpace" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Front"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "PurchaseOrderDetail_state_machine",
          "name" : "采购订单详情_frm",
          "uri" : "aa7e765c-4a9b-4385-9da8-919526aa79ed",
          "code" : "PurchaseOrderDetail_frm",
          "nameSpace" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "采购订单",
          "fields" : [ ],
          "stateMachine" : "PurchaseOrderDetail_state_machine",
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "e05264fb-796d-43fb-b83b-9e2f3866c328",
            "code" : "Load1",
            "name" : "加载",
            "params" : [ {
              "name" : "action",
              "shownName" : "初始方法",
              "value" : "{UISTATE~/root-component/action}"
            } ],
            "handlerName" : "Load",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "246a275c-88c9-4c8a-aa82-be6a950a4325",
            "code" : "LoadAndAdd1",
            "name" : "加载并新增",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Create"
            } ],
            "handlerName" : "LoadAndAdd",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "70acc053-fa15-45be-851c-cf694e1bcaf7",
            "code" : "LoadAndView1",
            "name" : "加载并查看",
            "params" : [ {
              "name" : "id",
              "shownName" : "待查看数据的标识",
              "value" : "{UISTATE~/root-component/id}"
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel"
            } ],
            "handlerName" : "LoadAndView",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "3e72ee6f-8f7b-4f29-aa0e-5887f2861117",
            "code" : "LoadAndEdit1",
            "name" : "加载并编辑",
            "params" : [ {
              "name" : "id",
              "shownName" : "待编辑数据的标识",
              "value" : "{UISTATE~/root-component/id}"
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Edit"
            } ],
            "handlerName" : "LoadAndEdit",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "f90aadfa-988c-4da5-a5db-1416c3333794",
            "code" : "Add1",
            "name" : "新增数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Create"
            } ],
            "handlerName" : "Add",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "a323e27b-b9c6-4848-93b9-f117403a94ff",
            "code" : "Edit1",
            "name" : "编辑数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Edit"
            } ],
            "handlerName" : "Edit",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "31b814db-01e4-407d-8fad-0f08dbb01999",
            "code" : "Save1",
            "name" : "保存数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel"
            } ],
            "handlerName" : "Save",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "4f5ed2ec-8def-4a3c-8e7b-397ea93010e8",
            "code" : "Cancel1",
            "name" : "取消变更",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel"
            } ],
            "handlerName" : "Cancel",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "c8504c24-33e8-487a-91ce-2218b803fe01",
            "code" : "ChangeItem1",
            "name" : "ChangeItem",
            "params" : [ {
              "name" : "id",
              "shownName" : "当前数据标识",
              "value" : "{DATA~/root-component/id}"
            }, {
              "name" : "type",
              "shownName" : "切换类型(prev|next)",
              "value" : "prev"
            }, {
              "name" : "parentId",
              "shownName" : "parentId",
              "value" : "{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}",
              "description" : "当前卡片所属列表页的功能id"
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel"
            } ],
            "handlerName" : "ChangeItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "4a0cfb1a-1262-41a2-aeb9-c8edd5c09683",
            "code" : "ChangeItem2",
            "name" : "ChangeItem2",
            "params" : [ {
              "name" : "id",
              "shownName" : "当前数据标识",
              "value" : "{DATA~/root-component/id}"
            }, {
              "name" : "type",
              "shownName" : "切换类型(prev|next)",
              "value" : "next"
            }, {
              "name" : "parentId",
              "shownName" : "parentId",
              "value" : "{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}",
              "description" : "当前卡片所属列表页的功能id"
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel"
            } ],
            "handlerName" : "ChangeItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          } ],
          "states" : [ ],
          "bindTo" : "/",
          "enableUnifiedSession" : false
        }, {
          "id" : "basic-form-viewmodel",
          "code" : "basic-form-viewmodel",
          "name" : "采购订单",
          "fields" : [ {
            "type" : "Form",
            "id" : "8f6f5647-0183-4b93-a527-c32c3e0122d1",
            "fieldName" : "orderCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "35bceb1e-c0e3-437e-b5e2-8961d8c07d7c",
            "fieldName" : "orderName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "a6a5688e-0dec-44a0-b589-a0994bb210fe",
            "fieldName" : "purchaseDept_PurchaseDept_name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "PurchaseOrder.purchaseDept_PurchaseDept_name",
                  "displayName" : "系统组织帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "valueField" : "id",
                "textField" : "name",
                "displayType" : "TreeList",
                "mapFields" : "{'id':'purchaseDept.purchaseDept_ID,purchaseDept.purchaseDept','name':'purchaseDept.purchaseDept_name'}",
                "helpId" : "b524a702-7323-4d46-998e-5ba0c6abcd49"
              },
              "name" : "采购部门",
              "require" : false,
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "8e36074b-2ce1-4eb6-93fa-7b3d306bca28",
            "fieldName" : "purchaser_Purchaser_Name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "PurchaseOrder.purchaser_Purchaser_Name",
                  "displayName" : "系统用户帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "valueField" : "id",
                "textField" : "name",
                "displayType" : "List",
                "mapFields" : "{'id':'purchaser.purchaser,purchaser.purchaser_ID','name':'purchaser.purchaser_Name'}",
                "helpId" : "915a0b20-975a-4df1-8cfd-888c3dda0009"
              },
              "name" : "采购人",
              "require" : false,
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "56f7fcde-371c-49f8-a2bc-30a748baa995",
            "fieldName" : "orderDate",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "b3c131a8-baa8-47e0-bf39-97dbacc7167a",
            "fieldName" : "totalPrice",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          } ],
          "serviceRefs" : [ ],
          "commands" : [ ],
          "states" : [ ],
          "bindTo" : "/",
          "parent" : "root-viewmodel",
          "enableValidation" : true
        }, {
          "id" : "orderdetails-component-viewmodel",
          "code" : "orderdetails-component-viewmodel",
          "name" : "采购订单明细",
          "fields" : [ {
            "type" : "Form",
            "id" : "4b4e149b-d3bd-4e88-bc82-dd62908f1232",
            "fieldName" : "materialId_MaterialId_MaterialCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "OrderDetails.materialId_MaterialId_MaterialCode",
                  "displayName" : "物料管理帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "valueField" : "id",
                "textField" : "materialName",
                "displayType" : "List",
                "mapFields" : "{'id':'materialId.materialId,materialId.materialId_ID','materialCode':'materialId.materialId_MaterialCode','materialName':'materialId.materialId_MaterialName','materialCat.materialCat_CatName':'materialId.materialId_MaterialCat_CatName','evePrice':'materialId.materialId_EvePrice'}",
                "helpId" : "bb73c2e8-5e06-4a7f-9c2c-4d128ddcd54a"
              },
              "name" : "物料编号",
              "require" : false,
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "a5c03a88-a5f0-45a7-a071-682171d9dce8",
            "fieldName" : "materialId_MaterialId_MaterialName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "e3cd5498-447c-4aff-aa1a-d45d414f2be3",
            "fieldName" : "materialId_MaterialId_EvePrice",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "58fd9353-d79e-4b69-a56b-f9965e39a5c8",
            "fieldName" : "amount",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "minValue" : 0
              }
            }
          }, {
            "type" : "Form",
            "id" : "63c38913-593b-45f9-ac09-4cc825ec926d",
            "fieldName" : "supplier_Supplier_SupplierName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "ae2bec36-a4bf-45db-b418-ff30f7fa8fa8",
            "fieldName" : "supplier_Supplier_SupplierCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "OrderDetails.supplier_Supplier_SupplierCode",
                  "displayName" : "供应商管理帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "valueField" : "id",
                "textField" : "supplierCode",
                "displayType" : "List",
                "mapFields" : "{'id':'supplier.supplier,supplier.supplier_ID','supplierName':'supplier.supplier_SupplierName','supplierCode':'supplier.supplier_SupplierCode','contactsEmail':'supplier.supplier_ContactsEmail','contactsAddress':'supplier.supplier_ContactsAddress'}",
                "helpId" : "c65c0ea9-68db-4152-a875-fbee4ee70887"
              },
              "name" : "供应商编号",
              "require" : false,
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "bbc84198-6c76-48a5-a182-8aa4ef57cc3b",
            "fieldName" : "supplier_Supplier_ContactsEmail",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "65f7e3ff-56e0-4faf-8a87-fe7fb8fe5a78",
            "fieldName" : "supplier_Supplier_ContactsAddress",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "d031c736-1a00-4bf5-a959-976f210c8836",
            "fieldName" : "materialId_MaterialId_MaterialCat_CatName",
            "groupId" : "",
            "groupName" : "",
            "valueChanging" : "",
            "valueChanged" : "",
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          } ],
          "states" : [ ],
          "bindTo" : "/orderDetailss",
          "parent" : "root-viewmodel",
          "commands" : [ {
            "id" : "c42cc2d5-a20e-45a1-ac98-e47e40133bc1",
            "code" : "orderdetailsAddItem1",
            "name" : "增加一条子表数据",
            "params" : [ ],
            "handlerName" : "AddItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "orderdetails-component"
          }, {
            "id" : "ff56e2f1-2ecd-4f49-912a-b2be503b756a",
            "code" : "orderdetailsRemoveItem1",
            "name" : "删除一条子表数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除子表数据的标识",
              "value" : "{DATA~/#{orderdetails-component}/orderDetailss/id}"
            } ],
            "handlerName" : "RemoveItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          } ],
          "serviceRefs" : [ ],
          "enableValidation" : true,
          "pagination" : {
            "enable" : false
          }
        } ],
        "components" : [ {
          "id" : "root-component",
          "type" : "Component",
          "viewModel" : "root-viewmodel",
          "componentType" : "Frame",
          "onInit" : "Load1",
          "contents" : [ {
            "id" : "root-layout",
            "type" : "ContentContainer",
            "appearance" : {
              "class" : "f-page f-page-card f-page-is-mainsubcard"
            },
            "size" : null,
            "contents" : [ {
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
                    "html" : "<span class=\"f-title-icon f-text-orna-bill\"><i class=\"f-icon f-icon-page-title-record\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'采购订单详情'}},单据编号：{{viewModel.bindingData.getValue(['orderCode'])}},订单金额：{{viewModel.bindingData.getValue(['totalPrice'])}}</h4><div class=\"f-title-pagination\"><span class=\"f-icon f-icon-arrow-w\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem1()\"></span><span class=\"f-icon f-icon-arrow-e\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem2()\"></span></div>"
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
                    "text" : "新增",
                    "appearance" : {
                      "class" : "btn-primary"
                    },
                    "disable" : "!viewModel.stateMachine['canAdd']",
                    "visible" : true,
                    "click" : "Add1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-edit",
                    "type" : "ToolBarItem",
                    "text" : "编辑",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canEdit']",
                    "visible" : true,
                    "click" : "Edit1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-save",
                    "type" : "ToolBarItem",
                    "text" : "保存",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canSave']",
                    "visible" : true,
                    "click" : "Save1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-cancel",
                    "type" : "ToolBarItem",
                    "text" : "取消",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canCancel']",
                    "visible" : true,
                    "click" : "Cancel1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
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
              "id" : "main-container",
              "type" : "ContentContainer",
              "appearance" : {
                "class" : "f-page-main"
              },
              "size" : null,
              "contents" : [ {
                "id" : "like-card-container",
                "type" : "ContentContainer",
                "appearance" : {
                  "class" : "f-struct-like-card"
                },
                "size" : null,
                "contents" : [ {
                  "id" : "basic-form-component-ref",
                  "type" : "ComponentRef",
                  "component" : "basic-form-component",
                  "visible" : true
                }, {
                  "id" : "detail-container",
                  "type" : "ContentContainer",
                  "appearance" : {
                    "class" : "f-struct-wrapper"
                  },
                  "size" : null,
                  "contents" : [ {
                    "id" : "detail-section",
                    "type" : "Section",
                    "appearance" : {
                      "class" : "f-section-tabs f-section-in-mainsubcard"
                    },
                    "visible" : true,
                    "mainTitle" : "",
                    "subTitle" : "",
                    "headerClass" : "",
                    "titleClass" : "",
                    "extendedHeaderAreaClass" : "",
                    "toolbarClass" : "",
                    "extendedAreaClass" : "",
                    "contentTemplateClass" : "",
                    "fill" : false,
                    "expanded" : true,
                    "enableMaximize" : false,
                    "enableAccordion" : true,
                    "accordionMode" : "default",
                    "showHeader" : false,
                    "headerTemplate" : "",
                    "titleTemplate" : "",
                    "extendedHeaderAreaTemplate" : "",
                    "toolbarTemplate" : "",
                    "extendedAreaTemplate" : "",
                    "contents" : [ {
                      "id" : "detail-tab",
                      "type" : "Tab",
                      "controlSource" : "Farris",
                      "appearance" : {
                        "class" : "f-component-tabs f-tabs-has-grid"
                      },
                      "selected" : "orderdetails-tab-page",
                      "size" : null,
                      "position" : "top",
                      "contents" : [ {
                        "id" : "orderdetails-tab-page",
                        "type" : "TabPage",
                        "controlSource" : "Farris",
                        "title" : "采购订单明细",
                        "appearance" : null,
                        "size" : null,
                        "removeable" : false,
                        "headerTemplate" : null,
                        "contents" : [ {
                          "id" : "orderdetails-component-ref",
                          "type" : "ComponentRef",
                          "component" : "orderdetails-component",
                          "visible" : true
                        } ],
                        "toolbar" : {
                          "id" : "orderdetails-tab-toolbar",
                          "type" : "TabToolbar",
                          "position" : "inHead",
                          "contents" : [ {
                            "id" : "orderdetailsAddButton",
                            "type" : "TabToolbarItem",
                            "title" : "新增",
                            "disable" : "!viewModel.stateMachine['canAddDetail']",
                            "appearance" : {
                              "class" : "btn btn-secondary f-btn-ml"
                            },
                            "visible" : true,
                            "click" : "root-viewmodel.orderdetails-component-viewmodel.orderdetailsAddItem1"
                          }, {
                            "id" : "orderdetailsRemoveButton",
                            "type" : "TabToolbarItem",
                            "title" : "删除",
                            "disable" : "!viewModel.stateMachine['canRemoveDetail']",
                            "appearance" : {
                              "class" : "btn btn-secondary f-btn-ml"
                            },
                            "visible" : true,
                            "click" : "root-viewmodel.orderdetails-component-viewmodel.orderdetailsRemoveItem1"
                          } ]
                        },
                        "visible" : true
                      } ],
                      "tabChange" : null,
                      "tabRemove" : null,
                      "contentFill" : false,
                      "autoTitleWidth" : false,
                      "titleWidth" : 0,
                      "titleLength" : 7,
                      "visible" : true
                    } ],
                    "isScrollSpyItem" : false,
                    "toolbar" : {
                      "id" : "detail-section-toolbar",
                      "type" : "SectionToolbar",
                      "position" : "inHead",
                      "contents" : [ ]
                    }
                  } ],
                  "visible" : true,
                  "isScrollspyContainer" : false
                } ],
                "visible" : true,
                "draggable" : false,
                "isLikeCardContainer" : true,
                "isScrollspyContainer" : false
              } ],
              "visible" : true,
              "isScrollspyContainer" : false
            } ],
            "visible" : true,
            "isScrollspyContainer" : false
          } ],
          "appearance" : null,
          "visible" : true,
          "afterViewInit" : null
        }, {
          "id" : "basic-form-component",
          "type" : "Component",
          "viewModel" : "basic-form-viewmodel",
          "componentType" : "form-col-4",
          "appearance" : {
            "class" : "f-struct-wrapper"
          },
          "onInit" : "",
          "contents" : [ {
            "id" : "basic-form-section",
            "type" : "Section",
            "appearance" : {
              "class" : "f-section-form f-section-in-mainsubcard"
            },
            "visible" : true,
            "mainTitle" : "基本信息",
            "subTitle" : "",
            "headerClass" : "",
            "titleClass" : "",
            "extendedHeaderAreaClass" : "",
            "toolbarClass" : "",
            "extendedAreaClass" : "",
            "contentTemplateClass" : "",
            "fill" : false,
            "expanded" : true,
            "enableMaximize" : false,
            "enableAccordion" : true,
            "accordionMode" : "default",
            "showHeader" : true,
            "headerTemplate" : "",
            "titleTemplate" : "",
            "extendedHeaderAreaTemplate" : "",
            "toolbarTemplate" : "",
            "extendedAreaTemplate" : "",
            "contents" : [ {
              "id" : "basic-form-layout",
              "type" : "Form",
              "appearance" : {
                "class" : "f-form-layout farris-form farris-form-controls-inline"
              },
              "size" : null,
              "contents" : [ {
                "id" : "orderCode_8f6f5647_uaby",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "订单编号",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "orderCode",
                  "field" : "8f6f5647-0183-4b93-a527-c32c3e0122d1",
                  "fullPath" : "OrderCode"
                },
                "readonly" : false,
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "format" : null,
                "validation" : null,
                "value" : null,
                "maxLength" : 36,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "holdPlace" : false,
                "isTextArea" : true,
                "isPassword" : false,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "enableTips" : true,
                "path" : "orderCode",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "formatValidation" : {
                  "type" : "none",
                  "expression" : "",
                  "message" : ""
                },
                "autoHeight" : false,
                "maxHeight" : 500,
                "labelAutoOverflow" : false,
                "updateOn" : "blur"
              }, {
                "id" : "orderName_35bceb1e_r0en",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "订单名称",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "orderName",
                  "field" : "35bceb1e-c0e3-437e-b5e2-8961d8c07d7c",
                  "fullPath" : "OrderName"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "format" : null,
                "validation" : null,
                "value" : null,
                "maxLength" : 36,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "holdPlace" : false,
                "isTextArea" : true,
                "isPassword" : false,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "enableTips" : true,
                "path" : "orderName",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "formatValidation" : {
                  "type" : "none",
                  "expression" : "",
                  "message" : ""
                },
                "autoHeight" : false,
                "maxHeight" : 500
              }, {
                "id" : "purchaseDept_PurchaseDept_name_a6a5688e_ss3h",
                "type" : "LookupEdit",
                "titleSourceType" : "static",
                "title" : "采购部门",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "purchaseDept_PurchaseDept_name",
                  "field" : "a6a5688e-0dec-44a0-b589-a0994bb210fe",
                  "fullPath" : "PurchaseDept.PurchaseDept_name"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "dataSource" : {
                  "uri" : "PurchaseOrder.purchaseDept_PurchaseDept_name",
                  "displayName" : "系统组织帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "textField" : "name",
                "valueField" : "id",
                "displayType" : "TreeList",
                "multiSelect" : false,
                "pageList" : "10,20,30,50,100",
                "pageSize" : 20,
                "pageIndex" : null,
                "pagination" : null,
                "dialogTitle" : "",
                "showMaxButton" : null,
                "showCloseButton" : null,
                "resizable" : null,
                "buttonAlign" : null,
                "mapFields" : "{'id':'purchaseDept.purchaseDept_ID,purchaseDept.purchaseDept','name':'purchaseDept.purchaseDept_name'}",
                "lookupStyle" : "popup",
                "holdPlace" : false,
                "isTextArea" : true,
                "useTip" : false,
                "useFavorite" : true,
                "noSearch" : false,
                "maxSearchLength" : 100,
                "enableToSelect" : true,
                "isRecordSize" : false,
                "lookupPicking" : null,
                "lookupPicked" : null,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "enableExtendLoadMethod" : true,
                "editable" : false,
                "enableFullTree" : false,
                "enableClear" : true,
                "clear" : null,
                "loadTreeDataType" : "default",
                "expandLevel" : -1,
                "enableCascade" : false,
                "cascadeStatus" : "enable",
                "onShown" : null,
                "onHidden" : null,
                "beforeShow" : null,
                "beforeHide" : null,
                "tabindex" : 0,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "textAlign" : "left",
                "useExtendInfo" : false,
                "extInfoFields" : null,
                "extInfoFormatter" : null,
                "customFormatter" : null,
                "customNavFormatter" : null,
                "selectFirstInNav" : false,
                "loadDataWhenOpen" : true,
                "onlySelectLeaf" : "default",
                "viewType" : "text",
                "autoHeight" : false,
                "maxHeight" : 500,
                "autoWidth" : true,
                "showHeader" : true,
                "beforeSelectData" : null,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "enableContextMenu" : false,
                "quickSelect" : {
                  "enable" : false,
                  "showItemsCount" : 10,
                  "formatter" : null,
                  "showMore" : true
                },
                "treeToList" : false,
                "navTreeToList" : false,
                "showNavigation" : true,
                "path" : "purchaseDept.purchaseDept_name",
                "isRTControl" : false,
                "labelAutoOverflow" : false,
                "updateOn" : "blur",
                "helpId" : "b524a702-7323-4d46-998e-5ba0c6abcd49"
              }, {
                "id" : "purchaser_Purchaser_Name_8e36074b_1h8e",
                "type" : "LookupEdit",
                "titleSourceType" : "static",
                "title" : "采购人",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "purchaser_Purchaser_Name",
                  "field" : "8e36074b-2ce1-4eb6-93fa-7b3d306bca28",
                  "fullPath" : "Purchaser.Purchaser_Name"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "dataSource" : {
                  "uri" : "PurchaseOrder.purchaser_Purchaser_Name",
                  "displayName" : "系统用户帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "textField" : "name",
                "valueField" : "id",
                "displayType" : "List",
                "multiSelect" : false,
                "pageList" : "10,20,30,50,100",
                "pageSize" : 20,
                "pageIndex" : null,
                "pagination" : null,
                "dialogTitle" : "",
                "showMaxButton" : null,
                "showCloseButton" : null,
                "resizable" : null,
                "buttonAlign" : null,
                "mapFields" : "{'id':'purchaser.purchaser,purchaser.purchaser_ID','name':'purchaser.purchaser_Name'}",
                "lookupStyle" : "popup",
                "holdPlace" : false,
                "isTextArea" : true,
                "useTip" : false,
                "useFavorite" : true,
                "noSearch" : false,
                "maxSearchLength" : 36,
                "enableToSelect" : true,
                "isRecordSize" : false,
                "lookupPicking" : null,
                "lookupPicked" : null,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "enableExtendLoadMethod" : true,
                "editable" : false,
                "enableFullTree" : false,
                "enableClear" : true,
                "clear" : null,
                "loadTreeDataType" : "default",
                "expandLevel" : -1,
                "enableCascade" : false,
                "cascadeStatus" : "enable",
                "onShown" : null,
                "onHidden" : null,
                "beforeShow" : null,
                "beforeHide" : null,
                "tabindex" : 0,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "textAlign" : "left",
                "useExtendInfo" : false,
                "extInfoFields" : null,
                "extInfoFormatter" : null,
                "customFormatter" : null,
                "customNavFormatter" : null,
                "selectFirstInNav" : false,
                "loadDataWhenOpen" : true,
                "onlySelectLeaf" : "default",
                "viewType" : "text",
                "autoHeight" : false,
                "maxHeight" : 500,
                "autoWidth" : true,
                "showHeader" : true,
                "beforeSelectData" : null,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "enableContextMenu" : false,
                "quickSelect" : {
                  "enable" : false,
                  "showItemsCount" : 10,
                  "formatter" : null,
                  "showMore" : true
                },
                "treeToList" : false,
                "navTreeToList" : false,
                "showNavigation" : true,
                "path" : "purchaser.purchaser_Name",
                "isRTControl" : false,
                "labelAutoOverflow" : false,
                "updateOn" : "blur",
                "helpId" : "915a0b20-975a-4df1-8cfd-888c3dda0009"
              }, {
                "id" : "orderDate_56f7fcde_n04v",
                "type" : "DateBox",
                "titleSourceType" : "static",
                "title" : "下单日期",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "orderDate",
                  "field" : "56f7fcde-371c-49f8-a2bc-30a748baa995",
                  "fullPath" : "OrderDate"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "validation" : null,
                "value" : null,
                "editable" : true,
                "dateRange" : false,
                "showTime" : false,
                "showType" : 1,
                "dateFormat" : "yyyy-MM-dd",
                "returnFormat" : "yyyy-MM-dd",
                "maxValue" : null,
                "minValue" : null,
                "disableDates" : [ ],
                "showWeekNumbers" : false,
                "dateRangeDatesDelimiter" : "~",
                "shortcuts" : [ ],
                "fieldType" : "Date",
                "useDefault" : false,
                "holdPlace" : false,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "isTextArea" : true,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "localization" : false,
                "path" : "orderDate",
                "localizationType" : "Date",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "autoHeight" : false,
                "maxHeight" : 500,
                "labelAutoOverflow" : false,
                "updateOn" : "blur"
              }, {
                "id" : "totalPrice_b3c131a8_xth5",
                "type" : "NumericBox",
                "titleSourceType" : "static",
                "title" : "物料总价",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "totalPrice",
                  "field" : "b3c131a8-baa8-47e0-bf39-97dbacc7167a",
                  "fullPath" : "TotalPrice"
                },
                "readonly" : true,
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "textAlign" : "left",
                "precisionSourceType" : "static",
                "precision" : 2,
                "validation" : null,
                "maxValue" : null,
                "minValue" : null,
                "step" : 1,
                "useThousands" : true,
                "formatter" : null,
                "parser" : null,
                "canNull" : true,
                "bigNumber" : false,
                "maxLength" : 18,
                "holdPlace" : false,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "isTextArea" : true,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "showZero" : true,
                "showButton" : true,
                "path" : "totalPrice",
                "localization" : false,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "autoHeight" : false,
                "maxHeight" : 500,
                "labelAutoOverflow" : false,
                "updateOn" : "blur"
              } ],
              "controlsInline" : true,
              "formAutoIntl" : true,
              "visible" : true,
              "labelAutoOverflow" : false
            } ],
            "isScrollSpyItem" : false,
            "toolbar" : {
              "type" : "SectionToolbar",
              "position" : "inHead",
              "contents" : [ ]
            }
          } ],
          "visible" : true,
          "afterViewInit" : null
        }, {
          "id" : "orderdetails-component",
          "type" : "Component",
          "viewModel" : "orderdetails-component-viewmodel",
          "appearance" : {
            "class" : "f-struct-is-subgrid"
          },
          "contents" : [ {
            "id" : "orderdetails-component-layout",
            "type" : "ContentContainer",
            "appearance" : {
              "class" : "f-grid-is-sub f-utils-flex-column"
            },
            "size" : null,
            "contents" : [ {
              "id" : "dataGrid_orderdetails",
              "type" : "DataGrid",
              "controlSource" : "Farris",
              "dataSource" : "orderDetailss",
              "fields" : [ {
                "id" : "materialId_MaterialId_MaterialCode_4b4e149b_20en",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "物料编号",
                "captionTemplate" : null,
                "dataField" : "materialId.materialId_MaterialCode",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "materialId_MaterialId_MaterialCode",
                  "field" : "4b4e149b-d3bd-4e88-bc82-dd62908f1232",
                  "fullPath" : "MaterialId.MaterialId_MaterialCode"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "materialId_MaterialId_MaterialCode_4b4e149b_2ctd",
                  "type" : "LookupEdit",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : {
                    "class" : ""
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "materialId_MaterialId_MaterialCode",
                    "field" : "4b4e149b-d3bd-4e88-bc82-dd62908f1232",
                    "fullPath" : "MaterialId.MaterialId_MaterialCode"
                  },
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "dataSource" : {
                    "uri" : "OrderDetails.materialId_MaterialId_MaterialCode",
                    "displayName" : "物料管理帮助",
                    "idField" : "id",
                    "type" : "ViewObject"
                  },
                  "textField" : "materialName",
                  "valueField" : "id",
                  "displayType" : "List",
                  "multiSelect" : false,
                  "pageList" : "10,20,30,50,100",
                  "pageSize" : 20,
                  "pageIndex" : null,
                  "pagination" : null,
                  "dialogTitle" : "",
                  "showMaxButton" : null,
                  "showCloseButton" : null,
                  "resizable" : null,
                  "buttonAlign" : null,
                  "mapFields" : "{'id':'materialId.materialId,materialId.materialId_ID','materialCode':'materialId.materialId_MaterialCode','materialName':'materialId.materialId_MaterialName','materialCat.materialCat_CatName':'materialId.materialId_MaterialCat_CatName','evePrice':'materialId.materialId_EvePrice'}",
                  "lookupStyle" : "popup",
                  "holdPlace" : false,
                  "isTextArea" : true,
                  "useTip" : false,
                  "useFavorite" : true,
                  "noSearch" : false,
                  "maxSearchLength" : 36,
                  "enableToSelect" : true,
                  "isRecordSize" : false,
                  "lookupPicking" : null,
                  "lookupPicked" : null,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "enableExtendLoadMethod" : true,
                  "editable" : false,
                  "enableFullTree" : false,
                  "enableClear" : true,
                  "clear" : null,
                  "loadTreeDataType" : "default",
                  "expandLevel" : -1,
                  "enableCascade" : false,
                  "cascadeStatus" : "enable",
                  "onShown" : null,
                  "onHidden" : null,
                  "beforeShow" : null,
                  "beforeHide" : null,
                  "tabindex" : 0,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "textAlign" : "left",
                  "useExtendInfo" : false,
                  "extInfoFields" : null,
                  "extInfoFormatter" : null,
                  "customFormatter" : null,
                  "customNavFormatter" : null,
                  "selectFirstInNav" : false,
                  "loadDataWhenOpen" : true,
                  "onlySelectLeaf" : "default",
                  "viewType" : "text",
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "autoWidth" : true,
                  "showHeader" : true,
                  "beforeSelectData" : null,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "enableContextMenu" : false,
                  "quickSelect" : {
                    "enable" : false,
                    "showItemsCount" : 10,
                    "formatter" : null,
                    "showMore" : true
                  },
                  "treeToList" : false,
                  "navTreeToList" : false,
                  "showNavigation" : true,
                  "path" : "materialId.materialId_MaterialCode",
                  "isRTControl" : false,
                  "updateOn" : "blur",
                  "helpId" : "bb73c2e8-5e06-4a7f-9c2c-4d128ddcd54a",
                  "readonly" : false
                },
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
                "id" : "materialId_MaterialId_MaterialName_a5c03a88_809u",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "物料名称",
                "captionTemplate" : null,
                "dataField" : "materialId.materialId_MaterialName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "materialId_MaterialId_MaterialName",
                  "field" : "a5c03a88-a5f0-45a7-a071-682171d9dce8",
                  "fullPath" : "MaterialId.MaterialId_MaterialName"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "materialId_MaterialId_MaterialName_a5c03a88_02gq",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "materialId_MaterialId_MaterialName",
                    "field" : "a5c03a88-a5f0-45a7-a071-682171d9dce8"
                  },
                  "readonly" : false,
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "format" : null,
                  "validation" : null,
                  "value" : null,
                  "maxLength" : 36,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "holdPlace" : false,
                  "isTextArea" : true,
                  "isPassword" : false,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "enableTips" : true,
                  "path" : "materialId.materialId_MaterialName",
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "formatValidation" : {
                    "type" : "none",
                    "expression" : "",
                    "message" : ""
                  },
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "updateOn" : "blur"
                },
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
                "readonly" : true,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "localizationType" : "Date"
              }, {
                "id" : "materialId_MaterialId_MaterialCat_CatName_d031c736_pe2r",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "类别名称",
                "binding" : {
                  "type" : "Form",
                  "path" : "materialId_MaterialId_MaterialCat_CatName",
                  "field" : "d031c736-1a00-4bf5-a959-976f210c8836",
                  "fullPath" : "MaterialId.MaterialId_MaterialCat_CatName"
                },
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "readonly" : true,
                "dataField" : "materialId.materialId_MaterialCat_CatName",
                "dataType" : "string",
                "displayTemplate" : null,
                "captionTemplate" : null,
                "editor" : {
                  "id" : "materialId_MaterialId_MaterialCat_CatName_d031c736_0alv",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "类别名称",
                  "appearance" : {
                    "class" : ""
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "materialId_MaterialId_MaterialCat_CatName",
                    "field" : "d031c736-1a00-4bf5-a959-976f210c8836",
                    "fullPath" : "MaterialId.MaterialId_MaterialCat_CatName"
                  },
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "format" : null,
                  "validation" : null,
                  "value" : null,
                  "maxLength" : 36,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "holdPlace" : false,
                  "isTextArea" : true,
                  "isPassword" : false,
                  "tabindex" : 0,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "enableTips" : true,
                  "path" : "materialId.materialId_MaterialCat_CatName",
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "formatValidation" : {
                    "type" : "none",
                    "expression" : "",
                    "message" : ""
                  },
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "readonly" : false,
                  "updateOn" : "blur",
                  "fieldValueChanging" : "",
                  "fieldValueChanged" : ""
                },
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "enumData" : null,
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
                  "type" : "none"
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
                "localizationType" : "Date"
              }, {
                "id" : "materialId_MaterialId_EvePrice_e3cd5498_b9ip",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "市场价格",
                "captionTemplate" : null,
                "dataField" : "materialId.materialId_EvePrice",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "materialId_MaterialId_EvePrice",
                  "field" : "e3cd5498-447c-4aff-aa1a-d45d414f2be3",
                  "fullPath" : "MaterialId.MaterialId_EvePrice"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "materialId_MaterialId_EvePrice_e3cd5498_49kl",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "materialId_MaterialId_EvePrice",
                    "field" : "e3cd5498-447c-4aff-aa1a-d45d414f2be3"
                  },
                  "readonly" : false,
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "textAlign" : "left",
                  "precisionSourceType" : "static",
                  "precision" : 2,
                  "validation" : null,
                  "maxValue" : null,
                  "minValue" : null,
                  "step" : 1,
                  "useThousands" : true,
                  "formatter" : null,
                  "parser" : null,
                  "canNull" : true,
                  "bigNumber" : false,
                  "maxLength" : 18,
                  "holdPlace" : false,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "isTextArea" : true,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "showZero" : true,
                  "showButton" : true,
                  "path" : "materialId.materialId_EvePrice",
                  "localization" : false,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "updateOn" : "blur"
                },
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
                "readonly" : true,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : ""
              }, {
                "id" : "amount_58fd9353_fn66",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "物料数量",
                "captionTemplate" : null,
                "dataField" : "amount",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "amount",
                  "field" : "58fd9353-d79e-4b69-a56b-f9965e39a5c8",
                  "fullPath" : "Amount"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "amount_58fd9353_0crg",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "amount",
                    "field" : "58fd9353-d79e-4b69-a56b-f9965e39a5c8"
                  },
                  "readonly" : false,
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "textAlign" : "left",
                  "precisionSourceType" : "static",
                  "precision" : 0,
                  "validation" : null,
                  "maxValue" : null,
                  "minValue" : 0,
                  "step" : 1,
                  "useThousands" : true,
                  "formatter" : null,
                  "parser" : null,
                  "canNull" : true,
                  "bigNumber" : false,
                  "maxLength" : 0,
                  "holdPlace" : false,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "isTextArea" : true,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "showZero" : true,
                  "showButton" : true,
                  "path" : "amount",
                  "localization" : false,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "updateOn" : "blur"
                },
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
                  "precision" : 0,
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
                "id" : "supplier_Supplier_SupplierCode_ae2bec36_wkv2",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "供应商编号",
                "captionTemplate" : null,
                "dataField" : "supplier.supplier_SupplierCode",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "supplier_Supplier_SupplierCode",
                  "field" : "ae2bec36-a4bf-45db-b418-ff30f7fa8fa8",
                  "fullPath" : "Supplier.Supplier_SupplierCode"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "supplier_Supplier_SupplierCode_ae2bec36_6df1",
                  "type" : "LookupEdit",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : {
                    "class" : ""
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "supplier_Supplier_SupplierCode",
                    "field" : "ae2bec36-a4bf-45db-b418-ff30f7fa8fa8",
                    "fullPath" : "Supplier.Supplier_SupplierCode"
                  },
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "dataSource" : {
                    "uri" : "OrderDetails.supplier_Supplier_SupplierCode",
                    "displayName" : "供应商管理帮助",
                    "idField" : "id",
                    "type" : "ViewObject"
                  },
                  "textField" : "supplierCode",
                  "valueField" : "id",
                  "displayType" : "List",
                  "multiSelect" : false,
                  "pageList" : "10,20,30,50,100",
                  "pageSize" : 20,
                  "pageIndex" : null,
                  "pagination" : null,
                  "dialogTitle" : "",
                  "showMaxButton" : null,
                  "showCloseButton" : null,
                  "resizable" : null,
                  "buttonAlign" : null,
                  "mapFields" : "{'id':'supplier.supplier,supplier.supplier_ID','supplierName':'supplier.supplier_SupplierName','supplierCode':'supplier.supplier_SupplierCode','contactsEmail':'supplier.supplier_ContactsEmail','contactsAddress':'supplier.supplier_ContactsAddress'}",
                  "lookupStyle" : "popup",
                  "holdPlace" : false,
                  "isTextArea" : true,
                  "useTip" : false,
                  "useFavorite" : true,
                  "noSearch" : false,
                  "maxSearchLength" : 36,
                  "enableToSelect" : true,
                  "isRecordSize" : false,
                  "lookupPicking" : null,
                  "lookupPicked" : null,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "enableExtendLoadMethod" : true,
                  "editable" : false,
                  "enableFullTree" : false,
                  "enableClear" : true,
                  "clear" : null,
                  "loadTreeDataType" : "default",
                  "expandLevel" : -1,
                  "enableCascade" : false,
                  "cascadeStatus" : "enable",
                  "onShown" : null,
                  "onHidden" : null,
                  "beforeShow" : null,
                  "beforeHide" : null,
                  "tabindex" : 0,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "textAlign" : "left",
                  "useExtendInfo" : false,
                  "extInfoFields" : null,
                  "extInfoFormatter" : null,
                  "customFormatter" : null,
                  "customNavFormatter" : null,
                  "selectFirstInNav" : false,
                  "loadDataWhenOpen" : true,
                  "onlySelectLeaf" : "default",
                  "viewType" : "text",
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "autoWidth" : true,
                  "showHeader" : true,
                  "beforeSelectData" : null,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "enableContextMenu" : false,
                  "quickSelect" : {
                    "enable" : false,
                    "showItemsCount" : 10,
                    "formatter" : null,
                    "showMore" : true
                  },
                  "treeToList" : false,
                  "navTreeToList" : false,
                  "showNavigation" : true,
                  "path" : "supplier.supplier_SupplierCode",
                  "isRTControl" : false,
                  "updateOn" : "blur",
                  "helpId" : "c65c0ea9-68db-4152-a875-fbee4ee70887",
                  "readonly" : false
                },
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
                "id" : "supplier_Supplier_SupplierName_63c38913_j2pw",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "供应商名称",
                "captionTemplate" : null,
                "dataField" : "supplier.supplier_SupplierName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "supplier_Supplier_SupplierName",
                  "field" : "63c38913-593b-45f9-ac09-4cc825ec926d",
                  "fullPath" : "Supplier.Supplier_SupplierName"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "supplier_Supplier_SupplierName_63c38913_ac4f",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "supplier_Supplier_SupplierName",
                    "field" : "63c38913-593b-45f9-ac09-4cc825ec926d"
                  },
                  "readonly" : false,
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "format" : null,
                  "validation" : null,
                  "value" : null,
                  "maxLength" : 36,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "holdPlace" : false,
                  "isTextArea" : true,
                  "isPassword" : false,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "enableTips" : true,
                  "path" : "supplier.supplier_SupplierName",
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "formatValidation" : {
                    "type" : "none",
                    "expression" : "",
                    "message" : ""
                  },
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "updateOn" : "blur"
                },
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
                "readonly" : true,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "localizationType" : "Date"
              }, {
                "id" : "supplier_Supplier_ContactsEmail_bbc84198_n9pv",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "联系人邮箱",
                "captionTemplate" : null,
                "dataField" : "supplier.supplier_ContactsEmail",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "supplier_Supplier_ContactsEmail",
                  "field" : "bbc84198-6c76-48a5-a182-8aa4ef57cc3b",
                  "fullPath" : "Supplier.Supplier_ContactsEmail"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "supplier_Supplier_ContactsEmail_bbc84198_dkci",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "supplier_Supplier_ContactsEmail",
                    "field" : "bbc84198-6c76-48a5-a182-8aa4ef57cc3b"
                  },
                  "readonly" : false,
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "format" : null,
                  "validation" : null,
                  "value" : null,
                  "maxLength" : 100,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "holdPlace" : false,
                  "isTextArea" : true,
                  "isPassword" : false,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "enableTips" : true,
                  "path" : "supplier.supplier_ContactsEmail",
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "formatValidation" : {
                    "type" : "none",
                    "expression" : "",
                    "message" : ""
                  },
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "updateOn" : "blur"
                },
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
                "readonly" : true,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "localizationType" : "Date"
              }, {
                "id" : "supplier_Supplier_ContactsAddress_65f7e3ff_389o",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "办公地址",
                "captionTemplate" : null,
                "dataField" : "supplier.supplier_ContactsAddress",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "supplier_Supplier_ContactsAddress",
                  "field" : "65f7e3ff-56e0-4faf-8a87-fe7fb8fe5a78",
                  "fullPath" : "Supplier.Supplier_ContactsAddress"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "supplier_Supplier_ContactsAddress_65f7e3ff_ggel",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "supplier_Supplier_ContactsAddress",
                    "field" : "65f7e3ff-56e0-4faf-8a87-fe7fb8fe5a78"
                  },
                  "readonly" : false,
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "format" : null,
                  "validation" : null,
                  "value" : null,
                  "maxLength" : 100,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "holdPlace" : false,
                  "isTextArea" : true,
                  "isPassword" : false,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "enableTips" : true,
                  "path" : "supplier.supplier_ContactsAddress",
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "formatValidation" : {
                    "type" : "none",
                    "expression" : "",
                    "message" : ""
                  },
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "updateOn" : "blur"
                },
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
                "readonly" : true,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "localizationType" : "Date"
              } ],
              "appearance" : {
                "class" : "f-component-grid f-utils-fill"
              },
              "size" : null,
              "disable" : false,
              "focusedItem" : null,
              "focusedIndex" : null,
              "pagination" : false,
              "lockPagination" : "viewModel.stateMachine&&viewModel.stateMachine['editable']",
              "showPageList" : false,
              "identifyField" : null,
              "multiSelect" : false,
              "showCheckbox" : false,
              "showAllCheckbox" : false,
              "checkOnSelect" : false,
              "selectOnCheck" : false,
              "selectable" : null,
              "itemTemplate" : null,
              "toolBar" : null,
              "summary" : null,
              "groupable" : false,
              "group" : null,
              "showGroupColumn" : true,
              "groupFormatter" : null,
              "groupStyler" : null,
              "groupFooter" : false,
              "editable" : "viewModel.stateMachine['editable']",
              "fieldEditable" : true,
              "fitColumns" : true,
              "autoFitColumns" : true,
              "multiSort" : false,
              "showBorder" : false,
              "striped" : true,
              "onSelectionChange" : null,
              "styler" : "",
              "showLineNumber" : false,
              "appendRow" : "orderdetailsAddItem1",
              "pageChange" : null,
              "disableRow" : null,
              "beforeSelect" : null,
              "beforeUnSelect" : null,
              "beforeCheck" : null,
              "beforeUnCheck" : null,
              "dblClickRow" : null,
              "virtualized" : false,
              "showFooter" : false,
              "footerTemplate" : "",
              "footerDataFrom" : "client",
              "footerDataCommand" : null,
              "footerHeight" : 29,
              "enableFilterRow" : false,
              "remoteFilter" : false,
              "showFilterBar" : false,
              "useControlPanel" : false,
              "autoHeight" : false,
              "rowClick" : null,
              "showSelectedList" : false,
              "selectedItemFormatter" : null,
              "lineNumberWidth" : 36,
              "enableMorePageSelect" : false,
              "headerWrap" : false,
              "emptyTemplate" : null,
              "emptyDataHeight" : 240,
              "rowHeight" : 30,
              "showPageSize" : false,
              "fixedColumns" : [ ],
              "enableCommandColumn" : false,
              "onEditClicked" : null,
              "onDeleteClicked" : null,
              "commandColumnWidth" : 120,
              "showCommandColumn" : true,
              "checkedChange" : null,
              "filterType" : "none",
              "enableSmartFilter" : false,
              "lineNumberTitle" : "",
              "maxHeight" : 300,
              "enableHighlightCell" : false,
              "enableEditCellStyle" : false,
              "showRowGroupPanel" : false,
              "enableDragColumn" : false,
              "groupSummaryPosition" : "groupFooterRow",
              "clearSelectionsWhenDataIsEmpty" : true,
              "keepSelect" : true,
              "enableEditByCard" : "none",
              "pageSizeChanged" : null,
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
              "virtualizedAsyncLoad" : false,
              "scrollYLoad" : null,
              "pagerContentTemplate" : null,
              "expandGroupRows" : true,
              "useBlankWhenDataIsEmpty" : false,
              "checked" : null,
              "unChecked" : null,
              "checkAll" : null,
              "unCheckAll" : null,
              "filterChanged" : null
            } ],
            "visible" : true,
            "isScrollspyContainer" : false
          } ],
          "componentType" : "dataGrid",
          "visible" : true,
          "onInit" : null,
          "afterViewInit" : null
        } ],
        "webcmds" : [ {
          "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
          "path" : "/projects/packages/Inspur.GS.Gsp.Web.WebCmp/webcmd",
          "name" : "CardController.webcmd",
          "refedHandlers" : [ {
            "host" : "e05264fb-796d-43fb-b83b-9e2f3866c328",
            "handler" : "Load"
          }, {
            "host" : "246a275c-88c9-4c8a-aa82-be6a950a4325",
            "handler" : "LoadAndAdd"
          }, {
            "host" : "70acc053-fa15-45be-851c-cf694e1bcaf7",
            "handler" : "LoadAndView"
          }, {
            "host" : "3e72ee6f-8f7b-4f29-aa0e-5887f2861117",
            "handler" : "LoadAndEdit"
          }, {
            "host" : "f90aadfa-988c-4da5-a5db-1416c3333794",
            "handler" : "Add"
          }, {
            "host" : "a323e27b-b9c6-4848-93b9-f117403a94ff",
            "handler" : "Edit"
          }, {
            "host" : "31b814db-01e4-407d-8fad-0f08dbb01999",
            "handler" : "Save"
          }, {
            "host" : "4f5ed2ec-8def-4a3c-8e7b-397ea93010e8",
            "handler" : "Cancel"
          }, {
            "host" : "c8504c24-33e8-487a-91ce-2218b803fe01",
            "handler" : "ChangeItem"
          }, {
            "host" : "4a0cfb1a-1262-41a2-aeb9-c8edd5c09683",
            "handler" : "ChangeItem"
          }, {
            "host" : "c42cc2d5-a20e-45a1-ac98-e47e40133bc1",
            "handler" : "AddItem"
          }, {
            "host" : "ff56e2f1-2ecd-4f49-912a-b2be503b756a",
            "handler" : "RemoveItem"
          }, {
            "host" : "d77b82f5-3610-4744-96da-524d4ce27148",
            "handler" : "LoadAndAdd"
          }, {
            "host" : "0a1f7484-054d-4786-b2c2-b23b27be9f6b",
            "handler" : "Add"
          } ],
          "code" : "CardController",
          "nameSpace" : "Inspur.GS.Gsp.Web.WebCmp"
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-purchaseorder-front",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "expressions" : [ {
          "fieldId" : "b3c131a8-baa8-47e0-bf39-97dbacc7167a",
          "expression" : [ {
            "id" : "b3c131a8-baa8-47e0-bf39-97dbacc7167a_compute",
            "type" : "compute",
            "value" : "{\"expr\":\"return DefaultFunction.round(DefaultFunction.MultiplyChildNumber(\\\"PurchaseOrder.orderDetailss\\\",\\\"amount\\\",\\\"materialId.materialId_EvePrice\\\"),2)\",\"sexpr\":\"\"}"
          } ]
        } ],
        "metadataId" : "4cad6faa-e321-421e-8f5d-9238173ed6b5",
        "actions" : [ {
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
                "id" : "f90aadfa-988c-4da5-a5db-1416c3333794",
                "label" : "Add1",
                "name" : "新增数据",
                "handlerName" : "Add",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Create"
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
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
                "id" : "a323e27b-b9c6-4848-93b9-f117403a94ff",
                "label" : "Edit1",
                "name" : "编辑数据",
                "handlerName" : "Edit",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Edit"
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-save",
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
                "id" : "31b814db-01e4-407d-8fad-0f08dbb01999",
                "label" : "Save1",
                "name" : "保存数据",
                "handlerName" : "Save",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Cancel"
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-cancel",
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
                "id" : "4f5ed2ec-8def-4a3c-8e7b-397ea93010e8",
                "label" : "Cancel1",
                "name" : "取消变更",
                "handlerName" : "Cancel",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Cancel"
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "orderdetailsAddButton",
            "viewModelId" : "orderdetails-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "orderdetails-component",
                "viewModelId" : "orderdetails-component-viewmodel"
              },
              "command" : {
                "id" : "c42cc2d5-a20e-45a1-ac98-e47e40133bc1",
                "label" : "orderdetailsAddItem1",
                "name" : "增加一条子表数据",
                "handlerName" : "AddItem",
                "params" : [ ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "orderdetailsRemoveButton",
            "viewModelId" : "orderdetails-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "orderdetails-component",
                "viewModelId" : "orderdetails-component-viewmodel"
              },
              "command" : {
                "id" : "ff56e2f1-2ecd-4f49-912a-b2be503b756a",
                "label" : "orderdetailsRemoveItem1",
                "name" : "删除一条子表数据",
                "handlerName" : "RemoveItem",
                "params" : [ {
                  "name" : "id",
                  "shownName" : "待删除子表数据的标识",
                  "value" : "{DATA~/#{orderdetails-component}/orderDetailss/id}"
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
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
                "id" : "e05264fb-796d-43fb-b83b-9e2f3866c328",
                "label" : "Load1",
                "name" : "加载",
                "handlerName" : "Load",
                "params" : [ {
                  "name" : "action",
                  "shownName" : "初始方法",
                  "value" : "{UISTATE~/root-component/action}"
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "dataGrid_orderdetails",
            "viewModelId" : "orderdetails-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "appendRow",
                "name" : "回车新增行事件"
              },
              "targetComponent" : {
                "id" : "orderdetails-component",
                "viewModelId" : "orderdetails-component-viewmodel"
              },
              "command" : {
                "id" : "c42cc2d5-a20e-45a1-ac98-e47e40133bc1",
                "label" : "orderdetailsAddItem1",
                "name" : "增加一条子表数据",
                "handlerName" : "AddItem",
                "params" : [ ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
              }
            } ]
          }
        } ]
      },
      "options" : {
        "enableTextArea" : true,
        "renderMode" : "compile",
        "enableDeleteSourceCode" : true,
        "changeSetPolicy" : "valid"
      }
    },
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