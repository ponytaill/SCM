{
  "Header" : {
    "Code" : "MaterialPlanForm",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Front",
    "CertId" : null,
    "Name" : "物料需求计划表单",
    "FileName" : "MaterialPlanForm.frm",
    "BizobjectID" : "231b9526-f857-fa01-9eec-f45b6f98367d",
    "Language" : null,
    "Extendable" : false,
    "ID" : "e72f0873-e8ea-4969-8451-a0bdf12a5d16",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "5e43e029-8cb3-4e40-b8f6-8834764d0843",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Front",
      "Code" : "MaterialPlanForm.frm",
      "Name" : "MaterialPlanForm.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "231b9526-f857-fa01-9eec-f45b6f98367d"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "CreationDate" : null,
    "Id" : "e72f0873-e8ea-4969-8451-a0bdf12a5d16",
    "Contents" : {
      "module" : {
        "id" : "MaterialPlanForm",
        "code" : "MaterialPlanForm",
        "name" : "物料需求计划表单",
        "caption" : "物料需求计划表单",
        "type" : "Module",
        "creator" : "shizhiyuan",
        "creationDate" : "2023-06-25T01:56:28.806Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "list-template",
        "templateId" : "list-template",
        "schemas" : [ {
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "code" : "MaterialPlanForm_frm",
          "id" : "d5d6ccf3-5d06-44e2-92eb-e75d8fb2fcd3",
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
                "id" : "f73f5927-a02c-491c-9b5c-cd74be14d2fa",
                "label" : "id",
                "originalId" : "f73f5927-a02c-491c-9b5c-cd74be14d2fa",
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
                "id" : "040f40dd-c841-498f-86c5-d8d58afb91d7",
                "label" : "version",
                "originalId" : "040f40dd-c841-498f-86c5-d8d58afb91d7",
                "name" : "版本"
              }, {
                "$type" : "ComplexField",
                "bindingField" : "billStatus",
                "bindingPath" : "billStatus",
                "type" : {
                  "$type" : "ObjectType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "readonly" : false,
                    "require" : false,
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "EnumField"
                    },
                    "defaultValue" : "",
                    "bindingField" : "billStatus_BillState",
                    "bindingPath" : "billStatus.billState",
                    "type" : {
                      "$type" : "EnumType",
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
                      "valueType" : {
                        "$type" : "StringType",
                        "length" : 36,
                        "name" : "String",
                        "displayName" : "字符串"
                      },
                      "name" : "Enum",
                      "displayName" : "枚举"
                    },
                    "path" : "BillStatus.BillState",
                    "code" : "BillState",
                    "id" : "6a6f7e09-0101-468f-ae3f-40c76c0f06b0",
                    "label" : "billState",
                    "originalId" : "a0b19650-0101-468f-ae3f-40c76c0f06b0",
                    "name" : "状态"
                  } ],
                  "name" : "BillState6a6f",
                  "displayName" : "状态"
                },
                "path" : "BillStatus",
                "code" : "BillStatus",
                "id" : "6a6f7e09-e596-42b6-89a7-0f46ed82f8fa",
                "label" : "billStatus",
                "originalId" : "6a6f7e09-e596-42b6-89a7-0f46ed82f8fa",
                "name" : "状态"
              }, {
                "$type" : "ComplexField",
                "bindingField" : "processInstance",
                "bindingPath" : "processInstance",
                "type" : {
                  "$type" : "ObjectType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "readonly" : false,
                    "require" : false,
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "bindingField" : "processInstance_ProcessInstance",
                    "bindingPath" : "processInstance.processInstance",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "ProcessInstance.ProcessInstance",
                    "code" : "ProcessInstance",
                    "id" : "502cfc60-ad8f-4da3-a430-c8a7f2162135",
                    "label" : "processInstance",
                    "originalId" : "2e1beb7d-ad8f-4da3-a430-c8a7f2162135",
                    "name" : "流程实例"
                  } ],
                  "name" : "ProcessInstance502c",
                  "displayName" : "流程实例"
                },
                "path" : "ProcessInstance",
                "code" : "ProcessInstance",
                "id" : "502cfc60-cc89-443c-ba68-5e89903a7191",
                "label" : "processInstance",
                "originalId" : "502cfc60-cc89-443c-ba68-5e89903a7191",
                "name" : "流程实例"
              }, {
                "$type" : "ComplexField",
                "bindingField" : "applicant",
                "bindingPath" : "applicant",
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
                    "bindingField" : "applicant",
                    "bindingPath" : "applicant.applicant",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Applicant.Applicant",
                    "code" : "Applicant",
                    "id" : "a50f04eb-fc31-457c-8c85-0c5ab0cae592",
                    "label" : "applicant",
                    "originalId" : "a50f04eb-fc31-457c-8c85-0c5ab0cae592",
                    "name" : "制单人"
                  }, {
                    "$type" : "SimpleField",
                    "readonly" : false,
                    "require" : false,
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "bindingField" : "applicant_Applicant_ID",
                    "bindingPath" : "applicant.applicant_ID",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Applicant.Applicant_ID",
                    "code" : "ID",
                    "id" : "493e5d57-896f-46dd-a9a7-af9a5a54d0a1",
                    "label" : "applicant_ID",
                    "originalId" : "493e5d57-896f-46dd-a9a7-af9a5a54d0a1",
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
                    "bindingField" : "applicant_Applicant_Name",
                    "bindingPath" : "applicant.applicant_Name",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Applicant.Applicant_Name",
                    "code" : "Name",
                    "id" : "36e050c8-bb2f-4649-8974-9b4af77eeb21",
                    "label" : "applicant_Name",
                    "originalId" : "36e050c8-bb2f-4649-8974-9b4af77eeb21",
                    "name" : "名称"
                  } ],
                  "primary" : "applicant",
                  "entities" : [ ],
                  "name" : "GspUserA50f",
                  "displayName" : "用户"
                },
                "path" : "Applicant",
                "code" : "Applicant",
                "id" : "9a4e5cae-db13-4ed6-94a9-545a7710d493",
                "label" : "applicant",
                "originalId" : "9a4e5cae-db13-4ed6-94a9-545a7710d493",
                "name" : "制单人"
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
                "bindingField" : "deliveryDate",
                "bindingPath" : "deliveryDate",
                "type" : {
                  "$type" : "DateTimeType",
                  "name" : "DateTime",
                  "displayName" : "日期时间"
                },
                "path" : "DeliveryDate",
                "code" : "DeliveryDate",
                "id" : "19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a",
                "label" : "deliveryDate",
                "originalId" : "19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a",
                "name" : "交货日期"
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
                    "id" : "f9f7f6fd-68a4-430c-856a-adda5d47fd52",
                    "label" : "purchaseDept",
                    "originalId" : "f9f7f6fd-68a4-430c-856a-adda5d47fd52",
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
                    "id" : "97d95d4b-8497-4df5-bec8-8838acc68ee7",
                    "label" : "purchaseDept_ID",
                    "originalId" : "97d95d4b-8497-4df5-bec8-8838acc68ee7",
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
                    "id" : "53265c41-b6d3-4977-9dde-450cb0505c91",
                    "label" : "purchaseDept_name",
                    "originalId" : "53265c41-b6d3-4977-9dde-450cb0505c91",
                    "name" : "名称"
                  } ],
                  "primary" : "purchaseDept",
                  "entities" : [ ],
                  "name" : "SysOrgF9F7",
                  "displayName" : "系统组织"
                },
                "path" : "PurchaseDept",
                "code" : "PurchaseDept",
                "id" : "8c17f510-c90b-4109-aa97-39ba06e2f720",
                "label" : "purchaseDept",
                "originalId" : "8c17f510-c90b-4109-aa97-39ba06e2f720",
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
                "bindingField" : "planCode",
                "bindingPath" : "planCode",
                "type" : {
                  "$type" : "StringType",
                  "length" : 100,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "PlanCode",
                "code" : "PlanCode",
                "id" : "210f7065-4c19-4009-81e3-3cafec40792a",
                "label" : "planCode",
                "originalId" : "210f7065-4c19-4009-81e3-3cafec40792a",
                "name" : "计划编号"
              }, {
                "$type" : "SimpleField",
                "readonly" : false,
                "require" : false,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "bindingField" : "planName",
                "bindingPath" : "planName",
                "type" : {
                  "$type" : "StringType",
                  "length" : 100,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "PlanName",
                "code" : "PlanName",
                "id" : "4f24ebc0-acb5-4039-8ee5-9e1fd296f133",
                "label" : "planName",
                "originalId" : "4f24ebc0-acb5-4039-8ee5-9e1fd296f133",
                "name" : "计划名称"
              }, {
                "$type" : "SimpleField",
                "readonly" : false,
                "require" : false,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "CheckBox"
                },
                "defaultValue" : "",
                "bindingField" : "isPurchaseOrder",
                "bindingPath" : "isPurchaseOrder",
                "type" : {
                  "$type" : "BooleanType",
                  "name" : "Boolean",
                  "displayName" : "布尔"
                },
                "path" : "IsPurchaseOrder",
                "code" : "IsPurchaseOrder",
                "id" : "75108363-b463-4d9a-8ee1-899a42e20e04",
                "label" : "isPurchaseOrder",
                "originalId" : "75108363-b463-4d9a-8ee1-899a42e20e04",
                "name" : "是否已生成采购订单"
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
                "id" : "da36cd69-7e29-4add-85f0-ea43a2691188",
                "label" : "totalPrice",
                "originalId" : "da36cd69-7e29-4add-85f0-ea43a2691188",
                "name" : "物料总价"
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
                    "id" : "f039a9da-8150-4935-8af3-836b7aca3bef",
                    "label" : "purchaser",
                    "originalId" : "f039a9da-8150-4935-8af3-836b7aca3bef",
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
                    "id" : "8a441b44-720b-4e36-aa28-a20d4008658e",
                    "label" : "purchaser_ID",
                    "originalId" : "8a441b44-720b-4e36-aa28-a20d4008658e",
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
                    "id" : "e646ee4c-4ae8-4df5-a9b4-0c39402adff8",
                    "label" : "purchaser_Name",
                    "originalId" : "e646ee4c-4ae8-4df5-a9b4-0c39402adff8",
                    "name" : "名称"
                  } ],
                  "primary" : "purchaser",
                  "entities" : [ ],
                  "name" : "GspUserF039",
                  "displayName" : "用户"
                },
                "path" : "Purchaser",
                "code" : "Purchaser",
                "id" : "9a3c1a79-58e3-4fd4-b3ae-eb335ba76259",
                "label" : "purchaser",
                "originalId" : "9a3c1a79-58e3-4fd4-b3ae-eb335ba76259",
                "name" : "采购员"
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
                    "id" : "7332651f-ff08-485e-a35a-dc63102ee672",
                    "label" : "id",
                    "originalId" : "7332651f-ff08-485e-a35a-dc63102ee672",
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
                    "id" : "c0b402e9-3b36-453a-ab2d-2cab60ca921b",
                    "label" : "parentID",
                    "originalId" : "c0b402e9-3b36-453a-ab2d-2cab60ca921b",
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
                        "id" : "35b15b74-6459-405b-995d-ab3922ea92fe",
                        "label" : "materialId",
                        "originalId" : "35b15b74-6459-405b-995d-ab3922ea92fe",
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
                        "id" : "6594668b-6362-4f95-aafd-50e16c39cc2c",
                        "label" : "materialId_ID",
                        "originalId" : "6594668b-6362-4f95-aafd-50e16c39cc2c",
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
                        "id" : "63a6d382-b9c3-4c9f-8e2e-a9e81ed6b969",
                        "label" : "materialId_MaterialName",
                        "originalId" : "63a6d382-b9c3-4c9f-8e2e-a9e81ed6b969",
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
                        "id" : "2df92486-7460-4440-8a99-e1a660bb1a65",
                        "label" : "materialId_MaterialCode",
                        "originalId" : "2df92486-7460-4440-8a99-e1a660bb1a65",
                        "name" : "物料编号"
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
                        "id" : "2b29394f-2537-4611-8f8f-b163f6a5e37f",
                        "label" : "materialId_EvePrice",
                        "originalId" : "2b29394f-2537-4611-8f8f-b163f6a5e37f",
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
                        "id" : "06458f18-510c-4f44-9b1c-7eaf67b3e969",
                        "label" : "materialId_MaterialCat_CatName",
                        "originalId" : "06458f18-510c-4f44-9b1c-7eaf67b3e969",
                        "name" : "类别名称"
                      } ],
                      "primary" : "materialId",
                      "entities" : [ ],
                      "name" : "Material35b1",
                      "displayName" : "物料管理"
                    },
                    "path" : "MaterialId",
                    "code" : "MaterialId",
                    "id" : "b8a6f324-b05d-410b-b208-d1b772b28818",
                    "label" : "materialId",
                    "originalId" : "b8a6f324-b05d-410b-b208-d1b772b28818",
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
                    "bindingField" : "materialAmount",
                    "bindingPath" : "materialAmount",
                    "type" : {
                      "$type" : "NumericType",
                      "precision" : 0,
                      "length" : 0,
                      "name" : "Number",
                      "displayName" : "数字"
                    },
                    "path" : "MaterialAmount",
                    "code" : "MaterialAmount",
                    "id" : "9e1c55ed-6041-44a5-a8ea-639a634a5851",
                    "label" : "materialAmount",
                    "originalId" : "9e1c55ed-6041-44a5-a8ea-639a634a5851",
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
                        "id" : "236853a3-36b9-431b-b7ca-93fb833329d9",
                        "label" : "supplier",
                        "originalId" : "236853a3-36b9-431b-b7ca-93fb833329d9",
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
                        "id" : "427ccf10-be08-45fd-ba87-5c982e396273",
                        "label" : "supplier_ID",
                        "originalId" : "427ccf10-be08-45fd-ba87-5c982e396273",
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
                        "id" : "a3e96b56-944e-468f-890c-11974c96c50e",
                        "label" : "supplier_SupplierName",
                        "originalId" : "a3e96b56-944e-468f-890c-11974c96c50e",
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
                        "id" : "4934d579-c4a7-410a-bd50-39f747ac49ef",
                        "label" : "supplier_SupplierCode",
                        "originalId" : "4934d579-c4a7-410a-bd50-39f747ac49ef",
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
                        "id" : "f9f085b7-b7bd-4ca1-a389-4da7acfe5373",
                        "label" : "supplier_ContactsEmail",
                        "originalId" : "f9f085b7-b7bd-4ca1-a389-4da7acfe5373",
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
                        "id" : "62ea7311-acad-4eea-81af-014818690f8c",
                        "label" : "supplier_ContactsAddress",
                        "originalId" : "62ea7311-acad-4eea-81af-014818690f8c",
                        "name" : "办公地址"
                      } ],
                      "primary" : "supplier",
                      "entities" : [ ],
                      "name" : "SupplierMa2368",
                      "displayName" : "供应商管理"
                    },
                    "path" : "Supplier",
                    "code" : "Supplier",
                    "id" : "4a4f0b30-9884-4a42-b435-f02a897996e3",
                    "label" : "supplier",
                    "originalId" : "4a4f0b30-9884-4a42-b435-f02a897996e3",
                    "name" : "供应商"
                  } ],
                  "primary" : "id",
                  "entities" : [ ],
                  "name" : "PlanDetails",
                  "displayName" : "物料需求计划明细"
                },
                "code" : "PlanDetails",
                "id" : "1d7c5966-5a39-47ba-bfb4-7a8acf729dfb",
                "label" : "planDetailss",
                "name" : "物料需求计划明细"
              } ],
              "name" : "MaterialPlan",
              "displayName" : "物料需求计划"
            },
            "code" : "MaterialPlan",
            "id" : "272824f8-e707-4388-9995-7b0c2423b796",
            "label" : "materialPlans",
            "name" : "物料需求计划"
          } ],
          "sourceType" : "vo",
          "variables" : [ ],
          "sourceUri" : "api/scm/cm/v1.0/MaterialPlanForm_frm",
          "name" : "物料需求计划表单_frm",
          "eapiId" : "8996b1a7-5eca-4b71-808c-ddd1938b2784",
          "eapiCode" : "MaterialPlanForm_frm",
          "eapiName" : "物料需求计划表单_frm",
          "eapiNameSpace" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Front",
          "voPath" : "SCM/CM/MaterialPlan/bo-materialplan-front/metadata/components",
          "voNameSpace" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Front"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "MaterialPlanForm_state_machine",
          "name" : "物料需求计划表单_frm",
          "uri" : "ae2ed0b0-a9bf-4b2a-bf47-91114a3e2222",
          "code" : "MaterialPlanForm_frm",
          "nameSpace" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "物料需求计划",
          "fields" : [ ],
          "stateMachine" : "MaterialPlanForm_state_machine",
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
              "value" : "8652724f-5e15-4348-b87b-5e735ed06830"
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"action\":\"LoadAndAdd1\"}"
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
              "value" : "8652724f-5e15-4348-b87b-5e735ed06830"
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
              "value" : false
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
              "value" : "8652724f-5e15-4348-b87b-5e735ed06830"
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
            "id" : "0d34f338-b601-4716-8530-493b0752483b",
            "code" : "submitWithBizDefKey1",
            "name" : "提交审批",
            "params" : [ {
              "name" : "dataId",
              "shownName" : "表单数据id",
              "value" : "{DATA~/data-grid-component/id}"
            }, {
              "name" : "bizDefKey",
              "shownName" : "流程分类id",
              "value" : "cfb2e16e-834c-4702-847c-48c4e0d80577"
            }, {
              "name" : "action",
              "shownName" : "迁移动作（可选）",
              "value" : ""
            } ],
            "handlerName" : "submitWithBizDefKey",
            "cmpId" : "a7cb7d01-9df1-4a32-8202-99c9d0f4c339",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "root-component"
          }, {
            "id" : "e492063e-a22d-4f23-8aed-7fe139843220",
            "code" : "cancelSubmitWithDataId1",
            "name" : "取消提交",
            "params" : [ {
              "name" : "dataId",
              "shownName" : "表单数据id",
              "value" : "{DATA~/data-grid-component/id}"
            }, {
              "name" : "bizDefKey",
              "shownName" : "流程分类id",
              "value" : "cfb2e16e-834c-4702-847c-48c4e0d80577"
            }, {
              "name" : "action",
              "shownName" : "迁移动作（可选）",
              "value" : ""
            } ],
            "handlerName" : "cancelSubmitWithDataId",
            "cmpId" : "a7cb7d01-9df1-4a32-8202-99c9d0f4c339",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "root-component"
          }, {
            "id" : "ba71133e-0982-4f3b-96d3-431bc79632ca",
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
          "name" : "物料需求计划",
          "fields" : [ {
            "type" : "Form",
            "id" : "6a6f7e09-0101-468f-ae3f-40c76c0f06b0",
            "fieldName" : "billStatus_BillState",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change",
            "fieldSchema" : {
              "name" : "审批状态"
            }
          }, {
            "type" : "Form",
            "id" : "36e050c8-bb2f-4649-8974-9b4af77eeb21",
            "fieldName" : "applicant_Applicant_Name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "name" : "制单人"
            }
          }, {
            "type" : "Form",
            "id" : "19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a",
            "fieldName" : "deliveryDate",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "53265c41-b6d3-4977-9dde-450cb0505c91",
            "fieldName" : "purchaseDept_PurchaseDept_name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "name" : "采购部门"
            }
          }, {
            "type" : "Form",
            "id" : "210f7065-4c19-4009-81e3-3cafec40792a",
            "fieldName" : "planCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "4f24ebc0-acb5-4039-8ee5-9e1fd296f133",
            "fieldName" : "planName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "75108363-b463-4d9a-8ee1-899a42e20e04",
            "fieldName" : "isPurchaseOrder",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change"
          }, {
            "type" : "Form",
            "id" : "da36cd69-7e29-4add-85f0-ea43a2691188",
            "fieldName" : "totalPrice",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "e646ee4c-4ae8-4df5-a9b4-0c39402adff8",
            "fieldName" : "purchaser_Purchaser_Name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "name" : "采购员"
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
          }, {
            "id" : "4f7a55f3-ed3b-40c1-83e3-93a889fa437a",
            "code" : "datagridcomponentviewmodelView1",
            "name" : "在新页签中查看数据1",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "8652724f-5e15-4348-b87b-5e735ed06830"
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"id\":\"{DATA~/data-grid-component/id}\",\"action\":\"LoadAndView1\"}"
            }, {
              "name" : "idToView",
              "shownName" : "待查看数据的标识",
              "value" : "{DATA~/data-grid-component/id}"
            }, {
              "name" : "enableRefresh",
              "shownName" : "支持刷新列表数据",
              "value" : true
            }, {
              "name" : "tabName",
              "shownName" : "标签页标题",
              "value" : "物料需求计划详情"
            }, {
              "name" : "destructuring",
              "shownName" : "是否解构参数",
              "value" : ""
            } ],
            "handlerName" : "View",
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
                  "id" : "f73f5927-a02c-491c-9b5c-cd74be14d2fa",
                  "labelCode" : "ID",
                  "code" : "ID",
                  "name" : "主键",
                  "control" : {
                    "id" : "f73f5927-a02c-491c-9b5c-cd74be14d2fa",
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
                  "id" : "040f40dd-c841-498f-86c5-d8d58afb91d7",
                  "labelCode" : "Version",
                  "code" : "Version",
                  "name" : "版本",
                  "control" : {
                    "id" : "040f40dd-c841-498f-86c5-d8d58afb91d7",
                    "controltype" : "date",
                    "require" : false,
                    "format" : "yyyy-MM-dd",
                    "weekSelect" : false
                  }
                }, {
                  "id" : "6a6f7e09-0101-468f-ae3f-40c76c0f06b0",
                  "labelCode" : "BillStatus.BillState",
                  "code" : "BillState",
                  "name" : "状态",
                  "control" : {
                    "id" : "6a6f7e09-0101-468f-ae3f-40c76c0f06b0",
                    "controltype" : "dropdown",
                    "require" : false,
                    "valueType" : "1",
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
                    "className" : "",
                    "multiSelect" : false,
                    "panelHeight" : null
                  }
                }, {
                  "id" : "502cfc60-ad8f-4da3-a430-c8a7f2162135",
                  "labelCode" : "ProcessInstance.ProcessInstance",
                  "code" : "ProcessInstance",
                  "name" : "流程实例",
                  "control" : {
                    "id" : "502cfc60-ad8f-4da3-a430-c8a7f2162135",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "a50f04eb-fc31-457c-8c85-0c5ab0cae592",
                  "labelCode" : "Applicant.Applicant",
                  "code" : "Applicant",
                  "name" : "制单人",
                  "control" : {
                    "id" : "a50f04eb-fc31-457c-8c85-0c5ab0cae592",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "493e5d57-896f-46dd-a9a7-af9a5a54d0a1",
                  "labelCode" : "Applicant.Applicant_ID",
                  "code" : "ID",
                  "name" : "ID",
                  "control" : {
                    "id" : "493e5d57-896f-46dd-a9a7-af9a5a54d0a1",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "36e050c8-bb2f-4649-8974-9b4af77eeb21",
                  "labelCode" : "Applicant.Applicant_Name",
                  "code" : "Name",
                  "name" : "名称",
                  "control" : {
                    "id" : "36e050c8-bb2f-4649-8974-9b4af77eeb21",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a",
                  "labelCode" : "DeliveryDate",
                  "code" : "DeliveryDate",
                  "name" : "交货日期",
                  "control" : {
                    "id" : "19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a",
                    "controltype" : "date",
                    "require" : false,
                    "format" : "yyyy-MM-dd",
                    "weekSelect" : false
                  }
                }, {
                  "id" : "f9f7f6fd-68a4-430c-856a-adda5d47fd52",
                  "labelCode" : "PurchaseDept.PurchaseDept",
                  "code" : "PurchaseDept",
                  "name" : "采购部门",
                  "control" : {
                    "id" : "f9f7f6fd-68a4-430c-856a-adda5d47fd52",
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
                  "id" : "97d95d4b-8497-4df5-bec8-8838acc68ee7",
                  "labelCode" : "PurchaseDept.PurchaseDept_ID",
                  "code" : "ID",
                  "name" : "采购部门",
                  "control" : {
                    "id" : "97d95d4b-8497-4df5-bec8-8838acc68ee7",
                    "controltype" : "help",
                    "require" : false,
                    "helpId" : "b524a702-7323-4d46-998e-5ba0c6abcd49",
                    "uri" : "MaterialPlan.purchaseDept_PurchaseDept_ID",
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
                    "conditions" : null,
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
                  "id" : "53265c41-b6d3-4977-9dde-450cb0505c91",
                  "labelCode" : "PurchaseDept.PurchaseDept_name",
                  "code" : "name",
                  "name" : "名称",
                  "control" : {
                    "id" : "53265c41-b6d3-4977-9dde-450cb0505c91",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "210f7065-4c19-4009-81e3-3cafec40792a",
                  "labelCode" : "PlanCode",
                  "code" : "PlanCode",
                  "name" : "计划编号",
                  "control" : {
                    "id" : "210f7065-4c19-4009-81e3-3cafec40792a",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "4f24ebc0-acb5-4039-8ee5-9e1fd296f133",
                  "labelCode" : "PlanName",
                  "code" : "PlanName",
                  "name" : "计划名称",
                  "control" : {
                    "id" : "4f24ebc0-acb5-4039-8ee5-9e1fd296f133",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "75108363-b463-4d9a-8ee1-899a42e20e04",
                  "labelCode" : "IsPurchaseOrder",
                  "code" : "IsPurchaseOrder",
                  "name" : "是否已生成采购订单",
                  "control" : {
                    "id" : "75108363-b463-4d9a-8ee1-899a42e20e04",
                    "controltype" : "dropdown",
                    "require" : false,
                    "valueType" : "2",
                    "enumValues" : [ {
                      "value" : true,
                      "name" : "true"
                    }, {
                      "value" : false,
                      "name" : "false"
                    } ],
                    "className" : "",
                    "multiSelect" : false,
                    "panelHeight" : null
                  }
                }, {
                  "id" : "da36cd69-7e29-4add-85f0-ea43a2691188",
                  "labelCode" : "TotalPrice",
                  "code" : "TotalPrice",
                  "name" : "物料总价",
                  "control" : {
                    "id" : "da36cd69-7e29-4add-85f0-ea43a2691188",
                    "controltype" : "number",
                    "require" : false,
                    "className" : "",
                    "textAlign" : "left",
                    "precision" : 2,
                    "isBigNumber" : false
                  }
                }, {
                  "id" : "f039a9da-8150-4935-8af3-836b7aca3bef",
                  "labelCode" : "Purchaser.Purchaser",
                  "code" : "Purchaser",
                  "name" : "采购员",
                  "control" : {
                    "id" : "f039a9da-8150-4935-8af3-836b7aca3bef",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "8a441b44-720b-4e36-aa28-a20d4008658e",
                  "labelCode" : "Purchaser.Purchaser_ID",
                  "code" : "ID",
                  "name" : "ID",
                  "control" : {
                    "id" : "8a441b44-720b-4e36-aa28-a20d4008658e",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "e646ee4c-4ae8-4df5-a9b4-0c39402adff8",
                  "labelCode" : "Purchaser.Purchaser_Name",
                  "code" : "Name",
                  "name" : "名称",
                  "control" : {
                    "id" : "e646ee4c-4ae8-4df5-a9b4-0c39402adff8",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                } ],
                "presetFieldConfigs" : [ {
                  "id" : "210f7065-4c19-4009-81e3-3cafec40792a",
                  "labelCode" : "PlanCode",
                  "code" : "PlanCode",
                  "name" : "计划编号",
                  "control" : {
                    "id" : "210f7065-4c19-4009-81e3-3cafec40792a",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "4f24ebc0-acb5-4039-8ee5-9e1fd296f133",
                  "labelCode" : "PlanName",
                  "code" : "PlanName",
                  "name" : "计划名称",
                  "control" : {
                    "id" : "4f24ebc0-acb5-4039-8ee5-9e1fd296f133",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a",
                  "labelCode" : "DeliveryDate",
                  "code" : "DeliveryDate",
                  "name" : "交货日期",
                  "control" : {
                    "id" : "19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a",
                    "controltype" : "date",
                    "require" : false,
                    "format" : "yyyy-MM-dd",
                    "weekSelect" : false
                  }
                }, {
                  "id" : "97d95d4b-8497-4df5-bec8-8838acc68ee7",
                  "labelCode" : "PurchaseDept.PurchaseDept_ID",
                  "code" : "ID",
                  "name" : "采购部门",
                  "control" : {
                    "id" : "97d95d4b-8497-4df5-bec8-8838acc68ee7",
                    "controltype" : "help",
                    "require" : false,
                    "helpId" : "b524a702-7323-4d46-998e-5ba0c6abcd49",
                    "uri" : "MaterialPlan.purchaseDept_PurchaseDept_ID",
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
                    "conditions" : null,
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
                } ],
                "formId" : "MaterialPlanForm",
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
                    "html" : "<span class=\"f-title-icon f-text-orna-manage\"><i class=\"f-icon f-icon-page-title-administer\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'物料需求计划表单'}}</h4>"
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
                    "id" : "toolBarItem-epjr",
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
                    "disable" : "viewModel.stateMachine['canOperation']",
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
                    "disable" : "viewModel.stateMachine['canOperation']",
                    "text" : "删除",
                    "visible" : true,
                    "click" : "Remove1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-approve",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canApprove']",
                    "text" : "提交审批",
                    "visible" : true,
                    "click" : "submitWithBizDefKey1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-cancel-approve",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canCancelApprove']",
                    "text" : "取消提交审批",
                    "visible" : true,
                    "click" : "cancelSubmitWithDataId1",
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
              "dataSource" : "materialPlans",
              "fields" : [ {
                "id" : "billStatus_BillState_6a6f7e09_pbh3",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "审批状态",
                "captionTemplate" : null,
                "dataField" : "billStatus.billState",
                "dataType" : "enum",
                "binding" : {
                  "type" : "Form",
                  "path" : "billStatus_BillState",
                  "field" : "6a6f7e09-0101-468f-ae3f-40c76c0f06b0",
                  "fullPath" : "BillStatus.BillState"
                },
                "enumData" : [ {
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
                "colTemplate" : "<span *ngIf=\"ctx.rowData.billStatus?.billState === 'Billing'\">\r\n   <span class=\"badge-round-info mr-2\"></span>{{'GridField/billStatus_BillState_44b4a12b_ua37/enumData/Billing'|lang:lang:'制单'}}\r\n</span>\r\n<span *ngIf=\"ctx.rowData.billStatus?.billState === 'SubmitApproval'\">\r\n   <span class=\"badge-round-warning mr-2\"></span>{{'GridField/billStatus_BillState_44b4a12b_ua37/enumData/SubmitApproval'|lang:lang:'提交审批'}}     \r\n</span>\r\n<span *ngIf=\"ctx.rowData.billStatus?.billState === 'Approved'\">\r\n   <span class=\"badge-round-success mr-2\"></span>{{'GridField/billStatus_BillState_44b4a12b_ua37/enumData/Approved'|lang:lang:'审批通过'}}\r\n</span>\r\n<span *ngIf=\"ctx.rowData.billStatus?.billState === 'ApprovalNotPassed'\">\r\n   <span class=\"badge-round-danger mr-2\"></span>{{'GridField/billStatus_BillState_44b4a12b_ua37/enumData/ApprovalNotPassed'|lang:lang:'审批不通过'}}\r\n</span>",
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
                "iconConfigForEnumData" : null
              }, {
                "id" : "planCode_210f7065_7a35",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "计划编号",
                "captionTemplate" : null,
                "dataField" : "planCode",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "planCode",
                  "field" : "210f7065-4c19-4009-81e3-3cafec40792a",
                  "fullPath" : "PlanCode"
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
                "linkedLabelEnabled" : true,
                "linkedLabelClick" : "datagridcomponentviewmodelView1",
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
                "id" : "applicant_Applicant_Name_36e050c8_radi",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "制单人",
                "captionTemplate" : null,
                "dataField" : "applicant.applicant_Name",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "applicant_Applicant_Name",
                  "field" : "36e050c8-bb2f-4649-8974-9b4af77eeb21",
                  "fullPath" : "Applicant.Applicant_Name"
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
                "id" : "purchaseDept_PurchaseDept_name_53265c41_3q8s",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "采购部门",
                "captionTemplate" : null,
                "dataField" : "purchaseDept.purchaseDept_name",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "purchaseDept_PurchaseDept_name",
                  "field" : "53265c41-b6d3-4977-9dde-450cb0505c91",
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
                "id" : "purchaser_Purchaser_Name_e646ee4c_5c6k",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "采购员",
                "captionTemplate" : null,
                "dataField" : "purchaser.purchaser_Name",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "purchaser_Purchaser_Name",
                  "field" : "e646ee4c-4ae8-4df5-a9b4-0c39402adff8",
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
                "id" : "deliveryDate_19bd9bfb_nnlo",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "交货日期",
                "captionTemplate" : null,
                "dataField" : "deliveryDate",
                "dataType" : "datetime",
                "binding" : {
                  "type" : "Form",
                  "path" : "deliveryDate",
                  "field" : "19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a",
                  "fullPath" : "DeliveryDate"
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
                "id" : "planName_4f24ebc0_a9kt",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "计划名称",
                "captionTemplate" : null,
                "dataField" : "planName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "planName",
                  "field" : "4f24ebc0-acb5-4039-8ee5-9e1fd296f133",
                  "fullPath" : "PlanName"
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
                "id" : "totalPrice_da36cd69_48ad",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "物料总价",
                "captionTemplate" : null,
                "dataField" : "totalPrice",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "totalPrice",
                  "field" : "da36cd69-7e29-4add-85f0-ea43a2691188",
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
                  "type" : "sum",
                  "formatter" : {
                    "type" : "none"
                  },
                  "align" : "center",
                  "styler" : "(value, rowData, rowIndex) => {\r\n    return {\r\n        style: {\r\n            color: 'red',\r\n            fontWeight: 800\r\n        }\r\n    };\r\n}"
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
                "id" : "isPurchaseOrder_75108363_6uu3",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "是否已生成采购订单",
                "captionTemplate" : null,
                "dataField" : "isPurchaseOrder",
                "dataType" : "boolean",
                "binding" : {
                  "type" : "Form",
                  "path" : "isPurchaseOrder",
                  "field" : "75108363-b463-4d9a-8ee1-899a42e20e04",
                  "fullPath" : "IsPurchaseOrder"
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
                  "type" : "boolean2",
                  "trueText" : "<span class=\"f-icon f-icon-checkbox-checked f-datagrid-default-show-icon\"></span>",
                  "falseText" : "<span class=\"f-icon f-icon-checkbox f-datagrid-default-show-icon\"></span>"
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
              "showLineNumber" : true,
              "disableRow" : null,
              "beforeSelect" : null,
              "beforeUnSelect" : null,
              "beforeCheck" : null,
              "beforeUnCheck" : null,
              "dblClickRow" : null,
              "showFooter" : true,
              "footerTemplate" : "",
              "footerDataFrom" : "client",
              "footerDataCommand" : null,
              "enableFilterRow" : false,
              "remoteFilter" : false,
              "showFilterBar" : false,
              "useControlPanel" : true,
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
              "enableSimpleMode" : true,
              "enableScheme" : true,
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
            "host" : "4f7a55f3-ed3b-40c1-83e3-93a889fa437a",
            "handler" : "View"
          }, {
            "host" : "ba71133e-0982-4f3b-96d3-431bc79632ca",
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
        }, {
          "id" : "a7cb7d01-9df1-4a32-8202-99c9d0f4c339",
          "path" : null,
          "name" : "ApproveController.webcmd",
          "refedHandlers" : [ {
            "host" : "0d34f338-b601-4716-8530-493b0752483b",
            "handler" : "submitWithBizDefKey"
          }, {
            "host" : "e492063e-a22d-4f23-8aed-7fe139843220",
            "handler" : "cancelSubmitWithDataId"
          } ],
          "code" : "ApproveController",
          "nameSpace" : "Inspur.GS.Gsp.Web.WebApprove"
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-materialplan-front",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "expressions" : [ ],
        "metadataId" : "e72f0873-e8ea-4969-8451-a0bdf12a5d16",
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
            "id" : "toolBarItem-epjr",
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
                "id" : "ba71133e-0982-4f3b-96d3-431bc79632ca",
                "label" : "rootviewmodelLoad1",
                "name" : "加载数据1",
                "handlerName" : "Load",
                "params" : [ {
                  "name" : "filter",
                  "shownName" : "过滤条件",
                  "value" : ""
                }, {
                  "name" : "sort",
                  "shownName" : "排序条件",
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
                  "value" : "8652724f-5e15-4348-b87b-5e735ed06830"
                }, {
                  "name" : "params",
                  "shownName" : "附加参数",
                  "value" : "{\"action\":\"LoadAndAdd1\"}"
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
                  "value" : "8652724f-5e15-4348-b87b-5e735ed06830"
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
                  "value" : "8652724f-5e15-4348-b87b-5e735ed06830"
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
                  "value" : false
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
            "id" : "button-approve",
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
                "id" : "0d34f338-b601-4716-8530-493b0752483b",
                "label" : "submitWithBizDefKey1",
                "name" : "提交审批",
                "handlerName" : "submitWithBizDefKey",
                "params" : [ {
                  "name" : "dataId",
                  "shownName" : "表单数据id",
                  "value" : "{DATA~/data-grid-component/id}"
                }, {
                  "name" : "bizDefKey",
                  "shownName" : "流程分类id",
                  "value" : "cfb2e16e-834c-4702-847c-48c4e0d80577"
                }, {
                  "name" : "action",
                  "shownName" : "迁移动作（可选）",
                  "value" : ""
                } ],
                "cmpId" : "a7cb7d01-9df1-4a32-8202-99c9d0f4c339",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "a7cb7d01-9df1-4a32-8202-99c9d0f4c339",
                "label" : "ApproveController",
                "name" : "审批控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-cancel-approve",
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
                "id" : "e492063e-a22d-4f23-8aed-7fe139843220",
                "label" : "cancelSubmitWithDataId1",
                "name" : "取消提交",
                "handlerName" : "cancelSubmitWithDataId",
                "params" : [ {
                  "name" : "dataId",
                  "shownName" : "表单数据id",
                  "value" : "{DATA~/data-grid-component/id}"
                }, {
                  "name" : "bizDefKey",
                  "shownName" : "流程分类id",
                  "value" : "cfb2e16e-834c-4702-847c-48c4e0d80577"
                }, {
                  "name" : "action",
                  "shownName" : "迁移动作（可选）",
                  "value" : ""
                } ],
                "cmpId" : "a7cb7d01-9df1-4a32-8202-99c9d0f4c339",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "a7cb7d01-9df1-4a32-8202-99c9d0f4c339",
                "label" : "ApproveController",
                "name" : "审批控制器"
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
            "id" : "planCode_210f7065_7a35",
            "viewModelId" : "data-grid-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "linkedLabelClick",
                "name" : "标签超链事件"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "4f7a55f3-ed3b-40c1-83e3-93a889fa437a",
                "label" : "datagridcomponentviewmodelView1",
                "name" : "在新页签中查看数据1",
                "handlerName" : "View",
                "params" : [ {
                  "name" : "url",
                  "shownName" : "功能菜单标识",
                  "value" : "8652724f-5e15-4348-b87b-5e735ed06830"
                }, {
                  "name" : "params",
                  "shownName" : "附加参数",
                  "value" : "{\"id\":\"{DATA~/data-grid-component/id}\",\"action\":\"LoadAndView1\"}"
                }, {
                  "name" : "idToView",
                  "shownName" : "待查看数据的标识",
                  "value" : "{DATA~/data-grid-component/id}"
                }, {
                  "name" : "enableRefresh",
                  "shownName" : "支持刷新列表数据",
                  "value" : true
                }, {
                  "name" : "tabName",
                  "shownName" : "标签页标题",
                  "value" : "物料需求计划详情"
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
        } ]
      },
      "options" : {
        "enableTextArea" : true,
        "renderMode" : "compile",
        "enableDeleteSourceCode" : true,
        "changeSetPolicy" : "valid",
        "publishFormProcess" : true
      }
    }
  },
  "ExtendRule" : null,
  "RelativePath" : "SCM/CM/MaterialPlan/bo-materialplan-front/metadata/components",
  "ExtendProperty" : "",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}