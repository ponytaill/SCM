{
  "Header" : {
    "Code" : "Material",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.SCM.CM.Material.Material.Back",
    "CertId" : null,
    "Name" : "物料管理",
    "FileName" : "Material.be",
    "BizobjectID" : "d8bf8331-1d31-69b0-b6b6-d1ea9f4bba96",
    "Language" : null,
    "Extendable" : false,
    "ID" : "29853816-a2dc-4688-9fe5-a7730091921b",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "b5ce8542-7084-4bf1-ab00-eda1412efc5f",
      "CertId" : null,
      "NameSpace" : "Inspur.Gsp.Common.CommonCmp",
      "Code" : "UpdateAttachment",
      "Name" : "更新附件信息",
      "Type" : "BEMgrComponent",
      "BizobjectID" : "CommonCmp"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "aa213406-922e-473b-997b-017a82321b4d",
      "CertId" : null,
      "NameSpace" : "Inspur.Gsp.Common.CommonCmp",
      "Code" : "BatchUploadAttachment",
      "Name" : "批量新增附件信息",
      "Type" : "BEMgrComponent",
      "BizobjectID" : "CommonCmp"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "42c751c7-d26f-40d1-8fb3-b215d5355d76",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.SCM.CM.MaterialCat.MaterialCat.Back",
      "Code" : "MaterialCat",
      "Name" : "物料类别",
      "Type" : "GSPBusinessEntity",
      "BizobjectID" : "03bbd78c-747f-fda9-b2be-66b1f219c065"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "ee86e96e-6d51-48c7-9e92-9b7dfe3b43b6",
      "CertId" : null,
      "NameSpace" : "Inspur.Gsp.Common.CommonUdt",
      "Code" : "AttachmentInfo",
      "Name" : "附件信息",
      "Type" : "UnifiedDataType",
      "BizobjectID" : "CommonUdt"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "6284107f-9374-4bd0-8444-5b88aaa51779",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.SCM.CM.Material.Material.Back",
      "Code" : "Material.be",
      "Name" : "Material.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "d8bf8331-1d31-69b0-b6b6-d1ea9f4bba96"
    }
  } ],
  "Content" : {
    "ID" : "29853816-a2dc-4688-9fe5-a7730091921b",
    "Code" : "Material",
    "Name" : "物料管理",
    "GeneratingAssembly" : "Inspur.GS.SCM.CM.Material.Material.Back",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "060919cb-dbba-4602-a1b2-cd29556e4328"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "151304b9-1c4d-45fa-a572-b40a44ef6976",
      "Code" : "Material",
      "Name" : "物料管理",
      "I18nResourceInfoPrefix" : "Inspur.GS.SCM.CM.Material.Material.Back.Material.Material",
      "ContainElements" : [ {
        "ID" : "0de50b8d-740e-453e-a35c-ca7ba1210bc2",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "a2fc31c3-0a63-41bd-be6b-217478b61588",
        "Code" : "ID",
        "Name" : "主键",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "060919cb-dbba-4602-a1b2-cd29556e4328",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "4a29c69b-c73b-474f-93de-e67f04d65aa1",
        "Code" : "Version",
        "Name" : "版本",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "224b47a4-d5d8-466f-9aa7-158632a910f8",
        "LabelID" : "MaterialCode",
        "ChildAssociations" : [ ],
        "ColumnID" : "6e0c25cd-c5bf-41d6-b6aa-d76d3044159d",
        "Code" : "MaterialCode",
        "Name" : "物料编号",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true,
        "BillCodeConfig" : {
          "CanBillCode" : true,
          "CodeGenerateOccasion" : "SavingTime",
          "BillCodeName" : "物料管理编码",
          "BillCodeID" : "dd7bc9b5-48a9-492a-bbc7-740b0137ff83"
        }
      }, {
        "ID" : "992df404-8f35-422c-8fd5-747cce6dfdd4",
        "LabelID" : "MaterialName",
        "ChildAssociations" : [ ],
        "ColumnID" : "134a87a6-d881-4f03-ab38-bf9500e6468f",
        "Code" : "MaterialName",
        "Name" : "物料名称",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "c624a49c-77b0-431b-a2e7-40f982dc179b",
        "LabelID" : "MaterialCat",
        "ChildAssociations" : [ {
          "ID" : "add42470-800c-4fa7-bb08-34127dc7ff90",
          "RefElementCollection" : [ {
            "ID" : "18d36c75-e0fe-4230-a015-15a2378f62e1",
            "LabelID" : "MaterialCat_ID",
            "ChildAssociations" : [ ],
            "ColumnID" : "749d4aa0-b221-48d2-a0c1-bbc564d40c11",
            "Code" : "ID",
            "Name" : "主键",
            "MDataType" : "String",
            "Length" : 36,
            "IsRefElement" : true,
            "RefElementID" : "cf925cb8-2f0a-4db9-97d7-1516e3d7ec04",
            "EnableRtrim" : true
          }, {
            "ID" : "9ad02982-e619-4be1-a05b-f74658227c77",
            "LabelID" : "MaterialCat_CatName",
            "ChildAssociations" : [ ],
            "ColumnID" : "97f8ed53-673a-4af3-879c-970df8445d63",
            "Code" : "CatName",
            "Name" : "类别名称",
            "MDataType" : "String",
            "Length" : 36,
            "IsRefElement" : true,
            "RefElementID" : "26c69503-bbfa-4368-9b23-5f419111842a",
            "EnableRtrim" : true
          }, {
            "ID" : "0a9c289c-46e4-4eb4-b6e3-583ed5a30ba9",
            "LabelID" : "MaterialCat_CatCode",
            "ChildAssociations" : [ ],
            "ColumnID" : "b0c8a261-b97c-4c11-baf9-73ed682a9d00",
            "Code" : "CatCode",
            "Name" : "类别编号",
            "MDataType" : "String",
            "Length" : 36,
            "IsRefElement" : true,
            "RefElementID" : "e95a28b1-6819-4fbd-9deb-891de96ad655",
            "EnableRtrim" : true
          } ],
          "RefModelID" : "42c751c7-d26f-40d1-8fb3-b215d5355d76",
          "RefModelName" : "物料类别",
          "RefModelCode" : "MaterialCat",
          "RefObjectID" : "c7de7f02-7d97-4217-9ab6-279cd7dbd795",
          "RefObjectCode" : "MaterialCat",
          "RefObjectName" : "物料类别",
          "KeyCollection" : [ {
            "RefDataModelName" : "",
            "SourceElement" : "cf925cb8-2f0a-4db9-97d7-1516e3d7ec04",
            "SourceElementDisplay" : "主键",
            "TargetElement" : "c624a49c-77b0-431b-a2e7-40f982dc179b",
            "TargetElementDisplay" : "物料类别"
          } ],
          "AssoModelInfo" : {
            "MainObjCode" : "MaterialCat",
            "ModelConfigId" : "Inspur.GS.SCM.CM.MaterialCat.MaterialCat.Back.MaterialCat"
          }
        } ],
        "ColumnID" : "f4fb7961-b515-43d7-b5da-05abb16a3df4",
        "Code" : "MaterialCat",
        "Name" : "物料类别",
        "ObjectType" : "Association",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "645e75b8-57b3-4870-93c5-d3201dd28230",
        "LabelID" : "EvePrice",
        "ChildAssociations" : [ ],
        "ColumnID" : "2196b5f7-0909-46c8-bfb5-4a8563bd56ec",
        "Code" : "EvePrice",
        "Name" : "市场价格",
        "MDataType" : "Decimal",
        "Length" : 18,
        "Precision" : 2,
        "EnableRtrim" : true
      }, {
        "ID" : "ac61cafb-b1d9-4f1e-8a3d-c4f7ff604872",
        "LabelID" : "Repertory",
        "ChildAssociations" : [ ],
        "ColumnID" : "52948dc2-87d1-4cac-b0eb-46027b4da49e",
        "Code" : "Repertory",
        "Name" : "库存数量",
        "MDataType" : "Integer",
        "EnableRtrim" : true
      } ],
      "ContainChildObjects" : [ {
        "ID" : "fe73fdde-34dd-49a2-9bbb-1432518bfd92",
        "Code" : "MaterialFile",
        "Name" : "相关附件",
        "I18nResourceInfoPrefix" : "Inspur.GS.SCM.CM.Material.Material.Back.Material.MaterialFile",
        "ContainElements" : [ {
          "ID" : "fa5a893f-34e1-4002-887f-af8a86839e86",
          "LabelID" : "ID",
          "ChildAssociations" : [ ],
          "ColumnID" : "c4a81cb1-0027-474b-8f60-62b8b0fd757c",
          "Code" : "ID",
          "Name" : "主键",
          "MDataType" : "String",
          "Length" : 36,
          "IsRequire" : true,
          "EnableRtrim" : true
        }, {
          "ID" : "aa18b1b5-da33-4d65-a791-01331fd6cf4a",
          "LabelID" : "ParentID",
          "ChildAssociations" : [ ],
          "ColumnID" : "e4f55bab-aa63-47a7-a0d6-b16c3ffe9f5d",
          "Code" : "ParentID",
          "Name" : "上级对象主键",
          "MDataType" : "String",
          "Length" : 36,
          "IsRequire" : true,
          "EnableRtrim" : true
        }, {
          "ID" : "a5d0ed01-6962-4514-9064-95cb99cdfba6",
          "LabelID" : "FileInfo",
          "ChildAssociations" : [ ],
          "ChildElements" : [ {
            "ID" : "2e53fca2-0aee-48a9-bbe3-ec40935a6a79",
            "LabelID" : "FileInfo_AttachmentInfo",
            "I18nResourceInfoPrefix" : "",
            "ChildAssociations" : [ ],
            "ColumnID" : "bcbc9266-8644-4f3b-9fc1-baed085bd5fa",
            "Code" : "FileInfo_AttachmentInfo",
            "Name" : "附件信息",
            "MDataType" : "String",
            "EnableRtrim" : true
          } ],
          "ColumnID" : "bcbc9266-8644-4f3b-9fc1-baed085bd5fa",
          "Code" : "FileInfo",
          "Name" : "附件信息",
          "MDataType" : "Text",
          "IsUdt" : true,
          "EnableRtrim" : true,
          "UdtID" : "ee86e96e-6d51-48c7-9e92-9b7dfe3b43b6",
          "UdtName" : "附件信息",
          "MappingRelation" : [ {
            "2e53fca2-0aee-48a9-bbe3-ec40935a6a79" : "ee86e96e-6d51-48c7-9e92-9b7dfe3b43b6"
          } ]
        } ],
        "RefObjectName" : "79b9cba6-8d08-44d8-addc-f5480df61ba6",
        "ObjectType" : 1,
        "ColumnGenerateID" : {
          "ColumnParameters" : [ ],
          "ElementID" : "fa5a893f-34e1-4002-887f-af8a86839e86",
          "GenerateType" : "Guid"
        },
        "BelongModelID" : "29853816-a2dc-4688-9fe5-a7730091921b",
        "Keys" : [ {
          "RefDataModelName" : "",
          "SourceElement" : "aa18b1b5-da33-4d65-a791-01331fd6cf4a",
          "SourceElementDisplay" : "上级对象主键",
          "TargetElement" : "0de50b8d-740e-453e-a35c-ca7ba1210bc2",
          "TargetElementDisplay" : "主键"
        } ],
        "ParentObjectID" : "151304b9-1c4d-45fa-a572-b40a44ef6976"
      } ],
      "RefObjectName" : "d920ca4f-ec29-4af0-9889-f9453737f789",
      "ColumnGenerateID" : {
        "ColumnParameters" : [ ],
        "ElementID" : "0de50b8d-740e-453e-a35c-ca7ba1210bc2",
        "GenerateType" : "Guid"
      },
      "BelongModelID" : "29853816-a2dc-4688-9fe5-a7730091921b"
    },
    "Variables" : {
      "ID" : "8fac31a3-5a51-4a0b-bc3c-266cd00011b4",
      "Code" : "MaterialVariable",
      "Name" : "物料管理变量",
      "I18nResourceInfoPrefix" : ""
    },
    "BizMgrActions" : [ {
      "ID" : "49a9c2da-f4c7-4494-8fd2-2ccd16a423a4",
      "Code" : "UpdateAttachment",
      "Name" : "更新附件信息",
      "ComponentId" : "b5ce8542-7084-4bf1-ab00-eda1412efc5f",
      "ComponentName" : "UpdateAttachment",
      "ComponentPkgName" : "Inspur.Gsp.Common.CommonCmp",
      "IsGenerateComponent" : false,
      "Parameters" : [ {
        "ID" : "a7ff2e59-dba8-4e6a-a5e6-cead4a98f856",
        "ParamCode" : "updateAttachInfo",
        "ParamName" : "更新附件信息",
        "ParameterType" : 7,
        "Assembly" : "Inspur.Gsp.Common.CommonCmp",
        "ClassName" : "Inspur.Gsp.Common.CommonCmp.Attachment.AttachInfo",
        "JavaClassName" : "com.inspur.edp.common.component.attachment.AttachInfo"
      } ],
      "ReturnValue" : {
        "ID" : "c17137b6-07d5-425c-b192-f4898316b059",
        "ParameterType" : 7,
        "Assembly" : "Inspur.Gsp.Cef.Entity",
        "ClassName" : "Inspur.Gsp.Cef.Entity.IEntityData",
        "JavaClassName" : "com.inspur.edp.cef.entity.entity.IEntityData",
        "Mode" : 1
      }
    }, {
      "ID" : "f1876c7b-a5fa-4b32-8f49-3d14f2e0cbec",
      "Code" : "BatchUploadAttachment",
      "Name" : "批量新增附件信息",
      "ComponentId" : "aa213406-922e-473b-997b-017a82321b4d",
      "ComponentName" : "BatchUploadAttachment",
      "ComponentPkgName" : "Inspur.Gsp.Common.CommonCmp",
      "IsGenerateComponent" : false,
      "Parameters" : [ {
        "ID" : "3a97e1ad-6f14-4a09-99fa-e6d37c82b486",
        "ParamCode" : "batchUploadInfo",
        "ParamName" : "批量上传参数信息",
        "ParameterType" : 7,
        "Assembly" : "Inspur.Gsp.Common.CommonCmp",
        "ClassName" : "Inspur.Gsp.Common.CommonCmp.Attachment.AttachInfo",
        "JavaClassName" : "com.inspur.edp.common.component.attachment.AttachInfo"
      } ],
      "ReturnValue" : {
        "ID" : "ad37d589-0416-4b58-8dc0-09aa6cbe3979",
        "ParameterType" : 7,
        "CollectionParameterType" : 1,
        "Assembly" : "Inspur.Gsp.Cef.Entity",
        "ClassName" : "Inspur.Gsp.Cef.Entity.IEntityData",
        "JavaClassName" : "com.inspur.edp.cef.entity.entity.IEntityData",
        "Mode" : 1
      }
    } ],
    "ComponentAssemblyName" : "Inspur.GS.SCM.CM.Material.Material.Back"
  },
  "ExtendRule" : null,
  "RelativePath" : "SCM/CM/Material/bo-material-back/metadata/be",
  "ExtendProperty" : "{\"enableEntryBills\":false}",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}