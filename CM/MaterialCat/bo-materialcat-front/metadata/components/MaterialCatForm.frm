{
  "Header" : {
    "Code" : "MaterialCatForm",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.SCM.CM.MaterialCat.MaterialCat.Front",
    "CertId" : null,
    "Name" : "物料类别表单",
    "FileName" : "MaterialCatForm.frm",
    "BizobjectID" : "03bbd78c-747f-fda9-b2be-66b1f219c065",
    "Language" : null,
    "Extendable" : false,
    "ID" : "6ff0a78d-82f1-4ea1-b188-b639e50fb16d",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "d72524e8-da59-47c1-bdcb-756e8e4ed502",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.SCM.CM.MaterialCat.MaterialCat.Front",
      "Code" : "MaterialCatForm.frm",
      "Name" : "MaterialCatForm.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "03bbd78c-747f-fda9-b2be-66b1f219c065"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Id" : "6ff0a78d-82f1-4ea1-b188-b639e50fb16d",
    "Contents" : {
      "module" : {
        "id" : "MaterialCatForm",
        "code" : "MaterialCatForm",
        "name" : "物料类别表单",
        "caption" : "物料类别表单",
        "type" : "Module",
        "creator" : "shizhiyuan",
        "creationDate" : "2023-06-20T08:08:43.485Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "list-card-template",
        "templateId" : "list-card-template",
        "schemas" : [ {
          "name" : "物料类别表单_frm",
          "id" : "bbf604e6-e9ab-4c82-80de-265d9f75b6fe",
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "entities" : [ {
            "name" : "物料类别",
            "id" : "53655b49-18e5-4579-93ee-a318051896de",
            "type" : {
              "$type" : "EntityType",
              "fields" : [ {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "require" : true,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "readonly" : false,
                "name" : "主键",
                "id" : "8da8e60b-f453-4ee5-9a84-6ac238cf6a6f",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "ID",
                "label" : "id",
                "code" : "ID",
                "originalId" : "8da8e60b-f453-4ee5-9a84-6ac238cf6a6f",
                "bindingField" : "id",
                "bindingPath" : "id"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "require" : false,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "DateBox",
                  "format" : "'yyyy-MM-dd'"
                },
                "readonly" : false,
                "name" : "版本",
                "id" : "6f62d56c-7bef-4e06-a9a4-e626c540144b",
                "type" : {
                  "$type" : "DateTimeType",
                  "name" : "DateTime",
                  "displayName" : "日期时间"
                },
                "path" : "Version",
                "label" : "version",
                "code" : "Version",
                "originalId" : "6f62d56c-7bef-4e06-a9a4-e626c540144b",
                "bindingField" : "version",
                "bindingPath" : "version"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "require" : false,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "readonly" : false,
                "name" : "类别名称",
                "id" : "ce695b68-2f5d-4798-a2a3-41bc30c05153",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "CatName",
                "label" : "catName",
                "code" : "CatName",
                "originalId" : "ce695b68-2f5d-4798-a2a3-41bc30c05153",
                "bindingField" : "catName",
                "bindingPath" : "catName"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "require" : false,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "readonly" : false,
                "name" : "类别编号",
                "id" : "88340d2a-9dd3-4ac0-96d2-46f562071ef9",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "CatCode",
                "label" : "catCode",
                "code" : "CatCode",
                "originalId" : "88340d2a-9dd3-4ac0-96d2-46f562071ef9",
                "bindingField" : "catCode",
                "bindingPath" : "catCode"
              } ],
              "entities" : [ ],
              "primary" : "id",
              "name" : "MaterialCat",
              "displayName" : "物料类别"
            },
            "label" : "materialCats",
            "code" : "MaterialCat"
          } ],
          "variables" : [ ],
          "sourceType" : "vo",
          "code" : "MaterialCatForm_frm",
          "sourceUri" : "api/scm/cm/v1.0/MaterialCatForm_frm",
          "eapiId" : "949f1020-42d8-49fc-8530-ab7457f85cec",
          "eapiCode" : "MaterialCatForm_frm",
          "eapiName" : "物料类别表单_frm",
          "eapiNameSpace" : "Inspur.GS.SCM.CM.MaterialCat.MaterialCat.Front",
          "voPath" : "SCM/CM/MaterialCat/bo-materialcat-front/metadata/components",
          "voNameSpace" : "Inspur.GS.SCM.CM.MaterialCat.MaterialCat.Front"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "MaterialCatForm_state_machine",
          "name" : "物料类别表单_frm",
          "uri" : "9c2da35c-07bb-48bf-a1d7-bc3432c0b479",
          "code" : "MaterialCatForm_frm",
          "nameSpace" : "Inspur.GS.SCM.CM.MaterialCat.MaterialCat.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "物料类别",
          "fields" : [ ],
          "stateMachine" : "MaterialCatForm_state_machine",
          "serviceRefs" : [ ],
          "commands" : [ ],
          "states" : [ ],
          "bindTo" : "/",
          "enableUnifiedSession" : false
        }, {
          "id" : "data-grid-component-viewmodel",
          "code" : "data-grid-component-viewmodel",
          "name" : "物料类别",
          "fields" : [ {
            "type" : "Form",
            "id" : "ce695b68-2f5d-4798-a2a3-41bc30c05153",
            "fieldName" : "catName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "88340d2a-9dd3-4ac0-96d2-46f562071ef9",
            "fieldName" : "catCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
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
          "name" : "物料类别",
          "fields" : [ {
            "type" : "Form",
            "id" : "ce695b68-2f5d-4798-a2a3-41bc30c05153",
            "fieldName" : "catName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "88340d2a-9dd3-4ac0-96d2-46f562071ef9",
            "fieldName" : "catCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
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
                    "html" : "<span class=\"f-title-icon f-text-orna-dict\"><i class=\"f-icon f-icon-page-title-dictionary\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'物料类别表单'}}</h4>"
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
                    "disable" : "!viewModel.stateMachine['canAdd']",
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
              "dataSource" : "materialCats",
              "fields" : [ {
                "id" : "catCode_88340d2a_d9jl",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "类别编号",
                "captionTemplate" : null,
                "dataField" : "catCode",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "catCode",
                  "field" : "88340d2a-9dd3-4ac0-96d2-46f562071ef9",
                  "fullPath" : "CatCode"
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
                "id" : "catName_ce695b68_vyzg",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "类别名称",
                "captionTemplate" : null,
                "dataField" : "catName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "catName",
                  "field" : "ce695b68-2f5d-4798-a2a3-41bc30c05153",
                  "fullPath" : "CatName"
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
                "id" : "catCode_88340d2a_bnji",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "类别编号",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "catCode",
                  "field" : "88340d2a-9dd3-4ac0-96d2-46f562071ef9",
                  "fullPath" : "CatCode"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
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
                "path" : "catCode",
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
                "id" : "catName_ce695b68_7gre",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "类别名称",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "catName",
                  "field" : "ce695b68-2f5d-4798-a2a3-41bc30c05153",
                  "fullPath" : "CatName"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
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
                "path" : "catName",
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
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-materialcat-front",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "expressions" : [ ],
        "metadataId" : "6ff0a78d-82f1-4ea1-b188-b639e50fb16d",
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
  "RelativePath" : "SCM/CM/MaterialCat/bo-materialcat-front/metadata/components",
  "ExtendProperty" : "",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}