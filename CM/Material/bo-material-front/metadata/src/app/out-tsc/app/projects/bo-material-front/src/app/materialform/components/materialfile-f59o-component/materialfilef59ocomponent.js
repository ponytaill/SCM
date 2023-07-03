import * as tslib_1 from "tslib";
import { Component, Injector, HostBinding, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Form, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, BindingData, Repository, UIState, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { FocusInvalidService } from '@farris/command-services';
import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { MaterialfileF59oComponentViewmodel } from '../../viewmodels/materialfilef59ocomponentviewmodel';
import { MaterialRepository } from '../../models/materialrepository';
import { LangService } from '../../lang/lang-pipe';
import { MaterialfileF59oComponentViewmodelForm } from '../../viewmodels/form/materialfilef59ocomponentviewmodelform';
import { MaterialfileF59oComponentViewmodelUIState } from '../../viewmodels/uistate/materialfilef59ocomponentviewmodeluistate';
import { materialfilef59ocomponentviewmodeladdFileRows1Handler } from '../../viewmodels/handlers/materialfilef59ocomponentviewmodeladdfilerows1handler';
import { materialfilef59ocomponentviewmodelremoveFileRows1Handler } from '../../viewmodels/handlers/materialfilef59ocomponentviewmodelremovefilerows1handler';
var MaterialfileF59oComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MaterialfileF59oComponent, _super);
    function MaterialfileF59oComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, sanitizer, injector) {
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
        _this.sanitizer = sanitizer;
        _this.injector = injector;
        _this.cls = 'f-struct-wrapper ';
        _this.lang = "";
        _this.size = {};
        _this.enabledLanguageList = [];
        _this.tabsToolbarStates = new BehaviorSubject({});
        _this.tabsToolbarVisibleStates = new BehaviorSubject({});
        _this.Sectionmaterialfilef59osectionMainTitle = _this.langService.transform('Section/materialfile-f59o-section/mainTitle', _this.lang, "相关附件");
        _this.Sectionmaterialfilef59osectionSubTitle = _this.langService.transform('Section/materialfile-f59o-section/subTitle', _this.lang, "");
        _this.fileUpload_materialfile_f59o_file_SelectText = _this.langService.transform('FileUploadPreview/materialfile-f59o-file/uploadSelectText', _this.lang, "上传附件");
        _this.file_materialfile_f59o_file_DefaultName = _this.langService.transform('FileUploadPreview/materialfile-f59o-file/previewDefaultRename', _this.lang, "");
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
    MaterialfileF59oComponent.prototype.ngOnInit = function () {
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
    MaterialfileF59oComponent.prototype.ngAfterViewInit = function () {
    };
    MaterialfileF59oComponent.prototype.ngOnDestroy = function () {
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
    MaterialfileF59oComponent.prototype.handleSizeChange = function (size) {
        this.size = size;
    };
    MaterialfileF59oComponent.prototype.onFormLoad = function () {
    };
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], MaterialfileF59oComponent.prototype, "cls", void 0);
    MaterialfileF59oComponent = tslib_1.__decorate([
        Component({
            selector: 'app-materialfilef59ocomponent',
            templateUrl: './materialfilef59ocomponent.html',
            styleUrls: ['./materialfilef59ocomponent.scss'],
            providers: [
                FARRIS_DEVKIT_FRAME_PROVIDERS,
                FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                { provide: FRAME_ID, useValue: 'materialfile-f59o-component' },
                { provide: BindingData, useClass: BindingData },
                { provide: Repository, useExisting: MaterialRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: Form, useClass: MaterialfileF59oComponentViewmodelForm },
                { provide: UIState, useClass: MaterialfileF59oComponentViewmodelUIState },
                { provide: ViewModel, useClass: MaterialfileF59oComponentViewmodel },
                { provide: EXCEPTION_HANDLER, useValue: null },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: materialfilef59ocomponentviewmodeladdFileRows1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: materialfilef59ocomponentviewmodelremoveFileRows1Handler, multi: true },
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
            DomSanitizer,
            Injector])
    ], MaterialfileF59oComponent);
    return MaterialfileF59oComponent;
}(FrameComponent));
export { MaterialfileF59oComponent };
