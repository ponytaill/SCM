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
import { BasicFormViewmodel } from '../../viewmodels/basicformviewmodel';
import { MaterialPlanRepository } from '../../models/materialplanrepository';
import { LangService } from '../../lang/lang-pipe';
import { BasicFormViewmodelForm } from '../../viewmodels/form/basicformviewmodelform';
import { BasicFormViewmodelUIState } from '../../viewmodels/uistate/basicformviewmodeluistate';
import { DIP_DATAIE_SERVICE } from '@gsp-dip/data-imp-exp';
var BasicFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BasicFormComponent, _super);
    function BasicFormComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, componentManagerService, sanitizer, injector) {
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
        _this.SectionbasicformsectionMainTitle = _this.langService.transform("Section/basic-form-section/mainTitle", _this.lang, "基本信息");
        _this.SectionbasicformsectionSubTitle = _this.langService.transform("Section/basic-form-section/subTitle", _this.lang, "");
        _this.LookupEditapplicantApplicantNamed4373c286dicDialogTitle = _this.langService.transform("LookupEdit/applicant_Applicant_Name_d4373c28_6dic/dialogTitle", _this.lang, "");
        _this.applicant_Applicant_Name_d4373c28_6dic_PlaceHolder = _this.langService.transform("LookupEdit/applicant_Applicant_Name_d4373c28_6dic/placeHolder", _this.lang, "");
        _this.applicant_Applicant_Name_d4373c28_6dicQuickSelect = {
            "enable": false,
            "showItemsCount": 10,
            "showMore": true
        };
        _this.LookupEditpurchaseDeptPurchaseDeptname8d6e8922yvzrDialogTitle = _this.langService.transform("LookupEdit/purchaseDept_PurchaseDept_name_8d6e8922_yvzr/dialogTitle", _this.lang, "");
        _this.purchaseDept_PurchaseDept_name_8d6e8922_yvzr_PlaceHolder = _this.langService.transform("LookupEdit/purchaseDept_PurchaseDept_name_8d6e8922_yvzr/placeHolder", _this.lang, "");
        _this.purchaseDept_PurchaseDept_name_8d6e8922_yvzrQuickSelect = {
            "enable": false,
            "showItemsCount": 10,
            "showMore": true
        };
        _this.LookupEditpurchaserPurchaserName55f1e399hz5jDialogTitle = _this.langService.transform("LookupEdit/purchaser_Purchaser_Name_55f1e399_hz5j/dialogTitle", _this.lang, "");
        _this.purchaser_Purchaser_Name_55f1e399_hz5j_PlaceHolder = _this.langService.transform("LookupEdit/purchaser_Purchaser_Name_55f1e399_hz5j/placeHolder", _this.lang, "");
        _this.purchaser_Purchaser_Name_55f1e399_hz5jQuickSelect = {
            "enable": false,
            "showItemsCount": 10,
            "showMore": true
        };
        _this.totalPrice_1c1f8bdb_p30m_PlaceHolder = _this.langService.transform("NumericBox/totalPrice_1c1f8bdb_p30m/placeHolder", _this.lang, "");
        _this.totalPrice1c1f8bdbP30mTextOptions = {
            "type": "number",
            "useThousands": true,
            "precision": 2,
        };
        _this.deliveryDate_7be8a928_jelq_PlaceHolder = _this.langService.transform("DateBox/deliveryDate_7be8a928_jelq/placeHolder", _this.lang, "");
        _this.planCode_7b926633_5dke_PlaceHolder = _this.langService.transform("TextBox/planCode_7b926633_5dke/placeHolder", _this.lang, "");
        _this.planName_fbe5d590_15n2_PlaceHolder = _this.langService.transform("TextBox/planName_fbe5d590_15n2/placeHolder", _this.lang, "");
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
    BasicFormComponent.prototype.ngOnInit = function () {
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
    BasicFormComponent.prototype.ngAfterViewInit = function () {
        this.componentManagerService.appendControl('applicant_Applicant_Name_d4373c28_6dic', this.applicant_Applicant_Name_d4373c28_6dic);
        this.componentManagerService.appendControl('purchaseDept_PurchaseDept_name_8d6e8922_yvzr', this.purchaseDept_PurchaseDept_name_8d6e8922_yvzr);
        this.componentManagerService.appendControl('purchaser_Purchaser_Name_55f1e399_hz5j', this.purchaser_Purchaser_Name_55f1e399_hz5j);
    };
    BasicFormComponent.prototype.ngOnDestroy = function () {
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
    BasicFormComponent.prototype.handleSizeChange = function (size) {
        this.size = size;
    };
    BasicFormComponent.prototype.onFormLoad = function () {
    };
    tslib_1.__decorate([
        ViewChild('applicant_Applicant_Name_d4373c28_6dic'),
        tslib_1.__metadata("design:type", LookupGridComponent)
    ], BasicFormComponent.prototype, "applicant_Applicant_Name_d4373c28_6dic", void 0);
    tslib_1.__decorate([
        ViewChild('purchaseDept_PurchaseDept_name_8d6e8922_yvzr'),
        tslib_1.__metadata("design:type", LookupGridComponent)
    ], BasicFormComponent.prototype, "purchaseDept_PurchaseDept_name_8d6e8922_yvzr", void 0);
    tslib_1.__decorate([
        ViewChild('purchaser_Purchaser_Name_55f1e399_hz5j'),
        tslib_1.__metadata("design:type", LookupGridComponent)
    ], BasicFormComponent.prototype, "purchaser_Purchaser_Name_55f1e399_hz5j", void 0);
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], BasicFormComponent.prototype, "cls", void 0);
    BasicFormComponent = tslib_1.__decorate([
        Component({
            selector: 'app-basicformcomponent',
            templateUrl: './basicformcomponent.html',
            styleUrls: ['./basicformcomponent.scss'],
            providers: [
                FARRIS_DEVKIT_FRAME_PROVIDERS,
                FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                { provide: FRAME_ID, useValue: 'basic-form-component' },
                { provide: BindingData, useClass: BindingData },
                { provide: Repository, useExisting: MaterialPlanRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: Form, useClass: BasicFormViewmodelForm },
                { provide: UIState, useClass: BasicFormViewmodelUIState },
                DIP_DATAIE_SERVICE,
                { provide: ViewModel, useClass: BasicFormViewmodel },
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
    ], BasicFormComponent);
    return BasicFormComponent;
}(FrameComponent));
export { BasicFormComponent };
