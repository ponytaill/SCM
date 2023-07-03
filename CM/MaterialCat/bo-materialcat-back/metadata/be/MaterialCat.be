{
  "Header" : {
    "Code" : "MaterialCat",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.SCM.CM.MaterialCat.MaterialCat.Back",
    "CertId" : null,
    "Name" : "物料类别",
    "FileName" : "MaterialCat.be",
    "BizobjectID" : "03bbd78c-747f-fda9-b2be-66b1f219c065",
    "Language" : null,
    "Extendable" : false,
    "ID" : "42c751c7-d26f-40d1-8fb3-b215d5355d76",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "8bec98f1-6944-4e90-b28a-db26ec732afd",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.SCM.CM.MaterialCat.MaterialCat.Back",
      "Code" : "MaterialCat.be",
      "Name" : "MaterialCat.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "03bbd78c-747f-fda9-b2be-66b1f219c065"
    }
  } ],
  "Content" : {
    "ID" : "42c751c7-d26f-40d1-8fb3-b215d5355d76",
    "Code" : "MaterialCat",
    "Name" : "物料类别",
    "GeneratingAssembly" : "Inspur.GS.SCM.CM.MaterialCat.MaterialCat.Back",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "68522511-1f6e-43b1-960d-cea8880819b8"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "c7de7f02-7d97-4217-9ab6-279cd7dbd795",
      "Code" : "MaterialCat",
      "Name" : "物料类别",
      "I18nResourceInfoPrefix" : "Inspur.GS.SCM.CM.MaterialCat.MaterialCat.Back.MaterialCat.MaterialCat",
      "ContainElements" : [ {
        "ID" : "cf925cb8-2f0a-4db9-97d7-1516e3d7ec04",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "749d4aa0-b221-48d2-a0c1-bbc564d40c11",
        "Code" : "ID",
        "Name" : "主键",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "68522511-1f6e-43b1-960d-cea8880819b8",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "2242390e-5715-477a-b747-08e4277ebf02",
        "Code" : "Version",
        "Name" : "版本",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "26c69503-bbfa-4368-9b23-5f419111842a",
        "LabelID" : "CatName",
        "ChildAssociations" : [ ],
        "ColumnID" : "97f8ed53-673a-4af3-879c-970df8445d63",
        "Code" : "CatName",
        "Name" : "类别名称",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "e95a28b1-6819-4fbd-9deb-891de96ad655",
        "LabelID" : "CatCode",
        "ChildAssociations" : [ ],
        "ColumnID" : "b0c8a261-b97c-4c11-baf9-73ed682a9d00",
        "Code" : "CatCode",
        "Name" : "类别编号",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      } ],
      "RefObjectName" : "5c894869-e5de-4e05-bae3-69097eab08c1",
      "ColumnGenerateID" : {
        "ColumnParameters" : [ ],
        "ElementID" : "cf925cb8-2f0a-4db9-97d7-1516e3d7ec04",
        "GenerateType" : "Guid"
      },
      "BelongModelID" : "42c751c7-d26f-40d1-8fb3-b215d5355d76"
    },
    "Variables" : {
      "ID" : "563da5c6-8433-4831-9490-5596b8f4326b",
      "Code" : "MaterialCatVariable",
      "Name" : "物料类别变量",
      "I18nResourceInfoPrefix" : ""
    },
    "ComponentAssemblyName" : "Inspur.GS.SCM.CM.MaterialCat.MaterialCat.Back"
  },
  "ExtendRule" : null,
  "RelativePath" : "SCM/CM/MaterialCat/bo-materialcat-back/metadata/be",
  "ExtendProperty" : "{\"enableEntryBills\":false}",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}