{
  "Header" : {
    "Code" : "SupplierMa",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.SCM.CM.SupplierMa.SupplierMa.Back",
    "CertId" : null,
    "Name" : "供应商管理",
    "FileName" : "SupplierMa.be",
    "BizobjectID" : "ca0af27e-3ff4-a99d-a4e5-aec1c23a5eb7",
    "Language" : null,
    "Extendable" : false,
    "ID" : "73041b54-d424-45ed-9927-6be784dd1b91",
    "IsTranslating" : false
  },
  "Refs" : [ {
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
      "ID" : "e626fbfd-e7a7-432f-82b8-61898a55338c",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.SCM.CM.SupplierMa.SupplierMa.Back",
      "Code" : "SupplierMa.be",
      "Name" : "SupplierMa.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "ca0af27e-3ff4-a99d-a4e5-aec1c23a5eb7"
    }
  } ],
  "Content" : {
    "ID" : "73041b54-d424-45ed-9927-6be784dd1b91",
    "Code" : "SupplierMa",
    "Name" : "供应商管理",
    "GeneratingAssembly" : "Inspur.GS.SCM.CM.SupplierMa.SupplierMa.Back",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "dd398acd-c496-474c-974b-b1c3dfa443f1"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "598c8914-e7ec-47e6-be60-0fd8026aeedb",
      "Code" : "SupplierMa",
      "Name" : "供应商管理",
      "I18nResourceInfoPrefix" : "Inspur.GS.SCM.CM.SupplierMa.SupplierMa.Back.SupplierMa.SupplierMa",
      "ContainElements" : [ {
        "ID" : "b75443b1-fb55-4068-9aea-9a4b8fb5e61f",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "bab9781f-d6d9-4e7a-a87a-aeda9370932a",
        "Code" : "ID",
        "Name" : "主键",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "dd398acd-c496-474c-974b-b1c3dfa443f1",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "fbde67c3-c0db-4a20-964a-7ad83f8c931a",
        "Code" : "Version",
        "Name" : "版本",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "72b4227c-c83a-4159-a688-525fbcc19e65",
        "LabelID" : "SupplierName",
        "ChildAssociations" : [ ],
        "ColumnID" : "c914a344-9ea2-49fd-b24e-c37d5945a799",
        "Code" : "SupplierName",
        "Name" : "供应商名称",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "a2ec4629-e536-49c6-8217-d330e7acda86",
        "LabelID" : "SupplierCode",
        "ChildAssociations" : [ ],
        "ColumnID" : "bbc98087-276c-47ce-8d56-f060af3108ed",
        "Code" : "SupplierCode",
        "Name" : "供应商编号",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true,
        "BillCodeConfig" : {
          "CanBillCode" : true,
          "CodeGenerateOccasion" : "SavingTime",
          "BillCodeName" : "供应商管理编码",
          "BillCodeID" : "e7c2745b-ed21-457e-b2ac-7c8183bda0f7"
        }
      }, {
        "ID" : "bdb99e20-bdf0-46e4-a52b-9f83f81db8bf",
        "LabelID" : "Contacts",
        "ChildAssociations" : [ {
          "ID" : "1a95777a-e315-49f3-a50d-58a6101ac8a3",
          "RefElementCollection" : [ {
            "ID" : "62bc84ac-72cc-4a50-98fb-c5889270bba2",
            "LabelID" : "Contacts_ID",
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
            "ID" : "10f7bd78-1104-4ef7-9521-c673a86def5b",
            "LabelID" : "Contacts_Name",
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
          }, {
            "ID" : "deffd10a-158d-44e0-b1a6-6a1916787b07",
            "LabelID" : "Contacts_Code",
            "ChildAssociations" : [ ],
            "ColumnID" : "3c737876-3ae5-4018-960e-b9337a0afb94",
            "Code" : "Code",
            "Name" : "编号",
            "MDataType" : "String",
            "Length" : 36,
            "IsRefElement" : true,
            "RefElementID" : "9d25e0d7-0fb7-435f-a2de-438d371b97e4",
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
            "TargetElement" : "bdb99e20-bdf0-46e4-a52b-9f83f81db8bf",
            "TargetElementDisplay" : "联系人姓名"
          } ],
          "AssoModelInfo" : {
            "MainObjCode" : "GspUser",
            "ModelConfigId" : "GspUser"
          }
        } ],
        "ColumnID" : "cc914dca-60c7-4d3e-8b16-9e0f4eba1903",
        "Code" : "Contacts",
        "Name" : "联系人姓名",
        "ObjectType" : "Association",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "01b6d66f-14ed-4bb6-8b91-53d29b818c95",
        "LabelID" : "ContactsEmail",
        "ChildAssociations" : [ ],
        "ColumnID" : "864c28cd-5a23-448c-acbe-d2fa0260afa3",
        "Code" : "ContactsEmail",
        "Name" : "联系人邮箱",
        "MDataType" : "String",
        "Length" : 100,
        "EnableRtrim" : true
      }, {
        "ID" : "0b122d41-7a3b-494d-b086-894c924bcede",
        "LabelID" : "ContactsAddress",
        "ChildAssociations" : [ ],
        "ColumnID" : "ee83a500-6e47-470a-acc7-2f429bac143d",
        "Code" : "ContactsAddress",
        "Name" : "办公地址",
        "MDataType" : "String",
        "Length" : 100,
        "EnableRtrim" : true
      }, {
        "ID" : "0ba7bf99-5240-44bf-9b46-1e94274f4120",
        "LabelID" : "SignTime",
        "ChildAssociations" : [ ],
        "ColumnID" : "52efda4c-eb35-40f7-a84f-ffa69f15fbe7",
        "Code" : "SignTime",
        "Name" : "注册时间",
        "MDataType" : "DateTime",
        "DefaultValue" : "{\"expr\":\"DefaultFunction.GetDateTimeNow()\",\"sexpr\":\"\"}",
        "DefaultValueType" : 1,
        "EnableRtrim" : true
      }, {
        "ID" : "2f29a14a-68d6-4e64-bd86-f4e3b172a074",
        "LabelID" : "Remark",
        "ChildAssociations" : [ ],
        "ColumnID" : "603fff40-533f-4715-b2bb-e48c7d836cba",
        "Code" : "Remark",
        "Name" : "备注",
        "MDataType" : "Text",
        "Length" : 4000,
        "EnableRtrim" : true
      } ],
      "ContainChildObjects" : [ {
        "ID" : "3a13c5fa-b683-4f35-a6d9-c6ad12e2531e",
        "Code" : "SupplierMaterial",
        "Name" : "供应商对应物料",
        "I18nResourceInfoPrefix" : "Inspur.GS.SCM.CM.SupplierMa.SupplierMa.Back.SupplierMa.SupplierMaterial",
        "ContainElements" : [ {
          "ID" : "ead8239d-3e0c-45c2-8c27-be85f0e04314",
          "LabelID" : "ID",
          "ChildAssociations" : [ ],
          "ColumnID" : "fe19eef0-adb8-4ec8-bc87-2955659a7382",
          "Code" : "ID",
          "Name" : "主键",
          "MDataType" : "String",
          "Length" : 36,
          "IsRequire" : true,
          "EnableRtrim" : true
        }, {
          "ID" : "8b66d411-303f-499f-a7e9-7a13eb5ec86a",
          "LabelID" : "ParentID",
          "ChildAssociations" : [ ],
          "ColumnID" : "292a72bb-ea60-4cad-8133-f507582e5efe",
          "Code" : "ParentID",
          "Name" : "上级对象主键",
          "MDataType" : "String",
          "Length" : 36,
          "IsRequire" : true,
          "EnableRtrim" : true
        }, {
          "ID" : "1d4c45bc-d0b9-44c8-970f-44f5a78ae790",
          "LabelID" : "MaterialId",
          "ChildAssociations" : [ {
            "ID" : "88e75f89-8c5c-4c72-b7f2-f316d8f5cd0e",
            "RefElementCollection" : [ {
              "ID" : "f60cd78f-4843-4048-a230-a476f841c24d",
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
              "ID" : "c5005d10-80b3-4ed2-aa77-936f084310a7",
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
              "ID" : "cba1e3b0-d077-4bec-8bd1-3dd8a39158c3",
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
              "ID" : "2677a2f4-8ac3-4f69-ba6a-0d7d3b53d594",
              "LabelID" : "MaterialId_MaterialCat",
              "ChildAssociations" : [ ],
              "ColumnID" : "f4fb7961-b515-43d7-b5da-05abb16a3df4",
              "Code" : "MaterialCat",
              "Name" : "物料类别",
              "ObjectType" : "Association",
              "MDataType" : "String",
              "Length" : 36,
              "IsRefElement" : true,
              "RefElementID" : "c624a49c-77b0-431b-a2e7-40f982dc179b",
              "EnableRtrim" : true
            }, {
              "ID" : "53496617-ae35-499b-8376-f2f001245ac6",
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
              "ID" : "bc2ceb87-f337-4ded-8bb7-c53e5eede6c4",
              "LabelID" : "MaterialId_Repertory",
              "ChildAssociations" : [ ],
              "ColumnID" : "52948dc2-87d1-4cac-b0eb-46027b4da49e",
              "Code" : "Repertory",
              "Name" : "库存数量",
              "MDataType" : "Integer",
              "IsRefElement" : true,
              "RefElementID" : "ac61cafb-b1d9-4f1e-8a3d-c4f7ff604872",
              "EnableRtrim" : true
            }, {
              "ID" : "98f0b1b3-33e3-490a-8530-fa995944839b",
              "LabelID" : "MaterialId_MaterialCat_ID",
              "ChildAssociations" : [ ],
              "ColumnID" : "749d4aa0-b221-48d2-a0c1-bbc564d40c11",
              "Code" : "ID(MaterialCat)",
              "Name" : "主键",
              "MDataType" : "String",
              "Length" : 36,
              "IsRefElement" : true,
              "RefElementID" : "18d36c75-e0fe-4230-a015-15a2378f62e1",
              "EnableRtrim" : true
            }, {
              "ID" : "168a337d-0114-4138-ab4a-0465b323d6ca",
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
            }, {
              "ID" : "77fb7de5-bd0d-42a0-a414-9127d1253b8a",
              "LabelID" : "MaterialId_MaterialCat_CatCode",
              "ChildAssociations" : [ ],
              "ColumnID" : "b0c8a261-b97c-4c11-baf9-73ed682a9d00",
              "Code" : "CatCode(MaterialCat)",
              "Name" : "类别编号",
              "MDataType" : "String",
              "Length" : 36,
              "IsRefElement" : true,
              "RefElementID" : "0a9c289c-46e4-4eb4-b6e3-583ed5a30ba9",
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
              "TargetElement" : "1d4c45bc-d0b9-44c8-970f-44f5a78ae790",
              "TargetElementDisplay" : "物料名称"
            } ],
            "AssoModelInfo" : {
              "MainObjCode" : "Material",
              "ModelConfigId" : "Inspur.GS.SCM.CM.Material.Material.Back.Material"
            }
          } ],
          "ColumnID" : "a70fd325-1402-477e-89ab-fde93f8f00f9",
          "Code" : "MaterialId",
          "Name" : "物料名称",
          "ObjectType" : "Association",
          "MDataType" : "String",
          "Length" : 36,
          "EnableRtrim" : true
        } ],
        "RefObjectName" : "2b469a75-b5c9-44fc-947c-df0e1f71cc9c",
        "ObjectType" : 1,
        "ColumnGenerateID" : {
          "ColumnParameters" : [ ],
          "ElementID" : "ead8239d-3e0c-45c2-8c27-be85f0e04314",
          "GenerateType" : "Guid"
        },
        "BelongModelID" : "73041b54-d424-45ed-9927-6be784dd1b91",
        "Keys" : [ {
          "RefDataModelName" : "",
          "SourceElement" : "8b66d411-303f-499f-a7e9-7a13eb5ec86a",
          "SourceElementDisplay" : "上级对象主键",
          "TargetElement" : "b75443b1-fb55-4068-9aea-9a4b8fb5e61f",
          "TargetElementDisplay" : "主键"
        } ],
        "ParentObjectID" : "598c8914-e7ec-47e6-be60-0fd8026aeedb"
      } ],
      "RefObjectName" : "85d24bb0-5559-4647-8cab-4b84c9bcb5b5",
      "ColumnGenerateID" : {
        "ColumnParameters" : [ ],
        "ElementID" : "b75443b1-fb55-4068-9aea-9a4b8fb5e61f",
        "GenerateType" : "Guid"
      },
      "BelongModelID" : "73041b54-d424-45ed-9927-6be784dd1b91"
    },
    "Variables" : {
      "ID" : "504dbdae-01f5-47f4-a58a-e150150c2cc2",
      "Code" : "SupplierMaVariable",
      "Name" : "供应商管理变量",
      "I18nResourceInfoPrefix" : ""
    },
    "ComponentAssemblyName" : "Inspur.GS.SCM.CM.SupplierMa.SupplierMa.Back"
  },
  "ExtendRule" : null,
  "RelativePath" : "SCM/CM/SupplierMa/bo-supplierma-back/metadata/be",
  "ExtendProperty" : "{\"enableEntryBills\":false}",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}