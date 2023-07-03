{
  "Header" : {
    "Code" : "MaterialForm",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.SCM.CM.Material.Material.Front",
    "CertId" : null,
    "Name" : "物料管理表单",
    "FileName" : "MaterialForm.frm",
    "BizobjectID" : "d8bf8331-1d31-69b0-b6b6-d1ea9f4bba96",
    "Language" : null,
    "Extendable" : false,
    "ID" : "ee8cb07d-4f79-4276-ac0d-489f3faff10a",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "2760ec57-e194-4124-8a71-49a33c227141",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.SCM.CM.Material.Material.Front",
      "Code" : "MaterialForm.frm",
      "Name" : "MaterialForm.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "d8bf8331-1d31-69b0-b6b6-d1ea9f4bba96"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Id" : "ee8cb07d-4f79-4276-ac0d-489f3faff10a",
    "Contents" : {
      "module" : {
        "id" : "MaterialForm",
        "code" : "MaterialForm",
        "name" : "物料管理表单",
        "caption" : "物料管理表单",
        "type" : "Module",
        "creator" : "shizhiyuan",
        "creationDate" : "2023-06-21T01:02:46.324Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "list-card-template",
        "templateId" : "list-card-template",
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
                    "id" : "2d76ee64-e109-4e7e-9650-6d26252a9c8e",
                    "originalId" : "2d76ee64-e109-4e7e-9650-6d26252a9c8e",
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
                    "id" : "2849079e-c614-4c48-aab9-36625b0f0a7c",
                    "originalId" : "2849079e-c614-4c48-aab9-36625b0f0a7c",
                    "label" : "parentID",
                    "code" : "ParentID",
                    "name" : "上级对象主键"
                  }, {
                    "$type" : "ComplexField",
                    "bindingField" : "fileInfo",
                    "bindingPath" : "fileInfo",
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
                        "bindingField" : "fileInfo_AttachmentId",
                        "bindingPath" : "fileInfo.attachmentId",
                        "type" : {
                          "$type" : "StringType",
                          "displayName" : "字符串",
                          "length" : 36,
                          "name" : "String"
                        },
                        "path" : "FileInfo.AttachmentId",
                        "id" : "b89279f3-4fd6-49ff-a18a-f466a068f905",
                        "originalId" : "ff73a947-4fd6-49ff-a18a-f466a068f905",
                        "label" : "attachmentId",
                        "code" : "AttachmentId",
                        "name" : "附件Id"
                      }, {
                        "$type" : "SimpleField",
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "defaultValue" : "",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "bindingField" : "fileInfo_FileName",
                        "bindingPath" : "fileInfo.fileName",
                        "type" : {
                          "$type" : "StringType",
                          "displayName" : "字符串",
                          "length" : 128,
                          "name" : "String"
                        },
                        "path" : "FileInfo.FileName",
                        "id" : "b89279f3-1497-4526-86f9-290aab400e0b",
                        "originalId" : "026b07a9-1497-4526-86f9-290aab400e0b",
                        "label" : "fileName",
                        "code" : "FileName",
                        "name" : "附件名称"
                      }, {
                        "$type" : "SimpleField",
                        "editor" : {
                          "$type" : "NumericBox"
                        },
                        "defaultValue" : "",
                        "readonly" : false,
                        "require" : false,
                        "multiLanguage" : false,
                        "bindingField" : "fileInfo_FileSize",
                        "bindingPath" : "fileInfo.fileSize",
                        "type" : {
                          "$type" : "NumericType",
                          "displayName" : "数字",
                          "precision" : 8,
                          "length" : 128,
                          "name" : "Number"
                        },
                        "path" : "FileInfo.FileSize",
                        "id" : "b89279f3-dd56-4cab-a54b-577a65f9eb6e",
                        "originalId" : "6369fb66-dd56-4cab-a54b-577a65f9eb6e",
                        "label" : "fileSize",
                        "code" : "FileSize",
                        "name" : "附件大小"
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
                        "bindingField" : "fileInfo_FileCreateTime",
                        "bindingPath" : "fileInfo.fileCreateTime",
                        "type" : {
                          "$type" : "DateTimeType",
                          "displayName" : "日期时间",
                          "name" : "DateTime"
                        },
                        "path" : "FileInfo.FileCreateTime",
                        "id" : "b89279f3-a1f5-4f6c-9c82-ddb10864c652",
                        "originalId" : "ff677864-a1f5-4f6c-9c82-ddb10864c652",
                        "label" : "fileCreateTime",
                        "code" : "FileCreateTime",
                        "name" : "附件上传时间"
                      } ],
                      "name" : "AttachmentInfoB892",
                      "displayName" : "附件信息"
                    },
                    "path" : "FileInfo",
                    "id" : "b89279f3-f150-443b-8925-cd4bea2995ab",
                    "originalId" : "b89279f3-f150-443b-8925-cd4bea2995ab",
                    "label" : "fileInfo",
                    "code" : "FileInfo",
                    "name" : "附件信息"
                  } ],
                  "primary" : "id",
                  "displayName" : "相关附件",
                  "name" : "MaterialFile"
                },
                "id" : "26fc558a-2a74-4343-9e8d-8eb45828383c",
                "label" : "materialFiles",
                "code" : "MaterialFile",
                "name" : "相关附件"
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
                "id" : "3191c0a8-f059-423e-bf0d-f6c62549b1a8",
                "originalId" : "3191c0a8-f059-423e-bf0d-f6c62549b1a8",
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
                "id" : "098b5417-7341-463d-ac8a-4b50b1fd7e91",
                "originalId" : "098b5417-7341-463d-ac8a-4b50b1fd7e91",
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
                "bindingField" : "materialCode",
                "bindingPath" : "materialCode",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "path" : "MaterialCode",
                "id" : "8e70b36b-1565-4e97-9805-a64f07c319b3",
                "originalId" : "8e70b36b-1565-4e97-9805-a64f07c319b3",
                "label" : "materialCode",
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
                "bindingField" : "materialName",
                "bindingPath" : "materialName",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "path" : "MaterialName",
                "id" : "56e54326-efea-475a-a33b-eee76bfb543e",
                "originalId" : "56e54326-efea-475a-a33b-eee76bfb543e",
                "label" : "materialName",
                "code" : "MaterialName",
                "name" : "物料名称"
              }, {
                "$type" : "ComplexField",
                "bindingField" : "materialCat",
                "bindingPath" : "materialCat",
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
                    "bindingField" : "materialCat",
                    "bindingPath" : "materialCat.materialCat",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "path" : "MaterialCat.MaterialCat",
                    "id" : "add42470-800c-4fa7-bb08-34127dc7ff90",
                    "originalId" : "add42470-800c-4fa7-bb08-34127dc7ff90",
                    "label" : "materialCat",
                    "code" : "MaterialCat",
                    "name" : "物料类别"
                  }, {
                    "$type" : "SimpleField",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : false,
                    "multiLanguage" : false,
                    "bindingField" : "materialCat_MaterialCat_ID",
                    "bindingPath" : "materialCat.materialCat_ID",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "path" : "MaterialCat.MaterialCat_ID",
                    "id" : "c0a27983-8ec2-4bf6-9b75-e871c8628950",
                    "originalId" : "c0a27983-8ec2-4bf6-9b75-e871c8628950",
                    "label" : "materialCat_ID",
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
                    "bindingField" : "materialCat_MaterialCat_CatName",
                    "bindingPath" : "materialCat.materialCat_CatName",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "path" : "MaterialCat.MaterialCat_CatName",
                    "id" : "f51993e2-6b1c-443c-8baa-b80386dac1dd",
                    "originalId" : "f51993e2-6b1c-443c-8baa-b80386dac1dd",
                    "label" : "materialCat_CatName",
                    "code" : "CatName",
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
                    "bindingField" : "materialCat_MaterialCat_CatCode",
                    "bindingPath" : "materialCat.materialCat_CatCode",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "path" : "MaterialCat.MaterialCat_CatCode",
                    "id" : "b2929776-0ac2-4940-bb0f-4873b19ede7e",
                    "originalId" : "b2929776-0ac2-4940-bb0f-4873b19ede7e",
                    "label" : "materialCat_CatCode",
                    "code" : "CatCode",
                    "name" : "类别编号"
                  } ],
                  "primary" : "materialCat",
                  "displayName" : "物料类别",
                  "name" : "MaterialCatAdd4"
                },
                "path" : "MaterialCat",
                "id" : "cae6f56e-0081-4c54-b06a-1f0aeba33c9e",
                "originalId" : "cae6f56e-0081-4c54-b06a-1f0aeba33c9e",
                "label" : "materialCat",
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
                "bindingField" : "evePrice",
                "bindingPath" : "evePrice",
                "type" : {
                  "$type" : "NumericType",
                  "displayName" : "数字",
                  "precision" : 2,
                  "length" : 18,
                  "name" : "Number"
                },
                "path" : "EvePrice",
                "id" : "90e943c4-bd98-4d70-aeb6-c841d8cf46f9",
                "originalId" : "90e943c4-bd98-4d70-aeb6-c841d8cf46f9",
                "label" : "evePrice",
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
                "bindingField" : "repertory",
                "bindingPath" : "repertory",
                "type" : {
                  "$type" : "NumericType",
                  "displayName" : "数字",
                  "precision" : 0,
                  "length" : 0,
                  "name" : "Number"
                },
                "path" : "Repertory",
                "id" : "f8eb1982-ea9a-45f1-9aad-6d692ff61333",
                "originalId" : "f8eb1982-ea9a-45f1-9aad-6d692ff61333",
                "label" : "repertory",
                "code" : "Repertory",
                "name" : "库存数量"
              } ],
              "primary" : "id",
              "displayName" : "物料管理",
              "name" : "Material"
            },
            "id" : "605ca512-f69f-406b-8ede-6e85ca2a175d",
            "label" : "materials",
            "code" : "Material",
            "name" : "物料管理"
          } ],
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "sourceType" : "vo",
          "id" : "f937d1cc-e698-460b-b849-382ca20ca830",
          "variables" : [ ],
          "sourceUri" : "api/scm/cm/v1.0/MaterialForm_frm",
          "code" : "MaterialForm_frm",
          "name" : "物料管理表单_frm",
          "eapiId" : "0d44d79b-f022-4161-86fb-999c7b15db02",
          "eapiCode" : "MaterialForm_frm",
          "eapiName" : "物料管理表单_frm",
          "eapiNameSpace" : "Inspur.GS.SCM.CM.Material.Material.Front",
          "voPath" : "SCM/CM/Material/bo-material-front/metadata/components",
          "voNameSpace" : "Inspur.GS.SCM.CM.Material.Material.Front"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "MaterialForm_state_machine",
          "name" : "物料管理表单_frm",
          "uri" : "1e261467-0125-42f2-8472-cf77ccf89aee",
          "code" : "MaterialForm_frm",
          "nameSpace" : "Inspur.GS.SCM.CM.Material.Material.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "物料管理",
          "fields" : [ ],
          "stateMachine" : "MaterialForm_state_machine",
          "serviceRefs" : [ ],
          "commands" : [ ],
          "states" : [ ],
          "bindTo" : "/",
          "enableUnifiedSession" : false
        }, {
          "id" : "data-grid-component-viewmodel",
          "code" : "data-grid-component-viewmodel",
          "name" : "物料管理",
          "fields" : [ {
            "type" : "Form",
            "id" : "8e70b36b-1565-4e97-9805-a64f07c319b3",
            "fieldName" : "materialCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "56e54326-efea-475a-a33b-eee76bfb543e",
            "fieldName" : "materialName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "f8eb1982-ea9a-45f1-9aad-6d692ff61333",
            "fieldName" : "repertory",
            "groupId" : "",
            "groupName" : "",
            "valueChanging" : "",
            "valueChanged" : "",
            "updateOn" : "blur",
            "fieldSchema" : { }
          } ],
          "commands" : [ {
            "id" : "fda876c8-7230-46e7-af3d-d38233642275",
            "code" : "loadList1",
            "name" : "加载列表数据",
            "params" : [ ],
            "handlerName" : "loadList",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "22576fc1-08fb-49a9-b132-295c7392b481",
            "code" : "remove1",
            "name" : "删除当前数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除数据的标识",
              "value" : "{DATA~/data-grid-component/id}"
            } ],
            "handlerName" : "remove",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "8788c27e-722a-4b98-9d57-98eafb526fe5",
            "code" : "loadCard1",
            "name" : "加载卡片数据",
            "params" : [ ],
            "handlerName" : "loadCard",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "ef281c13-4480-4256-901e-4bef5f92bd9e",
            "code" : "add1",
            "name" : "新增一条数据",
            "params" : [ ],
            "handlerName" : "add",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "e7cf83c2-e52d-4dce-aded-047a819c8068",
            "code" : "changePage1",
            "name" : "切换页码",
            "params" : [ {
              "name" : "loadCommandName",
              "shownName" : "切换页面后回调方法",
              "value" : "loadList1"
            }, {
              "name" : "loadCommandFrameId",
              "shownName" : "目标组件",
              "value" : "data-grid-component"
            } ],
            "handlerName" : "changePage",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          } ],
          "serviceRefs" : [ ],
          "states" : [ ],
          "bindTo" : "/",
          "parent" : "root-viewmodel",
          "pagination" : {
            "enable" : true,
            "pageSize" : 20,
            "pageList" : "10,20,30,50,100"
          },
          "enableValidation" : false
        }, {
          "id" : "detail-form-component-viewmodel",
          "code" : "detail-form-component-viewmodel",
          "name" : "物料管理",
          "fields" : [ {
            "type" : "Form",
            "id" : "8e70b36b-1565-4e97-9805-a64f07c319b3",
            "fieldName" : "materialCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "56e54326-efea-475a-a33b-eee76bfb543e",
            "fieldName" : "materialName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "require" : true
            }
          }, {
            "type" : "Form",
            "id" : "f51993e2-6b1c-443c-8baa-b80386dac1dd",
            "fieldName" : "materialCat_MaterialCat_CatName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "Material.materialCat_MaterialCat_CatName",
                  "displayName" : "物料类别帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "valueField" : "id",
                "textField" : "catName",
                "displayType" : "List",
                "mapFields" : "{'id':'materialCat.materialCat','catName':'materialCat.materialCat_CatName'}",
                "helpId" : "553ca54b-ecd7-46cd-ace7-24b90b1702d2"
              },
              "name" : "类别名称",
              "require" : true,
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "90e943c4-bd98-4d70-aeb6-c841d8cf46f9",
            "fieldName" : "evePrice",
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
            "id" : "f8eb1982-ea9a-45f1-9aad-6d692ff61333",
            "fieldName" : "repertory",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "require" : true
            }
          } ],
          "commands" : [ {
            "id" : "d12acc4e-6274-44dc-95e6-cedeb5e66707",
            "code" : "edit1",
            "name" : "编辑数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "待编辑数据的标识",
              "value" : "{DATA~/detail-form-component/id}"
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Edit"
            } ],
            "handlerName" : "edit",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "5707d460-c441-45c4-8fe1-f77abd9f75b1",
            "code" : "save1",
            "name" : "保存变更",
            "params" : [ ],
            "handlerName" : "save",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "b3897b4b-a37f-48e3-afb3-8489cec02806",
            "code" : "cancel1",
            "name" : "取消变更",
            "params" : [ ],
            "handlerName" : "cancel",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          } ],
          "serviceRefs" : [ ],
          "states" : [ ],
          "bindTo" : "/",
          "parent" : "root-viewmodel",
          "enableValidation" : true
        }, {
          "id" : "materialfile-f59o-component-viewmodel",
          "code" : "materialfile-f59o-component-viewmodel",
          "name" : "相关附件",
          "bindTo" : "/materialFiles",
          "parent" : "root-viewmodel",
          "fields" : [ ],
          "commands" : [ {
            "id" : "e7e9feb9-501b-4fb8-be38-490ab23fd00d",
            "code" : "materialfilef59ocomponentviewmodeladdFileRows1",
            "name" : "批量添加文件数据1",
            "params" : [ {
              "name" : "fileInfoFieldPath",
              "shownName" : "文件信息字段路径",
              "value" : "/materialFiles/fileInfo"
            } ],
            "handlerName" : "addFileRows",
            "cmpId" : "31c1022c-ab40-4e8d-bc31-85d539f1d36c",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "materialfile-f59o-component"
          }, {
            "id" : "6e62268d-c1a1-4fae-9bc5-3f67e89b0367",
            "code" : "materialfilef59ocomponentviewmodelremoveFileRows1",
            "name" : "批量删除文件数据1",
            "params" : [ {
              "name" : "fileInfoFieldPath",
              "shownName" : "文件信息字段路径",
              "value" : "/materialFiles/fileInfo"
            } ],
            "handlerName" : "removeFileRows",
            "cmpId" : "31c1022c-ab40-4e8d-bc31-85d539f1d36c",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "materialfile-f59o-component"
          } ],
          "states" : [ ],
          "enableValidation" : true,
          "pagination" : {
            "enable" : false
          }
        } ],
        "components" : [ {
          "id" : "root-component",
          "type" : "Component",
          "componentType" : "Frame",
          "viewModel" : "root-viewmodel",
          "onInit" : "",
          "contents" : [ {
            "id" : "root-layout",
            "type" : "ContentContainer",
            "appearance" : {
              "class" : "f-page f-page-navigate f-page-is-grid-card"
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
                    "html" : "<span class=\"f-title-icon f-text-orna-dict\"><i class=\"f-icon f-icon-page-title-dictionary\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'物料管理表单'}}</h4>"
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
                    "appearance" : {
                      "class" : "btn-primary"
                    },
                    "disable" : false,
                    "text" : "新增",
                    "visible" : true,
                    "click" : "root-viewmodel.data-grid-component-viewmodel.add1",
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
                    "click" : "root-viewmodel.detail-form-component-viewmodel.edit1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-save",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canSave']",
                    "text" : "保存",
                    "visible" : true,
                    "click" : "root-viewmodel.detail-form-component-viewmodel.save1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-cancel",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canCancel']",
                    "text" : "取消",
                    "visible" : true,
                    "click" : "root-viewmodel.detail-form-component-viewmodel.cancel1",
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
                    "click" : "root-viewmodel.data-grid-component-viewmodel.remove1",
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
                "id" : "content-splitter",
                "type" : "Splitter",
                "appearance" : {
                  "class" : "f-page-content"
                },
                "size" : null,
                "contents" : [ {
                  "id" : "content-list",
                  "type" : "SplitterPane",
                  "appearance" : {
                    "class" : "f-col-w6 f-page-content-nav"
                  },
                  "size" : null,
                  "resizable" : true,
                  "resizeHandlers" : "e",
                  "contents" : [ {
                    "id" : "data-grid-component-ref",
                    "type" : "ComponentRef",
                    "component" : "data-grid-component",
                    "visible" : true
                  } ],
                  "visible" : true
                }, {
                  "id" : "content-main",
                  "type" : "SplitterPane",
                  "appearance" : {
                    "class" : "f-page-content-main"
                  },
                  "size" : null,
                  "contents" : [ {
                    "id" : "detail-component-ref",
                    "type" : "ComponentRef",
                    "component" : "detail-form-component",
                    "visible" : true
                  }, {
                    "id" : "materialfile-f59o-component-ref",
                    "type" : "ComponentRef",
                    "component" : "materialfile-f59o-component",
                    "visible" : true
                  } ],
                  "visible" : true,
                  "resizable" : false,
                  "resizeHandlers" : ""
                } ],
                "visible" : true,
                "orientation" : "horizontal"
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
            "class" : "f-struct-wrapper  f-utils-fill-flex-column"
          },
          "onInit" : "loadList1",
          "contents" : [ {
            "id" : "data-grid-section",
            "type" : "Section",
            "appearance" : {
              "class" : "f-section-grid f-section-in-nav"
            },
            "size" : null,
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
              "dataSource" : "materials",
              "fields" : [ {
                "id" : "materialCode_8e70b36b_vkei",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "物料编号",
                "captionTemplate" : null,
                "dataField" : "materialCode",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "materialCode",
                  "field" : "8e70b36b-1565-4e97-9805-a64f07c319b3",
                  "fullPath" : "MaterialCode"
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
                "id" : "materialName_56e54326_wg3t",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "物料名称",
                "captionTemplate" : null,
                "dataField" : "materialName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "materialName",
                  "field" : "56e54326-efea-475a-a33b-eee76bfb543e",
                  "fullPath" : "MaterialName"
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
                "id" : "repertory_f8eb1982_xmhs",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "库存数量",
                "binding" : {
                  "type" : "Form",
                  "path" : "repertory",
                  "field" : "f8eb1982-ea9a-45f1-9aad-6d692ff61333",
                  "fullPath" : "Repertory"
                },
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "readonly" : false,
                "dataField" : "repertory",
                "dataType" : "number",
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
                  "type" : "number",
                  "precision" : 0,
                  "thousand" : ",",
                  "decimal" : "."
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
              "onSelectionChange" : "loadCard1",
              "fieldEditable" : false,
              "appendRow" : null,
              "disable" : "viewModel.stateMachine['editable']",
              "pageChange" : "changePage1",
              "pageSizeChanged" : "changePage1",
              "fitColumns" : true,
              "autoFitColumns" : false,
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
              "virtualized" : false,
              "virtualizedAsyncLoad" : false,
              "scrollYLoad" : null,
              "pagerContentTemplate" : null,
              "expandGroupRows" : true,
              "useBlankWhenDataIsEmpty" : false,
              "pageList" : "10,20,30,50,100",
              "pageSize" : 20
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
          "id" : "detail-form-component",
          "type" : "Component",
          "componentType" : "form-col-1",
          "viewModel" : "detail-form-component-viewmodel",
          "onInit" : "",
          "appearance" : {
            "class" : "f-struct-wrapper"
          },
          "contents" : [ {
            "id" : "detail-form-section",
            "type" : "Section",
            "appearance" : {
              "class" : "f-section-form f-section-in-main"
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
            "enableAccordion" : false,
            "accordionMode" : "default",
            "showHeader" : true,
            "headerTemplate" : "",
            "titleTemplate" : "",
            "extendedHeaderAreaTemplate" : "",
            "toolbarTemplate" : "",
            "extendedAreaTemplate" : "",
            "contents" : [ {
              "id" : "detail-form-layout",
              "type" : "Form",
              "appearance" : {
                "class" : "f-form-layout farris-form farris-form-controls-inline"
              },
              "size" : null,
              "contents" : [ {
                "id" : "materialCode_8e70b36b_qryg",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "物料编号",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "materialCode",
                  "field" : "8e70b36b-1565-4e97-9805-a64f07c319b3",
                  "fullPath" : "MaterialCode"
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
                "path" : "materialCode",
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
                "id" : "materialName_56e54326_c6uc",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "物料名称",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "materialName",
                  "field" : "56e54326-efea-475a-a33b-eee76bfb543e",
                  "fullPath" : "MaterialName"
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
                "path" : "materialName",
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
                "id" : "materialCat_MaterialCat_CatName_f51993e2_lucw",
                "type" : "LookupEdit",
                "titleSourceType" : "static",
                "title" : "类别名称",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "materialCat_MaterialCat_CatName",
                  "field" : "f51993e2-6b1c-443c-8baa-b80386dac1dd",
                  "fullPath" : "MaterialCat.MaterialCat_CatName"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : true,
                "disable" : false,
                "placeHolder" : "",
                "dataSource" : {
                  "uri" : "Material.materialCat_MaterialCat_CatName",
                  "displayName" : "物料类别帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "textField" : "catName",
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
                "mapFields" : "{'id':'materialCat.materialCat','catName':'materialCat.materialCat_CatName'}",
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
                "path" : "materialCat.materialCat_CatName",
                "isRTControl" : false,
                "labelAutoOverflow" : false,
                "updateOn" : "blur",
                "helpId" : "553ca54b-ecd7-46cd-ace7-24b90b1702d2"
              }, {
                "id" : "evePrice_90e943c4_iw5k",
                "type" : "NumericBox",
                "titleSourceType" : "static",
                "title" : "市场价格",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "evePrice",
                  "field" : "90e943c4-bd98-4d70-aeb6-c841d8cf46f9",
                  "fullPath" : "EvePrice"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "textAlign" : "left",
                "precisionSourceType" : "static",
                "precision" : 2,
                "validation" : null,
                "maxValue" : null,
                "minValue" : 0,
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
                "path" : "evePrice",
                "localization" : false,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "autoHeight" : false,
                "maxHeight" : 500,
                "labelAutoOverflow" : false,
                "updateOn" : "blur"
              }, {
                "id" : "repertory_f8eb1982_51a0",
                "type" : "NumericBox",
                "titleSourceType" : "static",
                "title" : "库存数量",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "repertory",
                  "field" : "f8eb1982-ea9a-45f1-9aad-6d692ff61333",
                  "fullPath" : "Repertory"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : true,
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
                "path" : "repertory",
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
          "id" : "materialfile-f59o-component",
          "type" : "Component",
          "viewModel" : "materialfile-f59o-component-viewmodel",
          "componentType" : "attachmentPanel",
          "appearance" : {
            "class" : "f-struct-wrapper"
          },
          "visible" : true,
          "onInit" : null,
          "afterViewInit" : null,
          "contents" : [ {
            "id" : "materialfile-f59o-section",
            "type" : "Section",
            "appearance" : {
              "class" : "f-section-form f-section-in-mainsubcard"
            },
            "visible" : true,
            "mainTitle" : "相关附件",
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
              "id" : "materialfile-f59o-file",
              "type" : "FileUploadPreview",
              "appearance" : null,
              "uploadSelectText" : "上传附件",
              "uploadEnableMulti" : true,
              "uploadVisible" : "viewModel.stateMachine && viewModel.stateMachine['editable']",
              "uploadDisabled" : "viewModel.stateMachine && !viewModel.stateMachine['editable']",
              "uploadOptions" : {
                "maxUploads" : 0,
                "maxFileSize" : 12,
                "allowedContentTypes" : [ ".pdf", ".jpg", ".png", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".txt", ".DOC", ".DOCX", ".XLS", ".XLSX", ".PPT", ".PPTX", ".wps", ".et" ]
              },
              "rootId" : "default-root",
              "formId" : "viewModel.bindingData && viewModel.bindingData['id']",
              "enableUploadedCount" : true,
              "previewVisible" : true,
              "previewReadonly" : "viewModel.stateMachine && !viewModel.stateMachine['editable']",
              "previewEnableMulti" : true,
              "previewEnableRename" : true,
              "previewDefaultRename" : "",
              "previewShowType" : "list",
              "fieldIdKey" : {
                "type" : "Form",
                "path" : "fileInfo_AttachmentId",
                "field" : "b89279f3-4fd6-49ff-a18a-f466a068f905",
                "fullPath" : "FileInfo.AttachmentId",
                "bindingPath" : "fileInfo.attachmentId"
              },
              "fileNameKey" : {
                "type" : "Form",
                "path" : "fileInfo_FileName",
                "field" : "b89279f3-1497-4526-86f9-290aab400e0b",
                "fullPath" : "FileInfo.FileName",
                "bindingPath" : "fileInfo.fileName"
              },
              "fUploadDoneEvent" : "materialfilef59ocomponentviewmodeladdFileRows1",
              "fUploadRemovedEvent" : null,
              "enableOrder" : false,
              "fileSortOrderKey" : null,
              "fileRemoveEvent" : "materialfilef59ocomponentviewmodelremoveFileRows1",
              "contentFill" : false,
              "visible" : true,
              "showFileList" : true,
              "showHeader" : true,
              "disabled" : false,
              "noDownload" : false,
              "previewEnableEditFile" : true,
              "attachmentFieldId" : "fileInfo"
            } ],
            "isScrollSpyItem" : false,
            "toolbar" : {
              "type" : "SectionToolbar",
              "position" : "inHead",
              "contents" : [ ]
            }
          } ]
        } ],
        "webcmds" : [ {
          "id" : "7c48ef46-339c-42d4-8365-a21236c63044",
          "path" : "/projects/packages/Inspur.GS.Gsp.Web.WebCmp/webcmd",
          "name" : "ListCardController.webcmd",
          "refedHandlers" : [ {
            "host" : "fda876c8-7230-46e7-af3d-d38233642275",
            "handler" : "loadList"
          }, {
            "host" : "8788c27e-722a-4b98-9d57-98eafb526fe5",
            "handler" : "loadCard"
          }, {
            "host" : "ef281c13-4480-4256-901e-4bef5f92bd9e",
            "handler" : "add"
          }, {
            "host" : "d12acc4e-6274-44dc-95e6-cedeb5e66707",
            "handler" : "edit"
          }, {
            "host" : "5707d460-c441-45c4-8fe1-f77abd9f75b1",
            "handler" : "save"
          }, {
            "host" : "b3897b4b-a37f-48e3-afb3-8489cec02806",
            "handler" : "cancel"
          }, {
            "host" : "22576fc1-08fb-49a9-b132-295c7392b481",
            "handler" : "remove"
          }, {
            "host" : "e7cf83c2-e52d-4dce-aded-047a819c8068",
            "handler" : "changePage"
          } ],
          "code" : "ListCardController",
          "nameSpace" : "Inspur.GS.Gsp.Web.WebCmp"
        }, {
          "id" : "31c1022c-ab40-4e8d-bc31-85d539f1d36c",
          "path" : "SCM/CM/Material/bo-material-front/metadata/components",
          "name" : "FileController.webcmd",
          "refedHandlers" : [ {
            "host" : "e7e9feb9-501b-4fb8-be38-490ab23fd00d",
            "handler" : "addFileRows"
          }, {
            "host" : "6e62268d-c1a1-4fae-9bc5-3f67e89b0367",
            "handler" : "removeFileRows"
          } ],
          "code" : "FileController",
          "nameSpace" : "Inspur.GS.Gsp.Web.AttachmentCmp"
        }, {
          "id" : "870a221d-d51b-4a44-829a-675d06ee7d35",
          "path" : "SCM/CM/Material/bo-material-front/metadata/components",
          "name" : "MaterialForm_frm_Controller.webcmd",
          "refedHandlers" : [ ],
          "code" : "MaterialForm_frm_Controller",
          "nameSpace" : "Inspur.GS.SCM.CM.Material.Material.Front"
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-material-front",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "expressions" : [ ],
        "metadataId" : "ee8cb07d-4f79-4276-ac0d-489f3faff10a",
        "actions" : [ {
          "sourceComponent" : {
            "id" : "button-add",
            "viewModelId" : "data-grid-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "ef281c13-4480-4256-901e-4bef5f92bd9e",
                "label" : "add1",
                "name" : "新增一条数据",
                "handlerName" : "add",
                "params" : [ ],
                "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "label" : "ListCardController",
                "name" : "列卡控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-edit",
            "viewModelId" : "detail-form-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "detail-form-component",
                "viewModelId" : "detail-form-component-viewmodel"
              },
              "command" : {
                "id" : "d12acc4e-6274-44dc-95e6-cedeb5e66707",
                "label" : "edit1",
                "name" : "编辑数据",
                "handlerName" : "edit",
                "params" : [ {
                  "name" : "id",
                  "shownName" : "待编辑数据的标识",
                  "value" : "{DATA~/detail-form-component/id}"
                }, {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Edit"
                } ],
                "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "label" : "ListCardController",
                "name" : "列卡控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-save",
            "viewModelId" : "detail-form-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "detail-form-component",
                "viewModelId" : "detail-form-component-viewmodel"
              },
              "command" : {
                "id" : "5707d460-c441-45c4-8fe1-f77abd9f75b1",
                "label" : "save1",
                "name" : "保存变更",
                "handlerName" : "save",
                "params" : [ ],
                "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "label" : "ListCardController",
                "name" : "列卡控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-cancel",
            "viewModelId" : "detail-form-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "detail-form-component",
                "viewModelId" : "detail-form-component-viewmodel"
              },
              "command" : {
                "id" : "b3897b4b-a37f-48e3-afb3-8489cec02806",
                "label" : "cancel1",
                "name" : "取消变更",
                "handlerName" : "cancel",
                "params" : [ ],
                "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "label" : "ListCardController",
                "name" : "列卡控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-delete",
            "viewModelId" : "data-grid-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "22576fc1-08fb-49a9-b132-295c7392b481",
                "label" : "remove1",
                "name" : "删除当前数据",
                "handlerName" : "remove",
                "params" : [ {
                  "name" : "id",
                  "shownName" : "待删除数据的标识",
                  "value" : "{DATA~/data-grid-component/id}"
                } ],
                "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "label" : "ListCardController",
                "name" : "列卡控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "dataGrid",
            "viewModelId" : "data-grid-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "onSelectionChange",
                "name" : "行切换事件"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "8788c27e-722a-4b98-9d57-98eafb526fe5",
                "label" : "loadCard1",
                "name" : "加载卡片数据",
                "handlerName" : "loadCard",
                "params" : [ ],
                "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "label" : "ListCardController",
                "name" : "列卡控制器"
              }
            }, {
              "event" : {
                "label" : "pageChange",
                "name" : "切换页码"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "e7cf83c2-e52d-4dce-aded-047a819c8068",
                "label" : "changePage1",
                "name" : "切换页码",
                "handlerName" : "changePage",
                "params" : [ {
                  "name" : "loadCommandName",
                  "shownName" : "切换页面后回调方法",
                  "value" : "loadList1"
                }, {
                  "name" : "loadCommandFrameId",
                  "shownName" : "目标组件",
                  "value" : "data-grid-component"
                } ],
                "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "label" : "ListCardController",
                "name" : "列卡控制器"
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
                "id" : "e7cf83c2-e52d-4dce-aded-047a819c8068",
                "label" : "changePage1",
                "name" : "切换页码",
                "handlerName" : "changePage",
                "params" : [ {
                  "name" : "loadCommandName",
                  "shownName" : "切换页面后回调方法",
                  "value" : "loadList1"
                }, {
                  "name" : "loadCommandFrameId",
                  "shownName" : "目标组件",
                  "value" : "data-grid-component"
                } ],
                "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "label" : "ListCardController",
                "name" : "列卡控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "data-grid-component",
            "viewModelId" : "data-grid-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "onInit",
                "name" : "初始化事件"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "fda876c8-7230-46e7-af3d-d38233642275",
                "label" : "loadList1",
                "name" : "加载列表数据",
                "handlerName" : "loadList",
                "params" : [ ],
                "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "label" : "ListCardController",
                "name" : "列卡控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "materialfile-f59o-file",
            "viewModelId" : "materialfile-f59o-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "fUploadDoneEvent",
                "name" : "附件上传后"
              },
              "targetComponent" : {
                "id" : "materialfile-f59o-component",
                "viewModelId" : "materialfile-f59o-component-viewmodel"
              },
              "command" : {
                "id" : "e7e9feb9-501b-4fb8-be38-490ab23fd00d",
                "label" : "materialfilef59ocomponentviewmodeladdFileRows1",
                "name" : "批量添加文件数据1",
                "handlerName" : "addFileRows",
                "params" : [ {
                  "name" : "fileInfoFieldPath",
                  "shownName" : "文件信息字段路径",
                  "value" : "/materialFiles/fileInfo"
                } ],
                "cmpId" : "31c1022c-ab40-4e8d-bc31-85d539f1d36c",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "31c1022c-ab40-4e8d-bc31-85d539f1d36c",
                "label" : "FileController",
                "name" : "文件控制器"
              }
            }, {
              "event" : {
                "label" : "fileRemoveEvent",
                "name" : "附件预览删除"
              },
              "targetComponent" : {
                "id" : "materialfile-f59o-component",
                "viewModelId" : "materialfile-f59o-component-viewmodel"
              },
              "command" : {
                "id" : "6e62268d-c1a1-4fae-9bc5-3f67e89b0367",
                "label" : "materialfilef59ocomponentviewmodelremoveFileRows1",
                "name" : "批量删除文件数据1",
                "handlerName" : "removeFileRows",
                "params" : [ {
                  "name" : "fileInfoFieldPath",
                  "shownName" : "文件信息字段路径",
                  "value" : "/materialFiles/fileInfo"
                } ],
                "cmpId" : "31c1022c-ab40-4e8d-bc31-85d539f1d36c",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "31c1022c-ab40-4e8d-bc31-85d539f1d36c",
                "label" : "FileController",
                "name" : "文件控制器"
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
  "RelativePath" : "SCM/CM/Material/bo-material-front/metadata/components",
  "ExtendProperty" : "",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}