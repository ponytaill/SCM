{
  "Header" : {
    "Code" : "SupplierMaCard",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.SCM.CM.SupplierMa.SupplierMa.Front",
    "CertId" : null,
    "Name" : "供应商管理卡片",
    "FileName" : "SupplierMaCard.frm",
    "BizobjectID" : "ca0af27e-3ff4-a99d-a4e5-aec1c23a5eb7",
    "Language" : null,
    "Extendable" : false,
    "ID" : "fefb3340-5083-4841-8de2-d8a0e990f141",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "d623ac7c-7e02-4c64-a144-7cedece05777",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.SCM.CM.SupplierMa.SupplierMa.Front",
      "Code" : "SupplierMaCard.frm",
      "Name" : "SupplierMaCard.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "ca0af27e-3ff4-a99d-a4e5-aec1c23a5eb7"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Id" : "fefb3340-5083-4841-8de2-d8a0e990f141",
    "Contents" : {
      "module" : {
        "id" : "SupplierMaCard",
        "code" : "SupplierMaCard",
        "name" : "供应商管理卡片",
        "caption" : "供应商管理卡片",
        "type" : "Module",
        "creator" : "shizhiyuan",
        "creationDate" : "2023-06-21T01:46:38.104Z",
        "updateVersion" : "190123",
        "showTitle" : true,
        "bootstrap" : "new-card-spy-template",
        "templateId" : "new-card-spy-template",
        "schemas" : [ {
          "entities" : [ {
            "type" : {
              "$type" : "EntityType",
              "entities" : [ {
                "type" : {
                  "$type" : "EntityType",
                  "entities" : [ ],
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : true,
                    "multiLanguage" : false,
                    "bindingField" : "id",
                    "bindingPath" : "id",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "path" : "ID",
                    "id" : "9a5c0e9e-15a4-42ec-abca-004bd6cdd1a0",
                    "originalId" : "9a5c0e9e-15a4-42ec-abca-004bd6cdd1a0",
                    "label" : "id",
                    "code" : "ID",
                    "name" : "主键"
                  }, {
                    "$type" : "SimpleField",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : true,
                    "multiLanguage" : false,
                    "bindingField" : "parentID",
                    "bindingPath" : "parentID",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "path" : "ParentID",
                    "id" : "5de3a31a-dd49-4e9b-a8c0-4b7689112973",
                    "originalId" : "5de3a31a-dd49-4e9b-a8c0-4b7689112973",
                    "label" : "parentID",
                    "code" : "ParentID",
                    "name" : "上级对象主键"
                  }, {
                    "$type" : "ComplexField",
                    "bindingField" : "materialId",
                    "bindingPath" : "materialId",
                    "type" : {
                      "$type" : "EntityType",
                      "entities" : [ ],
                      "fields" : [ {
                        "$type" : "SimpleField",
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "bindingField" : "materialId",
                        "bindingPath" : "materialId.materialId",
                        "type" : {
                          "$type" : "StringType",
                          "displayName" : "字符串",
                          "length" : 36,
                          "name" : "String"
                        },
                        "path" : "MaterialId.MaterialId",
                        "id" : "88e75f89-8c5c-4c72-b7f2-f316d8f5cd0e",
                        "originalId" : "88e75f89-8c5c-4c72-b7f2-f316d8f5cd0e",
                        "label" : "materialId",
                        "code" : "MaterialId",
                        "name" : "物料名称"
                      }, {
                        "$type" : "SimpleField",
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "bindingField" : "materialId_MaterialId_ID",
                        "bindingPath" : "materialId.materialId_ID",
                        "type" : {
                          "$type" : "StringType",
                          "displayName" : "字符串",
                          "length" : 36,
                          "name" : "String"
                        },
                        "path" : "MaterialId.MaterialId_ID",
                        "id" : "4a773983-d197-4980-b235-fee607c7f9ab",
                        "originalId" : "4a773983-d197-4980-b235-fee607c7f9ab",
                        "label" : "materialId_ID",
                        "code" : "ID",
                        "name" : "主键"
                      }, {
                        "$type" : "SimpleField",
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "bindingField" : "materialId_MaterialId_MaterialCode",
                        "bindingPath" : "materialId.materialId_MaterialCode",
                        "type" : {
                          "$type" : "StringType",
                          "displayName" : "字符串",
                          "length" : 36,
                          "name" : "String"
                        },
                        "path" : "MaterialId.MaterialId_MaterialCode",
                        "id" : "06287e26-c583-4efb-9749-944b29c24afa",
                        "originalId" : "06287e26-c583-4efb-9749-944b29c24afa",
                        "label" : "materialId_MaterialCode",
                        "code" : "MaterialCode",
                        "name" : "物料编号"
                      }, {
                        "$type" : "SimpleField",
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "bindingField" : "materialId_MaterialId_MaterialName",
                        "bindingPath" : "materialId.materialId_MaterialName",
                        "type" : {
                          "$type" : "StringType",
                          "displayName" : "字符串",
                          "length" : 36,
                          "name" : "String"
                        },
                        "path" : "MaterialId.MaterialId_MaterialName",
                        "id" : "655b8865-bfaf-4573-a18c-cabd5669eaf1",
                        "originalId" : "655b8865-bfaf-4573-a18c-cabd5669eaf1",
                        "label" : "materialId_MaterialName",
                        "code" : "MaterialName",
                        "name" : "物料名称"
                      }, {
                        "$type" : "SimpleField",
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "bindingField" : "materialId_MaterialId_MaterialCat",
                        "bindingPath" : "materialId.materialId_MaterialCat",
                        "type" : {
                          "$type" : "StringType",
                          "displayName" : "字符串",
                          "length" : 36,
                          "name" : "String"
                        },
                        "path" : "MaterialId.MaterialId_MaterialCat",
                        "id" : "ca0bb8bb-86e0-4880-9323-49a628dd1412",
                        "originalId" : "ca0bb8bb-86e0-4880-9323-49a628dd1412",
                        "label" : "materialId_MaterialCat",
                        "code" : "MaterialCat",
                        "name" : "物料类别"
                      }, {
                        "$type" : "SimpleField",
                        "editor" : {
                          "$type" : "NumericBox"
                        },
                        "defaultValue" : "",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "bindingField" : "materialId_MaterialId_EvePrice",
                        "bindingPath" : "materialId.materialId_EvePrice",
                        "type" : {
                          "$type" : "NumericType",
                          "displayName" : "数字",
                          "precision" : 2,
                          "length" : 18,
                          "name" : "Number"
                        },
                        "path" : "MaterialId.MaterialId_EvePrice",
                        "id" : "1f7da955-2ad1-420a-9a2c-8af55e4747a4",
                        "originalId" : "1f7da955-2ad1-420a-9a2c-8af55e4747a4",
                        "label" : "materialId_EvePrice",
                        "code" : "EvePrice",
                        "name" : "市场价格"
                      }, {
                        "$type" : "SimpleField",
                        "editor" : {
                          "$type" : "NumericBox"
                        },
                        "defaultValue" : "",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "bindingField" : "materialId_MaterialId_Repertory",
                        "bindingPath" : "materialId.materialId_Repertory",
                        "type" : {
                          "$type" : "NumericType",
                          "displayName" : "数字",
                          "precision" : 0,
                          "length" : 0,
                          "name" : "Number"
                        },
                        "path" : "MaterialId.MaterialId_Repertory",
                        "id" : "3befcd45-fda9-47b8-89a4-50d0f76af255",
                        "originalId" : "3befcd45-fda9-47b8-89a4-50d0f76af255",
                        "label" : "materialId_Repertory",
                        "code" : "Repertory",
                        "name" : "库存数量"
                      }, {
                        "$type" : "SimpleField",
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "bindingField" : "materialId_MaterialId_MaterialCat_ID",
                        "bindingPath" : "materialId.materialId_MaterialCat_ID",
                        "type" : {
                          "$type" : "StringType",
                          "displayName" : "字符串",
                          "length" : 36,
                          "name" : "String"
                        },
                        "path" : "MaterialId.MaterialId_MaterialCat_ID",
                        "id" : "49025e22-363c-4ffc-9ce2-dbc1ff092a57",
                        "originalId" : "49025e22-363c-4ffc-9ce2-dbc1ff092a57",
                        "label" : "materialId_MaterialCat_ID",
                        "code" : "ID(MaterialCat)",
                        "name" : "主键"
                      }, {
                        "$type" : "SimpleField",
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "bindingField" : "materialId_MaterialId_MaterialCat_CatName",
                        "bindingPath" : "materialId.materialId_MaterialCat_CatName",
                        "type" : {
                          "$type" : "StringType",
                          "displayName" : "字符串",
                          "length" : 36,
                          "name" : "String"
                        },
                        "path" : "MaterialId.MaterialId_MaterialCat_CatName",
                        "id" : "9856022b-2687-4eb4-afea-df0a4c314ed4",
                        "originalId" : "9856022b-2687-4eb4-afea-df0a4c314ed4",
                        "label" : "materialId_MaterialCat_CatName",
                        "code" : "CatName(MaterialCat)",
                        "name" : "类别名称"
                      }, {
                        "$type" : "SimpleField",
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "bindingField" : "materialId_MaterialId_MaterialCat_CatCode",
                        "bindingPath" : "materialId.materialId_MaterialCat_CatCode",
                        "type" : {
                          "$type" : "StringType",
                          "displayName" : "字符串",
                          "length" : 36,
                          "name" : "String"
                        },
                        "path" : "MaterialId.MaterialId_MaterialCat_CatCode",
                        "id" : "48265415-177a-461f-8e18-c5bb0e975cf6",
                        "originalId" : "48265415-177a-461f-8e18-c5bb0e975cf6",
                        "label" : "materialId_MaterialCat_CatCode",
                        "code" : "CatCode(MaterialCat)",
                        "name" : "类别编号"
                      } ],
                      "primary" : "materialId",
                      "displayName" : "物料管理",
                      "name" : "Material88e7"
                    },
                    "path" : "MaterialId",
                    "id" : "e309e398-5faa-40fa-b8cf-9949b9384132",
                    "originalId" : "e309e398-5faa-40fa-b8cf-9949b9384132",
                    "label" : "materialId",
                    "code" : "MaterialId",
                    "name" : "物料名称"
                  } ],
                  "primary" : "id",
                  "displayName" : "供应商对应物料",
                  "name" : "SupplierMaterial"
                },
                "id" : "0df87ea7-aa1c-4a1e-a040-b24d1a0426ad",
                "label" : "supplierMaterials",
                "code" : "SupplierMaterial",
                "name" : "供应商对应物料"
              } ],
              "fields" : [ {
                "$type" : "SimpleField",
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : true,
                "multiLanguage" : false,
                "bindingField" : "id",
                "bindingPath" : "id",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "path" : "ID",
                "id" : "c484c5f5-04c0-4998-9925-e4d1f6a99575",
                "originalId" : "c484c5f5-04c0-4998-9925-e4d1f6a99575",
                "label" : "id",
                "code" : "ID",
                "name" : "主键"
              }, {
                "$type" : "SimpleField",
                "editor" : {
                  "$type" : "DateBox",
                  "format" : "'yyyy-MM-dd'"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "multiLanguage" : false,
                "bindingField" : "version",
                "bindingPath" : "version",
                "type" : {
                  "$type" : "DateTimeType",
                  "displayName" : "日期时间",
                  "name" : "DateTime"
                },
                "path" : "Version",
                "id" : "3d625f54-0f1e-4a1d-8696-23a5022aa7d8",
                "originalId" : "3d625f54-0f1e-4a1d-8696-23a5022aa7d8",
                "label" : "version",
                "code" : "Version",
                "name" : "版本"
              }, {
                "$type" : "SimpleField",
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "multiLanguage" : false,
                "bindingField" : "supplierName",
                "bindingPath" : "supplierName",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "path" : "SupplierName",
                "id" : "2df5f154-d7f6-458d-a517-b60f57b50156",
                "originalId" : "2df5f154-d7f6-458d-a517-b60f57b50156",
                "label" : "supplierName",
                "code" : "SupplierName",
                "name" : "供应商名称"
              }, {
                "$type" : "SimpleField",
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "multiLanguage" : false,
                "bindingField" : "supplierCode",
                "bindingPath" : "supplierCode",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "path" : "SupplierCode",
                "id" : "a55cbab4-e6ff-4754-a5b5-ab1f39bdadaa",
                "originalId" : "a55cbab4-e6ff-4754-a5b5-ab1f39bdadaa",
                "label" : "supplierCode",
                "code" : "SupplierCode",
                "name" : "供应商编号"
              }, {
                "$type" : "ComplexField",
                "bindingField" : "contacts",
                "bindingPath" : "contacts",
                "type" : {
                  "$type" : "EntityType",
                  "entities" : [ ],
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : false,
                    "multiLanguage" : false,
                    "bindingField" : "contacts",
                    "bindingPath" : "contacts.contacts",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "path" : "Contacts.Contacts",
                    "id" : "1a95777a-e315-49f3-a50d-58a6101ac8a3",
                    "originalId" : "1a95777a-e315-49f3-a50d-58a6101ac8a3",
                    "label" : "contacts",
                    "code" : "Contacts",
                    "name" : "联系人姓名"
                  }, {
                    "$type" : "SimpleField",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : false,
                    "multiLanguage" : false,
                    "bindingField" : "contacts_Contacts_ID",
                    "bindingPath" : "contacts.contacts_ID",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "path" : "Contacts.Contacts_ID",
                    "id" : "afd7e87b-9cbb-47a2-9d2c-4e5942d2c05b",
                    "originalId" : "afd7e87b-9cbb-47a2-9d2c-4e5942d2c05b",
                    "label" : "contacts_ID",
                    "code" : "ID",
                    "name" : "ID"
                  }, {
                    "$type" : "SimpleField",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : false,
                    "multiLanguage" : false,
                    "bindingField" : "contacts_Contacts_Name",
                    "bindingPath" : "contacts.contacts_Name",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "path" : "Contacts.Contacts_Name",
                    "id" : "95a3cc07-7d68-483e-a959-41e89f648a34",
                    "originalId" : "95a3cc07-7d68-483e-a959-41e89f648a34",
                    "label" : "contacts_Name",
                    "code" : "Name",
                    "name" : "名称"
                  }, {
                    "$type" : "SimpleField",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : false,
                    "multiLanguage" : false,
                    "bindingField" : "contacts_Contacts_Code",
                    "bindingPath" : "contacts.contacts_Code",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "path" : "Contacts.Contacts_Code",
                    "id" : "0349de8b-bfd3-4d6f-ab87-7ae9d41998ed",
                    "originalId" : "0349de8b-bfd3-4d6f-ab87-7ae9d41998ed",
                    "label" : "contacts_Code",
                    "code" : "Code",
                    "name" : "编号"
                  } ],
                  "primary" : "contacts",
                  "displayName" : "用户",
                  "name" : "GspUser1a95"
                },
                "path" : "Contacts",
                "id" : "9238104b-335c-4531-87ff-8dd340e82853",
                "originalId" : "9238104b-335c-4531-87ff-8dd340e82853",
                "label" : "contacts",
                "code" : "Contacts",
                "name" : "联系人姓名"
              }, {
                "$type" : "SimpleField",
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "multiLanguage" : false,
                "bindingField" : "contactsEmail",
                "bindingPath" : "contactsEmail",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 100,
                  "name" : "String"
                },
                "path" : "ContactsEmail",
                "id" : "90701715-2e2c-49ef-94dc-3f4cc113d408",
                "originalId" : "90701715-2e2c-49ef-94dc-3f4cc113d408",
                "label" : "contactsEmail",
                "code" : "ContactsEmail",
                "name" : "联系人邮箱"
              }, {
                "$type" : "SimpleField",
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "multiLanguage" : false,
                "bindingField" : "contactsAddress",
                "bindingPath" : "contactsAddress",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 100,
                  "name" : "String"
                },
                "path" : "ContactsAddress",
                "id" : "f119b011-54e0-4bd1-8a3f-b79795114aa0",
                "originalId" : "f119b011-54e0-4bd1-8a3f-b79795114aa0",
                "label" : "contactsAddress",
                "code" : "ContactsAddress",
                "name" : "办公地址"
              }, {
                "$type" : "SimpleField",
                "editor" : {
                  "$type" : "DateBox",
                  "format" : "'yyyy-MM-dd'"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "multiLanguage" : false,
                "bindingField" : "signTime",
                "bindingPath" : "signTime",
                "type" : {
                  "$type" : "DateTimeType",
                  "displayName" : "日期时间",
                  "name" : "DateTime"
                },
                "path" : "SignTime",
                "id" : "36e6b73d-5a10-4725-b791-4fb684db3d6e",
                "originalId" : "36e6b73d-5a10-4725-b791-4fb684db3d6e",
                "label" : "signTime",
                "code" : "SignTime",
                "name" : "注册时间"
              }, {
                "$type" : "SimpleField",
                "editor" : {
                  "$type" : "MultiTextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "multiLanguage" : false,
                "bindingField" : "remark",
                "bindingPath" : "remark",
                "type" : {
                  "$type" : "TextType",
                  "displayName" : "文本",
                  "length" : 4000,
                  "name" : "Text"
                },
                "path" : "Remark",
                "id" : "81bf894a-03ba-48b4-a27d-a341ff05784b",
                "originalId" : "81bf894a-03ba-48b4-a27d-a341ff05784b",
                "label" : "remark",
                "code" : "Remark",
                "name" : "备注"
              } ],
              "primary" : "id",
              "displayName" : "供应商管理",
              "name" : "SupplierMa"
            },
            "id" : "6d4026b3-789d-400c-bb55-cc99f2dc4284",
            "label" : "supplierMas",
            "code" : "SupplierMa",
            "name" : "供应商管理"
          } ],
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "sourceType" : "vo",
          "id" : "4b78584b-d761-455a-aa72-943f1a5bc256",
          "variables" : [ ],
          "sourceUri" : "api/scm/cm/v1.0/SupplierMaCard_frm",
          "code" : "SupplierMaCard_frm",
          "name" : "供应商管理卡片_frm",
          "eapiId" : "9750142d-6960-4ed2-bd67-6f224c5449d8",
          "eapiCode" : "SupplierMaCard_frm",
          "eapiName" : "供应商管理卡片_frm",
          "eapiNameSpace" : "Inspur.GS.SCM.CM.SupplierMa.SupplierMa.Front",
          "voPath" : "SCM/CM/SupplierMa/bo-supplierma-front/metadata/components",
          "voNameSpace" : "Inspur.GS.SCM.CM.SupplierMa.SupplierMa.Front"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "SupplierMaCard_state_machine",
          "name" : "供应商管理卡片_frm",
          "uri" : "ccf8ac1a-b0ac-46af-9bd4-423581f9b6b4",
          "code" : "SupplierMaCard_frm",
          "nameSpace" : "Inspur.GS.SCM.CM.SupplierMa.SupplierMa.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "供应商管理",
          "fields" : [ ],
          "stateMachine" : "SupplierMaCard_state_machine",
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "e05264fb-796d-43fb-b83b-9e2f3866c328",
            "code" : "Load1",
            "name" : "加载",
            "params" : [ {
              "name" : "action",
              "shownName" : "初始方法",
              "value" : "{UISTATE~/root-component/action}",
              "defaultValue" : null
            } ],
            "handlerName" : "Load",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "246a275c-88c9-4c8a-aa82-be6a950a4325",
            "code" : "LoadAndAdd1",
            "name" : "加载并新增",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Create",
              "defaultValue" : null
            } ],
            "handlerName" : "LoadAndAdd",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "70acc053-fa15-45be-851c-cf694e1bcaf7",
            "code" : "LoadAndView1",
            "name" : "加载并查看",
            "params" : [ {
              "name" : "id",
              "shownName" : "待查看数据的标识",
              "value" : "{UISTATE~/root-component/id}",
              "defaultValue" : null
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel",
              "defaultValue" : null
            }, {
              "name" : "transitionActionParamName",
              "shownName" : "状态迁移动作参数编号",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "LoadAndView",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "3e72ee6f-8f7b-4f29-aa0e-5887f2861117",
            "code" : "LoadAndEdit1",
            "name" : "加载并编辑",
            "params" : [ {
              "name" : "id",
              "shownName" : "待编辑数据的标识",
              "value" : "{UISTATE~/root-component/id}",
              "defaultValue" : null
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Edit",
              "defaultValue" : null
            }, {
              "name" : "transitionActionParamName",
              "shownName" : "状态迁移动作参数编号",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "LoadAndEdit",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "f90aadfa-988c-4da5-a5db-1416c3333794",
            "code" : "Add1",
            "name" : "新增数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Create",
              "defaultValue" : null
            } ],
            "handlerName" : "Add",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "a323e27b-b9c6-4848-93b9-f117403a94ff",
            "code" : "Edit1",
            "name" : "编辑数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Edit",
              "defaultValue" : null
            } ],
            "handlerName" : "Edit",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "31b814db-01e4-407d-8fad-0f08dbb01999",
            "code" : "Save1",
            "name" : "保存数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel",
              "defaultValue" : null
            }, {
              "name" : "successMsg",
              "shownName" : "保存成功提示信息",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "Save",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "4f5ed2ec-8def-4a3c-8e7b-397ea93010e8",
            "code" : "Cancel1",
            "name" : "取消变更",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel",
              "defaultValue" : null
            } ],
            "handlerName" : "Cancel",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "c8504c24-33e8-487a-91ce-2218b803fe01",
            "code" : "ChangeItem1",
            "name" : "ChangeItem",
            "params" : [ {
              "name" : "id",
              "shownName" : "当前数据标识",
              "value" : "{DATA~/root-component/id}",
              "defaultValue" : null
            }, {
              "name" : "type",
              "shownName" : "切换类型(prev|next)",
              "value" : "prev",
              "defaultValue" : null
            }, {
              "name" : "parentId",
              "shownName" : "parentId",
              "value" : "{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}"
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel",
              "defaultValue" : null
            } ],
            "handlerName" : "ChangeItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "4a0cfb1a-1262-41a2-aeb9-c8edd5c09683",
            "code" : "ChangeItem2",
            "name" : "ChangeItem2",
            "params" : [ {
              "name" : "id",
              "shownName" : "当前数据标识",
              "value" : "{DATA~/root-component/id}",
              "defaultValue" : null
            }, {
              "name" : "type",
              "shownName" : "切换类型(prev|next)",
              "value" : "next",
              "defaultValue" : null
            }, {
              "name" : "parentId",
              "shownName" : "parentId",
              "value" : "{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}"
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel",
              "defaultValue" : null
            } ],
            "handlerName" : "ChangeItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "d4932348-dbe7-4787-871d-e195498bc25a",
            "code" : "rootviewmodelDataImport1",
            "name" : "数据导入1",
            "params" : [ {
              "name" : "type",
              "shownName" : "导入类型",
              "value" : "1"
            }, {
              "name" : "ruleID",
              "shownName" : "规则Id",
              "value" : "974c2fd3-dd98-44d7-824a-f1e0c6071c14"
            }, {
              "name" : "option",
              "shownName" : "参数配置",
              "value" : "{\"templatefilename\":\"供应商对应物料导入模板\",\"customImportTitle\":\"供应商对应物料导入\",\"importdbRefresh\":true}"
            } ],
            "handlerName" : "DataImport",
            "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "root-component"
          }, {
            "id" : "f8401333-7e13-4b69-9549-3f0382941dee",
            "code" : "rootviewmodelDataExport1",
            "name" : "数据导出1",
            "params" : [ {
              "name" : "type",
              "shownName" : "导出类型",
              "value" : "3"
            }, {
              "name" : "ruleID",
              "shownName" : "规则Id",
              "value" : "4c0e9550-a219-45aa-8e03-fdcdc0349aa2"
            }, {
              "name" : "option",
              "shownName" : "参数配置",
              "value" : ""
            } ],
            "handlerName" : "DataExport",
            "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "root-component"
          }, {
            "id" : "789e4744-4cf0-4afb-83cf-11dbb6db6bd8",
            "code" : "rootviewmodelDataExport2",
            "name" : "数据导出2",
            "params" : [ {
              "name" : "type",
              "shownName" : "导出类型",
              "value" : "3"
            }, {
              "name" : "ruleID",
              "shownName" : "规则Id",
              "value" : "4c0e9550-a219-45aa-8e03-fdcdc0349aa2"
            }, {
              "name" : "option",
              "shownName" : "参数配置",
              "value" : "{\"selectFilterGridComponent\":\"data-grid-component\"}"
            } ],
            "handlerName" : "DataExport",
            "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "root-component"
          } ],
          "states" : [ {
            "id" : "5bafac52-5d35-4687-ba15-7c426a17d786",
            "code" : "action",
            "name" : "action",
            "type" : "String",
            "category" : "locale"
          } ],
          "bindTo" : "/",
          "enableUnifiedSession" : false
        }, {
          "id" : "basic-form-viewmodel",
          "code" : "basic-form-viewmodel",
          "name" : "供应商管理",
          "fields" : [ {
            "type" : "Form",
            "id" : "2df5f154-d7f6-458d-a517-b60f57b50156",
            "fieldName" : "supplierName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "require" : true
            }
          }, {
            "type" : "Form",
            "id" : "a55cbab4-e6ff-4754-a5b5-ab1f39bdadaa",
            "fieldName" : "supplierCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "36e6b73d-5a10-4725-b791-4fb684db3d6e",
            "fieldName" : "signTime",
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
          "id" : "suppliermaterial-component-viewmodel",
          "code" : "suppliermaterial-component-viewmodel",
          "name" : "供应商对应物料",
          "fields" : [ {
            "type" : "Form",
            "id" : "06287e26-c583-4efb-9749-944b29c24afa",
            "fieldName" : "materialId_MaterialId_MaterialCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "655b8865-bfaf-4573-a18c-cabd5669eaf1",
            "fieldName" : "materialId_MaterialId_MaterialName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "SupplierMaterial.materialId_MaterialId_MaterialName",
                  "displayName" : "物料管理帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "valueField" : "id",
                "textField" : "materialName",
                "displayType" : "List",
                "mapFields" : "{'id':'materialId.materialId','materialCode':'materialId.materialId_MaterialCode','materialName':'materialId.materialId_MaterialName','evePrice':'materialId.materialId_EvePrice','repertory':'materialId.materialId_Repertory','materialCat.materialCat_CatName':'materialId.materialId_MaterialCat_CatName'}",
                "helpId" : "bb73c2e8-5e06-4a7f-9c2c-4d128ddcd54a"
              },
              "name" : "物料名称",
              "require" : true,
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "1f7da955-2ad1-420a-9a2c-8af55e4747a4",
            "fieldName" : "materialId_MaterialId_EvePrice",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "3befcd45-fda9-47b8-89a4-50d0f76af255",
            "fieldName" : "materialId_MaterialId_Repertory",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "9856022b-2687-4eb4-afea-df0a4c314ed4",
            "fieldName" : "materialId_MaterialId_MaterialCat_CatName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          } ],
          "states" : [ ],
          "bindTo" : "/supplierMaterials",
          "parent" : "root-viewmodel",
          "commands" : [ {
            "id" : "05d9f2ca-bf42-407b-9c48-c5c3883be0c0",
            "code" : "suppliermaterialAddItem1",
            "name" : "增加一条子表数据",
            "params" : [ ],
            "handlerName" : "AddItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "d78ca875-d79b-4089-aad5-2cdd29561cee",
            "code" : "suppliermaterialRemoveItem1",
            "name" : "删除一条子表数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除子表数据的标识",
              "value" : "{DATA~/#{suppliermaterial-component}/supplierMaterials/id}"
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
        }, {
          "id" : "supplierma-ohol-component-viewmodel",
          "code" : "supplierma-ohol-component-viewmodel",
          "name" : "联系方式",
          "bindTo" : "/",
          "parent" : "root-viewmodel",
          "fields" : [ {
            "type" : "Form",
            "id" : "90701715-2e2c-49ef-94dc-3f4cc113d408",
            "fieldName" : "contactsEmail",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : { }
          }, {
            "type" : "Form",
            "id" : "f119b011-54e0-4bd1-8a3f-b79795114aa0",
            "fieldName" : "contactsAddress",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : { }
          }, {
            "type" : "Form",
            "id" : "81bf894a-03ba-48b4-a27d-a341ff05784b",
            "fieldName" : "remark",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : { }
          }, {
            "type" : "Form",
            "id" : "95a3cc07-7d68-483e-a959-41e89f648a34",
            "fieldName" : "contacts_Contacts_Name",
            "groupId" : "",
            "groupName" : "",
            "valueChanging" : "",
            "valueChanged" : "",
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "SupplierMa.contacts_Contacts_Name",
                  "displayName" : "系统用户帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "valueField" : "id",
                "textField" : "name",
                "displayType" : "List",
                "mapFields" : "{'id':'contacts.contacts','name':'contacts.contacts_Name'}",
                "helpId" : "915a0b20-975a-4df1-8cfd-888c3dda0009"
              },
              "name" : "联系人",
              "require" : true,
              "readonly" : false
            }
          } ],
          "commands" : [ ],
          "states" : [ ],
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
              "class" : "f-page f-page-card f-page-is-mainsubcard f-page-is-sidescrollspy"
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
                    "html" : "<span class=\"f-title-icon f-text-orna-bill\"><i class=\"f-icon f-icon-page-title-record\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'供应商管理卡片'}}</h4><div class=\"f-title-pagination\"><span class=\"f-icon f-icon-arrow-w\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem1()\"></span><span class=\"f-icon f-icon-arrow-e\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem2()\"></span></div>"
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
              }, {
                "id" : "scrollCollapsibleArea",
                "type" : "ScrollCollapsibleArea",
                "expanded" : "!(!!this.viewModel.bindingData['id']? this.viewModel.stateMachine['editable'] : this.viewModel.stateMachine['collapseForTop'])",
                "contentTemplate" : "<div class=\"d-flex no-gutters\"\r\n    style=\"border-top: 1px dashed #D1DEE7;padding:6px 18px 18px 56px;font-size:12px;color: rgba(0,0,0,0.70);\">\r\n    <div class=\"d-none d-lg-block col-2 pr-3\">\r\n        <p style=\"margin:0 0 4px 0;font-size:13px;\">基本信息</p>\r\n        <p class=\"mb-0 text-truncate\"><span\r\n                class=\"f-text-lighter\">供应商名称：</span><span>{{viewModel.bindingData.supplierName}}</span>\r\n        </p>\r\n        <p class=\"mb-0 text-truncate\"><span\r\n                class=\"f-text-lighter\">供应商编号：</span><span>{{viewModel.bindingData.supplierCode}}</span>\r\n        </p>\r\n        <p class=\"mb-0 text-truncate\"><span\r\n                class=\"f-text-lighter\">注册时间：</span><span>{{viewModel.bindingData.signTime}}</span>\r\n        </p>\r\n    </div>\r\n    <div class=\"col-12 col-lg-8 col-xl-6\" style=\"padding:0!important;\">\r\n        <div class=\"d-flex\">\r\n            <div class=\"col-4 pr-3\">\r\n                <p style=\"margin:0;font-size:13px;\">联系人</p>\r\n                <p style=\"font-size:24px;color:#FF6C29;font-weight:700;margin:0;height:38px;\">\r\n                  {{viewModel.bindingData.contacts.contacts_Name}}\r\n                </p>\r\n            </div>\r\n            <div class=\"col-4 pr-3\">\r\n                <p style=\"margin:0;font-size:13px;\">办公地址</p>\r\n                <p style=\"font-size:24px;color: #51BD78;font-weight:700;margin:0;height:38px;\">\r\n                    {{viewModel.bindingData.contactsAddress}}\r\n                </p>\r\n            </div>\r\n            <div class=\"col-4 pr-3\">\r\n                <p style=\"margin:0;font-size:13px;\">邮箱</p>\r\n                <p style=\"font-size:24px;color: rgba(67,80,105,0.70);font-weight:700;margin:0;height:38px;\">\r\n                  {{viewModel.bindingData.contactsEmail}}\r\n                </p>\r\n            </div>\r\n        </div>\r\n       \r\n    </div>\r\n    \r\n</div>",
                "visible" : true,
                "appearance" : null
              } ],
              "visible" : true,
              "isScrollspyContainer" : false
            }, {
              "id" : "main-container",
              "type" : "ContentContainer",
              "appearance" : {
                "class" : "f-page-main h-100"
              },
              "size" : null,
              "contents" : [ {
                "id" : "scrollspy",
                "type" : "Scrollspy",
                "appearance" : {
                  "class" : ""
                },
                "currentSectionId" : "basic-form-section",
                "followType" : "(!!this.viewModel.bindingData['id']? this.viewModel.stateMachine['editable'] : this.viewModel.stateMachine['collapseForTop'])?'fixedTab':'side'",
                "items" : [ {
                  "id" : "basic-form-section",
                  "title" : "基本信息"
                }, {
                  "id" : "section-suppliermaterial",
                  "title" : "供应商对应物料"
                }, {
                  "id" : "supplierma-ohol-form-section",
                  "title" : "联系方式"
                } ],
                "itemsType" : "static",
                "visible" : true
              }, {
                "id" : "scrollspy-container",
                "type" : "ContentContainer",
                "appearance" : {
                  "class" : "f-scrollspy-content d-block"
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
                    "id" : "supplierma-ohol-component-ref",
                    "type" : "ComponentRef",
                    "component" : "supplierma-ohol-component",
                    "visible" : true
                  }, {
                    "id" : "detail-container-suppliermaterial",
                    "type" : "ContentContainer",
                    "appearance" : {
                      "class" : "f-struct-wrapper"
                    },
                    "size" : null,
                    "contents" : [ {
                      "id" : "section-suppliermaterial",
                      "type" : "Section",
                      "appearance" : {
                        "class" : "f-section-in-mainsubcard"
                      },
                      "visible" : true,
                      "mainTitle" : "供应商对应物料",
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
                      "enableAccordion" : false,
                      "accordionMode" : "default",
                      "showHeader" : true,
                      "headerTemplate" : "",
                      "titleTemplate" : "",
                      "extendedHeaderAreaTemplate" : "",
                      "toolbarTemplate" : "",
                      "extendedAreaTemplate" : "",
                      "contents" : [ {
                        "id" : "suppliermaterial-component-ref",
                        "type" : "ComponentRef",
                        "component" : "suppliermaterial-component",
                        "visible" : true
                      } ],
                      "isScrollSpyItem" : true,
                      "toolbar" : {
                        "id" : "toolbar-suppliermaterial",
                        "type" : "SectionToolbar",
                        "position" : "inHead",
                        "contents" : [ {
                          "id" : "button-add-suppliermaterial",
                          "type" : "SectionToolbarItem",
                          "title" : "新增",
                          "disable" : "!viewModel.stateMachine['canAddDetail']",
                          "appearance" : {
                            "class" : "btn btn-secondary f-btn-ml"
                          },
                          "visible" : true,
                          "click" : "root-viewmodel.suppliermaterial-component-viewmodel.suppliermaterialAddItem1"
                        }, {
                          "id" : "button-remove-suppliermaterial",
                          "type" : "SectionToolbarItem",
                          "title" : "删除",
                          "disable" : "!viewModel.stateMachine['canRemoveDetail']",
                          "appearance" : {
                            "class" : "btn btn-secondary f-btn-ml"
                          },
                          "visible" : true,
                          "click" : "root-viewmodel.suppliermaterial-component-viewmodel.suppliermaterialRemoveItem1"
                        }, {
                          "id" : "sectionToolbarItem-1c3i",
                          "type" : "SectionToolbarItem",
                          "title" : "导入",
                          "disable" : false,
                          "appearance" : {
                            "class" : "btn btn-secondary f-btn-ml"
                          },
                          "visible" : true,
                          "click" : "rootviewmodelDataImport1"
                        }, {
                          "id" : "sectionToolbarItem-43bh",
                          "type" : "SectionToolbarItem",
                          "title" : "导出全部",
                          "disable" : false,
                          "appearance" : {
                            "class" : "btn btn-secondary f-btn-ml"
                          },
                          "visible" : true,
                          "click" : "rootviewmodelDataExport1"
                        }, {
                          "id" : "sectionToolbarItem-42qy",
                          "type" : "SectionToolbarItem",
                          "title" : "导出勾选",
                          "disable" : false,
                          "appearance" : {
                            "class" : "btn btn-secondary f-btn-ml"
                          },
                          "visible" : true,
                          "click" : "rootviewmodelDataExport2"
                        } ]
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
                "isScrollspyContainer" : true,
                "scrollOffset" : 0,
                "visible" : true,
                "isScrollCollapsibleArea" : false,
                "isScrollArea" : true
              } ],
              "visible" : true,
              "isScrollspyContainer" : false
            } ],
            "visible" : true,
            "isScrollspyContainer" : false,
            "draggable" : false,
            "isScrollCollapsibleArea" : true,
            "isScrollArea" : false
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
                "id" : "supplierName_2df5f154_jtkg",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "供应商名称",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "supplierName",
                  "field" : "2df5f154-d7f6-458d-a517-b60f57b50156",
                  "fullPath" : "SupplierName"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : true,
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
                "path" : "supplierName",
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
                "id" : "supplierCode_a55cbab4_vw3m",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "供应商编号",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "supplierCode",
                  "field" : "a55cbab4-e6ff-4754-a5b5-ab1f39bdadaa",
                  "fullPath" : "SupplierCode"
                },
                "readonly" : true,
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
                "path" : "supplierCode",
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
                "id" : "signTime_36e6b73d_4lns",
                "type" : "DateBox",
                "titleSourceType" : "static",
                "title" : "注册时间",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "signTime",
                  "field" : "36e6b73d-5a10-4725-b791-4fb684db3d6e",
                  "fullPath" : "SignTime"
                },
                "readonly" : true,
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "validation" : null,
                "value" : null,
                "editable" : true,
                "dateRange" : false,
                "showTime" : true,
                "showType" : 1,
                "dateFormat" : "yyyy-MM-dd HH:mm:ss",
                "returnFormat" : "yyyy-MM-dd HH:mm:ss",
                "maxValue" : null,
                "minValue" : null,
                "disableDates" : [ ],
                "showWeekNumbers" : false,
                "dateRangeDatesDelimiter" : "~",
                "shortcuts" : [ ],
                "fieldType" : "DateTime",
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
                "path" : "signTime",
                "localizationType" : "DateTime",
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
            "isScrollSpyItem" : true,
            "toolbar" : {
              "type" : "SectionToolbar",
              "position" : "inHead",
              "contents" : [ ]
            }
          } ],
          "visible" : true,
          "afterViewInit" : null
        }, {
          "id" : "suppliermaterial-component",
          "type" : "Component",
          "viewModel" : "suppliermaterial-component-viewmodel",
          "appearance" : {
            "class" : "f-struct-is-subgrid"
          },
          "contents" : [ {
            "id" : "suppliermaterial-component-layout",
            "type" : "ContentContainer",
            "appearance" : {
              "class" : "f-grid-is-sub f-utils-flex-column"
            },
            "size" : null,
            "contents" : [ {
              "id" : "dataGrid_suppliermaterial",
              "type" : "DataGrid",
              "controlSource" : "Farris",
              "dataSource" : "supplierMaterials",
              "fields" : [ {
                "id" : "materialId_MaterialId_MaterialCode_06287e26_x36n",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "物料编号",
                "captionTemplate" : null,
                "dataField" : "materialId.materialId_MaterialCode",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "materialId_MaterialId_MaterialCode",
                  "field" : "06287e26-c583-4efb-9749-944b29c24afa",
                  "fullPath" : "MaterialId.MaterialId_MaterialCode"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "materialId_MaterialId_MaterialCode_06287e26_6gh9",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "materialId_MaterialId_MaterialCode",
                    "field" : "06287e26-c583-4efb-9749-944b29c24afa"
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
                  "path" : "materialId.materialId_MaterialCode",
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
                "id" : "materialId_MaterialId_MaterialName_655b8865_v7zg",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "物料名称",
                "captionTemplate" : null,
                "dataField" : "materialId.materialId_MaterialName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "materialId_MaterialId_MaterialName",
                  "field" : "655b8865-bfaf-4573-a18c-cabd5669eaf1",
                  "fullPath" : "MaterialId.MaterialId_MaterialName"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "materialId_MaterialId_MaterialName_655b8865_1gmu",
                  "type" : "LookupEdit",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : {
                    "class" : ""
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "materialId_MaterialId_MaterialName",
                    "field" : "655b8865-bfaf-4573-a18c-cabd5669eaf1",
                    "fullPath" : "MaterialId.MaterialId_MaterialName"
                  },
                  "require" : true,
                  "disable" : false,
                  "placeHolder" : "",
                  "dataSource" : {
                    "uri" : "SupplierMaterial.materialId_MaterialId_MaterialName",
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
                  "mapFields" : "{'id':'materialId.materialId','materialCode':'materialId.materialId_MaterialCode','materialName':'materialId.materialId_MaterialName','evePrice':'materialId.materialId_EvePrice','repertory':'materialId.materialId_Repertory','materialCat.materialCat_CatName':'materialId.materialId_MaterialCat_CatName'}",
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
                  "path" : "materialId.materialId_MaterialName",
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
                "id" : "materialId_MaterialId_EvePrice_1f7da955_komu",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "市场价格",
                "captionTemplate" : null,
                "dataField" : "materialId.materialId_EvePrice",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "materialId_MaterialId_EvePrice",
                  "field" : "1f7da955-2ad1-420a-9a2c-8af55e4747a4",
                  "fullPath" : "MaterialId.MaterialId_EvePrice"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "materialId_MaterialId_EvePrice_1f7da955_sbb0",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "materialId_MaterialId_EvePrice",
                    "field" : "1f7da955-2ad1-420a-9a2c-8af55e4747a4"
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
                "id" : "materialId_MaterialId_Repertory_3befcd45_5gw0",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "库存数量",
                "captionTemplate" : null,
                "dataField" : "materialId.materialId_Repertory",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "materialId_MaterialId_Repertory",
                  "field" : "3befcd45-fda9-47b8-89a4-50d0f76af255",
                  "fullPath" : "MaterialId.MaterialId_Repertory"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "materialId_MaterialId_Repertory_3befcd45_2bg2",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "materialId_MaterialId_Repertory",
                    "field" : "3befcd45-fda9-47b8-89a4-50d0f76af255"
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
                  "minValue" : null,
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
                  "path" : "materialId.materialId_Repertory",
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
                "readonly" : true,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : ""
              }, {
                "id" : "materialId_MaterialId_MaterialCat_CatName_9856022b_2dzp",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "类别名称",
                "captionTemplate" : null,
                "dataField" : "materialId.materialId_MaterialCat_CatName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "materialId_MaterialId_MaterialCat_CatName",
                  "field" : "9856022b-2687-4eb4-afea-df0a4c314ed4",
                  "fullPath" : "MaterialId.MaterialId_MaterialCat_CatName"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "materialId_MaterialId_MaterialCat_CatName_9856022b_by5d",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "materialId_MaterialId_MaterialCat_CatName",
                    "field" : "9856022b-2687-4eb4-afea-df0a4c314ed4"
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
              "multiSelect" : true,
              "showCheckbox" : true,
              "showAllCheckbox" : true,
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
              "autoFitColumns" : false,
              "multiSort" : false,
              "showBorder" : false,
              "striped" : true,
              "onSelectionChange" : "",
              "styler" : "",
              "showLineNumber" : false,
              "appendRow" : "suppliermaterialAddItem1",
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
              "onEditClicked" : "",
              "onDeleteClicked" : "",
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
              "useBlankWhenDataIsEmpty" : false
            } ],
            "visible" : true,
            "isScrollspyContainer" : false
          } ],
          "componentType" : "dataGrid",
          "visible" : true,
          "onInit" : null,
          "afterViewInit" : null
        }, {
          "id" : "supplierma-ohol-component",
          "type" : "Component",
          "viewModel" : "supplierma-ohol-component-viewmodel",
          "componentType" : "form-col-4",
          "appearance" : {
            "class" : "f-struct-wrapper"
          },
          "visible" : true,
          "onInit" : null,
          "afterViewInit" : null,
          "contents" : [ {
            "id" : "supplierma-ohol-form-section",
            "type" : "Section",
            "appearance" : {
              "class" : "f-section-form f-section-in-mainsubcard"
            },
            "visible" : true,
            "mainTitle" : "联系方式",
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
              "id" : "supplierma-ohol-form-layout",
              "type" : "Form",
              "appearance" : {
                "class" : "f-form-layout farris-form farris-form-controls-inline"
              },
              "visible" : true,
              "controlsInline" : true,
              "formAutoIntl" : true,
              "contents" : [ {
                "id" : "contacts_Contacts_Name_95a3cc07_th3j",
                "type" : "LookupEdit",
                "titleSourceType" : "static",
                "title" : "联系人",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "contacts_Contacts_Name",
                  "field" : "95a3cc07-7d68-483e-a959-41e89f648a34",
                  "fullPath" : "Contacts.Contacts_Name"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : true,
                "disable" : false,
                "placeHolder" : "",
                "dataSource" : {
                  "uri" : "SupplierMa.contacts_Contacts_Name",
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
                "mapFields" : "{'id':'contacts.contacts','name':'contacts.contacts_Name'}",
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
                "path" : "contacts.contacts_Name",
                "isRTControl" : false,
                "labelAutoOverflow" : false,
                "updateOn" : "blur",
                "fieldValueChanging" : "",
                "fieldValueChanged" : "",
                "helpId" : "915a0b20-975a-4df1-8cfd-888c3dda0009"
              }, {
                "id" : "contactsEmail_90701715_rtno",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "联系人邮箱",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "contactsEmail",
                  "field" : "90701715-2e2c-49ef-94dc-3f4cc113d408",
                  "fullPath" : "ContactsEmail"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
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
                "tabindex" : 0,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "enableTips" : true,
                "path" : "contactsEmail",
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
                "id" : "contactsAddress_f119b011_sfjn",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "办公地址",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "contactsAddress",
                  "field" : "f119b011-54e0-4bd1-8a3f-b79795114aa0",
                  "fullPath" : "ContactsAddress"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
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
                "tabindex" : 0,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "enableTips" : true,
                "path" : "contactsAddress",
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
                "id" : "remark_81bf894a_30fs",
                "type" : "MultiTextBox",
                "titleSourceType" : "static",
                "title" : "备注",
                "appearance" : {
                  "class" : "col-12 farris-form-auto"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "remark",
                  "field" : "81bf894a-03ba-48b4-a27d-a341ff05784b",
                  "fullPath" : "Remark"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "maxLength" : 4000,
                "holdPlace" : false,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "isTextArea" : true,
                "tabindex" : 0,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "editType" : "default",
                "dialogWidth" : 500,
                "dialogHeight" : 400,
                "autoHeight" : false,
                "maxHeight" : 500,
                "enableWordCount" : false,
                "countType" : "surplus",
                "onlyShowInDialog" : false,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "useComments" : false,
                "path" : "remark",
                "labelAutoOverflow" : false,
                "updateOn" : "blur"
              } ],
              "labelAutoOverflow" : false
            } ],
            "isScrollSpyItem" : true,
            "toolbar" : {
              "type" : "SectionToolbar",
              "position" : "inHead",
              "contents" : [ ]
            }
          } ]
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
            "host" : "05d9f2ca-bf42-407b-9c48-c5c3883be0c0",
            "handler" : "AddItem"
          }, {
            "host" : "d78ca875-d79b-4089-aad5-2cdd29561cee",
            "handler" : "RemoveItem"
          } ],
          "code" : "CardController",
          "nameSpace" : "Inspur.GS.Gsp.Web.WebCmp"
        }, {
          "id" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
          "path" : "SCM/CM/SupplierMa/bo-supplierma-front/metadata/components",
          "name" : "DataImportExportCommand.webcmd",
          "refedHandlers" : [ {
            "host" : "d4932348-dbe7-4787-871d-e195498bc25a",
            "handler" : "DataImport"
          }, {
            "host" : "f8401333-7e13-4b69-9549-3f0382941dee",
            "handler" : "DataExport"
          }, {
            "host" : "789e4744-4cf0-4afb-83cf-11dbb6db6bd8",
            "handler" : "DataExport"
          } ],
          "code" : "DataImportExportCommand",
          "nameSpace" : "Inspur.GS.Gsp.Common.DataIE"
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-supplierma-front",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "expressions" : [ ],
        "metadataId" : "fefb3340-5083-4841-8de2-d8a0e990f141",
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
                  "value" : "Create",
                  "defaultValue" : null
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
                  "value" : "Edit",
                  "defaultValue" : null
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
                  "value" : "Cancel",
                  "defaultValue" : null
                }, {
                  "name" : "successMsg",
                  "shownName" : "保存成功提示信息",
                  "value" : "",
                  "defaultValue" : null
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
                  "value" : "Cancel",
                  "defaultValue" : null
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
            "id" : "button-add-suppliermaterial",
            "viewModelId" : "suppliermaterial-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "suppliermaterial-component",
                "viewModelId" : "suppliermaterial-component-viewmodel"
              },
              "command" : {
                "id" : "05d9f2ca-bf42-407b-9c48-c5c3883be0c0",
                "label" : "suppliermaterialAddItem1",
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
            "id" : "button-remove-suppliermaterial",
            "viewModelId" : "suppliermaterial-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "suppliermaterial-component",
                "viewModelId" : "suppliermaterial-component-viewmodel"
              },
              "command" : {
                "id" : "d78ca875-d79b-4089-aad5-2cdd29561cee",
                "label" : "suppliermaterialRemoveItem1",
                "name" : "删除一条子表数据",
                "handlerName" : "RemoveItem",
                "params" : [ {
                  "name" : "id",
                  "shownName" : "待删除子表数据的标识",
                  "value" : "{DATA~/#{suppliermaterial-component}/supplierMaterials/id}"
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
            "id" : "sectionToolbarItem-1c3i",
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
                "id" : "d4932348-dbe7-4787-871d-e195498bc25a",
                "label" : "rootviewmodelDataImport1",
                "name" : "数据导入1",
                "handlerName" : "DataImport",
                "params" : [ {
                  "name" : "type",
                  "shownName" : "导入类型",
                  "value" : "1"
                }, {
                  "name" : "ruleID",
                  "shownName" : "规则Id",
                  "value" : "974c2fd3-dd98-44d7-824a-f1e0c6071c14"
                }, {
                  "name" : "option",
                  "shownName" : "参数配置",
                  "value" : "{\"templatefilename\":\"供应商对应物料导入模板\",\"customImportTitle\":\"供应商对应物料导入\",\"importdbRefresh\":true}"
                } ],
                "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
                "label" : "DataImportExportCommand",
                "name" : "导入导出通用命令构件"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "sectionToolbarItem-43bh",
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
                "id" : "f8401333-7e13-4b69-9549-3f0382941dee",
                "label" : "rootviewmodelDataExport1",
                "name" : "数据导出1",
                "handlerName" : "DataExport",
                "params" : [ {
                  "name" : "type",
                  "shownName" : "导出类型",
                  "value" : "3"
                }, {
                  "name" : "ruleID",
                  "shownName" : "规则Id",
                  "value" : "4c0e9550-a219-45aa-8e03-fdcdc0349aa2"
                }, {
                  "name" : "option",
                  "shownName" : "参数配置",
                  "value" : ""
                } ],
                "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
                "label" : "DataImportExportCommand",
                "name" : "导入导出通用命令构件"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "sectionToolbarItem-42qy",
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
                "id" : "789e4744-4cf0-4afb-83cf-11dbb6db6bd8",
                "label" : "rootviewmodelDataExport2",
                "name" : "数据导出2",
                "handlerName" : "DataExport",
                "params" : [ {
                  "name" : "type",
                  "shownName" : "导出类型",
                  "value" : "3"
                }, {
                  "name" : "ruleID",
                  "shownName" : "规则Id",
                  "value" : "4c0e9550-a219-45aa-8e03-fdcdc0349aa2"
                }, {
                  "name" : "option",
                  "shownName" : "参数配置",
                  "value" : "{\"selectFilterGridComponent\":\"data-grid-component\"}"
                } ],
                "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
                "label" : "DataImportExportCommand",
                "name" : "导入导出通用命令构件"
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
                  "value" : "{UISTATE~/root-component/action}",
                  "defaultValue" : null
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
            "id" : "dataGrid_suppliermaterial",
            "viewModelId" : "suppliermaterial-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "appendRow",
                "name" : "回车新增行事件"
              },
              "targetComponent" : {
                "id" : "suppliermaterial-component",
                "viewModelId" : "suppliermaterial-component-viewmodel"
              },
              "command" : {
                "id" : "05d9f2ca-bf42-407b-9c48-c5c3883be0c0",
                "label" : "suppliermaterialAddItem1",
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
  "RelativePath" : "SCM/CM/SupplierMa/bo-supplierma-front/metadata/components",
  "ExtendProperty" : "",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}