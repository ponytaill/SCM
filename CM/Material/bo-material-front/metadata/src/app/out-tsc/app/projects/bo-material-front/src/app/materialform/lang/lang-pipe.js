import * as tslib_1 from "tslib";
import { Pipe, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { of } from 'rxjs';
import { catchError, switchMap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
export function createTranslateLoader(http, version) {
    var versionSuffix = "";
    if (version) {
        versionSuffix = "?v=" + version;
    }
    return new TranslateHttpLoader(http, '/apps/scm/cm/web/bo-material-front/materialform/i18n/', '.json' + versionSuffix);
}
export var lang = { "zh-CHS": { "supplier_Supplier_SupplierName_7aeb0d3c_y8a1": "供应商名称", "LookupEdit/supplier_Supplier_SupplierName_7aeb0d3c_y8a1/placeHolder": "", "LookupEdit/supplier_Supplier_SupplierName_7aeb0d3c_y8a1/dialogTitle": "", "root-component": "", "root-layout": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "title": "物料管理表单", "page-header-toolbar": "", "button-add": "新增", "button-edit": "编辑", "button-save": "保存", "button-cancel": "取消", "button-delete": "删除", "main-container": "", "content-splitter": "", "content-list": "", "data-grid-component-ref": "", "content-main": "", "detail-component-ref": "", "materialfile-f59o-component-ref": "", "data-grid-component": "", "data-grid-section": "", "Section/data-grid-section/mainTitle": "", "Section/data-grid-section/subTitle": "", "dataGrid": "", "DataGrid/dataGrid/lineNumberTitle": "", "DataGrid/dataGrid/OperateEditButton": "编辑", "DataGrid/dataGrid/OperateDeleteButton": "删除", "DataGrid/dataGrid/OperateColumn": "操作", "materialCode_8e70b36b_vkei": "物料编号", "materialName_56e54326_wg3t": "物料名称", "repertory_f8eb1982_xmhs": "库存数量", "detail-form-component": "", "detail-form-section": "", "Section/detail-form-section/mainTitle": "基本信息", "Section/detail-form-section/subTitle": "", "detail-form-layout": "", "materialCode_8e70b36b_qryg": "物料编号", "TextBox/materialCode_8e70b36b_qryg/placeHolder": "", "materialName_56e54326_c6uc": "物料名称", "TextBox/materialName_56e54326_c6uc/placeHolder": "", "materialCat_MaterialCat_CatName_f51993e2_lucw": "类别名称", "LookupEdit/materialCat_MaterialCat_CatName_f51993e2_lucw/placeHolder": "", "LookupEdit/materialCat_MaterialCat_CatName_f51993e2_lucw/dialogTitle": "", "evePrice_90e943c4_iw5k": "市场价格", "NumberSpinner/evePrice_90e943c4_iw5k/placeHolder": "", "repertory_f8eb1982_51a0": "库存数量", "NumberSpinner/repertory_f8eb1982_51a0/placeHolder": "", "materialfile-f59o-component": "", "materialfile-f59o-section": "", "Section/materialfile-f59o-section/mainTitle": "相关附件", "Section/materialfile-f59o-section/subTitle": "", "materialfile-f59o-file": "", "FileUploadPreview/materialfile-f59o-file/uploadSelectText": "上传附件", "FileUploadPreview/materialfile-f59o-file/previewDefaultRename": "" } };
var LangPipe = /** @class */ (function () {
    function LangPipe(translate, http) {
        this.translate = translate;
        this.http = http;
    }
    LangPipe.prototype.transform = function (key, langCode, defaultValue) {
        var translateValue = this.translate.instant(key);
        if (translateValue == "JitI18nDefaultValue") {
            return defaultValue ? defaultValue : "";
        }
        return translateValue;
    };
    LangPipe = tslib_1.__decorate([
        Pipe({ name: 'lang' }),
        tslib_1.__metadata("design:paramtypes", [TranslateService, HttpClient])
    ], LangPipe);
    return LangPipe;
}());
export { LangPipe };
var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (url) {
        if (!url) {
            url = "";
        }
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafeHtmlPipe = tslib_1.__decorate([
        Pipe({ name: 'safeHtml' }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());
export { SafeHtmlPipe };
var LangService = /** @class */ (function () {
    function LangService(translate) {
        this.translate = translate;
    }
    LangService.prototype.transform = function (key, langCode, defaultValue) {
        var translateValue = this.translate.instant(key);
        if (translateValue == "JitI18nDefaultValue") {
            return defaultValue ? defaultValue : "";
        }
        return translateValue;
    };
    LangService.prototype.getCurrentLanguage = function () {
        return this.translate.currentLang;
    };
    LangService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [TranslateService])
    ], LangService);
    return LangService;
}());
export { LangService };
var TranslateResolveService = /** @class */ (function () {
    function TranslateResolveService(translate, http) {
        this.translate = translate;
        this.http = http;
        translate.defaultLang = 'zh-CHS';
        translate.setTranslation('zh-CHS', lang['zh-CHS']);
    }
    TranslateResolveService.prototype.resolve = function (route, state) {
        var _this = this;
        var langCode = localStorage.getItem('languageCode');
        if (!langCode) {
            langCode = "zh-CHS";
        }
        if (langCode == "zh-CHS" || (this.translate.defaultLang === langCode && this.translate.currentLoader == createTranslateLoader(this.http, null))) {
            this.translate.setTranslation('zh-CHS', lang['zh-CHS']);
            return of(this.translate[langCode]);
        }
        else {
            var httpOb = this.http.get("/apps/scm/cm/web/bo-material-front/version.json?v=" + new Date().getTime()).pipe(switchMap(function (data) {
                var currentVersion = null;
                if (data instanceof Array) {
                    var versionKey_1 = "materialform/" + langCode + ".json";
                    data.forEach(function (item) {
                        if (item.category == "i18n" && item.key == versionKey_1) {
                            currentVersion = item.value;
                        }
                    });
                }
                _this.translate.defaultLang = langCode;
                _this.translate.currentLang = langCode;
                _this.translate.currentLoader = createTranslateLoader(_this.http, currentVersion);
                var tran = _this.translate.getTranslation(langCode).pipe(catchError(function (err) {
                    console.error("read resource file failed,please check!!! " + err);
                    return of(err);
                }));
                return tran;
            }));
            return httpOb;
        }
    };
    TranslateResolveService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [TranslateService, HttpClient])
    ], TranslateResolveService);
    return TranslateResolveService;
}());
export { TranslateResolveService };
