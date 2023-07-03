/*! UPDATE TIME: 2023-7-2 16:34:23 */
System.register(['@angular/core', 'tslib', '@angular/common', '@angular/forms', '@farris/kendo-binding', '@progress/kendo-angular-layout', '@farris/ui-flex-layout', '@farris/ui-forms', '@farris/ui-forms/validation-message', '@farris/ui-loading', '@farris/ui-messager', '@farris/ui-notify', '@farris/ui-response-toolbar', '@farris/bef', '@ngx-translate/core', '@ngx-translate/http-loader', 'rxjs', 'rxjs/operators', '@angular/common/http', '@angular/platform-browser', '@farris/devkit', '@farris/command-services', '@farris/ui-verify-detail', '@ecp-caf/caf-common', '@gsp-sys/rtf-common', '@farris/ui-tooltip', '@progress/kendo-angular-grid', '@progress/kendo-angular-dateinputs', '@progress/kendo-angular-dropdowns', '@progress/kendo-angular-buttons', '@progress/kendo-angular-inputs', '@progress/kendo-angular-intl', '@progress/kendo-angular-intl/locales/zh/all', '@farris/ui-lookup', '@farris/ui-treetable', '@farris/ui-field-group', '@farris/ui-tabs', '@farris/ui-tag', '@farris/ui-sidebar', '@gsp-svc/formdoc-upload', '@farris/ui-section', '@farris/ui-datepicker', '@farris/ui-time-spinner', '@farris/ui-datagrid', '@farris/ui-wizard', '@gsp-cmp/querysolution', '@farris/ui-button', '@farris/ui-list-view', '@farris/ui-time-picker', '@farris/ui-draggable', '@farris/ui-splitter', '@farris/ui-list-nav', '@farris/ui-text', '@gsp-wf/rtdevkit', '@farris/ui-multi-select', '@farris/ui-input-group', '@farris/ui-combo-list', '@farris/ui-html-editor', '@gsp-svc/cloudprint', '@farris/ui-datagrid-editors', '@farris/ui-view-change', '@farris/ui-switch', '@farris/ui-list-filter', '@farris/ui-filter', '@farris/ui-avatar', '@farris/ui-calendar', '@gsp-wf/ui-flowchart', '@farris/ui-number-spinner', '@farris/ui-combo-lookup', '@farris/ui-scrollspy', '@gsp-svc/file-viewer', '@farris/ui-language-textbox', '@farris/dynamic-control-group', '@farris/ui-batch-edit-dialog', '@farris/ui-datagrid-filter', '@farris/ui-datagrid-settings', '@farris/ui-footer', '@farris/discussion-group', '@farris/ui-nav', '@farris/tags', '@farris/ui-editor', '@farris/extend-fileupload-adapt-unifile', '@farris/extend-header-footer', '@farris/extend-page-modal', '@farris/ui-feature-editor', '@farris/extend-scroll-collapsible-area', '@angular/router', '@gsp-dip/data-imp-exp', '@farris/ui-common', '@farris/ui-loading/farris-ui-loading.ngfactory', '@farris/ui-tooltip/farris-ui-tooltip.ngfactory', '@farris/ui-modal/farris-ui-modal.ngfactory', '@farris/ui-messager/farris-ui-messager.ngfactory', '@farris/ui-notify/farris-ui-notify.ngfactory', '@farris/ui-popover/farris-ui-popover.ngfactory', '@farris/ui-context-menu/farris-ui-context-menu.ngfactory', '@farris/ui-datatable/farris-ui-datatable.ngfactory', '@farris/ui-treetable/farris-ui-treetable.ngfactory', '@farris/ui-lookup/farris-ui-lookup.ngfactory', '@farris/ui-time-picker/farris-ui-time-picker.ngfactory', '@farris/ui-datepicker/farris-ui-datepicker.ngfactory', '@farris/ui-filter-panel/farris-ui-filter-panel.ngfactory', '@progress/kendo-angular-popup.ngfactory', '@gsp-svc/file-viewer/gsp-svc-file-viewer.ngfactory', '@gsp-wf/wf-approval-logs/gsp-wf-wf-approval-logs.ngfactory', '@gsp-wf/ui-flowchart/gsp-wf-ui-flowchart.ngfactory', '@farris/ui-language-textbox/farris-ui-language-textbox.ngfactory', '@farris/ui-modal', 'lodash-es', '@farris/ui-locale', '@farris/ui-perfect-scrollbar', '@farris/ui-popover/farris-ui-popover.ngfactory', '@farris/ui-tooltip/farris-ui-tooltip.ngfactory', '@farris/ui-modal/farris-ui-modal.ngfactory', '@farris/ui-messager/farris-ui-messager.ngfactory', '@farris/ui-notify/farris-ui-notify.ngfactory', '@farris/ui-loading/farris-ui-loading.ngfactory', '@farris/ui-context-menu/farris-ui-context-menu.ngfactory', '@farris/ui-datatable/farris-ui-datatable.ngfactory', '@farris/ui-treetable/farris-ui-treetable.ngfactory', '@farris/ui-lookup/farris-ui-lookup.ngfactory', '@farris/ui-popover', '@farris/ui-modal/positioning', '@farris/ui-modal/component-loader', '@farris/ui-pagination', '@farris/ui-common/date', '@farris/ui-common/number', '@farris/ui-common/column', '@farris/ui-context-menu', '@farris/ui-common/events', '@farris/ui-dialog', '@farris/ui-area-response', '@farris/ui-layout', '@farris/ui-datatable', '@farris/ui-perfect-scrollbar/farris-ui-perfect-scrollbar.ngfactory', '@farris/ui-input-group/farris-ui-input-group.ngfactory', '@farris/ui-filter-editor/farris-ui-filter-editor.ngfactory', '@farris/ui-sort-editor/farris-ui-sort-editor.ngfactory', '@farris/ui-datagrid-editors/farris-ui-datagrid-editors.ngfactory', '@gsp-wf/wf-task-handler/gsp-wf-wf-task-handler.ngfactory', '@farris/ui-verify-detail/farris-ui-verify-detail.ngfactory', '@progress/kendo-angular-grid.ngfactory', '@farris/ui-tabs/farris-ui-tabs.ngfactory', '@gsp-svc/formdoc-upload/gsp-svc-formdoc-upload.ngfactory', '@farris/component-querycondition/farris-component-querycondition.ngfactory', '@gsp-cmp/querysolution/gsp-cmp-querysolution.ngfactory', '@farris/ui-splitter/farris-ui-splitter.ngfactory', '@gsp-wf/rtdevkit/gsp-wf-rtdevkit.ngfactory', '@progress/kendo-angular-dialog.ngfactory', '@gsp-svc/cloudprint/gsp-svc-cloudprint.ngfactory', '@farris/dynamic-control-group/farris-dynamic-control-group.ngfactory', '@farris/ui-batch-edit-dialog/farris-ui-batch-edit-dialog.ngfactory', '@farris/discussion-group/farris-discussion-group.ngfactory', '@farris/extend-file-upload/farris-extend-file-upload.ngfactory', '@farris/ui-datagrid-filter/farris-ui-datagrid-filter.ngfactory', '@farris/ui-organization-selector/farris-ui-organization-selector.ngfactory', '@farris/ui-datagrid-settings/farris-ui-datagrid-settings.ngfactory', '@farris/extend-page-modal/farris-extend-page-modal.ngfactory', '@farris/ui-feature-editor/farris-ui-feature-editor.ngfactory', '@farris/ui-response-toolbar/farris-ui-response-toolbar.ngfactory', '@farris/ui-datagrid/farris-ui-datagrid.ngfactory', '@gsp-wf/wf-task-handler', '@farris/ui-section/farris-ui-section.ngfactory', '@farris/ui-shortcuts', '@farris/ui-text/farris-ui-text.ngfactory', '@farris/ui-forms/validation-message/farris-ui-forms-validation-message.ngfactory', '@farris/ui-switch/farris-ui-switch.ngfactory', '@farris/ui-number-spinner/farris-ui-number-spinner.ngfactory', '@progress/kendo-angular-dialog', '@gsp-dip/data-imp-exp/gsp-dip-data-imp-exp.ngfactory', '@progress/kendo-angular-l10n', '@farris/ui-filter-condition', '@gsp-sys/sysmgr-common', '@gsp-sys/sysmgr-ui', '@progress/kendo-angular-popup', '@gsp-wf/wf-approval-logs', '@progress/kendo-angular-resize-sensor', '@farris/component-querycondition', '@gsp-wf/ui-comment', '@farris/extend-file-upload', '@farris/ui-datalist', '@farris/ui-filter-panel', '@farris/ui-dropdown', '@gsp-wf/task-impl-api', '@gsp-wf/wf-sign', '@farris/ui-filter-editor', '@farris/ui-sort-editor', '@farris/ui-progress', '@farris/ui-progress-step', '@farris/ui-tree', '@farris/ui-organization-selector', '@progress/kendo-angular-excel-export', '@progress/kendo-angular-treeview'], function (exports, module) {
    'use strict';
    var Pipe, Injectable, Injector, HostBinding, Component, ElementRef, NgModule, ViewChild, LOCALE_ID, ɵcmf, ɵmod, ɵmpd, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, NgModuleRef, ɵcrt, ɵccf, ɵvid, ɵeld, ɵdid, ViewContainerRef, ChangeDetectorRef, Renderer2, Input, Output, defineInjectable, inject, INJECTOR, forwardRef, EventEmitter, RendererFactory2, PLATFORM_ID, NgZone, ApplicationRef, ɵnov, ɵprd, ɵpid, ɵqud, ɵted, ɵppd, ɵand, TemplateRef, IterableDiffers, ɵunv, ɵEMPTY_MAP, KeyValueDiffers, ɵpod, ɵinlineInterpolate, ɵpad, ɵEMPTY_ARRAY, Compiler, Inject, InjectionToken, ErrorHandler, __decorate, __metadata, __extends, __spread, CommonModule, NgLocalization, NgLocaleLocalization, ɵangular_packages_common_common_a, NgForOf, NgIf, NgClass, DOCUMENT, isPlatformBrowser, FormControl, FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_bc, DefaultValueAccessor, COMPOSITION_BUFFER_MODE, NgModel, NgControl, NgControlStatus, FormGroupDirective, ControlContainer, NgControlStatusGroup, FormControlName, ɵangular_packages_forms_forms_k, MaxLengthValidator, NG_VALIDATORS, FormBuilder, DateConverter, KendoBindingModule, FarrisDatagridUseBindingDataDirective, EditableDirective, FarrisDataGridEndEditDirective, FarrisDataGridRemoteSummaryDirective, DatagridComponentRefDirective, SectionComponentRefDirective, InputEndEditDirective, LookupDataMappingDirective, LookupGridComponentRefDirective, DatepickerComponentRefDirective, NumberSpinnerComponentRefDirective, FarrisKendoGridFormatService, FarrisTreetableFormatService, LayoutModule, PanelBarModule, SplitterModule$1, TabStripModule, FlexLayoutModule, FarrisFormsModule, FormMessageModule, ValidationMessageComponent, LoadingModule, LoadingService, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, MessagerModule, MessagerService, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, NotifyModule, NotifyService, FResponseToolbarModule, ResponseToolbarComponent, Uri, UriService, BefProxy, BefRepository, BefLookupRestService, DefaultComboHttpService, FrameworkSessionService, BE_SESSION_HANDLING_STRATEGY_TOKEN, BE_SERVER_URI_TOKEN, TranslateService, TranslateModule, TranslateLoader, MissingTranslationHandler, TranslateStore, TranslateCompiler, TranslateFakeCompiler, TranslateParser, TranslateDefaultParser, USE_DEFAULT_LANG, USE_STORE, TranslateHttpLoader, of, Observable, BehaviorSubject, Subject, switchMap, catchError, HttpClient, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_f, HTTP_INTERCEPTORS, HttpClientXsrfModule, HttpClientModule, ɵangular_packages_common_http_http_d, XhrFactory, HttpXhrBackend, HttpBackend, HttpHandler, ɵHttpInterceptingHandler, DomSanitizer, EventManager, Declaration, NgCommand, ViewModel, NgField, NgEntity, Entity, NgObject, NgList, EntityList, NgRepository, NgValidateForm, Form, NgState, State, NgRenderState, NgAction, StateMachine, NgParam, UIState, NgCommandHandler, CommandHandler, FrameContext, BindingData, FARRIS_DEVKIT_FRAME_PROVIDERS, FRAME_ID, Repository, NAMESPACE, TranslateToken, FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS, AppContext, PARAM_TYPE_TRANSFORM_TOKEN, FORM_ID, EXCEPTION_HANDLER, BACK_END_MESSAGE_HANDLER_TOKEN, COMMAND_HANDLERS_TOKEN, FrameComponent, NgFormControl, FARRIS_DEVKIT_APP_PROVIDERS, FORM_PATH_TOKEN, CommandHandlerRegistry, CommandHandlerExtenderRegistry, COMMAND_HANDLER_EXTENDERS_TOKEN, CommandHandlerFactory, VariableParseService, CommandBus, RouterParamService, ResolveService, ExpressionExecutor, FORM_MANIFEST_SERVICE_TOKEN, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, FRAME_COMPONENT_INIT_HANDLER_TOKEN, UserSettingsToken, AppContextManager, RESOLVER_TOKEN, EntityDependencyResolver, StateDependencyResolver, CommentDependencyResolver, ResolverRegistry, LISTENER_TOKEN, UIStateChangeListener, RepositoryChangeListener, BindingDataChangeListener, EFFECTOR_TOKEN, RepositoryEffector, UIStateEffector, ReadonlyEffector, DependencyEffector, RelativeEffector, ValidateEffector, RequiredEffector, VisibleEffector, ListenerRegistry, Listeners, EffectorRegistry, EffectorFactory, ExpressionRegistry, ExpressionEventEmitter, ExpressionResult, ExpressionManager, ExpressionResultFactory, EVENT_HANDLER_TOKEN, RepositoryAddEntityEventHandler, RepositoryRemoveEntityEventHandler, EntityValueChangedEventHandler, StateValueChangedEventHandler, RepositoryLoadEventHandler, EntityUpdateEventHandler, BindingDataAppendObjectEventHandler, BindingDataValueChangeEventHandler, BindingDataRemoveObjectEventHandler, BindingDataLoadEventHandler, BindingDataSelectionChangedEventHandler, EventHandlerRegistry, ExpressionEngineImpl, FrameEventBus, EventBus, Subscription, RestfulService, VARIABLE_PARSERS, FrameIdVariableParser, ɵa$3, EventParamVariableParser, DataVariableParser, UIStateVariableParser, StateMachineVariableParser, CommandVariableParser, NavigationMiddlewareService, CommandService, CardDataService, StateMachineService, ValidationService, EndEditService, PaginationService, ChangeItemService, FormMessageService, FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService, ExceptionHandler, BackEndMessageHandler, KeybindingService, LocalizationService, ApplicationParamService, FocusInvalidService, SubListDataService, DataGridService, ListDataService, CommandServicesModule, FormLoadingService, LanguageService, FormNotifyService, FormErrorService, FilterConditionService, UIStateService, BindingDataService, EntityTraversingService, EntityManipulationService, EntityAggregationService, EntityListService, EntityService, TreeDataService, SubTreeDataService, RuntimeFrameworkService, RemoveDataService, SaveDataService, EditDataService, FilterConditionDataService, RemoteSummaryService, BeActionService, ApproveService, PrintService, AttachmentDataService, AttachmentService, FileService, NavigationEventService, MenuStateService, QuerystringService, NavigationService, GridMiddlewareService, SidebarService, FarrisFormService, FARRIS_FORM_COMPONENTS, DialogService$1, RouterService, AuthorityService, ɵb, ɵc, BatchEditService, DiscussionGroupService, FormAttentionService, FeatureDataService, FeatureRepository, FeatureEditService, ExpressionService, PopUpService, DirtyCheckingService, FormService, ViewModelService, FormManifestService, FormExpressionManifestService, WorkFlowMessageHandler, WorkFlowMessageService, WorkFlowMessage, BindingPathService, FormControlService, FrameContextService, HideEventService, FormWizardService, CheckService, DataCheckService, EventService, FilterService$2, ParamService, UserSettingsService, VerifyDetailService, VerifyDetailModule, FrmCommonModule, SessionService, LanguageService$1, HttpService, CacheStorageAbstract, CacheMemoryStorage, CacheService, WindowVariableService, TabEntityService, FrmI18nSettingService, FrameworkService, FrameworkVariableService, AppService, FrmEventBus, FuncsService, LoadingService$1, CommonSharedModule, FarrisTooltipModule, AttentionService, FInputTipsDirective, GridModule, GridComponent, BrowserSupportService, SelectionService, GroupInfoService, GroupsService, ChangeNotificationService, DetailsService, EditService$1, FilterService, PDFService, ResponsiveService, ExcelService, ScrollSyncService, DomEventsService, ColumnResizingService, ColumnReorderService, ColumnInfoService, NavigationService$1, SortService, SharedModule, DragAndDropModule, GroupModule, BodyModule, SharedFilterModule, RowFilterModule, FilterMenuModule, ColumnMenuModule, HeaderModule, FooterModule, PagerModule, ExcelModule, PDFModule, DateInputsModule, DOMService, CenturyViewService, DecadeViewService, MonthViewService, YearViewService, WeekNamesService, NavigationService$2, BusViewService, DOMService$1, HoursService, MinutesService, SecondsService, DayPeriodService, EventsModule$1, DateInputModule, CalendarCommonModule, TemplatesModule, VirtualizationModule, CalendarModule$1, DatePickerModule, MultiViewCalendarModule, CalendarsModule, TimePickerModule$1, DateRangeModule, TOUCH_ENABLED, touchEnabled, DropDownsModule, SharedDirectivesModule, SharedModule$1, DropDownListModule, AutoCompleteModule, ComboBoxModule, MultiSelectModule$1, TOUCH_ENABLED$1, touchEnabled$1, ButtonsModule, ButtonModule, ButtonGroupModule, ListModule, SplitButtonModule, DropDownButtonModule, InputsModule, EventsModule, NumericTextBoxModule, TextBoxModule, DraggableModule, SliderModule, SwitchModule$1, MaskedTextBoxModule, IntlModule, IntlService, CldrIntlService, ServerSideToken, LookupGridComponent, LookupModule, LookupComponent, PersonalConfigService, LookupDefaultMapping, LookupUtils, TreeTableModule, TreetableService, TTHotkeys, FieldGroupModule, ɵa, FarrisTabsModule, FarrisTabsComponent, TabService, FarrisTabComponent, NgbDropdownConfig, NgbTooltipConfig, TabConfig, NgbDropdownModule, NgbTooltipModule, FarrisTagModule, FarrisSidebarModule, FarrisSidebarService, UploadDialogMoudle, UploadDialogService, DownloadService, UploadService, UploadModule, FarrisSectionModule, FarrisSectionComponent, FarrisDatePickerModule, UtilService, DefaultConfigService, FarrisDatepickerComponent, FarrisTimeSpinnerModule, CalculationType, DatagridComponent, GRID_SETTINGS_HTTP, DatagridModule, DatagridSmartFilterService, DatagridFacadeService, DatagridService, ɵt, ValidatorMessagerService, GRID_SETTINGS_SERVICE, NgxPaginationModule, ScrollbarModule, DatagridSmartFilterModule, SCROLLBAR_CONFIG, GRID_EDITORS, GRID_FILTER_ROW, WizardService, WizardModule, QuerySolutionModule, QUERYSOLUTION_HANDLER_TOKEN, FarrisButtonModule, ListViewModule, TimePickerModule, AngularDraggableModule, SplitterModule, ListNavModule, TextModule, TextComponent, WFSubmiteService, WFRuntimeModule, I18nService$1, TaskService$1, UserService, MultiSelectModule, InputGroupModule, InputGroupComponent, ComboServerSideToken, ComboListModule, ComboLocaleService, FarrisHtmlEditorModule, ɵb$3, defaultModules, CloudprintService, CloudPrintModule, ɵa$1, ɵb$1, ɵc$2, ɵe, EditorTypes, DatagridEditorsModule, EditorProviders, DatagridTextareaComponent, DatagridTextboxComponent, ɵa$4, ɵb$2, ɵc$3, ɵd$2, ɵe$1, ɵf$3, ɵg$2, ɵh$1, ɵi, ɵj$1, ɵk, DatagridEnumEditorComponent, DatagridFilterEditorComponent, DatagridSortEditorComponent, ViewChangeModule, SwitchModule, SwitchComponent, SWITCH_OPTIONS, ListFilterModule, LISTFILTER_HANDLER_TOKEN, ConvertorService$2, SolutionService$2, QuerySolutionService$1, SimpleFilterModule, FilterService$1, ConvertorService, SolutionService, AvatarModule, CalendarModule, WFFlowchartService, UiFlowchartModule, UiFlowchartService, NumberSpinnerModule, NumberSpinnerComponent, ComboLookupModule, ScrollspyModule, FarrisScrollSpyService, FileListModule, FileViewerService, ɵj, ɵs, ɵn, ɵu, ɵv, ɵo, ɵz, ɵd, ɵa$2, ɵy, ɵf$2, ɵh, ɵbe, ɵg$1, ɵt$1, ɵbg, ɵbh, LanguageTextboxModule, DynamicControlGroupModule, BatchEditDialogModule, BatchEditDialogService, DatagridFilterRowModule, FilterRowComponent, DatagridSettingsModule, DatagridSettingsService, FarrisFooterModule, DiscussionGroupModule, DiscussionListService, NavModule, TagsModule, EditorModule, EditorService, TINYMCE_SCRIPT_SRC, FfileuploadAdaptUnifileModule, FFileUploadAdaptUnifileConfigService, FFileUploadAdaptUnifileConfigToken, FfileuploadAdaptUnifileService, FfilepreviewAdaptUnifileService, FEHeaderFooterModule, FEPageModalModule, FEPageModalService, FeatureEditorModule, FeatureEditorService, I18nService, FEScrollCollapsibleAreaModule, FEScrollCollapsibleAreaService, ActivatedRoute, Router, RouterModule, ɵangular_packages_router_router_a, ɵEmptyOutletComponent, RouterOutlet, ChildrenOutletContexts, ROUTES, DataImportExportService, DIP_DATAIE_SERVICE, DataImpExpModule, ɵf, ɵg, DataieHandcraftService, ɵc$1, ɵd$1, CommonUtils, FarrisCommonModule, RuntimeStateService, IdService, LoadingComponentNgFactory$1, TooltipComponentNgFactory$1, ModalBackdropComponentNgFactory$1, ModalContainerComponentNgFactory$1, MessagerComponentNgFactory$1, NotifyContainerComponentNgFactory$1, PopoverContainerComponentNgFactory$1, FarrisContextMenuComponentNgFactory$1, DataTableComponentNgFactory$1, TreeTableComponentNgFactory$1, View_LookupGridComponent_0, RenderType_LookupGridComponent, LookupLeftComponentNgFactory$1, LookupTabsComponentNgFactory$1, LookupQuickSelectPanelComponentNgFactory$1, TimePickerPanelComponentNgFactory, View_FarrisDatepickerComponent_0, RenderType_FarrisDatepickerComponent, CalendarComponentNgFactory, FilterPanelComponentNgFactory, PopupComponentNgFactory, ɵbNgFactory, ɵiNgFactory, ɵwNgFactory, ɵbfNgFactory, ɵcNgFactory, ɵeNgFactory, ɵbbNgFactory, ɵbcNgFactory, FileListComponentNgFactory, WfApprovalLogsComponentNgFactory, UIFlowchartComponentNgFactory, LanguageTextPanelComponentNgFactory, BsModalService, ModalModule, cloneDeep, LocaleService, LocaleModule, FARRIS_LOCAL_CUSTOM_DATA, FarrisLocalePipe, PerfectScrollbarModule, PerfectScrollbarComponent, PopoverContainerComponentNgFactory, TooltipComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, MessagerComponentNgFactory, NotifyContainerComponentNgFactory, LoadingComponentNgFactory, FarrisContextMenuComponentNgFactory, DataTableComponentNgFactory, TreeTableComponentNgFactory, LookupLeftComponentNgFactory, LookupTabsComponentNgFactory, LookupQuickSelectPanelComponentNgFactory, PopoverConfig, PopoverModule, PositioningService, ComponentLoaderFactory, PaginationService$1, PaginationModule, DateTimeHelperService, DateHelperModule, NumberHelperService, NumberHelperModule, ColumnFormatService, DataColumnModule, FarrisContextMenuService, FarrisContextMenuModule, ResizeService, DialogService, FarrisDialogModule, FAreaResponseModule, LayoutModule$1, DataTableModule, View_PerfectScrollbarComponent_0, RenderType_PerfectScrollbarComponent, View_InputGroupComponent_0, RenderType_InputGroupComponent, FilterEditorComponentNgFactory, SortEditorComponentNgFactory, ɵlNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ɵaNgFactory, ɵbNgFactory$1, ɵcNgFactory$1, ɵdNgFactory, ɵeNgFactory$1, ɵfNgFactory, ɵgNgFactory, ɵhNgFactory, ɵiNgFactory$1, ɵjNgFactory, ɵkNgFactory, DatagridEnumEditorComponentNgFactory, DatagridSortEditorComponentNgFactory, DatagridFilterEditorComponentNgFactory, TaskExecuteComponentNgFactory, TaskAssigninfoComponentNgFactory, ProcessSelectorComponentNgFactory, VerifyDetailComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, View_FarrisTabsComponent_0, RenderType_FarrisTabsComponent, View_FarrisTabComponent_0, RenderType_FarrisTabComponent, NgbTooltipWindowNgFactory, FileUploadComponentNgFactory, UploadDialogComponentNgFactory, ɵbNgFactory$2, QueryConditionComponentNgFactory, ɵcNgFactory$2, ɵeNgFactory$2, ɵaNgFactory$1, ProcessSelectorComponentNgFactory$1, WfWorkitemHandleComponentNgFactory, UserHelperComponentNgFactory, TaskAssignComponentNgFactory, TaskSignaddComponentNgFactory, TaskTransferComponentNgFactory, ɵaNgFactory$2, WindowComponentNgFactory, WindowTitleBarComponentNgFactory, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, ɵdNgFactory$1, ɵfNgFactory$1, ɵgNgFactory$1, ɵhNgFactory$1, ɵbNgFactory$3, ɵcNgFactory$3, ɵdNgFactory$2, ɵeNgFactory$3, ɵfNgFactory$2, ɵgNgFactory$2, ɵhNgFactory$2, BatchEditDialogComponentNgFactory, ResultConfirmComponentNgFactory, DiscussionPersonnelComponentNgFactory, MultiDownloadInfoComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory, FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory, FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, OrganizationSelectorComponentNgFactory, GridOrganizationSelectorComponentNgFactory, DatagridSettingsComponentNgFactory, SimpleColumnsComponentNgFactory, NewSchemeComponentNgFactory, SchemeListComponentNgFactory, FEPageModalComponentNgFactory, FEModalBackdropComponentNgFactory, ɵaNgFactory$3, FeatureEditorComponentNgFactory, View_ResponseToolbarComponent_0, RenderType_ResponseToolbarComponent, View_DatagridComponent_0, RenderType_DatagridComponent, WfTaskHandlerService, TaskService, I18nService$2, WfTaskHandlerModule, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent, ShortcutsService, View_TextComponent_0, RenderType_TextComponent, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent, View_SwitchComponent_0, RenderType_SwitchComponent, View_NumberSpinnerComponent_0, RenderType_NumberSpinnerComponent, WindowService, WindowContainerService, DialogContainerService, DialogService$2, SharedModule$2, WindowModule, DialogModule, ɵbNgFactory$4, ɵnNgFactory, ɵeNgFactory$4, ɵhNgFactory$3, ɵmNgFactory, ɵkNgFactory$1, ɵlNgFactory$1, RuleIdHelpComponentNgFactory, DataieRuleHelpComponentNgFactory, ɵoNgFactory, ɵpNgFactory, ɵqNgFactory, ɵrNgFactory, ɵsNgFactory, ɵtNgFactory, ɵuNgFactory, ɵvNgFactory, ɵwNgFactory$1, ɵxNgFactory, ɵyNgFactory, ɵzNgFactory, LocalizationService$1, QuerySolutionService, FilterConditionModule, SysCommonUtilService, SysSecurityConfigService, SysCommonModule, HelpFilterMap, SysHelpService, SysExceptionService, ɵf$1, SysLocaleService, SysManagerUIModule, PopupService, POPUP_CONTAINER, PopupModule, WfApprovalLogsService, WfApprovalLogsModule, ResizeBatchService, ResizeSensorModule, SolutionService$1, ConvertorService$1, QueryConditionModule, TaskCommentService, TaskCommentUIState, TaskCommentViewModel, I18nService$3, TaskCommentRepository, WFCommentModule, UploadServerService, FFileUploaderService, FFileUploadModule, FFileUploadAPIServiceToken, DatalistModule, FilterPanelModule, FDropdownDirectiveTypeModule, TaskImplApiModule, WfSignModule, FilterModule, SorterModule, ProgressModule, ProgressStepModule, TreeModule, OrganizationSelectorModule, ExcelExportModule, CheckBoxModule, SharedModule$3, TreeViewModule;
    return {
        setters: [function (module) {
            Pipe = module.Pipe;
            Injectable = module.Injectable;
            Injector = module.Injector;
            HostBinding = module.HostBinding;
            Component = module.Component;
            ElementRef = module.ElementRef;
            NgModule = module.NgModule;
            ViewChild = module.ViewChild;
            LOCALE_ID = module.LOCALE_ID;
            ɵcmf = module.ɵcmf;
            ɵmod = module.ɵmod;
            ɵmpd = module.ɵmpd;
            ComponentFactoryResolver = module.ComponentFactoryResolver;
            ɵCodegenComponentFactoryResolver = module.ɵCodegenComponentFactoryResolver;
            NgModuleRef = module.NgModuleRef;
            ɵcrt = module.ɵcrt;
            ɵccf = module.ɵccf;
            ɵvid = module.ɵvid;
            ɵeld = module.ɵeld;
            ɵdid = module.ɵdid;
            ViewContainerRef = module.ViewContainerRef;
            ChangeDetectorRef = module.ChangeDetectorRef;
            Renderer2 = module.Renderer2;
            Input = module.Input;
            Output = module.Output;
            defineInjectable = module.defineInjectable;
            inject = module.inject;
            INJECTOR = module.INJECTOR;
            forwardRef = module.forwardRef;
            EventEmitter = module.EventEmitter;
            RendererFactory2 = module.RendererFactory2;
            PLATFORM_ID = module.PLATFORM_ID;
            NgZone = module.NgZone;
            ApplicationRef = module.ApplicationRef;
            ɵnov = module.ɵnov;
            ɵprd = module.ɵprd;
            ɵpid = module.ɵpid;
            ɵqud = module.ɵqud;
            ɵted = module.ɵted;
            ɵppd = module.ɵppd;
            ɵand = module.ɵand;
            TemplateRef = module.TemplateRef;
            IterableDiffers = module.IterableDiffers;
            ɵunv = module.ɵunv;
            ɵEMPTY_MAP = module.ɵEMPTY_MAP;
            KeyValueDiffers = module.KeyValueDiffers;
            ɵpod = module.ɵpod;
            ɵinlineInterpolate = module.ɵinlineInterpolate;
            ɵpad = module.ɵpad;
            ɵEMPTY_ARRAY = module.ɵEMPTY_ARRAY;
            Compiler = module.Compiler;
            Inject = module.Inject;
            InjectionToken = module.InjectionToken;
            ErrorHandler = module.ErrorHandler;
        }, function (module) {
            __decorate = module.__decorate;
            __metadata = module.__metadata;
            __extends = module.__extends;
            __spread = module.__spread;
        }, function (module) {
            CommonModule = module.CommonModule;
            NgLocalization = module.NgLocalization;
            NgLocaleLocalization = module.NgLocaleLocalization;
            ɵangular_packages_common_common_a = module.ɵangular_packages_common_common_a;
            NgForOf = module.NgForOf;
            NgIf = module.NgIf;
            NgClass = module.NgClass;
            DOCUMENT = module.DOCUMENT;
            isPlatformBrowser = module.isPlatformBrowser;
        }, function (module) {
            FormControl = module.FormControl;
            FormsModule = module.FormsModule;
            ReactiveFormsModule = module.ReactiveFormsModule;
            NG_VALUE_ACCESSOR = module.NG_VALUE_ACCESSOR;
            ɵangular_packages_forms_forms_j = module.ɵangular_packages_forms_forms_j;
            ɵangular_packages_forms_forms_bc = module.ɵangular_packages_forms_forms_bc;
            DefaultValueAccessor = module.DefaultValueAccessor;
            COMPOSITION_BUFFER_MODE = module.COMPOSITION_BUFFER_MODE;
            NgModel = module.NgModel;
            NgControl = module.NgControl;
            NgControlStatus = module.NgControlStatus;
            FormGroupDirective = module.FormGroupDirective;
            ControlContainer = module.ControlContainer;
            NgControlStatusGroup = module.NgControlStatusGroup;
            FormControlName = module.FormControlName;
            ɵangular_packages_forms_forms_k = module.ɵangular_packages_forms_forms_k;
            MaxLengthValidator = module.MaxLengthValidator;
            NG_VALIDATORS = module.NG_VALIDATORS;
            FormBuilder = module.FormBuilder;
        }, function (module) {
            DateConverter = module.DateConverter;
            KendoBindingModule = module.KendoBindingModule;
            FarrisDatagridUseBindingDataDirective = module.FarrisDatagridUseBindingDataDirective;
            EditableDirective = module.EditableDirective;
            FarrisDataGridEndEditDirective = module.FarrisDataGridEndEditDirective;
            FarrisDataGridRemoteSummaryDirective = module.FarrisDataGridRemoteSummaryDirective;
            DatagridComponentRefDirective = module.DatagridComponentRefDirective;
            SectionComponentRefDirective = module.SectionComponentRefDirective;
            InputEndEditDirective = module.InputEndEditDirective;
            LookupDataMappingDirective = module.LookupDataMappingDirective;
            LookupGridComponentRefDirective = module.LookupGridComponentRefDirective;
            DatepickerComponentRefDirective = module.DatepickerComponentRefDirective;
            NumberSpinnerComponentRefDirective = module.NumberSpinnerComponentRefDirective;
            FarrisKendoGridFormatService = module.FarrisKendoGridFormatService;
            FarrisTreetableFormatService = module.FarrisTreetableFormatService;
        }, function (module) {
            LayoutModule = module.LayoutModule;
            PanelBarModule = module.PanelBarModule;
            SplitterModule$1 = module.SplitterModule;
            TabStripModule = module.TabStripModule;
        }, function (module) {
            FlexLayoutModule = module.FlexLayoutModule;
        }, function (module) {
            FarrisFormsModule = module.FarrisFormsModule;
        }, function (module) {
            FormMessageModule = module.FormMessageModule;
            ValidationMessageComponent = module.ValidationMessageComponent;
        }, function (module) {
            LoadingModule = module.LoadingModule;
            LoadingService = module.LoadingService;
            LOADING_DEFAULT_CONFIG = module.LOADING_DEFAULT_CONFIG;
            loaddingDefaultConfig = module.loaddingDefaultConfig;
        }, function (module) {
            MessagerModule = module.MessagerModule;
            MessagerService = module.MessagerService;
            MESSAGER_DEFAULT_CONFIG = module.MESSAGER_DEFAULT_CONFIG;
            MessagerDefaultConfig = module.MessagerDefaultConfig;
        }, function (module) {
            NotifyModule = module.NotifyModule;
            NotifyService = module.NotifyService;
        }, function (module) {
            FResponseToolbarModule = module.FResponseToolbarModule;
            ResponseToolbarComponent = module.ResponseToolbarComponent;
        }, function (module) {
            Uri = module.Uri;
            UriService = module.UriService;
            BefProxy = module.BefProxy;
            BefRepository = module.BefRepository;
            BefLookupRestService = module.BefLookupRestService;
            DefaultComboHttpService = module.DefaultComboHttpService;
            FrameworkSessionService = module.FrameworkSessionService;
            BE_SESSION_HANDLING_STRATEGY_TOKEN = module.BE_SESSION_HANDLING_STRATEGY_TOKEN;
            BE_SERVER_URI_TOKEN = module.BE_SERVER_URI_TOKEN;
        }, function (module) {
            TranslateService = module.TranslateService;
            TranslateModule = module.TranslateModule;
            TranslateLoader = module.TranslateLoader;
            MissingTranslationHandler = module.MissingTranslationHandler;
            TranslateStore = module.TranslateStore;
            TranslateCompiler = module.TranslateCompiler;
            TranslateFakeCompiler = module.TranslateFakeCompiler;
            TranslateParser = module.TranslateParser;
            TranslateDefaultParser = module.TranslateDefaultParser;
            USE_DEFAULT_LANG = module.USE_DEFAULT_LANG;
            USE_STORE = module.USE_STORE;
        }, function (module) {
            TranslateHttpLoader = module.TranslateHttpLoader;
        }, function (module) {
            of = module.of;
            Observable = module.Observable;
            BehaviorSubject = module.BehaviorSubject;
            Subject = module.Subject;
        }, function (module) {
            switchMap = module.switchMap;
            catchError = module.catchError;
        }, function (module) {
            HttpClient = module.HttpClient;
            HttpXsrfTokenExtractor = module.HttpXsrfTokenExtractor;
            ɵangular_packages_common_http_http_g = module.ɵangular_packages_common_http_http_g;
            ɵangular_packages_common_http_http_e = module.ɵangular_packages_common_http_http_e;
            ɵangular_packages_common_http_http_h = module.ɵangular_packages_common_http_http_h;
            ɵangular_packages_common_http_http_f = module.ɵangular_packages_common_http_http_f;
            HTTP_INTERCEPTORS = module.HTTP_INTERCEPTORS;
            HttpClientXsrfModule = module.HttpClientXsrfModule;
            HttpClientModule = module.HttpClientModule;
            ɵangular_packages_common_http_http_d = module.ɵangular_packages_common_http_http_d;
            XhrFactory = module.XhrFactory;
            HttpXhrBackend = module.HttpXhrBackend;
            HttpBackend = module.HttpBackend;
            HttpHandler = module.HttpHandler;
            ɵHttpInterceptingHandler = module.ɵHttpInterceptingHandler;
        }, function (module) {
            DomSanitizer = module.DomSanitizer;
            EventManager = module.EventManager;
        }, function (module) {
            Declaration = module.Declaration;
            NgCommand = module.NgCommand;
            ViewModel = module.ViewModel;
            NgField = module.NgField;
            NgEntity = module.NgEntity;
            Entity = module.Entity;
            NgObject = module.NgObject;
            NgList = module.NgList;
            EntityList = module.EntityList;
            NgRepository = module.NgRepository;
            NgValidateForm = module.NgValidateForm;
            Form = module.Form;
            NgState = module.NgState;
            State = module.State;
            NgRenderState = module.NgRenderState;
            NgAction = module.NgAction;
            StateMachine = module.StateMachine;
            NgParam = module.NgParam;
            UIState = module.UIState;
            NgCommandHandler = module.NgCommandHandler;
            CommandHandler = module.CommandHandler;
            FrameContext = module.FrameContext;
            BindingData = module.BindingData;
            FARRIS_DEVKIT_FRAME_PROVIDERS = module.FARRIS_DEVKIT_FRAME_PROVIDERS;
            FRAME_ID = module.FRAME_ID;
            Repository = module.Repository;
            NAMESPACE = module.NAMESPACE;
            TranslateToken = module.TranslateToken;
            FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS = module.FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS;
            FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS = module.FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS;
            FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS = module.FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS;
            AppContext = module.AppContext;
            PARAM_TYPE_TRANSFORM_TOKEN = module.PARAM_TYPE_TRANSFORM_TOKEN;
            FORM_ID = module.FORM_ID;
            EXCEPTION_HANDLER = module.EXCEPTION_HANDLER;
            BACK_END_MESSAGE_HANDLER_TOKEN = module.BACK_END_MESSAGE_HANDLER_TOKEN;
            COMMAND_HANDLERS_TOKEN = module.COMMAND_HANDLERS_TOKEN;
            FrameComponent = module.FrameComponent;
            NgFormControl = module.NgFormControl;
            FARRIS_DEVKIT_APP_PROVIDERS = module.FARRIS_DEVKIT_APP_PROVIDERS;
            FORM_PATH_TOKEN = module.FORM_PATH_TOKEN;
            CommandHandlerRegistry = module.CommandHandlerRegistry;
            CommandHandlerExtenderRegistry = module.CommandHandlerExtenderRegistry;
            COMMAND_HANDLER_EXTENDERS_TOKEN = module.COMMAND_HANDLER_EXTENDERS_TOKEN;
            CommandHandlerFactory = module.CommandHandlerFactory;
            VariableParseService = module.VariableParseService;
            CommandBus = module.CommandBus;
            RouterParamService = module.RouterParamService;
            ResolveService = module.ResolveService;
            ExpressionExecutor = module.ExpressionExecutor;
            FORM_MANIFEST_SERVICE_TOKEN = module.FORM_MANIFEST_SERVICE_TOKEN;
            FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN = module.FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN;
            MESSAGE_SERVICE_TOKEN = module.MESSAGE_SERVICE_TOKEN;
            NOTIFY_SERVICE_TOKEN = module.NOTIFY_SERVICE_TOKEN;
            FRAME_COMPONENT_INIT_HANDLER_TOKEN = module.FRAME_COMPONENT_INIT_HANDLER_TOKEN;
            UserSettingsToken = module.UserSettingsToken;
            AppContextManager = module.AppContextManager;
            RESOLVER_TOKEN = module.RESOLVER_TOKEN;
            EntityDependencyResolver = module.EntityDependencyResolver;
            StateDependencyResolver = module.StateDependencyResolver;
            CommentDependencyResolver = module.CommentDependencyResolver;
            ResolverRegistry = module.ResolverRegistry;
            LISTENER_TOKEN = module.LISTENER_TOKEN;
            UIStateChangeListener = module.UIStateChangeListener;
            RepositoryChangeListener = module.RepositoryChangeListener;
            BindingDataChangeListener = module.BindingDataChangeListener;
            EFFECTOR_TOKEN = module.EFFECTOR_TOKEN;
            RepositoryEffector = module.RepositoryEffector;
            UIStateEffector = module.UIStateEffector;
            ReadonlyEffector = module.ReadonlyEffector;
            DependencyEffector = module.DependencyEffector;
            RelativeEffector = module.RelativeEffector;
            ValidateEffector = module.ValidateEffector;
            RequiredEffector = module.RequiredEffector;
            VisibleEffector = module.VisibleEffector;
            ListenerRegistry = module.ListenerRegistry;
            Listeners = module.Listeners;
            EffectorRegistry = module.EffectorRegistry;
            EffectorFactory = module.EffectorFactory;
            ExpressionRegistry = module.ExpressionRegistry;
            ExpressionEventEmitter = module.ExpressionEventEmitter;
            ExpressionResult = module.ExpressionResult;
            ExpressionManager = module.ExpressionManager;
            ExpressionResultFactory = module.ExpressionResultFactory;
            EVENT_HANDLER_TOKEN = module.EVENT_HANDLER_TOKEN;
            RepositoryAddEntityEventHandler = module.RepositoryAddEntityEventHandler;
            RepositoryRemoveEntityEventHandler = module.RepositoryRemoveEntityEventHandler;
            EntityValueChangedEventHandler = module.EntityValueChangedEventHandler;
            StateValueChangedEventHandler = module.StateValueChangedEventHandler;
            RepositoryLoadEventHandler = module.RepositoryLoadEventHandler;
            EntityUpdateEventHandler = module.EntityUpdateEventHandler;
            BindingDataAppendObjectEventHandler = module.BindingDataAppendObjectEventHandler;
            BindingDataValueChangeEventHandler = module.BindingDataValueChangeEventHandler;
            BindingDataRemoveObjectEventHandler = module.BindingDataRemoveObjectEventHandler;
            BindingDataLoadEventHandler = module.BindingDataLoadEventHandler;
            BindingDataSelectionChangedEventHandler = module.BindingDataSelectionChangedEventHandler;
            EventHandlerRegistry = module.EventHandlerRegistry;
            ExpressionEngineImpl = module.ExpressionEngineImpl;
            FrameEventBus = module.FrameEventBus;
            EventBus = module.EventBus;
            Subscription = module.Subscription;
            RestfulService = module.RestfulService;
            VARIABLE_PARSERS = module.VARIABLE_PARSERS;
            FrameIdVariableParser = module.FrameIdVariableParser;
            ɵa$3 = module.ɵa;
            EventParamVariableParser = module.EventParamVariableParser;
            DataVariableParser = module.DataVariableParser;
            UIStateVariableParser = module.UIStateVariableParser;
            StateMachineVariableParser = module.StateMachineVariableParser;
            CommandVariableParser = module.CommandVariableParser;
        }, function (module) {
            NavigationMiddlewareService = module.NavigationMiddlewareService;
            CommandService = module.CommandService;
            CardDataService = module.CardDataService;
            StateMachineService = module.StateMachineService;
            ValidationService = module.ValidationService;
            EndEditService = module.EndEditService;
            PaginationService = module.PaginationService;
            ChangeItemService = module.ChangeItemService;
            FormMessageService = module.FormMessageService;
            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS = module.FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS;
            ComponentManagerService = module.ComponentManagerService;
            ExceptionHandler = module.ExceptionHandler;
            BackEndMessageHandler = module.BackEndMessageHandler;
            KeybindingService = module.KeybindingService;
            LocalizationService = module.LocalizationService;
            ApplicationParamService = module.ApplicationParamService;
            FocusInvalidService = module.FocusInvalidService;
            SubListDataService = module.SubListDataService;
            DataGridService = module.DataGridService;
            ListDataService = module.ListDataService;
            CommandServicesModule = module.CommandServicesModule;
            FormLoadingService = module.FormLoadingService;
            LanguageService = module.LanguageService;
            FormNotifyService = module.FormNotifyService;
            FormErrorService = module.FormErrorService;
            FilterConditionService = module.FilterConditionService;
            UIStateService = module.UIStateService;
            BindingDataService = module.BindingDataService;
            EntityTraversingService = module.EntityTraversingService;
            EntityManipulationService = module.EntityManipulationService;
            EntityAggregationService = module.EntityAggregationService;
            EntityListService = module.EntityListService;
            EntityService = module.EntityService;
            TreeDataService = module.TreeDataService;
            SubTreeDataService = module.SubTreeDataService;
            RuntimeFrameworkService = module.RuntimeFrameworkService;
            RemoveDataService = module.RemoveDataService;
            SaveDataService = module.SaveDataService;
            EditDataService = module.EditDataService;
            FilterConditionDataService = module.FilterConditionDataService;
            RemoteSummaryService = module.RemoteSummaryService;
            BeActionService = module.BeActionService;
            ApproveService = module.ApproveService;
            PrintService = module.PrintService;
            AttachmentDataService = module.AttachmentDataService;
            AttachmentService = module.AttachmentService;
            FileService = module.FileService;
            NavigationEventService = module.NavigationEventService;
            MenuStateService = module.MenuStateService;
            QuerystringService = module.QuerystringService;
            NavigationService = module.NavigationService;
            GridMiddlewareService = module.GridMiddlewareService;
            SidebarService = module.SidebarService;
            FarrisFormService = module.FarrisFormService;
            FARRIS_FORM_COMPONENTS = module.FARRIS_FORM_COMPONENTS;
            DialogService$1 = module.DialogService;
            RouterService = module.RouterService;
            AuthorityService = module.AuthorityService;
            ɵb = module.ɵb;
            ɵc = module.ɵc;
            BatchEditService = module.BatchEditService;
            DiscussionGroupService = module.DiscussionGroupService;
            FormAttentionService = module.FormAttentionService;
            FeatureDataService = module.FeatureDataService;
            FeatureRepository = module.FeatureRepository;
            FeatureEditService = module.FeatureEditService;
            ExpressionService = module.ExpressionService;
            PopUpService = module.PopUpService;
            DirtyCheckingService = module.DirtyCheckingService;
            FormService = module.FormService;
            ViewModelService = module.ViewModelService;
            FormManifestService = module.FormManifestService;
            FormExpressionManifestService = module.FormExpressionManifestService;
            WorkFlowMessageHandler = module.WorkFlowMessageHandler;
            WorkFlowMessageService = module.WorkFlowMessageService;
            WorkFlowMessage = module.WorkFlowMessage;
            BindingPathService = module.BindingPathService;
            FormControlService = module.FormControlService;
            FrameContextService = module.FrameContextService;
            HideEventService = module.HideEventService;
            FormWizardService = module.FormWizardService;
            CheckService = module.CheckService;
            DataCheckService = module.DataCheckService;
            EventService = module.EventService;
            FilterService$2 = module.FilterService;
            ParamService = module.ParamService;
            UserSettingsService = module.UserSettingsService;
        }, function (module) {
            VerifyDetailService = module.VerifyDetailService;
            VerifyDetailModule = module.VerifyDetailModule;
        }, function (module) {
            FrmCommonModule = module.FrmCommonModule;
            SessionService = module.SessionService;
            LanguageService$1 = module.LanguageService;
            HttpService = module.HttpService;
            CacheStorageAbstract = module.CacheStorageAbstract;
            CacheMemoryStorage = module.CacheMemoryStorage;
            CacheService = module.CacheService;
            WindowVariableService = module.WindowVariableService;
            TabEntityService = module.TabEntityService;
        }, function (module) {
            FrmI18nSettingService = module.FrmI18nSettingService;
            FrameworkService = module.FrameworkService;
            FrameworkVariableService = module.FrameworkVariableService;
            AppService = module.AppService;
            FrmEventBus = module.FrmEventBus;
            FuncsService = module.FuncsService;
            LoadingService$1 = module.LoadingService;
            CommonSharedModule = module.CommonSharedModule;
        }, function (module) {
            FarrisTooltipModule = module.FarrisTooltipModule;
            AttentionService = module.AttentionService;
            FInputTipsDirective = module.FInputTipsDirective;
        }, function (module) {
            GridModule = module.GridModule;
            GridComponent = module.GridComponent;
            BrowserSupportService = module.BrowserSupportService;
            SelectionService = module.SelectionService;
            GroupInfoService = module.GroupInfoService;
            GroupsService = module.GroupsService;
            ChangeNotificationService = module.ChangeNotificationService;
            DetailsService = module.DetailsService;
            EditService$1 = module.EditService$1;
            FilterService = module.FilterService;
            PDFService = module.PDFService;
            ResponsiveService = module.ResponsiveService;
            ExcelService = module.ExcelService;
            ScrollSyncService = module.ScrollSyncService;
            DomEventsService = module.DomEventsService;
            ColumnResizingService = module.ColumnResizingService;
            ColumnReorderService = module.ColumnReorderService;
            ColumnInfoService = module.ColumnInfoService;
            NavigationService$1 = module.NavigationService;
            SortService = module.SortService;
            SharedModule = module.SharedModule;
            DragAndDropModule = module.DragAndDropModule;
            GroupModule = module.GroupModule;
            BodyModule = module.BodyModule;
            SharedFilterModule = module.SharedFilterModule;
            RowFilterModule = module.RowFilterModule;
            FilterMenuModule = module.FilterMenuModule;
            ColumnMenuModule = module.ColumnMenuModule;
            HeaderModule = module.HeaderModule;
            FooterModule = module.FooterModule;
            PagerModule = module.PagerModule;
            ExcelModule = module.ExcelModule;
            PDFModule = module.PDFModule;
        }, function (module) {
            DateInputsModule = module.DateInputsModule;
            DOMService = module.DOMService;
            CenturyViewService = module.CenturyViewService;
            DecadeViewService = module.DecadeViewService;
            MonthViewService = module.MonthViewService;
            YearViewService = module.YearViewService;
            WeekNamesService = module.WeekNamesService;
            NavigationService$2 = module.NavigationService;
            BusViewService = module.BusViewService;
            DOMService$1 = module.DOMService$1;
            HoursService = module.HoursService;
            MinutesService = module.MinutesService;
            SecondsService = module.SecondsService;
            DayPeriodService = module.DayPeriodService;
            EventsModule$1 = module.EventsModule;
            DateInputModule = module.DateInputModule;
            CalendarCommonModule = module.CalendarCommonModule;
            TemplatesModule = module.TemplatesModule;
            VirtualizationModule = module.VirtualizationModule;
            CalendarModule$1 = module.CalendarModule;
            DatePickerModule = module.DatePickerModule;
            MultiViewCalendarModule = module.MultiViewCalendarModule;
            CalendarsModule = module.CalendarsModule;
            TimePickerModule$1 = module.TimePickerModule;
            DateRangeModule = module.DateRangeModule;
            TOUCH_ENABLED = module.TOUCH_ENABLED;
            touchEnabled = module.touchEnabled;
        }, function (module) {
            DropDownsModule = module.DropDownsModule;
            SharedDirectivesModule = module.SharedDirectivesModule;
            SharedModule$1 = module.SharedModule;
            DropDownListModule = module.DropDownListModule;
            AutoCompleteModule = module.AutoCompleteModule;
            ComboBoxModule = module.ComboBoxModule;
            MultiSelectModule$1 = module.MultiSelectModule;
            TOUCH_ENABLED$1 = module.TOUCH_ENABLED;
            touchEnabled$1 = module.touchEnabled;
        }, function (module) {
            ButtonsModule = module.ButtonsModule;
            ButtonModule = module.ButtonModule;
            ButtonGroupModule = module.ButtonGroupModule;
            ListModule = module.ListModule;
            SplitButtonModule = module.SplitButtonModule;
            DropDownButtonModule = module.DropDownButtonModule;
        }, function (module) {
            InputsModule = module.InputsModule;
            EventsModule = module.EventsModule;
            NumericTextBoxModule = module.NumericTextBoxModule;
            TextBoxModule = module.TextBoxModule;
            DraggableModule = module.DraggableModule;
            SliderModule = module.SliderModule;
            SwitchModule$1 = module.SwitchModule;
            MaskedTextBoxModule = module.MaskedTextBoxModule;
        }, function (module) {
            IntlModule = module.IntlModule;
            IntlService = module.IntlService;
            CldrIntlService = module.CldrIntlService;
        }, function () {}, function (module) {
            ServerSideToken = module.ServerSideToken;
            LookupGridComponent = module.LookupGridComponent;
            LookupModule = module.LookupModule;
            LookupComponent = module.LookupComponent;
            PersonalConfigService = module.PersonalConfigService;
            LookupDefaultMapping = module.LookupDefaultMapping;
            LookupUtils = module.LookupUtils;
        }, function (module) {
            TreeTableModule = module.TreeTableModule;
            TreetableService = module.TreetableService;
            TTHotkeys = module.TTHotkeys;
        }, function (module) {
            FieldGroupModule = module.FieldGroupModule;
            ɵa = module.ɵa;
        }, function (module) {
            FarrisTabsModule = module.FarrisTabsModule;
            FarrisTabsComponent = module.FarrisTabsComponent;
            TabService = module.TabService;
            FarrisTabComponent = module.FarrisTabComponent;
            NgbDropdownConfig = module.NgbDropdownConfig;
            NgbTooltipConfig = module.NgbTooltipConfig;
            TabConfig = module.TabConfig;
            NgbDropdownModule = module.NgbDropdownModule;
            NgbTooltipModule = module.NgbTooltipModule;
        }, function (module) {
            FarrisTagModule = module.FarrisTagModule;
        }, function (module) {
            FarrisSidebarModule = module.FarrisSidebarModule;
            FarrisSidebarService = module.FarrisSidebarService;
        }, function (module) {
            UploadDialogMoudle = module.UploadDialogMoudle;
            UploadDialogService = module.UploadDialogService;
            DownloadService = module.DownloadService;
            UploadService = module.UploadService;
            UploadModule = module.UploadModule;
        }, function (module) {
            FarrisSectionModule = module.FarrisSectionModule;
            FarrisSectionComponent = module.FarrisSectionComponent;
        }, function (module) {
            FarrisDatePickerModule = module.FarrisDatePickerModule;
            UtilService = module.UtilService;
            DefaultConfigService = module.DefaultConfigService;
            FarrisDatepickerComponent = module.FarrisDatepickerComponent;
        }, function (module) {
            FarrisTimeSpinnerModule = module.FarrisTimeSpinnerModule;
        }, function (module) {
            CalculationType = module.CalculationType;
            DatagridComponent = module.DatagridComponent;
            GRID_SETTINGS_HTTP = module.GRID_SETTINGS_HTTP;
            DatagridModule = module.DatagridModule;
            DatagridSmartFilterService = module.DatagridSmartFilterService;
            DatagridFacadeService = module.DatagridFacadeService;
            DatagridService = module.DatagridService;
            ɵt = module.ɵt;
            ValidatorMessagerService = module.ValidatorMessagerService;
            GRID_SETTINGS_SERVICE = module.GRID_SETTINGS_SERVICE;
            NgxPaginationModule = module.NgxPaginationModule;
            ScrollbarModule = module.ScrollbarModule;
            DatagridSmartFilterModule = module.DatagridSmartFilterModule;
            SCROLLBAR_CONFIG = module.SCROLLBAR_CONFIG;
            GRID_EDITORS = module.GRID_EDITORS;
            GRID_FILTER_ROW = module.GRID_FILTER_ROW;
        }, function (module) {
            WizardService = module.WizardService;
            WizardModule = module.WizardModule;
        }, function (module) {
            QuerySolutionModule = module.QuerySolutionModule;
            QUERYSOLUTION_HANDLER_TOKEN = module.QUERYSOLUTION_HANDLER_TOKEN;
        }, function (module) {
            FarrisButtonModule = module.FarrisButtonModule;
        }, function (module) {
            ListViewModule = module.ListViewModule;
        }, function (module) {
            TimePickerModule = module.TimePickerModule;
        }, function (module) {
            AngularDraggableModule = module.AngularDraggableModule;
        }, function (module) {
            SplitterModule = module.SplitterModule;
        }, function (module) {
            ListNavModule = module.ListNavModule;
        }, function (module) {
            TextModule = module.TextModule;
            TextComponent = module.TextComponent;
        }, function (module) {
            WFSubmiteService = module.WFSubmiteService;
            WFRuntimeModule = module.WFRuntimeModule;
            I18nService$1 = module.I18nService;
            TaskService$1 = module.TaskService;
            UserService = module.UserService;
        }, function (module) {
            MultiSelectModule = module.MultiSelectModule;
        }, function (module) {
            InputGroupModule = module.InputGroupModule;
            InputGroupComponent = module.InputGroupComponent;
        }, function (module) {
            ComboServerSideToken = module.ComboServerSideToken;
            ComboListModule = module.ComboListModule;
            ComboLocaleService = module.ComboLocaleService;
        }, function (module) {
            FarrisHtmlEditorModule = module.FarrisHtmlEditorModule;
            ɵb$3 = module.ɵb;
            defaultModules = module.defaultModules;
        }, function (module) {
            CloudprintService = module.CloudprintService;
            CloudPrintModule = module.CloudPrintModule;
            ɵa$1 = module.ɵa;
            ɵb$1 = module.ɵb;
            ɵc$2 = module.ɵc;
            ɵe = module.ɵe;
        }, function (module) {
            EditorTypes = module.EditorTypes;
            DatagridEditorsModule = module.DatagridEditorsModule;
            EditorProviders = module.EditorProviders;
            DatagridTextareaComponent = module.DatagridTextareaComponent;
            DatagridTextboxComponent = module.DatagridTextboxComponent;
            ɵa$4 = module.ɵa;
            ɵb$2 = module.ɵb;
            ɵc$3 = module.ɵc;
            ɵd$2 = module.ɵd;
            ɵe$1 = module.ɵe;
            ɵf$3 = module.ɵf;
            ɵg$2 = module.ɵg;
            ɵh$1 = module.ɵh;
            ɵi = module.ɵi;
            ɵj$1 = module.ɵj;
            ɵk = module.ɵk;
            DatagridEnumEditorComponent = module.DatagridEnumEditorComponent;
            DatagridFilterEditorComponent = module.DatagridFilterEditorComponent;
            DatagridSortEditorComponent = module.DatagridSortEditorComponent;
        }, function (module) {
            ViewChangeModule = module.ViewChangeModule;
        }, function (module) {
            SwitchModule = module.SwitchModule;
            SwitchComponent = module.SwitchComponent;
            SWITCH_OPTIONS = module.SWITCH_OPTIONS;
        }, function (module) {
            ListFilterModule = module.ListFilterModule;
            LISTFILTER_HANDLER_TOKEN = module.LISTFILTER_HANDLER_TOKEN;
            ConvertorService$2 = module.ConvertorService;
            SolutionService$2 = module.SolutionService;
            QuerySolutionService$1 = module.QuerySolutionService;
        }, function (module) {
            SimpleFilterModule = module.SimpleFilterModule;
            FilterService$1 = module.FilterService;
            ConvertorService = module.ConvertorService;
            SolutionService = module.SolutionService;
        }, function (module) {
            AvatarModule = module.AvatarModule;
        }, function (module) {
            CalendarModule = module.CalendarModule;
        }, function (module) {
            WFFlowchartService = module.WFFlowchartService;
            UiFlowchartModule = module.UiFlowchartModule;
            UiFlowchartService = module.UiFlowchartService;
        }, function (module) {
            NumberSpinnerModule = module.NumberSpinnerModule;
            NumberSpinnerComponent = module.NumberSpinnerComponent;
        }, function (module) {
            ComboLookupModule = module.ComboLookupModule;
        }, function (module) {
            ScrollspyModule = module.ScrollspyModule;
            FarrisScrollSpyService = module.FarrisScrollSpyService;
        }, function (module) {
            FileListModule = module.FileListModule;
            FileViewerService = module.FileViewerService;
            ɵj = module.ɵj;
            ɵs = module.ɵs;
            ɵn = module.ɵn;
            ɵu = module.ɵu;
            ɵv = module.ɵv;
            ɵo = module.ɵo;
            ɵz = module.ɵz;
            ɵd = module.ɵd;
            ɵa$2 = module.ɵa;
            ɵy = module.ɵy;
            ɵf$2 = module.ɵf;
            ɵh = module.ɵh;
            ɵbe = module.ɵbe;
            ɵg$1 = module.ɵg;
            ɵt$1 = module.ɵt;
            ɵbg = module.ɵbg;
            ɵbh = module.ɵbh;
        }, function (module) {
            LanguageTextboxModule = module.LanguageTextboxModule;
        }, function (module) {
            DynamicControlGroupModule = module.DynamicControlGroupModule;
        }, function (module) {
            BatchEditDialogModule = module.BatchEditDialogModule;
            BatchEditDialogService = module.BatchEditDialogService;
        }, function (module) {
            DatagridFilterRowModule = module.DatagridFilterRowModule;
            FilterRowComponent = module.FilterRowComponent;
        }, function (module) {
            DatagridSettingsModule = module.DatagridSettingsModule;
            DatagridSettingsService = module.DatagridSettingsService;
        }, function (module) {
            FarrisFooterModule = module.FarrisFooterModule;
        }, function (module) {
            DiscussionGroupModule = module.DiscussionGroupModule;
            DiscussionListService = module.DiscussionListService;
        }, function (module) {
            NavModule = module.NavModule;
        }, function (module) {
            TagsModule = module.TagsModule;
        }, function (module) {
            EditorModule = module.EditorModule;
            EditorService = module.EditorService;
            TINYMCE_SCRIPT_SRC = module.TINYMCE_SCRIPT_SRC;
        }, function (module) {
            FfileuploadAdaptUnifileModule = module.FfileuploadAdaptUnifileModule;
            FFileUploadAdaptUnifileConfigService = module.FFileUploadAdaptUnifileConfigService;
            FFileUploadAdaptUnifileConfigToken = module.FFileUploadAdaptUnifileConfigToken;
            FfileuploadAdaptUnifileService = module.FfileuploadAdaptUnifileService;
            FfilepreviewAdaptUnifileService = module.FfilepreviewAdaptUnifileService;
        }, function (module) {
            FEHeaderFooterModule = module.FEHeaderFooterModule;
        }, function (module) {
            FEPageModalModule = module.FEPageModalModule;
            FEPageModalService = module.FEPageModalService;
        }, function (module) {
            FeatureEditorModule = module.FeatureEditorModule;
            FeatureEditorService = module.FeatureEditorService;
            I18nService = module.I18nService;
        }, function (module) {
            FEScrollCollapsibleAreaModule = module.FEScrollCollapsibleAreaModule;
            FEScrollCollapsibleAreaService = module.FEScrollCollapsibleAreaService;
        }, function (module) {
            ActivatedRoute = module.ActivatedRoute;
            Router = module.Router;
            RouterModule = module.RouterModule;
            ɵangular_packages_router_router_a = module.ɵangular_packages_router_router_a;
            ɵEmptyOutletComponent = module.ɵEmptyOutletComponent;
            RouterOutlet = module.RouterOutlet;
            ChildrenOutletContexts = module.ChildrenOutletContexts;
            ROUTES = module.ROUTES;
        }, function (module) {
            DataImportExportService = module.DataImportExportService;
            DIP_DATAIE_SERVICE = module.DIP_DATAIE_SERVICE;
            DataImpExpModule = module.DataImpExpModule;
            ɵf = module.ɵf;
            ɵg = module.ɵg;
            DataieHandcraftService = module.DataieHandcraftService;
            ɵc$1 = module.ɵc;
            ɵd$1 = module.ɵd;
        }, function (module) {
            CommonUtils = module.CommonUtils;
            FarrisCommonModule = module.FarrisCommonModule;
            RuntimeStateService = module.RuntimeStateService;
            IdService = module.IdService;
        }, function (module) {
            LoadingComponentNgFactory$1 = module.LoadingComponentNgFactory;
        }, function (module) {
            TooltipComponentNgFactory$1 = module.TooltipComponentNgFactory;
        }, function (module) {
            ModalBackdropComponentNgFactory$1 = module.ModalBackdropComponentNgFactory;
            ModalContainerComponentNgFactory$1 = module.ModalContainerComponentNgFactory;
        }, function (module) {
            MessagerComponentNgFactory$1 = module.MessagerComponentNgFactory;
        }, function (module) {
            NotifyContainerComponentNgFactory$1 = module.NotifyContainerComponentNgFactory;
        }, function (module) {
            PopoverContainerComponentNgFactory$1 = module.PopoverContainerComponentNgFactory;
        }, function (module) {
            FarrisContextMenuComponentNgFactory$1 = module.FarrisContextMenuComponentNgFactory;
        }, function (module) {
            DataTableComponentNgFactory$1 = module.DataTableComponentNgFactory;
        }, function (module) {
            TreeTableComponentNgFactory$1 = module.TreeTableComponentNgFactory;
        }, function (module) {
            View_LookupGridComponent_0 = module.View_LookupGridComponent_0;
            RenderType_LookupGridComponent = module.RenderType_LookupGridComponent;
            LookupLeftComponentNgFactory$1 = module.LookupLeftComponentNgFactory;
            LookupTabsComponentNgFactory$1 = module.LookupTabsComponentNgFactory;
            LookupQuickSelectPanelComponentNgFactory$1 = module.LookupQuickSelectPanelComponentNgFactory;
        }, function (module) {
            TimePickerPanelComponentNgFactory = module.TimePickerPanelComponentNgFactory;
        }, function (module) {
            View_FarrisDatepickerComponent_0 = module.View_FarrisDatepickerComponent_0;
            RenderType_FarrisDatepickerComponent = module.RenderType_FarrisDatepickerComponent;
            CalendarComponentNgFactory = module.CalendarComponentNgFactory;
        }, function (module) {
            FilterPanelComponentNgFactory = module.FilterPanelComponentNgFactory;
        }, function (module) {
            PopupComponentNgFactory = module.PopupComponentNgFactory;
        }, function (module) {
            ɵbNgFactory = module.ɵbNgFactory;
            ɵiNgFactory = module.ɵiNgFactory;
            ɵwNgFactory = module.ɵwNgFactory;
            ɵbfNgFactory = module.ɵbfNgFactory;
            ɵcNgFactory = module.ɵcNgFactory;
            ɵeNgFactory = module.ɵeNgFactory;
            ɵbbNgFactory = module.ɵbbNgFactory;
            ɵbcNgFactory = module.ɵbcNgFactory;
            FileListComponentNgFactory = module.FileListComponentNgFactory;
        }, function (module) {
            WfApprovalLogsComponentNgFactory = module.WfApprovalLogsComponentNgFactory;
        }, function (module) {
            UIFlowchartComponentNgFactory = module.UIFlowchartComponentNgFactory;
        }, function (module) {
            LanguageTextPanelComponentNgFactory = module.LanguageTextPanelComponentNgFactory;
        }, function (module) {
            BsModalService = module.BsModalService;
            ModalModule = module.ModalModule;
        }, function (module) {
            cloneDeep = module.cloneDeep;
        }, function (module) {
            LocaleService = module.LocaleService;
            LocaleModule = module.LocaleModule;
            FARRIS_LOCAL_CUSTOM_DATA = module.FARRIS_LOCAL_CUSTOM_DATA;
            FarrisLocalePipe = module.FarrisLocalePipe;
        }, function (module) {
            PerfectScrollbarModule = module.PerfectScrollbarModule;
            PerfectScrollbarComponent = module.PerfectScrollbarComponent;
        }, function (module) {
            PopoverContainerComponentNgFactory = module.PopoverContainerComponentNgFactory;
        }, function (module) {
            TooltipComponentNgFactory = module.TooltipComponentNgFactory;
        }, function (module) {
            ModalBackdropComponentNgFactory = module.ModalBackdropComponentNgFactory;
            ModalContainerComponentNgFactory = module.ModalContainerComponentNgFactory;
        }, function (module) {
            MessagerComponentNgFactory = module.MessagerComponentNgFactory;
        }, function (module) {
            NotifyContainerComponentNgFactory = module.NotifyContainerComponentNgFactory;
        }, function (module) {
            LoadingComponentNgFactory = module.LoadingComponentNgFactory;
        }, function (module) {
            FarrisContextMenuComponentNgFactory = module.FarrisContextMenuComponentNgFactory;
        }, function (module) {
            DataTableComponentNgFactory = module.DataTableComponentNgFactory;
        }, function (module) {
            TreeTableComponentNgFactory = module.TreeTableComponentNgFactory;
        }, function (module) {
            LookupLeftComponentNgFactory = module.LookupLeftComponentNgFactory;
            LookupTabsComponentNgFactory = module.LookupTabsComponentNgFactory;
            LookupQuickSelectPanelComponentNgFactory = module.LookupQuickSelectPanelComponentNgFactory;
        }, function (module) {
            PopoverConfig = module.PopoverConfig;
            PopoverModule = module.PopoverModule;
        }, function (module) {
            PositioningService = module.PositioningService;
        }, function (module) {
            ComponentLoaderFactory = module.ComponentLoaderFactory;
        }, function (module) {
            PaginationService$1 = module.PaginationService;
            PaginationModule = module.PaginationModule;
        }, function (module) {
            DateTimeHelperService = module.DateTimeHelperService;
            DateHelperModule = module.DateHelperModule;
        }, function (module) {
            NumberHelperService = module.NumberHelperService;
            NumberHelperModule = module.NumberHelperModule;
        }, function (module) {
            ColumnFormatService = module.ColumnFormatService;
            DataColumnModule = module.DataColumnModule;
        }, function (module) {
            FarrisContextMenuService = module.FarrisContextMenuService;
            FarrisContextMenuModule = module.FarrisContextMenuModule;
        }, function (module) {
            ResizeService = module.ResizeService;
        }, function (module) {
            DialogService = module.DialogService;
            FarrisDialogModule = module.FarrisDialogModule;
        }, function (module) {
            FAreaResponseModule = module.FAreaResponseModule;
        }, function (module) {
            LayoutModule$1 = module.LayoutModule;
        }, function (module) {
            DataTableModule = module.DataTableModule;
        }, function (module) {
            View_PerfectScrollbarComponent_0 = module.View_PerfectScrollbarComponent_0;
            RenderType_PerfectScrollbarComponent = module.RenderType_PerfectScrollbarComponent;
        }, function (module) {
            View_InputGroupComponent_0 = module.View_InputGroupComponent_0;
            RenderType_InputGroupComponent = module.RenderType_InputGroupComponent;
        }, function (module) {
            FilterEditorComponentNgFactory = module.FilterEditorComponentNgFactory;
        }, function (module) {
            SortEditorComponentNgFactory = module.SortEditorComponentNgFactory;
        }, function (module) {
            ɵlNgFactory = module.ɵlNgFactory;
            DatagridTextboxComponentNgFactory = module.DatagridTextboxComponentNgFactory;
            DatagridTextareaComponentNgFactory = module.DatagridTextareaComponentNgFactory;
            ɵaNgFactory = module.ɵaNgFactory;
            ɵbNgFactory$1 = module.ɵbNgFactory;
            ɵcNgFactory$1 = module.ɵcNgFactory;
            ɵdNgFactory = module.ɵdNgFactory;
            ɵeNgFactory$1 = module.ɵeNgFactory;
            ɵfNgFactory = module.ɵfNgFactory;
            ɵgNgFactory = module.ɵgNgFactory;
            ɵhNgFactory = module.ɵhNgFactory;
            ɵiNgFactory$1 = module.ɵiNgFactory;
            ɵjNgFactory = module.ɵjNgFactory;
            ɵkNgFactory = module.ɵkNgFactory;
            DatagridEnumEditorComponentNgFactory = module.DatagridEnumEditorComponentNgFactory;
            DatagridSortEditorComponentNgFactory = module.DatagridSortEditorComponentNgFactory;
            DatagridFilterEditorComponentNgFactory = module.DatagridFilterEditorComponentNgFactory;
        }, function (module) {
            TaskExecuteComponentNgFactory = module.TaskExecuteComponentNgFactory;
            TaskAssigninfoComponentNgFactory = module.TaskAssigninfoComponentNgFactory;
            ProcessSelectorComponentNgFactory = module.ProcessSelectorComponentNgFactory;
        }, function (module) {
            VerifyDetailComponentNgFactory = module.VerifyDetailComponentNgFactory;
        }, function (module) {
            StringFilterCellComponentNgFactory = module.StringFilterCellComponentNgFactory;
            NumericFilterCellComponentNgFactory = module.NumericFilterCellComponentNgFactory;
            BooleanFilterCellComponentNgFactory = module.BooleanFilterCellComponentNgFactory;
            DateFilterCellComponentNgFactory = module.DateFilterCellComponentNgFactory;
            StringFilterMenuComponentNgFactory = module.StringFilterMenuComponentNgFactory;
            NumericFilterMenuComponentNgFactory = module.NumericFilterMenuComponentNgFactory;
            DateFilterMenuComponentNgFactory = module.DateFilterMenuComponentNgFactory;
            BooleanFilterMenuComponentNgFactory = module.BooleanFilterMenuComponentNgFactory;
        }, function (module) {
            View_FarrisTabsComponent_0 = module.View_FarrisTabsComponent_0;
            RenderType_FarrisTabsComponent = module.RenderType_FarrisTabsComponent;
            View_FarrisTabComponent_0 = module.View_FarrisTabComponent_0;
            RenderType_FarrisTabComponent = module.RenderType_FarrisTabComponent;
            NgbTooltipWindowNgFactory = module.NgbTooltipWindowNgFactory;
        }, function (module) {
            FileUploadComponentNgFactory = module.FileUploadComponentNgFactory;
            UploadDialogComponentNgFactory = module.UploadDialogComponentNgFactory;
        }, function (module) {
            ɵbNgFactory$2 = module.ɵbNgFactory;
            QueryConditionComponentNgFactory = module.QueryConditionComponentNgFactory;
        }, function (module) {
            ɵcNgFactory$2 = module.ɵcNgFactory;
            ɵeNgFactory$2 = module.ɵeNgFactory;
        }, function (module) {
            ɵaNgFactory$1 = module.ɵaNgFactory;
        }, function (module) {
            ProcessSelectorComponentNgFactory$1 = module.ProcessSelectorComponentNgFactory;
            WfWorkitemHandleComponentNgFactory = module.WfWorkitemHandleComponentNgFactory;
            UserHelperComponentNgFactory = module.UserHelperComponentNgFactory;
            TaskAssignComponentNgFactory = module.TaskAssignComponentNgFactory;
            TaskSignaddComponentNgFactory = module.TaskSignaddComponentNgFactory;
            TaskTransferComponentNgFactory = module.TaskTransferComponentNgFactory;
            ɵaNgFactory$2 = module.ɵaNgFactory;
        }, function (module) {
            WindowComponentNgFactory = module.WindowComponentNgFactory;
            WindowTitleBarComponentNgFactory = module.WindowTitleBarComponentNgFactory;
            DialogComponentNgFactory = module.DialogComponentNgFactory;
            DialogTitleBarComponentNgFactory = module.DialogTitleBarComponentNgFactory;
        }, function (module) {
            ɵdNgFactory$1 = module.ɵdNgFactory;
            ɵfNgFactory$1 = module.ɵfNgFactory;
            ɵgNgFactory$1 = module.ɵgNgFactory;
            ɵhNgFactory$1 = module.ɵhNgFactory;
        }, function (module) {
            ɵbNgFactory$3 = module.ɵbNgFactory;
            ɵcNgFactory$3 = module.ɵcNgFactory;
            ɵdNgFactory$2 = module.ɵdNgFactory;
            ɵeNgFactory$3 = module.ɵeNgFactory;
            ɵfNgFactory$2 = module.ɵfNgFactory;
            ɵgNgFactory$2 = module.ɵgNgFactory;
            ɵhNgFactory$2 = module.ɵhNgFactory;
        }, function (module) {
            BatchEditDialogComponentNgFactory = module.BatchEditDialogComponentNgFactory;
            ResultConfirmComponentNgFactory = module.ResultConfirmComponentNgFactory;
        }, function (module) {
            DiscussionPersonnelComponentNgFactory = module.DiscussionPersonnelComponentNgFactory;
        }, function (module) {
            MultiDownloadInfoComponentNgFactory = module.MultiDownloadInfoComponentNgFactory;
        }, function (module) {
            FilterRowComponentNgFactory = module.FilterRowComponentNgFactory;
            FilterTextboxComponentNgFactory = module.FilterTextboxComponentNgFactory;
            FilterCheckboxComponentNgFactory = module.FilterCheckboxComponentNgFactory;
            ConditionEditorComponentNgFactory = module.ConditionEditorComponentNgFactory;
            FilterDatalistComponentNgFactory = module.FilterDatalistComponentNgFactory;
            FilterRowPanelComponentNgFactory = module.FilterRowPanelComponentNgFactory;
            FilterRowEditorComponentNgFactory = module.FilterRowEditorComponentNgFactory;
            FilterSelectComponentNgFactory = module.FilterSelectComponentNgFactory;
        }, function (module) {
            OrganizationSelectorComponentNgFactory = module.OrganizationSelectorComponentNgFactory;
            GridOrganizationSelectorComponentNgFactory = module.GridOrganizationSelectorComponentNgFactory;
        }, function (module) {
            DatagridSettingsComponentNgFactory = module.DatagridSettingsComponentNgFactory;
            SimpleColumnsComponentNgFactory = module.SimpleColumnsComponentNgFactory;
            NewSchemeComponentNgFactory = module.NewSchemeComponentNgFactory;
            SchemeListComponentNgFactory = module.SchemeListComponentNgFactory;
        }, function (module) {
            FEPageModalComponentNgFactory = module.FEPageModalComponentNgFactory;
            FEModalBackdropComponentNgFactory = module.FEModalBackdropComponentNgFactory;
            ɵaNgFactory$3 = module.ɵaNgFactory;
        }, function (module) {
            FeatureEditorComponentNgFactory = module.FeatureEditorComponentNgFactory;
        }, function (module) {
            View_ResponseToolbarComponent_0 = module.View_ResponseToolbarComponent_0;
            RenderType_ResponseToolbarComponent = module.RenderType_ResponseToolbarComponent;
        }, function (module) {
            View_DatagridComponent_0 = module.View_DatagridComponent_0;
            RenderType_DatagridComponent = module.RenderType_DatagridComponent;
        }, function (module) {
            WfTaskHandlerService = module.WfTaskHandlerService;
            TaskService = module.TaskService;
            I18nService$2 = module.I18nService;
            WfTaskHandlerModule = module.WfTaskHandlerModule;
        }, function (module) {
            View_FarrisSectionComponent_0 = module.View_FarrisSectionComponent_0;
            RenderType_FarrisSectionComponent = module.RenderType_FarrisSectionComponent;
        }, function (module) {
            ShortcutsService = module.ShortcutsService;
        }, function (module) {
            View_TextComponent_0 = module.View_TextComponent_0;
            RenderType_TextComponent = module.RenderType_TextComponent;
        }, function (module) {
            View_ValidationMessageComponent_0 = module.View_ValidationMessageComponent_0;
            RenderType_ValidationMessageComponent = module.RenderType_ValidationMessageComponent;
        }, function (module) {
            View_SwitchComponent_0 = module.View_SwitchComponent_0;
            RenderType_SwitchComponent = module.RenderType_SwitchComponent;
        }, function (module) {
            View_NumberSpinnerComponent_0 = module.View_NumberSpinnerComponent_0;
            RenderType_NumberSpinnerComponent = module.RenderType_NumberSpinnerComponent;
        }, function (module) {
            WindowService = module.WindowService;
            WindowContainerService = module.WindowContainerService;
            DialogContainerService = module.DialogContainerService;
            DialogService$2 = module.DialogService;
            SharedModule$2 = module.SharedModule;
            WindowModule = module.WindowModule;
            DialogModule = module.DialogModule;
        }, function (module) {
            ɵbNgFactory$4 = module.ɵbNgFactory;
            ɵnNgFactory = module.ɵnNgFactory;
            ɵeNgFactory$4 = module.ɵeNgFactory;
            ɵhNgFactory$3 = module.ɵhNgFactory;
            ɵmNgFactory = module.ɵmNgFactory;
            ɵkNgFactory$1 = module.ɵkNgFactory;
            ɵlNgFactory$1 = module.ɵlNgFactory;
            RuleIdHelpComponentNgFactory = module.RuleIdHelpComponentNgFactory;
            DataieRuleHelpComponentNgFactory = module.DataieRuleHelpComponentNgFactory;
            ɵoNgFactory = module.ɵoNgFactory;
            ɵpNgFactory = module.ɵpNgFactory;
            ɵqNgFactory = module.ɵqNgFactory;
            ɵrNgFactory = module.ɵrNgFactory;
            ɵsNgFactory = module.ɵsNgFactory;
            ɵtNgFactory = module.ɵtNgFactory;
            ɵuNgFactory = module.ɵuNgFactory;
            ɵvNgFactory = module.ɵvNgFactory;
            ɵwNgFactory$1 = module.ɵwNgFactory;
            ɵxNgFactory = module.ɵxNgFactory;
            ɵyNgFactory = module.ɵyNgFactory;
            ɵzNgFactory = module.ɵzNgFactory;
        }, function (module) {
            LocalizationService$1 = module.LocalizationService;
        }, function (module) {
            QuerySolutionService = module.QuerySolutionService;
            FilterConditionModule = module.FilterConditionModule;
        }, function (module) {
            SysCommonUtilService = module.SysCommonUtilService;
            SysSecurityConfigService = module.SysSecurityConfigService;
            SysCommonModule = module.SysCommonModule;
        }, function (module) {
            HelpFilterMap = module.HelpFilterMap;
            SysHelpService = module.SysHelpService;
            SysExceptionService = module.SysExceptionService;
            ɵf$1 = module.ɵf;
            SysLocaleService = module.SysLocaleService;
            SysManagerUIModule = module.SysManagerUIModule;
        }, function (module) {
            PopupService = module.PopupService;
            POPUP_CONTAINER = module.POPUP_CONTAINER;
            PopupModule = module.PopupModule;
        }, function (module) {
            WfApprovalLogsService = module.WfApprovalLogsService;
            WfApprovalLogsModule = module.WfApprovalLogsModule;
        }, function (module) {
            ResizeBatchService = module.ResizeBatchService;
            ResizeSensorModule = module.ResizeSensorModule;
        }, function (module) {
            SolutionService$1 = module.SolutionService;
            ConvertorService$1 = module.ConvertorService;
            QueryConditionModule = module.QueryConditionModule;
        }, function (module) {
            TaskCommentService = module.TaskCommentService;
            TaskCommentUIState = module.TaskCommentUIState;
            TaskCommentViewModel = module.TaskCommentViewModel;
            I18nService$3 = module.I18nService;
            TaskCommentRepository = module.TaskCommentRepository;
            WFCommentModule = module.WFCommentModule;
        }, function (module) {
            UploadServerService = module.UploadServerService;
            FFileUploaderService = module.FFileUploaderService;
            FFileUploadModule = module.FFileUploadModule;
            FFileUploadAPIServiceToken = module.FFileUploadAPIServiceToken;
        }, function (module) {
            DatalistModule = module.DatalistModule;
        }, function (module) {
            FilterPanelModule = module.FilterPanelModule;
        }, function (module) {
            FDropdownDirectiveTypeModule = module.FDropdownDirectiveTypeModule;
        }, function (module) {
            TaskImplApiModule = module.TaskImplApiModule;
        }, function (module) {
            WfSignModule = module.WfSignModule;
        }, function (module) {
            FilterModule = module.FilterModule;
        }, function (module) {
            SorterModule = module.SorterModule;
        }, function (module) {
            ProgressModule = module.ProgressModule;
        }, function (module) {
            ProgressStepModule = module.ProgressStepModule;
        }, function (module) {
            TreeModule = module.TreeModule;
        }, function (module) {
            OrganizationSelectorModule = module.OrganizationSelectorModule;
        }, function (module) {
            ExcelExportModule = module.ExcelExportModule;
        }, function (module) {
            CheckBoxModule = module.CheckBoxModule;
            SharedModule$3 = module.SharedModule;
            TreeViewModule = module.TreeViewModule;
        }],
        execute: function () {

            function createTranslateLoader(http, version) {
                var versionSuffix = "";
                if (version) {
                    versionSuffix = "?v=" + version;
                }
                return new TranslateHttpLoader(http, '/apps/scm/cm/web/bo-materialplan-front/materialplancard/i18n/', '.json' + versionSuffix);
            }
            var lang = { "zh-CHS": { "button-data-export": "导出", "button-data-import": "导入", "root-component": "", "root-layout": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "title": "物料需求计划详情", "page-header-toolbar": "", "button-add": "新增", "button-edit": "编辑", "button-save": "保存", "button-cancel": "取消", "main-container": "", "like-card-container": "", "basic-form-component-ref": "", "detail-container": "", "detail-section": "", "Section/detail-section/mainTitle": "", "Section/detail-section/subTitle": "", "detail-tab": "", "plandetails-tab-page": "物料需求计划明细", "plandetails-component-ref": "", "plandetails-tab-toolbar": "", "plandetailsAddButton": "新增", "plandetailsRemoveButton": "删除", "tabToolbarItem-fy36": "导入", "tabToolbarItem-56w5": "勾选导出", "tabToolbarItem-caan": "全部导出", "basic-form-component": "", "basic-form-section": "", "Section/basic-form-section/mainTitle": "基本信息", "Section/basic-form-section/subTitle": "", "basic-form-layout": "", "applicant_Applicant_Name_d4373c28_6dic": "制单人", "LookupEdit/applicant_Applicant_Name_d4373c28_6dic/placeHolder": "", "LookupEdit/applicant_Applicant_Name_d4373c28_6dic/dialogTitle": "", "deliveryDate_7be8a928_jelq": "交货日期", "DateBox/deliveryDate_7be8a928_jelq/placeHolder": "", "purchaseDept_PurchaseDept_name_8d6e8922_yvzr": "采购部门", "LookupEdit/purchaseDept_PurchaseDept_name_8d6e8922_yvzr/placeHolder": "", "LookupEdit/purchaseDept_PurchaseDept_name_8d6e8922_yvzr/dialogTitle": "", "planCode_7b926633_5dke": "计划编号", "TextBox/planCode_7b926633_5dke/placeHolder": "", "planName_fbe5d590_15n2": "计划名称", "TextBox/planName_fbe5d590_15n2/placeHolder": "", "isPurchaseOrder_51920336_9xj5": "是否已生成采购订单", "totalPrice_1c1f8bdb_p30m": "物料总价", "NumberSpinner/totalPrice_1c1f8bdb_p30m/placeHolder": "", "purchaser_Purchaser_Name_55f1e399_hz5j": "采购员", "LookupEdit/purchaser_Purchaser_Name_55f1e399_hz5j/placeHolder": "", "LookupEdit/purchaser_Purchaser_Name_55f1e399_hz5j/dialogTitle": "", "plandetails-component": "", "plandetails-component-layout": "", "dataGrid_plandetails": "", "DataGrid/dataGrid_plandetails/lineNumberTitle": "", "DataGrid/dataGrid_plandetails/OperateEditButton": "编辑", "DataGrid/dataGrid_plandetails/OperateDeleteButton": "删除", "DataGrid/dataGrid_plandetails/OperateColumn": "操作", "materialId_MaterialId_MaterialCode_08ca00c7_ao7g": "物料编号", "GridField/materialId_MaterialId_MaterialCode_08ca00c7_ao7g/editor/materialId_MaterialId_MaterialCode_08ca00c7_bba6": "文本", "GridField/materialId_MaterialId_MaterialCode_08ca00c7_ao7g/editor/LookupEdit/materialId_MaterialId_MaterialCode_08ca00c7_bba6/placeHolder": "", "GridField/materialId_MaterialId_MaterialCode_08ca00c7_ao7g/editor/LookupEdit/materialId_MaterialId_MaterialCode_08ca00c7_bba6/dialogTitle": "", "materialId_MaterialId_MaterialName_0d109a4f_7r0m": "物料名称", "GridField/materialId_MaterialId_MaterialName_0d109a4f_7r0m/editor/materialId_MaterialId_MaterialName_0d109a4f_c6sl": "文本", "GridField/materialId_MaterialId_MaterialName_0d109a4f_7r0m/editor/TextBox/materialId_MaterialId_MaterialName_0d109a4f_c6sl/placeHolder": "", "materialId_MaterialId_EvePrice_998dde09_udfc": "市场价格", "GridField/materialId_MaterialId_EvePrice_998dde09_udfc/editor/materialId_MaterialId_EvePrice_998dde09_znlr": "数值框", "GridField/materialId_MaterialId_EvePrice_998dde09_udfc/editor/NumberSpinner/materialId_MaterialId_EvePrice_998dde09_znlr/placeHolder": "", "materialId_MaterialId_MaterialCat_CatName_e6f48613_344b": "物料类别", "GridField/materialId_MaterialId_MaterialCat_CatName_e6f48613_344b/editor/materialId_MaterialId_MaterialCat_CatName_e6f48613_vwbv": "文本", "GridField/materialId_MaterialId_MaterialCat_CatName_e6f48613_344b/editor/TextBox/materialId_MaterialId_MaterialCat_CatName_e6f48613_vwbv/placeHolder": "", "materiaAmount_143b71b6_wiiv": "物料数量", "GridField/materiaAmount_143b71b6_wiiv/editor/materiaAmount_143b71b6_5utc": "数值框", "GridField/materiaAmount_143b71b6_wiiv/editor/NumberSpinner/materiaAmount_143b71b6_5utc/placeHolder": "", "supplier_Supplier_SupplierCode_1d93ad3d_alr2": "供应商编号", "GridField/supplier_Supplier_SupplierCode_1d93ad3d_alr2/editor/supplier_Supplier_SupplierCode_1d93ad3d_6lav": "文本", "GridField/supplier_Supplier_SupplierCode_1d93ad3d_alr2/editor/LookupEdit/supplier_Supplier_SupplierCode_1d93ad3d_6lav/placeHolder": "", "GridField/supplier_Supplier_SupplierCode_1d93ad3d_alr2/editor/LookupEdit/supplier_Supplier_SupplierCode_1d93ad3d_6lav/dialogTitle": "", "supplier_Supplier_SupplierName_a4a0e5d0_ju44": "供应商名称", "GridField/supplier_Supplier_SupplierName_a4a0e5d0_ju44/editor/supplier_Supplier_SupplierName_a4a0e5d0_2by7": "文本", "GridField/supplier_Supplier_SupplierName_a4a0e5d0_ju44/editor/TextBox/supplier_Supplier_SupplierName_a4a0e5d0_2by7/placeHolder": "", "supplier_Supplier_ContactsEmail_9f031afb_8tfe": "联系人邮箱", "GridField/supplier_Supplier_ContactsEmail_9f031afb_8tfe/editor/supplier_Supplier_ContactsEmail_9f031afb_4z9p": "文本", "GridField/supplier_Supplier_ContactsEmail_9f031afb_8tfe/editor/TextBox/supplier_Supplier_ContactsEmail_9f031afb_4z9p/placeHolder": "", "supplier_Supplier_ContactsAddress_27ddf90a_w9yq": "办公地址", "GridField/supplier_Supplier_ContactsAddress_27ddf90a_w9yq/editor/supplier_Supplier_ContactsAddress_27ddf90a_zycw": "文本", "GridField/supplier_Supplier_ContactsAddress_27ddf90a_w9yq/editor/TextBox/supplier_Supplier_ContactsAddress_27ddf90a_zycw/placeHolder": "" } };
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
                LangPipe = __decorate([
                    Pipe({ name: 'lang' }),
                    __metadata("design:paramtypes", [TranslateService, HttpClient])
                ], LangPipe);
                return LangPipe;
            }());
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
                SafeHtmlPipe = __decorate([
                    Pipe({ name: 'safeHtml' }),
                    __metadata("design:paramtypes", [DomSanitizer])
                ], SafeHtmlPipe);
                return SafeHtmlPipe;
            }());
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
                LangService = __decorate([
                    Injectable(),
                    __metadata("design:paramtypes", [TranslateService])
                ], LangService);
                return LangService;
            }());
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
                        var httpOb = this.http.get("/apps/scm/cm/web/bo-materialplan-front/version.json?v=" + new Date().getTime()).pipe(switchMap(function (data) {
                            var currentVersion = null;
                            if (data instanceof Array) {
                                var versionKey_1 = "materialplancard/" + langCode + ".json";
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
                TranslateResolveService = __decorate([
                    Injectable(),
                    __metadata("design:paramtypes", [TranslateService, HttpClient])
                ], TranslateResolveService);
                return TranslateResolveService;
            }());

            var EventDeclaration = /** @class */ (function (_super) {
                __extends(EventDeclaration, _super);
                function EventDeclaration() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                EventDeclaration = __decorate([
                    Injectable()
                ], EventDeclaration);
                return EventDeclaration;
            }(Declaration));

            var ɵ0 = { type: 'string' }, ɵ1 = { type: 'string' }, ɵ2 = { type: 'string' }, ɵ3 = { type: 'string' };
            var RootViewmodel = /** @class */ (function (_super) {
                __extends(RootViewmodel, _super);
                function RootViewmodel() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.bindingPath = '/';
                    _this.dom = {};
                    _this.childViewModels = {
                        'BasicFormViewmodel': 'basicFormViewmodel',
                        'PlandetailsComponentViewmodel': 'plandetailsComponentViewmodel'
                    };
                    return _this;
                }
                RootViewmodel.prototype.Load1 = function (commandParam) { return; };
                RootViewmodel.prototype.LoadAndAdd1 = function (commandParam) { return; };
                RootViewmodel.prototype.LoadAndView1 = function (commandParam) { return; };
                RootViewmodel.prototype.LoadAndEdit1 = function (commandParam) { return; };
                RootViewmodel.prototype.Add1 = function (commandParam) { return; };
                RootViewmodel.prototype.Edit1 = function (commandParam) { return; };
                RootViewmodel.prototype.Save1 = function (commandParam) { return; };
                RootViewmodel.prototype.Cancel1 = function (commandParam) { return; };
                RootViewmodel.prototype.ChangeItem1 = function (commandParam) { return; };
                RootViewmodel.prototype.ChangeItem2 = function (commandParam) { return; };
                RootViewmodel.prototype.dataImport1 = function (commandParam) { return; };
                RootViewmodel.prototype.dataExport1 = function (commandParam) { return; };
                RootViewmodel.prototype.listDataExport1 = function (commandParam) { return; };
                RootViewmodel.prototype.rootviewmodelgetMinDate1 = function (commandParam) { return; };
                RootViewmodel.prototype.rootviewmodelDataExport1 = function (commandParam) { return; };
                RootViewmodel.prototype.rootviewmodelDataExport2 = function (commandParam) { return; };
                RootViewmodel.prototype.rootviewmodelDataImport1 = function (commandParam) { return; };
                __decorate([
                    NgCommand({
                        name: 'Load1',
                        params: {
                            action: '{UISTATE~/root-component/action}'
                        },
                        paramDescriptions: {
                            action: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Load1", null);
                __decorate([
                    NgCommand({
                        name: 'LoadAndAdd1',
                        params: {
                            transitionAction: 'Create'
                        },
                        paramDescriptions: {
                            transitionAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "LoadAndAdd1", null);
                __decorate([
                    NgCommand({
                        name: 'LoadAndView1',
                        params: {
                            id: '{UISTATE~/root-component/id}',
                            transitionAction: 'Cancel',
                            transitionActionParamName: ''
                        },
                        paramDescriptions: {
                            id: ɵ0,
                            transitionAction: { type: 'string' },
                            transitionActionParamName: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "LoadAndView1", null);
                __decorate([
                    NgCommand({
                        name: 'LoadAndEdit1',
                        params: {
                            id: '{UISTATE~/root-component/id}',
                            transitionAction: 'Edit',
                            transitionActionParamName: ''
                        },
                        paramDescriptions: {
                            id: ɵ1,
                            transitionAction: { type: 'string' },
                            transitionActionParamName: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "LoadAndEdit1", null);
                __decorate([
                    NgCommand({
                        name: 'Add1',
                        params: {
                            transitionAction: 'Create'
                        },
                        paramDescriptions: {
                            transitionAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Add1", null);
                __decorate([
                    NgCommand({
                        name: 'Edit1',
                        params: {
                            transitionAction: 'Edit'
                        },
                        paramDescriptions: {
                            transitionAction: { type: '' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Edit1", null);
                __decorate([
                    NgCommand({
                        name: 'Save1',
                        params: {
                            transitionAction: 'Cancel',
                            successMsg: ''
                        },
                        paramDescriptions: {
                            transitionAction: { type: 'string' },
                            successMsg: { type: '' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Save1", null);
                __decorate([
                    NgCommand({
                        name: 'Cancel1',
                        params: {
                            transitionAction: 'Cancel'
                        },
                        paramDescriptions: {
                            transitionAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Cancel1", null);
                __decorate([
                    NgCommand({
                        name: 'ChangeItem1',
                        params: {
                            id: '{DATA~/root-component/id}',
                            type: 'prev',
                            parentId: '{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}',
                            transitionAction: 'Cancel'
                        },
                        paramDescriptions: {
                            id: ɵ2,
                            type: { type: 'string' },
                            transitionAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "ChangeItem1", null);
                __decorate([
                    NgCommand({
                        name: 'ChangeItem2',
                        params: {
                            id: '{DATA~/root-component/id}',
                            type: 'next',
                            parentId: '{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}',
                            transitionAction: 'Cancel'
                        },
                        paramDescriptions: {
                            id: ɵ3,
                            type: { type: 'string' },
                            transitionAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "ChangeItem2", null);
                __decorate([
                    NgCommand({
                        name: 'dataImport1',
                        params: {
                            type: '1',
                            ruleID: '71fea8ad-a817-4ea8-bf36-c5d1e1ab7b8e',
                            option: '{"templatefilename":"物料需求计划明细导入模板shizhiyuan","customImportTitle":"物料需求计划明细导入shizhiyuan","importdbRefresh":true}'
                        },
                        paramDescriptions: {
                            type: { type: 'int' },
                            ruleID: { type: 'string' },
                            option: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "dataImport1", null);
                __decorate([
                    NgCommand({
                        name: 'dataExport1',
                        params: {
                            type: '',
                            ruleID: '',
                            option: ''
                        },
                        paramDescriptions: {
                            type: { type: 'int' },
                            ruleID: { type: 'string' },
                            option: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "dataExport1", null);
                __decorate([
                    NgCommand({
                        name: 'listDataExport1',
                        params: {
                            ruleID: '',
                            option: ''
                        },
                        paramDescriptions: {
                            ruleID: { type: 'string' },
                            option: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "listDataExport1", null);
                __decorate([
                    NgCommand({
                        name: 'rootviewmodelgetMinDate1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "rootviewmodelgetMinDate1", null);
                __decorate([
                    NgCommand({
                        name: 'rootviewmodelDataExport1',
                        params: {
                            type: '3',
                            ruleID: '5ef04e37-ce4e-4e7a-94fb-cd4d80a173e8',
                            option: '{"selectFilterGridComponent":"data-grid-component"}'
                        },
                        paramDescriptions: {
                            type: { type: 'int' },
                            ruleID: { type: 'string' },
                            option: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "rootviewmodelDataExport1", null);
                __decorate([
                    NgCommand({
                        name: 'rootviewmodelDataExport2',
                        params: {
                            type: '3',
                            ruleID: '5ef04e37-ce4e-4e7a-94fb-cd4d80a173e8',
                            option: ''
                        },
                        paramDescriptions: {
                            type: { type: 'int' },
                            ruleID: { type: 'string' },
                            option: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "rootviewmodelDataExport2", null);
                __decorate([
                    NgCommand({
                        name: 'rootviewmodelDataImport1',
                        params: {
                            type: '1',
                            ruleID: '71fea8ad-a817-4ea8-bf36-c5d1e1ab7b8e',
                            option: '{"templatefilename":"物料需求计划明细导入模板","customImportTitle":"物料需求计划明细导入","importdbRefresh":true}'
                        },
                        paramDescriptions: {
                            type: { type: 'int' },
                            ruleID: { type: 'string' },
                            option: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "rootviewmodelDataImport1", null);
                RootViewmodel = __decorate([
                    Injectable()
                ], RootViewmodel);
                return RootViewmodel;
            }(ViewModel));

            var Material35b1Entity = /** @class */ (function (_super) {
                __extends(Material35b1Entity, _super);
                function Material35b1Entity() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgField({
                        originalDataField: 'MaterialId',
                        dataField: 'materialId',
                        primary: true,
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'MaterialId.MaterialId',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], Material35b1Entity.prototype, "materialId", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'ID',
                        dataField: 'materialId_ID',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'MaterialId.MaterialId_ID',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], Material35b1Entity.prototype, "materialId_ID", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'MaterialName',
                        dataField: 'materialId_MaterialName',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'MaterialId.MaterialId_MaterialName',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], Material35b1Entity.prototype, "materialId_MaterialName", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'MaterialCode',
                        dataField: 'materialId_MaterialCode',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'MaterialId.MaterialId_MaterialCode',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], Material35b1Entity.prototype, "materialId_MaterialCode", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'EvePrice',
                        dataField: 'materialId_EvePrice',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'MaterialId.MaterialId_EvePrice',
                    }),
                    __metadata("design:type", Object)
                ], Material35b1Entity.prototype, "materialId_EvePrice", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'CatName(MaterialCat)',
                        dataField: 'materialId_MaterialCat_CatName',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'MaterialId.MaterialId_MaterialCat_CatName',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], Material35b1Entity.prototype, "materialId_MaterialCat_CatName", void 0);
                Material35b1Entity = __decorate([
                    NgEntity({
                        originalCode: "MaterialId",
                        nodeCode: "materialId"
                    })
                ], Material35b1Entity);
                return Material35b1Entity;
            }(Entity));

            var SupplierMa2368Entity = /** @class */ (function (_super) {
                __extends(SupplierMa2368Entity, _super);
                function SupplierMa2368Entity() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgField({
                        originalDataField: 'Supplier',
                        dataField: 'supplier',
                        primary: true,
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Supplier.Supplier',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], SupplierMa2368Entity.prototype, "supplier", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'ID',
                        dataField: 'supplier_ID',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Supplier.Supplier_ID',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], SupplierMa2368Entity.prototype, "supplier_ID", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'SupplierName',
                        dataField: 'supplier_SupplierName',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Supplier.Supplier_SupplierName',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], SupplierMa2368Entity.prototype, "supplier_SupplierName", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'SupplierCode',
                        dataField: 'supplier_SupplierCode',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Supplier.Supplier_SupplierCode',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], SupplierMa2368Entity.prototype, "supplier_SupplierCode", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'ContactsEmail',
                        dataField: 'supplier_ContactsEmail',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Supplier.Supplier_ContactsEmail',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [100],
                                message: '最大长度为100',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], SupplierMa2368Entity.prototype, "supplier_ContactsEmail", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'ContactsAddress',
                        dataField: 'supplier_ContactsAddress',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Supplier.Supplier_ContactsAddress',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [100],
                                message: '最大长度为100',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], SupplierMa2368Entity.prototype, "supplier_ContactsAddress", void 0);
                SupplierMa2368Entity = __decorate([
                    NgEntity({
                        originalCode: "Supplier",
                        nodeCode: "supplier"
                    })
                ], SupplierMa2368Entity);
                return SupplierMa2368Entity;
            }(Entity));

            var PlanDetailsEntity = /** @class */ (function (_super) {
                __extends(PlanDetailsEntity, _super);
                function PlanDetailsEntity() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgField({
                        originalDataField: 'ID',
                        dataField: 'id',
                        primary: true,
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'ID',
                        validRules: [
                            {
                                type: 'required',
                                constraints: [true],
                            },
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], PlanDetailsEntity.prototype, "id", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'ParentID',
                        dataField: 'parentID',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'ParentID',
                        validRules: [
                            {
                                type: 'required',
                                constraints: [true],
                            },
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], PlanDetailsEntity.prototype, "parentID", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'MaterialAmount',
                        dataField: 'materialAmount',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'MaterialAmount',
                    }),
                    __metadata("design:type", Object)
                ], PlanDetailsEntity.prototype, "materialAmount", void 0);
                __decorate([
                    NgObject({
                        dataField: 'materialId',
                        originalDataField: 'MaterialId',
                        type: Material35b1Entity
                    }),
                    __metadata("design:type", Material35b1Entity)
                ], PlanDetailsEntity.prototype, "materialId", void 0);
                __decorate([
                    NgObject({
                        dataField: 'supplier',
                        originalDataField: 'Supplier',
                        type: SupplierMa2368Entity
                    }),
                    __metadata("design:type", SupplierMa2368Entity)
                ], PlanDetailsEntity.prototype, "supplier", void 0);
                PlanDetailsEntity = __decorate([
                    NgEntity({
                        originalCode: "PlanDetails",
                        nodeCode: "planDetailss"
                    })
                ], PlanDetailsEntity);
                return PlanDetailsEntity;
            }(Entity));

            var BillState6ca5Entity = /** @class */ (function (_super) {
                __extends(BillState6ca5Entity, _super);
                function BillState6ca5Entity() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgField({
                        originalDataField: 'BillState',
                        dataField: 'billState',
                        originalDataFieldType: 'Enum',
                        defaultValue: '',
                        initValue: 'Billing',
                        path: 'BillStatus.BillState',
                    }),
                    __metadata("design:type", Object)
                ], BillState6ca5Entity.prototype, "billState", void 0);
                BillState6ca5Entity = __decorate([
                    NgEntity({
                        originalCode: "BillStatus",
                        nodeCode: "billStatus"
                    })
                ], BillState6ca5Entity);
                return BillState6ca5Entity;
            }(Entity));

            var ProcessInstanceC868Entity = /** @class */ (function (_super) {
                __extends(ProcessInstanceC868Entity, _super);
                function ProcessInstanceC868Entity() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgField({
                        originalDataField: 'ProcessInstance',
                        dataField: 'processInstance',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'ProcessInstance.ProcessInstance',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], ProcessInstanceC868Entity.prototype, "processInstance", void 0);
                ProcessInstanceC868Entity = __decorate([
                    NgEntity({
                        originalCode: "ProcessInstance",
                        nodeCode: "processInstance"
                    })
                ], ProcessInstanceC868Entity);
                return ProcessInstanceC868Entity;
            }(Entity));

            var GspUserA50fEntity = /** @class */ (function (_super) {
                __extends(GspUserA50fEntity, _super);
                function GspUserA50fEntity() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgField({
                        originalDataField: 'Applicant',
                        dataField: 'applicant',
                        primary: true,
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Applicant.Applicant',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], GspUserA50fEntity.prototype, "applicant", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'ID',
                        dataField: 'applicant_ID',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Applicant.Applicant_ID',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], GspUserA50fEntity.prototype, "applicant_ID", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Name',
                        dataField: 'applicant_Name',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Applicant.Applicant_Name',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], GspUserA50fEntity.prototype, "applicant_Name", void 0);
                GspUserA50fEntity = __decorate([
                    NgEntity({
                        originalCode: "Applicant",
                        nodeCode: "applicant"
                    })
                ], GspUserA50fEntity);
                return GspUserA50fEntity;
            }(Entity));

            var SysOrgF9F7Entity = /** @class */ (function (_super) {
                __extends(SysOrgF9F7Entity, _super);
                function SysOrgF9F7Entity() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgField({
                        originalDataField: 'PurchaseDept',
                        dataField: 'purchaseDept',
                        primary: true,
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'PurchaseDept.PurchaseDept',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], SysOrgF9F7Entity.prototype, "purchaseDept", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'ID',
                        dataField: 'purchaseDept_ID',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'PurchaseDept.PurchaseDept_ID',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], SysOrgF9F7Entity.prototype, "purchaseDept_ID", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'name',
                        dataField: 'purchaseDept_name',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'PurchaseDept.PurchaseDept_name',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [100],
                                message: '最大长度为100',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], SysOrgF9F7Entity.prototype, "purchaseDept_name", void 0);
                SysOrgF9F7Entity = __decorate([
                    NgEntity({
                        originalCode: "PurchaseDept",
                        nodeCode: "purchaseDept"
                    })
                ], SysOrgF9F7Entity);
                return SysOrgF9F7Entity;
            }(Entity));

            var GspUserF039Entity = /** @class */ (function (_super) {
                __extends(GspUserF039Entity, _super);
                function GspUserF039Entity() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgField({
                        originalDataField: 'Purchaser',
                        dataField: 'purchaser',
                        primary: true,
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Purchaser.Purchaser',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], GspUserF039Entity.prototype, "purchaser", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'ID',
                        dataField: 'purchaser_ID',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Purchaser.Purchaser_ID',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], GspUserF039Entity.prototype, "purchaser_ID", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Name',
                        dataField: 'purchaser_Name',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Purchaser.Purchaser_Name',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], GspUserF039Entity.prototype, "purchaser_Name", void 0);
                GspUserF039Entity = __decorate([
                    NgEntity({
                        originalCode: "Purchaser",
                        nodeCode: "purchaser"
                    })
                ], GspUserF039Entity);
                return GspUserF039Entity;
            }(Entity));

            var MaterialPlanEntity = /** @class */ (function (_super) {
                __extends(MaterialPlanEntity, _super);
                function MaterialPlanEntity() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgField({
                        originalDataField: 'ID',
                        dataField: 'id',
                        primary: true,
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'ID',
                        validRules: [
                            {
                                type: 'required',
                                constraints: [true],
                            },
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], MaterialPlanEntity.prototype, "id", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Version',
                        dataField: 'version',
                        originalDataFieldType: 'DateTime',
                        initValue: '0001-01-01T00:00:00',
                        path: 'Version',
                        enableTimeZone: true,
                    }),
                    __metadata("design:type", String)
                ], MaterialPlanEntity.prototype, "version", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'DeliveryDate',
                        dataField: 'deliveryDate',
                        originalDataFieldType: 'DateTime',
                        initValue: '0001-01-01T00:00:00',
                        path: 'DeliveryDate',
                        enableTimeZone: true,
                    }),
                    __metadata("design:type", String)
                ], MaterialPlanEntity.prototype, "deliveryDate", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'PlanCode',
                        dataField: 'planCode',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'PlanCode',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [100],
                                message: '最大长度为100',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], MaterialPlanEntity.prototype, "planCode", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'PlanName',
                        dataField: 'planName',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'PlanName',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [100],
                                message: '最大长度为100',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], MaterialPlanEntity.prototype, "planName", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'IsPurchaseOrder',
                        dataField: 'isPurchaseOrder',
                        originalDataFieldType: 'Boolean',
                        initValue: false,
                        path: 'IsPurchaseOrder',
                    }),
                    __metadata("design:type", Object)
                ], MaterialPlanEntity.prototype, "isPurchaseOrder", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'TotalPrice',
                        dataField: 'totalPrice',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'TotalPrice',
                    }),
                    __metadata("design:type", Object)
                ], MaterialPlanEntity.prototype, "totalPrice", void 0);
                __decorate([
                    NgList({
                        dataField: 'planDetailss',
                        originalDataField: '',
                        type: PlanDetailsEntity
                    }),
                    __metadata("design:type", EntityList)
                ], MaterialPlanEntity.prototype, "planDetailss", void 0);
                __decorate([
                    NgObject({
                        dataField: 'billStatus',
                        originalDataField: 'BillStatus',
                        type: BillState6ca5Entity
                    }),
                    __metadata("design:type", BillState6ca5Entity)
                ], MaterialPlanEntity.prototype, "billStatus", void 0);
                __decorate([
                    NgObject({
                        dataField: 'processInstance',
                        originalDataField: 'ProcessInstance',
                        type: ProcessInstanceC868Entity
                    }),
                    __metadata("design:type", ProcessInstanceC868Entity)
                ], MaterialPlanEntity.prototype, "processInstance", void 0);
                __decorate([
                    NgObject({
                        dataField: 'applicant',
                        originalDataField: 'Applicant',
                        type: GspUserA50fEntity
                    }),
                    __metadata("design:type", GspUserA50fEntity)
                ], MaterialPlanEntity.prototype, "applicant", void 0);
                __decorate([
                    NgObject({
                        dataField: 'purchaseDept',
                        originalDataField: 'PurchaseDept',
                        type: SysOrgF9F7Entity
                    }),
                    __metadata("design:type", SysOrgF9F7Entity)
                ], MaterialPlanEntity.prototype, "purchaseDept", void 0);
                __decorate([
                    NgObject({
                        dataField: 'purchaser',
                        originalDataField: 'Purchaser',
                        type: GspUserF039Entity
                    }),
                    __metadata("design:type", GspUserF039Entity)
                ], MaterialPlanEntity.prototype, "purchaser", void 0);
                MaterialPlanEntity = __decorate([
                    NgEntity({
                        originalCode: "MaterialPlan",
                        nodeCode: "materialPlans"
                    })
                ], MaterialPlanEntity);
                return MaterialPlanEntity;
            }(Entity));

            var MaterialPlanProxy = /** @class */ (function (_super) {
                __extends(MaterialPlanProxy, _super);
                function MaterialPlanProxy(httpClient, uriService) {
                    var _this = _super.call(this, httpClient, uriService) || this;
                    _this.apiUrl = 'api/scm/cm/v1.0/materialplancard_frm';
                    _this.baseUri = uriService.extendUri(_this.apiUrl);
                    return _this;
                }
                MaterialPlanProxy.prototype.DataImportVMAction = function (dataImportContext) {
                    var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/dataimportvmaction', {});
                    var url = uri.toString();
                    var method = 'PUT';
                    var options = {
                        params: {},
                        headers: {},
                        body: {
                            requestInfo: null,
                            dataImportContext: dataImportContext,
                        }
                    };
                    return this.invoke(url, method, options);
                };
                MaterialPlanProxy.prototype.DataExportVMAction = function (exportContext) {
                    var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/dataexportvmaction', {});
                    var url = uri.toString();
                    var method = 'PUT';
                    var options = {
                        params: {},
                        headers: {},
                        body: {
                            requestInfo: null,
                            exportContext: exportContext,
                        }
                    };
                    return this.invoke(url, method, options);
                };
                MaterialPlanProxy = __decorate([
                    Injectable(),
                    __metadata("design:paramtypes", [HttpClient,
                        UriService])
                ], MaterialPlanProxy);
                return MaterialPlanProxy;
            }(BefProxy));

            var MaterialPlanRepository = /** @class */ (function (_super) {
                __extends(MaterialPlanRepository, _super);
                function MaterialPlanRepository(injector) {
                    var _this = _super.call(this, injector) || this;
                    _this.name = 'MaterialPlanRepository';
                    _this.paginationInfo = {};
                    _this.proxy = injector.get(MaterialPlanProxy, null);
                    return _this;
                }
                MaterialPlanRepository = __decorate([
                    Injectable(),
                    NgRepository({
                        apiUrl: 'api/scm/cm/v1.0/materialplancard_frm',
                        entityType: MaterialPlanEntity
                    }),
                    __metadata("design:paramtypes", [Injector])
                ], MaterialPlanRepository);
                return MaterialPlanRepository;
            }(BefRepository));

            var RootViewmodelForm = /** @class */ (function (_super) {
                __extends(RootViewmodelForm, _super);
                function RootViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                RootViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '物料需求计划',
                        enableValidate: false
                    }),
                    Injectable()
                ], RootViewmodelForm);
                return RootViewmodelForm;
            }(Form));

            var ɵ0$1 = function (context) { return context.state === 'init'; }, ɵ1$1 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ2$1 = function (context) { return context.state === 'init'; }, ɵ3$1 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ4 = function (context) { return context.state === 'init'; }, ɵ5 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ6 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ7 = function (context) { return context.state === 'add' || context.state === 'edit'; };
            var RootViewmodelStateMachine = /** @class */ (function (_super) {
                __extends(RootViewmodelStateMachine, _super);
                function RootViewmodelStateMachine() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgState({ name: "新增" }),
                    __metadata("design:type", State)
                ], RootViewmodelStateMachine.prototype, "add", void 0);
                __decorate([
                    NgState({
                        initialState: true,
                        name: "初始"
                    }),
                    __metadata("design:type", State)
                ], RootViewmodelStateMachine.prototype, "init", void 0);
                __decorate([
                    NgState({ name: "编辑" }),
                    __metadata("design:type", State)
                ], RootViewmodelStateMachine.prototype, "edit", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ0$1
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canRemove", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ1$1
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "editable", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ2$1
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canEdit", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ3$1
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canRemoveDetail", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ4
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canAdd", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ5
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canSave", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ6
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canCancel", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ7
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canAddDetail", void 0);
                __decorate([
                    NgAction({
                        transitTo: 'init'
                    }),
                    __metadata("design:type", Function)
                ], RootViewmodelStateMachine.prototype, "Cancel", void 0);
                __decorate([
                    NgAction({
                        transitTo: 'add'
                    }),
                    __metadata("design:type", Function)
                ], RootViewmodelStateMachine.prototype, "Create", void 0);
                __decorate([
                    NgAction({
                        transitTo: 'edit'
                    }),
                    __metadata("design:type", Function)
                ], RootViewmodelStateMachine.prototype, "Edit", void 0);
                __decorate([
                    NgAction({
                        transitTo: 'init'
                    }),
                    __metadata("design:type", Function)
                ], RootViewmodelStateMachine.prototype, "Save", void 0);
                RootViewmodelStateMachine = __decorate([
                    Injectable()
                ], RootViewmodelStateMachine);
                return RootViewmodelStateMachine;
            }(StateMachine));

            var RootViewmodelUIState = /** @class */ (function (_super) {
                __extends(RootViewmodelUIState, _super);
                function RootViewmodelUIState() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgParam({ originalDataType: "DateTime", category: "locale" }),
                    __metadata("design:type", Object)
                ], RootViewmodelUIState.prototype, "mindate", void 0);
                RootViewmodelUIState = __decorate([
                    Injectable()
                ], RootViewmodelUIState);
                return RootViewmodelUIState;
            }(UIState));

            var Load1Handler = /** @class */ (function (_super) {
                __extends(Load1Handler, _super);
                function Load1Handler(_NavigationMiddlewareService1, _CommandService1) {
                    var _this = _super.call(this) || this;
                    _this._NavigationMiddlewareService1 = _NavigationMiddlewareService1;
                    _this._CommandService1 = _CommandService1;
                    return _this;
                }
                Load1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('onClosing', function (context) {
                        var args = [];
                        return _this.invoke(_this._NavigationMiddlewareService1, 'onClosing', args, context);
                    });
                    this.addTask('execute', function (context) {
                        var args = [
                            '{COMMAND~/params/action}'
                        ];
                        return _this.invoke(_this._CommandService1, 'execute', args, context);
                    });
                    this.addLink('onClosing', 'execute', "1==1");
                };
                Load1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Load1'
                    }),
                    __metadata("design:paramtypes", [NavigationMiddlewareService,
                        CommandService])
                ], Load1Handler);
                return Load1Handler;
            }(CommandHandler));

            var LoadAndAdd1Handler = /** @class */ (function (_super) {
                __extends(LoadAndAdd1Handler, _super);
                function LoadAndAdd1Handler(_CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                LoadAndAdd1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('add', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'add', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('add', 'transit', "1==1");
                };
                LoadAndAdd1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'LoadAndAdd1'
                    }),
                    __metadata("design:paramtypes", [CardDataService,
                        StateMachineService])
                ], LoadAndAdd1Handler);
                return LoadAndAdd1Handler;
            }(CommandHandler));

            var LoadAndView1Handler = /** @class */ (function (_super) {
                __extends(LoadAndView1Handler, _super);
                function LoadAndView1Handler(_CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                LoadAndView1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('onLoading', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionActionParamName}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'onLoading', args, context);
                    });
                    this.addTask('load', function (context) {
                        var args = [
                            '{COMMAND~/params/id}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'load', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('onLoading', 'load', "1==1");
                    this.addLink('load', 'transit', "1==1");
                };
                LoadAndView1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'LoadAndView1'
                    }),
                    __metadata("design:paramtypes", [CardDataService,
                        StateMachineService])
                ], LoadAndView1Handler);
                return LoadAndView1Handler;
            }(CommandHandler));

            var LoadAndEdit1Handler = /** @class */ (function (_super) {
                __extends(LoadAndEdit1Handler, _super);
                function LoadAndEdit1Handler(_CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                LoadAndEdit1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('onLoading', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionActionParamName}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'onLoading', args, context);
                    });
                    this.addTask('load', function (context) {
                        var args = [
                            '{COMMAND~/params/id}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'load', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('onLoading', 'load', "1==1");
                    this.addLink('load', 'transit', "1==1");
                };
                LoadAndEdit1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'LoadAndEdit1'
                    }),
                    __metadata("design:paramtypes", [CardDataService,
                        StateMachineService])
                ], LoadAndEdit1Handler);
                return LoadAndEdit1Handler;
            }(CommandHandler));

            var Add1Handler = /** @class */ (function (_super) {
                __extends(Add1Handler, _super);
                function Add1Handler(_CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                Add1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('add', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'add', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('add', 'transit', "1==1");
                };
                Add1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Add1'
                    }),
                    __metadata("design:paramtypes", [CardDataService,
                        StateMachineService])
                ], Add1Handler);
                return Add1Handler;
            }(CommandHandler));

            var Edit1Handler = /** @class */ (function (_super) {
                __extends(Edit1Handler, _super);
                function Edit1Handler(_CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                Edit1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('checkBeforeUpdate', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'checkBeforeUpdate', args, context);
                    });
                    this.addTask('update', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'update', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('checkBeforeUpdate', 'update', "1==1");
                    this.addLink('update', 'transit', "1==1");
                };
                Edit1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Edit1'
                    }),
                    __metadata("design:paramtypes", [CardDataService,
                        StateMachineService])
                ], Edit1Handler);
                return Edit1Handler;
            }(CommandHandler));

            var Save1Handler = /** @class */ (function (_super) {
                __extends(Save1Handler, _super);
                function Save1Handler(_ValidationService1, _EndEditService1, _CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._ValidationService1 = _ValidationService1;
                    _this._EndEditService1 = _EndEditService1;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                Save1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('endEdit', function (context) {
                        var args = [];
                        return _this.invoke(_this._EndEditService1, 'endEdit', args, context);
                    });
                    this.addTask('validateCurrentRow', function (context) {
                        var args = [];
                        return _this.invoke(_this._ValidationService1, 'validateCurrentRow', args, context);
                    });
                    this.addTask('save', function (context) {
                        var args = [
                            '{COMMAND~/params/successMsg}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'save', args, context);
                    });
                    this.addTask('update', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'update', args, context);
                    });
                    this.addTask('resetValidation', function (context) {
                        var args = [];
                        return _this.invoke(_this._ValidationService1, 'resetValidation', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('endEdit', 'validateCurrentRow', "1==1");
                    this.addLink('validateCurrentRow', 'save', "1==1");
                    this.addLink('save', 'update', "1==1");
                    this.addLink('update', 'resetValidation', "1==1");
                    this.addLink('resetValidation', 'transit', "1==1");
                };
                Save1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Save1'
                    }),
                    __metadata("design:paramtypes", [ValidationService,
                        EndEditService,
                        CardDataService,
                        StateMachineService])
                ], Save1Handler);
                return Save1Handler;
            }(CommandHandler));

            var Cancel1Handler = /** @class */ (function (_super) {
                __extends(Cancel1Handler, _super);
                function Cancel1Handler(_ValidationService1, _EndEditService1, _PaginationService1, _CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._ValidationService1 = _ValidationService1;
                    _this._EndEditService1 = _EndEditService1;
                    _this._PaginationService1 = _PaginationService1;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                Cancel1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('endEdit', function (context) {
                        var args = [];
                        return _this.invoke(_this._EndEditService1, 'endEdit', args, context);
                    });
                    this.addTask('cancel', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'cancel', args, context);
                    });
                    this.addTask('resetChildrenPagination', function (context) {
                        var args = [];
                        return _this.invoke(_this._PaginationService1, 'resetChildrenPagination', args, context);
                    });
                    this.addTask('reload', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'reload', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addTask('resetValidation', function (context) {
                        var args = [];
                        return _this.invoke(_this._ValidationService1, 'resetValidation', args, context);
                    });
                    this.addLink('endEdit', 'cancel', "1==1");
                    this.addLink('cancel', 'resetChildrenPagination', "1==1");
                    this.addLink('resetChildrenPagination', 'reload', "1==1");
                    this.addLink('reload', 'transit', "1==1");
                    this.addLink('transit', 'resetValidation', "1==1");
                };
                Cancel1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Cancel1'
                    }),
                    __metadata("design:paramtypes", [ValidationService,
                        EndEditService,
                        PaginationService,
                        CardDataService,
                        StateMachineService])
                ], Cancel1Handler);
                return Cancel1Handler;
            }(CommandHandler));

            var ChangeItem1Handler = /** @class */ (function (_super) {
                __extends(ChangeItem1Handler, _super);
                function ChangeItem1Handler(_ChangeItemService1, _PaginationService1, _CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._ChangeItemService1 = _ChangeItemService1;
                    _this._PaginationService1 = _PaginationService1;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                ChangeItem1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('changeItem', function (context) {
                        var args = [
                            '{COMMAND~/params/type}',
                            '{COMMAND~/params/id}',
                            '{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}'
                        ];
                        return _this.invoke(_this._ChangeItemService1, 'changeItem', args, context);
                    });
                    this.addTask('resetChildrenPagination', function (context) {
                        var args = [];
                        return _this.invoke(_this._PaginationService1, 'resetChildrenPagination', args, context);
                    });
                    this.addTask('load', function (context) {
                        var args = [
                            '{COMMAND~/results/changeItem}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'load', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('changeItem', 'resetChildrenPagination', "1==1");
                    this.addLink('resetChildrenPagination', 'load', "1==1");
                    this.addLink('load', 'transit', "1==1");
                };
                ChangeItem1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'ChangeItem1'
                    }),
                    __metadata("design:paramtypes", [ChangeItemService,
                        PaginationService,
                        CardDataService,
                        StateMachineService])
                ], ChangeItem1Handler);
                return ChangeItem1Handler;
            }(CommandHandler));

            var ChangeItem2Handler = /** @class */ (function (_super) {
                __extends(ChangeItem2Handler, _super);
                function ChangeItem2Handler(_ChangeItemService1, _PaginationService1, _CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._ChangeItemService1 = _ChangeItemService1;
                    _this._PaginationService1 = _PaginationService1;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                ChangeItem2Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('changeItem', function (context) {
                        var args = [
                            '{COMMAND~/params/type}',
                            '{COMMAND~/params/id}',
                            '{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}'
                        ];
                        return _this.invoke(_this._ChangeItemService1, 'changeItem', args, context);
                    });
                    this.addTask('resetChildrenPagination', function (context) {
                        var args = [];
                        return _this.invoke(_this._PaginationService1, 'resetChildrenPagination', args, context);
                    });
                    this.addTask('load', function (context) {
                        var args = [
                            '{COMMAND~/results/changeItem}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'load', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('changeItem', 'resetChildrenPagination', "1==1");
                    this.addLink('resetChildrenPagination', 'load', "1==1");
                    this.addLink('load', 'transit', "1==1");
                };
                ChangeItem2Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'ChangeItem2'
                    }),
                    __metadata("design:paramtypes", [ChangeItemService,
                        PaginationService,
                        CardDataService,
                        StateMachineService])
                ], ChangeItem2Handler);
                return ChangeItem2Handler;
            }(CommandHandler));

            var dataImport1Handler = /** @class */ (function (_super) {
                __extends(dataImport1Handler, _super);
                function dataImport1Handler(_DataImportExportService1) {
                    var _this = _super.call(this) || this;
                    _this._DataImportExportService1 = _DataImportExportService1;
                    return _this;
                }
                dataImport1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('CommonDataImport', function (context) {
                        var args = [
                            '{COMMAND~/params/type}',
                            '{COMMAND~/params/ruleID}',
                            '{COMMAND~/params/option}'
                        ];
                        return _this.invoke(_this._DataImportExportService1, 'CommonDataImport', args, context);
                    });
                };
                dataImport1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'dataImport1'
                    }),
                    __metadata("design:paramtypes", [DataImportExportService])
                ], dataImport1Handler);
                return dataImport1Handler;
            }(CommandHandler));

            var dataExport1Handler = /** @class */ (function (_super) {
                __extends(dataExport1Handler, _super);
                function dataExport1Handler(_DataImportExportService1) {
                    var _this = _super.call(this) || this;
                    _this._DataImportExportService1 = _DataImportExportService1;
                    return _this;
                }
                dataExport1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('CommonDataExport', function (context) {
                        var args = [
                            '{COMMAND~/params/type}',
                            '{COMMAND~/params/ruleID}',
                            '{COMMAND~/params/option}'
                        ];
                        return _this.invoke(_this._DataImportExportService1, 'CommonDataExport', args, context);
                    });
                };
                dataExport1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'dataExport1'
                    }),
                    __metadata("design:paramtypes", [DataImportExportService])
                ], dataExport1Handler);
                return dataExport1Handler;
            }(CommandHandler));

            var listDataExport1Handler = /** @class */ (function (_super) {
                __extends(listDataExport1Handler, _super);
                function listDataExport1Handler(_DataImportExportService1) {
                    var _this = _super.call(this) || this;
                    _this._DataImportExportService1 = _DataImportExportService1;
                    return _this;
                }
                listDataExport1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('ListFormExport', function (context) {
                        var args = [
                            '{COMMAND~/params/ruleID}',
                            '{COMMAND~/params/option}'
                        ];
                        return _this.invoke(_this._DataImportExportService1, 'ListFormExport', args, context);
                    });
                };
                listDataExport1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'listDataExport1'
                    }),
                    __metadata("design:paramtypes", [DataImportExportService])
                ], listDataExport1Handler);
                return listDataExport1Handler;
            }(CommandHandler));

            var MaterialDetailFrmMinDateService = /** @class */ (function () {
                function MaterialDetailFrmMinDateService(msgService, frameContext, bindingData) {
                    this.msgService = msgService;
                    this.frameContext = frameContext;
                    this.bindingData = bindingData;
                }
                MaterialDetailFrmMinDateService.prototype.getMinDate = function () {
                    var date = new Date();
                    this.frameContext.appContext.frameContextManager.getFrameContextById("root-component").viewModel.uiState['mindate'] = date;
                };
                MaterialDetailFrmMinDateService = __decorate([
                    Injectable(),
                    __metadata("design:paramtypes", [FormMessageService,
                        FrameContext,
                        BindingData])
                ], MaterialDetailFrmMinDateService);
                return MaterialDetailFrmMinDateService;
            }());

            var rootviewmodelgetMinDate1Handler = /** @class */ (function (_super) {
                __extends(rootviewmodelgetMinDate1Handler, _super);
                function rootviewmodelgetMinDate1Handler(_MaterialDetailFrmMinDateService1) {
                    var _this = _super.call(this) || this;
                    _this._MaterialDetailFrmMinDateService1 = _MaterialDetailFrmMinDateService1;
                    return _this;
                }
                rootviewmodelgetMinDate1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('getMinDate', function (context) {
                        var args = [];
                        return _this.invoke(_this._MaterialDetailFrmMinDateService1, 'getMinDate', args, context);
                    });
                };
                rootviewmodelgetMinDate1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'rootviewmodelgetMinDate1'
                    }),
                    __metadata("design:paramtypes", [MaterialDetailFrmMinDateService])
                ], rootviewmodelgetMinDate1Handler);
                return rootviewmodelgetMinDate1Handler;
            }(CommandHandler));

            var rootviewmodelDataExport1Handler = /** @class */ (function (_super) {
                __extends(rootviewmodelDataExport1Handler, _super);
                function rootviewmodelDataExport1Handler(_DataImportExportService1) {
                    var _this = _super.call(this) || this;
                    _this._DataImportExportService1 = _DataImportExportService1;
                    return _this;
                }
                rootviewmodelDataExport1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('CommonDataExport', function (context) {
                        var args = [
                            '{COMMAND~/params/type}',
                            '{COMMAND~/params/ruleID}',
                            '{COMMAND~/params/option}'
                        ];
                        return _this.invoke(_this._DataImportExportService1, 'CommonDataExport', args, context);
                    });
                };
                rootviewmodelDataExport1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'rootviewmodelDataExport1'
                    }),
                    __metadata("design:paramtypes", [DataImportExportService])
                ], rootviewmodelDataExport1Handler);
                return rootviewmodelDataExport1Handler;
            }(CommandHandler));

            var rootviewmodelDataExport2Handler = /** @class */ (function (_super) {
                __extends(rootviewmodelDataExport2Handler, _super);
                function rootviewmodelDataExport2Handler(_DataImportExportService1) {
                    var _this = _super.call(this) || this;
                    _this._DataImportExportService1 = _DataImportExportService1;
                    return _this;
                }
                rootviewmodelDataExport2Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('CommonDataExport', function (context) {
                        var args = [
                            '{COMMAND~/params/type}',
                            '{COMMAND~/params/ruleID}',
                            '{COMMAND~/params/option}'
                        ];
                        return _this.invoke(_this._DataImportExportService1, 'CommonDataExport', args, context);
                    });
                };
                rootviewmodelDataExport2Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'rootviewmodelDataExport2'
                    }),
                    __metadata("design:paramtypes", [DataImportExportService])
                ], rootviewmodelDataExport2Handler);
                return rootviewmodelDataExport2Handler;
            }(CommandHandler));

            var rootviewmodelDataImport1Handler = /** @class */ (function (_super) {
                __extends(rootviewmodelDataImport1Handler, _super);
                function rootviewmodelDataImport1Handler(_DataImportExportService1) {
                    var _this = _super.call(this) || this;
                    _this._DataImportExportService1 = _DataImportExportService1;
                    return _this;
                }
                rootviewmodelDataImport1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('CommonDataImport', function (context) {
                        var args = [
                            '{COMMAND~/params/type}',
                            '{COMMAND~/params/ruleID}',
                            '{COMMAND~/params/option}'
                        ];
                        return _this.invoke(_this._DataImportExportService1, 'CommonDataImport', args, context);
                    });
                };
                rootviewmodelDataImport1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'rootviewmodelDataImport1'
                    }),
                    __metadata("design:paramtypes", [DataImportExportService])
                ], rootviewmodelDataImport1Handler);
                return rootviewmodelDataImport1Handler;
            }(CommandHandler));

            var RootComponent = /** @class */ (function (_super) {
                __extends(RootComponent, _super);
                function RootComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, frameworkService, applicationParamsService, verifyService, stateMachine, sanitizer, injector) {
                    var _this = _super.call(this, injector) || this;
                    _this.wizardSer = wizardSer;
                    _this.keybindingService = keybindingService;
                    _this.langService = langService;
                    _this.route = route;
                    _this.router = router;
                    _this.rootElement = rootElement;
                    _this.localizationService = localizationService;
                    _this.frmI18nSettingService = frmI18nSettingService;
                    _this.frameworkService = frameworkService;
                    _this.applicationParamsService = applicationParamsService;
                    _this.verifyService = verifyService;
                    _this.stateMachine = stateMachine;
                    _this.sanitizer = sanitizer;
                    _this.injector = injector;
                    _this.cls = 'f-page-root  ';
                    _this.lang = "";
                    _this.size = {};
                    _this.enabledLanguageList = [];
                    _this.pageHeaderToolbarToolbarItems = [{
                            "id": "button-add",
                            "text": _this.langService.transform('button-add', _this.lang, "新增"),
                            "resourceId": "button-add",
                            "isDP": false,
                            "class": "btn-primary",
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }, {
                            "id": "button-edit",
                            "text": _this.langService.transform('button-edit', _this.lang, "编辑"),
                            "resourceId": "button-edit",
                            "isDP": false,
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }, {
                            "id": "button-save",
                            "text": _this.langService.transform('button-save', _this.lang, "保存"),
                            "resourceId": "button-save",
                            "isDP": false,
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }, {
                            "id": "button-cancel",
                            "text": _this.langService.transform('button-cancel', _this.lang, "取消"),
                            "resourceId": "button-cancel",
                            "isDP": false,
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }
                    ];
                    _this.pageHeaderToolbarToolbarItemsStates = new BehaviorSubject({});
                    _this.pageHeaderToolbarToolbarItemsVisibleStates = new BehaviorSubject({});
                    _this.tabsToolbarStates = new BehaviorSubject({});
                    _this.tabsToolbarVisibleStates = new BehaviorSubject({});
                    _this.plandetailsTabToolbar = {
                        position: 'inHead',
                        contents: [
                            {
                                id: 'plandetailsAddButton',
                                disable: !_this.viewModel.stateMachine['canAddDetail'],
                                visible: true,
                                title: _this.langService.transform('plandetailsAddButton', _this.lang, "新增"),
                                click: function () { _this.viewModel.plandetailsComponentViewmodel.rootviewmodelAddItem1(); },
                                appearance: {
                                    "class": "btn btn-secondary f-btn-ml"
                                }
                            },
                            {
                                id: 'plandetailsRemoveButton',
                                disable: !_this.viewModel.stateMachine['canRemoveDetail'],
                                visible: true,
                                title: _this.langService.transform('plandetailsRemoveButton', _this.lang, "删除"),
                                click: function () { _this.viewModel.plandetailsComponentViewmodel.plandetailsRemoveItem1(); },
                                appearance: {
                                    "class": "btn btn-secondary f-btn-ml"
                                }
                            },
                            {
                                id: 'tabToolbarItem-fy36',
                                disable: false,
                                visible: true,
                                title: _this.langService.transform('tabToolbarItem-fy36', _this.lang, "导入"),
                                click: function () { _this.viewModel.rootviewmodelDataImport1(); },
                                appearance: {
                                    "class": "btn btn-secondary f-btn-ml"
                                }
                            },
                            {
                                id: 'tabToolbarItem-56w5',
                                disable: false,
                                visible: true,
                                title: _this.langService.transform('tabToolbarItem-56w5', _this.lang, "勾选导出"),
                                click: function () { _this.viewModel.rootviewmodelDataExport1(); },
                                appearance: {
                                    "class": "btn btn-secondary f-btn-ml"
                                }
                            },
                            {
                                id: 'tabToolbarItem-caan',
                                disable: false,
                                visible: true,
                                title: _this.langService.transform('tabToolbarItem-caan', _this.lang, "全部导出"),
                                click: function () { _this.viewModel.rootviewmodelDataExport2(); },
                                appearance: {
                                    "class": "btn btn-secondary f-btn-ml"
                                }
                            }
                        ]
                    };
                    _this.plandetailstabpage = _this.langService.transform('plandetails-tab-page', _this.lang, "物料需求计划明细");
                    _this.sectionsToolbarStates = new BehaviorSubject({});
                    _this.sectionsToolbarVisibleStates = new BehaviorSubject({});
                    _this.detailSectionToolbar = {
                        position: 'inHead',
                        contents: []
                    };
                    _this.SectiondetailsectionMainTitle = _this.langService.transform('Section/detail-section/mainTitle', _this.lang, "");
                    _this.SectiondetailsectionSubTitle = _this.langService.transform('Section/detail-section/subTitle', _this.lang, "");
                    _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
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
                RootComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.keybindingService) {
                        this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                            _this.keybindingService.register(keyBinding, function () {
                                return _this.viewModel[method]();
                            });
                        });
                    }
                    this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
                        if (verifyInformations.length) {
                            _this.verifyService.createVerify({
                                'parent': _this.rootElement,
                                'verifyList': verifyInformations,
                                'showType': 'all'
                            });
                        }
                        else {
                            _this.verifyService.clear();
                        }
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var pageHeaderToolbarToolbarItemsstates = {
                            'button-add': !_this.viewModel.stateMachine['canAdd'],
                            'button-edit': !_this.viewModel.stateMachine['canEdit'],
                            'button-save': !_this.viewModel.stateMachine['canSave'],
                            'button-cancel': !_this.viewModel.stateMachine['canCancel'],
                        };
                        _this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var pageHeaderToolbarToolbarItemsvisibleStates = {
                            'button-add': true,
                            'button-edit': true,
                            'button-save': true,
                            'button-cancel': true,
                        };
                        _this.pageHeaderToolbarToolbarItemsVisibleStates.next(pageHeaderToolbarToolbarItemsvisibleStates);
                    });
                    this.pageHeaderToolbarToolbarItems.forEach(function (toolbarItem) {
                        var transformText = _this.langService.transform(toolbarItem.resourceId, _this.lang, toolbarItem.text);
                        if (transformText) {
                            toolbarItem.text = transformText;
                        }
                    });
                    this.applicationParamsService.parseParams(this.route, this.frameworkService, this.viewModel, function () {
                        _this.onFormLoad();
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var states = {
                            'plandetailsAddButton': !_this.viewModel.stateMachine['canAddDetail'],
                            'plandetailsRemoveButton': !_this.viewModel.stateMachine['canRemoveDetail'],
                            'tabToolbarItem-fy36': false,
                            'tabToolbarItem-56w5': false,
                            'tabToolbarItem-caan': false,
                        };
                        _this.tabsToolbarStates.next(states);
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var visibleStates = {
                            'plandetailsAddButton': true,
                            'plandetailsRemoveButton': true,
                            'tabToolbarItem-fy36': true,
                            'tabToolbarItem-56w5': true,
                            'tabToolbarItem-caan': true,
                        };
                        _this.tabsToolbarVisibleStates.next(visibleStates);
                    });
                };
                RootComponent.prototype.ngAfterViewInit = function () {
                    this.viewModel.rootviewmodelgetMinDate1();
                };
                RootComponent.prototype.ngOnDestroy = function () {
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
                    this.frameworkService = null;
                    this.applicationParamsService = null;
                    this.verifyService.clear();
                    this.verifyService = null;
                    this.stateMachine = null;
                    this.sanitizer = null;
                    this.injector = null;
                    this.enabledLanguageList = [];
                };
                RootComponent.prototype.handleSizeChange = function (size) {
                    this.size = size;
                };
                RootComponent.prototype.onFormLoad = function () {
                    this.viewModel.Load1();
                };
                RootComponent.prototype.pageHeaderToolbarClickHandler = function (args) {
                    switch (args.id) {
                        case 'button-add':
                            this.viewModel.Add1(args);
                            break;
                        case 'button-edit':
                            this.viewModel.Edit1(args);
                            break;
                        case 'button-save':
                            this.viewModel.Save1(args);
                            break;
                        case 'button-cancel':
                            this.viewModel.Cancel1(args);
                            break;
                    }
                };
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], RootComponent.prototype, "cls", void 0);
                RootComponent = __decorate([
                    Component({
                        selector: 'app-rootcomponent',
                        templateUrl: './rootcomponent.html',
                        styleUrls: ['./rootcomponent.scss'],
                        providers: [
                            FARRIS_DEVKIT_FRAME_PROVIDERS,
                            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                            { provide: FRAME_ID, useValue: 'root-component' },
                            { provide: BindingData, useClass: BindingData },
                            { provide: Repository, useExisting: MaterialPlanRepository },
                            LangService,
                            { provide: NAMESPACE, useValue: '' },
                            { provide: ServerSideToken, useClass: BefLookupRestService },
                            { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                            { provide: Form, useClass: RootViewmodelForm },
                            { provide: StateMachine, useClass: RootViewmodelStateMachine },
                            { provide: UIState, useClass: RootViewmodelUIState },
                            MaterialDetailFrmMinDateService,
                            DIP_DATAIE_SERVICE,
                            FrameworkSessionService,
                            UriService,
                            MaterialPlanProxy,
                            MaterialPlanRepository,
                            { provide: ViewModel, useClass: RootViewmodel },
                            { provide: Declaration, useClass: EventDeclaration },
                            { provide: TranslateToken, useExisting: LangService },
                            VerifyDetailService,
                            { provide: WFSubmiteService, useClass: WFSubmiteService },
                            { provide: CloudprintService, useClass: CloudprintService },
                            { provide: WFFlowchartService, useClass: WFFlowchartService },
                            FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS,
                            FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS,
                            FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS,
                            AppContext,
                            ComponentManagerService,
                            { provide: PARAM_TYPE_TRANSFORM_TOKEN, useValue: false },
                            { provide: FORM_ID, useValue: "98708d9f-8b7c-4539-b546-8b5f2a886381" },
                            { provide: BE_SESSION_HANDLING_STRATEGY_TOKEN, useValue: "SeparatedSession" },
                            { provide: EXCEPTION_HANDLER, useClass: ExceptionHandler },
                            { provide: BACK_END_MESSAGE_HANDLER_TOKEN, useClass: BackEndMessageHandler },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Load1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadAndAdd1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadAndView1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadAndEdit1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Add1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Edit1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Save1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Cancel1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: ChangeItem1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: ChangeItem2Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: dataImport1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: dataExport1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: listDataExport1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelgetMinDate1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelDataExport1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelDataExport2Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelDataImport1Handler, multi: true },
                        ]
                    }),
                    __metadata("design:paramtypes", [WizardService,
                        KeybindingService,
                        LangService,
                        ActivatedRoute,
                        Router,
                        ElementRef,
                        LocalizationService,
                        FrmI18nSettingService,
                        FrameworkService,
                        ApplicationParamService,
                        VerifyDetailService,
                        StateMachine,
                        DomSanitizer,
                        Injector])
                ], RootComponent);
                return RootComponent;
            }(FrameComponent));

            var routes = [
                {
                    path: '',
                    component: RootComponent,
                    children: [],
                    resolve: {
                        'translate': TranslateResolveService
                    }
                }
            ];
            var MaterialPlanCardRoutingModule = /** @class */ (function () {
                function MaterialPlanCardRoutingModule() {
                }
                MaterialPlanCardRoutingModule = __decorate([
                    NgModule({
                        imports: [
                            RouterModule.forChild(routes)
                        ],
                        exports: [
                            RouterModule
                        ]
                    })
                ], MaterialPlanCardRoutingModule);
                return MaterialPlanCardRoutingModule;
            }());

            var BasicFormViewmodel = /** @class */ (function (_super) {
                __extends(BasicFormViewmodel, _super);
                function BasicFormViewmodel() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.bindingPath = '/';
                    _this.dom = {};
                    return _this;
                }
                BasicFormViewmodel = __decorate([
                    Injectable()
                ], BasicFormViewmodel);
                return BasicFormViewmodel;
            }(ViewModel));

            var BasicFormViewmodelForm = /** @class */ (function (_super) {
                __extends(BasicFormViewmodelForm, _super);
                function BasicFormViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgFormControl({
                        id: 'applicant_Applicant_Name_d4373c28_6dic',
                        name: "{{applicant_Applicant_Name_d4373c28_6dic}}",
                        binding: 'applicant.applicant_Name',
                        updateOn: 'blur',
                        defaultI18nValue: '制单人',
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "applicant_Applicant_Name", void 0);
                __decorate([
                    NgFormControl({
                        id: 'deliveryDate_7be8a928_jelq',
                        name: "{{deliveryDate_7be8a928_jelq}}",
                        binding: 'deliveryDate',
                        updateOn: 'blur',
                        valueConverter: new DateConverter('yyyy-MM-dd'),
                        defaultI18nValue: '交货日期',
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "deliveryDate", void 0);
                __decorate([
                    NgFormControl({
                        id: 'purchaseDept_PurchaseDept_name_8d6e8922_yvzr',
                        name: "{{purchaseDept_PurchaseDept_name_8d6e8922_yvzr}}",
                        binding: 'purchaseDept.purchaseDept_name',
                        updateOn: 'blur',
                        defaultI18nValue: '采购部门',
                        validRules: [
                            {
                                type: 'required',
                                constraints: [true],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "purchaseDept_PurchaseDept_name", void 0);
                __decorate([
                    NgFormControl({
                        id: 'planCode_7b926633_5dke',
                        name: "{{planCode_7b926633_5dke}}",
                        binding: 'planCode',
                        updateOn: 'blur',
                        defaultI18nValue: '计划编号',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "planCode", void 0);
                __decorate([
                    NgFormControl({
                        id: 'planName_fbe5d590_15n2',
                        name: "{{planName_fbe5d590_15n2}}",
                        binding: 'planName',
                        updateOn: 'blur',
                        defaultI18nValue: '计划名称',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "planName", void 0);
                __decorate([
                    NgFormControl({
                        id: 'isPurchaseOrder_51920336_9xj5',
                        name: "{{isPurchaseOrder_51920336_9xj5}}",
                        binding: 'isPurchaseOrder',
                        updateOn: 'change',
                        defaultI18nValue: '是否已生成采购订单',
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "isPurchaseOrder", void 0);
                __decorate([
                    NgFormControl({
                        id: 'totalPrice_1c1f8bdb_p30m',
                        name: "{{totalPrice_1c1f8bdb_p30m}}",
                        binding: 'totalPrice',
                        updateOn: 'blur',
                        defaultI18nValue: '物料总价',
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "totalPrice", void 0);
                __decorate([
                    NgFormControl({
                        id: 'purchaser_Purchaser_Name_55f1e399_hz5j',
                        name: "{{purchaser_Purchaser_Name_55f1e399_hz5j}}",
                        binding: 'purchaser.purchaser_Name',
                        updateOn: 'blur',
                        defaultI18nValue: '采购员',
                        validRules: [
                            {
                                type: 'required',
                                constraints: [true],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "purchaser_Purchaser_Name", void 0);
                BasicFormViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '物料需求计划',
                        enableValidate: true
                    }),
                    Injectable()
                ], BasicFormViewmodelForm);
                return BasicFormViewmodelForm;
            }(Form));

            var BasicFormViewmodelUIState = /** @class */ (function (_super) {
                __extends(BasicFormViewmodelUIState, _super);
                function BasicFormViewmodelUIState() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                BasicFormViewmodelUIState = __decorate([
                    Injectable()
                ], BasicFormViewmodelUIState);
                return BasicFormViewmodelUIState;
            }(UIState));

            var BasicFormComponent = /** @class */ (function (_super) {
                __extends(BasicFormComponent, _super);
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
                    _this.SectionbasicformsectionMainTitle = _this.langService.transform('Section/basic-form-section/mainTitle', _this.lang, "基本信息");
                    _this.SectionbasicformsectionSubTitle = _this.langService.transform('Section/basic-form-section/subTitle', _this.lang, "");
                    _this.LookupEditapplicantApplicantNamed4373c286dicDialogTitle = _this.langService.transform('LookupEdit/applicant_Applicant_Name_d4373c28_6dic/dialogTitle', _this.lang, "");
                    _this.applicant_Applicant_Name_d4373c28_6dic_PlaceHolder = _this.langService.transform('LookupEdit/applicant_Applicant_Name_d4373c28_6dic/placeHolder', _this.lang, "");
                    _this.applicant_Applicant_Name_d4373c28_6dicQuickSelect = {
                        "enable": false,
                        "showItemsCount": 10,
                        "showMore": true
                    };
                    _this.LookupEditpurchaseDeptPurchaseDeptname8d6e8922yvzrDialogTitle = _this.langService.transform('LookupEdit/purchaseDept_PurchaseDept_name_8d6e8922_yvzr/dialogTitle', _this.lang, "");
                    _this.purchaseDept_PurchaseDept_name_8d6e8922_yvzr_PlaceHolder = _this.langService.transform('LookupEdit/purchaseDept_PurchaseDept_name_8d6e8922_yvzr/placeHolder', _this.lang, "");
                    _this.purchaseDept_PurchaseDept_name_8d6e8922_yvzrQuickSelect = {
                        "enable": false,
                        "showItemsCount": 10,
                        "showMore": true
                    };
                    _this.LookupEditpurchaserPurchaserName55f1e399hz5jDialogTitle = _this.langService.transform('LookupEdit/purchaser_Purchaser_Name_55f1e399_hz5j/dialogTitle', _this.lang, "");
                    _this.purchaser_Purchaser_Name_55f1e399_hz5j_PlaceHolder = _this.langService.transform('LookupEdit/purchaser_Purchaser_Name_55f1e399_hz5j/placeHolder', _this.lang, "");
                    _this.purchaser_Purchaser_Name_55f1e399_hz5jQuickSelect = {
                        "enable": false,
                        "showItemsCount": 10,
                        "showMore": true
                    };
                    _this.totalPrice_1c1f8bdb_p30m_PlaceHolder = _this.langService.transform('NumericBox/totalPrice_1c1f8bdb_p30m/placeHolder', _this.lang, "");
                    _this.totalPrice1c1f8bdbP30mTextOptions = {
                        "type": "number",
                        "useThousands": true,
                        "precision": 2,
                    };
                    _this.deliveryDate_7be8a928_jelq_PlaceHolder = _this.langService.transform('DateBox/deliveryDate_7be8a928_jelq/placeHolder', _this.lang, "");
                    _this.planCode_7b926633_5dke_PlaceHolder = _this.langService.transform('TextBox/planCode_7b926633_5dke/placeHolder', _this.lang, "");
                    _this.planName_fbe5d590_15n2_PlaceHolder = _this.langService.transform('TextBox/planName_fbe5d590_15n2/placeHolder', _this.lang, "");
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
                __decorate([
                    ViewChild('applicant_Applicant_Name_d4373c28_6dic'),
                    __metadata("design:type", LookupGridComponent)
                ], BasicFormComponent.prototype, "applicant_Applicant_Name_d4373c28_6dic", void 0);
                __decorate([
                    ViewChild('purchaseDept_PurchaseDept_name_8d6e8922_yvzr'),
                    __metadata("design:type", LookupGridComponent)
                ], BasicFormComponent.prototype, "purchaseDept_PurchaseDept_name_8d6e8922_yvzr", void 0);
                __decorate([
                    ViewChild('purchaser_Purchaser_Name_55f1e399_hz5j'),
                    __metadata("design:type", LookupGridComponent)
                ], BasicFormComponent.prototype, "purchaser_Purchaser_Name_55f1e399_hz5j", void 0);
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], BasicFormComponent.prototype, "cls", void 0);
                BasicFormComponent = __decorate([
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
                    __metadata("design:paramtypes", [WizardService,
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

            var ɵ0$2 = { type: 'string' };
            var PlandetailsComponentViewmodel = /** @class */ (function (_super) {
                __extends(PlandetailsComponentViewmodel, _super);
                function PlandetailsComponentViewmodel() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.bindingPath = '/planDetailss';
                    _this.dom = {
                        "dataGrid_plandetails": {
                            "type": "DataGrid",
                            "resourceId": "dataGrid_plandetails",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "dataGrid_plandetails",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "fields": [
                                {
                                    "type": "GridField",
                                    "resourceId": "materialId_MaterialId_MaterialCode_08ca00c7_ao7g",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "materialId_MaterialId_MaterialCode_08ca00c7_ao7g",
                                    "size": {
                                        "width": 120
                                    },
                                    "readonly": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": false
                                    },
                                    "binding": {
                                        "type": "Form",
                                        "path": "materialId_MaterialId_MaterialCode",
                                        "fullPath": "MaterialId.MaterialId_MaterialCode",
                                        "isExpression": false,
                                        "value": "materialId_MaterialId_MaterialCode"
                                    },
                                    "dataField": "materialId.materialId_MaterialCode",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "物料编号",
                                    "editor": {
                                        "type": "LookupEdit",
                                        "isTextArea": true,
                                        "resourceId": "materialId_MaterialId_MaterialCode_08ca00c7_bba6",
                                        "defaultI18nValue": "文本",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "materialId_MaterialId_MaterialCode_08ca00c7_bba6",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "materialId_MaterialId_MaterialCode",
                                            "fullPath": "MaterialId.MaterialId_MaterialCode",
                                            "isExpression": false,
                                            "value": "materialId_MaterialId_MaterialCode"
                                        },
                                        "disable": false,
                                        "dataSource": {
                                            "uri": "PlanDetails.materialId_MaterialId_MaterialCode",
                                            "displayName": "物料管理帮助",
                                            "idField": "id",
                                            "type": "ViewObject"
                                        },
                                        "valueField": "id",
                                        "textField": "materialCode",
                                        "multiSelect": false,
                                        "pageSize": 20,
                                        "mapFields": {
                                            "id": "materialId.materialId,materialId.materialId_ID",
                                            "materialCode": "materialId.materialId_MaterialCode",
                                            "materialName": "materialId.materialId_MaterialName",
                                            "materialCat.materialCat_CatName": "materialId.materialId_MaterialCat_CatName",
                                            "evePrice": "materialId.materialId_EvePrice"
                                        },
                                        "displayType": "List",
                                        "enableExtendLoadMethod": true,
                                        "editable": false,
                                        "noSearch": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "useTip": false,
                                        "useFavorite": true,
                                        "enableToSelect": false,
                                        "isRecordSize": false,
                                        "expandLevel": -1,
                                        "enableFullTree": false,
                                        "context": {
                                            "enableExtendLoadMethod": true
                                        },
                                        "loadTreeDataType": "default",
                                        "enableClear": true,
                                        "enableCascade": false
                                    },
                                    "draggable": false,
                                    "frozen": "none",
                                    "sortable": true,
                                    "resizeable": true,
                                    "aggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "groupAggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "linkedLabelEnabled": false,
                                    "formatter": {
                                        "type": "none"
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "materialId_MaterialId_MaterialName_0d109a4f_7r0m",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "materialId_MaterialId_MaterialName_0d109a4f_7r0m",
                                    "size": {
                                        "width": 120
                                    },
                                    "readonly": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "binding": {
                                        "type": "Form",
                                        "path": "materialId_MaterialId_MaterialName",
                                        "fullPath": "MaterialId.MaterialId_MaterialName",
                                        "isExpression": false,
                                        "value": "materialId_MaterialId_MaterialName"
                                    },
                                    "dataField": "materialId.materialId_MaterialName",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "物料名称",
                                    "editor": {
                                        "type": "TextBox",
                                        "isTextArea": true,
                                        "resourceId": "materialId_MaterialId_MaterialName_0d109a4f_c6sl",
                                        "defaultI18nValue": "文本",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "materialId_MaterialId_MaterialName_0d109a4f_c6sl",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "materialId_MaterialId_MaterialName",
                                            "isExpression": false,
                                            "value": "materialId_MaterialId_MaterialName"
                                        },
                                        "disable": false,
                                        "maxLength": 36,
                                        "isPassword": false,
                                        "enableViewPassword": false
                                    },
                                    "draggable": false,
                                    "frozen": "none",
                                    "sortable": true,
                                    "resizeable": true,
                                    "aggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "groupAggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "linkedLabelEnabled": false,
                                    "formatter": {
                                        "type": "none"
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "materialId_MaterialId_EvePrice_998dde09_udfc",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "materialId_MaterialId_EvePrice_998dde09_udfc",
                                    "size": {
                                        "width": 120
                                    },
                                    "readonly": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "binding": {
                                        "type": "Form",
                                        "path": "materialId_MaterialId_EvePrice",
                                        "fullPath": "MaterialId.MaterialId_EvePrice",
                                        "isExpression": false,
                                        "value": "materialId_MaterialId_EvePrice"
                                    },
                                    "dataField": "materialId.materialId_EvePrice",
                                    "dataType": "number",
                                    "multiLanguage": false,
                                    "caption": "市场价格",
                                    "editor": {
                                        "type": "FarrisNumberSpinner",
                                        "isTextArea": true,
                                        "resourceId": "materialId_MaterialId_EvePrice_998dde09_znlr",
                                        "defaultI18nValue": "数值框",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "materialId_MaterialId_EvePrice_998dde09_znlr",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "materialId_MaterialId_EvePrice",
                                            "isExpression": false,
                                            "value": "materialId_MaterialId_EvePrice"
                                        },
                                        "disable": false,
                                        "step": 1,
                                        "useThousands": true,
                                        "textAlign": "left",
                                        "precision": 2
                                    },
                                    "draggable": false,
                                    "frozen": "none",
                                    "sortable": true,
                                    "resizeable": true,
                                    "aggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "groupAggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "linkedLabelEnabled": false,
                                    "formatter": {
                                        "type": "number",
                                        "precision": 2,
                                        "thousand": ",",
                                        "decimal": ".",
                                        "prefix": "￥",
                                        "suffix": ""
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "materialId_MaterialId_MaterialCat_CatName_e6f48613_344b",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "materialId_MaterialId_MaterialCat_CatName_e6f48613_344b",
                                    "size": {
                                        "width": 120
                                    },
                                    "readonly": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "binding": {
                                        "type": "Form",
                                        "path": "materialId_MaterialId_MaterialCat_CatName",
                                        "fullPath": "MaterialId.MaterialId_MaterialCat_CatName",
                                        "isExpression": false,
                                        "value": "materialId_MaterialId_MaterialCat_CatName"
                                    },
                                    "dataField": "materialId.materialId_MaterialCat_CatName",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "物料类别",
                                    "editor": {
                                        "type": "TextBox",
                                        "isTextArea": true,
                                        "resourceId": "materialId_MaterialId_MaterialCat_CatName_e6f48613_vwbv",
                                        "defaultI18nValue": "文本",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "materialId_MaterialId_MaterialCat_CatName_e6f48613_vwbv",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "materialId_MaterialId_MaterialCat_CatName",
                                            "isExpression": false,
                                            "value": "materialId_MaterialId_MaterialCat_CatName"
                                        },
                                        "disable": false,
                                        "maxLength": 36,
                                        "isPassword": false,
                                        "enableViewPassword": false
                                    },
                                    "draggable": false,
                                    "frozen": "none",
                                    "sortable": true,
                                    "resizeable": true,
                                    "aggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "groupAggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "linkedLabelEnabled": false,
                                    "formatter": {
                                        "type": "none"
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "materiaAmount_143b71b6_wiiv",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "materiaAmount_143b71b6_wiiv",
                                    "size": {
                                        "width": 120
                                    },
                                    "readonly": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": false
                                    },
                                    "binding": {
                                        "type": "Form",
                                        "path": "materialAmount",
                                        "fullPath": "MaterialAmount",
                                        "isExpression": false,
                                        "value": "materialAmount"
                                    },
                                    "dataField": "materialAmount",
                                    "dataType": "number",
                                    "multiLanguage": false,
                                    "caption": "物料数量",
                                    "editor": {
                                        "type": "FarrisNumberSpinner",
                                        "isTextArea": true,
                                        "resourceId": "materiaAmount_143b71b6_5utc",
                                        "defaultI18nValue": "数值框",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "materiaAmount_143b71b6_5utc",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "materialAmount",
                                            "fullPath": "MaterialAmount",
                                            "isExpression": false,
                                            "value": "materialAmount"
                                        },
                                        "disable": false,
                                        "step": 1,
                                        "useThousands": true,
                                        "textAlign": "left",
                                        "precision": 0
                                    },
                                    "draggable": false,
                                    "frozen": "none",
                                    "sortable": true,
                                    "resizeable": true,
                                    "aggregate": {
                                        "type": "sum",
                                        "formatter": {
                                            "precision": 0,
                                            "thousand": ",",
                                            "prefix": "",
                                            "suffix": "件",
                                            "decimal": ".",
                                            "type": "number"
                                        },
                                        "align": "center",
                                        "styler": "(value, rowData, rowIndex) => {\r\n    return {\r\n        style: {\r\n            color: 'red',\r\n            fontWeight: 800\r\n        }\r\n    };\r\n}"
                                    },
                                    "groupAggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "linkedLabelEnabled": false,
                                    "updateOn": "blur",
                                    "formatter": {
                                        "type": "number",
                                        "precision": 0,
                                        "thousand": ",",
                                        "decimal": "."
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "supplier_Supplier_SupplierCode_1d93ad3d_alr2",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "supplier_Supplier_SupplierCode_1d93ad3d_alr2",
                                    "size": {
                                        "width": 120
                                    },
                                    "readonly": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": false
                                    },
                                    "binding": {
                                        "type": "Form",
                                        "path": "supplier_Supplier_SupplierCode",
                                        "fullPath": "Supplier.Supplier_SupplierCode",
                                        "isExpression": false,
                                        "value": "supplier_Supplier_SupplierCode"
                                    },
                                    "dataField": "supplier.supplier_SupplierCode",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "供应商编号",
                                    "editor": {
                                        "type": "LookupEdit",
                                        "isTextArea": true,
                                        "resourceId": "supplier_Supplier_SupplierCode_1d93ad3d_6lav",
                                        "defaultI18nValue": "文本",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "supplier_Supplier_SupplierCode_1d93ad3d_6lav",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "supplier_Supplier_SupplierCode",
                                            "fullPath": "Supplier.Supplier_SupplierCode",
                                            "isExpression": false,
                                            "value": "supplier_Supplier_SupplierCode"
                                        },
                                        "disable": false,
                                        "dataSource": {
                                            "uri": "PlanDetails.supplier_Supplier_SupplierCode",
                                            "displayName": "供应商管理帮助",
                                            "idField": "id",
                                            "type": "ViewObject"
                                        },
                                        "valueField": "id",
                                        "textField": "supplierCode",
                                        "multiSelect": false,
                                        "pageSize": 20,
                                        "mapFields": {
                                            "id": "supplier.supplier,supplier.supplier_ID",
                                            "supplierName": "supplier.supplier_SupplierName",
                                            "supplierCode": "supplier.supplier_SupplierCode",
                                            "contactsEmail": "supplier.supplier_ContactsEmail",
                                            "contactsAddress": "supplier.supplier_ContactsAddress"
                                        },
                                        "displayType": "List",
                                        "enableExtendLoadMethod": true,
                                        "editable": false,
                                        "noSearch": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "useTip": false,
                                        "useFavorite": true,
                                        "enableToSelect": true,
                                        "isRecordSize": false,
                                        "expandLevel": -1,
                                        "enableFullTree": false,
                                        "context": {
                                            "enableExtendLoadMethod": true
                                        },
                                        "loadTreeDataType": "default",
                                        "enableClear": true,
                                        "enableCascade": false
                                    },
                                    "draggable": false,
                                    "frozen": "none",
                                    "sortable": true,
                                    "resizeable": true,
                                    "aggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "groupAggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "linkedLabelEnabled": false,
                                    "formatter": {
                                        "type": "none"
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "supplier_Supplier_SupplierName_a4a0e5d0_ju44",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "supplier_Supplier_SupplierName_a4a0e5d0_ju44",
                                    "size": {
                                        "width": 120
                                    },
                                    "readonly": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "binding": {
                                        "type": "Form",
                                        "path": "supplier_Supplier_SupplierName",
                                        "fullPath": "Supplier.Supplier_SupplierName",
                                        "isExpression": false,
                                        "value": "supplier_Supplier_SupplierName"
                                    },
                                    "dataField": "supplier.supplier_SupplierName",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "供应商名称",
                                    "editor": {
                                        "type": "TextBox",
                                        "isTextArea": true,
                                        "resourceId": "supplier_Supplier_SupplierName_a4a0e5d0_2by7",
                                        "defaultI18nValue": "文本",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "supplier_Supplier_SupplierName_a4a0e5d0_2by7",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "supplier_Supplier_SupplierName",
                                            "isExpression": false,
                                            "value": "supplier_Supplier_SupplierName"
                                        },
                                        "disable": false,
                                        "maxLength": 36,
                                        "isPassword": false,
                                        "enableViewPassword": false
                                    },
                                    "draggable": false,
                                    "frozen": "none",
                                    "sortable": true,
                                    "resizeable": true,
                                    "aggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "groupAggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "linkedLabelEnabled": false,
                                    "formatter": {
                                        "type": "none"
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "supplier_Supplier_ContactsEmail_9f031afb_8tfe",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "supplier_Supplier_ContactsEmail_9f031afb_8tfe",
                                    "size": {
                                        "width": 120
                                    },
                                    "readonly": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": false
                                    },
                                    "binding": {
                                        "type": "Form",
                                        "path": "supplier_Supplier_ContactsEmail",
                                        "fullPath": "Supplier.Supplier_ContactsEmail",
                                        "isExpression": false,
                                        "value": "supplier_Supplier_ContactsEmail"
                                    },
                                    "dataField": "supplier.supplier_ContactsEmail",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "联系人邮箱",
                                    "editor": {
                                        "type": "TextBox",
                                        "isTextArea": true,
                                        "resourceId": "supplier_Supplier_ContactsEmail_9f031afb_4z9p",
                                        "defaultI18nValue": "文本",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "supplier_Supplier_ContactsEmail_9f031afb_4z9p",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "supplier_Supplier_ContactsEmail",
                                            "isExpression": false,
                                            "value": "supplier_Supplier_ContactsEmail"
                                        },
                                        "disable": false,
                                        "maxLength": 100,
                                        "isPassword": false,
                                        "enableViewPassword": false
                                    },
                                    "draggable": false,
                                    "frozen": "none",
                                    "sortable": true,
                                    "resizeable": true,
                                    "aggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "groupAggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "linkedLabelEnabled": false,
                                    "formatter": {
                                        "type": "none"
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "supplier_Supplier_ContactsAddress_27ddf90a_w9yq",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "supplier_Supplier_ContactsAddress_27ddf90a_w9yq",
                                    "size": {
                                        "width": 120
                                    },
                                    "readonly": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": false
                                    },
                                    "binding": {
                                        "type": "Form",
                                        "path": "supplier_Supplier_ContactsAddress",
                                        "fullPath": "Supplier.Supplier_ContactsAddress",
                                        "isExpression": false,
                                        "value": "supplier_Supplier_ContactsAddress"
                                    },
                                    "dataField": "supplier.supplier_ContactsAddress",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "办公地址",
                                    "editor": {
                                        "type": "TextBox",
                                        "isTextArea": true,
                                        "resourceId": "supplier_Supplier_ContactsAddress_27ddf90a_zycw",
                                        "defaultI18nValue": "文本",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "supplier_Supplier_ContactsAddress_27ddf90a_zycw",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "supplier_Supplier_ContactsAddress",
                                            "isExpression": false,
                                            "value": "supplier_Supplier_ContactsAddress"
                                        },
                                        "disable": false,
                                        "maxLength": 100,
                                        "isPassword": false,
                                        "enableViewPassword": false
                                    },
                                    "draggable": false,
                                    "frozen": "none",
                                    "sortable": true,
                                    "resizeable": true,
                                    "aggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "groupAggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "linkedLabelEnabled": false,
                                    "formatter": {
                                        "type": "none"
                                    }
                                }
                            ],
                            "multiSelect": true,
                            "editable": "viewModel.stateMachine['editable']",
                            "showLineNumber": false,
                            "lineNumberTitle": "#",
                            "groupTotalText": "Total",
                            "filterable": false,
                            "groupable": false,
                            "rowClass": ""
                        }
                    };
                    return _this;
                }
                PlandetailsComponentViewmodel.prototype.plandetailsAddItem1 = function (commandParam) { return; };
                PlandetailsComponentViewmodel.prototype.plandetailsRemoveItem1 = function (commandParam) { return; };
                PlandetailsComponentViewmodel.prototype.rootviewmodelInsert1 = function (commandParam) { return; };
                PlandetailsComponentViewmodel.prototype.rootviewmodelAddItem1 = function (commandParam) { return; };
                __decorate([
                    NgCommand({
                        name: 'plandetailsAddItem1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], PlandetailsComponentViewmodel.prototype, "plandetailsAddItem1", null);
                __decorate([
                    NgCommand({
                        name: 'plandetailsRemoveItem1',
                        params: {
                            id: '{DATA~/#{plandetails-component}/planDetailss/id}'
                        },
                        paramDescriptions: {
                            id: ɵ0$2
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], PlandetailsComponentViewmodel.prototype, "plandetailsRemoveItem1", null);
                __decorate([
                    NgCommand({
                        name: 'rootviewmodelInsert1',
                        params: {
                            position: '1'
                        },
                        paramDescriptions: {
                            position: { type: 'int' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], PlandetailsComponentViewmodel.prototype, "rootviewmodelInsert1", null);
                __decorate([
                    NgCommand({
                        name: 'rootviewmodelAddItem1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], PlandetailsComponentViewmodel.prototype, "rootviewmodelAddItem1", null);
                PlandetailsComponentViewmodel = __decorate([
                    Injectable()
                ], PlandetailsComponentViewmodel);
                return PlandetailsComponentViewmodel;
            }(ViewModel));

            var PlandetailsComponentViewmodelForm = /** @class */ (function (_super) {
                __extends(PlandetailsComponentViewmodelForm, _super);
                function PlandetailsComponentViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgFormControl({
                        id: 'materialId.materialId_MaterialName',
                        name: "{{materialId_MaterialId_MaterialName_0d109a4f_7r0m}}",
                        binding: 'materialId.materialId_MaterialName',
                        updateOn: 'blur',
                        defaultI18nValue: '物料名称',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], PlandetailsComponentViewmodelForm.prototype, "materialId_MaterialId_MaterialName", void 0);
                __decorate([
                    NgFormControl({
                        id: 'materialId.materialId_MaterialCode',
                        name: "{{materialId_MaterialId_MaterialCode_08ca00c7_ao7g}}",
                        binding: 'materialId.materialId_MaterialCode',
                        updateOn: 'blur',
                        defaultI18nValue: '物料编号',
                        validRules: [
                            {
                                type: 'required',
                                constraints: [true],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], PlandetailsComponentViewmodelForm.prototype, "materialId_MaterialId_MaterialCode", void 0);
                __decorate([
                    NgFormControl({
                        id: 'materialId.materialId_EvePrice',
                        name: "{{materialId_MaterialId_EvePrice_998dde09_udfc}}",
                        binding: 'materialId.materialId_EvePrice',
                        updateOn: 'blur',
                        defaultI18nValue: '市场价格',
                        validRules: [
                            {
                                type: 'maxValue',
                                constraints: [1.7976931348623157e+308],
                            },
                            {
                                type: 'minValue',
                                constraints: [-1.7976931348623157e+308],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], PlandetailsComponentViewmodelForm.prototype, "materialId_MaterialId_EvePrice", void 0);
                __decorate([
                    NgFormControl({
                        id: 'materialId.materialId_MaterialCat_CatName',
                        name: "{{materialId_MaterialId_MaterialCat_CatName_e6f48613_344b}}",
                        binding: 'materialId.materialId_MaterialCat_CatName',
                        updateOn: 'blur',
                        defaultI18nValue: '物料类别',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], PlandetailsComponentViewmodelForm.prototype, "materialId_MaterialId_MaterialCat_CatName", void 0);
                __decorate([
                    NgFormControl({
                        id: 'materialAmount',
                        name: "{{materiaAmount_143b71b6_wiiv}}",
                        binding: 'materialAmount',
                        updateOn: 'blur',
                        defaultI18nValue: '物料数量',
                        validRules: [
                            {
                                type: 'maxValue',
                                constraints: [1.7976931348623157e+308],
                            },
                            {
                                type: 'minValue',
                                constraints: [-1.7976931348623157e+308],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], PlandetailsComponentViewmodelForm.prototype, "materialAmount", void 0);
                __decorate([
                    NgFormControl({
                        id: 'supplier.supplier_SupplierName',
                        name: "{{supplier_Supplier_SupplierName_a4a0e5d0_ju44}}",
                        binding: 'supplier.supplier_SupplierName',
                        updateOn: 'blur',
                        defaultI18nValue: '供应商名称',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], PlandetailsComponentViewmodelForm.prototype, "supplier_Supplier_SupplierName", void 0);
                __decorate([
                    NgFormControl({
                        id: 'supplier.supplier_SupplierCode',
                        name: "{{supplier_Supplier_SupplierCode_1d93ad3d_alr2}}",
                        binding: 'supplier.supplier_SupplierCode',
                        updateOn: 'blur',
                        defaultI18nValue: '供应商编号',
                        validRules: [
                            {
                                type: 'required',
                                constraints: [true],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], PlandetailsComponentViewmodelForm.prototype, "supplier_Supplier_SupplierCode", void 0);
                __decorate([
                    NgFormControl({
                        id: 'supplier.supplier_ContactsEmail',
                        name: "{{supplier_Supplier_ContactsEmail_9f031afb_8tfe}}",
                        binding: 'supplier.supplier_ContactsEmail',
                        updateOn: 'blur',
                        defaultI18nValue: '联系人邮箱',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], PlandetailsComponentViewmodelForm.prototype, "supplier_Supplier_ContactsEmail", void 0);
                __decorate([
                    NgFormControl({
                        id: 'supplier.supplier_ContactsAddress',
                        name: "{{supplier_Supplier_ContactsAddress_27ddf90a_w9yq}}",
                        binding: 'supplier.supplier_ContactsAddress',
                        updateOn: 'blur',
                        defaultI18nValue: '办公地址',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], PlandetailsComponentViewmodelForm.prototype, "supplier_Supplier_ContactsAddress", void 0);
                PlandetailsComponentViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '物料需求计划明细',
                        enableValidate: true
                    }),
                    Injectable()
                ], PlandetailsComponentViewmodelForm);
                return PlandetailsComponentViewmodelForm;
            }(Form));

            var PlandetailsComponentViewmodelUIState = /** @class */ (function (_super) {
                __extends(PlandetailsComponentViewmodelUIState, _super);
                function PlandetailsComponentViewmodelUIState() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                PlandetailsComponentViewmodelUIState = __decorate([
                    Injectable()
                ], PlandetailsComponentViewmodelUIState);
                return PlandetailsComponentViewmodelUIState;
            }(UIState));

            var plandetailsAddItem1Handler = /** @class */ (function (_super) {
                __extends(plandetailsAddItem1Handler, _super);
                function plandetailsAddItem1Handler(_SubListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._SubListDataService1 = _SubListDataService1;
                    return _this;
                }
                plandetailsAddItem1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('add', function (context) {
                        var args = [];
                        return _this.invoke(_this._SubListDataService1, 'add', args, context);
                    });
                };
                plandetailsAddItem1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'plandetailsAddItem1'
                    }),
                    __metadata("design:paramtypes", [SubListDataService])
                ], plandetailsAddItem1Handler);
                return plandetailsAddItem1Handler;
            }(CommandHandler));

            var plandetailsRemoveItem1Handler = /** @class */ (function (_super) {
                __extends(plandetailsRemoveItem1Handler, _super);
                function plandetailsRemoveItem1Handler(_DataGridService1, _SubListDataService1, _ListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._DataGridService1 = _DataGridService1;
                    _this._SubListDataService1 = _SubListDataService1;
                    _this._ListDataService1 = _ListDataService1;
                    return _this;
                }
                plandetailsRemoveItem1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('remove', function (context) {
                        var args = [
                            '{COMMAND~/params/id}',
                            '{COMMAND~/params/successMsg}'
                        ];
                        return _this.invoke(_this._SubListDataService1, 'remove', args, context);
                    });
                    this.addTask('uncheckDeletedRows', function (context) {
                        var args = [
                            '{COMMAND~/params/id}'
                        ];
                        return _this.invoke(_this._DataGridService1, 'uncheckDeletedRows', args, context);
                    });
                    this.addTask('queryChild', function (context) {
                        var args = [
                            '{COMMAND~/params/queryChild_过滤}',
                            '{COMMAND~/params/queryChild_排序}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'queryChild', args, context);
                    });
                    this.addLink('remove', 'uncheckDeletedRows', "1==1");
                    this.addLink('uncheckDeletedRows', 'queryChild', "1==1");
                };
                plandetailsRemoveItem1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'plandetailsRemoveItem1'
                    }),
                    __metadata("design:paramtypes", [DataGridService,
                        SubListDataService,
                        ListDataService])
                ], plandetailsRemoveItem1Handler);
                return plandetailsRemoveItem1Handler;
            }(CommandHandler));

            var rootviewmodelInsert1Handler = /** @class */ (function (_super) {
                __extends(rootviewmodelInsert1Handler, _super);
                function rootviewmodelInsert1Handler(_SubListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._SubListDataService1 = _SubListDataService1;
                    return _this;
                }
                rootviewmodelInsert1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('insert', function (context) {
                        var args = [
                            '{COMMAND~/params/position}'
                        ];
                        return _this.invoke(_this._SubListDataService1, 'insert', args, context);
                    });
                };
                rootviewmodelInsert1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'rootviewmodelInsert1'
                    }),
                    __metadata("design:paramtypes", [SubListDataService])
                ], rootviewmodelInsert1Handler);
                return rootviewmodelInsert1Handler;
            }(CommandHandler));

            var rootviewmodelAddItem1Handler = /** @class */ (function (_super) {
                __extends(rootviewmodelAddItem1Handler, _super);
                function rootviewmodelAddItem1Handler(_SubListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._SubListDataService1 = _SubListDataService1;
                    return _this;
                }
                rootviewmodelAddItem1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('add', function (context) {
                        var args = [];
                        return _this.invoke(_this._SubListDataService1, 'add', args, context);
                    });
                };
                rootviewmodelAddItem1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'rootviewmodelAddItem1'
                    }),
                    __metadata("design:paramtypes", [SubListDataService])
                ], rootviewmodelAddItem1Handler);
                return rootviewmodelAddItem1Handler;
            }(CommandHandler));

            var PlandetailsComponent = /** @class */ (function (_super) {
                __extends(PlandetailsComponent, _super);
                function PlandetailsComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, farrisGridUtils, sanitizer, injector) {
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
                    _this.farrisGridUtils = farrisGridUtils;
                    _this.sanitizer = sanitizer;
                    _this.injector = injector;
                    _this.dataGrid_plandetailsColumns = [];
                    _this.cls = 'f-struct-is-subgrid ';
                    _this.lang = "";
                    _this.size = {};
                    _this.enabledLanguageList = [];
                    _this.tabsToolbarStates = new BehaviorSubject({});
                    _this.tabsToolbarVisibleStates = new BehaviorSubject({});
                    _this.dataGrid_plandetailslineNumberTitle = _this.langService.transform('DataGrid/dataGrid_plandetails/lineNumberTitle', _this.lang, "");
                    _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
                    _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
                        _this.focusInvalidService.focusGridCell(verifyInformations, _this.dataGrid_plandetailsDataGrid);
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
                PlandetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.keybindingService) {
                        this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                            _this.keybindingService.register(keyBinding, function () {
                                return _this.viewModel[method]();
                            });
                        });
                    }
                    this.dataGrid_plandetailsColumns = [
                        [
                            {
                                id: 'materialId_MaterialId_MaterialCode_08ca00c7_ao7g',
                                field: 'materialId.materialId_MaterialCode',
                                width: 120,
                                title: this.langService.transform('materialId_MaterialId_MaterialCode_08ca00c7_ao7g', this.lang, "物料编号"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.LOOKUP,
                                    options: {
                                        "type": 'EditorTypes.LOOKUP',
                                        "uri": 'PlanDetails.materialId_MaterialId_MaterialCode',
                                        "readonly": false,
                                        "idField": 'id',
                                        "singleSelect": true,
                                        "textField": 'materialCode',
                                        "valueField": 'id',
                                        "pagination": null,
                                        "pageSize": 20,
                                        "pageIndex": null,
                                        "displayType": 'List',
                                        "mapFields": { 'id': 'materialId.materialId,materialId.materialId_ID', 'materialCode': 'materialId.materialId_MaterialCode', 'materialName': 'materialId.materialId_MaterialName', 'materialCat.materialCat_CatName': 'materialId.materialId_MaterialCat_CatName', 'evePrice': 'materialId.materialId_EvePrice' },
                                        "expandLevel": -1,
                                        "cascadeStatus": 'enable',
                                        "editable": false,
                                        "enableCascade": false,
                                        "quickSelect": {
                                            "enable": false,
                                            "showItemsCount": 10,
                                            "showMore": true
                                        },
                                        "useFavorite": true,
                                        "enableFullTree": false,
                                        "enableClear": true,
                                        "loadTreeDataType": 'default',
                                        "useTip": false,
                                        "selectFirstInNav": false,
                                        "loadDataWhenOpen": true,
                                        "title": this.langService.transform('GridField/materialId_MaterialId_MaterialCode_08ca00c7_ao7g/editor/LookupEdit/materialId_MaterialId_MaterialCode_08ca00c7_bba6/dialogTitle', this.lang, ""),
                                        "nosearch": false,
                                        "context": {
                                            "enableExtendLoadMethod": true
                                        },
                                        "isRecordSize": false
                                    }
                                },
                                sortable: true,
                                validators: [{ "type": "required", "message": "该字段不能为空！" }],
                                footer: {
                                    options: {},
                                },
                                groupFooter: {
                                    options: {},
                                    formatter: { "type": "none" },
                                },
                                readonly: false,
                                visible: true,
                                allowGrouping: true,
                                filter: false,
                                formatter: {}
                            },
                            {
                                id: 'materialId_MaterialId_MaterialName_0d109a4f_7r0m',
                                field: 'materialId.materialId_MaterialName',
                                width: 120,
                                title: this.langService.transform('materialId_MaterialId_MaterialName_0d109a4f_7r0m', this.lang, "物料名称"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.TEXTBOX,
                                    options: { "id": "materialId_MaterialId_MaterialName_0d109a4f_c6sl", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
                                },
                                sortable: true,
                                footer: {
                                    options: {},
                                },
                                groupFooter: {
                                    options: {},
                                    formatter: { "type": "none" },
                                },
                                readonly: true,
                                visible: true,
                                allowGrouping: true,
                                filter: false,
                                formatter: {}
                            },
                            {
                                id: 'materialId_MaterialId_EvePrice_998dde09_udfc',
                                field: 'materialId.materialId_EvePrice',
                                width: 120,
                                title: this.langService.transform('materialId_MaterialId_EvePrice_998dde09_udfc', this.lang, "市场价格"),
                                dataType: 'number',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.NUMBERBOX,
                                    options: { "id": "materialId_MaterialId_EvePrice_998dde09_znlr", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 2, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
                                },
                                sortable: true,
                                footer: {
                                    options: {},
                                },
                                groupFooter: {
                                    options: {},
                                    formatter: { "type": "none" },
                                },
                                readonly: true,
                                visible: true,
                                allowGrouping: true,
                                filter: false,
                                formatter: { "type": "number", "options": { "precision": 2, "thousand": ",", "prefix": "￥", "suffix": "", "decimal": "." } }
                            },
                            {
                                id: 'materialId_MaterialId_MaterialCat_CatName_e6f48613_344b',
                                field: 'materialId.materialId_MaterialCat_CatName',
                                width: 120,
                                title: this.langService.transform('materialId_MaterialId_MaterialCat_CatName_e6f48613_344b', this.lang, "物料类别"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.TEXTBOX,
                                    options: { "id": "materialId_MaterialId_MaterialCat_CatName_e6f48613_vwbv", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
                                },
                                sortable: true,
                                footer: {
                                    options: {},
                                },
                                groupFooter: {
                                    options: {},
                                    formatter: { "type": "none" },
                                },
                                readonly: true,
                                visible: true,
                                allowGrouping: true,
                                filter: false,
                                formatter: {}
                            },
                            {
                                id: 'materiaAmount_143b71b6_wiiv',
                                field: 'materialAmount',
                                width: 120,
                                title: this.langService.transform('materiaAmount_143b71b6_wiiv', this.lang, "物料数量"),
                                dataType: 'number',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.NUMBERBOX,
                                    options: { "id": "materiaAmount_143b71b6_5utc", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 0, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": false }
                                },
                                sortable: true,
                                footer: {
                                    options: {
                                        calculationType: CalculationType.sum,
                                    },
                                    formatter: { "precision": 0, "thousand": ",", "prefix": "", "suffix": "件", "decimal": ".", "type": "number" },
                                    styler: function (value, rowData, rowIndex) {
                                        return {
                                            style: {
                                                color: 'red',
                                                fontWeight: 800
                                            }
                                        };
                                    },
                                    align: 'center'
                                },
                                groupFooter: {
                                    options: {},
                                    formatter: { "type": "none" },
                                },
                                readonly: false,
                                visible: true,
                                allowGrouping: true,
                                filter: false,
                                formatter: { "type": "number", "options": { "precision": 0, "thousand": ",", "decimal": "." } }
                            },
                            {
                                id: 'supplier_Supplier_SupplierCode_1d93ad3d_alr2',
                                field: 'supplier.supplier_SupplierCode',
                                width: 120,
                                title: this.langService.transform('supplier_Supplier_SupplierCode_1d93ad3d_alr2', this.lang, "供应商编号"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.LOOKUP,
                                    options: {
                                        "type": 'EditorTypes.LOOKUP',
                                        "uri": 'PlanDetails.supplier_Supplier_SupplierCode',
                                        "readonly": false,
                                        "idField": 'id',
                                        "singleSelect": true,
                                        "textField": 'supplierCode',
                                        "valueField": 'id',
                                        "pagination": null,
                                        "pageSize": 20,
                                        "pageIndex": null,
                                        "displayType": 'List',
                                        "mapFields": { 'id': 'supplier.supplier,supplier.supplier_ID', 'supplierName': 'supplier.supplier_SupplierName', 'supplierCode': 'supplier.supplier_SupplierCode', 'contactsEmail': 'supplier.supplier_ContactsEmail', 'contactsAddress': 'supplier.supplier_ContactsAddress' },
                                        "expandLevel": -1,
                                        "cascadeStatus": 'enable',
                                        "editable": false,
                                        "enableCascade": false,
                                        "quickSelect": {
                                            "enable": false,
                                            "showItemsCount": 10,
                                            "showMore": true
                                        },
                                        "useFavorite": true,
                                        "enableFullTree": false,
                                        "enableClear": true,
                                        "loadTreeDataType": 'default',
                                        "useTip": false,
                                        "selectFirstInNav": false,
                                        "loadDataWhenOpen": true,
                                        "title": this.langService.transform('GridField/supplier_Supplier_SupplierCode_1d93ad3d_alr2/editor/LookupEdit/supplier_Supplier_SupplierCode_1d93ad3d_6lav/dialogTitle', this.lang, ""),
                                        "nosearch": false,
                                        "context": {
                                            "enableExtendLoadMethod": true
                                        },
                                        "isRecordSize": false
                                    }
                                },
                                sortable: true,
                                validators: [{ "type": "required", "message": "该字段不能为空！" }],
                                footer: {
                                    options: {},
                                },
                                groupFooter: {
                                    options: {},
                                    formatter: { "type": "none" },
                                },
                                readonly: false,
                                visible: true,
                                allowGrouping: true,
                                filter: false,
                                formatter: {}
                            },
                            {
                                id: 'supplier_Supplier_SupplierName_a4a0e5d0_ju44',
                                field: 'supplier.supplier_SupplierName',
                                width: 120,
                                title: this.langService.transform('supplier_Supplier_SupplierName_a4a0e5d0_ju44', this.lang, "供应商名称"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.TEXTBOX,
                                    options: { "id": "supplier_Supplier_SupplierName_a4a0e5d0_2by7", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
                                },
                                sortable: true,
                                footer: {
                                    options: {},
                                },
                                groupFooter: {
                                    options: {},
                                    formatter: { "type": "none" },
                                },
                                readonly: true,
                                visible: true,
                                allowGrouping: true,
                                filter: false,
                                formatter: {}
                            },
                            {
                                id: 'supplier_Supplier_ContactsEmail_9f031afb_8tfe',
                                field: 'supplier.supplier_ContactsEmail',
                                width: 120,
                                title: this.langService.transform('supplier_Supplier_ContactsEmail_9f031afb_8tfe', this.lang, "联系人邮箱"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.TEXTBOX,
                                    options: { "id": "supplier_Supplier_ContactsEmail_9f031afb_4z9p", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 100 }
                                },
                                sortable: true,
                                footer: {
                                    options: {},
                                },
                                groupFooter: {
                                    options: {},
                                    formatter: { "type": "none" },
                                },
                                readonly: false,
                                visible: true,
                                allowGrouping: true,
                                filter: false,
                                formatter: {}
                            },
                            {
                                id: 'supplier_Supplier_ContactsAddress_27ddf90a_w9yq',
                                field: 'supplier.supplier_ContactsAddress',
                                width: 120,
                                title: this.langService.transform('supplier_Supplier_ContactsAddress_27ddf90a_w9yq', this.lang, "办公地址"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.TEXTBOX,
                                    options: { "id": "supplier_Supplier_ContactsAddress_27ddf90a_zycw", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 100 }
                                },
                                sortable: true,
                                footer: {
                                    options: {},
                                },
                                groupFooter: {
                                    options: {},
                                    formatter: { "type": "none" },
                                },
                                readonly: false,
                                visible: true,
                                allowGrouping: true,
                                filter: false,
                                formatter: {}
                            }
                        ]
                    ];
                    this.viewModel.dataGrid_plandetailsColumns = this.dataGrid_plandetailsColumns;
                    this.viewModel.dataGridColumnsName = "dataGrid_plandetailsColumns";
                    this.onFormLoad();
                };
                PlandetailsComponent.prototype.ngAfterViewInit = function () {
                };
                PlandetailsComponent.prototype.ngOnDestroy = function () {
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
                    this.farrisGridUtils = null;
                    this.sanitizer = null;
                    this.injector = null;
                    this.enabledLanguageList = [];
                };
                PlandetailsComponent.prototype.handleSizeChange = function (size) {
                    this.size = size;
                };
                PlandetailsComponent.prototype.onFormLoad = function () {
                };
                __decorate([
                    ViewChild('dataGrid_plandetailsDataGrid'),
                    __metadata("design:type", DatagridComponent)
                ], PlandetailsComponent.prototype, "dataGrid_plandetailsDataGrid", void 0);
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], PlandetailsComponent.prototype, "cls", void 0);
                PlandetailsComponent = __decorate([
                    Component({
                        selector: 'app-plandetailscomponent',
                        templateUrl: './plandetailscomponent.html',
                        styleUrls: ['./plandetailscomponent.scss'],
                        providers: [
                            FARRIS_DEVKIT_FRAME_PROVIDERS,
                            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                            { provide: FRAME_ID, useValue: 'plandetails-component' },
                            { provide: BindingData, useClass: BindingData },
                            { provide: Repository, useExisting: MaterialPlanRepository },
                            LangService,
                            { provide: NAMESPACE, useValue: '' },
                            { provide: ServerSideToken, useClass: BefLookupRestService },
                            { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                            { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
                            { provide: Form, useClass: PlandetailsComponentViewmodelForm },
                            { provide: UIState, useClass: PlandetailsComponentViewmodelUIState },
                            DIP_DATAIE_SERVICE,
                            { provide: ViewModel, useClass: PlandetailsComponentViewmodel },
                            { provide: EXCEPTION_HANDLER, useValue: null },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: plandetailsAddItem1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: plandetailsRemoveItem1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelInsert1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelAddItem1Handler, multi: true },
                        ]
                    }),
                    __metadata("design:paramtypes", [WizardService,
                        KeybindingService,
                        LangService,
                        ActivatedRoute,
                        Router,
                        ElementRef,
                        LocalizationService,
                        FrmI18nSettingService,
                        FocusInvalidService,
                        CommonUtils,
                        DomSanitizer,
                        Injector])
                ], PlandetailsComponent);
                return PlandetailsComponent;
            }(FrameComponent));

            var JitMissingTranslationHandler = /** @class */ (function () {
                function JitMissingTranslationHandler() {
                }
                JitMissingTranslationHandler.prototype.handle = function (params) {
                    return "JitI18nDefaultValue";
                };
                return JitMissingTranslationHandler;
            }());
            var ɵ0$3 = (createTranslateLoader$1), ɵ1$2 = localStorage.getItem('languageCode') || 'zh-CHS', ɵ2$2 = function () { return window.location.protocol + "//" + window.location.hostname + ":" + window.location.port; };
            var MaterialPlanCardModule = /** @class */ (function () {
                function MaterialPlanCardModule(trans) {
                    this.trans = trans;
                }
                MaterialPlanCardModule = __decorate([
                    NgModule({
                        exports: [
                            RootComponent
                        ],
                        bootstrap: [
                            RootComponent
                        ],
                        entryComponents: [
                            RootComponent
                        ],
                        declarations: [
                            LangPipe,
                            SafeHtmlPipe,
                            RootComponent,
                            BasicFormComponent,
                            PlandetailsComponent
                        ],
                        imports: [
                            CommonModule,
                            FormsModule,
                            ReactiveFormsModule,
                            LayoutModule,
                            KendoBindingModule,
                            FlexLayoutModule,
                            LoadingModule.forRoot(),
                            MessagerModule.forRoot(),
                            NotifyModule.forRoot(),
                            CommandServicesModule,
                            FResponseToolbarModule,
                            FarrisFormsModule,
                            FormMessageModule,
                            TranslateModule.forRoot({
                                loader: {
                                    provide: TranslateLoader,
                                    useFactory: ɵ0$3,
                                    deps: [HttpClient]
                                },
                                missingTranslationHandler: { provide: MissingTranslationHandler, useClass: JitMissingTranslationHandler }
                            }),
                            VerifyDetailModule,
                            FarrisTooltipModule,
                            GridModule,
                            DateInputsModule,
                            DropDownsModule,
                            ButtonsModule,
                            FarrisTabsModule,
                            FarrisTagModule,
                            FarrisSidebarModule,
                            UploadDialogMoudle,
                            InputsModule,
                            IntlModule,
                            LookupModule,
                            TreeTableModule,
                            FieldGroupModule,
                            FarrisSectionModule,
                            FarrisDatePickerModule,
                            FarrisTimeSpinnerModule,
                            WizardModule,
                            QuerySolutionModule,
                            FarrisButtonModule,
                            ListViewModule,
                            TimePickerModule,
                            AngularDraggableModule,
                            SplitterModule,
                            ListNavModule,
                            TextModule,
                            WFRuntimeModule,
                            MultiSelectModule,
                            InputGroupModule,
                            ComboListModule,
                            CloudPrintModule,
                            DatagridEditorsModule,
                            FarrisHtmlEditorModule,
                            ViewChangeModule,
                            ListFilterModule,
                            SimpleFilterModule,
                            AvatarModule,
                            UiFlowchartModule,
                            CalendarModule,
                            NumberSpinnerModule,
                            ComboLookupModule,
                            ScrollspyModule,
                            LanguageTextboxModule,
                            DynamicControlGroupModule,
                            FileListModule,
                            SwitchModule.forRoot(),
                            FarrisFooterModule,
                            BatchEditDialogModule,
                            DiscussionGroupModule,
                            NavModule,
                            TagsModule,
                            FfileuploadAdaptUnifileModule,
                            DatagridFilterRowModule.forRoot(),
                            DatagridSettingsModule.forRoot(),
                            DatagridModule.forRoot(EditorProviders.slice()),
                            EditorModule.forRoot('/platform/common/web/assets/tinymce/tinymce.min.js'),
                            FrmCommonModule.forRoot(),
                            FEHeaderFooterModule,
                            FEPageModalModule.forRoot(),
                            FeatureEditorModule,
                            FEScrollCollapsibleAreaModule,
                            MaterialPlanCardRoutingModule,
                            DataImpExpModule,
                        ],
                        providers: [
                            { provide: LOCALE_ID, useValue: ɵ1$2 },
                            TranslateResolveService,
                            FARRIS_DEVKIT_APP_PROVIDERS,
                            FrameworkVariableService,
                            FrmI18nSettingService,
                            FileViewerService,
                            { provide: FORM_PATH_TOKEN, useValue: '/apps/scm/cm/web/bo-materialplan-front/materialplancard/' },
                            { provide: BE_SERVER_URI_TOKEN, useFactory: ɵ2$2 }
                        ]
                    }),
                    __metadata("design:paramtypes", [TranslateResolveService])
                ], MaterialPlanCardModule);
                return MaterialPlanCardModule;
            }());
            function createTranslateLoader$1(http) {
                return new TranslateHttpLoader(http, '/apps/scm/cm/web/bo-materialplan-front/materialplancard/i18n/', '.json');
            }

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var RouterModuleNgFactory = ɵcmf(RouterModule, [], function (_l) { return ɵmod([ɵmpd(512, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, [[8, [ɵEmptyOutletComponentNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ɵmpd(1073742336, RouterModule, RouterModule, [[2, ɵangular_packages_router_router_a], [2, Router]])]); });
            var styles_ɵEmptyOutletComponent = [];
            var RenderType_ɵEmptyOutletComponent = ɵcrt({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });
            function View_ɵEmptyOutletComponent_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ɵdid(1, 212992, null, 0, RouterOutlet, [ChildrenOutletContexts, ViewContainerRef, ComponentFactoryResolver, [8, null], ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            function View_ɵEmptyOutletComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), ɵdid(1, 49152, null, 0, ɵEmptyOutletComponent, [], null, null)], null, null); }
            var ɵEmptyOutletComponentNgFactory = ɵccf("ng-component", ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var EnumEditorComponent = /** @class */ (function () {
                function EnumEditorComponent(el, render, messagerService, localeSer) {
                    var _a;
                    this.el = el;
                    this.render = render;
                    this.messagerService = messagerService;
                    this.localeSer = localeSer;
                    /**
                     * enum data
                     */
                    this.data = [];
                    this.columns = [];
                    this.textField = 'name';
                    this.valueField = 'value';
                    this.dataChange = new EventEmitter();
                    this.cls = 'd-flex flex-column flex-fill';
                    this.overflow = 'hidden';
                    this.height = '100%';
                    this.showSortBtns = true;
                    this.currentEnumData = null;
                    this.newEnumData = (_a = {},
                        _a[this.textField] = '',
                        _a[this.valueField] = '',
                        _a);
                }
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                EnumEditorComponent.prototype.ngOnChanges = /**
                 * @param {?} changes
                 * @return {?}
                 */
                function (changes) {
                    // console.log(changes);
                };
                /**
                 * @return {?}
                 */
                EnumEditorComponent.prototype.ngOnInit = /**
                 * @return {?}
                 */
                function () {
                };
                /**
                 * @param {?} index
                 * @return {?}
                 */
                EnumEditorComponent.prototype.insertCondition = /**
                 * @param {?} index
                 * @return {?}
                 */
                function (index) {
                    /** @type {?} */
                    var newEnumData = Object.assign({}, this.newEnumData);
                    if (index === 0) {
                        this.data.unshift(newEnumData);
                    }
                    else {
                        this.data.splice(index, 0, newEnumData);
                    }
                    this.changeConditionList();
                };
                /**
                 * @param {?} index
                 * @return {?}
                 */
                EnumEditorComponent.prototype.remove = /**
                 * @param {?} index
                 * @return {?}
                 */
                function (index) {
                    this.data.splice(index, 1);
                    this.changeConditionList();
                    if (this.currentEnumData) {
                        if (index === this.currentEnumData.index) {
                            this.currentEnumData = null;
                        }
                    }
                };
                /**
                 * @return {?}
                 */
                EnumEditorComponent.prototype.onAddFilter = /**
                 * @return {?}
                 */
                function () {
                    this.data = __spread(this.data, [Object.assign({}, this.newEnumData)]);
                    this.changeConditionList();
                };
                /**
                 * @return {?}
                 */
                EnumEditorComponent.prototype.onClear = /**
                 * @return {?}
                 */
                function () {
                    var _this = this;
                    this.messagerService.question(this.localeSer.getValue('enumEditor.message'), (/**
                     * @return {?}
                     */
                    function () {
                        _this.data = [];
                        _this.changeConditionList();
                    }));
                };
                /**
                 * @return {?}
                 */
                EnumEditorComponent.prototype.onMoveTop = /**
                 * @return {?}
                 */
                function () {
                    if (this.currentEnumData) {
                        this.data.unshift(this.currentEnumData.data);
                        this.data.splice(this.currentEnumData.index + 1, 1);
                        this.currentEnumData.index = 0;
                        this.changeConditionList();
                    }
                };
                /**
                 * @return {?}
                 */
                EnumEditorComponent.prototype.onMovePrev = /**
                 * @return {?}
                 */
                function () {
                    var _a;
                    if (this.currentEnumData) {
                        /** @type {?} */
                        var index = this.currentEnumData.index;
                        /** @type {?} */
                        var tempArr = this.data.splice(index, 1);
                        (_a = this.data).splice.apply(_a, __spread([index - 1, 0], tempArr));
                        this.currentEnumData.index = index - 1;
                        this.changeConditionList();
                    }
                };
                /**
                 * @return {?}
                 */
                EnumEditorComponent.prototype.onMoveNext = /**
                 * @return {?}
                 */
                function () {
                    var _a;
                    if (this.currentEnumData) {
                        /** @type {?} */
                        var index = this.currentEnumData.index;
                        /** @type {?} */
                        var tempArr = this.data.splice(index, 1);
                        (_a = this.data).splice.apply(_a, __spread([index + 1, 0], tempArr));
                        this.currentEnumData.index = index + 1;
                        this.changeConditionList();
                    }
                };
                /**
                 * @return {?}
                 */
                EnumEditorComponent.prototype.onMoveBottom = /**
                 * @return {?}
                 */
                function () {
                    if (this.currentEnumData) {
                        this.data.push(this.currentEnumData.data);
                        this.data.splice(this.currentEnumData.index, 1);
                        this.currentEnumData.index = this.data.length - 1;
                        this.changeConditionList();
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                EnumEditorComponent.prototype.changeConditionList = /**
                 * @private
                 * @return {?}
                 */
                function () {
                    this.dataChange.next(this.data);
                };
                /**
                 * @param {?} $event
                 * @return {?}
                 */
                EnumEditorComponent.prototype.selected = /**
                 * @param {?} $event
                 * @return {?}
                 */
                function ($event) {
                    // console.log($event);
                    this.currentEnumData = $event;
                };
                /**
                 * @param {?} $event
                 * @return {?}
                 */
                EnumEditorComponent.prototype.isSelected = /**
                 * @param {?} $event
                 * @return {?}
                 */
                function ($event) {
                    if (this.currentEnumData) {
                        return this.currentEnumData.index === $event;
                    }
                    return false;
                };
                EnumEditorComponent.decorators = [
                    { type: Component, args: [{
                                selector: 'farris-enum-editor',
                                template: "<div class=\"table-header \">\r\n    <table class=\"table table-bordered\" style=\"margin-bottom: 0\">\r\n        <colgroup>\r\n            <col style=\"width: 42px\">\r\n            <col style=\"width: 40%\">\r\n            <col>\r\n        </colgroup>\r\n        <thead>\r\n            <tr>\r\n                <th></th>\r\n                <th><b>{{'enumEditor.value'| locale}}</b></th>\r\n                <th><b>{{'enumEditor.name'| locale}}</b></th>\r\n            </tr>\r\n        </thead>\r\n    </table>\r\n</div>\r\n<div class=\"table-body flex-fill\" style=\"overflow: hidden\" #tablebodybox>\r\n    <perfect-scrollbar [config]=\"{}\">\r\n        <table class=\"table table-bordered\">\r\n            <colgroup>\r\n                <col style=\"width: 42px\">\r\n                <col style=\"width: 40%\">\r\n                <col>\r\n            </colgroup>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of data; let index=index;\" (click)=\"selected({'index':index, 'data': item})\" [class.selected]=\"isSelected(index)\" >\r\n                    <td>\r\n                        <button type=\"button\" class=\"btn btn-link\" (click)=\"remove(index)\">\r\n                            <span class=\"f-icon f-icon-close\" style=\"color: red\"></span>\r\n                        </button>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" style=\"width:100%\" autocomplete=\"off\" placeholder=\"\" class=\"k-textbox\" [(ngModel)]=\"item[valueField]\">\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" style=\"width:100%\" placeholder=\"\" autocomplete=\"off\" class=\"k-textbox\" [(ngModel)]=\"item[textField]\">\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </perfect-scrollbar>\r\n</div>\r\n<div style=\"flex-shrink: 0;\">\r\n<enum-editor-footer\r\n[showSortBtns]=\"showSortBtns\"\r\n(addFilter)=\"onAddFilter()\"\r\n(clearFilter)=\"onClear()\"\r\n(moveTop)=\"onMoveTop()\"\r\n(movePrev)=\"onMovePrev()\"\r\n(moveNext)=\"onMoveNext()\"\r\n(moveBottom)=\"onMoveBottom()\"></enum-editor-footer>\r\n</div>"
                            }] }
                ];
                /** @nocollapse */
                EnumEditorComponent.ctorParameters = function () { return [
                    { type: ElementRef },
                    { type: Renderer2 },
                    { type: MessagerService },
                    { type: LocaleService }
                ]; };
                EnumEditorComponent.propDecorators = {
                    data: [{ type: Input }],
                    columns: [{ type: Input }],
                    textField: [{ type: Input }],
                    valueField: [{ type: Input }],
                    dataChange: [{ type: Output }],
                    tablebodybox: [{ type: ViewChild, args: ['tablebodybox',] }],
                    cls: [{ type: HostBinding, args: ['class',] }],
                    overflow: [{ type: HostBinding, args: ['style.overflow',] }],
                    height: [{ type: HostBinding, args: ['style.height',] }],
                    showSortBtns: [{ type: Input }]
                };
                return EnumEditorComponent;
            }());

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @enum {number} */
            var EnumOutType = {
                'array': 0,
                'object': 1,
            };
            EnumOutType[EnumOutType['array']] = 'array';
            EnumOutType[EnumOutType['object']] = 'object';
            var EnumEditorService = /** @class */ (function () {
                function EnumEditorService(injector, cfr, modalService, localeService) {
                    this.injector = injector;
                    this.cfr = cfr;
                    this.modalService = modalService;
                    this.localeService = localeService;
                    this.enumEditorRef = null;
                    this.dlgRef = null;
                    this.originalData = [];
                    this.textField = 'name';
                    this.valueField = 'value';
                    this.outType = EnumOutType.array;
                    this.dataChanged = new Subject();
                }
                /**
                 * @param {?=} enumData
                 * @param {?=} options
                 * @return {?}
                 */
                EnumEditorService.prototype.showDialog = /**
                 * @param {?=} enumData
                 * @param {?=} options
                 * @return {?}
                 */
                function (enumData, options) {
                    var _this = this;
                    if (enumData === void 0) { enumData = []; }
                    if (options === void 0) { options = {}; }
                    enumData = this.toJSON(enumData);
                    /** @type {?} */
                    var enumEditorFactory = this.cfr.resolveComponentFactory(EnumEditorComponent);
                    this.enumEditorRef = enumEditorFactory.create(this.injector);
                    this.enumEditorRef.instance.data = enumData;
                    this.originalData = cloneDeep(enumData);
                    this.textField = options['textField'] || 'name';
                    this.valueField = options['valueField'] || 'value';
                    this.outType = options['outType'] || EnumOutType.array;
                    options['showSortBtns'] = this.outType === EnumOutType.array;
                    this.dlgRef = this.modalService.show(this.enumEditorRef, {
                        width: 800, height: 500,
                        title: this.localeService.getValue('enumEditor.title'), enableScroll: false,
                        minHeight: 398, minWidth: 798, iconCls: 'f-icon f-icon-top_developmenttool',
                        buttons: [
                            {
                                text: this.localeService.getValue('enumEditor.cancelButton'),
                                cls: 'btn btn-outline-secondary',
                                handle: (/**
                                 * @return {?}
                                 */
                                function () {
                                    _this.cancel();
                                })
                            },
                            {
                                text: this.localeService.getValue('enumEditor.okButton'),
                                cls: 'btn btn-primary',
                                handle: (/**
                                 * @return {?}
                                 */
                                function () {
                                    _this.save();
                                })
                            }
                        ],
                        initialState: options,
                        dialogFooterStyles: { background: '#F4F6F9' },
                        buttonAlign: 'right',
                        closed: (/**
                         * @param {?} isCloseButtonClick
                         * @return {?}
                         */
                        function (isCloseButtonClick) {
                            if (isCloseButtonClick) {
                                _this.cancel();
                            }
                        })
                    });
                    this.enumEditorRef.instance.height = this.dlgRef.dialog.instance.getContainerSize().height;
                    this.dlgRef.dialog.instance.resized.subscribe((/**
                     * @param {?} size
                     * @return {?}
                     */
                    function (size) {
                        _this.enumEditorRef.instance.height = size.containerHeight;
                    }));
                    this.enumEditorRef.changeDetectorRef.detectChanges();
                    this.dlgRef.dialog.changeDetectorRef.reattach();
                    // this.openDialog.emit();
                };
                /**
                 * @return {?}
                 */
                EnumEditorService.prototype.cancel = /**
                 * @return {?}
                 */
                function () {
                    this._dataChanged(this.originalData);
                    this.dlgRef.close();
                };
                /**
                 * @return {?}
                 */
                EnumEditorService.prototype.save = /**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var enumData = this.enumEditorRef.instance.data;
                    this._dataChanged(enumData);
                    this.dlgRef.close();
                };
                /**
                 * @private
                 * @param {?} enumData
                 * @return {?}
                 */
                EnumEditorService.prototype._dataChanged = /**
                 * @private
                 * @param {?} enumData
                 * @return {?}
                 */
                function (enumData) {
                    /** @type {?} */
                    var str = this.toString(enumData);
                    this.dataChanged.next(str);
                };
                /**
                 * @param {?} enumData
                 * @return {?}
                 */
                EnumEditorService.prototype.toString = /**
                 * @param {?} enumData
                 * @return {?}
                 */
                function (enumData) {
                    var _this = this;
                    if (enumData && enumData.length) {
                        if (this.outType === EnumOutType.array) {
                            return JSON.stringify(enumData);
                        }
                        else {
                            /** @type {?} */
                            var obj = enumData.reduce((/**
                             * @param {?} r
                             * @param {?} c
                             * @return {?}
                             */
                            function (r, c) {
                                r[c[_this.valueField]] = c[_this.textField];
                                return r;
                            }), {});
                            return JSON.stringify(obj);
                        }
                    }
                    return '';
                };
                /**
                 * @param {?} val
                 * @return {?}
                 */
                EnumEditorService.prototype.toJSON = /**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    /** @type {?} */
                    var enumData = [];
                    if (val) {
                        if (typeof val === 'string') {
                            try {
                                enumData = JSON.parse(val);
                                if (this.outType === EnumOutType.object) {
                                    enumData = this.convertObject2Array(enumData);
                                }
                            }
                            catch (e) {
                                enumData = [];
                                // console.warn(e);
                            }
                        }
                        else {
                            if (Array.isArray(val)) {
                                enumData = val;
                            }
                            else {
                                enumData = this.convertObject2Array(val);
                            }
                        }
                    }
                    return enumData;
                };
                /**
                 * @private
                 * @param {?} obj
                 * @return {?}
                 */
                EnumEditorService.prototype.convertObject2Array = /**
                 * @private
                 * @param {?} obj
                 * @return {?}
                 */
                function (obj) {
                    var _this = this;
                    /** @type {?} */
                    var _enumData = [];
                    Object.keys(obj).forEach((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) {
                        var _a;
                        _enumData.push((_a = {}, _a[_this.valueField] = n, _a[_this.textField] = obj[n], _a));
                    }));
                    return _enumData;
                };
                EnumEditorService.decorators = [
                    { type: Injectable, args: [{
                                providedIn: 'root'
                            },] }
                ];
                /** @nocollapse */
                EnumEditorService.ctorParameters = function () { return [
                    { type: Injector },
                    { type: ComponentFactoryResolver },
                    { type: BsModalService },
                    { type: LocaleService }
                ]; };
                /** @nocollapse */ EnumEditorService.ngInjectableDef = defineInjectable({ factory: function EnumEditorService_Factory() { return new EnumEditorService(inject(INJECTOR), inject(ComponentFactoryResolver), inject(BsModalService), inject(LocaleService)); }, token: EnumEditorService, providedIn: "root" });
                return EnumEditorService;
            }());

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var EnumEditorFooterComponent = /** @class */ (function () {
                function EnumEditorFooterComponent(grid) {
                    this.grid = grid;
                    this.cls = 'f-filter-footer';
                    this.showSortBtns = true;
                    this.addFilter = new EventEmitter();
                    this.clearFilter = new EventEmitter();
                    this.moveTop = new EventEmitter();
                    this.movePrev = new EventEmitter();
                    this.moveNext = new EventEmitter();
                    this.moveBottom = new EventEmitter();
                }
                /**
                 * @return {?}
                 */
                EnumEditorFooterComponent.prototype.ngOnInit = /**
                 * @return {?}
                 */
                function () { };
                /**
                 * @return {?}
                 */
                EnumEditorFooterComponent.prototype.onAddFilter = /**
                 * @return {?}
                 */
                function () {
                    this.addFilter.emit();
                };
                /**
                 * @return {?}
                 */
                EnumEditorFooterComponent.prototype.onClear = /**
                 * @return {?}
                 */
                function () {
                    this.clearFilter.emit();
                };
                /**
                 * @return {?}
                 */
                EnumEditorFooterComponent.prototype.onMoveTop = /**
                 * @return {?}
                 */
                function () {
                    this.moveTop.emit();
                };
                /**
                 * @return {?}
                 */
                EnumEditorFooterComponent.prototype.onMovePrev = /**
                 * @return {?}
                 */
                function () {
                    this.movePrev.emit();
                };
                /**
                 * @return {?}
                 */
                EnumEditorFooterComponent.prototype.onMoveNext = /**
                 * @return {?}
                 */
                function () {
                    this.moveNext.emit();
                };
                /**
                 * @return {?}
                 */
                EnumEditorFooterComponent.prototype.onMoveBottom = /**
                 * @return {?}
                 */
                function () {
                    this.moveBottom.emit();
                };
                /**
                 * @return {?}
                 */
                EnumEditorFooterComponent.prototype.canUse = /**
                 * @return {?}
                 */
                function () {
                    if (this.grid.currentEnumData) {
                        return this.grid.data.length > 1;
                    }
                    return false;
                };
                /**
                 * @return {?}
                 */
                EnumEditorFooterComponent.prototype.canMoveUp = /**
                 * @return {?}
                 */
                function () {
                    if (this.canUse()) {
                        return this.grid.currentEnumData.index > 0;
                    }
                    return false;
                };
                /**
                 * @return {?}
                 */
                EnumEditorFooterComponent.prototype.canMoveDown = /**
                 * @return {?}
                 */
                function () {
                    if (this.canUse()) {
                        return this.grid.currentEnumData.index < this.grid.data.length - 1;
                    }
                    return false;
                };
                EnumEditorFooterComponent.decorators = [
                    { type: Component, args: [{
                                selector: 'enum-editor-footer',
                                template: "\n    <div class=\"footer-container\">\n        <button type=\"button\" (click)=\"onAddFilter()\"\n            class=\"k-button k-button-icontext k-flat \"><span class=\"k-icon k-i-add\"></span> {{ 'enumEditor.addWhere' | locale }}</button>\n        <button type=\"button\" (click)=\"onClear()\" [disabled]=\"!grid.data.length\"\n            class=\"k-button k-button-icontext k-flat \"><span class=\"k-icon k-i-delete\"></span> {{ 'enumEditor.clear' | locale }}</button>\n        <ng-container *ngIf=\"showSortBtns\">\n            <button type=\"button\" [disabled]=\"!canMoveUp()\" (click)=\"onMoveTop()\"\n            class=\"k-button k-button-icontext k-flat \"><span class=\"k-icon k-i-arrow-end-up\"></span>\n            {{'enumEditor.moveTop' | locale }}</button>\n        <button type=\"button\" [disabled]=\"!canMoveUp()\" (click)=\"onMovePrev()\"\n            class=\"k-button k-button-icontext k-flat \"><span class=\"k-icon k-i-arrow-60-up\"></span>\n            {{'enumEditor.moveUp' | locale }}</button>\n        <button type=\"button\" [disabled]=\"!canMoveDown()\" (click)=\"onMoveNext()\"\n            class=\"k-button k-button-icontext k-flat \"><span class=\"k-icon k-i-arrow-60-down\"></span>\n            {{'enumEditor.moveDown' | locale }}</button>\n        <button type=\"button\" [disabled]=\"!canMoveDown()\" (click)=\"onMoveBottom()\"\n            class=\"k-button k-button-icontext k-flat\"><span class=\"k-icon k-i-arrow-end-down\"></span>\n            {{'enumEditor.moveBottom' | locale }}</button>\n            </ng-container>\n    </div>\n    "
                            }] }
                ];
                /** @nocollapse */
                EnumEditorFooterComponent.ctorParameters = function () { return [
                    { type: EnumEditorComponent }
                ]; };
                EnumEditorFooterComponent.propDecorators = {
                    cls: [{ type: HostBinding, args: ['class',] }],
                    showSortBtns: [{ type: Input }],
                    addFilter: [{ type: Output }],
                    clearFilter: [{ type: Output }],
                    moveTop: [{ type: Output }],
                    movePrev: [{ type: Output }],
                    moveNext: [{ type: Output }],
                    moveBottom: [{ type: Output }]
                };
                return EnumEditorFooterComponent;
            }());

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var ENUM_EDITOR_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((/**
                 * @return {?}
                 */
                function () { return EnumEditorInputComponent; })),
                multi: true
            };
            var EnumEditorInputComponent = /** @class */ (function (_super) {
                __extends(EnumEditorInputComponent, _super);
                function EnumEditorInputComponent(injector, ees, el) {
                    var _this = _super.call(this, injector, el) || this;
                    _this.injector = injector;
                    _this.ees = ees;
                    _this.el = el;
                    _this.textField = 'name';
                    _this.valueField = 'value';
                    _this.outType = EnumOutType.array;
                    _this.enableClear = true;
                    _this.valueChange = new EventEmitter();
                    _this.groupIcon = '<i class="f-icon f-icon-lookup"></i>';
                    _this.cd = null;
                    _this.ees.dataChanged.subscribe((/**
                     * @param {?} str
                     * @return {?}
                     */
                    function (str) {
                        _this.updateData(str);
                    }));
                    _this.cd = _this.injector.get(ChangeDetectorRef, null);
                    return _this;
                }
                /**
                 * @private
                 * @param {?} str
                 * @return {?}
                 */
                EnumEditorInputComponent.prototype.updateData = /**
                 * @private
                 * @param {?} str
                 * @return {?}
                 */
                function (str) {
                    this.value = str;
                    if (this.cd) {
                        this.cd.detectChanges();
                    }
                    this.valueChange.emit(str);
                    this.onModelChange(str);
                    this.onModelTouched(str);
                };
                /**
                 * @return {?}
                 */
                EnumEditorInputComponent.prototype.ngOnInit = /**
                 * @return {?}
                 */
                function () { };
                /**
                 * @return {?}
                 */
                EnumEditorInputComponent.prototype.showDialog = /**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var enumData = this.convertValue2JSON();
                    this.ees.showDialog(enumData, {
                        textField: this.textField,
                        valueField: this.valueField,
                        outType: this.outType
                    });
                };
                /**
                 * @param {?} $event
                 * @return {?}
                 */
                EnumEditorInputComponent.prototype.onClear = /**
                 * @param {?} $event
                 * @return {?}
                 */
                function ($event) {
                    this.updateData('');
                };
                /**
                 * @param {?} val
                 * @return {?}
                 */
                EnumEditorInputComponent.prototype.writeValue = /**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    if (val && typeof val === 'object') {
                        this.value = JSON.stringify(val);
                    }
                    else {
                        this.value = val || '';
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                EnumEditorInputComponent.prototype.convertValue2JSON = /**
                 * @private
                 * @return {?}
                 */
                function () {
                    return this.ees.toJSON(this.value);
                };
                EnumEditorInputComponent.decorators = [
                    { type: Component, args: [{
                                selector: 'enum-editor-input',
                                template: "\n    <input-group #ig style=\"width: 100%\"\n        [groupText]=\"groupIcon\"\n        (clear)=\"onClear($event)\"\n        (clickHandle)=\"showDialog()\"\n        [readonly] = \"readonly\"\n        [editable] = \"editable\"\n        [enableClear] = \"enableClear\"\n        [(value)]=\"value\">\n    </input-group>\n    ",
                                providers: [
                                    ENUM_EDITOR_VALUE_ACCESSOR,
                                    EnumEditorService
                                ]
                            }] }
                ];
                /** @nocollapse */
                EnumEditorInputComponent.ctorParameters = function () { return [
                    { type: Injector },
                    { type: EnumEditorService },
                    { type: ElementRef }
                ]; };
                EnumEditorInputComponent.propDecorators = {
                    value: [{ type: Input }],
                    textField: [{ type: Input }],
                    valueField: [{ type: Input }],
                    outType: [{ type: Input }],
                    enableClear: [{ type: Input }],
                    valueChange: [{ type: Output }],
                    inputGroupRef: [{ type: ViewChild, args: ['ig',] }]
                };
                return EnumEditorInputComponent;
            }(LookupComponent));

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var EnumEditorModule = /** @class */ (function () {
                function EnumEditorModule() {
                }
                /**
                 * @return {?}
                 */
                EnumEditorModule.forRoot = /**
                 * @return {?}
                 */
                function () {
                    return {
                        ngModule: EnumEditorModule,
                        providers: [
                            EnumEditorService
                        ]
                    };
                };
                EnumEditorModule.decorators = [
                    { type: NgModule, args: [{
                                declarations: [
                                    EnumEditorComponent,
                                    EnumEditorInputComponent,
                                    EnumEditorFooterComponent
                                ],
                                imports: [
                                    CommonModule,
                                    FormsModule,
                                    InputGroupModule,
                                    FarrisCommonModule,
                                    MessagerModule.forRoot(),
                                    PerfectScrollbarModule,
                                    LookupModule,
                                    LocaleModule
                                ],
                                entryComponents: [
                                    EnumEditorComponent
                                ],
                                exports: [EnumEditorComponent, EnumEditorInputComponent]
                            },] }
                ];
                return EnumEditorModule;
            }());

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var EnumEditorModuleNgFactory = ɵcmf(EnumEditorModule, [], function (_l) { return ɵmod([ɵmpd(512, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, [[8, [PopoverContainerComponentNgFactory, TooltipComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, MessagerComponentNgFactory, NotifyContainerComponentNgFactory, LoadingComponentNgFactory, FarrisContextMenuComponentNgFactory, DataTableComponentNgFactory, TreeTableComponentNgFactory, LookupLeftComponentNgFactory, LookupTabsComponentNgFactory, LookupQuickSelectPanelComponentNgFactory, EnumEditorComponentNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ɵmpd(4608, NgLocalization, NgLocaleLocalization, [LOCALE_ID, [2, ɵangular_packages_common_common_a]]), ɵmpd(4608, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_j, []), ɵmpd(4608, PopoverConfig, PopoverConfig, []), ɵmpd(4608, PositioningService, PositioningService, [RendererFactory2, PLATFORM_ID]), ɵmpd(4608, ComponentLoaderFactory, ComponentLoaderFactory, [ComponentFactoryResolver, NgZone, Injector, PositioningService, ApplicationRef]), ɵmpd(4608, CommonUtils, CommonUtils, []), ɵmpd(4608, RuntimeStateService, RuntimeStateService, [CommonUtils]), ɵmpd(4608, IdService, IdService, []), ɵmpd(4608, LocaleService, LocaleService, [LOCALE_ID, CommonUtils, [2, FARRIS_LOCAL_CUSTOM_DATA]]), ɵmpd(4608, AttentionService, AttentionService, [RendererFactory2, NgZone]), ɵmpd(4608, BsModalService, BsModalService, [RendererFactory2, ComponentLoaderFactory, NgZone]), ɵmpd(4608, NotifyService, NotifyService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵmpd(4608, PaginationService$1, PaginationService$1, []), ɵmpd(4608, DateTimeHelperService, DateTimeHelperService, []), ɵmpd(4608, NumberHelperService, NumberHelperService, []), ɵmpd(4608, ColumnFormatService, ColumnFormatService, [DateTimeHelperService, NumberHelperService]), ɵmpd(4608, FarrisContextMenuService, FarrisContextMenuService, [ComponentFactoryResolver, Injector]), ɵmpd(4608, TreetableService, TreetableService, []), ɵmpd(4608, ResizeService, ResizeService, []), ɵmpd(4608, TTHotkeys, TTHotkeys, [EventManager]), ɵmpd(4608, DialogService, DialogService, []), ɵmpd(4608, MessagerService, MessagerService, [BsModalService, Injector]), ɵmpd(4608, LoadingService, LoadingService, [ApplicationRef, ComponentFactoryResolver, Injector]), ɵmpd(1073742336, CommonModule, CommonModule, []), ɵmpd(1073742336, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bc, []), ɵmpd(1073742336, FormsModule, FormsModule, []), ɵmpd(1073742336, FarrisCommonModule, FarrisCommonModule, []), ɵmpd(1073742336, PopoverModule, PopoverModule, []), ɵmpd(1073742336, InputGroupModule, InputGroupModule, []), ɵmpd(1073742336, LocaleModule, LocaleModule, []), ɵmpd(1073742336, PerfectScrollbarModule, PerfectScrollbarModule, []), ɵmpd(1073742336, AngularDraggableModule, AngularDraggableModule, []), ɵmpd(1073742336, FAreaResponseModule, FAreaResponseModule, []), ɵmpd(1073742336, FarrisTooltipModule, FarrisTooltipModule, []), ɵmpd(1073742336, ModalModule, ModalModule, []), ɵmpd(1073742336, MessagerModule, MessagerModule, []), ɵmpd(1073742336, FarrisDialogModule, FarrisDialogModule, []), ɵmpd(1073742336, NotifyModule, NotifyModule, []), ɵmpd(1073742336, LoadingModule, LoadingModule, []), ɵmpd(1073742336, LayoutModule$1, LayoutModule$1, []), ɵmpd(1073742336, PaginationModule, PaginationModule, []), ɵmpd(1073742336, DateHelperModule, DateHelperModule, []), ɵmpd(1073742336, NumberHelperModule, NumberHelperModule, []), ɵmpd(1073742336, DataColumnModule, DataColumnModule, []), ɵmpd(1073742336, DataTableModule, DataTableModule, []), ɵmpd(1073742336, FarrisContextMenuModule, FarrisContextMenuModule, []), ɵmpd(1073742336, TreeTableModule, TreeTableModule, []), ɵmpd(1073742336, LookupModule, LookupModule, []), ɵmpd(1073742336, EnumEditorModule, EnumEditorModule, []), ɵmpd(256, FARRIS_LOCAL_CUSTOM_DATA, {}, []), ɵmpd(256, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, []), ɵmpd(256, LOADING_DEFAULT_CONFIG, { delay: 1000 }, [])]); });
            var styles_EnumEditorComponent = [];
            var RenderType_EnumEditorComponent = ɵcrt({ encapsulation: 2, styles: styles_EnumEditorComponent, data: {} });
            function View_EnumEditorComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 17, "tr", [], [[2, "selected", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (_co.selected({ "index": _v.context.index, "data": _v.context.$implicit }) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), (_l()(), ɵeld(1, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 1, "button", [["class", "btn btn-link"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (_co.remove(_v.context.index) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), (_l()(), ɵeld(3, 0, null, null, 0, "span", [["class", "f-icon f-icon-close"], ["style", "color: red"]], null, null, null, null, null)), (_l()(), ɵeld(4, 0, null, null, 6, "td", [], null, null, null, null, null)), (_l()(), ɵeld(5, 0, null, null, 5, "input", [["autocomplete", "off"], ["class", "k-textbox"], ["placeholder", ""], ["style", "width:100%"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 6)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 6).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 6)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 6)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } if (("ngModelChange" === en)) {
                    var pd_4 = ((_v.context.$implicit[_co.valueField] = $event) !== false);
                    ad = (pd_4 && ad);
                } return ad; }, null, null)), ɵdid(6, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(8, 671744, null, 0, NgModel, [[8, null], [8, null], [8, null], [6, NG_VALUE_ACCESSOR]], { model: [0, "model"] }, { update: "ngModelChange" }), ɵprd(2048, null, NgControl, null, [NgModel]), ɵdid(10, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), (_l()(), ɵeld(11, 0, null, null, 6, "td", [], null, null, null, null, null)), (_l()(), ɵeld(12, 0, null, null, 5, "input", [["autocomplete", "off"], ["class", "k-textbox"], ["placeholder", ""], ["style", "width:100%"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 13)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 13).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 13)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 13)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } if (("ngModelChange" === en)) {
                    var pd_4 = ((_v.context.$implicit[_co.textField] = $event) !== false);
                    ad = (pd_4 && ad);
                } return ad; }, null, null)), ɵdid(13, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(15, 671744, null, 0, NgModel, [[8, null], [8, null], [8, null], [6, NG_VALUE_ACCESSOR]], { model: [0, "model"] }, { update: "ngModelChange" }), ɵprd(2048, null, NgControl, null, [NgModel]), ɵdid(17, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = _v.context.$implicit[_co.valueField]; _ck(_v, 8, 0, currVal_8); var currVal_16 = _v.context.$implicit[_co.textField]; _ck(_v, 15, 0, currVal_16); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isSelected(_v.context.index); _ck(_v, 0, 0, currVal_0); var currVal_1 = ɵnov(_v, 10).ngClassUntouched; var currVal_2 = ɵnov(_v, 10).ngClassTouched; var currVal_3 = ɵnov(_v, 10).ngClassPristine; var currVal_4 = ɵnov(_v, 10).ngClassDirty; var currVal_5 = ɵnov(_v, 10).ngClassValid; var currVal_6 = ɵnov(_v, 10).ngClassInvalid; var currVal_7 = ɵnov(_v, 10).ngClassPending; _ck(_v, 5, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = ɵnov(_v, 17).ngClassUntouched; var currVal_10 = ɵnov(_v, 17).ngClassTouched; var currVal_11 = ɵnov(_v, 17).ngClassPristine; var currVal_12 = ɵnov(_v, 17).ngClassDirty; var currVal_13 = ɵnov(_v, 17).ngClassValid; var currVal_14 = ɵnov(_v, 17).ngClassInvalid; var currVal_15 = ɵnov(_v, 17).ngClassPending; _ck(_v, 12, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); }); }
            function View_EnumEditorComponent_0(_l) { return ɵvid(0, [ɵpid(0, FarrisLocalePipe, [LocaleService]), ɵqud(402653184, 1, { tablebodybox: 0 }), (_l()(), ɵeld(2, 0, null, null, 16, "div", [["class", "table-header "]], null, null, null, null, null)), (_l()(), ɵeld(3, 0, null, null, 15, "table", [["class", "table table-bordered"], ["style", "margin-bottom: 0"]], null, null, null, null, null)), (_l()(), ɵeld(4, 0, null, null, 3, "colgroup", [], null, null, null, null, null)), (_l()(), ɵeld(5, 0, null, null, 0, "col", [["style", "width: 42px"]], null, null, null, null, null)), (_l()(), ɵeld(6, 0, null, null, 0, "col", [["style", "width: 40%"]], null, null, null, null, null)), (_l()(), ɵeld(7, 0, null, null, 0, "col", [], null, null, null, null, null)), (_l()(), ɵeld(8, 0, null, null, 10, "thead", [], null, null, null, null, null)), (_l()(), ɵeld(9, 0, null, null, 9, "tr", [], null, null, null, null, null)), (_l()(), ɵeld(10, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), ɵeld(11, 0, null, null, 3, "th", [], null, null, null, null, null)), (_l()(), ɵeld(12, 0, null, null, 2, "b", [], null, null, null, null, null)), (_l()(), ɵted(13, null, ["", ""])), ɵppd(14, 1), (_l()(), ɵeld(15, 0, null, null, 3, "th", [], null, null, null, null, null)), (_l()(), ɵeld(16, 0, null, null, 2, "b", [], null, null, null, null, null)), (_l()(), ɵted(17, null, ["", ""])), ɵppd(18, 1), (_l()(), ɵeld(19, 0, [[1, 0], ["tablebodybox", 1]], null, 10, "div", [["class", "table-body flex-fill"], ["style", "overflow: hidden"]], null, null, null, null, null)), (_l()(), ɵeld(20, 0, null, null, 9, "perfect-scrollbar", [], [[2, "ps-show-limits", null], [2, "ps-show-active", null]], null, null, View_PerfectScrollbarComponent_0, RenderType_PerfectScrollbarComponent)), ɵdid(21, 507904, null, 0, PerfectScrollbarComponent, [NgZone, ChangeDetectorRef, PLATFORM_ID], { config: [0, "config"] }, null), (_l()(), ɵeld(22, 0, null, 0, 7, "table", [["class", "table table-bordered"]], null, null, null, null, null)), (_l()(), ɵeld(23, 0, null, null, 3, "colgroup", [], null, null, null, null, null)), (_l()(), ɵeld(24, 0, null, null, 0, "col", [["style", "width: 42px"]], null, null, null, null, null)), (_l()(), ɵeld(25, 0, null, null, 0, "col", [["style", "width: 40%"]], null, null, null, null, null)), (_l()(), ɵeld(26, 0, null, null, 0, "col", [], null, null, null, null, null)), (_l()(), ɵeld(27, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_EnumEditorComponent_1)), ɵdid(29, 278528, null, 0, NgForOf, [ViewContainerRef, TemplateRef, IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), ɵeld(30, 0, null, null, 2, "div", [["style", "flex-shrink: 0;"]], null, null, null, null, null)), (_l()(), ɵeld(31, 0, null, null, 1, "enum-editor-footer", [], [[8, "className", 0]], [[null, "addFilter"], [null, "clearFilter"], [null, "moveTop"], [null, "movePrev"], [null, "moveNext"], [null, "moveBottom"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("addFilter" === en)) {
                    var pd_0 = (_co.onAddFilter() !== false);
                    ad = (pd_0 && ad);
                } if (("clearFilter" === en)) {
                    var pd_1 = (_co.onClear() !== false);
                    ad = (pd_1 && ad);
                } if (("moveTop" === en)) {
                    var pd_2 = (_co.onMoveTop() !== false);
                    ad = (pd_2 && ad);
                } if (("movePrev" === en)) {
                    var pd_3 = (_co.onMovePrev() !== false);
                    ad = (pd_3 && ad);
                } if (("moveNext" === en)) {
                    var pd_4 = (_co.onMoveNext() !== false);
                    ad = (pd_4 && ad);
                } if (("moveBottom" === en)) {
                    var pd_5 = (_co.onMoveBottom() !== false);
                    ad = (pd_5 && ad);
                } return ad; }, View_EnumEditorFooterComponent_0, RenderType_EnumEditorFooterComponent)), ɵdid(32, 114688, null, 0, EnumEditorFooterComponent, [EnumEditorComponent], { showSortBtns: [0, "showSortBtns"] }, { addFilter: "addFilter", clearFilter: "clearFilter", moveTop: "moveTop", movePrev: "movePrev", moveNext: "moveNext", moveBottom: "moveBottom" })], function (_ck, _v) { var _co = _v.component; var currVal_4 = ɵEMPTY_MAP; _ck(_v, 21, 0, currVal_4); var currVal_5 = _co.data; _ck(_v, 29, 0, currVal_5); var currVal_7 = _co.showSortBtns; _ck(_v, 32, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = ɵunv(_v, 13, 0, _ck(_v, 14, 0, ɵnov(_v, 0), "enumEditor.value")); _ck(_v, 13, 0, currVal_0); var currVal_1 = ɵunv(_v, 17, 0, _ck(_v, 18, 0, ɵnov(_v, 0), "enumEditor.name")); _ck(_v, 17, 0, currVal_1); var currVal_2 = ɵnov(_v, 21).autoPropagation; var currVal_3 = ɵnov(_v, 21).scrollIndicators; _ck(_v, 20, 0, currVal_2, currVal_3); var currVal_6 = ɵnov(_v, 32).cls; _ck(_v, 31, 0, currVal_6); }); }
            function View_EnumEditorComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "farris-enum-editor", [], [[8, "className", 0], [4, "overflow", null], [4, "height", null]], null, null, View_EnumEditorComponent_0, RenderType_EnumEditorComponent)), ɵdid(1, 638976, null, 0, EnumEditorComponent, [ElementRef, Renderer2, MessagerService, LocaleService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 1).overflow; var currVal_2 = ɵnov(_v, 1).height; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
            var EnumEditorComponentNgFactory = ɵccf("farris-enum-editor", EnumEditorComponent, View_EnumEditorComponent_Host_0, { data: "data", columns: "columns", textField: "textField", valueField: "valueField", showSortBtns: "showSortBtns" }, { dataChange: "dataChange" }, []);
            var styles_EnumEditorFooterComponent = [];
            var RenderType_EnumEditorFooterComponent = ɵcrt({ encapsulation: 2, styles: styles_EnumEditorFooterComponent, data: {} });
            function View_EnumEditorFooterComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 16, null, null, null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 3, "button", [["class", "k-button k-button-icontext k-flat "], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (_co.onMoveTop() !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), (_l()(), ɵeld(2, 0, null, null, 0, "span", [["class", "k-icon k-i-arrow-end-up"]], null, null, null, null, null)), (_l()(), ɵted(3, null, [" ", ""])), ɵppd(4, 1), (_l()(), ɵeld(5, 0, null, null, 3, "button", [["class", "k-button k-button-icontext k-flat "], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (_co.onMovePrev() !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), (_l()(), ɵeld(6, 0, null, null, 0, "span", [["class", "k-icon k-i-arrow-60-up"]], null, null, null, null, null)), (_l()(), ɵted(7, null, [" ", ""])), ɵppd(8, 1), (_l()(), ɵeld(9, 0, null, null, 3, "button", [["class", "k-button k-button-icontext k-flat "], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (_co.onMoveNext() !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), (_l()(), ɵeld(10, 0, null, null, 0, "span", [["class", "k-icon k-i-arrow-60-down"]], null, null, null, null, null)), (_l()(), ɵted(11, null, [" ", ""])), ɵppd(12, 1), (_l()(), ɵeld(13, 0, null, null, 3, "button", [["class", "k-button k-button-icontext k-flat"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (_co.onMoveBottom() !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), (_l()(), ɵeld(14, 0, null, null, 0, "span", [["class", "k-icon k-i-arrow-end-down"]], null, null, null, null, null)), (_l()(), ɵted(15, null, [" ", ""])), ɵppd(16, 1)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.canMoveUp(); _ck(_v, 1, 0, currVal_0); var currVal_1 = ɵunv(_v, 3, 0, _ck(_v, 4, 0, ɵnov(_v.parent, 0), "enumEditor.moveTop")); _ck(_v, 3, 0, currVal_1); var currVal_2 = !_co.canMoveUp(); _ck(_v, 5, 0, currVal_2); var currVal_3 = ɵunv(_v, 7, 0, _ck(_v, 8, 0, ɵnov(_v.parent, 0), "enumEditor.moveUp")); _ck(_v, 7, 0, currVal_3); var currVal_4 = !_co.canMoveDown(); _ck(_v, 9, 0, currVal_4); var currVal_5 = ɵunv(_v, 11, 0, _ck(_v, 12, 0, ɵnov(_v.parent, 0), "enumEditor.moveDown")); _ck(_v, 11, 0, currVal_5); var currVal_6 = !_co.canMoveDown(); _ck(_v, 13, 0, currVal_6); var currVal_7 = ɵunv(_v, 15, 0, _ck(_v, 16, 0, ɵnov(_v.parent, 0), "enumEditor.moveBottom")); _ck(_v, 15, 0, currVal_7); }); }
            function View_EnumEditorFooterComponent_0(_l) { return ɵvid(0, [ɵpid(0, FarrisLocalePipe, [LocaleService]), (_l()(), ɵeld(1, 0, null, null, 10, "div", [["class", "footer-container"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 3, "button", [["class", "k-button k-button-icontext k-flat "], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (_co.onAddFilter() !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), (_l()(), ɵeld(3, 0, null, null, 0, "span", [["class", "k-icon k-i-add"]], null, null, null, null, null)), (_l()(), ɵted(4, null, [" ", ""])), ɵppd(5, 1), (_l()(), ɵeld(6, 0, null, null, 3, "button", [["class", "k-button k-button-icontext k-flat "], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (_co.onClear() !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), (_l()(), ɵeld(7, 0, null, null, 0, "span", [["class", "k-icon k-i-delete"]], null, null, null, null, null)), (_l()(), ɵted(8, null, [" ", ""])), ɵppd(9, 1), (_l()(), ɵand(16777216, null, null, 1, null, View_EnumEditorFooterComponent_1)), ɵdid(11, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.showSortBtns; _ck(_v, 11, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ɵunv(_v, 4, 0, _ck(_v, 5, 0, ɵnov(_v, 0), "enumEditor.addWhere")); _ck(_v, 4, 0, currVal_0); var currVal_1 = !_co.grid.data.length; _ck(_v, 6, 0, currVal_1); var currVal_2 = ɵunv(_v, 8, 0, _ck(_v, 9, 0, ɵnov(_v, 0), "enumEditor.clear")); _ck(_v, 8, 0, currVal_2); }); }
            function View_EnumEditorFooterComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "enum-editor-footer", [], [[8, "className", 0]], null, null, View_EnumEditorFooterComponent_0, RenderType_EnumEditorFooterComponent)), ɵdid(1, 114688, null, 0, EnumEditorFooterComponent, [EnumEditorComponent], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; _ck(_v, 0, 0, currVal_0); }); }
            var EnumEditorFooterComponentNgFactory = ɵccf("enum-editor-footer", EnumEditorFooterComponent, View_EnumEditorFooterComponent_Host_0, { showSortBtns: "showSortBtns" }, { addFilter: "addFilter", clearFilter: "clearFilter", moveTop: "moveTop", movePrev: "movePrev", moveNext: "moveNext", moveBottom: "moveBottom" }, []);
            var styles_EnumEditorInputComponent = [];
            var RenderType_EnumEditorInputComponent = ɵcrt({ encapsulation: 2, styles: styles_EnumEditorInputComponent, data: {} });
            function View_EnumEditorInputComponent_0(_l) { return ɵvid(0, [ɵqud(402653184, 1, { content: 0 }), ɵqud(402653184, 2, { inputGroupRef: 0 }), (_l()(), ɵeld(2, 0, null, null, 2, "input-group", [["style", "width: 100%"]], [[2, "f-cmp-inputgroup", null]], [[null, "clear"], [null, "clickHandle"], [null, "valueChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("clear" === en)) {
                    var pd_0 = (_co.onClear($event) !== false);
                    ad = (pd_0 && ad);
                } if (("clickHandle" === en)) {
                    var pd_1 = (_co.showDialog() !== false);
                    ad = (pd_1 && ad);
                } if (("valueChange" === en)) {
                    var pd_2 = ((_co.value = $event) !== false);
                    ad = (pd_2 && ad);
                } return ad; }, View_InputGroupComponent_0, RenderType_InputGroupComponent)), ɵprd(5120, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [InputGroupComponent]), ɵdid(4, 4833280, [[2, 4], ["ig", 4]], 0, InputGroupComponent, [ElementRef, Renderer2, NgZone, Injector], { value: [0, "value"], readonly: [1, "readonly"], editable: [2, "editable"], enableClear: [3, "enableClear"], groupText: [4, "groupText"] }, { clear: "clear", valueChange: "valueChange", clickHandle: "clickHandle" })], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.value; var currVal_2 = _co.readonly; var currVal_3 = _co.editable; var currVal_4 = _co.enableClear; var currVal_5 = _co.groupIcon; _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 4).autocomplete; _ck(_v, 2, 0, currVal_0); }); }
            function View_EnumEditorInputComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 3, "enum-editor-input", [], [[8, "className", 0]], null, null, View_EnumEditorInputComponent_0, RenderType_EnumEditorInputComponent)), ɵprd(5120, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [EnumEditorInputComponent]), ɵprd(512, null, EnumEditorService, EnumEditorService, [Injector, ComponentFactoryResolver, BsModalService, LocaleService]), ɵdid(3, 8634368, null, 0, EnumEditorInputComponent, [Injector, EnumEditorService, ElementRef], null, null)], function (_ck, _v) { _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 3).hostCls; _ck(_v, 0, 0, currVal_0); }); }
            var EnumEditorInputComponentNgFactory = ɵccf("enum-editor-input", EnumEditorInputComponent, View_EnumEditorInputComponent_Host_0, { dialogWidth: "dialogWidth", dialogHeight: "dialogHeight", title: "title", buttonAlign: "buttonAlign", buttonsRef: "buttonsRef", showButtons: "showButtons", showCloseButton: "showCloseButton", showMaxButton: "showMaxButton", resizable: "resizable", draggable: "draggable", disabled: "disabled", editable: "editable", readonly: "readonly", mapFields: "mapFields", valueField: "valueField", textField: "textField", displayText: "displayText", context: "context", beforeOpen: "beforeOpen", beforeClose: "beforeClose", dictPicking: "dictPicking", dictPicked: "dictPicked", value: "value", outType: "outType", enableClear: "enableClear" }, { dialogOpened: "dialogOpened", dialogClosed: "dialogClosed", dialogMaxed: "dialogMaxed", resizing: "resizing", resized: "resized", valueChange: "valueChange" }, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles = [""];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles$1 = [""];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_PlandetailsComponent = [styles$1];
            var RenderType_PlandetailsComponent = ɵcrt({ encapsulation: 0, styles: styles_PlandetailsComponent, data: {} });
            function View_PlandetailsComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "farris-datagrid", [["class", "f-component-grid f-utils-fill"], ["datagridRef", ""], ["farris-grid-end-edit", ""], ["farris-remote-summary-command", ""], ["farris-use-binding-data", ""], ["id", "dataGrid_plandetails"]], [[4, "position", null], [2, "f-datagrid-full", null], [2, "f-datagrid-auto-height", null]], [[null, "click"], [null, "pageChanged"], [null, "selectChanged"], [null, "unSelect"], [null, "checkedChange"], [null, "pageSizeChanged"], [null, "scrollYLoad"], [null, "filterChanged"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
                    var pd_0 = (ɵnov(_v, 4).onClick($event) !== false);
                    ad = (pd_0 && ad);
                } if (("pageChanged" === en)) {
                    var pd_1 = (ɵnov(_v, 6).pageChangedHandler($event) !== false);
                    ad = (pd_1 && ad);
                } if (("selectChanged" === en)) {
                    var pd_2 = (ɵnov(_v, 6).selectedRowChanged($event) !== false);
                    ad = (pd_2 && ad);
                } if (("unSelect" === en)) {
                    var pd_3 = (ɵnov(_v, 6).unSelected($event) !== false);
                    ad = (pd_3 && ad);
                } if (("checkedChange" === en)) {
                    var pd_4 = (ɵnov(_v, 6).checkedChanged($event) !== false);
                    ad = (pd_4 && ad);
                } if (("pageSizeChanged" === en)) {
                    var pd_5 = (ɵnov(_v, 6).pageSizeChanged($event) !== false);
                    ad = (pd_5 && ad);
                } if (("scrollYLoad" === en)) {
                    var pd_6 = (ɵnov(_v, 6).scrollY($event) !== false);
                    ad = (pd_6 && ad);
                } if (("filterChanged" === en)) {
                    var pd_7 = (ɵnov(_v, 6).filterChanged($event) !== false);
                    ad = (pd_7 && ad);
                } return ad; }, View_DatagridComponent_0, RenderType_DatagridComponent)), ɵprd(4608, null, DatagridSmartFilterService, DatagridSmartFilterService, []), ɵprd(512, null, DatagridFacadeService, DatagridFacadeService, [HttpClient]), ɵprd(512, null, DatagridService, DatagridService, []), ɵdid(4, 6275072, [[1, 4], ["dataGrid_plandetailsDataGrid", 4]], 1, DatagridComponent, [ChangeDetectorRef, ElementRef, Injector, NgZone, DatagridFacadeService, DatagridService, ApplicationRef, DomSanitizer, Renderer2], { id: [0, "id"], autoHeight: [1, "autoHeight"], showBorder: [2, "showBorder"], striped: [3, "striped"], headerWrap: [4, "headerWrap"], showFooter: [5, "showFooter"], footerHeight: [6, "footerHeight"], footerDataFrom: [7, "footerDataFrom"], footerPosition: [8, "footerPosition"], rowHeight: [9, "rowHeight"], fit: [10, "fit"], fitColumns: [11, "fitColumns"], autoFitColumns: [12, "autoFitColumns"], scrollBarShowMode: [13, "scrollBarShowMode"], showLineNumber: [14, "showLineNumber"], lineNumberTitle: [15, "lineNumberTitle"], lineNumberWidth: [16, "lineNumberWidth"], lockPagination: [17, "lockPagination"], showPageList: [18, "showPageList"], showGotoInput: [19, "showGotoInput"], multiSelect: [20, "multiSelect"], showCheckbox: [21, "showCheckbox"], showAllCheckbox: [22, "showAllCheckbox"], checkOnSelect: [23, "checkOnSelect"], selectOnCheck: [24, "selectOnCheck"], selectionMode: [25, "selectionMode"], keepSelect: [26, "keepSelect"], fields: [27, "fields"], nowrap: [28, "nowrap"], virtualized: [29, "virtualized"], virtualizedAsyncLoad: [30, "virtualizedAsyncLoad"], editMode: [31, "editMode"], enableEditCellStyle: [32, "enableEditCellStyle"], selectOnEditing: [33, "selectOnEditing"], enableDragColumn: [34, "enableDragColumn"], groupSummaryPosition: [35, "groupSummaryPosition"], showGroupColumn: [36, "showGroupColumn"], showRowGroupPanel: [37, "showRowGroupPanel"], AutoColumnWidthUseDblclick: [38, "AutoColumnWidthUseDblclick"], mergeCell: [39, "mergeCell"], enableSimpleMode: [40, "enableSimpleMode"], enableScheme: [41, "enableScheme"], clearSelectionsWhenDataIsEmpty: [42, "clearSelectionsWhenDataIsEmpty"], enableContextMenu: [43, "enableContextMenu"], enableHighlightCell: [44, "enableHighlightCell"] }, { pageSizeChanged: "pageSizeChanged", pageChanged: "pageChanged", filterChanged: "filterChanged", selectChanged: "selectChanged", unSelect: "unSelect", scrollYLoad: "scrollYLoad", checkedChange: "checkedChange" }), ɵqud(603979776, 2, { dgColumns: 1 }), ɵdid(6, 737280, null, 0, FarrisDatagridUseBindingDataDirective, [BindingData, ViewModel, DatagridComponent], null, null), ɵdid(7, 737280, null, 0, EditableDirective, [BindingData, ViewModel, DatagridComponent, DateTimeHelperService, Injector, RuntimeStateService, DialogService, NgZone], { gridEditable: [0, "gridEditable"], disableGroupOnEditing: [1, "disableGroupOnEditing"] }, null), ɵdid(8, 147456, null, 0, FarrisDataGridEndEditDirective, [AppContext, DatagridComponent], null, null), ɵdid(9, 16384, null, 0, FarrisDataGridRemoteSummaryDirective, [ViewModel, DatagridComponent], { remoteSummaryCommand: [0, "remoteSummaryCommand"] }, null), ɵdid(10, 212992, null, 0, DatagridComponentRefDirective, [Injector, DatagridComponent, ElementRef, FrameContext], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = "dataGrid_plandetails"; var currVal_4 = false; var currVal_5 = false; var currVal_6 = true; var currVal_7 = false; var currVal_8 = true; var currVal_9 = 29; var currVal_10 = "client"; var currVal_11 = "bottom"; var currVal_12 = 30; var currVal_13 = true; var currVal_14 = true; var currVal_15 = true; var currVal_16 = "auto"; var currVal_17 = false; var currVal_18 = _co.dataGrid_plandetailslineNumberTitle; var currVal_19 = 36; var currVal_20 = (_co.viewModel.stateMachine && _co.viewModel.stateMachine["editable"]); var currVal_21 = false; var currVal_22 = false; var currVal_23 = true; var currVal_24 = true; var currVal_25 = true; var currVal_26 = false; var currVal_27 = false; var currVal_28 = "default"; var currVal_29 = true; var currVal_30 = _co.viewModel.dataGrid_plandetailsColumns; var currVal_31 = true; var currVal_32 = false; var currVal_33 = false; var currVal_34 = "cell"; var currVal_35 = false; var currVal_36 = false; var currVal_37 = false; var currVal_38 = "groupFooterRow"; var currVal_39 = true; var currVal_40 = false; var currVal_41 = true; var currVal_42 = false; var currVal_43 = false; var currVal_44 = false; var currVal_45 = true; var currVal_46 = false; var currVal_47 = false; _ck(_v, 4, 1, [currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47]); _ck(_v, 6, 0); var currVal_48 = _co.viewModel.stateMachine["editable"]; var currVal_49 = true; _ck(_v, 7, 0, currVal_48, currVal_49); var currVal_50 = ""; _ck(_v, 9, 0, currVal_50); _ck(_v, 10, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 4).pos; var currVal_1 = ɵnov(_v, 4).hostCls; var currVal_2 = ɵnov(_v, 4).autoHeightCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
            function View_PlandetailsComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 3, "div", [["class", "f-grid-is-sub f-utils-flex-column"], ["id", "plandetails-component-layout"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 2, "div", [["class", "f-utils-fill"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_PlandetailsComponent_2)), ɵdid(3, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 3, 0, currVal_0); }, null); }
            function View_PlandetailsComponent_0(_l) { return ɵvid(0, [ɵqud(671088640, 1, { dataGrid_plandetailsDataGrid: 0 }), (_l()(), ɵand(16777216, null, null, 1, null, View_PlandetailsComponent_1)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_PlandetailsComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 83, "app-plandetailscomponent", [], [[8, "className", 0]], null, null, View_PlandetailsComponent_0, RenderType_PlandetailsComponent)), ɵprd(4608, null, ViewModel, PlandetailsComponentViewmodel, []), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p1_0, p1_1, p1_2, p2_0, p3_0) { return [new plandetailsAddItem1Handler(p0_0), new plandetailsRemoveItem1Handler(p1_0, p1_1, p1_2), new rootviewmodelInsert1Handler(p2_0), new rootviewmodelAddItem1Handler(p3_0)]; }, [SubListDataService, DataGridService, SubListDataService, ListDataService, SubListDataService, SubListDataService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService$1, DialogService$1, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, GRID_SETTINGS_HTTP, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, Form, PlandetailsComponentViewmodelForm, []), ɵprd(4608, null, UIState, PlandetailsComponentViewmodelUIState, []), ɵprd(4608, null, DataImportExportService, DataImportExportService, [BsModalService, ComponentFactoryResolver, Injector, FrameContext, ɵf, NotifyService, EntityListService, ɵg, DataieHandcraftService, HttpClient, LoadingService, ɵc$1]), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [MaterialPlanRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(80, 4440064, null, 0, PlandetailsComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, CommonUtils, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "plandetails-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 80, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 80).cls; _ck(_v, 0, 0, currVal_0); }); }
            var PlandetailsComponentNgFactory = ɵccf("app-plandetailscomponent", PlandetailsComponent, View_PlandetailsComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles$2 = [""];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_BasicFormComponent = [styles$2];
            var RenderType_BasicFormComponent = ɵcrt({ encapsulation: 0, styles: styles_BasicFormComponent, data: {} });
            function View_BasicFormComponent_4(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_5(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 17, "farris-lookup-grid", [["data-mapping", ""], ["formControlName", "applicant_Applicant_Name"], ["id", "applicant_Applicant_Name_d4373c28_6dic"], ["input-end-edit", ""], ["lookupGridRef", ""]], [[8, "className", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, View_LookupGridComponent_0, RenderType_LookupGridComponent)), ɵprd(4608, null, PersonalConfigService, PersonalConfigService, [IdService]), ɵprd(512, null, LookupDefaultMapping, LookupDefaultMapping, [CommonUtils]), ɵprd(131584, null, ShortcutsService, ShortcutsService, []), ɵprd(512, null, LookupUtils, LookupUtils, [CommonUtils, RuntimeStateService, NgZone]), ɵdid(5, 13352960, [[1, 4], ["applicant_Applicant_Name_d4373c28_6dic", 4]], 0, LookupGridComponent, [Injector, ComponentFactoryResolver, ElementRef, CommonUtils, LookupDefaultMapping, ChangeDetectorRef, ShortcutsService, LookupUtils, NgZone, Renderer2], { title: [0, "title"], showCloseButton: [1, "showCloseButton"], showMaxButton: [2, "showMaxButton"], resizable: [3, "resizable"], editable: [4, "editable"], readonly: [5, "readonly"], mapFields: [6, "mapFields"], valueField: [7, "valueField"], textField: [8, "textField"], context: [9, "context"], viewType: [10, "viewType"], displayType: [11, "displayType"], enableClear: [12, "enableClear"], singleSelect: [13, "singleSelect"], idField: [14, "idField"], uri: [15, "uri"], pagination: [16, "pagination"], pageIndex: [17, "pageIndex"], pageSize: [18, "pageSize"], pageList: [19, "pageList"], nosearch: [20, "nosearch"], cascadeStatus: [21, "cascadeStatus"], placeholder: [22, "placeholder"], useFavorite: [23, "useFavorite"], useTip: [24, "useTip"], isRecordSize: [25, "isRecordSize"], enableToSelect: [26, "enableToSelect"], expandLevel: [27, "expandLevel"], loadTreeDataType: [28, "loadTreeDataType"], loadDataWhenOpen: [29, "loadDataWhenOpen"], selectFirstInNav: [30, "selectFirstInNav"], enableFullTree: [31, "enableFullTree"], useExtendInfo: [32, "useExtendInfo"], quickSelect: [33, "quickSelect"] }, null), ɵpod(6, { "id": 0, "name": 1 }), ɵpod(7, { "enableExtendLoadMethod": 0 }), ɵpad(8, 5), ɵppd(9, 3), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [LookupGridComponent]), ɵdid(11, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(13, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(14, 81920, null, 0, LookupDataMappingDirective, [[2, ViewModel], [6, LookupGridComponent]], null, null), ɵdid(15, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(16, 212992, null, 0, LookupGridComponentRefDirective, [Injector, LookupGridComponent, ElementRef, FrameContext], null, null), ɵdid(17, 4276224, null, 0, ɵa, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.LookupEditapplicantApplicantNamed4373c286dicDialogTitle; var currVal_9 = true; var currVal_10 = true; var currVal_11 = true; var currVal_12 = false; var currVal_13 = true; var currVal_14 = _ck(_v, 6, 0, "applicant.applicant_ID,applicant.applicant", "applicant.applicant_Name"); var currVal_15 = "id"; var currVal_16 = "name"; var currVal_17 = _ck(_v, 7, 0, true); var currVal_18 = "text"; var currVal_19 = "List"; var currVal_20 = true; var currVal_21 = true; var currVal_22 = "id"; var currVal_23 = "MaterialPlan.applicant_Applicant_Name"; var currVal_24 = true; var currVal_25 = 1; var currVal_26 = 20; var currVal_27 = _ck(_v, 8, 0, 10, 20, 30, 50, 100); var currVal_28 = false; var currVal_29 = "enable"; var currVal_30 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 22, _ck(_v, 9, 0, ɵnov(_v.parent.parent.parent.parent, 0), "LookupEdit/applicant_Applicant_Name_d4373c28_6dic/placeHolder", _co.lang, "")), ""); var currVal_31 = true; var currVal_32 = false; var currVal_33 = false; var currVal_34 = true; var currVal_35 = (0 - 1); var currVal_36 = "default"; var currVal_37 = true; var currVal_38 = false; var currVal_39 = false; var currVal_40 = false; var currVal_41 = _co.applicant_Applicant_Name_d4373c28_6dicQuickSelect; _ck(_v, 5, 1, [currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41]); var currVal_42 = "applicant_Applicant_Name"; _ck(_v, 11, 0, currVal_42); _ck(_v, 14, 0); _ck(_v, 15, 0); _ck(_v, 16, 0); var currVal_43 = 0; _ck(_v, 17, 0, currVal_43); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 5).hostCls; var currVal_1 = ɵnov(_v, 13).ngClassUntouched; var currVal_2 = ɵnov(_v, 13).ngClassTouched; var currVal_3 = ɵnov(_v, 13).ngClassPristine; var currVal_4 = ɵnov(_v, 13).ngClassDirty; var currVal_5 = ɵnov(_v, 13).ngClassValid; var currVal_6 = ɵnov(_v, 13).ngClassInvalid; var currVal_7 = ɵnov(_v, 13).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_6(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "applicant_Applicant_Name"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], maxHeight: [1, "maxHeight"], type: [2, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = 500; var currVal_10 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = "applicant_Applicant_Name"; _ck(_v, 3, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_3(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "applicant_Applicant_Name_d4373c28_6dic"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_4)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_5)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_6)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("applicant_Applicant_Name"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "applicant_Applicant_Name_d4373c28_6dic", _co.lang, "\u5236\u5355\u4EBA")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "applicant_Applicant_Name_d4373c28_6dic", _co.lang, "\u5236\u5355\u4EBA")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_8(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_9(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 12, "farris-datepicker", [["datepickerRef", ""], ["formControlName", "deliveryDate"], ["id", "deliveryDate_7be8a928_jelq"], ["input-end-edit", ""]], [[8, "className", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 4).onMouseEnter($event) !== false);
                    ad = (pd_0 && ad);
                } if (("mouseleave" === en)) {
                    var pd_1 = (ɵnov(_v, 4).onMouseLeave($event) !== false);
                    ad = (pd_1 && ad);
                } return ad; }, View_FarrisDatepickerComponent_0, RenderType_FarrisDatepickerComponent)), ɵprd(4608, null, LocaleService, LocaleService, [LOCALE_ID, CommonUtils, [2, FARRIS_LOCAL_CUSTOM_DATA]]), ɵprd(512, null, UtilService, UtilService, []), ɵprd(512, null, DefaultConfigService, DefaultConfigService, []), ɵdid(4, 4964352, [["deliveryDate_7be8a928_jelq", 4]], 0, FarrisDatepickerComponent, [ElementRef, UtilService, DefaultConfigService, Injector], { readonly: [0, "readonly"], editable: [1, "editable"], dateRange: [2, "dateRange"], showTime: [3, "showTime"], showType: [4, "showType"], locale: [5, "locale"], dateFormat: [6, "dateFormat"], useDefault: [7, "useDefault"], returnType: [8, "returnType"], returnFormat: [9, "returnFormat"], placeholder: [10, "placeholder"], minDate: [11, "minDate"], disableDates: [12, "disableDates"], showWeekNumbers: [13, "showWeekNumbers"], dateRangeDatesDelimiter: [14, "dateRangeDatesDelimiter"], shortcuts: [15, "shortcuts"] }, null), ɵppd(5, 3), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [FarrisDatepickerComponent]), ɵdid(7, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(9, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(10, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(11, 212992, null, 0, DatepickerComponentRefDirective, [Injector, FarrisDatepickerComponent, ElementRef, FrameContext], null, null), ɵdid(12, 4276224, null, 0, ɵa, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = !_co.viewModel.stateMachine["editable"]; var currVal_9 = true; var currVal_10 = false; var currVal_11 = true; var currVal_12 = 1; var currVal_13 = "zh-cn"; var currVal_14 = "yyyy-MM-dd HH:mm:ss"; var currVal_15 = false; var currVal_16 = "Date"; var currVal_17 = "yyyy-MM-dd HH:mm:ss"; var currVal_18 = ɵinlineInterpolate(1, "", ɵunv(_v, 4, 10, _ck(_v, 5, 0, ɵnov(_v.parent.parent.parent.parent, 0), "DateBox/deliveryDate_7be8a928_jelq/placeHolder", _co.lang, "")), ""); var currVal_19 = _co.context.appContext.getFrameContext("root-component")["uiState"]["mindate"]; var currVal_20 = ɵEMPTY_ARRAY; var currVal_21 = false; var currVal_22 = "~"; var currVal_23 = ɵEMPTY_ARRAY; _ck(_v, 4, 1, [currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23]); var currVal_24 = "deliveryDate"; _ck(_v, 7, 0, currVal_24); _ck(_v, 10, 0); _ck(_v, 11, 0); var currVal_25 = (0 - 1); _ck(_v, 12, 0, currVal_25); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 4).cls; var currVal_1 = ɵnov(_v, 9).ngClassUntouched; var currVal_2 = ɵnov(_v, 9).ngClassTouched; var currVal_3 = ɵnov(_v, 9).ngClassPristine; var currVal_4 = ɵnov(_v, 9).ngClassDirty; var currVal_5 = ɵnov(_v, 9).ngClassValid; var currVal_6 = ɵnov(_v, 9).ngClassInvalid; var currVal_7 = ɵnov(_v, 9).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_10(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "deliveryDate"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { type: [0, "type"], dateRange: [1, "dateRange"], format: [2, "format"], showTime: [3, "showTime"], dateRangeDelimiter: [4, "dateRangeDelimiter"], showType: [5, "showType"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = "date"; var currVal_9 = false; var currVal_10 = "yyyy-MM-dd HH:mm:ss"; var currVal_11 = true; var currVal_12 = "~"; var currVal_13 = 1; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_14 = "deliveryDate"; _ck(_v, 3, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_7(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "deliveryDate_7be8a928_jelq"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_8)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_9)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_10)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("deliveryDate"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "deliveryDate_7be8a928_jelq", _co.lang, "\u4EA4\u8D27\u65E5\u671F")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "deliveryDate_7be8a928_jelq", _co.lang, "\u4EA4\u8D27\u65E5\u671F")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_12(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_13(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "farris-lookup-grid", [["data-mapping", ""], ["formControlName", "purchaseDept_PurchaseDept_name"], ["id", "purchaseDept_PurchaseDept_name_8d6e8922_yvzr"], ["input-end-edit", ""], ["lookupGridRef", ""]], [[8, "className", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, View_LookupGridComponent_0, RenderType_LookupGridComponent)), ɵprd(4608, null, PersonalConfigService, PersonalConfigService, [IdService]), ɵprd(512, null, LookupDefaultMapping, LookupDefaultMapping, [CommonUtils]), ɵprd(131584, null, ShortcutsService, ShortcutsService, []), ɵprd(512, null, LookupUtils, LookupUtils, [CommonUtils, RuntimeStateService, NgZone]), ɵdid(5, 13352960, [[2, 4], ["purchaseDept_PurchaseDept_name_8d6e8922_yvzr", 4]], 0, LookupGridComponent, [Injector, ComponentFactoryResolver, ElementRef, CommonUtils, LookupDefaultMapping, ChangeDetectorRef, ShortcutsService, LookupUtils, NgZone, Renderer2], { title: [0, "title"], showCloseButton: [1, "showCloseButton"], showMaxButton: [2, "showMaxButton"], resizable: [3, "resizable"], editable: [4, "editable"], readonly: [5, "readonly"], mapFields: [6, "mapFields"], valueField: [7, "valueField"], textField: [8, "textField"], context: [9, "context"], viewType: [10, "viewType"], displayType: [11, "displayType"], enableClear: [12, "enableClear"], singleSelect: [13, "singleSelect"], idField: [14, "idField"], uri: [15, "uri"], pagination: [16, "pagination"], pageIndex: [17, "pageIndex"], pageSize: [18, "pageSize"], pageList: [19, "pageList"], nosearch: [20, "nosearch"], treeInfo: [21, "treeInfo"], cascadeStatus: [22, "cascadeStatus"], placeholder: [23, "placeholder"], useFavorite: [24, "useFavorite"], useTip: [25, "useTip"], isRecordSize: [26, "isRecordSize"], enableToSelect: [27, "enableToSelect"], expandLevel: [28, "expandLevel"], treeTableOptions: [29, "treeTableOptions"], loadTreeDataType: [30, "loadTreeDataType"], loadDataWhenOpen: [31, "loadDataWhenOpen"], selectFirstInNav: [32, "selectFirstInNav"], enableFullTree: [33, "enableFullTree"], useExtendInfo: [34, "useExtendInfo"], quickSelect: [35, "quickSelect"] }, null), ɵpod(6, { "id": 0, "name": 1 }), ɵpod(7, { "enableExtendLoadMethod": 0 }), ɵpad(8, 5), ɵpod(9, { "onlySelectLeaf": 0 }), ɵppd(10, 3), ɵpod(11, { "enableContextMenu": 0 }), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [LookupGridComponent]), ɵdid(13, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(15, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(16, 81920, null, 0, LookupDataMappingDirective, [[2, ViewModel], [6, LookupGridComponent]], null, null), ɵdid(17, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(18, 212992, null, 0, LookupGridComponentRefDirective, [Injector, LookupGridComponent, ElementRef, FrameContext], null, null), ɵdid(19, 4276224, null, 0, ɵa, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.LookupEditpurchaseDeptPurchaseDeptname8d6e8922yvzrDialogTitle; var currVal_9 = true; var currVal_10 = true; var currVal_11 = true; var currVal_12 = false; var currVal_13 = !_co.viewModel.stateMachine["editable"]; var currVal_14 = _ck(_v, 6, 0, "purchaseDept.purchaseDept,purchaseDept.purchaseDept_ID", "purchaseDept.purchaseDept_name"); var currVal_15 = "id"; var currVal_16 = "name"; var currVal_17 = _ck(_v, 7, 0, true); var currVal_18 = "text"; var currVal_19 = "TreeList"; var currVal_20 = true; var currVal_21 = true; var currVal_22 = "id"; var currVal_23 = "MaterialPlan.purchaseDept_PurchaseDept_name"; var currVal_24 = true; var currVal_25 = 1; var currVal_26 = 20; var currVal_27 = _ck(_v, 8, 0, 10, 20, 30, 50, 100); var currVal_28 = false; var currVal_29 = _ck(_v, 9, 0, "default"); var currVal_30 = "enable"; var currVal_31 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 23, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent, 0), "LookupEdit/purchaseDept_PurchaseDept_name_8d6e8922_yvzr/placeHolder", _co.lang, "")), ""); var currVal_32 = true; var currVal_33 = false; var currVal_34 = false; var currVal_35 = true; var currVal_36 = (0 - 1); var currVal_37 = _ck(_v, 11, 0, false); var currVal_38 = "default"; var currVal_39 = true; var currVal_40 = false; var currVal_41 = false; var currVal_42 = false; var currVal_43 = _co.purchaseDept_PurchaseDept_name_8d6e8922_yvzrQuickSelect; _ck(_v, 5, 1, [currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43]); var currVal_44 = "purchaseDept_PurchaseDept_name"; _ck(_v, 13, 0, currVal_44); _ck(_v, 16, 0); _ck(_v, 17, 0); _ck(_v, 18, 0); var currVal_45 = 0; _ck(_v, 19, 0, currVal_45); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 5).hostCls; var currVal_1 = ɵnov(_v, 15).ngClassUntouched; var currVal_2 = ɵnov(_v, 15).ngClassTouched; var currVal_3 = ɵnov(_v, 15).ngClassPristine; var currVal_4 = ɵnov(_v, 15).ngClassDirty; var currVal_5 = ɵnov(_v, 15).ngClassValid; var currVal_6 = ɵnov(_v, 15).ngClassInvalid; var currVal_7 = ɵnov(_v, 15).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_14(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "purchaseDept_PurchaseDept_name"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], maxHeight: [1, "maxHeight"], type: [2, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = 500; var currVal_10 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = "purchaseDept_PurchaseDept_name"; _ck(_v, 3, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_11(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "purchaseDept_PurchaseDept_name_8d6e8922_yvzr"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_12)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_13)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_14)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = true; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("purchaseDept_PurchaseDept_name"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "purchaseDept_PurchaseDept_name_8d6e8922_yvzr", _co.lang, "\u91C7\u8D2D\u90E8\u95E8")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "purchaseDept_PurchaseDept_name_8d6e8922_yvzr", _co.lang, "\u91C7\u8D2D\u90E8\u95E8")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_16(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_17(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "planCode"], ["id", "planCode_7b926633_5dke"], ["input-end-edit", ""], ["maxlength", "100"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 1)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "100"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "planCode"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = true; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent, 0), "TextBox/planCode_7b926633_5dke/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_BasicFormComponent_18(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "planCode"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { type: [0, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = "string"; _ck(_v, 1, 0, currVal_8); var currVal_9 = "planCode"; _ck(_v, 3, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_15(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "planCode_7b926633_5dke"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_16)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_17)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_18)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("planCode"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "planCode_7b926633_5dke", _co.lang, "\u8BA1\u5212\u7F16\u53F7")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "planCode_7b926633_5dke", _co.lang, "\u8BA1\u5212\u7F16\u53F7")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_20(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_21(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "planName"], ["id", "planName_fbe5d590_15n2"], ["input-end-edit", ""], ["maxlength", "100"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 1)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "100"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "planName"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent, 0), "TextBox/planName_fbe5d590_15n2/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_BasicFormComponent_22(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "planName"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { type: [0, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = "string"; _ck(_v, 1, 0, currVal_8); var currVal_9 = "planName"; _ck(_v, 3, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_19(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "planName_fbe5d590_15n2"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_20)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_21)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_22)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("planName"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "planName_fbe5d590_15n2", _co.lang, "\u8BA1\u5212\u540D\u79F0")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "planName_fbe5d590_15n2", _co.lang, "\u8BA1\u5212\u540D\u79F0")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_24(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_23(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 23, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 22, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 21, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "isPurchaseOrder_51920336_9xj5"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_24)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 11, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(13, 0, null, null, 7, "farris-switch", [["formControlName", "isPurchaseOrder"], ["id", "isPurchaseOrder_51920336_9xj5"], ["input-end-edit", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "click"], [null, "keydown.Space"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
                    var pd_0 = (ɵnov(_v, 14).onToggle($event) !== false);
                    ad = (pd_0 && ad);
                } if (("keydown.Space" === en)) {
                    var pd_1 = (ɵnov(_v, 14).onSpaceHandle($event) !== false);
                    ad = (pd_1 && ad);
                } return ad; }, View_SwitchComponent_0, RenderType_SwitchComponent)), ɵdid(14, 180224, null, 0, SwitchComponent, [[2, SWITCH_OPTIONS], ChangeDetectorRef, Injector], { editable: [0, "editable"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [SwitchComponent]), ɵdid(16, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(18, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(19, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(20, 4276224, null, 0, ɵa, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null), (_l()(), ɵeld(21, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(22, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(23, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_12 = !true; _ck(_v, 14, 0, currVal_12); var currVal_13 = "isPurchaseOrder"; _ck(_v, 16, 0, currVal_13); _ck(_v, 19, 0); var currVal_14 = 0; _ck(_v, 20, 0, currVal_14); var currVal_16 = _co.viewModel.form.getCardControlErrors("isPurchaseOrder"); _ck(_v, 22, 0, currVal_16); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "isPurchaseOrder_51920336_9xj5", _co.lang, "\u662F\u5426\u5DF2\u751F\u6210\u91C7\u8D2D\u8BA2\u5355")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "isPurchaseOrder_51920336_9xj5", _co.lang, "\u662F\u5426\u5DF2\u751F\u6210\u91C7\u8D2D\u8BA2\u5355")); _ck(_v, 10, 0, currVal_4); var currVal_5 = ɵnov(_v, 18).ngClassUntouched; var currVal_6 = ɵnov(_v, 18).ngClassTouched; var currVal_7 = ɵnov(_v, 18).ngClassPristine; var currVal_8 = ɵnov(_v, 18).ngClassDirty; var currVal_9 = ɵnov(_v, 18).ngClassValid; var currVal_10 = ɵnov(_v, 18).ngClassInvalid; var currVal_11 = ɵnov(_v, 18).ngClassPending; _ck(_v, 13, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_15 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 21, 0, currVal_15); }); }
            function View_BasicFormComponent_26(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_27(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 9, "farris-number-spinner", [["formControlName", "totalPrice"], ["id", "totalPrice_1c1f8bdb_p30m"], ["input-end-edit", ""], ["numberSpinnerRef", ""]], [[2, "f-cmp-number-spinner", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, View_NumberSpinnerComponent_0, RenderType_NumberSpinnerComponent)), ɵdid(1, 4964352, null, 0, NumberSpinnerComponent, [ElementRef, Renderer2, Injector], { readonly: [0, "readonly"], placeholder: [1, "placeholder"], step: [2, "step"], bigNumber: [3, "bigNumber"], showButton: [4, "showButton"], useThousands: [5, "useThousands"], textAlign: [6, "textAlign"], canNull: [7, "canNull"], precision: [8, "precision"], showZero: [9, "showZero"] }, null), ɵppd(2, 3), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [NumberSpinnerComponent]), ɵdid(4, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(6, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(7, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(8, 4407296, null, 0, NumberSpinnerComponentRefDirective, [Injector, NumberSpinnerComponent, ElementRef, FrameContext], null, null), ɵdid(9, 4276224, null, 0, ɵa, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = true; var currVal_9 = ɵinlineInterpolate(1, "", ɵunv(_v, 1, 1, _ck(_v, 2, 0, ɵnov(_v.parent.parent.parent.parent, 0), "NumberSpinner/totalPrice_1c1f8bdb_p30m/placeHolder", _co.lang, "")), ""); var currVal_10 = 1; var currVal_11 = false; var currVal_12 = true; var currVal_13 = true; var currVal_14 = "left"; var currVal_15 = true; var currVal_16 = 2; var currVal_17 = true; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17); var currVal_18 = "totalPrice"; _ck(_v, 4, 0, currVal_18); _ck(_v, 7, 0); _ck(_v, 8, 0); var currVal_19 = (0 - 1); _ck(_v, 9, 0, currVal_19); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).hostClass; var currVal_1 = ɵnov(_v, 6).ngClassUntouched; var currVal_2 = ɵnov(_v, 6).ngClassTouched; var currVal_3 = ɵnov(_v, 6).ngClassPristine; var currVal_4 = ɵnov(_v, 6).ngClassDirty; var currVal_5 = ɵnov(_v, 6).ngClassValid; var currVal_6 = ɵnov(_v, 6).ngClassInvalid; var currVal_7 = ɵnov(_v, 6).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_28(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "totalPrice"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { type: [0, "type"], textAlign: [1, "textAlign"], option: [2, "option"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = "number"; var currVal_9 = "left"; var currVal_10 = _co.totalPrice1c1f8bdbP30mTextOptions; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = "totalPrice"; _ck(_v, 3, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_25(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "totalPrice_1c1f8bdb_p30m"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_26)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_27)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_28)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("totalPrice"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "totalPrice_1c1f8bdb_p30m", _co.lang, "\u7269\u6599\u603B\u4EF7")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "totalPrice_1c1f8bdb_p30m", _co.lang, "\u7269\u6599\u603B\u4EF7")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_30(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_31(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 17, "farris-lookup-grid", [["data-mapping", ""], ["formControlName", "purchaser_Purchaser_Name"], ["id", "purchaser_Purchaser_Name_55f1e399_hz5j"], ["input-end-edit", ""], ["lookupGridRef", ""]], [[8, "className", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, View_LookupGridComponent_0, RenderType_LookupGridComponent)), ɵprd(4608, null, PersonalConfigService, PersonalConfigService, [IdService]), ɵprd(512, null, LookupDefaultMapping, LookupDefaultMapping, [CommonUtils]), ɵprd(131584, null, ShortcutsService, ShortcutsService, []), ɵprd(512, null, LookupUtils, LookupUtils, [CommonUtils, RuntimeStateService, NgZone]), ɵdid(5, 13352960, [[3, 4], ["purchaser_Purchaser_Name_55f1e399_hz5j", 4]], 0, LookupGridComponent, [Injector, ComponentFactoryResolver, ElementRef, CommonUtils, LookupDefaultMapping, ChangeDetectorRef, ShortcutsService, LookupUtils, NgZone, Renderer2], { title: [0, "title"], showCloseButton: [1, "showCloseButton"], showMaxButton: [2, "showMaxButton"], resizable: [3, "resizable"], editable: [4, "editable"], readonly: [5, "readonly"], mapFields: [6, "mapFields"], valueField: [7, "valueField"], textField: [8, "textField"], context: [9, "context"], viewType: [10, "viewType"], displayType: [11, "displayType"], enableClear: [12, "enableClear"], singleSelect: [13, "singleSelect"], idField: [14, "idField"], uri: [15, "uri"], pagination: [16, "pagination"], pageIndex: [17, "pageIndex"], pageSize: [18, "pageSize"], pageList: [19, "pageList"], nosearch: [20, "nosearch"], cascadeStatus: [21, "cascadeStatus"], placeholder: [22, "placeholder"], useFavorite: [23, "useFavorite"], useTip: [24, "useTip"], isRecordSize: [25, "isRecordSize"], enableToSelect: [26, "enableToSelect"], expandLevel: [27, "expandLevel"], loadTreeDataType: [28, "loadTreeDataType"], loadDataWhenOpen: [29, "loadDataWhenOpen"], selectFirstInNav: [30, "selectFirstInNav"], enableFullTree: [31, "enableFullTree"], useExtendInfo: [32, "useExtendInfo"], quickSelect: [33, "quickSelect"] }, null), ɵpod(6, { "id": 0, "name": 1 }), ɵpod(7, { "enableExtendLoadMethod": 0 }), ɵpad(8, 5), ɵppd(9, 3), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [LookupGridComponent]), ɵdid(11, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(13, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(14, 81920, null, 0, LookupDataMappingDirective, [[2, ViewModel], [6, LookupGridComponent]], null, null), ɵdid(15, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(16, 212992, null, 0, LookupGridComponentRefDirective, [Injector, LookupGridComponent, ElementRef, FrameContext], null, null), ɵdid(17, 4276224, null, 0, ɵa, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.LookupEditpurchaserPurchaserName55f1e399hz5jDialogTitle; var currVal_9 = true; var currVal_10 = true; var currVal_11 = true; var currVal_12 = false; var currVal_13 = !_co.viewModel.stateMachine["editable"]; var currVal_14 = _ck(_v, 6, 0, "purchaser.purchaser,purchaser.purchaser_ID", "purchaser.purchaser_Name"); var currVal_15 = "id"; var currVal_16 = "name"; var currVal_17 = _ck(_v, 7, 0, true); var currVal_18 = "text"; var currVal_19 = "List"; var currVal_20 = true; var currVal_21 = true; var currVal_22 = "id"; var currVal_23 = "MaterialPlan.purchaser_Purchaser_Name"; var currVal_24 = true; var currVal_25 = 1; var currVal_26 = 20; var currVal_27 = _ck(_v, 8, 0, 10, 20, 30, 50, 100); var currVal_28 = false; var currVal_29 = "enable"; var currVal_30 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 22, _ck(_v, 9, 0, ɵnov(_v.parent.parent.parent.parent, 0), "LookupEdit/purchaser_Purchaser_Name_55f1e399_hz5j/placeHolder", _co.lang, "")), ""); var currVal_31 = true; var currVal_32 = false; var currVal_33 = false; var currVal_34 = true; var currVal_35 = (0 - 1); var currVal_36 = "default"; var currVal_37 = true; var currVal_38 = false; var currVal_39 = false; var currVal_40 = false; var currVal_41 = _co.purchaser_Purchaser_Name_55f1e399_hz5jQuickSelect; _ck(_v, 5, 1, [currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41]); var currVal_42 = "purchaser_Purchaser_Name"; _ck(_v, 11, 0, currVal_42); _ck(_v, 14, 0); _ck(_v, 15, 0); _ck(_v, 16, 0); var currVal_43 = 0; _ck(_v, 17, 0, currVal_43); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 5).hostCls; var currVal_1 = ɵnov(_v, 13).ngClassUntouched; var currVal_2 = ɵnov(_v, 13).ngClassTouched; var currVal_3 = ɵnov(_v, 13).ngClassPristine; var currVal_4 = ɵnov(_v, 13).ngClassDirty; var currVal_5 = ɵnov(_v, 13).ngClassValid; var currVal_6 = ɵnov(_v, 13).ngClassInvalid; var currVal_7 = ɵnov(_v, 13).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_32(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "purchaser_Purchaser_Name"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], maxHeight: [1, "maxHeight"], type: [2, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = 500; var currVal_10 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = "purchaser_Purchaser_Name"; _ck(_v, 3, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_29(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "purchaser_Purchaser_Name_55f1e399_hz5j"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_30)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_31)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_32)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = true; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("purchaser_Purchaser_Name"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "purchaser_Purchaser_Name_55f1e399_hz5j", _co.lang, "\u91C7\u8D2D\u5458")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "purchaser_Purchaser_Name_55f1e399_hz5j", _co.lang, "\u91C7\u8D2D\u5458")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "f-form-layout farris-form farris-form-controls-inline"], ["id", "basic-form-layout"]], [[2, "farris-form-controls-inline", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
                    var pd_0 = (ɵnov(_v, 1).onSubmit($event) !== false);
                    ad = (pd_0 && ad);
                } if (("reset" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onReset() !== false);
                    ad = (pd_1 && ad);
                } return ad; }, null, null)), ɵdid(1, 540672, null, 0, FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, null), ɵprd(2048, null, ControlContainer, null, [FormGroupDirective]), ɵdid(3, 16384, null, 0, NgControlStatusGroup, [[4, ControlContainer]], null, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_3)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_7)), ɵdid(7, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_11)), ɵdid(9, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_15)), ɵdid(11, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_19)), ɵdid(13, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_23)), ɵdid(15, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_25)), ɵdid(17, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_29)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.viewModel.form; _ck(_v, 1, 0, currVal_8); var currVal_9 = true; _ck(_v, 5, 0, currVal_9); var currVal_10 = true; _ck(_v, 7, 0, currVal_10); var currVal_11 = true; _ck(_v, 9, 0, currVal_11); var currVal_12 = true; _ck(_v, 11, 0, currVal_12); var currVal_13 = true; _ck(_v, 13, 0, currVal_13); var currVal_14 = true; _ck(_v, 15, 0, currVal_14); var currVal_15 = true; _ck(_v, 17, 0, currVal_15); var currVal_16 = true; _ck(_v, 19, 0, currVal_16); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.lang === "zh-CHS") || (_co.lang === "zh-CHT")); var currVal_1 = ɵnov(_v, 3).ngClassUntouched; var currVal_2 = ɵnov(_v, 3).ngClassTouched; var currVal_3 = ɵnov(_v, 3).ngClassPristine; var currVal_4 = ɵnov(_v, 3).ngClassDirty; var currVal_5 = ɵnov(_v, 3).ngClassValid; var currVal_6 = ɵnov(_v, 3).ngClassInvalid; var currVal_7 = ɵnov(_v, 3).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 11, "farris-section", [["class", "f-section-form f-section-in-mainsubcard"], ["id", "basic-form-section"], ["sectionRef", ""]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent)), ɵdid(1, 245760, null, 7, FarrisSectionComponent, [[2, Injector]], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], enableAccordion: [4, "enableAccordion"], fill: [5, "fill"], expandStatus: [6, "expandStatus"], index: [7, "index"] }, null), ɵqud(335544320, 4, { headerDirective: 0 }), ɵqud(335544320, 5, { headerTitleDirective: 0 }), ɵqud(335544320, 6, { headerContentDirective: 0 }), ɵqud(335544320, 7, { headerToolbarDirective: 0 }), ɵqud(335544320, 8, { extendDirective: 0 }), ɵqud(335544320, 9, { contentDirective: 0 }), ɵqud(335544320, 10, { viewChangeDirective: 0 }), ɵdid(9, 212992, null, 0, SectionComponentRefDirective, [Injector, FarrisSectionComponent, ElementRef, FrameContext], null, null), (_l()(), ɵand(16777216, null, 0, 1, null, View_BasicFormComponent_2)), ɵdid(11, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectionbasicformsectionMainTitle; var currVal_7 = _co.SectionbasicformsectionSubTitle; var currVal_8 = true; var currVal_9 = false; var currVal_10 = "default"; var currVal_11 = false; var currVal_12 = true; var currVal_13 = _co.index; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); _ck(_v, 9, 0); var currVal_14 = true; _ck(_v, 11, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).baseCls; var currVal_1 = ɵnov(_v, 1).maxStatus; var currVal_2 = ɵnov(_v, 1).fillCls; var currVal_3 = ɵnov(_v, 1).enableAccordionCls; var currVal_4 = ɵnov(_v, 1).enableCollapseCls; var currVal_5 = ɵnov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
            function View_BasicFormComponent_0(_l) { return ɵvid(0, [ɵpid(0, LangPipe, [TranslateService, HttpClient]), ɵqud(671088640, 1, { applicant_Applicant_Name_d4373c28_6dic: 0 }), ɵqud(671088640, 2, { purchaseDept_PurchaseDept_name_8d6e8922_yvzr: 0 }), ɵqud(671088640, 3, { purchaser_Purchaser_Name_55f1e399_hz5j: 0 }), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_1)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 5, 0, currVal_0); }, null); }
            function View_BasicFormComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 81, "app-basicformcomponent", [], [[8, "className", 0]], null, null, View_BasicFormComponent_0, RenderType_BasicFormComponent)), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, ViewModel, BasicFormViewmodel, []), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService$1, DialogService$1, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, BasicFormViewmodelForm, []), ɵprd(4608, null, UIState, BasicFormViewmodelUIState, []), ɵprd(4608, null, DataImportExportService, DataImportExportService, [BsModalService, ComponentFactoryResolver, Injector, FrameContext, ɵf, NotifyService, EntityListService, ɵg, DataieHandcraftService, HttpClient, LoadingService, ɵc$1]), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [MaterialPlanRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(78, 4440064, null, 0, BasicFormComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, ComponentManagerService, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "basic-form-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 78, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 78).cls; _ck(_v, 0, 0, currVal_0); }); }
            var BasicFormComponentNgFactory = ɵccf("app-basicformcomponent", BasicFormComponent, View_BasicFormComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_RootComponent = [styles];
            var RenderType_RootComponent = ɵcrt({ encapsulation: 0, styles: styles_RootComponent, data: {} });
            function View_RootComponent_4(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 12, "div", [["class", "f-title"], ["id", "header-title-container"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 1, "span", [["class", "f-title-icon f-text-orna-bill"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 0, "i", [["class", "f-icon f-icon-page-title-record"]], null, null, null, null, null)), (_l()(), ɵeld(3, 0, null, null, 2, "h4", [["class", "f-title-text"]], null, null, null, null, null)), (_l()(), ɵted(4, null, ["", ""])), ɵppd(5, 3), (_l()(), ɵeld(6, 0, null, null, 6, "div", [["class", "f-title-pagination"]], null, null, null, null, null)), (_l()(), ɵeld(7, 0, null, null, 2, "span", [["class", "f-icon f-icon-arrow-w"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = ((_co.viewModel.stateMachine["canEdit"] && _co.viewModel.ChangeItem1()) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), ɵdid(8, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(9, { "f-state-disabled": 0 }), (_l()(), ɵeld(10, 0, null, null, 2, "span", [["class", "f-icon f-icon-arrow-e"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = ((_co.viewModel.stateMachine["canEdit"] && _co.viewModel.ChangeItem2()) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), ɵdid(11, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(12, { "f-state-disabled": 0 })], function (_ck, _v) { var _co = _v.component; var currVal_1 = "f-icon f-icon-arrow-w"; var currVal_2 = _ck(_v, 9, 0, !_co.viewModel.stateMachine["canEdit"]); _ck(_v, 8, 0, currVal_1, currVal_2); var currVal_3 = "f-icon f-icon-arrow-e"; var currVal_4 = _ck(_v, 12, 0, !_co.viewModel.stateMachine["canEdit"]); _ck(_v, 11, 0, currVal_3, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ɵunv(_v, 4, 0, _ck(_v, 5, 0, ɵnov(_v.parent.parent.parent.parent, 0), "title", _co.lang, "\u7269\u6599\u9700\u6C42\u8BA1\u5212\u8BE6\u60C5")); _ck(_v, 4, 0, currVal_0); }); }
            function View_RootComponent_5(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "f-response-toolbar", [["class", "col-7 f-toolbar"], ["id", "page-header-toolbar"]], [[2, "f-response-toolbar", null], [2, "position-relative", null]], [[null, "rtClickEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("rtClickEvent" === en)) {
                    var pd_0 = (_co.pageHeaderToolbarClickHandler($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_ResponseToolbarComponent_0, RenderType_ResponseToolbarComponent)), ɵdid(1, 13090816, [["responsebar", 4]], 0, ResponseToolbarComponent, [ElementRef, Renderer2, ChangeDetectorRef, LocaleService], { datas: [0, "datas"], btnState: [1, "btnState"], btnVisible: [2, "btnVisible"], buttonSize: [3, "buttonSize"], popDirection: [4, "popDirection"] }, { rtClickEvent: "rtClickEvent" })], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.pageHeaderToolbarToolbarItems; var currVal_3 = _co.pageHeaderToolbarToolbarItemsStates; var currVal_4 = _co.pageHeaderToolbarToolbarItemsVisibleStates; var currVal_5 = "default"; var currVal_6 = "default"; _ck(_v, 1, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).frtCls; var currVal_1 = ɵnov(_v, 1).prCls; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
            function View_RootComponent_3(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 4, "div", [["class", "f-page-header-base"], ["id", "header-nav"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_4)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_5)), ɵdid(4, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); var currVal_1 = true; _ck(_v, 4, 0, currVal_1); }, null); }
            function View_RootComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 2, "div", [["class", "f-page-header"], ["id", "page-header"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_3)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_RootComponent_11(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 83, "app-plandetailscomponent", [], [[8, "className", 0]], null, null, View_PlandetailsComponent_0, RenderType_PlandetailsComponent)), ɵprd(4608, null, ViewModel, PlandetailsComponentViewmodel, []), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p1_0, p1_1, p1_2, p2_0, p3_0) { return [new plandetailsAddItem1Handler(p0_0), new plandetailsRemoveItem1Handler(p1_0, p1_1, p1_2), new rootviewmodelInsert1Handler(p2_0), new rootviewmodelAddItem1Handler(p3_0)]; }, [SubListDataService, DataGridService, SubListDataService, ListDataService, SubListDataService, SubListDataService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService$1, DialogService$1, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, GRID_SETTINGS_HTTP, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, Form, PlandetailsComponentViewmodelForm, []), ɵprd(4608, null, UIState, PlandetailsComponentViewmodelUIState, []), ɵprd(4608, null, DataImportExportService, DataImportExportService, [BsModalService, ComponentFactoryResolver, Injector, FrameContext, ɵf, NotifyService, EntityListService, ɵg, DataieHandcraftService, HttpClient, LoadingService, ɵc$1]), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [MaterialPlanRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(80, 4440064, null, 0, PlandetailsComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, CommonUtils, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "plandetails-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 80, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 80).cls; _ck(_v, 0, 0, currVal_0); }); }
            function View_RootComponent_10(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 6, "farris-tabs", [["class", "f-component-tabs f-tabs-has-grid"], ["id", "detail-tab"]], null, null, null, View_FarrisTabsComponent_0, RenderType_FarrisTabsComponent)), ɵdid(1, 16498688, null, 0, FarrisTabsComponent, [TabService, ElementRef, Renderer2, ChangeDetectorRef, NgZone], { autoTitleWidth: [0, "autoTitleWidth"], titleLength: [1, "titleLength"], selectId: [2, "selectId"], contentFill: [3, "contentFill"], btnStates: [4, "btnStates"], btnVisible: [5, "btnVisible"], titleWidth: [6, "titleWidth"] }, null), (_l()(), ɵeld(2, 0, null, 0, 4, "farris-tab", [], null, null, null, View_FarrisTabComponent_0, RenderType_FarrisTabComponent)), ɵdid(3, 12697600, null, 2, FarrisTabComponent, [Compiler, ComponentFactoryResolver, Renderer2, ElementRef, ChangeDetectorRef, [2, FarrisTabsComponent]], { show: [0, "show"], id: [1, "id"], title: [2, "title"], removeable: [3, "removeable"], toolbar: [4, "toolbar"] }, null), ɵqud(335544320, 8, { contentTempl: 0 }), ɵqud(335544320, 9, { farrisTabsExtendDirective: 0 }), (_l()(), ɵand(0, [[8, 2], ["content", 2]], null, 0, null, View_RootComponent_11))], function (_ck, _v) { var _co = _v.component; var currVal_0 = false; var currVal_1 = 7; var currVal_2 = "plandetails-tab-page"; var currVal_3 = false; var currVal_4 = _co.tabsToolbarStates; var currVal_5 = _co.tabsToolbarVisibleStates; var currVal_6 = 0; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = true; var currVal_8 = "plandetails-tab-page"; var currVal_9 = _co.plandetailstabpage; var currVal_10 = false; var currVal_11 = _co.plandetailsTabToolbar; _ck(_v, 3, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); }, null); }
            function View_RootComponent_9(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 11, "farris-section", [["class", "f-section-tabs f-section-in-mainsubcard"], ["id", "detail-section"], ["sectionRef", ""]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent)), ɵdid(1, 245760, null, 7, FarrisSectionComponent, [[2, Injector]], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], enableAccordion: [4, "enableAccordion"], fill: [5, "fill"], expandStatus: [6, "expandStatus"], index: [7, "index"] }, null), ɵqud(335544320, 1, { headerDirective: 0 }), ɵqud(335544320, 2, { headerTitleDirective: 0 }), ɵqud(335544320, 3, { headerContentDirective: 0 }), ɵqud(335544320, 4, { headerToolbarDirective: 0 }), ɵqud(335544320, 5, { extendDirective: 0 }), ɵqud(335544320, 6, { contentDirective: 0 }), ɵqud(335544320, 7, { viewChangeDirective: 0 }), ɵdid(9, 212992, null, 0, SectionComponentRefDirective, [Injector, FarrisSectionComponent, ElementRef, FrameContext], null, null), (_l()(), ɵand(16777216, null, 0, 1, null, View_RootComponent_10)), ɵdid(11, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectiondetailsectionMainTitle; var currVal_7 = _co.SectiondetailsectionSubTitle; var currVal_8 = false; var currVal_9 = false; var currVal_10 = "default"; var currVal_11 = false; var currVal_12 = true; var currVal_13 = _co.index; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); _ck(_v, 9, 0); var currVal_14 = true; _ck(_v, 11, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).baseCls; var currVal_1 = ɵnov(_v, 1).maxStatus; var currVal_2 = ɵnov(_v, 1).fillCls; var currVal_3 = ɵnov(_v, 1).enableAccordionCls; var currVal_4 = ɵnov(_v, 1).enableCollapseCls; var currVal_5 = ɵnov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
            function View_RootComponent_8(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 2, "div", [["class", "f-struct-wrapper"], ["id", "detail-container"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_9)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_RootComponent_7(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 84, "div", [["class", "f-struct-like-card"], ["id", "like-card-container"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 81, "app-basicformcomponent", [], [[8, "className", 0]], null, null, View_BasicFormComponent_0, RenderType_BasicFormComponent)), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, ViewModel, BasicFormViewmodel, []), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService$1, DialogService$1, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, BasicFormViewmodelForm, []), ɵprd(4608, null, UIState, BasicFormViewmodelUIState, []), ɵprd(4608, null, DataImportExportService, DataImportExportService, [BsModalService, ComponentFactoryResolver, Injector, FrameContext, ɵf, NotifyService, EntityListService, ɵg, DataieHandcraftService, HttpClient, LoadingService, ɵc$1]), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [MaterialPlanRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(79, 4440064, null, 0, BasicFormComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, ComponentManagerService, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "basic-form-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, []), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_8)), ɵdid(84, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { _ck(_v, 79, 0); var currVal_1 = true; _ck(_v, 84, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 79).cls; _ck(_v, 1, 0, currVal_0); }); }
            function View_RootComponent_6(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 2, "div", [["class", "f-page-main"], ["id", "main-container"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_7)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_RootComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 4, "div", [["class", "f-page f-page-card f-page-is-mainsubcard"], ["id", "root-layout"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_2)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_6)), ɵdid(4, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); var currVal_1 = true; _ck(_v, 4, 0, currVal_1); }, null); }
            function View_RootComponent_0(_l) { return ɵvid(0, [ɵpid(0, LangPipe, [TranslateService, HttpClient]), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_1)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_RootComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 118, "app-rootcomponent", [], [[8, "className", 0]], null, null, View_RootComponent_0, RenderType_RootComponent)), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(135680, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, ViewModel, RootViewmodel, []), ɵprd(135680, null, AppContext, AppContext, [[2, Injector], [2, AppContextManager], [3, AppContext]]), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(135680, null, MaterialPlanRepository, MaterialPlanRepository, [Injector]), ɵprd(6144, null, Repository, null, [MaterialPlanRepository]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, DataImportExportService, DataImportExportService, [BsModalService, ComponentFactoryResolver, Injector, FrameContext, ɵf, NotifyService, EntityListService, ɵg, DataieHandcraftService, HttpClient, LoadingService, ɵc$1]), ɵprd(4608, null, MaterialDetailFrmMinDateService, MaterialDetailFrmMinDateService, [FormMessageService, FrameContext, BindingData]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p1_0, p1_1, p2_0, p2_1, p3_0, p3_1, p4_0, p4_1, p5_0, p5_1, p6_0, p6_1, p6_2, p6_3, p7_0, p7_1, p7_2, p7_3, p7_4, p8_0, p8_1, p8_2, p8_3, p9_0, p9_1, p9_2, p9_3, p10_0, p11_0, p12_0, p13_0, p14_0, p15_0, p16_0) { return [new Load1Handler(p0_0, p0_1), new LoadAndAdd1Handler(p1_0, p1_1), new LoadAndView1Handler(p2_0, p2_1), new LoadAndEdit1Handler(p3_0, p3_1), new Add1Handler(p4_0, p4_1), new Edit1Handler(p5_0, p5_1), new Save1Handler(p6_0, p6_1, p6_2, p6_3), new Cancel1Handler(p7_0, p7_1, p7_2, p7_3, p7_4), new ChangeItem1Handler(p8_0, p8_1, p8_2, p8_3), new ChangeItem2Handler(p9_0, p9_1, p9_2, p9_3), new dataImport1Handler(p10_0), new dataExport1Handler(p11_0), new listDataExport1Handler(p12_0), new rootviewmodelgetMinDate1Handler(p13_0), new rootviewmodelDataExport1Handler(p14_0), new rootviewmodelDataExport2Handler(p15_0), new rootviewmodelDataImport1Handler(p16_0)]; }, [NavigationMiddlewareService, CommandService, CardDataService, StateMachineService, CardDataService, StateMachineService, CardDataService, StateMachineService, CardDataService, StateMachineService, CardDataService, StateMachineService, ValidationService, EndEditService, CardDataService, StateMachineService, ValidationService, EndEditService, PaginationService, CardDataService, StateMachineService, ChangeItemService, PaginationService, CardDataService, StateMachineService, ChangeItemService, PaginationService, CardDataService, StateMachineService, DataImportExportService, DataImportExportService, DataImportExportService, MaterialDetailFrmMinDateService, DataImportExportService, DataImportExportService, DataImportExportService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(4608, null, FormControlService, FormControlService, []), ɵprd(4608, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(4608, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, WFSubmiteService, WFSubmiteService, [Injector, ComponentFactoryResolver, BsModalService, [2, I18nService$1]]), ɵprd(4608, null, WFFlowchartService, WFFlowchartService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, CloudprintService, CloudprintService, [ɵa$1, ComponentFactoryResolver, ɵb$1, ɵc$2, Injector, ApplicationRef, NotifyService, AppService, WindowService, BsModalService]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService$1, DialogService$1, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, FrameworkSessionService, FrameworkSessionService, [[2, SessionService]]), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, ComponentManagerService, ComponentManagerService, []), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(5120, null, RESOLVER_TOKEN, function (p0_0) { return [new EntityDependencyResolver(p0_0), new StateDependencyResolver(), new CommentDependencyResolver()]; }, [Repository]), ɵprd(4608, null, ResolverRegistry, ResolverRegistry, [Injector, [2, RESOLVER_TOKEN]]), ɵprd(4608, null, ResolveService, ResolveService, [Injector, ResolverRegistry]), ɵprd(4608, null, ExpressionExecutor, ExpressionExecutor, []), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, RootViewmodelForm, []), ɵprd(4608, null, UIState, RootViewmodelUIState, []), ɵprd(4608, null, UriService, UriService, [BE_SERVER_URI_TOKEN]), ɵprd(4608, null, MaterialPlanProxy, MaterialPlanProxy, [HttpClient, UriService]), ɵprd(4608, null, Declaration, EventDeclaration, []), ɵprd(6144, null, TranslateToken, null, [LangService]), ɵprd(5120, null, LISTENER_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p0_4, p1_0, p1_1, p1_2, p2_0, p2_1, p2_2) { return [new UIStateChangeListener(p0_0, p0_1, p0_2, p0_3, p0_4), new RepositoryChangeListener(p1_0, p1_1, p1_2), new BindingDataChangeListener(p2_0, p2_1, p2_2)]; }, [Injector, UIState, NAMESPACE, FRAME_ID, BindingData, Injector, Repository, NAMESPACE, Injector, BindingData, NAMESPACE]), ɵprd(5120, null, EFFECTOR_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p1_0, p1_1, p1_2, p2_0, p2_1, p2_2, p3_0, p3_1, p3_2, p3_3, p4_0, p4_1, p4_2, p4_3, p5_0, p5_1, p5_2, p5_3, p5_4, p6_0, p6_1, p6_2, p6_3, p7_0, p7_1, p7_2, p7_3) { return [new RepositoryEffector(p0_0, p0_1, p0_2, p0_3), new UIStateEffector(p1_0, p1_1, p1_2), new ReadonlyEffector(p2_0, p2_1, p2_2), new DependencyEffector(p3_0, p3_1, p3_2, p3_3), new RelativeEffector(p4_0, p4_1, p4_2, p4_3), new ValidateEffector(p5_0, p5_1, p5_2, p5_3, p5_4), new RequiredEffector(p6_0, p6_1, p6_2, p6_3), new VisibleEffector(p7_0, p7_1, p7_2, p7_3)]; }, [Injector, Repository, NAMESPACE, BindingData, Injector, UIState, NAMESPACE, Injector, NAMESPACE, FrameContext, Injector, Repository, NAMESPACE, BindingData, Injector, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, NAMESPACE, Injector, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, NAMESPACE, FrameContext, Injector, Repository, NAMESPACE, FrameContext, Injector, NAMESPACE, FrameContext, Repository]), ɵprd(4608, null, ListenerRegistry, ListenerRegistry, [[2, LISTENER_TOKEN], [2, Injector]]), ɵprd(4608, null, Listeners, Listeners, [[2, ListenerRegistry]]), ɵprd(4608, null, EffectorRegistry, EffectorRegistry, [Injector, [2, EFFECTOR_TOKEN]]), ɵprd(4608, null, EffectorFactory, EffectorFactory, [Injector, EffectorRegistry]), ɵprd(4608, null, ExpressionRegistry, ExpressionRegistry, [Injector, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, [2, TranslateToken]]), ɵprd(4608, null, ExpressionEventEmitter, ExpressionEventEmitter, [Listeners]), ɵprd(4608, null, ExpressionResult, ExpressionResult, [Injector]), ɵprd(4608, null, ExpressionManager, ExpressionManager, [Injector, ResolveService, ExpressionExecutor, ExpressionRegistry, ExpressionResult, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN]), ɵprd(4608, null, ExpressionResultFactory, ExpressionResultFactory, [Injector, ExpressionRegistry, ExpressionManager, ExpressionResult]), ɵprd(5120, null, EVENT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6, p1_0, p1_1, p1_2, p1_3, p1_4, p1_5, p1_6, p2_0, p2_1, p2_2, p2_3, p2_4, p2_5, p2_6, p3_0, p3_1, p3_2, p3_3, p3_4, p3_5, p3_6, p4_0, p4_1, p4_2, p4_3, p4_4, p4_5, p4_6, p5_0, p5_1, p5_2, p5_3, p5_4, p5_5, p5_6, p6_0, p6_1, p6_2, p6_3, p6_4, p6_5, p6_6, p7_0, p7_1, p7_2, p7_3, p7_4, p7_5, p7_6, p8_0, p8_1, p8_2, p8_3, p8_4, p8_5, p8_6, p9_0, p9_1, p9_2, p9_3, p9_4, p9_5, p9_6, p10_0, p10_1, p10_2, p10_3, p10_4, p10_5, p10_6) { return [new RepositoryAddEntityEventHandler(p0_0, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6), new RepositoryRemoveEntityEventHandler(p1_0, p1_1, p1_2, p1_3, p1_4, p1_5, p1_6), new EntityValueChangedEventHandler(p2_0, p2_1, p2_2, p2_3, p2_4, p2_5, p2_6), new StateValueChangedEventHandler(p3_0, p3_1, p3_2, p3_3, p3_4, p3_5, p3_6), new RepositoryLoadEventHandler(p4_0, p4_1, p4_2, p4_3, p4_4, p4_5, p4_6), new EntityUpdateEventHandler(p5_0, p5_1, p5_2, p5_3, p5_4, p5_5, p5_6), new BindingDataAppendObjectEventHandler(p6_0, p6_1, p6_2, p6_3, p6_4, p6_5, p6_6), new BindingDataValueChangeEventHandler(p7_0, p7_1, p7_2, p7_3, p7_4, p7_5, p7_6), new BindingDataRemoveObjectEventHandler(p8_0, p8_1, p8_2, p8_3, p8_4, p8_5, p8_6), new BindingDataLoadEventHandler(p9_0, p9_1, p9_2, p9_3, p9_4, p9_5, p9_6), new BindingDataSelectionChangedEventHandler(p10_0, p10_1, p10_2, p10_3, p10_4, p10_5, p10_6)]; }, [Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult]), ɵprd(4608, null, EventHandlerRegistry, EventHandlerRegistry, [[2, EVENT_HANDLER_TOKEN]]), ɵprd(4608, null, ExpressionEngineImpl, ExpressionEngineImpl, [Injector, ExpressionRegistry, ExpressionEventEmitter, ResolverRegistry, EventHandlerRegistry, ResolveService]), ɵprd(4608, null, EXCEPTION_HANDLER, ExceptionHandler, [FormErrorService, [2, LanguageService], AppContext]), ɵprd(4608, null, BACK_END_MESSAGE_HANDLER_TOKEN, BackEndMessageHandler, [Injector, FrameContext, TranslateToken]), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(512, null, VerifyDetailService, VerifyDetailService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵprd(512, null, StateMachine, RootViewmodelStateMachine, []), ɵdid(113, 4440064, null, 0, RootComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FrameworkService, ApplicationParamService, VerifyDetailService, StateMachine, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "root-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, PARAM_TYPE_TRANSFORM_TOKEN, false, []), ɵprd(256, null, FORM_ID, "98708d9f-8b7c-4539-b546-8b5f2a886381", []), ɵprd(256, null, BE_SESSION_HANDLING_STRATEGY_TOKEN, "SeparatedSession", [])], function (_ck, _v) { _ck(_v, 113, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 113).cls; _ck(_v, 0, 0, currVal_0); }); }
            var RootComponentNgFactory = ɵccf("app-rootcomponent", RootComponent, View_RootComponent_Host_0, {}, {}, []);

            // This service is based on the `ng2-cookies` package which sadly is not a service and does
            // not use `DOCUMENT` injection and therefore doesn't work well with AoT production builds.
            // Package: https://github.com/BCJTI/ng2-cookies
            var CookieService = (function () {
                /**
                 * @param {?} document
                 * @param {?} platformId
                 */
                function CookieService(document, platformId) {
                    this.document = document;
                    this.platformId = platformId;
                    this.documentIsAccessible = isPlatformBrowser(this.platformId);
                }
                /**
                 * @param {?} name Cookie name
                 * @return {?}
                 */
                CookieService.prototype.check = function (name) {
                    if (!this.documentIsAccessible) {
                        return false;
                    }
                    name = encodeURIComponent(name);
                    var /** @type {?} */ regExp = this.getCookieRegExp(name);
                    var /** @type {?} */ exists = regExp.test(this.document.cookie);
                    return exists;
                };
                /**
                 * @param {?} name Cookie name
                 * @return {?}
                 */
                CookieService.prototype.get = function (name) {
                    if (this.documentIsAccessible && this.check(name)) {
                        name = encodeURIComponent(name);
                        var /** @type {?} */ regExp = this.getCookieRegExp(name);
                        var /** @type {?} */ result = regExp.exec(this.document.cookie);
                        return decodeURIComponent(result[1]);
                    }
                    else {
                        return '';
                    }
                };
                /**
                 * @return {?}
                 */
                CookieService.prototype.getAll = function () {
                    if (!this.documentIsAccessible) {
                        return {};
                    }
                    var /** @type {?} */ cookies = {};
                    var /** @type {?} */ document = this.document;
                    if (document.cookie && document.cookie !== '') {
                        var /** @type {?} */ split = document.cookie.split(';');
                        for (var /** @type {?} */ i = 0; i < split.length; i += 1) {
                            var /** @type {?} */ currentCookie = split[i].split('=');
                            currentCookie[0] = currentCookie[0].replace(/^ /, '');
                            cookies[decodeURIComponent(currentCookie[0])] = decodeURIComponent(currentCookie[1]);
                        }
                    }
                    return cookies;
                };
                /**
                 * @param {?} name     Cookie name
                 * @param {?} value    Cookie value
                 * @param {?=} expires  Number of days until the cookies expires or an actual `Date`
                 * @param {?=} path     Cookie path
                 * @param {?=} domain   Cookie domain
                 * @param {?=} secure   Secure flag
                 * @param {?=} sameSite OWASP samesite token `Lax`, `None`, or `Strict`. Defaults to `None`
                 * @return {?}
                 */
                CookieService.prototype.set = function (name, value, expires, path, domain, secure, sameSite) {
                    if (sameSite === void 0) { sameSite = 'None'; }
                    if (!this.documentIsAccessible) {
                        return;
                    }
                    var /** @type {?} */ cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
                    if (expires) {
                        if (typeof expires === 'number') {
                            var /** @type {?} */ dateExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
                            cookieString += 'expires=' + dateExpires.toUTCString() + ';';
                        }
                        else {
                            cookieString += 'expires=' + expires.toUTCString() + ';';
                        }
                    }
                    if (path) {
                        cookieString += 'path=' + path + ';';
                    }
                    if (domain) {
                        cookieString += 'domain=' + domain + ';';
                    }
                    if (secure) {
                        cookieString += 'secure;';
                    }
                    cookieString += 'sameSite=' + sameSite + ';';
                    this.document.cookie = cookieString;
                };
                /**
                 * @param {?} name   Cookie name
                 * @param {?=} path   Cookie path
                 * @param {?=} domain Cookie domain
                 * @return {?}
                 */
                CookieService.prototype.delete = function (name, path, domain) {
                    if (!this.documentIsAccessible) {
                        return;
                    }
                    this.set(name, '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'), path, domain, undefined, 'Lax');
                };
                /**
                 * @param {?=} path   Cookie path
                 * @param {?=} domain Cookie domain
                 * @return {?}
                 */
                CookieService.prototype.deleteAll = function (path, domain) {
                    if (!this.documentIsAccessible) {
                        return;
                    }
                    var /** @type {?} */ cookies = this.getAll();
                    for (var /** @type {?} */ cookieName in cookies) {
                        if (cookies.hasOwnProperty(cookieName)) {
                            this.delete(cookieName, path, domain);
                        }
                    }
                };
                /**
                 * @param {?} name Cookie name
                 * @return {?}
                 */
                CookieService.prototype.getCookieRegExp = function (name) {
                    var /** @type {?} */ escapedName = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/ig, '\\$1');
                    return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
                };
                return CookieService;
            }());
            CookieService.decorators = [
                { type: Injectable },
            ];
            /**
             * @nocollapse
             */
            CookieService.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
                { type: InjectionToken, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
            ]; };

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var MaterialPlanCardModuleNgFactory = exports('MaterialPlanCardModuleNgFactory', ɵcmf(MaterialPlanCardModule, [RootComponent], function (_l) { return ɵmod([ɵmpd(512, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, [[8, [LoadingComponentNgFactory$1, TooltipComponentNgFactory$1, ModalBackdropComponentNgFactory$1, ModalContainerComponentNgFactory$1, MessagerComponentNgFactory$1, NotifyContainerComponentNgFactory$1, PopoverContainerComponentNgFactory$1, FarrisContextMenuComponentNgFactory$1, DataTableComponentNgFactory$1, TreeTableComponentNgFactory$1, LookupLeftComponentNgFactory$1, LookupTabsComponentNgFactory$1, LookupQuickSelectPanelComponentNgFactory$1, TimePickerPanelComponentNgFactory, CalendarComponentNgFactory, FilterPanelComponentNgFactory, PopupComponentNgFactory, ɵbNgFactory, ɵiNgFactory, ɵwNgFactory, ɵbfNgFactory, ɵcNgFactory, ɵeNgFactory, ɵbbNgFactory, ɵbcNgFactory, FileListComponentNgFactory, WfApprovalLogsComponentNgFactory, UIFlowchartComponentNgFactory, ɵEmptyOutletComponentNgFactory, LanguageTextPanelComponentNgFactory, EnumEditorComponentNgFactory, FilterEditorComponentNgFactory, SortEditorComponentNgFactory, ɵlNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ɵaNgFactory, ɵbNgFactory$1, ɵcNgFactory$1, ɵdNgFactory, ɵeNgFactory$1, ɵfNgFactory, ɵgNgFactory, ɵhNgFactory, ɵiNgFactory$1, ɵjNgFactory, ɵkNgFactory, DatagridEnumEditorComponentNgFactory, DatagridSortEditorComponentNgFactory, DatagridFilterEditorComponentNgFactory, TaskExecuteComponentNgFactory, TaskAssigninfoComponentNgFactory, ProcessSelectorComponentNgFactory, VerifyDetailComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, NgbTooltipWindowNgFactory, FileUploadComponentNgFactory, UploadDialogComponentNgFactory, ɵbNgFactory$2, QueryConditionComponentNgFactory, ɵcNgFactory$2, ɵeNgFactory$2, ɵaNgFactory$1, ProcessSelectorComponentNgFactory$1, WfWorkitemHandleComponentNgFactory, UserHelperComponentNgFactory, TaskAssignComponentNgFactory, TaskSignaddComponentNgFactory, TaskTransferComponentNgFactory, ɵaNgFactory$2, WindowComponentNgFactory, WindowTitleBarComponentNgFactory, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, ɵdNgFactory$1, ɵfNgFactory$1, ɵgNgFactory$1, ɵhNgFactory$1, ɵbNgFactory$3, ɵcNgFactory$3, ɵdNgFactory$2, ɵeNgFactory$3, ɵfNgFactory$2, ɵgNgFactory$2, ɵhNgFactory$2, BatchEditDialogComponentNgFactory, ResultConfirmComponentNgFactory, DiscussionPersonnelComponentNgFactory, MultiDownloadInfoComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory, FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory, FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, OrganizationSelectorComponentNgFactory, GridOrganizationSelectorComponentNgFactory, DatagridSettingsComponentNgFactory, SimpleColumnsComponentNgFactory, NewSchemeComponentNgFactory, SchemeListComponentNgFactory, FEPageModalComponentNgFactory, FEModalBackdropComponentNgFactory, ɵaNgFactory$3, FeatureEditorComponentNgFactory, RootComponentNgFactory, ɵbNgFactory$4, ɵnNgFactory, ɵeNgFactory$4, ɵhNgFactory$3, ɵmNgFactory, ɵkNgFactory$1, ɵlNgFactory$1, RuleIdHelpComponentNgFactory, DataieRuleHelpComponentNgFactory, ɵoNgFactory, ɵpNgFactory, ɵqNgFactory, ɵrNgFactory, ɵsNgFactory, ɵtNgFactory, ɵuNgFactory, ɵvNgFactory, ɵwNgFactory$1, ɵxNgFactory, ɵyNgFactory, ɵzNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ɵmpd(4608, NgLocalization, NgLocaleLocalization, [LOCALE_ID, [2, ɵangular_packages_common_common_a]]), ɵmpd(4608, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_j, []), ɵmpd(4608, FormBuilder, FormBuilder, []), ɵmpd(4608, CommonUtils, CommonUtils, []), ɵmpd(4608, RuntimeStateService, RuntimeStateService, [CommonUtils]), ɵmpd(4608, IdService, IdService, []), ɵmpd(4608, DialogService, DialogService, []), ɵmpd(135680, GridComponent, GridComponent, [BrowserSupportService, SelectionService, ElementRef, GroupInfoService, GroupsService, ChangeNotificationService, DetailsService, EditService$1, FilterService, PDFService, ResponsiveService, Renderer2, ExcelService, NgZone, ScrollSyncService, DomEventsService, ColumnResizingService, ChangeDetectorRef, ColumnReorderService, ColumnInfoService, NavigationService$1, SortService, LocalizationService$1]), ɵmpd(4608, DateTimeHelperService, DateTimeHelperService, []), ɵmpd(4608, NumberHelperService, NumberHelperService, []), ɵmpd(4608, FarrisKendoGridFormatService, FarrisKendoGridFormatService, [DateTimeHelperService, NumberHelperService]), ɵmpd(4608, FarrisTreetableFormatService, FarrisTreetableFormatService, []), ɵmpd(4608, LocaleService, LocaleService, [LOCALE_ID, CommonUtils, [2, FARRIS_LOCAL_CUSTOM_DATA]]), ɵmpd(4608, AttentionService, AttentionService, [RendererFactory2, NgZone]), ɵmpd(4608, PositioningService, PositioningService, [RendererFactory2, PLATFORM_ID]), ɵmpd(4608, ComponentLoaderFactory, ComponentLoaderFactory, [ComponentFactoryResolver, NgZone, Injector, PositioningService, ApplicationRef]), ɵmpd(4608, BsModalService, BsModalService, [RendererFactory2, ComponentLoaderFactory, NgZone]), ɵmpd(4608, NotifyService, NotifyService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵmpd(4608, PaginationService$1, PaginationService$1, []), ɵmpd(4608, PopoverConfig, PopoverConfig, []), ɵmpd(4608, ColumnFormatService, ColumnFormatService, [DateTimeHelperService, NumberHelperService]), ɵmpd(4608, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, [DOCUMENT, PLATFORM_ID, ɵangular_packages_common_http_http_e]), ɵmpd(4608, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_h, [HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_f]), ɵmpd(5120, HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [ɵangular_packages_common_http_http_h]), ɵmpd(4608, LoadingService, LoadingService, [ApplicationRef, ComponentFactoryResolver, Injector]), ɵmpd(4608, ComboLocaleService, ComboLocaleService, [LocaleService]), ɵmpd(4608, FarrisContextMenuService, FarrisContextMenuService, [ComponentFactoryResolver, Injector]), ɵmpd(4608, TreetableService, TreetableService, []), ɵmpd(4608, ResizeService, ResizeService, []), ɵmpd(4608, TTHotkeys, TTHotkeys, [EventManager]), ɵmpd(4608, MessagerService, MessagerService, [BsModalService, Injector]), ɵmpd(4608, QuerySolutionService, QuerySolutionService, []), ɵmpd(4608, FilterService$1, FilterService$1, []), ɵmpd(4608, ConvertorService, ConvertorService, []), ɵmpd(4608, SolutionService, SolutionService, []), ɵmpd(4608, ErrorHandler, ɵt, []), ɵmpd(4608, ValidatorMessagerService, ValidatorMessagerService, []), ɵmpd(4608, SessionService, SessionService, []), ɵmpd(4608, SysCommonUtilService, SysCommonUtilService, [SessionService]), ɵmpd(4608, SysSecurityConfigService, SysSecurityConfigService, [HttpClient, SysCommonUtilService]), ɵmpd(4608, HelpFilterMap, HelpFilterMap, []), ɵmpd(4608, SysHelpService, SysHelpService, [HttpClient, SysCommonUtilService]), ɵmpd(4608, SysExceptionService, SysExceptionService, []), ɵmpd(4608, ɵf$1, ɵf$1, [HttpClient, SysCommonUtilService]), ɵmpd(4608, CookieService, CookieService, [DOCUMENT, PLATFORM_ID]), ɵmpd(4608, LanguageService$1, LanguageService$1, [CookieService]), ɵmpd(4608, SysLocaleService, SysLocaleService, [LanguageService$1]), ɵmpd(4608, PopupService, PopupService, [ApplicationRef, ComponentFactoryResolver, Injector, [2, POPUP_CONTAINER]]), ɵmpd(4608, ɵj, ɵj, []), ɵmpd(4608, ɵs, ɵs, []), ɵmpd(4608, ɵn, ɵn, []), ɵmpd(4608, ɵu, ɵu, []), ɵmpd(4608, ɵv, ɵv, [ɵu]), ɵmpd(4608, HttpService, HttpService, [HttpClient, SessionService]), ɵmpd(4608, ɵo, ɵo, []), ɵmpd(4608, ɵz, ɵz, []), ɵmpd(4608, ɵd, ɵd, [HttpService, HttpClient, ɵz]), ɵmpd(4608, ɵa$2, ɵa$2, [HttpService, HttpClient]), ɵmpd(4608, ɵy, ɵy, []), ɵmpd(4608, ɵa$1, ɵa$1, [HttpClient]), ɵmpd(4608, ɵb$1, ɵb$1, [HttpClient]), ɵmpd(4608, ɵc$2, ɵc$2, [HttpClient]), ɵmpd(4608, FrameworkVariableService, FrameworkVariableService, []), ɵmpd(4608, FrmI18nSettingService, FrmI18nSettingService, [FrameworkVariableService, LanguageService$1, HttpService]), ɵmpd(4608, AppService, AppService, [HttpService, SessionService, [2, FrmI18nSettingService]]), ɵmpd(4608, WindowContainerService, WindowContainerService, []), ɵmpd(4608, WindowService, WindowService, [ComponentFactoryResolver, WindowContainerService]), ɵmpd(4608, CloudprintService, CloudprintService, [ɵa$1, ComponentFactoryResolver, ɵb$1, ɵc$2, Injector, ApplicationRef, NotifyService, AppService, WindowService, BsModalService]), ɵmpd(4608, WfApprovalLogsService, WfApprovalLogsService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵmpd(4608, NgbDropdownConfig, NgbDropdownConfig, []), ɵmpd(4608, UiFlowchartService, UiFlowchartService, [HttpService]), ɵmpd(4608, WFFlowchartService, WFFlowchartService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵmpd(4608, TaskService, TaskService, [HttpService, MessagerService]), ɵmpd(4608, I18nService$2, I18nService$2, []), ɵmpd(4608, CacheStorageAbstract, CacheMemoryStorage, []), ɵmpd(4608, CacheService, CacheService, [[2, CacheStorageAbstract]]), ɵmpd(4608, FrmEventBus, FrmEventBus, []), ɵmpd(4608, FuncsService, FuncsService, [[2, FrameworkVariableService]]), ɵmpd(4608, FrameworkService, FrameworkService, [HttpService, Router, CacheService, SessionService, FrmEventBus, FuncsService, LoadingService$1, [2, AppService], [2, FrmI18nSettingService]]), ɵmpd(4608, WfTaskHandlerService, WfTaskHandlerService, [WfApprovalLogsService, WFFlowchartService, Injector, ComponentFactoryResolver, BsModalService, TaskService, NotifyService, I18nService$2, FrameworkService, ApplicationRef]), ɵmpd(4608, AppContextManager, AppContextManager, []), ɵmpd(135680, AppContext, AppContext, [[2, Injector], [2, AppContextManager], [3, AppContext]]), ɵmpd(4608, FormLoadingService, FormLoadingService, [LoadingService, [2, HideEventService], [2, AppContext]]), ɵmpd(4608, LanguageService, LanguageService, [[2, LOCALE_ID]]), ɵmpd(4608, FormMessageService, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵmpd(4608, FormNotifyService, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵmpd(4608, FormErrorService, FormErrorService, [FormMessageService, [2, LanguageService]]), ɵmpd(4608, WizardService, WizardService, []), ɵmpd(4608, FormWizardService, FormWizardService, [WizardService]), ɵmpd(4608, CheckService, CheckService, []), ɵmpd(4608, DataCheckService, DataCheckService, [FormMessageService, FormNotifyService, [2, LanguageService]]), ɵmpd(4608, FrameEventBus, FrameEventBus, []), ɵmpd(4608, EventService, EventService, [FrameEventBus]), ɵmpd(4608, ComponentManagerService, ComponentManagerService, []), ɵmpd(4608, FilterService$2, FilterService$2, []), ɵmpd(4608, KeybindingService, KeybindingService, []), ɵmpd(4608, QuerystringService, QuerystringService, []), ɵmpd(4608, RuntimeFrameworkService, RuntimeFrameworkService, []), ɵmpd(4608, ParamService, ParamService, [QuerystringService, RuntimeFrameworkService]), ɵmpd(4608, MenuStateService, MenuStateService, []), ɵmpd(4608, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵmpd(4608, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵmpd(4608, RouterParamService, RouterParamService, []), ɵmpd(4608, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵmpd(4608, ApplicationParamService, ApplicationParamService, [[2, ParamService], [2, RuntimeFrameworkService]]), ɵmpd(4608, FilterConditionService, FilterConditionService, []), ɵmpd(4608, UserSettingsToken, UserSettingsService, [Injector, [2, FrmI18nSettingService]]), ɵmpd(4608, VerifyDetailService, VerifyDetailService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵmpd(4608, IntlService, CldrIntlService, [LOCALE_ID]), ɵmpd(4608, DOMService, DOMService, []), ɵmpd(4608, CenturyViewService, CenturyViewService, []), ɵmpd(4608, DecadeViewService, DecadeViewService, []), ɵmpd(4608, MonthViewService, MonthViewService, [IntlService]), ɵmpd(4608, YearViewService, YearViewService, [IntlService]), ɵmpd(4608, WeekNamesService, WeekNamesService, [IntlService]), ɵmpd(135680, ResizeBatchService, ResizeBatchService, [NgZone]), ɵmpd(4608, NavigationService$2, NavigationService$2, [BusViewService]), ɵmpd(4608, DOMService$1, DOMService$1, []), ɵmpd(4608, HoursService, HoursService, [IntlService]), ɵmpd(4608, MinutesService, MinutesService, [IntlService]), ɵmpd(4608, SecondsService, SecondsService, [IntlService]), ɵmpd(4608, DayPeriodService, DayPeriodService, [IntlService]), ɵmpd(4608, NgbTooltipConfig, NgbTooltipConfig, []), ɵmpd(4608, TabService, TabService, [[2, TabConfig]]), ɵmpd(4608, UploadService, UploadService, [HttpService]), ɵmpd(4608, DownloadService, DownloadService, []), ɵmpd(4608, UploadDialogService, UploadDialogService, [BsModalService, ComponentFactoryResolver, Injector]), ɵmpd(4608, SolutionService$1, SolutionService$1, [NotifyService]), ɵmpd(4608, ConvertorService$1, ConvertorService$1, []), ɵmpd(4608, TaskCommentService, TaskCommentService, [HttpService]), ɵmpd(4608, TaskCommentUIState, TaskCommentUIState, []), ɵmpd(4608, TaskCommentViewModel, TaskCommentViewModel, [TaskCommentUIState, HttpService]), ɵmpd(4608, I18nService$3, I18nService$3, []), ɵmpd(4608, TaskCommentRepository, TaskCommentRepository, []), ɵmpd(4608, TaskService$1, TaskService$1, [HttpService]), ɵmpd(4608, UserService, UserService, [HttpClient, HttpService, SessionService]), ɵmpd(4608, I18nService$1, I18nService$1, []), ɵmpd(4608, WFSubmiteService, WFSubmiteService, [Injector, ComponentFactoryResolver, BsModalService, [2, I18nService$1]]), ɵmpd(4608, DialogContainerService, DialogContainerService, []), ɵmpd(4608, DialogService$2, DialogService$2, [ComponentFactoryResolver, DialogContainerService]), ɵmpd(4608, ɵe, ɵe, [HttpClient]), ɵmpd(4608, ConvertorService$2, ConvertorService$2, []), ɵmpd(4608, SolutionService$2, SolutionService$2, []), ɵmpd(4608, QuerySolutionService$1, QuerySolutionService$1, []), ɵmpd(135680, FarrisScrollSpyService, FarrisScrollSpyService, [NgZone]), ɵmpd(4608, DiscussionListService, DiscussionListService, []), ɵmpd(4608, FFileUploadAdaptUnifileConfigService, FFileUploadAdaptUnifileConfigService, [[2, FFileUploadAdaptUnifileConfigToken]]), ɵmpd(4608, UploadServerService, FfileuploadAdaptUnifileService, [UploadService, FFileUploadAdaptUnifileConfigService]), ɵmpd(4608, FFileUploaderService, FFileUploaderService, [[2, UploadServerService]]), ɵmpd(4608, FileViewerService, FileViewerService, [BsModalService, ComponentFactoryResolver, Injector, ɵa$2, MessagerService, CloudprintService, AppService]), ɵmpd(4608, FfilepreviewAdaptUnifileService, FfilepreviewAdaptUnifileService, [FileViewerService, FFileUploadAdaptUnifileConfigService, [2, DownloadService]]), ɵmpd(4608, EditorService, EditorService, []), ɵmpd(4608, I18nService, I18nService, [[2, LOCALE_ID]]), ɵmpd(4608, FEScrollCollapsibleAreaService, FEScrollCollapsibleAreaService, []), ɵmpd(4608, ɵd$1, ɵd$1, [HttpClient]), ɵmpd(4608, ɵf, ɵf, [ɵd$1, NotifyService, HttpClient, LoadingService]), ɵmpd(4608, ɵc$1, ɵc$1, [BsModalService, ComponentFactoryResolver, ɵd$1, NotifyService, HttpClient, Injector]), ɵmpd(4608, ɵg, ɵg, [NotifyService, ɵd$1, LoadingService, ɵc$1, HttpClient]), ɵmpd(4608, DataieHandcraftService, DataieHandcraftService, [ComponentFactoryResolver, BsModalService, Injector, ɵf, NotifyService, ɵg, HttpClient, LoadingService]), ɵmpd(4608, GRID_SETTINGS_SERVICE, DatagridSettingsService, [Injector, BsModalService, MessagerService, IdService, LocaleService]), ɵmpd(4608, WindowVariableService, WindowVariableService, []), ɵmpd(4608, TabEntityService, TabEntityService, []), ɵmpd(4608, FEPageModalService, FEPageModalService, [RendererFactory2, [2, ComponentLoaderFactory], Injector, NgZone]), ɵmpd(4608, EventBus, EventBus, []), ɵmpd(4608, Subscription, Subscription, []), ɵmpd(4608, RestfulService, RestfulService, [HttpClient]), ɵmpd(5120, VARIABLE_PARSERS, function () { return [new FrameIdVariableParser(), new ɵa$3(), new EventParamVariableParser(), new DataVariableParser(), new UIStateVariableParser(), new StateMachineVariableParser(), new CommandVariableParser()]; }, []), ɵmpd(4608, VariableParseService, VariableParseService, [VARIABLE_PARSERS]), ɵmpd(5120, BE_SERVER_URI_TOKEN, ɵ2$2, []), ɵmpd(1073742336, CommonModule, CommonModule, []), ɵmpd(1073742336, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bc, []), ɵmpd(1073742336, FormsModule, FormsModule, []), ɵmpd(1073742336, ReactiveFormsModule, ReactiveFormsModule, []), ɵmpd(1073742336, PanelBarModule, PanelBarModule, []), ɵmpd(1073742336, SplitterModule$1, SplitterModule$1, []), ɵmpd(1073742336, TabStripModule, TabStripModule, []), ɵmpd(1073742336, LayoutModule, LayoutModule, []), ɵmpd(1073742336, FarrisCommonModule, FarrisCommonModule, []), ɵmpd(1073742336, KendoBindingModule, KendoBindingModule, []), ɵmpd(1073742336, FlexLayoutModule, FlexLayoutModule, []), ɵmpd(1073742336, LocaleModule, LocaleModule, []), ɵmpd(1073742336, LoadingModule, LoadingModule, []), ɵmpd(1073742336, PerfectScrollbarModule, PerfectScrollbarModule, []), ɵmpd(1073742336, AngularDraggableModule, AngularDraggableModule, []), ɵmpd(1073742336, FAreaResponseModule, FAreaResponseModule, []), ɵmpd(1073742336, FarrisTooltipModule, FarrisTooltipModule, []), ɵmpd(1073742336, ModalModule, ModalModule, []), ɵmpd(1073742336, MessagerModule, MessagerModule, []), ɵmpd(1073742336, NotifyModule, NotifyModule, []), ɵmpd(1073742336, PaginationModule, PaginationModule, []), ɵmpd(1073742336, PopoverModule, PopoverModule, []), ɵmpd(1073742336, InputGroupModule, InputGroupModule, []), ɵmpd(1073742336, DateHelperModule, DateHelperModule, []), ɵmpd(1073742336, NumberHelperModule, NumberHelperModule, []), ɵmpd(1073742336, DataColumnModule, DataColumnModule, []), ɵmpd(1073742336, DataTableModule, DataTableModule, []), ɵmpd(1073742336, FarrisDialogModule, FarrisDialogModule, []), ɵmpd(1073742336, HttpClientXsrfModule, HttpClientXsrfModule, []), ɵmpd(1073742336, HttpClientModule, HttpClientModule, []), ɵmpd(1073742336, DatalistModule, DatalistModule, []), ɵmpd(1073742336, ComboListModule, ComboListModule, []), ɵmpd(1073742336, LayoutModule$1, LayoutModule$1, []), ɵmpd(1073742336, FarrisContextMenuModule, FarrisContextMenuModule, []), ɵmpd(1073742336, TreeTableModule, TreeTableModule, []), ɵmpd(1073742336, LookupModule, LookupModule, []), ɵmpd(1073742336, NgxPaginationModule, NgxPaginationModule, []), ɵmpd(1073742336, ScrollbarModule, ScrollbarModule, []), ɵmpd(1073742336, TimePickerModule, TimePickerModule, []), ɵmpd(1073742336, FarrisDatePickerModule, FarrisDatePickerModule, []), ɵmpd(1073742336, FarrisFormsModule, FarrisFormsModule, []), ɵmpd(1073742336, NumberSpinnerModule, NumberSpinnerModule, []), ɵmpd(1073742336, SwitchModule, SwitchModule, []), ɵmpd(1073742336, FilterConditionModule, FilterConditionModule, []), ɵmpd(1073742336, FilterPanelModule, FilterPanelModule, []), ɵmpd(1073742336, FarrisSidebarModule, FarrisSidebarModule, []), ɵmpd(1073742336, SimpleFilterModule, SimpleFilterModule, []), ɵmpd(1073742336, DatagridSmartFilterModule, DatagridSmartFilterModule, []), ɵmpd(1073742336, DatagridModule, DatagridModule, []), ɵmpd(1073742336, SysCommonModule, SysCommonModule, []), ɵmpd(1073742336, SysManagerUIModule, SysManagerUIModule, []), ɵmpd(1073742336, ButtonModule, ButtonModule, []), ɵmpd(1073742336, ButtonGroupModule, ButtonGroupModule, []), ɵmpd(1073742336, PopupModule, PopupModule, []), ɵmpd(1073742336, ListModule, ListModule, []), ɵmpd(1073742336, SplitButtonModule, SplitButtonModule, []), ɵmpd(1073742336, DropDownButtonModule, DropDownButtonModule, []), ɵmpd(1073742336, ButtonsModule, ButtonsModule, []), ɵmpd(1073742336, ɵf$2, ɵf$2, []), ɵmpd(1073742336, ɵh, ɵh, []), ɵmpd(1073742336, ɵbe, ɵbe, []), ɵmpd(1073742336, ɵg$1, ɵg$1, []), ɵmpd(1073742336, ɵt$1, ɵt$1, []), ɵmpd(1073742336, ɵbg, ɵbg, []), ɵmpd(1073742336, ɵbh, ɵbh, []), ɵmpd(1073742336, FileListModule, FileListModule, []), ɵmpd(1073742336, WfApprovalLogsModule, WfApprovalLogsModule, []), ɵmpd(1073742336, NgbDropdownModule, NgbDropdownModule, []), ɵmpd(1073742336, FarrisSectionModule, FarrisSectionModule, []), ɵmpd(1073742336, FDropdownDirectiveTypeModule, FDropdownDirectiveTypeModule, []), ɵmpd(1073742336, UiFlowchartModule, UiFlowchartModule, []), ɵmpd(1073742336, RouterModule, RouterModule, [[2, ɵangular_packages_router_router_a], [2, Router]]), ɵmpd(1073742336, CommonSharedModule, CommonSharedModule, []), ɵmpd(1073742336, TaskImplApiModule, TaskImplApiModule, []), ɵmpd(1073742336, WfSignModule, WfSignModule, []), ɵmpd(1073742336, AvatarModule, AvatarModule, []), ɵmpd(1073742336, ComboLookupModule, ComboLookupModule, []), ɵmpd(1073742336, LanguageTextboxModule, LanguageTextboxModule, []), ɵmpd(1073742336, EnumEditorModule, EnumEditorModule, []), ɵmpd(1073742336, FilterModule, FilterModule, []), ɵmpd(1073742336, SorterModule, SorterModule, []), ɵmpd(1073742336, DatagridEditorsModule, DatagridEditorsModule, []), ɵmpd(1073742336, WfTaskHandlerModule, WfTaskHandlerModule, []), ɵmpd(512, WorkFlowMessageService, WorkFlowMessageService, []), ɵmpd(512, WorkFlowMessage, WorkFlowMessage, [Injector, WorkFlowMessageService]), ɵmpd(1073742336, CommandServicesModule, CommandServicesModule, [WorkFlowMessage]), ɵmpd(1073742336, FResponseToolbarModule, FResponseToolbarModule, []), ɵmpd(1073742336, FormMessageModule, FormMessageModule, []), ɵmpd(1073742336, TranslateModule, TranslateModule, []), ɵmpd(1073742336, VerifyDetailModule, VerifyDetailModule, []), ɵmpd(1073742336, SharedModule, SharedModule, []), ɵmpd(1073742336, DragAndDropModule, DragAndDropModule, []), ɵmpd(1073742336, GroupModule, GroupModule, []), ɵmpd(1073742336, EventsModule, EventsModule, []), ɵmpd(1073742336, NumericTextBoxModule, NumericTextBoxModule, []), ɵmpd(1073742336, IntlModule, IntlModule, []), ɵmpd(1073742336, EventsModule$1, EventsModule$1, []), ɵmpd(1073742336, DateInputModule, DateInputModule, []), ɵmpd(1073742336, CalendarCommonModule, CalendarCommonModule, []), ɵmpd(1073742336, TemplatesModule, TemplatesModule, []), ɵmpd(1073742336, VirtualizationModule, VirtualizationModule, []), ɵmpd(1073742336, CalendarModule$1, CalendarModule$1, []), ɵmpd(1073742336, DatePickerModule, DatePickerModule, []), ɵmpd(1073742336, BodyModule, BodyModule, []), ɵmpd(1073742336, ResizeSensorModule, ResizeSensorModule, []), ɵmpd(1073742336, SharedDirectivesModule, SharedDirectivesModule, []), ɵmpd(1073742336, SharedModule$1, SharedModule$1, []), ɵmpd(1073742336, DropDownListModule, DropDownListModule, []), ɵmpd(1073742336, AutoCompleteModule, AutoCompleteModule, []), ɵmpd(1073742336, TextBoxModule, TextBoxModule, []), ɵmpd(1073742336, DraggableModule, DraggableModule, []), ɵmpd(1073742336, SliderModule, SliderModule, []), ɵmpd(1073742336, SwitchModule$1, SwitchModule$1, []), ɵmpd(1073742336, MaskedTextBoxModule, MaskedTextBoxModule, []), ɵmpd(1073742336, InputsModule, InputsModule, []), ɵmpd(1073742336, SharedFilterModule, SharedFilterModule, []), ɵmpd(1073742336, RowFilterModule, RowFilterModule, []), ɵmpd(1073742336, FilterMenuModule, FilterMenuModule, []), ɵmpd(1073742336, ColumnMenuModule, ColumnMenuModule, []), ɵmpd(1073742336, HeaderModule, HeaderModule, []), ɵmpd(1073742336, FooterModule, FooterModule, []), ɵmpd(1073742336, PagerModule, PagerModule, []), ɵmpd(1073742336, GridModule, GridModule, []), ɵmpd(1073742336, MultiViewCalendarModule, MultiViewCalendarModule, []), ɵmpd(1073742336, CalendarsModule, CalendarsModule, []), ɵmpd(1073742336, TimePickerModule$1, TimePickerModule$1, []), ɵmpd(1073742336, DateRangeModule, DateRangeModule, []), ɵmpd(1073742336, DateInputsModule, DateInputsModule, []), ɵmpd(1073742336, ComboBoxModule, ComboBoxModule, []), ɵmpd(1073742336, MultiSelectModule$1, MultiSelectModule$1, []), ɵmpd(1073742336, DropDownsModule, DropDownsModule, []), ɵmpd(1073742336, NgbTooltipModule, NgbTooltipModule, []), ɵmpd(1073742336, FarrisTabsModule, FarrisTabsModule, []), ɵmpd(1073742336, FarrisTagModule, FarrisTagModule, []), ɵmpd(1073742336, ProgressModule, ProgressModule, []), ɵmpd(1073742336, UploadModule, UploadModule, []), ɵmpd(1073742336, UploadDialogMoudle, UploadDialogMoudle, []), ɵmpd(1073742336, FieldGroupModule, FieldGroupModule, []), ɵmpd(1073742336, FarrisTimeSpinnerModule, FarrisTimeSpinnerModule, []), ɵmpd(1073742336, ProgressStepModule, ProgressStepModule, []), ɵmpd(1073742336, WizardModule, WizardModule, []), ɵmpd(1073742336, MultiSelectModule, MultiSelectModule, []), ɵmpd(1073742336, QueryConditionModule, QueryConditionModule, []), ɵmpd(1073742336, QuerySolutionModule, QuerySolutionModule, []), ɵmpd(1073742336, FarrisButtonModule, FarrisButtonModule, []), ɵmpd(1073742336, ListViewModule, ListViewModule, []), ɵmpd(1073742336, SplitterModule, SplitterModule, []), ɵmpd(1073742336, ListNavModule, ListNavModule, []), ɵmpd(1073742336, TextModule, TextModule, []), ɵmpd(1073742336, WFCommentModule, WFCommentModule, []), ɵmpd(1073742336, WFRuntimeModule, WFRuntimeModule, []), ɵmpd(1073742336, SharedModule$2, SharedModule$2, []), ɵmpd(1073742336, WindowModule, WindowModule, []), ɵmpd(1073742336, DialogModule, DialogModule, []), ɵmpd(1073742336, CloudPrintModule, CloudPrintModule, []), ɵmpd(1073742336, FarrisHtmlEditorModule, FarrisHtmlEditorModule, []), ɵmpd(1073742336, ViewChangeModule, ViewChangeModule, []), ɵmpd(1073742336, ListFilterModule, ListFilterModule, []), ɵmpd(1073742336, CalendarModule, CalendarModule, []), ɵmpd(1073742336, ScrollspyModule, ScrollspyModule, []), ɵmpd(1073742336, DynamicControlGroupModule, DynamicControlGroupModule, []), ɵmpd(1073742336, FarrisFooterModule, FarrisFooterModule, []), ɵmpd(1073742336, BatchEditDialogModule, BatchEditDialogModule, []), ɵmpd(1073742336, TreeModule, TreeModule, []), ɵmpd(1073742336, DiscussionGroupModule, DiscussionGroupModule, []), ɵmpd(1073742336, NavModule, NavModule, []), ɵmpd(1073742336, TagsModule, TagsModule, []), ɵmpd(1073742336, FFileUploadModule, FFileUploadModule, []), ɵmpd(1073742336, FfileuploadAdaptUnifileModule, FfileuploadAdaptUnifileModule, []), ɵmpd(1073742336, DatagridFilterRowModule, DatagridFilterRowModule, []), ɵmpd(1073742336, OrganizationSelectorModule, OrganizationSelectorModule, []), ɵmpd(1073742336, DatagridSettingsModule, DatagridSettingsModule, []), ɵmpd(1073742336, EditorModule, EditorModule, []), ɵmpd(1073742336, FrmCommonModule, FrmCommonModule, []), ɵmpd(1073742336, FEHeaderFooterModule, FEHeaderFooterModule, []), ɵmpd(1073742336, FEPageModalModule, FEPageModalModule, []), ɵmpd(1073742336, FeatureEditorModule, FeatureEditorModule, []), ɵmpd(1073742336, FEScrollCollapsibleAreaModule, FEScrollCollapsibleAreaModule, []), ɵmpd(1073742336, MaterialPlanCardRoutingModule, MaterialPlanCardRoutingModule, []), ɵmpd(1073742336, ExcelExportModule, ExcelExportModule, []), ɵmpd(1073742336, ExcelModule, ExcelModule, []), ɵmpd(1073742336, CheckBoxModule, CheckBoxModule, []), ɵmpd(1073742336, SharedModule$3, SharedModule$3, []), ɵmpd(1073742336, TreeViewModule, TreeViewModule, []), ɵmpd(1073742336, PDFModule, PDFModule, []), ɵmpd(1073742336, DataImpExpModule, DataImpExpModule, []), ɵmpd(512, TranslateStore, TranslateStore, []), ɵmpd(512, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_d, []), ɵmpd(2048, XhrFactory, null, [ɵangular_packages_common_http_http_d]), ɵmpd(512, HttpXhrBackend, HttpXhrBackend, [XhrFactory]), ɵmpd(2048, HttpBackend, null, [HttpXhrBackend]), ɵmpd(512, HttpHandler, ɵHttpInterceptingHandler, [HttpBackend, Injector]), ɵmpd(512, HttpClient, HttpClient, [HttpHandler]), ɵmpd(1024, TranslateLoader, ɵ0$3, [HttpClient]), ɵmpd(512, TranslateCompiler, TranslateFakeCompiler, []), ɵmpd(512, TranslateParser, TranslateDefaultParser, []), ɵmpd(512, MissingTranslationHandler, JitMissingTranslationHandler, []), ɵmpd(256, USE_DEFAULT_LANG, undefined, []), ɵmpd(256, USE_STORE, undefined, []), ɵmpd(512, TranslateService, TranslateService, [TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler, USE_DEFAULT_LANG, USE_STORE]), ɵmpd(512, TranslateResolveService, TranslateResolveService, [TranslateService, HttpClient]), ɵmpd(1073742336, MaterialPlanCardModule, MaterialPlanCardModule, [TranslateResolveService]), ɵmpd(256, LOCALE_ID, ɵ1$2, []), ɵmpd(256, FARRIS_LOCAL_CUSTOM_DATA, {}, []), ɵmpd(256, ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), ɵmpd(256, ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), ɵmpd(256, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, []), ɵmpd(256, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, []), ɵmpd(256, SWITCH_OPTIONS, {}, []), ɵmpd(256, SCROLLBAR_CONFIG, { minScrollbarLength: 20 }, []), ɵmpd(1024, GRID_EDITORS, function () { return [{ name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$2 }, { name: "input-group", value: ɵc$3 }, { name: "select", value: ɵd$2 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$3 }, { name: "combolist", value: ɵg$2 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$1 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }, { name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$2 }, { name: "input-group", value: ɵc$3 }, { name: "select", value: ɵd$2 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$3 }, { name: "combolist", value: ɵg$2 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$1 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }]; }, []), ɵmpd(256, TOUCH_ENABLED, touchEnabled, []), ɵmpd(256, TOUCH_ENABLED$1, touchEnabled$1, []), ɵmpd(256, ɵb$3, { modules: defaultModules }, []), ɵmpd(256, FFileUploadAPIServiceToken, null, []), ɵmpd(1024, ROUTES, function () { return [[{ path: "", component: RootComponent, children: [], resolve: { "translate": TranslateResolveService } }]]; }, []), ɵmpd(256, GRID_FILTER_ROW, FilterRowComponent, []), ɵmpd(256, TINYMCE_SCRIPT_SRC, "/platform/common/web/assets/tinymce/tinymce.min.js", []), ɵmpd(256, FORM_PATH_TOKEN, "/apps/scm/cm/web/bo-materialplan-front/materialplancard/", [])]); }));

        }
    };
});
