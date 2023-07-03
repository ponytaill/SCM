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
    return new TranslateHttpLoader(http, '/apps/scm/cm/web/bo-supplierma-front/suppliermacard/i18n/', '.json' + versionSuffix);
}
export var lang = { "zh-CHS": { "GridField/materialId_MaterialId_MaterialName_655b8865_v7zg/editor/TextBox/materialId_MaterialId_MaterialName_655b8865_1gmu/placeHolder": "", "contacts_1a95777a_s8l6": "联系人", "LookupEdit/contacts_1a95777a_s8l6/placeHolder": "", "LookupEdit/contacts_1a95777a_s8l6/dialogTitle": "", "root-component": "", "root-layout": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "title": "供应商管理卡片", "page-header-toolbar": "", "button-add": "新增", "button-edit": "编辑", "button-save": "保存", "button-cancel": "取消", "scrollCollapsibleArea": "", "main-container": "", "scrollspy": "", "Scrollspy/scrollspy/items/basic-form-section": "基本信息", "Scrollspy/scrollspy/items/section-suppliermaterial": "供应商对应物料", "Scrollspy/scrollspy/items/supplierma-ohol-form-section": "联系方式", "scrollspy-container": "", "like-card-container": "", "basic-form-component-ref": "", "supplierma-ohol-component-ref": "", "detail-container-suppliermaterial": "", "section-suppliermaterial": "", "Section/section-suppliermaterial/mainTitle": "供应商对应物料", "Section/section-suppliermaterial/subTitle": "", "suppliermaterial-component-ref": "", "basic-form-component": "", "basic-form-section": "", "Section/basic-form-section/mainTitle": "基本信息", "Section/basic-form-section/subTitle": "", "basic-form-layout": "", "supplierName_2df5f154_jtkg": "供应商名称", "TextBox/supplierName_2df5f154_jtkg/placeHolder": "", "supplierCode_a55cbab4_vw3m": "供应商编号", "TextBox/supplierCode_a55cbab4_vw3m/placeHolder": "", "signTime_36e6b73d_4lns": "注册时间", "DateBox/signTime_36e6b73d_4lns/placeHolder": "", "suppliermaterial-component": "", "suppliermaterial-component-layout": "", "dataGrid_suppliermaterial": "", "DataGrid/dataGrid_suppliermaterial/lineNumberTitle": "", "DataGrid/dataGrid_suppliermaterial/OperateEditButton": "编辑", "DataGrid/dataGrid_suppliermaterial/OperateDeleteButton": "删除", "DataGrid/dataGrid_suppliermaterial/OperateColumn": "操作", "materialId_MaterialId_MaterialCode_06287e26_x36n": "物料编号", "GridField/materialId_MaterialId_MaterialCode_06287e26_x36n/editor/materialId_MaterialId_MaterialCode_06287e26_6gh9": "文本", "GridField/materialId_MaterialId_MaterialCode_06287e26_x36n/editor/TextBox/materialId_MaterialId_MaterialCode_06287e26_6gh9/placeHolder": "", "materialId_MaterialId_MaterialName_655b8865_v7zg": "物料名称", "GridField/materialId_MaterialId_MaterialName_655b8865_v7zg/editor/materialId_MaterialId_MaterialName_655b8865_1gmu": "文本", "GridField/materialId_MaterialId_MaterialName_655b8865_v7zg/editor/LookupEdit/materialId_MaterialId_MaterialName_655b8865_1gmu/placeHolder": "", "GridField/materialId_MaterialId_MaterialName_655b8865_v7zg/editor/LookupEdit/materialId_MaterialId_MaterialName_655b8865_1gmu/dialogTitle": "", "materialId_MaterialId_EvePrice_1f7da955_komu": "市场价格", "GridField/materialId_MaterialId_EvePrice_1f7da955_komu/editor/materialId_MaterialId_EvePrice_1f7da955_sbb0": "数值框", "GridField/materialId_MaterialId_EvePrice_1f7da955_komu/editor/NumberSpinner/materialId_MaterialId_EvePrice_1f7da955_sbb0/placeHolder": "", "materialId_MaterialId_Repertory_3befcd45_5gw0": "库存数量", "GridField/materialId_MaterialId_Repertory_3befcd45_5gw0/editor/materialId_MaterialId_Repertory_3befcd45_2bg2": "数值框", "GridField/materialId_MaterialId_Repertory_3befcd45_5gw0/editor/NumberSpinner/materialId_MaterialId_Repertory_3befcd45_2bg2/placeHolder": "", "materialId_MaterialId_MaterialCat_CatName_9856022b_2dzp": "类别名称", "GridField/materialId_MaterialId_MaterialCat_CatName_9856022b_2dzp/editor/materialId_MaterialId_MaterialCat_CatName_9856022b_by5d": "文本", "GridField/materialId_MaterialId_MaterialCat_CatName_9856022b_2dzp/editor/TextBox/materialId_MaterialId_MaterialCat_CatName_9856022b_by5d/placeHolder": "", "supplierma-ohol-component": "", "supplierma-ohol-form-section": "", "Section/supplierma-ohol-form-section/mainTitle": "联系方式", "Section/supplierma-ohol-form-section/subTitle": "", "supplierma-ohol-form-layout": "", "contacts_Contacts_Name_95a3cc07_th3j": "联系人", "LookupEdit/contacts_Contacts_Name_95a3cc07_th3j/placeHolder": "", "LookupEdit/contacts_Contacts_Name_95a3cc07_th3j/dialogTitle": "", "contactsEmail_90701715_rtno": "联系人邮箱", "TextBox/contactsEmail_90701715_rtno/placeHolder": "", "contactsAddress_f119b011_sfjn": "办公地址", "TextBox/contactsAddress_f119b011_sfjn/placeHolder": "", "remark_81bf894a_30fs": "备注", "MultiTextBox/remark_81bf894a_30fs/placeHolder": "" } };
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
            var httpOb = this.http.get("/apps/scm/cm/web/bo-supplierma-front/version.json?v=" + new Date().getTime()).pipe(switchMap(function (data) {
                var currentVersion = null;
                if (data instanceof Array) {
                    var versionKey_1 = "suppliermacard/" + langCode + ".json";
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
