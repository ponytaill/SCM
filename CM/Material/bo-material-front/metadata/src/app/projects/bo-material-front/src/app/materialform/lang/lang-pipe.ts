
import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer} from '@angular/platform-browser';
export function createTranslateLoader(http: HttpClient,version:string) {
  let versionSuffix = "";
  if (version) {
    versionSuffix = "?v=" + version;
  }
  return new TranslateHttpLoader(http, '/apps/scm/cm/web/bo-material-front/materialform/i18n/', '.json'+ versionSuffix);
}

export let lang = {"zh-CHS":{"supplier_Supplier_SupplierName_7aeb0d3c_y8a1":"供应商名称","LookupEdit/supplier_Supplier_SupplierName_7aeb0d3c_y8a1/placeHolder":"","LookupEdit/supplier_Supplier_SupplierName_7aeb0d3c_y8a1/dialogTitle":"","root-component":"","root-layout":"","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","title":"物料管理表单","page-header-toolbar":"","button-add":"新增","button-edit":"编辑","button-save":"保存","button-cancel":"取消","button-delete":"删除","main-container":"","content-splitter":"","content-list":"","data-grid-component-ref":"","content-main":"","detail-component-ref":"","materialfile-f59o-component-ref":"","data-grid-component":"","data-grid-section":"","Section/data-grid-section/mainTitle":"","Section/data-grid-section/subTitle":"","dataGrid":"","DataGrid/dataGrid/lineNumberTitle":"","DataGrid/dataGrid/OperateEditButton":"编辑","DataGrid/dataGrid/OperateDeleteButton":"删除","DataGrid/dataGrid/OperateColumn":"操作","materialCode_8e70b36b_vkei":"物料编号","materialName_56e54326_wg3t":"物料名称","repertory_f8eb1982_xmhs":"库存数量","detail-form-component":"","detail-form-section":"","Section/detail-form-section/mainTitle":"基本信息","Section/detail-form-section/subTitle":"","detail-form-layout":"","materialCode_8e70b36b_qryg":"物料编号","TextBox/materialCode_8e70b36b_qryg/placeHolder":"","materialName_56e54326_c6uc":"物料名称","TextBox/materialName_56e54326_c6uc/placeHolder":"","materialCat_MaterialCat_CatName_f51993e2_lucw":"类别名称","LookupEdit/materialCat_MaterialCat_CatName_f51993e2_lucw/placeHolder":"","LookupEdit/materialCat_MaterialCat_CatName_f51993e2_lucw/dialogTitle":"","evePrice_90e943c4_iw5k":"市场价格","NumberSpinner/evePrice_90e943c4_iw5k/placeHolder":"","repertory_f8eb1982_51a0":"库存数量","NumberSpinner/repertory_f8eb1982_51a0/placeHolder":"","materialfile-f59o-component":"","materialfile-f59o-section":"","Section/materialfile-f59o-section/mainTitle":"相关附件","Section/materialfile-f59o-section/subTitle":"","materialfile-f59o-file":"","FileUploadPreview/materialfile-f59o-file/uploadSelectText":"上传附件","FileUploadPreview/materialfile-f59o-file/previewDefaultRename":""}};

@Pipe({ name: 'lang' })
export class LangPipe implements PipeTransform {
  constructor(private translate: TranslateService, private http: HttpClient) { }
  transform(key: string, langCode: string, defaultValue?: string) {
      
    const translateValue = this.translate.instant(key);
    if (translateValue == "JitI18nDefaultValue") {
      return defaultValue ? defaultValue : "";
    }

    return translateValue;
  }
}
@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    if (!url) {
      url = "";
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@Injectable()
export class LangService {
  constructor(private translate: TranslateService) { }
  transform(key: string, langCode: string, defaultValue?: string) {
    
    const translateValue = this.translate.instant(key);
    if (translateValue == "JitI18nDefaultValue") {
      return defaultValue ? defaultValue : "";
    }

    return translateValue;
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }

}

@Injectable()
export class TranslateResolveService implements Resolve<any>{

  constructor(private translate: TranslateService, private http: HttpClient) {
    translate.defaultLang = 'zh-CHS';
    translate.setTranslation('zh-CHS', lang['zh-CHS']);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let langCode = localStorage.getItem('languageCode');
    if (!langCode) {
      langCode = "zh-CHS";
    }
    if (langCode == "zh-CHS" || (this.translate.defaultLang === langCode && this.translate.currentLoader == createTranslateLoader(this.http,null))) {
      this.translate.setTranslation('zh-CHS', lang['zh-CHS']);
      return of(this.translate[langCode]);
    } else {
      const httpOb = this.http.get("/apps/scm/cm/web/bo-material-front/version.json?v=" + new Date().getTime()).pipe(switchMap((data)=>{
        let currentVersion = null;
        if (data instanceof Array) {
          const versionKey = "materialform/" + langCode + ".json";
          data.forEach((item) => {
            if (item.category == "i18n" && item.key == versionKey) {
              currentVersion = item.value;
            }
          });
        }

        this.translate.defaultLang = langCode;
        this.translate.currentLang = langCode;
        this.translate.currentLoader = createTranslateLoader(this.http, currentVersion);

    let tran = this.translate.getTranslation(langCode).pipe(catchError(err => {
      console.error("read resource file failed,please check!!! "+ err);
      return of(err);
    }));
    return tran;
      }));
      return httpOb;
    }
  }
}
