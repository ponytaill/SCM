{
  "Header" : {
    "Code" : "SupplierMaList",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.SCM.CM.SupplierMa.SupplierMa.Front",
    "CertId" : null,
    "Name" : "供应商管理表单",
    "FileName" : "SupplierMaList.frm",
    "BizobjectID" : "ca0af27e-3ff4-a99d-a4e5-aec1c23a5eb7",
    "Language" : null,
    "Extendable" : false,
    "ID" : "172d5655-d3fe-4ceb-994a-4e113e530fb4",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "f2f3d68c-7455-48cb-bc9f-e55bc8408b77",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.SCM.CM.SupplierMa.SupplierMa.Front",
      "Code" : "SupplierMaList.frm",
      "Name" : "SupplierMaList.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "ca0af27e-3ff4-a99d-a4e5-aec1c23a5eb7"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "CreationDate" : null,
    "Id" : "172d5655-d3fe-4ceb-994a-4e113e530fb4",
    "Contents" : {
      "module" : {
        "id" : "SupplierMaList",
        "code" : "SupplierMaList",
        "name" : "供应商管理表单",
        "caption" : "供应商管理表单",
        "type" : "Module",
        "creator" : "shizhiyuan",
        "creationDate" : "2023-06-21T03:07:36.321Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "list-template",
        "templateId" : "list-template",
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
                    "id" : "4be50a2d-e371-4f9e-bcc5-10643ddd7875",
                    "originalId" : "4be50a2d-e371-4f9e-bcc5-10643ddd7875",
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
                    "id" : "fd479202-d06b-488c-a7a3-1b4d69954ea2",
                    "originalId" : "fd479202-d06b-488c-a7a3-1b4d69954ea2",
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
                        "id" : "0af59d3e-d48b-484f-b643-de5aa1786e81",
                        "originalId" : "0af59d3e-d48b-484f-b643-de5aa1786e81",
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
                        "id" : "774aeed3-4f94-4771-a8e8-03b135853fde",
                        "originalId" : "774aeed3-4f94-4771-a8e8-03b135853fde",
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
                        "id" : "553cb61f-e0bf-48ab-93a6-164d9a6798de",
                        "originalId" : "553cb61f-e0bf-48ab-93a6-164d9a6798de",
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
                        "id" : "4d8e9f9a-2a4d-46f1-a08f-73ac15e33728",
                        "originalId" : "4d8e9f9a-2a4d-46f1-a08f-73ac15e33728",
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
                        "id" : "c6256d10-1ce9-4827-b5ab-8debf1848a97",
                        "originalId" : "c6256d10-1ce9-4827-b5ab-8debf1848a97",
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
                        "id" : "a1c5e000-42a2-40b7-8a6c-0476cfa08e42",
                        "originalId" : "a1c5e000-42a2-40b7-8a6c-0476cfa08e42",
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
                        "id" : "ca4eb9a4-c800-4adc-ab32-58749ec9150f",
                        "originalId" : "ca4eb9a4-c800-4adc-ab32-58749ec9150f",
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
                        "id" : "8402cf25-ecc5-443f-9ff3-d69014d7a8ee",
                        "originalId" : "8402cf25-ecc5-443f-9ff3-d69014d7a8ee",
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
                        "id" : "ba621c85-77dc-467d-80e2-94047ea0b6ee",
                        "originalId" : "ba621c85-77dc-467d-80e2-94047ea0b6ee",
                        "label" : "materialId_MaterialCat_CatCode",
                        "code" : "CatCode(MaterialCat)",
                        "name" : "类别编号"
                      } ],
                      "primary" : "materialId",
                      "displayName" : "物料管理",
                      "name" : "Material88e7"
                    },
                    "path" : "MaterialId",
                    "id" : "0339f098-781f-45bc-9b91-14a3bd7094ff",
                    "originalId" : "0339f098-781f-45bc-9b91-14a3bd7094ff",
                    "label" : "materialId",
                    "code" : "MaterialId",
                    "name" : "物料名称"
                  } ],
                  "primary" : "id",
                  "displayName" : "供应商对应物料",
                  "name" : "SupplierMaterial"
                },
                "id" : "9230f208-3212-4ca4-97ed-9c4aeae8e95e",
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
                "id" : "76a00c6e-52e4-4d31-aeaf-4b4c225babbf",
                "originalId" : "76a00c6e-52e4-4d31-aeaf-4b4c225babbf",
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
                "id" : "9445bd0f-3554-4776-b9a3-0686ea4460ba",
                "originalId" : "9445bd0f-3554-4776-b9a3-0686ea4460ba",
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
                "id" : "8347d63a-678f-4ba1-8007-d4eb80046fbc",
                "originalId" : "8347d63a-678f-4ba1-8007-d4eb80046fbc",
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
                "id" : "cff3b19d-3a45-46a6-9209-5724e21f874d",
                "originalId" : "cff3b19d-3a45-46a6-9209-5724e21f874d",
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
                    "id" : "3826040b-3fca-4557-b236-19879dd78412",
                    "originalId" : "3826040b-3fca-4557-b236-19879dd78412",
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
                    "id" : "b340437c-eccc-4fa8-9d16-d83f0564a66a",
                    "originalId" : "b340437c-eccc-4fa8-9d16-d83f0564a66a",
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
                    "id" : "ba0a510a-c94e-45d0-87ff-16e2c2738a5e",
                    "originalId" : "ba0a510a-c94e-45d0-87ff-16e2c2738a5e",
                    "label" : "contacts_Code",
                    "code" : "Code",
                    "name" : "编号"
                  } ],
                  "primary" : "contacts",
                  "displayName" : "用户",
                  "name" : "GspUser1a95"
                },
                "path" : "Contacts",
                "id" : "98170874-ebb1-4c94-be37-6c8538290fbe",
                "originalId" : "98170874-ebb1-4c94-be37-6c8538290fbe",
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
                "id" : "d64a584e-a868-4d94-8c53-71406ec7b3d8",
                "originalId" : "d64a584e-a868-4d94-8c53-71406ec7b3d8",
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
                "id" : "0413715c-226e-4b32-b609-b0b019c602a9",
                "originalId" : "0413715c-226e-4b32-b609-b0b019c602a9",
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
                "id" : "9a10dffd-b310-414d-9b37-14d8eea15542",
                "originalId" : "9a10dffd-b310-414d-9b37-14d8eea15542",
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
                "id" : "8a27efaa-f20e-424a-912d-f4d82c452c99",
                "originalId" : "8a27efaa-f20e-424a-912d-f4d82c452c99",
                "label" : "remark",
                "code" : "Remark",
                "name" : "备注"
              } ],
              "primary" : "id",
              "displayName" : "供应商管理",
              "name" : "SupplierMa"
            },
            "id" : "302562b7-6110-465f-b840-d7fdee563f9a",
            "label" : "supplierMas",
            "code" : "SupplierMa",
            "name" : "供应商管理"
          } ],
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "sourceType" : "vo",
          "id" : "e723deb2-a4ef-4c30-a70b-3e392b6ab41c",
          "variables" : [ ],
          "sourceUri" : "api/scm/cm/v1.0/SupplierMaList_frm",
          "code" : "SupplierMaList_frm",
          "name" : "供应商管理表单_frm",
          "eapiId" : "746fd4c9-4841-4155-b00e-631929f7ab4d",
          "eapiCode" : "SupplierMaList_frm",
          "eapiName" : "供应商管理表单_frm",
          "eapiNameSpace" : "Inspur.GS.SCM.CM.SupplierMa.SupplierMa.Front",
          "voPath" : "SCM/CM/SupplierMa/bo-supplierma-front/metadata/components",
          "voNameSpace" : "Inspur.GS.SCM.CM.SupplierMa.SupplierMa.Front"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "SupplierMaList_state_machine",
          "name" : "供应商管理表单_frm",
          "uri" : "7b266adf-4bb7-4d05-b37a-0fe91682137b",
          "code" : "SupplierMaList_frm",
          "nameSpace" : "Inspur.GS.SCM.CM.SupplierMa.SupplierMa.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "供应商管理",
          "fields" : [ ],
          "stateMachine" : "SupplierMaList_state_machine",
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "93ee1cd2-cf0b-40b3-b99f-958a3d1fad1c",
            "code" : "Load1",
            "name" : "加载数据",
            "params" : [ {
              "name" : "filter",
              "shownName" : "过滤条件",
              "value" : ""
            }, {
              "name" : "sort",
              "shownName" : "排序条件",
              "value" : ""
            } ],
            "handlerName" : "Load",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "71ae8a4c-6202-4875-9246-2e2d959da37f",
            "code" : "Search1",
            "name" : "查询数据",
            "params" : [ {
              "name" : "filter",
              "shownName" : "过滤条件",
              "value" : ""
            }, {
              "name" : "sort",
              "shownName" : "排序条件",
              "value" : ""
            }, {
              "name" : "pageSize",
              "shownName" : "分页大小",
              "value" : ""
            }, {
              "name" : "pageIndex",
              "shownName" : "当前页码",
              "value" : ""
            } ],
            "handlerName" : "Search",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "6d5a354f-871f-43e6-82bc-7837184380d3",
            "code" : "RemoveRows1",
            "name" : "删除多行数据",
            "params" : [ {
              "name" : "ids",
              "shownName" : "待删除数据的标识",
              "value" : "{UISTATE~/data-grid-component/ids}"
            } ],
            "handlerName" : "RemoveRows",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "77556491-41c0-4356-8ccf-25e39817060e",
            "code" : "Add1",
            "name" : "在新页签中新增数据",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "cc348030-8221-4ae5-8a42-1ac545353fa1"
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"action\":\"LoadAndAdd1\"}"
            }, {
              "name" : "enableRefresh",
              "shownName" : "支持刷新列表数据",
              "value" : ""
            }, {
              "name" : "tabName",
              "shownName" : "标签页标题",
              "value" : ""
            }, {
              "name" : "destructuring",
              "shownName" : "是否解构参数",
              "value" : ""
            } ],
            "handlerName" : "Add",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "root-component"
          }, {
            "id" : "52fdcac3-46c8-466e-aa5d-19920ece2076",
            "code" : "View1",
            "name" : "在新页签中查看数据",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "cc348030-8221-4ae5-8a42-1ac545353fa1"
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"action\":\"LoadAndView1\", \"id\":\"{DATA~/data-grid-component/id}\"}"
            }, {
              "name" : "idToView",
              "shownName" : "待查看数据的标识",
              "value" : "{DATA~/data-grid-component/id}"
            }, {
              "name" : "enableRefresh",
              "shownName" : "支持刷新列表数据",
              "value" : ""
            }, {
              "name" : "tabName",
              "shownName" : "标签页标题",
              "value" : ""
            }, {
              "name" : "destructuring",
              "shownName" : "是否解构参数",
              "value" : ""
            } ],
            "handlerName" : "View",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "root-component"
          }, {
            "id" : "7ade9996-0531-4401-b1bc-fb9ec8ee3f8e",
            "code" : "Edit1",
            "name" : "在新页签中编辑数据",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "cc348030-8221-4ae5-8a42-1ac545353fa1"
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"action\":\"LoadAndEdit1\", \"id\":\"{DATA~/data-grid-component/id}\"}"
            }, {
              "name" : "idToEdit",
              "shownName" : "待编辑数据的标识",
              "value" : "{DATA~/data-grid-component/id}"
            }, {
              "name" : "enableRefresh",
              "shownName" : "支持刷新列表数据",
              "value" : ""
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
            "isNewGenerated" : false,
            "targetComponent" : "root-component"
          }, {
            "id" : "debae2dd-3387-48cf-90ba-96e74ab5a8e5",
            "code" : "Remove1",
            "name" : "删除当前数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除数据的标识",
              "value" : "{DATA~/data-grid-component/id}"
            } ],
            "handlerName" : "Remove",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "0d36eb0a-fe86-4769-b232-b84c72dcc02f",
            "code" : "Filter1",
            "name" : "过滤并加载数据1",
            "params" : [ {
              "name" : "filter",
              "shownName" : "过滤条件",
              "value" : "{UISTATE~/root-component/originalFilterConditionList}"
            }, {
              "name" : "sort",
              "shownName" : "排序条件",
              "value" : ""
            } ],
            "handlerName" : "Filter",
            "cmpId" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "747ff4b6-96be-43a7-aa7b-4a50b22c6d68",
            "code" : "rootviewmodelLoad1",
            "name" : "加载数据1",
            "params" : [ {
              "name" : "filter",
              "shownName" : "过滤条件",
              "value" : ""
            }, {
              "name" : "sort",
              "shownName" : "排序条件",
              "value" : ""
            } ],
            "handlerName" : "Load",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : true,
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
          "name" : "供应商管理",
          "fields" : [ {
            "type" : "Form",
            "id" : "8347d63a-678f-4ba1-8007-d4eb80046fbc",
            "fieldName" : "supplierName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "cff3b19d-3a45-46a6-9209-5724e21f874d",
            "fieldName" : "supplierCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "d64a584e-a868-4d94-8c53-71406ec7b3d8",
            "fieldName" : "contactsEmail",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "0413715c-226e-4b32-b609-b0b019c602a9",
            "fieldName" : "contactsAddress",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "9a10dffd-b310-414d-9b37-14d8eea15542",
            "fieldName" : "signTime",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "8a27efaa-f20e-424a-912d-f4d82c452c99",
            "fieldName" : "remark",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "b340437c-eccc-4fa8-9d16-d83f0564a66a",
            "fieldName" : "contacts_Contacts_Name",
            "groupId" : "",
            "groupName" : "",
            "valueChanging" : "",
            "valueChanged" : "",
            "updateOn" : "blur",
            "fieldSchema" : {
              "name" : "联系人"
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
            "extensions" : [ ],
            "isInvalid" : false
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
                  "id" : "76a00c6e-52e4-4d31-aeaf-4b4c225babbf",
                  "labelCode" : "ID",
                  "code" : "ID",
                  "name" : "主键",
                  "control" : {
                    "id" : "76a00c6e-52e4-4d31-aeaf-4b4c225babbf",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "9445bd0f-3554-4776-b9a3-0686ea4460ba",
                  "labelCode" : "Version",
                  "code" : "Version",
                  "name" : "版本",
                  "control" : {
                    "id" : "9445bd0f-3554-4776-b9a3-0686ea4460ba",
                    "controltype" : "date",
                    "require" : false,
                    "format" : "yyyy-MM-dd",
                    "weekSelect" : false
                  }
                }, {
                  "id" : "8347d63a-678f-4ba1-8007-d4eb80046fbc",
                  "labelCode" : "SupplierName",
                  "code" : "SupplierName",
                  "name" : "供应商名称",
                  "control" : {
                    "id" : "8347d63a-678f-4ba1-8007-d4eb80046fbc",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "cff3b19d-3a45-46a6-9209-5724e21f874d",
                  "labelCode" : "SupplierCode",
                  "code" : "SupplierCode",
                  "name" : "供应商编号",
                  "control" : {
                    "id" : "cff3b19d-3a45-46a6-9209-5724e21f874d",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "1a95777a-e315-49f3-a50d-58a6101ac8a3",
                  "labelCode" : "Contacts.Contacts",
                  "code" : "Contacts",
                  "name" : "联系人姓名",
                  "control" : {
                    "id" : "1a95777a-e315-49f3-a50d-58a6101ac8a3",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "3826040b-3fca-4557-b236-19879dd78412",
                  "labelCode" : "Contacts.Contacts_ID",
                  "code" : "ID",
                  "name" : "ID",
                  "control" : {
                    "id" : "3826040b-3fca-4557-b236-19879dd78412",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "b340437c-eccc-4fa8-9d16-d83f0564a66a",
                  "labelCode" : "Contacts.Contacts_Name",
                  "code" : "Name",
                  "name" : "名称",
                  "control" : {
                    "id" : "b340437c-eccc-4fa8-9d16-d83f0564a66a",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "ba0a510a-c94e-45d0-87ff-16e2c2738a5e",
                  "labelCode" : "Contacts.Contacts_Code",
                  "code" : "Code",
                  "name" : "编号",
                  "control" : {
                    "id" : "ba0a510a-c94e-45d0-87ff-16e2c2738a5e",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "d64a584e-a868-4d94-8c53-71406ec7b3d8",
                  "labelCode" : "ContactsEmail",
                  "code" : "ContactsEmail",
                  "name" : "联系人邮箱",
                  "control" : {
                    "id" : "d64a584e-a868-4d94-8c53-71406ec7b3d8",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "0413715c-226e-4b32-b609-b0b019c602a9",
                  "labelCode" : "ContactsAddress",
                  "code" : "ContactsAddress",
                  "name" : "办公地址",
                  "control" : {
                    "id" : "0413715c-226e-4b32-b609-b0b019c602a9",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "9a10dffd-b310-414d-9b37-14d8eea15542",
                  "labelCode" : "SignTime",
                  "code" : "SignTime",
                  "name" : "注册时间",
                  "control" : {
                    "id" : "9a10dffd-b310-414d-9b37-14d8eea15542",
                    "controltype" : "date",
                    "require" : false,
                    "format" : "yyyy-MM-dd",
                    "weekSelect" : false
                  }
                } ],
                "presetFieldConfigs" : [ {
                  "id" : "8347d63a-678f-4ba1-8007-d4eb80046fbc",
                  "labelCode" : "SupplierName",
                  "code" : "SupplierName",
                  "name" : "供应商名称",
                  "control" : {
                    "id" : "8347d63a-678f-4ba1-8007-d4eb80046fbc",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "cff3b19d-3a45-46a6-9209-5724e21f874d",
                  "labelCode" : "SupplierCode",
                  "code" : "SupplierCode",
                  "name" : "供应商编号",
                  "control" : {
                    "id" : "cff3b19d-3a45-46a6-9209-5724e21f874d",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "9a10dffd-b310-414d-9b37-14d8eea15542",
                  "labelCode" : "SignTime",
                  "code" : "SignTime",
                  "name" : "注册时间",
                  "control" : {
                    "id" : "9a10dffd-b310-414d-9b37-14d8eea15542",
                    "controltype" : "date",
                    "require" : false,
                    "format" : "yyyy-MM-dd",
                    "weekSelect" : false
                  }
                } ],
                "formId" : "SupplierMaList",
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
                    "html" : "<span class=\"f-title-icon f-text-orna-manage\"><i class=\"f-icon f-icon-page-title-administer\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'供应商管理表单'}}</h4>"
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
                    "id" : "toolBarItem-wp82",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : false,
                    "text" : "同步",
                    "items" : [ ],
                    "visible" : true,
                    "click" : "rootviewmodelLoad1",
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
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
                    "disable" : "!viewModel.stateMachine['canEdit']",
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
          "afterViewInit" : null
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
              "dataSource" : "supplierMas",
              "fields" : [ {
                "id" : "supplierName_8347d63a_bhow",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "供应商名称",
                "captionTemplate" : null,
                "dataField" : "supplierName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "supplierName",
                  "field" : "8347d63a-678f-4ba1-8007-d4eb80046fbc",
                  "fullPath" : "SupplierName"
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
                "id" : "supplierCode_cff3b19d_scg5",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "供应商编号",
                "captionTemplate" : null,
                "dataField" : "supplierCode",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "supplierCode",
                  "field" : "cff3b19d-3a45-46a6-9209-5724e21f874d",
                  "fullPath" : "SupplierCode"
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
                "id" : "contacts_Contacts_Name_b340437c_f4rv",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "联系人",
                "binding" : {
                  "type" : "Form",
                  "path" : "contacts_Contacts_Name",
                  "field" : "b340437c-eccc-4fa8-9d16-d83f0564a66a",
                  "fullPath" : "Contacts.Contacts_Name"
                },
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "readonly" : false,
                "dataField" : "contacts.contacts_Name",
                "dataType" : "string",
                "displayTemplate" : null,
                "captionTemplate" : null,
                "editor" : null,
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
                "localizationType" : "Date",
                "colTemplate" : "<ng-template #contextTmpl>\r\n    <div style=\" padding:20px 10px 26px 20px; font-size: 12px;color: #515151;width:330px\">\r\n        <h4 style=\"font-weight:600;font-size: 18px;color: rgba(0,0,0,0.80);margin:0 0 14px;\">联系人信息</h4>\r\n         <p style=\"margin:0 0 12px;\"><i class=\"f-icon f-icon-basic text-success\" style=\"margin-right: 8px;font-size: 13px;\"></i>联系人姓名：{{ctx.rowData['contacts']['contacts_Name']}}</p>\r\n        <p style=\"margin:0 0 12px;\"><i class=\"f-icon f-icon-basic text-success\" style=\"margin-right: 8px;font-size: 13px;\"></i>联系人邮箱：{{ctx.rowData['contactsEmail']}}</p>\r\n        <p style=\"margin:0 0 12px;\"><i class=\"f-icon f-icon-user text-success\" style=\"margin-right: 8px;font-size: 13px;\"></i>办公地址：{{ctx.rowData['contactsAddress']}}</p>\r\n    </div>\r\n</ng-template>\r\n<div class=\"f-datagrid-cell-content\">\r\n    <span class=\"mr-5\" farrisPopover [placement]=\"'right'\" [triggers]=\"'hover'\" [popover]=\"contextTmpl\">{{ctx.rowData['contacts']['contacts_Name']}}</span>\r\n</div>"
              }, {
                "id" : "contactsEmail_d64a584e_qs3a",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "联系人邮箱",
                "captionTemplate" : null,
                "dataField" : "contactsEmail",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "contactsEmail",
                  "field" : "d64a584e-a868-4d94-8c53-71406ec7b3d8",
                  "fullPath" : "ContactsEmail"
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
                "id" : "contactsAddress_0413715c_u5sw",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "办公地址",
                "captionTemplate" : null,
                "dataField" : "contactsAddress",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "contactsAddress",
                  "field" : "0413715c-226e-4b32-b609-b0b019c602a9",
                  "fullPath" : "ContactsAddress"
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
                "id" : "signTime_9a10dffd_sb3z",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "注册时间",
                "captionTemplate" : null,
                "dataField" : "signTime",
                "dataType" : "datetime",
                "binding" : {
                  "type" : "Form",
                  "path" : "signTime",
                  "field" : "9a10dffd-b310-414d-9b37-14d8eea15542",
                  "fullPath" : "SignTime"
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
                  "dateFormat" : "yyyy-MM-dd HH:mm:ss"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "localizationType" : "DateTime",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : ""
              }, {
                "id" : "remark_8a27efaa_zbgx",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "备注",
                "captionTemplate" : null,
                "dataField" : "remark",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "remark",
                  "field" : "8a27efaa-f20e-424a-912d-f4d82c452c99",
                  "fullPath" : "Remark"
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
              "autoFitColumns" : false,
              "virtualized" : false,
              "virtualizedAsyncLoad" : false,
              "scrollYLoad" : "ChangePage1",
              "onSelectionChange" : "",
              "fieldEditable" : false,
              "appendRow" : null,
              "disable" : false,
              "pageChange" : "ChangePage1",
              "pageSizeChanged" : "ChangePage1",
              "styler" : "",
              "multiSort" : false,
              "showBorder" : false,
              "striped" : true,
              "showLineNumber" : false,
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
              "onEditClicked" : "",
              "onDeleteClicked" : "",
              "commandColumnWidth" : 120,
              "showCommandColumn" : true,
              "checkedChange" : null,
              "footerHeight" : 29,
              "filterType" : "none",
              "enableSmartFilter" : false,
              "lineNumberTitle" : "",
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
              "pageSize" : 20
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
          "afterViewInit" : null
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
            "host" : "747ff4b6-96be-43a7-aa7b-4a50b22c6d68",
            "handler" : "Load"
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
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-supplierma-front",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "expressions" : [ ],
        "metadataId" : "172d5655-d3fe-4ceb-994a-4e113e530fb4",
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
                  "value" : "{UISTATE~/root-component/originalFilterConditionList}"
                }, {
                  "name" : "sort",
                  "shownName" : "排序条件",
                  "value" : ""
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
                  "value" : "cc348030-8221-4ae5-8a42-1ac545353fa1"
                }, {
                  "name" : "params",
                  "shownName" : "附加参数",
                  "value" : "{\"action\":\"LoadAndAdd1\"}"
                }, {
                  "name" : "enableRefresh",
                  "shownName" : "支持刷新列表数据",
                  "value" : ""
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
                  "value" : "cc348030-8221-4ae5-8a42-1ac545353fa1"
                }, {
                  "name" : "params",
                  "shownName" : "附加参数",
                  "value" : "{\"action\":\"LoadAndEdit1\", \"id\":\"{DATA~/data-grid-component/id}\"}"
                }, {
                  "name" : "idToEdit",
                  "shownName" : "待编辑数据的标识",
                  "value" : "{DATA~/data-grid-component/id}"
                }, {
                  "name" : "enableRefresh",
                  "shownName" : "支持刷新列表数据",
                  "value" : ""
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
                  "value" : "cc348030-8221-4ae5-8a42-1ac545353fa1"
                }, {
                  "name" : "params",
                  "shownName" : "附加参数",
                  "value" : "{\"action\":\"LoadAndView1\", \"id\":\"{DATA~/data-grid-component/id}\"}"
                }, {
                  "name" : "idToView",
                  "shownName" : "待查看数据的标识",
                  "value" : "{DATA~/data-grid-component/id}"
                }, {
                  "name" : "enableRefresh",
                  "shownName" : "支持刷新列表数据",
                  "value" : ""
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
                  "value" : "{DATA~/data-grid-component/id}"
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
                  "value" : "{UISTATE~/root-component/originalFilterConditionList}"
                }, {
                  "name" : "sort",
                  "shownName" : "排序条件",
                  "value" : ""
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
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "toolBarItem-wp82",
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
                "id" : "747ff4b6-96be-43a7-aa7b-4a50b22c6d68",
                "label" : "rootviewmodelLoad1",
                "name" : "加载数据1",
                "handlerName" : "Load",
                "params" : [ {
                  "id" : "fd8552c4-b609-f52d-a449-1b37d7bebbd8",
                  "name" : "filter",
                  "value" : "",
                  "shownName" : "过滤条件",
                  "description" : "可选，根据“过滤条件编辑器”编辑而得",
                  "editorType" : null,
                  "isRetVal" : false,
                  "origin" : {
                    "dict" : null,
                    "required" : null,
                    "defaultValue" : null,
                    "constraint" : null,
                    "kind" : "DefaultParameter",
                    "controlType" : null,
                    "helpInfo" : null,
                    "paramConstraint" : null,
                    "enumCollection" : [ ],
                    "extensionKeys" : null,
                    "Code" : "filter",
                    "Name" : "过滤条件",
                    "Description" : "可选，根据“过滤条件编辑器”编辑而得",
                    "ParameterType" : "string",
                    "controlSource" : {
                      "type" : "FilterEditor",
                      "context" : null
                    },
                    "Id" : "fd8552c4-b609-f52d-a449-1b37d7bebbd8",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "d1395b4b-7896-1a5a-cd76-84e9e676880e",
                  "name" : "sort",
                  "value" : "",
                  "shownName" : "排序条件",
                  "description" : "可选，根据“排序条件编辑器”编辑而得",
                  "editorType" : null,
                  "isRetVal" : false,
                  "origin" : {
                    "dict" : null,
                    "required" : null,
                    "defaultValue" : null,
                    "constraint" : null,
                    "kind" : "DefaultParameter",
                    "controlType" : null,
                    "helpInfo" : null,
                    "paramConstraint" : null,
                    "enumCollection" : [ ],
                    "extensionKeys" : null,
                    "Code" : "sort",
                    "Name" : "排序条件",
                    "Description" : "可选，根据“排序条件编辑器”编辑而得",
                    "ParameterType" : "string",
                    "controlSource" : {
                      "type" : "SortEditor",
                      "context" : null
                    },
                    "Id" : "d1395b4b-7896-1a5a-cd76-84e9e676880e",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                } ],
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
          "name" : "PopoverModule ",
          "path" : "@farris/ui-popover"
        } ]
      },
      "options" : {
        "enableTextArea" : true,
        "renderMode" : "compile",
        "enableDeleteSourceCode" : true,
        "changeSetPolicy" : "valid"
      }
    }
  },
  "ExtendRule" : null,
  "RelativePath" : "SCM/CM/SupplierMa/bo-supplierma-front/metadata/components",
  "ExtendProperty" : "",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}