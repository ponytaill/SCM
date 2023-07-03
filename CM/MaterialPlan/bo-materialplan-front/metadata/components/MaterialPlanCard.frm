{
  "Header" : {
    "Code" : "MaterialPlanCard",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Front",
    "CertId" : null,
    "Name" : "物料需求计划详情",
    "FileName" : "MaterialPlanCard.frm",
    "BizobjectID" : "231b9526-f857-fa01-9eec-f45b6f98367d",
    "Language" : null,
    "Extendable" : false,
    "ID" : "13b2d168-4d6a-4ea3-b811-e3e56498f101",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "7cf116fa-c01c-49a7-a748-38513b268223",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Front",
      "Code" : "MaterialPlanCard.frm",
      "Name" : "MaterialPlanCard.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "231b9526-f857-fa01-9eec-f45b6f98367d"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Id" : "13b2d168-4d6a-4ea3-b811-e3e56498f101",
    "Contents" : {
      "module" : {
        "id" : "MaterialPlanCard",
        "code" : "MaterialPlanCard",
        "name" : "物料需求计划详情",
        "caption" : "物料需求计划详情",
        "type" : "Module",
        "creator" : "shizhiyuan",
        "creationDate" : "2023-06-21T08:09:01.581Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "card-template",
        "templateId" : "card-template",
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
                    "id" : "6d69d4c8-75aa-43b3-99d1-3e6787f0e2f0",
                    "originalId" : "6d69d4c8-75aa-43b3-99d1-3e6787f0e2f0",
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
                    "id" : "85021f46-b753-4793-aab4-f5bd530905a7",
                    "originalId" : "85021f46-b753-4793-aab4-f5bd530905a7",
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
                        "id" : "35b15b74-6459-405b-995d-ab3922ea92fe",
                        "originalId" : "35b15b74-6459-405b-995d-ab3922ea92fe",
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
                        "id" : "fc4f7199-e1e3-4598-ba65-f22fd69d60f5",
                        "originalId" : "fc4f7199-e1e3-4598-ba65-f22fd69d60f5",
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
                        "bindingField" : "materialId_MaterialId_MaterialName",
                        "bindingPath" : "materialId.materialId_MaterialName",
                        "type" : {
                          "$type" : "StringType",
                          "displayName" : "字符串",
                          "length" : 36,
                          "name" : "String"
                        },
                        "path" : "MaterialId.MaterialId_MaterialName",
                        "id" : "0d109a4f-58f9-4630-b15c-a79740fbefaa",
                        "originalId" : "0d109a4f-58f9-4630-b15c-a79740fbefaa",
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
                        "bindingField" : "materialId_MaterialId_MaterialCode",
                        "bindingPath" : "materialId.materialId_MaterialCode",
                        "type" : {
                          "$type" : "StringType",
                          "displayName" : "字符串",
                          "length" : 36,
                          "name" : "String"
                        },
                        "path" : "MaterialId.MaterialId_MaterialCode",
                        "id" : "08ca00c7-89bd-43ff-861b-c8d178a08256",
                        "originalId" : "08ca00c7-89bd-43ff-861b-c8d178a08256",
                        "label" : "materialId_MaterialCode",
                        "code" : "MaterialCode",
                        "name" : "物料编号"
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
                        "id" : "998dde09-26da-44c4-a940-ffafbecb9aa8",
                        "originalId" : "998dde09-26da-44c4-a940-ffafbecb9aa8",
                        "label" : "materialId_EvePrice",
                        "code" : "EvePrice",
                        "name" : "市场价格"
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
                        "id" : "e6f48613-38a7-48bf-9355-ba5a0bb9fbff",
                        "originalId" : "e6f48613-38a7-48bf-9355-ba5a0bb9fbff",
                        "label" : "materialId_MaterialCat_CatName",
                        "code" : "CatName(MaterialCat)",
                        "name" : "类别名称"
                      } ],
                      "primary" : "materialId",
                      "displayName" : "物料管理",
                      "name" : "Material35b1"
                    },
                    "path" : "MaterialId",
                    "id" : "91c3e6b7-ded9-4139-9325-79504e3dc582",
                    "originalId" : "91c3e6b7-ded9-4139-9325-79504e3dc582",
                    "label" : "materialId",
                    "code" : "MaterialId",
                    "name" : "物料名称"
                  }, {
                    "$type" : "SimpleField",
                    "editor" : {
                      "$type" : "NumericBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : false,
                    "multiLanguage" : false,
                    "bindingField" : "materialAmount",
                    "bindingPath" : "materialAmount",
                    "type" : {
                      "$type" : "NumericType",
                      "displayName" : "数字",
                      "precision" : 0,
                      "length" : 0,
                      "name" : "Number"
                    },
                    "path" : "MaterialAmount",
                    "id" : "143b71b6-3a12-48a1-8fe8-0faf32fc1ddd",
                    "originalId" : "143b71b6-3a12-48a1-8fe8-0faf32fc1ddd",
                    "label" : "materialAmount",
                    "code" : "MaterialAmount",
                    "name" : "物料数量"
                  }, {
                    "$type" : "ComplexField",
                    "bindingField" : "supplier",
                    "bindingPath" : "supplier",
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
                        "bindingField" : "supplier",
                        "bindingPath" : "supplier.supplier",
                        "type" : {
                          "$type" : "StringType",
                          "displayName" : "字符串",
                          "length" : 36,
                          "name" : "String"
                        },
                        "path" : "Supplier.Supplier",
                        "id" : "236853a3-36b9-431b-b7ca-93fb833329d9",
                        "originalId" : "236853a3-36b9-431b-b7ca-93fb833329d9",
                        "label" : "supplier",
                        "code" : "Supplier",
                        "name" : "供应商"
                      }, {
                        "$type" : "SimpleField",
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "bindingField" : "supplier_Supplier_ID",
                        "bindingPath" : "supplier.supplier_ID",
                        "type" : {
                          "$type" : "StringType",
                          "displayName" : "字符串",
                          "length" : 36,
                          "name" : "String"
                        },
                        "path" : "Supplier.Supplier_ID",
                        "id" : "8ed575e3-2850-414f-b392-c3cfc8ac3d0a",
                        "originalId" : "8ed575e3-2850-414f-b392-c3cfc8ac3d0a",
                        "label" : "supplier_ID",
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
                        "bindingField" : "supplier_Supplier_SupplierName",
                        "bindingPath" : "supplier.supplier_SupplierName",
                        "type" : {
                          "$type" : "StringType",
                          "displayName" : "字符串",
                          "length" : 36,
                          "name" : "String"
                        },
                        "path" : "Supplier.Supplier_SupplierName",
                        "id" : "a4a0e5d0-7131-45bc-b47f-28cbf2191458",
                        "originalId" : "a4a0e5d0-7131-45bc-b47f-28cbf2191458",
                        "label" : "supplier_SupplierName",
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
                        "bindingField" : "supplier_Supplier_SupplierCode",
                        "bindingPath" : "supplier.supplier_SupplierCode",
                        "type" : {
                          "$type" : "StringType",
                          "displayName" : "字符串",
                          "length" : 36,
                          "name" : "String"
                        },
                        "path" : "Supplier.Supplier_SupplierCode",
                        "id" : "1d93ad3d-b5bb-4067-b4a2-68bf30c4ae0f",
                        "originalId" : "1d93ad3d-b5bb-4067-b4a2-68bf30c4ae0f",
                        "label" : "supplier_SupplierCode",
                        "code" : "SupplierCode",
                        "name" : "供应商编号"
                      }, {
                        "$type" : "SimpleField",
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "bindingField" : "supplier_Supplier_ContactsEmail",
                        "bindingPath" : "supplier.supplier_ContactsEmail",
                        "type" : {
                          "$type" : "StringType",
                          "displayName" : "字符串",
                          "length" : 100,
                          "name" : "String"
                        },
                        "path" : "Supplier.Supplier_ContactsEmail",
                        "id" : "9f031afb-4874-43a0-8886-c3b91cd990d3",
                        "originalId" : "9f031afb-4874-43a0-8886-c3b91cd990d3",
                        "label" : "supplier_ContactsEmail",
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
                        "bindingField" : "supplier_Supplier_ContactsAddress",
                        "bindingPath" : "supplier.supplier_ContactsAddress",
                        "type" : {
                          "$type" : "StringType",
                          "displayName" : "字符串",
                          "length" : 100,
                          "name" : "String"
                        },
                        "path" : "Supplier.Supplier_ContactsAddress",
                        "id" : "27ddf90a-1e18-4518-a8fc-2d22df35fd25",
                        "originalId" : "27ddf90a-1e18-4518-a8fc-2d22df35fd25",
                        "label" : "supplier_ContactsAddress",
                        "code" : "ContactsAddress",
                        "name" : "办公地址"
                      } ],
                      "primary" : "supplier",
                      "displayName" : "供应商管理",
                      "name" : "SupplierMa2368"
                    },
                    "path" : "Supplier",
                    "id" : "8af416c0-a295-49a6-b548-2d3c75ebcc29",
                    "originalId" : "8af416c0-a295-49a6-b548-2d3c75ebcc29",
                    "label" : "supplier",
                    "code" : "Supplier",
                    "name" : "供应商"
                  } ],
                  "primary" : "id",
                  "displayName" : "物料需求计划明细",
                  "name" : "PlanDetails"
                },
                "id" : "1a4832df-6f13-4203-93e4-8bc5e5846a68",
                "label" : "planDetailss",
                "code" : "PlanDetails",
                "name" : "物料需求计划明细"
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
                "id" : "604b5269-b22c-4a3f-9513-614a34fdc255",
                "originalId" : "604b5269-b22c-4a3f-9513-614a34fdc255",
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
                "id" : "a9e20bcb-8538-4fa7-b596-366a047f348e",
                "originalId" : "a9e20bcb-8538-4fa7-b596-366a047f348e",
                "label" : "version",
                "code" : "Version",
                "name" : "版本"
              }, {
                "$type" : "ComplexField",
                "bindingField" : "billStatus",
                "bindingPath" : "billStatus",
                "type" : {
                  "$type" : "ObjectType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "editor" : {
                      "$type" : "EnumField"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : false,
                    "multiLanguage" : false,
                    "bindingField" : "billStatus_BillState",
                    "bindingPath" : "billStatus.billState",
                    "type" : {
                      "$type" : "EnumType",
                      "displayName" : "枚举",
                      "valueType" : {
                        "$type" : "StringType",
                        "displayName" : "字符串",
                        "length" : 36,
                        "name" : "String"
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
                      } ],
                      "name" : "Enum"
                    },
                    "path" : "BillStatus.BillState",
                    "id" : "6ca5cc17-0101-468f-ae3f-40c76c0f06b0",
                    "originalId" : "a0b19650-0101-468f-ae3f-40c76c0f06b0",
                    "label" : "billState",
                    "code" : "BillState",
                    "name" : "状态"
                  } ],
                  "name" : "BillState6ca5",
                  "displayName" : "状态"
                },
                "path" : "BillStatus",
                "id" : "6ca5cc17-92f2-40b0-bc59-546c163274f3",
                "originalId" : "6ca5cc17-92f2-40b0-bc59-546c163274f3",
                "label" : "billStatus",
                "code" : "BillStatus",
                "name" : "状态"
              }, {
                "$type" : "ComplexField",
                "bindingField" : "processInstance",
                "bindingPath" : "processInstance",
                "type" : {
                  "$type" : "ObjectType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : false,
                    "multiLanguage" : false,
                    "bindingField" : "processInstance_ProcessInstance",
                    "bindingPath" : "processInstance.processInstance",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "path" : "ProcessInstance.ProcessInstance",
                    "id" : "c868828f-ad8f-4da3-a430-c8a7f2162135",
                    "originalId" : "2e1beb7d-ad8f-4da3-a430-c8a7f2162135",
                    "label" : "processInstance",
                    "code" : "ProcessInstance",
                    "name" : "流程实例"
                  } ],
                  "name" : "ProcessInstanceC868",
                  "displayName" : "流程实例"
                },
                "path" : "ProcessInstance",
                "id" : "c868828f-acec-4b69-b21f-546590e87171",
                "originalId" : "c868828f-acec-4b69-b21f-546590e87171",
                "label" : "processInstance",
                "code" : "ProcessInstance",
                "name" : "流程实例"
              }, {
                "$type" : "ComplexField",
                "bindingField" : "applicant",
                "bindingPath" : "applicant",
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
                    "bindingField" : "applicant",
                    "bindingPath" : "applicant.applicant",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "path" : "Applicant.Applicant",
                    "id" : "a50f04eb-fc31-457c-8c85-0c5ab0cae592",
                    "originalId" : "a50f04eb-fc31-457c-8c85-0c5ab0cae592",
                    "label" : "applicant",
                    "code" : "Applicant",
                    "name" : "制单人"
                  }, {
                    "$type" : "SimpleField",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : false,
                    "multiLanguage" : false,
                    "bindingField" : "applicant_Applicant_ID",
                    "bindingPath" : "applicant.applicant_ID",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "path" : "Applicant.Applicant_ID",
                    "id" : "09d03140-fc6d-4356-8c7b-406278a038d9",
                    "originalId" : "09d03140-fc6d-4356-8c7b-406278a038d9",
                    "label" : "applicant_ID",
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
                    "bindingField" : "applicant_Applicant_Name",
                    "bindingPath" : "applicant.applicant_Name",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "path" : "Applicant.Applicant_Name",
                    "id" : "d4373c28-0278-43c5-8949-b1d6016f4742",
                    "originalId" : "d4373c28-0278-43c5-8949-b1d6016f4742",
                    "label" : "applicant_Name",
                    "code" : "Name",
                    "name" : "名称"
                  } ],
                  "primary" : "applicant",
                  "displayName" : "用户",
                  "name" : "GspUserA50f"
                },
                "path" : "Applicant",
                "id" : "b5c26d8a-a72d-460e-bff9-ef9a888477e4",
                "originalId" : "b5c26d8a-a72d-460e-bff9-ef9a888477e4",
                "label" : "applicant",
                "code" : "Applicant",
                "name" : "制单人"
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
                "bindingField" : "deliveryDate",
                "bindingPath" : "deliveryDate",
                "type" : {
                  "$type" : "DateTimeType",
                  "displayName" : "日期时间",
                  "name" : "DateTime"
                },
                "path" : "DeliveryDate",
                "id" : "7be8a928-ed87-4a22-a753-aa0af81175af",
                "originalId" : "7be8a928-ed87-4a22-a753-aa0af81175af",
                "label" : "deliveryDate",
                "code" : "DeliveryDate",
                "name" : "交货日期"
              }, {
                "$type" : "ComplexField",
                "bindingField" : "purchaseDept",
                "bindingPath" : "purchaseDept",
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
                    "bindingField" : "purchaseDept",
                    "bindingPath" : "purchaseDept.purchaseDept",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "path" : "PurchaseDept.PurchaseDept",
                    "id" : "f9f7f6fd-68a4-430c-856a-adda5d47fd52",
                    "originalId" : "f9f7f6fd-68a4-430c-856a-adda5d47fd52",
                    "label" : "purchaseDept",
                    "code" : "PurchaseDept",
                    "name" : "采购部门"
                  }, {
                    "$type" : "SimpleField",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : false,
                    "multiLanguage" : false,
                    "bindingField" : "purchaseDept_PurchaseDept_ID",
                    "bindingPath" : "purchaseDept.purchaseDept_ID",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "path" : "PurchaseDept.PurchaseDept_ID",
                    "id" : "c8709e22-da73-4038-b606-902d6f5a32cb",
                    "originalId" : "c8709e22-da73-4038-b606-902d6f5a32cb",
                    "label" : "purchaseDept_ID",
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
                    "bindingField" : "purchaseDept_PurchaseDept_name",
                    "bindingPath" : "purchaseDept.purchaseDept_name",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 100,
                      "name" : "String"
                    },
                    "path" : "PurchaseDept.PurchaseDept_name",
                    "id" : "8d6e8922-8dff-4beb-90a4-08460190548e",
                    "originalId" : "8d6e8922-8dff-4beb-90a4-08460190548e",
                    "label" : "purchaseDept_name",
                    "code" : "name",
                    "name" : "名称"
                  } ],
                  "primary" : "purchaseDept",
                  "displayName" : "系统组织",
                  "name" : "SysOrgF9F7"
                },
                "path" : "PurchaseDept",
                "id" : "ba27bf3c-4b96-4ef5-9693-f2dd680de3a2",
                "originalId" : "ba27bf3c-4b96-4ef5-9693-f2dd680de3a2",
                "label" : "purchaseDept",
                "code" : "PurchaseDept",
                "name" : "采购部门"
              }, {
                "$type" : "SimpleField",
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "multiLanguage" : false,
                "bindingField" : "planCode",
                "bindingPath" : "planCode",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 100,
                  "name" : "String"
                },
                "path" : "PlanCode",
                "id" : "7b926633-69ff-4270-b092-8b0ba390f0ed",
                "originalId" : "7b926633-69ff-4270-b092-8b0ba390f0ed",
                "label" : "planCode",
                "code" : "PlanCode",
                "name" : "计划编号"
              }, {
                "$type" : "SimpleField",
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "multiLanguage" : false,
                "bindingField" : "planName",
                "bindingPath" : "planName",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 100,
                  "name" : "String"
                },
                "path" : "PlanName",
                "id" : "fbe5d590-7796-4a4a-963b-eae197d00dc2",
                "originalId" : "fbe5d590-7796-4a4a-963b-eae197d00dc2",
                "label" : "planName",
                "code" : "PlanName",
                "name" : "计划名称"
              }, {
                "$type" : "SimpleField",
                "editor" : {
                  "$type" : "CheckBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "multiLanguage" : false,
                "bindingField" : "isPurchaseOrder",
                "bindingPath" : "isPurchaseOrder",
                "type" : {
                  "$type" : "BooleanType",
                  "displayName" : "布尔",
                  "name" : "Boolean"
                },
                "path" : "IsPurchaseOrder",
                "id" : "51920336-e75d-4b83-b9e6-3994e94c2877",
                "originalId" : "51920336-e75d-4b83-b9e6-3994e94c2877",
                "label" : "isPurchaseOrder",
                "code" : "IsPurchaseOrder",
                "name" : "是否已生成采购订单"
              }, {
                "$type" : "SimpleField",
                "editor" : {
                  "$type" : "NumericBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "multiLanguage" : false,
                "bindingField" : "totalPrice",
                "bindingPath" : "totalPrice",
                "type" : {
                  "$type" : "NumericType",
                  "displayName" : "数字",
                  "precision" : 2,
                  "length" : 18,
                  "name" : "Number"
                },
                "path" : "TotalPrice",
                "id" : "1c1f8bdb-9260-4fd9-8886-08bbb4c77134",
                "originalId" : "1c1f8bdb-9260-4fd9-8886-08bbb4c77134",
                "label" : "totalPrice",
                "code" : "TotalPrice",
                "name" : "物料总价"
              }, {
                "$type" : "ComplexField",
                "bindingField" : "purchaser",
                "bindingPath" : "purchaser",
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
                    "bindingField" : "purchaser",
                    "bindingPath" : "purchaser.purchaser",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "path" : "Purchaser.Purchaser",
                    "id" : "f039a9da-8150-4935-8af3-836b7aca3bef",
                    "originalId" : "f039a9da-8150-4935-8af3-836b7aca3bef",
                    "label" : "purchaser",
                    "code" : "Purchaser",
                    "name" : "采购员"
                  }, {
                    "$type" : "SimpleField",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : false,
                    "multiLanguage" : false,
                    "bindingField" : "purchaser_Purchaser_ID",
                    "bindingPath" : "purchaser.purchaser_ID",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "path" : "Purchaser.Purchaser_ID",
                    "id" : "85db8e69-2cda-4a02-868a-bc6c184559ba",
                    "originalId" : "85db8e69-2cda-4a02-868a-bc6c184559ba",
                    "label" : "purchaser_ID",
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
                    "bindingField" : "purchaser_Purchaser_Name",
                    "bindingPath" : "purchaser.purchaser_Name",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "path" : "Purchaser.Purchaser_Name",
                    "id" : "55f1e399-b3be-4e6b-a4b3-f396138a18ae",
                    "originalId" : "55f1e399-b3be-4e6b-a4b3-f396138a18ae",
                    "label" : "purchaser_Name",
                    "code" : "Name",
                    "name" : "名称"
                  } ],
                  "primary" : "purchaser",
                  "displayName" : "用户",
                  "name" : "GspUserF039"
                },
                "path" : "Purchaser",
                "id" : "619f7dee-28ab-469b-8172-a234d446fc2c",
                "originalId" : "619f7dee-28ab-469b-8172-a234d446fc2c",
                "label" : "purchaser",
                "code" : "Purchaser",
                "name" : "采购员"
              } ],
              "primary" : "id",
              "displayName" : "物料需求计划",
              "name" : "MaterialPlan"
            },
            "id" : "33e9833b-b6a4-4bf8-ba08-37cc56272d2f",
            "label" : "materialPlans",
            "code" : "MaterialPlan",
            "name" : "物料需求计划"
          } ],
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "sourceType" : "vo",
          "id" : "98708d9f-8b7c-4539-b546-8b5f2a886381",
          "variables" : [ ],
          "sourceUri" : "api/scm/cm/v1.0/MaterialPlanCard_frm",
          "code" : "MaterialPlanCard_frm",
          "name" : "物料需求计划详情_frm",
          "eapiId" : "dd20afe9-2983-4dc5-91e1-9d8ea5e42520",
          "eapiCode" : "MaterialPlanCard_frm",
          "eapiName" : "物料需求计划详情_frm",
          "eapiNameSpace" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Front",
          "voPath" : "SCM/CM/MaterialPlan/bo-materialplan-front/metadata/components",
          "voNameSpace" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Front"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "MaterialPlanCard_state_machine",
          "name" : "物料需求计划详情_frm",
          "uri" : "a51384c1-4c24-41eb-99d1-e440cd274da0",
          "code" : "MaterialPlanCard_frm",
          "nameSpace" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "物料需求计划",
          "fields" : [ ],
          "stateMachine" : "MaterialPlanCard_state_machine",
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
            "id" : "70ec6403-d11e-42a5-92b3-ce8c84f67947",
            "code" : "dataImport1",
            "name" : "数据导入1",
            "params" : [ {
              "name" : "type",
              "shownName" : "导入类型",
              "value" : "1",
              "defaultValue" : null
            }, {
              "name" : "ruleID",
              "shownName" : "规则Id",
              "value" : "71fea8ad-a817-4ea8-bf36-c5d1e1ab7b8e",
              "defaultValue" : null
            }, {
              "name" : "option",
              "shownName" : "参数配置",
              "value" : "{\"templatefilename\":\"物料需求计划明细导入模板shizhiyuan\",\"customImportTitle\":\"物料需求计划明细导入shizhiyuan\",\"importdbRefresh\":true}",
              "defaultValue" : null
            } ],
            "handlerName" : "DataImport",
            "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "4cc18d88-b8cd-485a-bcc3-75d5ebc6f708",
            "code" : "dataExport1",
            "name" : "数据导出1",
            "params" : [ {
              "name" : "type",
              "shownName" : "导出类型",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "ruleID",
              "shownName" : "规则Id",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "option",
              "shownName" : "参数配置",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "DataExport",
            "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "1d4fc8b3-58a8-46d3-953c-8ee595a1012f",
            "code" : "listDataExport1",
            "name" : "列表导出命令1",
            "params" : [ {
              "name" : "ruleID",
              "shownName" : "规则ID",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "option",
              "shownName" : "参数配置",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "ListDataExport",
            "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "ef1fe7f9-8275-4ac4-bba6-2e7e902c101e",
            "code" : "rootviewmodelgetMinDate1",
            "name" : "getMinDate1",
            "params" : [ ],
            "handlerName" : "getMinDate",
            "cmpId" : "25cfda68-6686-40d1-888e-ef9f568c7609",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "773e725a-5708-4595-8ba6-d64935fb4fd5",
            "code" : "rootviewmodelDataExport1",
            "name" : "数据导出1",
            "params" : [ {
              "name" : "type",
              "shownName" : "导出类型",
              "value" : "3",
              "defaultValue" : null
            }, {
              "name" : "ruleID",
              "shownName" : "规则Id",
              "value" : "5ef04e37-ce4e-4e7a-94fb-cd4d80a173e8",
              "defaultValue" : null
            }, {
              "name" : "option",
              "shownName" : "参数配置",
              "value" : "{\"selectFilterGridComponent\":\"data-grid-component\"}",
              "defaultValue" : null
            } ],
            "handlerName" : "DataExport",
            "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "38e307e2-5f42-43bd-9205-cc5421b8a60d",
            "code" : "rootviewmodelDataExport2",
            "name" : "数据导出2",
            "params" : [ {
              "name" : "type",
              "shownName" : "导出类型",
              "value" : "3",
              "defaultValue" : null
            }, {
              "name" : "ruleID",
              "shownName" : "规则Id",
              "value" : "5ef04e37-ce4e-4e7a-94fb-cd4d80a173e8",
              "defaultValue" : null
            }, {
              "name" : "option",
              "shownName" : "参数配置",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "DataExport",
            "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "bf170d19-48ed-4e29-a37b-b14bd1c29661",
            "code" : "rootviewmodelDataImport1",
            "name" : "数据导入1",
            "params" : [ {
              "name" : "type",
              "shownName" : "导入类型",
              "value" : "1",
              "defaultValue" : null
            }, {
              "name" : "ruleID",
              "shownName" : "规则Id",
              "value" : "71fea8ad-a817-4ea8-bf36-c5d1e1ab7b8e",
              "defaultValue" : null
            }, {
              "name" : "option",
              "shownName" : "参数配置",
              "value" : "{\"templatefilename\":\"物料需求计划明细导入模板\",\"customImportTitle\":\"物料需求计划明细导入\",\"importdbRefresh\":true}",
              "defaultValue" : null
            } ],
            "handlerName" : "DataImport",
            "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          } ],
          "states" : [ {
            "id" : "6d7495e4-a899-4500-9db6-5b5bbfaadb0c",
            "code" : "mindate",
            "name" : "最小日期",
            "type" : "DateTime",
            "category" : "locale"
          } ],
          "bindTo" : "/",
          "enableUnifiedSession" : false
        }, {
          "id" : "basic-form-viewmodel",
          "code" : "basic-form-viewmodel",
          "name" : "物料需求计划",
          "fields" : [ {
            "type" : "Form",
            "id" : "d4373c28-0278-43c5-8949-b1d6016f4742",
            "fieldName" : "applicant_Applicant_Name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "MaterialPlan.applicant_Applicant_Name",
                  "displayName" : "系统用户帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "valueField" : "id",
                "textField" : "name",
                "displayType" : "List",
                "mapFields" : "{'id':'applicant.applicant_ID,applicant.applicant','name':'applicant.applicant_Name'}",
                "helpId" : "915a0b20-975a-4df1-8cfd-888c3dda0009"
              },
              "name" : "制单人",
              "require" : false,
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "7be8a928-ed87-4a22-a753-aa0af81175af",
            "fieldName" : "deliveryDate",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "minValue" : {
                  "type" : "Variable",
                  "path" : "root-component.mindate",
                  "field" : "6d7495e4-a899-4500-9db6-5b5bbfaadb0c",
                  "fullPath" : "mindate"
                }
              }
            }
          }, {
            "type" : "Form",
            "id" : "8d6e8922-8dff-4beb-90a4-08460190548e",
            "fieldName" : "purchaseDept_PurchaseDept_name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "MaterialPlan.purchaseDept_PurchaseDept_name",
                  "displayName" : "系统组织帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "valueField" : "id",
                "textField" : "name",
                "displayType" : "TreeList",
                "mapFields" : "{'id':'purchaseDept.purchaseDept,purchaseDept.purchaseDept_ID','name':'purchaseDept.purchaseDept_name'}",
                "helpId" : "b524a702-7323-4d46-998e-5ba0c6abcd49"
              },
              "name" : "采购部门",
              "require" : true,
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "7b926633-69ff-4270-b092-8b0ba390f0ed",
            "fieldName" : "planCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "require" : false,
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "fbe5d590-7796-4a4a-963b-eae197d00dc2",
            "fieldName" : "planName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "51920336-e75d-4b83-b9e6-3994e94c2877",
            "fieldName" : "isPurchaseOrder",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change",
            "fieldSchema" : {
              "editor" : {
                "$type" : "SwitchField"
              },
              "name" : "是否已生成采购订单",
              "require" : false,
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "1c1f8bdb-9260-4fd9-8886-08bbb4c77134",
            "fieldName" : "totalPrice",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "55f1e399-b3be-4e6b-a4b3-f396138a18ae",
            "fieldName" : "purchaser_Purchaser_Name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "MaterialPlan.purchaser_Purchaser_Name",
                  "displayName" : "系统用户帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "valueField" : "id",
                "textField" : "name",
                "displayType" : "List",
                "mapFields" : "{'id':'purchaser.purchaser,purchaser.purchaser_ID','name':'purchaser.purchaser_Name'}",
                "helpId" : "1df3b2ac-b474-488a-b670-580ff14e33d9"
              },
              "name" : "采购员",
              "require" : true,
              "readonly" : false
            }
          } ],
          "serviceRefs" : [ ],
          "commands" : [ ],
          "states" : [ ],
          "bindTo" : "/",
          "parent" : "root-viewmodel",
          "enableValidation" : true
        }, {
          "id" : "plandetails-component-viewmodel",
          "code" : "plandetails-component-viewmodel",
          "name" : "物料需求计划明细",
          "fields" : [ {
            "type" : "Form",
            "id" : "0d109a4f-58f9-4630-b15c-a79740fbefaa",
            "fieldName" : "materialId_MaterialId_MaterialName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "08ca00c7-89bd-43ff-861b-c8d178a08256",
            "fieldName" : "materialId_MaterialId_MaterialCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "PlanDetails.materialId_MaterialId_MaterialCode",
                  "displayName" : "物料管理帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "valueField" : "id",
                "textField" : "materialCode",
                "displayType" : "List",
                "mapFields" : "{'id':'materialId.materialId,materialId.materialId_ID','materialCode':'materialId.materialId_MaterialCode','materialName':'materialId.materialId_MaterialName','materialCat.materialCat_CatName':'materialId.materialId_MaterialCat_CatName','evePrice':'materialId.materialId_EvePrice'}",
                "helpId" : "bb73c2e8-5e06-4a7f-9c2c-4d128ddcd54a"
              },
              "name" : "物料编号",
              "require" : true,
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "998dde09-26da-44c4-a940-ffafbecb9aa8",
            "fieldName" : "materialId_MaterialId_EvePrice",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "e6f48613-38a7-48bf-9355-ba5a0bb9fbff",
            "fieldName" : "materialId_MaterialId_MaterialCat_CatName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "name" : "物料类别",
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "143b71b6-3a12-48a1-8fe8-0faf32fc1ddd",
            "fieldName" : "materialAmount",
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
            "id" : "a4a0e5d0-7131-45bc-b47f-28cbf2191458",
            "fieldName" : "supplier_Supplier_SupplierName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "1d93ad3d-b5bb-4067-b4a2-68bf30c4ae0f",
            "fieldName" : "supplier_Supplier_SupplierCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "PlanDetails.supplier_Supplier_SupplierCode",
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
              "require" : true,
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "9f031afb-4874-43a0-8886-c3b91cd990d3",
            "fieldName" : "supplier_Supplier_ContactsEmail",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "27ddf90a-1e18-4518-a8fc-2d22df35fd25",
            "fieldName" : "supplier_Supplier_ContactsAddress",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          } ],
          "states" : [ ],
          "bindTo" : "/planDetailss",
          "parent" : "root-viewmodel",
          "commands" : [ {
            "id" : "70be136c-f8ad-4ee8-b7f8-44d938939609",
            "code" : "plandetailsAddItem1",
            "name" : "增加一条子表数据",
            "params" : [ ],
            "handlerName" : "AddItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "ec2afdb0-5f2c-45e7-b85c-6580c6303d09",
            "code" : "plandetailsRemoveItem1",
            "name" : "删除一条子表数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除子表数据的标识",
              "value" : "{DATA~/#{plandetails-component}/planDetailss/id}"
            } ],
            "handlerName" : "RemoveItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "d464fdd5-2487-4261-a024-b841c4ff3e4c",
            "code" : "rootviewmodelInsert1",
            "name" : "插入一条子表数据1",
            "params" : [ {
              "name" : "position",
              "shownName" : "数据插入位置",
              "value" : "1"
            } ],
            "handlerName" : "Insert",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "isInvalid" : false,
            "isNewGenerated" : true,
            "targetComponent" : "plandetails-component"
          }, {
            "id" : "e3cd40d8-5a11-48b4-9a46-48aa2d8f9873",
            "code" : "rootviewmodelAddItem1",
            "name" : "增加一条子表数据1",
            "params" : [ ],
            "handlerName" : "AddItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "isInvalid" : false,
            "isNewGenerated" : true,
            "targetComponent" : "plandetails-component"
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
                    "html" : "<span class=\"f-title-icon f-text-orna-bill\"><i class=\"f-icon f-icon-page-title-record\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'物料需求计划详情'}}</h4><div class=\"f-title-pagination\"><span class=\"f-icon f-icon-arrow-w\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem1()\"></span><span class=\"f-icon f-icon-arrow-e\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem2()\"></span></div>"
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
                      "selected" : "plandetails-tab-page",
                      "size" : null,
                      "position" : "top",
                      "contents" : [ {
                        "id" : "plandetails-tab-page",
                        "type" : "TabPage",
                        "controlSource" : "Farris",
                        "title" : "物料需求计划明细",
                        "appearance" : null,
                        "size" : null,
                        "removeable" : false,
                        "headerTemplate" : null,
                        "contents" : [ {
                          "id" : "plandetails-component-ref",
                          "type" : "ComponentRef",
                          "component" : "plandetails-component",
                          "visible" : true
                        } ],
                        "toolbar" : {
                          "id" : "plandetails-tab-toolbar",
                          "type" : "TabToolbar",
                          "position" : "inHead",
                          "contents" : [ {
                            "id" : "plandetailsAddButton",
                            "type" : "TabToolbarItem",
                            "title" : "新增",
                            "disable" : "!viewModel.stateMachine['canAddDetail']",
                            "appearance" : {
                              "class" : "btn btn-secondary f-btn-ml"
                            },
                            "visible" : true,
                            "click" : "root-viewmodel.plandetails-component-viewmodel.rootviewmodelAddItem1"
                          }, {
                            "id" : "plandetailsRemoveButton",
                            "type" : "TabToolbarItem",
                            "title" : "删除",
                            "disable" : "!viewModel.stateMachine['canRemoveDetail']",
                            "appearance" : {
                              "class" : "btn btn-secondary f-btn-ml"
                            },
                            "visible" : true,
                            "click" : "root-viewmodel.plandetails-component-viewmodel.plandetailsRemoveItem1"
                          }, {
                            "id" : "tabToolbarItem-fy36",
                            "type" : "TabToolbarItem",
                            "title" : "导入",
                            "disable" : false,
                            "appearance" : {
                              "class" : "btn btn-secondary f-btn-ml"
                            },
                            "visible" : true,
                            "click" : "rootviewmodelDataImport1"
                          }, {
                            "id" : "tabToolbarItem-56w5",
                            "type" : "TabToolbarItem",
                            "title" : "勾选导出",
                            "disable" : false,
                            "appearance" : {
                              "class" : "btn btn-secondary f-btn-ml"
                            },
                            "visible" : true,
                            "click" : "rootviewmodelDataExport1"
                          }, {
                            "id" : "tabToolbarItem-caan",
                            "type" : "TabToolbarItem",
                            "title" : "全部导出",
                            "disable" : false,
                            "appearance" : {
                              "class" : "btn btn-secondary f-btn-ml"
                            },
                            "visible" : true,
                            "click" : "rootviewmodelDataExport2"
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
          "afterViewInit" : "rootviewmodelgetMinDate1"
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
                "id" : "applicant_Applicant_Name_d4373c28_6dic",
                "type" : "LookupEdit",
                "titleSourceType" : "static",
                "title" : "制单人",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "applicant_Applicant_Name",
                  "field" : "d4373c28-0278-43c5-8949-b1d6016f4742",
                  "fullPath" : "Applicant.Applicant_Name"
                },
                "readonly" : true,
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "dataSource" : {
                  "uri" : "MaterialPlan.applicant_Applicant_Name",
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
                "mapFields" : "{'id':'applicant.applicant_ID,applicant.applicant','name':'applicant.applicant_Name'}",
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
                "path" : "applicant.applicant_Name",
                "isRTControl" : false,
                "labelAutoOverflow" : false,
                "updateOn" : "blur",
                "helpId" : "915a0b20-975a-4df1-8cfd-888c3dda0009"
              }, {
                "id" : "deliveryDate_7be8a928_jelq",
                "type" : "DateBox",
                "titleSourceType" : "static",
                "title" : "交货日期",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "deliveryDate",
                  "field" : "7be8a928-ed87-4a22-a753-aa0af81175af",
                  "fullPath" : "DeliveryDate"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
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
                "minValue" : {
                  "type" : "Variable",
                  "path" : "root-component.mindate",
                  "field" : "6d7495e4-a899-4500-9db6-5b5bbfaadb0c",
                  "fullPath" : "mindate"
                },
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
                "path" : "deliveryDate",
                "localizationType" : "DateTime",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "autoHeight" : false,
                "maxHeight" : 500,
                "labelAutoOverflow" : false,
                "updateOn" : "blur"
              }, {
                "id" : "purchaseDept_PurchaseDept_name_8d6e8922_yvzr",
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
                  "field" : "8d6e8922-8dff-4beb-90a4-08460190548e",
                  "fullPath" : "PurchaseDept.PurchaseDept_name"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : true,
                "disable" : false,
                "placeHolder" : "",
                "dataSource" : {
                  "uri" : "MaterialPlan.purchaseDept_PurchaseDept_name",
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
                "mapFields" : "{'id':'purchaseDept.purchaseDept,purchaseDept.purchaseDept_ID','name':'purchaseDept.purchaseDept_name'}",
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
                "id" : "planCode_7b926633_5dke",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "计划编号",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "planCode",
                  "field" : "7b926633-69ff-4270-b092-8b0ba390f0ed",
                  "fullPath" : "PlanCode"
                },
                "readonly" : true,
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
                "path" : "planCode",
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
                "id" : "planName_fbe5d590_15n2",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "计划名称",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "planName",
                  "field" : "fbe5d590-7796-4a4a-963b-eae197d00dc2",
                  "fullPath" : "PlanName"
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
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "enableTips" : true,
                "path" : "planName",
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
                "id" : "isPurchaseOrder_51920336_9xj5",
                "type" : "SwitchField",
                "controlSource" : "Farris",
                "titleSourceType" : "static",
                "title" : "是否已生成采购订单",
                "checked" : false,
                "readonly" : true,
                "require" : false,
                "disable" : false,
                "binding" : {
                  "type" : "Form",
                  "path" : "isPurchaseOrder",
                  "field" : "51920336-e75d-4b83-b9e6-3994e94c2877",
                  "fullPath" : "IsPurchaseOrder"
                },
                "visible" : true,
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "square" : false,
                "checkedLabel" : "",
                "uncheckedLabel" : "",
                "holdPlace" : false,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "tabindex" : 0,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "path" : "isPurchaseOrder",
                "isRTControl" : false,
                "labelAutoOverflow" : false,
                "updateOn" : "change"
              }, {
                "id" : "totalPrice_1c1f8bdb_p30m",
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
                  "field" : "1c1f8bdb-9260-4fd9-8886-08bbb4c77134",
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
              }, {
                "id" : "purchaser_Purchaser_Name_55f1e399_hz5j",
                "type" : "LookupEdit",
                "titleSourceType" : "static",
                "title" : "采购员",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "purchaser_Purchaser_Name",
                  "field" : "55f1e399-b3be-4e6b-a4b3-f396138a18ae",
                  "fullPath" : "Purchaser.Purchaser_Name"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : true,
                "disable" : false,
                "placeHolder" : "",
                "dataSource" : {
                  "uri" : "MaterialPlan.purchaser_Purchaser_Name",
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
                "helpId" : "1df3b2ac-b474-488a-b670-580ff14e33d9"
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
          "id" : "plandetails-component",
          "type" : "Component",
          "viewModel" : "plandetails-component-viewmodel",
          "appearance" : {
            "class" : "f-struct-is-subgrid"
          },
          "contents" : [ {
            "id" : "plandetails-component-layout",
            "type" : "ContentContainer",
            "appearance" : {
              "class" : "f-grid-is-sub f-utils-flex-column"
            },
            "size" : null,
            "contents" : [ {
              "id" : "dataGrid_plandetails",
              "type" : "DataGrid",
              "controlSource" : "Farris",
              "dataSource" : "planDetailss",
              "fields" : [ {
                "id" : "materialId_MaterialId_MaterialCode_08ca00c7_ao7g",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "物料编号",
                "captionTemplate" : null,
                "dataField" : "materialId.materialId_MaterialCode",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "materialId_MaterialId_MaterialCode",
                  "field" : "08ca00c7-89bd-43ff-861b-c8d178a08256",
                  "fullPath" : "MaterialId.MaterialId_MaterialCode"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "materialId_MaterialId_MaterialCode_08ca00c7_bba6",
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
                    "field" : "08ca00c7-89bd-43ff-861b-c8d178a08256",
                    "fullPath" : "MaterialId.MaterialId_MaterialCode"
                  },
                  "require" : true,
                  "disable" : false,
                  "placeHolder" : "",
                  "dataSource" : {
                    "uri" : "PlanDetails.materialId_MaterialId_MaterialCode",
                    "displayName" : "物料管理帮助",
                    "idField" : "id",
                    "type" : "ViewObject"
                  },
                  "textField" : "materialCode",
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
                  "enableToSelect" : false,
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
                "id" : "materialId_MaterialId_MaterialName_0d109a4f_7r0m",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "物料名称",
                "captionTemplate" : null,
                "dataField" : "materialId.materialId_MaterialName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "materialId_MaterialId_MaterialName",
                  "field" : "0d109a4f-58f9-4630-b15c-a79740fbefaa",
                  "fullPath" : "MaterialId.MaterialId_MaterialName"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "materialId_MaterialId_MaterialName_0d109a4f_c6sl",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "materialId_MaterialId_MaterialName",
                    "field" : "0d109a4f-58f9-4630-b15c-a79740fbefaa"
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
                "id" : "materialId_MaterialId_EvePrice_998dde09_udfc",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "市场价格",
                "captionTemplate" : null,
                "dataField" : "materialId.materialId_EvePrice",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "materialId_MaterialId_EvePrice",
                  "field" : "998dde09-26da-44c4-a940-ffafbecb9aa8",
                  "fullPath" : "MaterialId.MaterialId_EvePrice"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "materialId_MaterialId_EvePrice_998dde09_znlr",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "materialId_MaterialId_EvePrice",
                    "field" : "998dde09-26da-44c4-a940-ffafbecb9aa8"
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
                  "decimal" : ".",
                  "prefix" : "￥",
                  "suffix" : ""
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
                "id" : "materialId_MaterialId_MaterialCat_CatName_e6f48613_344b",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "物料类别",
                "captionTemplate" : null,
                "dataField" : "materialId.materialId_MaterialCat_CatName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "materialId_MaterialId_MaterialCat_CatName",
                  "field" : "e6f48613-38a7-48bf-9355-ba5a0bb9fbff",
                  "fullPath" : "MaterialId.MaterialId_MaterialCat_CatName"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "materialId_MaterialId_MaterialCat_CatName_e6f48613_vwbv",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "materialId_MaterialId_MaterialCat_CatName",
                    "field" : "e6f48613-38a7-48bf-9355-ba5a0bb9fbff"
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
              }, {
                "id" : "materiaAmount_143b71b6_wiiv",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "物料数量",
                "captionTemplate" : null,
                "dataField" : "materialAmount",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "materialAmount",
                  "field" : "143b71b6-3a12-48a1-8fe8-0faf32fc1ddd",
                  "fullPath" : "MaterialAmount"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "materiaAmount_143b71b6_5utc",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "materialAmount",
                    "field" : "143b71b6-3a12-48a1-8fe8-0faf32fc1ddd",
                    "fullPath" : "MaterialAmount"
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
                  "showZero" : false,
                  "showButton" : true,
                  "path" : "materialAmount",
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
                  "type" : "sum",
                  "formatter" : {
                    "precision" : 0,
                    "thousand" : ",",
                    "prefix" : "",
                    "suffix" : "件",
                    "decimal" : ".",
                    "type" : "number"
                  },
                  "align" : "center",
                  "styler" : "(value, rowData, rowIndex) => {\r\n    return {\r\n        style: {\r\n            color: 'red',\r\n            fontWeight: 800\r\n        }\r\n    };\r\n}"
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
                "captionTipStyler" : "",
                "path" : "materialAmount"
              }, {
                "id" : "supplier_Supplier_SupplierCode_1d93ad3d_alr2",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "供应商编号",
                "captionTemplate" : null,
                "dataField" : "supplier.supplier_SupplierCode",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "supplier_Supplier_SupplierCode",
                  "field" : "1d93ad3d-b5bb-4067-b4a2-68bf30c4ae0f",
                  "fullPath" : "Supplier.Supplier_SupplierCode"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "supplier_Supplier_SupplierCode_1d93ad3d_6lav",
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
                    "field" : "1d93ad3d-b5bb-4067-b4a2-68bf30c4ae0f",
                    "fullPath" : "Supplier.Supplier_SupplierCode"
                  },
                  "require" : true,
                  "disable" : false,
                  "placeHolder" : "",
                  "dataSource" : {
                    "uri" : "PlanDetails.supplier_Supplier_SupplierCode",
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
                "id" : "supplier_Supplier_SupplierName_a4a0e5d0_ju44",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "供应商名称",
                "captionTemplate" : null,
                "dataField" : "supplier.supplier_SupplierName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "supplier_Supplier_SupplierName",
                  "field" : "a4a0e5d0-7131-45bc-b47f-28cbf2191458",
                  "fullPath" : "Supplier.Supplier_SupplierName"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "supplier_Supplier_SupplierName_a4a0e5d0_2by7",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "supplier_Supplier_SupplierName",
                    "field" : "a4a0e5d0-7131-45bc-b47f-28cbf2191458"
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
                "id" : "supplier_Supplier_ContactsEmail_9f031afb_8tfe",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "联系人邮箱",
                "captionTemplate" : null,
                "dataField" : "supplier.supplier_ContactsEmail",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "supplier_Supplier_ContactsEmail",
                  "field" : "9f031afb-4874-43a0-8886-c3b91cd990d3",
                  "fullPath" : "Supplier.Supplier_ContactsEmail"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "supplier_Supplier_ContactsEmail_9f031afb_4z9p",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "supplier_Supplier_ContactsEmail",
                    "field" : "9f031afb-4874-43a0-8886-c3b91cd990d3"
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
                  "maxHeight" : 500
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
                "id" : "supplier_Supplier_ContactsAddress_27ddf90a_w9yq",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "办公地址",
                "captionTemplate" : null,
                "dataField" : "supplier.supplier_ContactsAddress",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "supplier_Supplier_ContactsAddress",
                  "field" : "27ddf90a-1e18-4518-a8fc-2d22df35fd25",
                  "fullPath" : "Supplier.Supplier_ContactsAddress"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "supplier_Supplier_ContactsAddress_27ddf90a_zycw",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "supplier_Supplier_ContactsAddress",
                    "field" : "27ddf90a-1e18-4518-a8fc-2d22df35fd25"
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
                  "maxHeight" : 500
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
              "autoFitColumns" : true,
              "multiSort" : false,
              "showBorder" : false,
              "striped" : true,
              "onSelectionChange" : "",
              "styler" : "",
              "showLineNumber" : false,
              "appendRow" : "plandetailsAddItem1",
              "pageChange" : null,
              "disableRow" : null,
              "beforeSelect" : null,
              "beforeUnSelect" : null,
              "beforeCheck" : null,
              "beforeUnCheck" : null,
              "dblClickRow" : null,
              "virtualized" : false,
              "showFooter" : true,
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
            "host" : "70be136c-f8ad-4ee8-b7f8-44d938939609",
            "handler" : "AddItem"
          }, {
            "host" : "ec2afdb0-5f2c-45e7-b85c-6580c6303d09",
            "handler" : "RemoveItem"
          }, {
            "host" : "d464fdd5-2487-4261-a024-b841c4ff3e4c",
            "handler" : "Insert"
          }, {
            "host" : "b6ffbeba-aad4-47b0-b557-9709fdc12e13",
            "handler" : "AddItem"
          }, {
            "host" : "d4d453c5-d84e-41a9-a821-0e191cdcc3c2",
            "handler" : "LoadAndAdd"
          }, {
            "host" : "e3cd40d8-5a11-48b4-9a46-48aa2d8f9873",
            "handler" : "AddItem"
          } ],
          "code" : "CardController",
          "nameSpace" : "Inspur.GS.Gsp.Web.WebCmp"
        }, {
          "id" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
          "path" : null,
          "name" : "DataImportExportCommand.webcmd",
          "refedHandlers" : [ {
            "host" : "70ec6403-d11e-42a5-92b3-ce8c84f67947",
            "handler" : "DataImport"
          }, {
            "host" : "4cc18d88-b8cd-485a-bcc3-75d5ebc6f708",
            "handler" : "DataExport"
          }, {
            "host" : "1d4fc8b3-58a8-46d3-953c-8ee595a1012f",
            "handler" : "ListDataExport"
          }, {
            "host" : "1ccf96f9-69b5-4256-a99b-6e10bbfb21ff",
            "handler" : "DataExport"
          }, {
            "host" : "9bfbd085-dff1-4644-83ab-795d532c8926",
            "handler" : "DataExport"
          }, {
            "host" : "773e725a-5708-4595-8ba6-d64935fb4fd5",
            "handler" : "DataExport"
          }, {
            "host" : "38e307e2-5f42-43bd-9205-cc5421b8a60d",
            "handler" : "DataExport"
          }, {
            "host" : "bf170d19-48ed-4e29-a37b-b14bd1c29661",
            "handler" : "DataImport"
          } ],
          "code" : "DataImportExportCommand",
          "nameSpace" : "Inspur.GS.Gsp.Common.DataIE"
        }, {
          "id" : "25cfda68-6686-40d1-888e-ef9f568c7609",
          "path" : "SCM/CM/MaterialPlan/bo-materialplan-front/metadata/components",
          "name" : "MaterialPlanCard_frm_MinDate.webcmd",
          "refedHandlers" : [ {
            "host" : "ef1fe7f9-8275-4ac4-bba6-2e7e902c101e",
            "handler" : "getMinDate"
          } ],
          "code" : "MaterialPlanCard_frm_MinDate",
          "nameSpace" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Front"
        }, {
          "id" : "dd09fd2d-0faa-4b2d-abd9-9ccbf5001d4f",
          "path" : "SCM/CM/MaterialPlan/bo-materialplan-front/metadata/components",
          "name" : "MaterialPlanCard_frm_Controller.webcmd",
          "refedHandlers" : [ ],
          "code" : "MaterialPlanCard_frm_Controller",
          "nameSpace" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Front"
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-materialplan-front",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "expressions" : [ {
          "fieldId" : "1d93ad3d-b5bb-4067-b4a2-68bf30c4ae0f",
          "expression" : [ {
            "id" : "1d93ad3d-b5bb-4067-b4a2-68bf30c4ae0f_dependency",
            "type" : "dependency",
            "value" : "{\"expr\":\"MaterialPlan.planDetailss.materialId.materialId_MaterialCode ==''\",\"sexpr\":\"\"}"
          } ]
        }, {
          "fieldId" : "1c1f8bdb-9260-4fd9-8886-08bbb4c77134",
          "expression" : [ {
            "id" : "1c1f8bdb-9260-4fd9-8886-08bbb4c77134_compute",
            "type" : "compute",
            "value" : "{\"expr\":\"return DefaultFunction.round(DefaultFunction.MultiplyChildNumber(\\\"MaterialPlan.planDetailss\\\",\\\"materiaAmount\\\",\\\"materialId.materialId_EvePrice\\\"),2)\\r\\n\",\"sexpr\":\"\"}"
          } ]
        } ],
        "metadataId" : "13b2d168-4d6a-4ea3-b811-e3e56498f101",
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
            "id" : "plandetailsAddButton",
            "viewModelId" : "plandetails-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "plandetails-component",
                "viewModelId" : "plandetails-component-viewmodel"
              },
              "command" : {
                "id" : "e3cd40d8-5a11-48b4-9a46-48aa2d8f9873",
                "label" : "rootviewmodelAddItem1",
                "name" : "增加一条子表数据1",
                "handlerName" : "AddItem",
                "params" : [ ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : true,
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
            "id" : "plandetailsRemoveButton",
            "viewModelId" : "plandetails-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "plandetails-component",
                "viewModelId" : "plandetails-component-viewmodel"
              },
              "command" : {
                "id" : "ec2afdb0-5f2c-45e7-b85c-6580c6303d09",
                "label" : "plandetailsRemoveItem1",
                "name" : "删除一条子表数据",
                "handlerName" : "RemoveItem",
                "params" : [ {
                  "name" : "id",
                  "shownName" : "待删除子表数据的标识",
                  "value" : "{DATA~/#{plandetails-component}/planDetailss/id}"
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
            "id" : "tabToolbarItem-fy36",
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
                "id" : "bf170d19-48ed-4e29-a37b-b14bd1c29661",
                "label" : "rootviewmodelDataImport1",
                "name" : "数据导入1",
                "handlerName" : "DataImport",
                "params" : [ {
                  "name" : "type",
                  "shownName" : "导入类型",
                  "value" : "1",
                  "defaultValue" : null
                }, {
                  "name" : "ruleID",
                  "shownName" : "规则Id",
                  "value" : "71fea8ad-a817-4ea8-bf36-c5d1e1ab7b8e",
                  "defaultValue" : null
                }, {
                  "name" : "option",
                  "shownName" : "参数配置",
                  "value" : "{\"templatefilename\":\"物料需求计划明细导入模板\",\"customImportTitle\":\"物料需求计划明细导入\",\"importdbRefresh\":true}",
                  "defaultValue" : null
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
            "id" : "tabToolbarItem-56w5",
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
                "id" : "773e725a-5708-4595-8ba6-d64935fb4fd5",
                "label" : "rootviewmodelDataExport1",
                "name" : "数据导出1",
                "handlerName" : "DataExport",
                "params" : [ {
                  "name" : "type",
                  "shownName" : "导出类型",
                  "value" : "3",
                  "defaultValue" : null
                }, {
                  "name" : "ruleID",
                  "shownName" : "规则Id",
                  "value" : "5ef04e37-ce4e-4e7a-94fb-cd4d80a173e8",
                  "defaultValue" : null
                }, {
                  "name" : "option",
                  "shownName" : "参数配置",
                  "value" : "{\"selectFilterGridComponent\":\"data-grid-component\"}",
                  "defaultValue" : null
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
            "id" : "tabToolbarItem-caan",
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
                "id" : "38e307e2-5f42-43bd-9205-cc5421b8a60d",
                "label" : "rootviewmodelDataExport2",
                "name" : "数据导出2",
                "handlerName" : "DataExport",
                "params" : [ {
                  "name" : "type",
                  "shownName" : "导出类型",
                  "value" : "3",
                  "defaultValue" : null
                }, {
                  "name" : "ruleID",
                  "shownName" : "规则Id",
                  "value" : "5ef04e37-ce4e-4e7a-94fb-cd4d80a173e8",
                  "defaultValue" : null
                }, {
                  "name" : "option",
                  "shownName" : "参数配置",
                  "value" : "",
                  "defaultValue" : null
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
            }, {
              "event" : {
                "label" : "afterViewInit",
                "name" : "视图初始化后事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "ef1fe7f9-8275-4ac4-bba6-2e7e902c101e",
                "label" : "rootviewmodelgetMinDate1",
                "name" : "getMinDate1",
                "handlerName" : "getMinDate",
                "params" : [ ],
                "cmpId" : "25cfda68-6686-40d1-888e-ef9f568c7609",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "25cfda68-6686-40d1-888e-ef9f568c7609",
                "label" : "MaterialPlanCard_frm_MinDate",
                "name" : "物料需求计划详情_frm_最小交货日期设置"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "dataGrid_plandetails",
            "viewModelId" : "plandetails-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "appendRow",
                "name" : "回车新增行事件"
              },
              "targetComponent" : {
                "id" : "plandetails-component",
                "viewModelId" : "plandetails-component-viewmodel"
              },
              "command" : {
                "id" : "70be136c-f8ad-4ee8-b7f8-44d938939609",
                "label" : "plandetailsAddItem1",
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
  "RelativePath" : "SCM/CM/MaterialPlan/bo-materialplan-front/metadata/components",
  "ExtendProperty" : "",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}