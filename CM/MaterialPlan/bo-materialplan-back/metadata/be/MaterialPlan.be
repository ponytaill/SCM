{
  "Header" : {
    "Code" : "MaterialPlan",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Back",
    "CertId" : null,
    "Name" : "物料需求计划",
    "FileName" : "MaterialPlan.be",
    "BizobjectID" : "231b9526-f857-fa01-9eec-f45b6f98367d",
    "Language" : null,
    "Extendable" : false,
    "ID" : "2f520bf6-62e7-4482-a186-14cce865f5c5",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "a0b19650-0101-468f-ae3f-40c76c0f06b0",
      "CertId" : null,
      "NameSpace" : "Inspur.Gsp.Common.CommonUdt",
      "Code" : "BillState",
      "Name" : "状态",
      "Type" : "UnifiedDataType",
      "BizobjectID" : "CommonUdt"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "2e1beb7d-ad8f-4da3-a430-c8a7f2162135",
      "CertId" : null,
      "NameSpace" : "Inspur.Gsp.Common.CommonUdt",
      "Code" : "ProcessInstance",
      "Name" : "流程实例",
      "Type" : "UnifiedDataType",
      "BizobjectID" : "CommonUdt"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "c31ae4d9-8ee1-43ec-a526-09720fb3f4c9",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.Gsp.Sys.User",
      "Code" : "GspUser",
      "Name" : "用户",
      "Type" : "GSPBusinessEntity",
      "BizobjectID" : "User"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "2bedfc30-4b06-49ff-bbfe-3b996a5c2919",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.Gsp.Sys.SysOrg",
      "Code" : "SysOrg",
      "Name" : "系统组织",
      "Type" : "GSPBusinessEntity",
      "BizobjectID" : "SysOrg"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "29853816-a2dc-4688-9fe5-a7730091921b",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.SCM.CM.Material.Material.Back",
      "Code" : "Material",
      "Name" : "物料管理",
      "Type" : "GSPBusinessEntity",
      "BizobjectID" : "d8bf8331-1d31-69b0-b6b6-d1ea9f4bba96"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "73041b54-d424-45ed-9927-6be784dd1b91",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.SCM.CM.SupplierMa.SupplierMa.Back",
      "Code" : "SupplierMa",
      "Name" : "供应商管理",
      "Type" : "GSPBusinessEntity",
      "BizobjectID" : "ca0af27e-3ff4-a99d-a4e5-aec1c23a5eb7"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "31552b8f-082e-4efe-8bf6-e22f7cef9b6a",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Back",
      "Code" : "MaterialPlan.be",
      "Name" : "MaterialPlan.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "231b9526-f857-fa01-9eec-f45b6f98367d"
    }
  } ],
  "Content" : {
    "ID" : "2f520bf6-62e7-4482-a186-14cce865f5c5",
    "Code" : "MaterialPlan",
    "Name" : "物料需求计划",
    "GeneratingAssembly" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Back",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "6b603004-7d10-48a1-8743-5c31c04338e1"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "56979590-98b2-4fc0-a7f6-45774f2a82f5",
      "Code" : "MaterialPlan",
      "Name" : "物料需求计划",
      "I18nResourceInfoPrefix" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Back.MaterialPlan.MaterialPlan",
      "ContainElements" : [ {
        "ID" : "07bb376b-1a62-446b-bc38-c0d47041489c",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "6b543c99-ddb1-429f-9e67-bf4d3b8b99ce",
        "Code" : "ID",
        "Name" : "主键",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "6b603004-7d10-48a1-8743-5c31c04338e1",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "ddc8aa30-440f-4bd5-897c-adab488252ab",
        "Code" : "Version",
        "Name" : "版本",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "63b21976-cdd2-4828-b9c6-d75d5b59e5ba",
        "LabelID" : "BillStatus",
        "ChildAssociations" : [ ],
        "ChildElements" : [ {
          "ID" : "59247e19-95d5-4bf3-b8a4-1128223d4be7",
          "LabelID" : "BillStatus_BillStatus",
          "I18nResourceInfoPrefix" : "",
          "ChildAssociations" : [ ],
          "ColumnID" : "a08bac8e-7800-431e-9260-08a0265fcd6d",
          "Code" : "BillStatus_BillStatus",
          "Name" : "状态",
          "MDataType" : "String",
          "Length" : 36,
          "EnableRtrim" : true
        } ],
        "ColumnID" : "a08bac8e-7800-431e-9260-08a0265fcd6d",
        "Code" : "BillStatus",
        "Name" : "状态",
        "ObjectType" : "Enum",
        "MDataType" : "String",
        "Length" : 36,
        "IsUdt" : true,
        "EnableRtrim" : true,
        "UdtID" : "a0b19650-0101-468f-ae3f-40c76c0f06b0",
        "UdtName" : "状态",
        "EnumIndexType" : 0,
        "ContainEnumValues" : [ {
          "I18nResourceInfoPrefix" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Back.MaterialPlan.MaterialPlan.BillStatus.Billing",
          "Index" : 0,
          "IsDefaultEnum" : true,
          "Name" : "制单",
          "StringIndex" : "",
          "Value" : "Billing"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Back.MaterialPlan.MaterialPlan.BillStatus.SubmitApproval",
          "Index" : 1,
          "IsDefaultEnum" : false,
          "Name" : "提交审批",
          "StringIndex" : "",
          "Value" : "SubmitApproval"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Back.MaterialPlan.MaterialPlan.BillStatus.Approved",
          "Index" : 2,
          "IsDefaultEnum" : false,
          "Name" : "审批通过",
          "StringIndex" : "",
          "Value" : "Approved"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Back.MaterialPlan.MaterialPlan.BillStatus.ApprovalNotPassed",
          "Index" : 3,
          "IsDefaultEnum" : false,
          "Name" : "审批不通过",
          "StringIndex" : "",
          "Value" : "ApprovalNotPassed"
        } ],
        "MappingRelation" : [ {
          "59247e19-95d5-4bf3-b8a4-1128223d4be7" : "a0b19650-0101-468f-ae3f-40c76c0f06b0"
        } ]
      }, {
        "ID" : "4c412d5a-dab6-44cb-aac4-aa658e77f593",
        "LabelID" : "ProcessInstance",
        "ChildAssociations" : [ ],
        "ChildElements" : [ {
          "ID" : "057ef69b-d5ab-4bf1-b173-d596ce457f7e",
          "LabelID" : "ProcessInstance_ProcessInstance",
          "I18nResourceInfoPrefix" : "",
          "ChildAssociations" : [ ],
          "ColumnID" : "f402ae6f-804c-4675-9470-4be0581036c6",
          "Code" : "ProcessInstance_ProcessInstance",
          "Name" : "",
          "MDataType" : "String",
          "Length" : 36,
          "EnableRtrim" : true
        } ],
        "ColumnID" : "f402ae6f-804c-4675-9470-4be0581036c6",
        "Code" : "ProcessInstance",
        "Name" : "流程实例",
        "MDataType" : "String",
        "Length" : 36,
        "IsUdt" : true,
        "EnableRtrim" : true,
        "UdtID" : "2e1beb7d-ad8f-4da3-a430-c8a7f2162135",
        "UdtName" : "流程实例",
        "MappingRelation" : [ {
          "057ef69b-d5ab-4bf1-b173-d596ce457f7e" : "2e1beb7d-ad8f-4da3-a430-c8a7f2162135"
        } ]
      }, {
        "ID" : "91031c6e-9ab4-4c20-96e5-c5afe4b3568c",
        "LabelID" : "Applicant",
        "ChildAssociations" : [ {
          "ID" : "a50f04eb-fc31-457c-8c85-0c5ab0cae592",
          "RefElementCollection" : [ {
            "ID" : "efd4bc41-1369-4fb8-9881-abd40ea3dccd",
            "LabelID" : "Applicant_ID",
            "ChildAssociations" : [ ],
            "ColumnID" : "634b6100-feab-41e0-be8f-6f30987ac7fd",
            "Code" : "ID",
            "Name" : "ID",
            "MDataType" : "String",
            "Length" : 36,
            "IsRefElement" : true,
            "RefElementID" : "82e52824-f8e1-46a1-841f-0f65582eafac",
            "EnableRtrim" : true
          }, {
            "ID" : "74f73850-9541-4e55-8501-897d75ac0a01",
            "LabelID" : "Applicant_Name",
            "ChildAssociations" : [ ],
            "ColumnID" : "55569631-de1d-46a5-bf27-2d9663989d58",
            "Code" : "Name",
            "Name" : "名称",
            "MDataType" : "String",
            "Length" : 36,
            "IsMultiLanguage" : true,
            "IsRefElement" : true,
            "RefElementID" : "94fd1572-613c-4973-bf79-12e33c16a9ec",
            "EnableRtrim" : true
          } ],
          "RefModelID" : "c31ae4d9-8ee1-43ec-a526-09720fb3f4c9",
          "RefModelName" : "用户",
          "RefModelCode" : "GspUser",
          "RefModelPkgName" : "Inspur.GS.Gsp.Sys.User",
          "RefObjectID" : "c8b9b61f-fc8b-4d5f-921b-4f56a3b00a08",
          "RefObjectCode" : "GspUser",
          "RefObjectName" : "用户",
          "KeyCollection" : [ {
            "RefDataModelName" : "",
            "SourceElement" : "82e52824-f8e1-46a1-841f-0f65582eafac",
            "SourceElementDisplay" : "ID",
            "TargetElement" : "91031c6e-9ab4-4c20-96e5-c5afe4b3568c",
            "TargetElementDisplay" : "制单人"
          } ],
          "AssoModelInfo" : {
            "MainObjCode" : "GspUser",
            "ModelConfigId" : "GspUser"
          }
        } ],
        "ColumnID" : "a9e94053-ae4d-4ed9-a56d-0eb487f609f7",
        "Code" : "Applicant",
        "Name" : "制单人",
        "ObjectType" : "Association",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "1f1d2aeb-cb5a-4e1b-b186-c79a588506d5",
        "LabelID" : "DeliveryDate",
        "ChildAssociations" : [ ],
        "ColumnID" : "6f64faaa-5f6a-4a0c-bdfd-7b56b0ac4521",
        "Code" : "DeliveryDate",
        "Name" : "交货日期",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "ea0763c4-9c40-484b-b9bf-521977d759a7",
        "LabelID" : "PurchaseDept",
        "ChildAssociations" : [ {
          "ID" : "f9f7f6fd-68a4-430c-856a-adda5d47fd52",
          "RefElementCollection" : [ {
            "ID" : "f7137041-d0b0-4d7e-9a9e-72e312248866",
            "LabelID" : "PurchaseDept_ID",
            "ChildAssociations" : [ ],
            "ColumnID" : "f79d1852-9cd2-45dc-9b2a-5d222ea87119",
            "Code" : "ID",
            "Name" : "ID",
            "MDataType" : "String",
            "Length" : 36,
            "IsRefElement" : true,
            "RefElementID" : "0d45aea4-1327-403f-bda2-c9b5a933587b",
            "EnableRtrim" : true
          }, {
            "ID" : "5278749f-389a-4907-814d-e92ef6dc411d",
            "LabelID" : "PurchaseDept_name",
            "ChildAssociations" : [ ],
            "ColumnID" : "4fea2fa9-656a-4a90-9ff3-f9b25c3e2315",
            "Code" : "name",
            "Name" : "名称",
            "MDataType" : "String",
            "Length" : 100,
            "IsMultiLanguage" : true,
            "IsRefElement" : true,
            "RefElementID" : "a824ff6d-b08f-4b5c-b707-997d56760fb4",
            "EnableRtrim" : true
          } ],
          "RefModelID" : "2bedfc30-4b06-49ff-bbfe-3b996a5c2919",
          "RefModelName" : "系统组织",
          "RefModelCode" : "SysOrg",
          "RefModelPkgName" : "Inspur.GS.Gsp.Sys.SysOrg",
          "RefObjectID" : "51b2e509-92c6-4131-b395-6cf92b6e0bab",
          "RefObjectCode" : "SysOrg",
          "RefObjectName" : "系统组织",
          "KeyCollection" : [ {
            "RefDataModelName" : "",
            "SourceElement" : "0d45aea4-1327-403f-bda2-c9b5a933587b",
            "SourceElementDisplay" : "ID",
            "TargetElement" : "ea0763c4-9c40-484b-b9bf-521977d759a7",
            "TargetElementDisplay" : "采购部门"
          } ],
          "AssoModelInfo" : {
            "MainObjCode" : "SysOrg",
            "ModelConfigId" : "Inspur.GS.Gsp.Sys.SysOrg.SysOrg"
          }
        } ],
        "ColumnID" : "3634cec2-ca82-405d-9692-7b90c0802e07",
        "Code" : "PurchaseDept",
        "Name" : "采购部门",
        "ObjectType" : "Association",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "2c6dee8e-4334-4899-959f-d86c65ef742a",
        "LabelID" : "PlanCode",
        "ChildAssociations" : [ ],
        "ColumnID" : "bff2d937-3f5c-46c2-ac53-b9c6945ded86",
        "Code" : "PlanCode",
        "Name" : "计划编号",
        "MDataType" : "String",
        "Length" : 100,
        "EnableRtrim" : true,
        "BillCodeConfig" : {
          "CanBillCode" : true,
          "CodeGenerateOccasion" : "SavingTime",
          "BillCodeName" : "物料需求计划编码规则",
          "BillCodeID" : "72d6c255-dfd0-4a8a-9c57-ec7e1abe56b5"
        }
      }, {
        "ID" : "e4e5facc-7b66-4a4d-9815-49ba324e6a3e",
        "LabelID" : "PlanName",
        "ChildAssociations" : [ ],
        "ColumnID" : "86716a02-3f7c-4cf4-8fa9-4c4e5cca95b3",
        "Code" : "PlanName",
        "Name" : "计划名称",
        "MDataType" : "String",
        "Length" : 100,
        "EnableRtrim" : true
      }, {
        "ID" : "4dd5dbca-c35a-4682-b68f-f43fac43578a",
        "LabelID" : "IsPurchaseOrder",
        "ChildAssociations" : [ ],
        "ColumnID" : "6a08d5ec-806f-4d73-9a44-ede8fb06b9fe",
        "Code" : "IsPurchaseOrder",
        "Name" : "是否已生成采购订单",
        "MDataType" : "Boolean",
        "EnableRtrim" : true
      }, {
        "ID" : "1ad9a698-5b86-43a5-8314-d74c35081417",
        "LabelID" : "TotalPrice",
        "ChildAssociations" : [ ],
        "ColumnID" : "1c68b4d0-b952-4409-a7b9-710209481a4d",
        "Code" : "TotalPrice",
        "Name" : "物料总价",
        "MDataType" : "Decimal",
        "Length" : 18,
        "Precision" : 2,
        "EnableRtrim" : true
      }, {
        "ID" : "812ee4c5-0a8e-4cb8-a972-48340394a21a",
        "LabelID" : "Purchaser",
        "ChildAssociations" : [ {
          "ID" : "f039a9da-8150-4935-8af3-836b7aca3bef",
          "RefElementCollection" : [ {
            "ID" : "5f88594f-df81-4f26-a719-d03b027c9316",
            "LabelID" : "Purchaser_ID",
            "ChildAssociations" : [ ],
            "ColumnID" : "634b6100-feab-41e0-be8f-6f30987ac7fd",
            "Code" : "ID",
            "Name" : "ID",
            "MDataType" : "String",
            "Length" : 36,
            "IsRefElement" : true,
            "RefElementID" : "82e52824-f8e1-46a1-841f-0f65582eafac",
            "EnableRtrim" : true
          }, {
            "ID" : "38f06780-b7ea-4f5d-a18f-933f29cc2475",
            "LabelID" : "Purchaser_Name",
            "ChildAssociations" : [ ],
            "ColumnID" : "55569631-de1d-46a5-bf27-2d9663989d58",
            "Code" : "Name",
            "Name" : "名称",
            "MDataType" : "String",
            "Length" : 36,
            "IsMultiLanguage" : true,
            "IsRefElement" : true,
            "RefElementID" : "94fd1572-613c-4973-bf79-12e33c16a9ec",
            "EnableRtrim" : true
          } ],
          "RefModelID" : "c31ae4d9-8ee1-43ec-a526-09720fb3f4c9",
          "RefModelName" : "用户",
          "RefModelCode" : "GspUser",
          "RefModelPkgName" : "Inspur.GS.Gsp.Sys.User",
          "RefObjectID" : "c8b9b61f-fc8b-4d5f-921b-4f56a3b00a08",
          "RefObjectCode" : "GspUser",
          "RefObjectName" : "用户",
          "KeyCollection" : [ {
            "RefDataModelName" : "",
            "SourceElement" : "82e52824-f8e1-46a1-841f-0f65582eafac",
            "SourceElementDisplay" : "ID",
            "TargetElement" : "812ee4c5-0a8e-4cb8-a972-48340394a21a",
            "TargetElementDisplay" : "采购员"
          } ],
          "AssoModelInfo" : {
            "MainObjCode" : "GspUser",
            "ModelConfigId" : "GspUser"
          }
        } ],
        "ColumnID" : "bc259354-1716-43d6-a148-1110bc6926f2",
        "Code" : "Purchaser",
        "Name" : "采购员",
        "ObjectType" : "Association",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      } ],
      "ContainChildObjects" : [ {
        "ID" : "e79df43e-4606-42fb-a5c3-05507ae336cf",
        "Code" : "PlanDetails",
        "Name" : "物料需求计划明细",
        "I18nResourceInfoPrefix" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Back.MaterialPlan.PlanDetails",
        "ContainElements" : [ {
          "ID" : "a3848895-0099-4e24-99d1-3d79c66c890d",
          "LabelID" : "ID",
          "ChildAssociations" : [ ],
          "ColumnID" : "18811db8-3ad5-4343-af52-e46c803f9677",
          "Code" : "ID",
          "Name" : "主键",
          "MDataType" : "String",
          "Length" : 36,
          "IsRequire" : true,
          "EnableRtrim" : true
        }, {
          "ID" : "381aba57-3be3-4820-a83a-88ee5b9a307e",
          "LabelID" : "ParentID",
          "ChildAssociations" : [ ],
          "ColumnID" : "bcabfcd5-087a-4244-88f6-54e0dd716a48",
          "Code" : "ParentID",
          "Name" : "上级对象主键",
          "MDataType" : "String",
          "Length" : 36,
          "IsRequire" : true,
          "EnableRtrim" : true
        }, {
          "ID" : "cdbb84b0-3f0c-454a-91e7-adaf61861c4a",
          "LabelID" : "MaterialId",
          "ChildAssociations" : [ {
            "ID" : "35b15b74-6459-405b-995d-ab3922ea92fe",
            "RefElementCollection" : [ {
              "ID" : "e69a33f5-a8a0-4220-b863-ef35dfe908a5",
              "LabelID" : "MaterialId_ID",
              "ChildAssociations" : [ ],
              "ColumnID" : "a2fc31c3-0a63-41bd-be6b-217478b61588",
              "Code" : "ID",
              "Name" : "主键",
              "MDataType" : "String",
              "Length" : 36,
              "IsRefElement" : true,
              "RefElementID" : "0de50b8d-740e-453e-a35c-ca7ba1210bc2",
              "EnableRtrim" : true
            }, {
              "ID" : "d76916e1-137b-45fe-84d6-fdda6026e8ec",
              "LabelID" : "MaterialId_MaterialName",
              "ChildAssociations" : [ ],
              "ColumnID" : "134a87a6-d881-4f03-ab38-bf9500e6468f",
              "Code" : "MaterialName",
              "Name" : "物料名称",
              "MDataType" : "String",
              "Length" : 36,
              "IsRefElement" : true,
              "RefElementID" : "992df404-8f35-422c-8fd5-747cce6dfdd4",
              "EnableRtrim" : true
            }, {
              "ID" : "2d20381f-68ff-4997-a3e1-718e587e8ad6",
              "LabelID" : "MaterialId_MaterialCode",
              "ChildAssociations" : [ ],
              "ColumnID" : "6e0c25cd-c5bf-41d6-b6aa-d76d3044159d",
              "Code" : "MaterialCode",
              "Name" : "物料编号",
              "MDataType" : "String",
              "Length" : 36,
              "IsRefElement" : true,
              "RefElementID" : "224b47a4-d5d8-466f-9aa7-158632a910f8",
              "EnableRtrim" : true
            }, {
              "ID" : "197949e2-2a01-418e-ad6f-8406a96131f4",
              "LabelID" : "MaterialId_EvePrice",
              "ChildAssociations" : [ ],
              "ColumnID" : "2196b5f7-0909-46c8-bfb5-4a8563bd56ec",
              "Code" : "EvePrice",
              "Name" : "市场价格",
              "MDataType" : "Decimal",
              "Length" : 18,
              "Precision" : 2,
              "IsRefElement" : true,
              "RefElementID" : "645e75b8-57b3-4870-93c5-d3201dd28230",
              "EnableRtrim" : true
            }, {
              "ID" : "360d4fee-5bd9-47b6-b4b3-29e9abb3933c",
              "LabelID" : "MaterialId_MaterialCat_CatName",
              "ChildAssociations" : [ ],
              "ColumnID" : "97f8ed53-673a-4af3-879c-970df8445d63",
              "Code" : "CatName(MaterialCat)",
              "Name" : "类别名称",
              "MDataType" : "String",
              "Length" : 36,
              "IsRefElement" : true,
              "RefElementID" : "9ad02982-e619-4be1-a05b-f74658227c77",
              "EnableRtrim" : true
            } ],
            "RefModelID" : "29853816-a2dc-4688-9fe5-a7730091921b",
            "RefModelName" : "物料管理",
            "RefModelCode" : "Material",
            "RefModelPkgName" : "Inspur.GS.SCM.CM.Material.Material.Back",
            "RefObjectID" : "151304b9-1c4d-45fa-a572-b40a44ef6976",
            "RefObjectCode" : "Material",
            "RefObjectName" : "物料管理",
            "KeyCollection" : [ {
              "RefDataModelName" : "",
              "SourceElement" : "0de50b8d-740e-453e-a35c-ca7ba1210bc2",
              "SourceElementDisplay" : "主键",
              "TargetElement" : "cdbb84b0-3f0c-454a-91e7-adaf61861c4a",
              "TargetElementDisplay" : "物料名称"
            } ],
            "AssoModelInfo" : {
              "MainObjCode" : "Material",
              "ModelConfigId" : "Inspur.GS.SCM.CM.Material.Material.Back.Material"
            }
          } ],
          "ColumnID" : "552d6503-b36a-4c17-b784-4f86bd1620c7",
          "Code" : "MaterialId",
          "Name" : "物料名称",
          "ObjectType" : "Association",
          "MDataType" : "String",
          "Length" : 36,
          "EnableRtrim" : true
        }, {
          "ID" : "2e67e3c6-cab5-4c56-a769-d61d75fc92d8",
          "LabelID" : "MaterialAmount",
          "ChildAssociations" : [ ],
          "ColumnID" : "6ebc370a-454a-42b3-8cab-1018a6b53444",
          "Code" : "MaterialAmount",
          "Name" : "物料数量",
          "MDataType" : "Integer",
          "EnableRtrim" : true
        }, {
          "ID" : "1bc480be-69e8-446a-94f4-c64a3f81967a",
          "LabelID" : "Supplier",
          "ChildAssociations" : [ {
            "ID" : "236853a3-36b9-431b-b7ca-93fb833329d9",
            "RefElementCollection" : [ {
              "ID" : "5f1870bd-ecf9-4b87-b5e8-7e0a9d6dcd1d",
              "LabelID" : "Supplier_ID",
              "ChildAssociations" : [ ],
              "ColumnID" : "bab9781f-d6d9-4e7a-a87a-aeda9370932a",
              "Code" : "ID",
              "Name" : "主键",
              "MDataType" : "String",
              "Length" : 36,
              "IsRefElement" : true,
              "RefElementID" : "b75443b1-fb55-4068-9aea-9a4b8fb5e61f",
              "EnableRtrim" : true
            }, {
              "ID" : "ad60cfc7-d68c-4db3-872b-eb2ef710920d",
              "LabelID" : "Supplier_SupplierName",
              "ChildAssociations" : [ ],
              "ColumnID" : "c914a344-9ea2-49fd-b24e-c37d5945a799",
              "Code" : "SupplierName",
              "Name" : "供应商名称",
              "MDataType" : "String",
              "Length" : 36,
              "IsRefElement" : true,
              "RefElementID" : "72b4227c-c83a-4159-a688-525fbcc19e65",
              "EnableRtrim" : true
            }, {
              "ID" : "a38af11b-357b-4cd3-88ea-3a815391cacf",
              "LabelID" : "Supplier_SupplierCode",
              "ChildAssociations" : [ ],
              "ColumnID" : "bbc98087-276c-47ce-8d56-f060af3108ed",
              "Code" : "SupplierCode",
              "Name" : "供应商编号",
              "MDataType" : "String",
              "Length" : 36,
              "IsRefElement" : true,
              "RefElementID" : "a2ec4629-e536-49c6-8217-d330e7acda86",
              "EnableRtrim" : true
            }, {
              "ID" : "0940321d-9fd9-4e09-8cd8-09766b6aad9f",
              "LabelID" : "Supplier_ContactsEmail",
              "ChildAssociations" : [ ],
              "ColumnID" : "864c28cd-5a23-448c-acbe-d2fa0260afa3",
              "Code" : "ContactsEmail",
              "Name" : "联系人邮箱",
              "MDataType" : "String",
              "Length" : 100,
              "IsRefElement" : true,
              "RefElementID" : "01b6d66f-14ed-4bb6-8b91-53d29b818c95",
              "EnableRtrim" : true
            }, {
              "ID" : "b622973f-28bb-4aad-9955-183e10b99359",
              "LabelID" : "Supplier_ContactsAddress",
              "ChildAssociations" : [ ],
              "ColumnID" : "ee83a500-6e47-470a-acc7-2f429bac143d",
              "Code" : "ContactsAddress",
              "Name" : "办公地址",
              "MDataType" : "String",
              "Length" : 100,
              "IsRefElement" : true,
              "RefElementID" : "0b122d41-7a3b-494d-b086-894c924bcede",
              "EnableRtrim" : true
            } ],
            "RefModelID" : "73041b54-d424-45ed-9927-6be784dd1b91",
            "RefModelName" : "供应商管理",
            "RefModelCode" : "SupplierMa",
            "RefModelPkgName" : "Inspur.GS.SCM.CM.SupplierMa.SupplierMa.Back",
            "RefObjectID" : "598c8914-e7ec-47e6-be60-0fd8026aeedb",
            "RefObjectCode" : "SupplierMa",
            "RefObjectName" : "供应商管理",
            "KeyCollection" : [ {
              "RefDataModelName" : "",
              "SourceElement" : "b75443b1-fb55-4068-9aea-9a4b8fb5e61f",
              "SourceElementDisplay" : "主键",
              "TargetElement" : "1bc480be-69e8-446a-94f4-c64a3f81967a",
              "TargetElementDisplay" : "供应商"
            } ],
            "AssoModelInfo" : {
              "MainObjCode" : "SupplierMa",
              "ModelConfigId" : "Inspur.GS.SCM.CM.SupplierMa.SupplierMa.Back.SupplierMa"
            }
          } ],
          "ColumnID" : "085acfd4-ea06-4217-8731-b8898df2f2ba",
          "Code" : "Supplier",
          "Name" : "供应商",
          "ObjectType" : "Association",
          "MDataType" : "String",
          "Length" : 36,
          "EnableRtrim" : true
        } ],
        "RefObjectName" : "71775e6a-67a8-4d98-bfa2-e47c638bf8b5",
        "ObjectType" : 1,
        "ValBeforeSave" : [ {
          "ID" : "db9d34f4-6e74-43d5-8f26-33b3ef0b09b9",
          "Code" : "ValBeforeSave1",
          "Name" : "保存前校验1",
          "ComponentId" : "cff23a44-bd2c-4157-8448-6b7b9cc53ad2",
          "ComponentName" : "MaterialPlanValBeforeSave1ValidationController",
          "GetExecutingDataStatus" : 3,
          "RequestElements" : [ "2e67e3c6-cab5-4c56-a769-d61d75fc92d8" ]
        } ],
        "ColumnGenerateID" : {
          "ColumnParameters" : [ ],
          "ElementID" : "a3848895-0099-4e24-99d1-3d79c66c890d",
          "GenerateType" : "Guid"
        },
        "BelongModelID" : "2f520bf6-62e7-4482-a186-14cce865f5c5",
        "Keys" : [ {
          "RefDataModelName" : "",
          "SourceElement" : "381aba57-3be3-4820-a83a-88ee5b9a307e",
          "SourceElementDisplay" : "上级对象主键",
          "TargetElement" : "07bb376b-1a62-446b-bc38-c0d47041489c",
          "TargetElementDisplay" : "主键"
        } ],
        "ParentObjectID" : "56979590-98b2-4fc0-a7f6-45774f2a82f5"
      } ],
      "RefObjectName" : "d31f043d-dd56-4fec-8392-efc6083c6126",
      "DtmAfterCreate" : [ {
        "ID" : "ba5a515d-2d70-48c4-9e4d-46804cb7aff6",
        "Code" : "DtmAfterCreate1",
        "Name" : "新增后1",
        "ComponentId" : "f0786d74-3a1f-40de-8ada-bef6b6b757ec",
        "ComponentName" : "MaterialPlanDtmAfterCreate1DeterminationController"
      } ],
      "ColumnGenerateID" : {
        "ColumnParameters" : [ ],
        "ElementID" : "07bb376b-1a62-446b-bc38-c0d47041489c",
        "GenerateType" : "Guid"
      },
      "BelongModelID" : "2f520bf6-62e7-4482-a186-14cce865f5c5"
    },
    "Variables" : {
      "ID" : "0d98aab3-5b25-4942-a0a0-bd985a7decc6",
      "Code" : "MaterialPlanVariable",
      "Name" : "物料需求计划变量",
      "I18nResourceInfoPrefix" : ""
    },
    "ComponentAssemblyName" : "Inspur.GS.SCM.CM.MaterialPlan.MaterialPlan.Back",
    "EnableApproval" : true
  },
  "ExtendRule" : null,
  "RelativePath" : "SCM/CM/MaterialPlan/bo-materialplan-back/metadata/be",
  "ExtendProperty" : "{\"enableEntryBills\":true}",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}