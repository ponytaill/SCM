
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
  return new TranslateHttpLoader(http, '/apps/scm/cm/web/bo-supplierma-front/suppliermalist/i18n/', '.json'+ versionSuffix);
}

export let lang = {"zh-CHS":{"contacts_1a95777a_n4vc":"联系人","root-component":"","root-layout":"","query-scheme-section":"","Section/query-scheme-section/mainTitle":"主标题","Section/query-scheme-section/subTitle":"","query-scheme-1":"默认筛选方案","QueryScheme/query-scheme-1/76a00c6e-52e4-4d31-aeaf-4b4c225babbf":"主键","QueryScheme/query-scheme-1/76a00c6e-52e4-4d31-aeaf-4b4c225babbf/placeHolder":"","QueryScheme/query-scheme-1/9445bd0f-3554-4776-b9a3-0686ea4460ba":"版本","QueryScheme/query-scheme-1/9445bd0f-3554-4776-b9a3-0686ea4460ba/placeHolder":"","QueryScheme/query-scheme-1/8347d63a-678f-4ba1-8007-d4eb80046fbc":"供应商名称","QueryScheme/query-scheme-1/8347d63a-678f-4ba1-8007-d4eb80046fbc/placeHolder":"","QueryScheme/query-scheme-1/cff3b19d-3a45-46a6-9209-5724e21f874d":"供应商编号","QueryScheme/query-scheme-1/cff3b19d-3a45-46a6-9209-5724e21f874d/placeHolder":"","QueryScheme/query-scheme-1/1a95777a-e315-49f3-a50d-58a6101ac8a3":"联系人姓名","QueryScheme/query-scheme-1/1a95777a-e315-49f3-a50d-58a6101ac8a3/placeHolder":"","QueryScheme/query-scheme-1/3826040b-3fca-4557-b236-19879dd78412":"ID","QueryScheme/query-scheme-1/3826040b-3fca-4557-b236-19879dd78412/placeHolder":"","QueryScheme/query-scheme-1/b340437c-eccc-4fa8-9d16-d83f0564a66a":"名称","QueryScheme/query-scheme-1/b340437c-eccc-4fa8-9d16-d83f0564a66a/placeHolder":"","QueryScheme/query-scheme-1/ba0a510a-c94e-45d0-87ff-16e2c2738a5e":"编号","QueryScheme/query-scheme-1/ba0a510a-c94e-45d0-87ff-16e2c2738a5e/placeHolder":"","QueryScheme/query-scheme-1/d64a584e-a868-4d94-8c53-71406ec7b3d8":"联系人邮箱","QueryScheme/query-scheme-1/d64a584e-a868-4d94-8c53-71406ec7b3d8/placeHolder":"","QueryScheme/query-scheme-1/0413715c-226e-4b32-b609-b0b019c602a9":"办公地址","QueryScheme/query-scheme-1/0413715c-226e-4b32-b609-b0b019c602a9/placeHolder":"","QueryScheme/query-scheme-1/9a10dffd-b310-414d-9b37-14d8eea15542":"注册时间","QueryScheme/query-scheme-1/9a10dffd-b310-414d-9b37-14d8eea15542/placeHolder":"","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","title":"供应商管理表单","page-header-toolbar":"","button-add":"新增","button-edit":"编辑","button-view":"查看","button-delete":"删除","page-main":"","data-grid-component-ref":"","data-grid-component":"","data-grid-section":"","Section/data-grid-section/mainTitle":"","Section/data-grid-section/subTitle":"","dataGrid":"","DataGrid/dataGrid/lineNumberTitle":"","DataGrid/dataGrid/OperateEditButton":"编辑","DataGrid/dataGrid/OperateDeleteButton":"删除","DataGrid/dataGrid/OperateColumn":"操作","supplierName_8347d63a_bhow":"供应商名称","supplierCode_cff3b19d_scg5":"供应商编号","contacts_Contacts_Name_b340437c_f4rv":"联系人","contactsEmail_d64a584e_qs3a":"联系人邮箱","contactsAddress_0413715c_u5sw":"办公地址","signTime_9a10dffd_sb3z":"注册时间","remark_8a27efaa_zbgx":"备注"}};

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
      const httpOb = this.http.get("/apps/scm/cm/web/bo-supplierma-front/version.json?v=" + new Date().getTime()).pipe(switchMap((data)=>{
        let currentVersion = null;
        if (data instanceof Array) {
          const versionKey = "suppliermalist/" + langCode + ".json";
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
