{
  "Header" : {
    "Code" : "PurchaseOrder",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Back",
    "CertId" : null,
    "Name" : "采购订单",
    "FileName" : "PurchaseOrder.be",
    "BizobjectID" : "8de461f4-9c5e-b7fc-9d76-c1108500332d",
    "Language" : null,
    "Extendable" : false,
    "ID" : "385d8182-1b4a-4c7d-9d7f-2fe1ca5283ab",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "10e99d19-f54d-47ba-8eb1-1fa5b95aeaf7",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Back",
      "Code" : "PurchaseOrderInstorage1MgrActionController",
      "Name" : "PurchaseOrderInstorage1MgrActionController",
      "Type" : "BEMgrComponent",
      "BizobjectID" : "8de461f4-9c5e-b7fc-9d76-c1108500332d"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "9cb76bef-32b9-4190-994c-5fdedbbf7a06",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Back",
      "Code" : "PurchaseOrderInstorage2MgrActionController",
      "Name" : "PurchaseOrderInstorage2MgrActionController",
      "Type" : "BEMgrComponent",
      "BizobjectID" : "8de461f4-9c5e-b7fc-9d76-c1108500332d"
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
      "ID" : "5c6d9a0a-9832-4578-8d28-1d4a7d1358d6",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Back",
      "Code" : "PurchaseOrderInstorageActionController",
      "Name" : "PurchaseOrderInstorageActionController",
      "Type" : "BEComponent",
      "BizobjectID" : "8de461f4-9c5e-b7fc-9d76-c1108500332d"
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
      "ID" : "a4bbba60-2498-412c-90d9-8af43648eeaa",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Back",
      "Code" : "PurchaseOrder.be",
      "Name" : "PurchaseOrder.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "8de461f4-9c5e-b7fc-9d76-c1108500332d"
    }
  } ],
  "Content" : {
    "ID" : "385d8182-1b4a-4c7d-9d7f-2fe1ca5283ab",
    "Code" : "PurchaseOrder",
    "Name" : "采购订单",
    "GeneratingAssembly" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Back",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "54062df1-ee9b-4d98-9786-d3128079de48"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "120a9661-6a12-4ed1-b3cb-e25ce7237ee5",
      "Code" : "PurchaseOrder",
      "Name" : "采购订单",
      "I18nResourceInfoPrefix" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Back.PurchaseOrder.PurchaseOrder",
      "ContainElements" : [ {
        "ID" : "84716942-25df-4331-bc60-68b58a709def",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "59ba33a0-55aa-4bb0-a754-5a202f563a23",
        "Code" : "ID",
        "Name" : "主键",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "54062df1-ee9b-4d98-9786-d3128079de48",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "732ee0cc-5723-4aa5-b20e-97b520ca5036",
        "Code" : "Version",
        "Name" : "版本",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "92e481e0-6319-469d-abf1-ed4f5e307616",
        "LabelID" : "OrderCode",
        "ChildAssociations" : [ ],
        "ColumnID" : "1720fe5a-883b-4549-a0a2-eadbdd069024",
        "Code" : "OrderCode",
        "Name" : "订单编号",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "51cbe9c9-cbdc-43ba-b5b7-7e780bad2446",
        "LabelID" : "OrderName",
        "ChildAssociations" : [ ],
        "ColumnID" : "7e79c9ae-cf24-4945-b6b8-24237abd2339",
        "Code" : "OrderName",
        "Name" : "订单名称",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "d7f31d86-5075-49a4-896c-a67c4018951f",
        "LabelID" : "PurchaseDept",
        "ChildAssociations" : [ {
          "ID" : "77e5638b-b411-490b-88b5-dce038429686",
          "RefElementCollection" : [ {
            "ID" : "e51a7fac-6802-4cab-b40c-9fbfbee4b258",
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
            "ID" : "22b66b05-d199-4b5b-b661-e136f55020e2",
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
            "TargetElement" : "d7f31d86-5075-49a4-896c-a67c4018951f",
            "TargetElementDisplay" : "采购部门"
          } ],
          "AssoModelInfo" : {
            "MainObjCode" : "SysOrg",
            "ModelConfigId" : "Inspur.GS.Gsp.Sys.SysOrg.SysOrg"
          }
        } ],
        "ColumnID" : "2f2d2b77-9173-4731-bea8-ade304b24ae8",
        "Code" : "PurchaseDept",
        "Name" : "采购部门",
        "ObjectType" : "Association",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "5065118c-d406-4773-9af2-468a0267dba8",
        "LabelID" : "Purchaser",
        "ChildAssociations" : [ {
          "ID" : "57e9e09f-9b5c-4d6a-a497-4d5d7db904b4",
          "RefElementCollection" : [ {
            "ID" : "b9ef4855-ffde-4559-a29d-5d2982572c93",
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
            "ID" : "26bbc3e5-0338-43cb-9318-6d1e10198498",
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
            "TargetElement" : "5065118c-d406-4773-9af2-468a0267dba8",
            "TargetElementDisplay" : "采购员"
          } ],
          "AssoModelInfo" : {
            "MainObjCode" : "GspUser",
            "ModelConfigId" : "GspUser"
          }
        } ],
        "ColumnID" : "16506415-9df0-4d09-8bea-8072d0f90e34",
        "Code" : "Purchaser",
        "Name" : "采购员",
        "ObjectType" : "Association",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "75905c8d-abca-4e25-8ee6-eac24dbfc59a",
        "LabelID" : "OrderDate",
        "ChildAssociations" : [ ],
        "ColumnID" : "57388fe5-e566-4bd5-9d88-069f59f44c0d",
        "Code" : "OrderDate",
        "Name" : "下单日期",
        "MDataType" : "Date",
        "DefaultValue" : "{\"expr\":\"DefaultFunction.Today(DefaultFunction.GetDateTimeNow())\",\"sexpr\":\"\"}",
        "DefaultValueType" : 1,
        "EnableRtrim" : true
      }, {
        "ID" : "ab277394-bbf4-4374-9272-14cb3bc49f7c",
        "LabelID" : "TotalPrice",
        "ChildAssociations" : [ ],
        "ColumnID" : "a54b50b6-004e-4860-8f26-cfb62d6d62ec",
        "Code" : "TotalPrice",
        "Name" : "物料总价",
        "MDataType" : "Decimal",
        "Length" : 18,
        "Precision" : 2,
        "EnableRtrim" : true
      }, {
        "ID" : "d2d1af6a-b1f1-4ab2-ba47-c672cc8f0866",
        "LabelID" : "BillStatus",
        "ChildAssociations" : [ ],
        "ChildElements" : [ {
          "ID" : "9a8b1809-5759-4dbe-a409-1e837146b4f7",
          "LabelID" : "BillStatus_BillState",
          "I18nResourceInfoPrefix" : "",
          "ChildAssociations" : [ ],
          "ColumnID" : "ea11e6eb-0ef6-4053-9399-9a0ac519ac74",
          "Code" : "BillStatus_BillState",
          "Name" : "状态",
          "MDataType" : "String",
          "Length" : 36,
          "EnableRtrim" : true
        } ],
        "ColumnID" : "ea11e6eb-0ef6-4053-9399-9a0ac519ac74",
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
          "I18nResourceInfoPrefix" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Back.PurchaseOrder.PurchaseOrder.BillStatus.Billing",
          "Index" : 0,
          "IsDefaultEnum" : true,
          "Name" : "制单",
          "StringIndex" : "",
          "Value" : "Billing"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Back.PurchaseOrder.PurchaseOrder.BillStatus.SubmitApproval",
          "Index" : 1,
          "IsDefaultEnum" : false,
          "Name" : "提交审批",
          "StringIndex" : "",
          "Value" : "SubmitApproval"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Back.PurchaseOrder.PurchaseOrder.BillStatus.Approved",
          "Index" : 2,
          "IsDefaultEnum" : false,
          "Name" : "审批通过",
          "StringIndex" : "",
          "Value" : "Approved"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Back.PurchaseOrder.PurchaseOrder.BillStatus.ApprovalNotPassed",
          "Index" : 3,
          "IsDefaultEnum" : false,
          "Name" : "审批不通过",
          "StringIndex" : "",
          "Value" : "ApprovalNotPassed"
        } ],
        "MappingRelation" : [ {
          "9a8b1809-5759-4dbe-a409-1e837146b4f7" : "a0b19650-0101-468f-ae3f-40c76c0f06b0"
        } ]
      }, {
        "ID" : "22212bcb-6437-4a44-903b-1d22fe869eb7",
        "LabelID" : "IsFinished",
        "ChildAssociations" : [ ],
        "ColumnID" : "09f7e25d-6292-4f55-99a1-8d505fd413a8",
        "Code" : "IsFinished",
        "Name" : "入库状态",
        "ObjectType" : "Enum",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true,
        "EnumIndexType" : 1,
        "ContainEnumValues" : [ {
          "I18nResourceInfoPrefix" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Back.PurchaseOrder.PurchaseOrder.IsFinished.yes",
          "Index" : 0,
          "IsDefaultEnum" : false,
          "Name" : "已入库",
          "StringIndex" : "yes",
          "Value" : "yes"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Back.PurchaseOrder.PurchaseOrder.IsFinished.no",
          "Index" : 1,
          "IsDefaultEnum" : true,
          "Name" : "未入库",
          "StringIndex" : "no",
          "Value" : "no"
        } ]
      } ],
      "ContainChildObjects" : [ {
        "ID" : "a8a3638c-c8e4-4ba1-b3a2-d32e0b4252af",
        "Code" : "OrderDetails",
        "Name" : "采购订单明细",
        "I18nResourceInfoPrefix" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Back.PurchaseOrder.OrderDetails",
        "ContainElements" : [ {
          "ID" : "da6b98da-0362-4550-8fcf-9f1f67a15e68",
          "LabelID" : "ID",
          "ChildAssociations" : [ ],
          "ColumnID" : "497c9d00-cb5c-4c3a-832a-2dbb578d4fe9",
          "Code" : "ID",
          "Name" : "主键",
          "MDataType" : "String",
          "Length" : 36,
          "IsRequire" : true,
          "EnableRtrim" : true
        }, {
          "ID" : "1f118eb9-0903-4213-b0e6-0de5718f9592",
          "LabelID" : "ParentID",
          "ChildAssociations" : [ ],
          "ColumnID" : "919f6623-ae28-43cb-af69-3dd70913df0b",
          "Code" : "ParentID",
          "Name" : "上级对象主键",
          "MDataType" : "String",
          "Length" : 36,
          "IsRequire" : true,
          "EnableRtrim" : true
        }, {
          "ID" : "d4596c9c-52ee-4c34-9598-66ab0fa07569",
          "LabelID" : "MaterialId",
          "ChildAssociations" : [ {
            "ID" : "e577212f-9025-4cb3-a15e-dc1506535fcd",
            "RefElementCollection" : [ {
              "ID" : "edbd5cd0-d1f8-4904-b3f7-99e77cf716f3",
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
              "ID" : "41bd82ec-b222-4268-8fd7-afb81edeb9f4",
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
              "ID" : "fe968c13-0ccf-4d48-9a21-0ec3f6e3c9ad",
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
              "ID" : "5320874d-93c1-4c7c-8c18-393a1b2b856e",
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
              "ID" : "b683f193-69e5-4ff2-babb-4dcfc3a7917a",
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
            "RefObjectID" : "151304b9-1c4d-45fa-a572-b40a44ef6976",
            "RefObjectCode" : "Material",
            "RefObjectName" : "物料管理",
            "KeyCollection" : [ {
              "RefDataModelName" : "",
              "SourceElement" : "0de50b8d-740e-453e-a35c-ca7ba1210bc2",
              "SourceElementDisplay" : "主键",
              "TargetElement" : "d4596c9c-52ee-4c34-9598-66ab0fa07569",
              "TargetElementDisplay" : "物料名称"
            } ],
            "AssoModelInfo" : {
              "MainObjCode" : "Material",
              "ModelConfigId" : "Inspur.GS.SCM.CM.Material.Material.Back.Material"
            }
          } ],
          "ColumnID" : "2b3a105b-6f82-46f1-9b54-8b2bb84c08d0",
          "Code" : "MaterialId",
          "Name" : "物料名称",
          "ObjectType" : "Association",
          "MDataType" : "String",
          "Length" : 36,
          "EnableRtrim" : true
        }, {
          "ID" : "6281f224-cd5e-4ebb-bbc6-d95b861ee2d0",
          "LabelID" : "Amount",
          "ChildAssociations" : [ ],
          "ColumnID" : "4db51899-6a3f-414f-8817-78b32d7a3c0f",
          "Code" : "Amount",
          "Name" : "物料数量",
          "MDataType" : "Integer",
          "EnableRtrim" : true
        }, {
          "ID" : "4da0a841-ac91-4c3f-bc24-38dd3f20fafe",
          "LabelID" : "Supplier",
          "ChildAssociations" : [ {
            "ID" : "64aea18c-48fc-40f1-b3cb-33ce602487bc",
            "RefElementCollection" : [ {
              "ID" : "6963653a-a432-4ef2-bba9-867ab86c7c9e",
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
              "ID" : "76bb75f2-0631-4647-aa6a-b1cb26298947",
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
              "ID" : "bd689c49-584f-4b82-bede-44aad66bbd04",
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
              "ID" : "b0bd766e-7024-4e7f-abe7-026d9511adb4",
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
              "ID" : "28bed593-c52e-4810-839b-97ae925f10cc",
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
            "RefObjectID" : "598c8914-e7ec-47e6-be60-0fd8026aeedb",
            "RefObjectCode" : "SupplierMa",
            "RefObjectName" : "供应商管理",
            "KeyCollection" : [ {
              "RefDataModelName" : "",
              "SourceElement" : "b75443b1-fb55-4068-9aea-9a4b8fb5e61f",
              "SourceElementDisplay" : "主键",
              "TargetElement" : "4da0a841-ac91-4c3f-bc24-38dd3f20fafe",
              "TargetElementDisplay" : "供应商"
            } ],
            "AssoModelInfo" : {
              "MainObjCode" : "SupplierMa",
              "ModelConfigId" : "Inspur.GS.SCM.CM.SupplierMa.SupplierMa.Back.SupplierMa"
            }
          } ],
          "ColumnID" : "8abae53c-9b11-49df-b807-315d336d0677",
          "Code" : "Supplier",
          "Name" : "供应商",
          "ObjectType" : "Association",
          "MDataType" : "String",
          "Length" : 36,
          "EnableRtrim" : true
        } ],
        "RefObjectName" : "cbad2b23-463a-4497-8069-6b5af3ce5c8d",
        "ObjectType" : 1,
        "ColumnGenerateID" : {
          "ColumnParameters" : [ ],
          "ElementID" : "da6b98da-0362-4550-8fcf-9f1f67a15e68",
          "GenerateType" : "Guid"
        },
        "BelongModelID" : "385d8182-1b4a-4c7d-9d7f-2fe1ca5283ab",
        "Keys" : [ {
          "RefDataModelName" : "",
          "SourceElement" : "1f118eb9-0903-4213-b0e6-0de5718f9592",
          "SourceElementDisplay" : "上级对象主键",
          "TargetElement" : "84716942-25df-4331-bc60-68b58a709def",
          "TargetElementDisplay" : "主键"
        } ],
        "ParentObjectID" : "120a9661-6a12-4ed1-b3cb-e25ce7237ee5"
      } ],
      "RefObjectName" : "75345674-eb68-4e3e-834f-0317ce3ca680",
      "BizActions" : [ {
        "ID" : "69326c64-27fb-49d8-b6d8-e89a61420412",
        "Code" : "Instorage",
        "Name" : "入库",
        "ComponentId" : "5c6d9a0a-9832-4578-8d28-1d4a7d1358d6",
        "ComponentName" : "PurchaseOrderInstorageActionController",
        "Parameters" : [ {
          "ID" : "e5813ce1-4692-42b2-b778-a5d999b645aa",
          "ParamCode" : "IsFinished",
          "ParamName" : "入库状态",
          "ParameterType" : 0,
          "Assembly" : "mscorlib.dll",
          "ClassName" : "System.String",
          "JavaClassName" : "java.lang.String"
        } ],
        "ReturnValue" : {
          "ID" : "a2758127-85af-48de-a549-24deff4cf424",
          "ParameterType" : 0,
          "Assembly" : "mscorlib.dll",
          "ClassName" : "System.String",
          "JavaClassName" : "java.lang.String",
          "Mode" : 1
        }
      } ],
      "ColumnGenerateID" : {
        "ColumnParameters" : [ ],
        "ElementID" : "84716942-25df-4331-bc60-68b58a709def",
        "GenerateType" : "Guid"
      },
      "BelongModelID" : "385d8182-1b4a-4c7d-9d7f-2fe1ca5283ab"
    },
    "Variables" : {
      "ID" : "8ba5157c-83e4-40f1-b1cd-d21f91251adc",
      "Code" : "PurchaseOrderVariable",
      "Name" : "采购订单变量",
      "I18nResourceInfoPrefix" : ""
    },
    "BizMgrActions" : [ {
      "ID" : "0c68c671-c859-4e8c-a0d7-6ff93f9cb76e",
      "Code" : "Instorage1",
      "Name" : "入库1",
      "ComponentId" : "10e99d19-f54d-47ba-8eb1-1fa5b95aeaf7",
      "ComponentName" : "PurchaseOrderInstorage1MgrActionController",
      "Parameters" : [ {
        "ID" : "3fb4c53d-8a20-4f0b-b575-d9e6d8d00411",
        "ParamCode" : "id",
        "ParamName" : "id",
        "ParameterType" : 0,
        "Assembly" : "mscorlib.dll",
        "ClassName" : "System.String",
        "JavaClassName" : "java.lang.String"
      }, {
        "ID" : "48e311c6-f3e7-4dc8-b8de-3b5d5b4d346a",
        "ParamCode" : "IsFinished",
        "ParamName" : "是否入库",
        "ParameterType" : 0,
        "Assembly" : "mscorlib.dll",
        "ClassName" : "System.String",
        "JavaClassName" : "java.lang.String"
      } ],
      "ReturnValue" : {
        "ID" : "354f5899-8077-4552-abec-822757579f55",
        "ParameterType" : 0,
        "Assembly" : "mscorlib.dll",
        "ClassName" : "System.String",
        "JavaClassName" : "java.lang.String",
        "Mode" : 1
      }
    }, {
      "ID" : "1c1d089f-2d08-438f-9375-d3bedce51569",
      "Code" : "Instorage2",
      "Name" : "入库2",
      "ComponentId" : "9cb76bef-32b9-4190-994c-5fdedbbf7a06",
      "ComponentName" : "PurchaseOrderInstorage2MgrActionController",
      "Parameters" : [ {
        "ID" : "966e61b1-3379-4de9-9ff2-bbed296f8115",
        "ParamCode" : "template",
        "ParamName" : "模板标识",
        "ParameterType" : 0,
        "Assembly" : "mscorlib.dll",
        "ClassName" : "System.String",
        "JavaClassName" : "java.lang.String"
      } ],
      "ReturnValue" : {
        "ID" : "be97c63d-0251-4872-8f35-76e91e18c2dd",
        "ParameterType" : 0,
        "Assembly" : "mscorlib.dll",
        "ClassName" : "System.String",
        "JavaClassName" : "java.lang.String",
        "Mode" : 1
      }
    } ],
    "ComponentAssemblyName" : "Inspur.GS.SCM.CM.PurchaseOrder.PurchaseOrder.Back"
  },
  "ExtendRule" : null,
  "RelativePath" : "SCM/CM/PurchaseOrder/bo-purchaseorder-back/metadata/be",
  "ExtendProperty" : "{\"enableEntryBills\":false}",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}