import * as tslib_1 from "tslib";
import { Component, Injector, ViewChild, HostBinding, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Form, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, FRAME_ID, BindingData, Repository, UIState, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { FocusInvalidService } from '@farris/command-services';
import { LookupGridComponent } from '@farris/ui-lookup';
import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { SuppliermaOholComponentViewmodel } from '../../viewmodels/suppliermaoholcomponentviewmodel';
import { SupplierMaRepository } from '../../models/suppliermarepository';
import { LangService } from '../../lang/lang-pipe';
import { SuppliermaOholComponentViewmodelForm } from '../../viewmodels/form/suppliermaoholcomponentviewmodelform';
import { SuppliermaOholComponentViewmodelUIState } from '../../viewmodels/uistate/suppliermaoholcomponentviewmodeluistate';
import { DIP_DATAIE_SERVICE } from '@gsp-dip/data-imp-exp';
var SuppliermaOholComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SuppliermaOholComponent, _super);
    function SuppliermaOholComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, componentManagerService, sanitizer, injector) {
        var _this = _super.call(this, injector) || this;
        _this.wizardSer = wizardSer;
        _this.keybindingService = keybindingService;
        _this.langService = langService;
        _this.route = route;
        _this.router = router;
        _this.rootElement = rootElement;
        _this.localizationService = localizationService;
        _this.frmI18nSettingService = frmI18nSettingService;
        _this.focusInvalidService = focusInvalidService;
        _this.componentManagerService = componentManagerService;
        _this.sanitizer = sanitizer;
        _this.injector = injector;
        _this.cls = 'f-struct-wrapper ';
        _this.lang = "";
        _this.size = {};
        _this.enabledLanguageList = [];
        _this.tabsToolbarStates = new BehaviorSubject({});
        _this.tabsToolbarVisibleStates = new BehaviorSubject({});
        _this.SectionsuppliermaoholformsectionMainTitle = _this.langService.transform('Section/supplierma-ohol-form-section/mainTitle', _this.lang, "联系方式");
        _this.SectionsuppliermaoholformsectionSubTitle = _this.langService.transform('Section/supplierma-ohol-form-section/subTitle', _this.lang, "");
        _this.LookupEditcontactsContactsName95a3cc07th3jDialogTitle = _this.langService.transform('LookupEdit/contacts_Contacts_Name_95a3cc07_th3j/dialogTitle', _this.lang, "");
        _this.contacts_Contacts_Name_95a3cc07_th3j_PlaceHolder = _this.langService.transform('LookupEdit/contacts_Contacts_Name_95a3cc07_th3j/placeHolder', _this.lang, "");
        _this.contacts_Contacts_Name_95a3cc07_th3jQuickSelect = {
            "enable": false,
            "showItemsCount": 10,
            "showMore": true
        };
        _this.contactsEmail_90701715_rtno_PlaceHolder = _this.langService.transform('TextBox/contactsEmail_90701715_rtno/placeHolder', _this.lang, "");
        _this.contactsAddress_f119b011_sfjn_PlaceHolder = _this.langService.transform('TextBox/contactsAddress_f119b011_sfjn/placeHolder', _this.lang, "");
        _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
            _this.focusInvalidService.focusInvalidInput(verifyInformations, _this.rootElement);
        });
        if (_this.frmI18nSettingService) {
            var i18nSetting = _this.frmI18nSettingService.getSetting();
            if (i18nSetting && i18nSetting.languages && i18nSetting.languages.length > 0) {
                i18nSetting.languages.forEach(function (item) {
                    _this.enabledLanguageList.push({
                        code: item.code,
                        name: item.name
                    });
                });
            }
            else {
                console.warn("get current enable languages is null. if this occurs,please ensure the form into the framework.");
                _this.enabledLanguageList.push({ "code": "en", "name": "English" });
                _this.enabledLanguageList.push({ "code": "zh-CHS", "name": "中文简体" });
            }
        }
        return _this;
    }
    SuppliermaOholComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                _this.keybindingService.register(keyBinding, function () {
                    return _this.viewModel[method]();
                });
            });
        }
        this.onFormLoad();
    };
    SuppliermaOholComponent.prototype.ngAfterViewInit = function () {
        this.componentManagerService.appendControl('contacts_Contacts_Name_95a3cc07_th3j', this.contacts_Contacts_Name_95a3cc07_th3j);
    };
    SuppliermaOholComponent.prototype.ngOnDestroy = function () {
        // 增加表单的自我销毁
        this.context.dispose && this.context.dispose();
        this.context = null;
        this.subscription = null;
        this.declaration = null;
        this.wizardSer = null;
        this.keybindingService = null;
        this.langService = null;
        this.route = null;
        this.router = null;
        this.rootElement = null;
        this.localizationService = null;
        this.frmI18nSettingService = null;
        this.focusInvalidService = null;
        this.sanitizer = null;
        this.injector = null;
        this.enabledLanguageList = [];
    };
    SuppliermaOholComponent.prototype.handleSizeChange = function (size) {
        this.size = size;
    };
    SuppliermaOholComponent.prototype.onFormLoad = function () {
    };
    tslib_1.__decorate([
        ViewChild('contacts_Contacts_Name_95a3cc07_th3j'),
        tslib_1.__metadata("design:type", LookupGridComponent)
    ], SuppliermaOholComponent.prototype, "contacts_Contacts_Name_95a3cc07_th3j", void 0);
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], SuppliermaOholComponent.prototype, "cls", void 0);
    SuppliermaOholComponent = tslib_1.__decorate([
        Component({
            selector: 'app-suppliermaoholcomponent',
            templateUrl: './suppliermaoholcomponent.html',
            styleUrls: ['./suppliermaoholcomponent.scss'],
            providers: [
                FARRIS_DEVKIT_FRAME_PROVIDERS,
                FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                { provide: FRAME_ID, useValue: 'supplierma-ohol-component' },
                { provide: BindingData, useClass: BindingData },
                { provide: Repository, useExisting: SupplierMaRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: Form, useClass: SuppliermaOholComponentViewmodelForm },
                { provide: UIState, useClass: SuppliermaOholComponentViewmodelUIState },
                DIP_DATAIE_SERVICE,
                { provide: ViewModel, useClass: SuppliermaOholComponentViewmodel },
                { provide: EXCEPTION_HANDLER, useValue: null },
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [WizardService,
            KeybindingService,
            LangService,
            ActivatedRoute,
            Router,
            ElementRef,
            LocalizationService,
            FrmI18nSettingService,
            FocusInvalidService,
            ComponentManagerService,
            DomSanitizer,
            Injector])
    ], SuppliermaOholComponent);
    return SuppliermaOholComponent;
}(FrameComponent));
export { SuppliermaOholComponent };
