/*! UPDATE TIME: 2023-7-2 18:22:18 */
System.register(['@angular/core', 'tslib', '@angular/common', '@angular/forms', '@farris/kendo-binding', '@progress/kendo-angular-layout', '@farris/ui-flex-layout', '@farris/ui-forms', '@farris/ui-forms/validation-message', '@farris/ui-loading', '@farris/ui-messager', '@farris/ui-notify', '@farris/ui-response-toolbar', '@farris/bef', '@ngx-translate/core', '@ngx-translate/http-loader', 'rxjs', 'rxjs/operators', '@angular/common/http', '@angular/platform-browser', '@farris/devkit', '@farris/command-services', '@farris/ui-verify-detail', '@ecp-caf/caf-common', '@gsp-sys/rtf-common', '@farris/ui-tooltip', '@progress/kendo-angular-grid', '@progress/kendo-angular-dateinputs', '@progress/kendo-angular-dropdowns', '@progress/kendo-angular-buttons', '@progress/kendo-angular-inputs', '@progress/kendo-angular-intl', '@progress/kendo-angular-intl/locales/zh/all', '@farris/ui-lookup', '@farris/ui-treetable', '@farris/ui-field-group', '@farris/ui-tabs', '@farris/ui-tag', '@farris/ui-sidebar', '@gsp-svc/formdoc-upload', '@farris/ui-section', '@farris/ui-datepicker', '@farris/ui-time-spinner', '@farris/ui-datagrid', '@farris/ui-wizard', '@gsp-cmp/querysolution', '@farris/ui-button', '@farris/ui-list-view', '@farris/ui-time-picker', '@farris/ui-draggable', '@farris/ui-splitter', '@farris/ui-list-nav', '@farris/ui-text', '@gsp-wf/rtdevkit', '@farris/ui-multi-select', '@farris/ui-input-group', '@farris/ui-combo-list', '@farris/ui-html-editor', '@gsp-svc/cloudprint', '@farris/ui-datagrid-editors', '@farris/ui-view-change', '@farris/ui-switch', '@farris/ui-list-filter', '@farris/ui-filter', '@farris/ui-avatar', '@farris/ui-calendar', '@gsp-wf/ui-flowchart', '@farris/ui-number-spinner', '@farris/ui-combo-lookup', '@farris/ui-scrollspy', '@gsp-svc/file-viewer', '@farris/ui-language-textbox', '@farris/dynamic-control-group', '@farris/ui-batch-edit-dialog', '@farris/ui-datagrid-filter', '@farris/ui-datagrid-settings', '@farris/ui-footer', '@farris/discussion-group', '@farris/ui-nav', '@farris/tags', '@farris/ui-editor', '@farris/extend-fileupload-adapt-unifile', '@farris/extend-header-footer', '@farris/extend-page-modal', '@farris/ui-feature-editor', '@farris/extend-scroll-collapsible-area', '@qdp/query-framework', '@qdp/spread', '@qdp/echarts', '@qdp/common', '@qdp/condition-schema', '@angular/router', '@qdp/command-services', '@farris/ui-common', '@farris/ui-loading/farris-ui-loading.ngfactory', '@farris/ui-tooltip/farris-ui-tooltip.ngfactory', '@farris/ui-modal/farris-ui-modal.ngfactory', '@farris/ui-messager/farris-ui-messager.ngfactory', '@farris/ui-notify/farris-ui-notify.ngfactory', '@farris/ui-popover/farris-ui-popover.ngfactory', '@farris/ui-context-menu/farris-ui-context-menu.ngfactory', '@farris/ui-datatable/farris-ui-datatable.ngfactory', '@farris/ui-treetable/farris-ui-treetable.ngfactory', '@farris/ui-lookup/farris-ui-lookup.ngfactory', '@farris/ui-time-picker/farris-ui-time-picker.ngfactory', '@farris/ui-datepicker/farris-ui-datepicker.ngfactory', '@farris/ui-filter-panel/farris-ui-filter-panel.ngfactory', '@progress/kendo-angular-popup.ngfactory', '@gsp-svc/file-viewer/gsp-svc-file-viewer.ngfactory', '@gsp-wf/wf-approval-logs/gsp-wf-wf-approval-logs.ngfactory', '@gsp-wf/ui-flowchart/gsp-wf-ui-flowchart.ngfactory', '@farris/ui-language-textbox/farris-ui-language-textbox.ngfactory', '@farris/ui-modal', 'lodash-es', '@farris/ui-locale', '@farris/ui-perfect-scrollbar', '@farris/ui-popover/farris-ui-popover.ngfactory', '@farris/ui-tooltip/farris-ui-tooltip.ngfactory', '@farris/ui-modal/farris-ui-modal.ngfactory', '@farris/ui-messager/farris-ui-messager.ngfactory', '@farris/ui-notify/farris-ui-notify.ngfactory', '@farris/ui-loading/farris-ui-loading.ngfactory', '@farris/ui-context-menu/farris-ui-context-menu.ngfactory', '@farris/ui-datatable/farris-ui-datatable.ngfactory', '@farris/ui-treetable/farris-ui-treetable.ngfactory', '@farris/ui-lookup/farris-ui-lookup.ngfactory', '@farris/ui-popover', '@farris/ui-modal/positioning', '@farris/ui-modal/component-loader', '@farris/ui-pagination', '@farris/ui-common/date', '@farris/ui-common/number', '@farris/ui-common/column', '@farris/ui-context-menu', '@farris/ui-common/events', '@farris/ui-dialog', '@farris/ui-area-response', '@farris/ui-layout', '@farris/ui-datatable', '@farris/ui-perfect-scrollbar/farris-ui-perfect-scrollbar.ngfactory', '@farris/ui-input-group/farris-ui-input-group.ngfactory', '@farris/ui-filter-editor/farris-ui-filter-editor.ngfactory', '@farris/ui-sort-editor/farris-ui-sort-editor.ngfactory', '@farris/ui-datagrid-editors/farris-ui-datagrid-editors.ngfactory', '@gsp-wf/wf-task-handler/gsp-wf-wf-task-handler.ngfactory', '@farris/ui-verify-detail/farris-ui-verify-detail.ngfactory', '@progress/kendo-angular-grid.ngfactory', '@farris/ui-tabs/farris-ui-tabs.ngfactory', '@gsp-svc/formdoc-upload/gsp-svc-formdoc-upload.ngfactory', '@farris/component-querycondition/farris-component-querycondition.ngfactory', '@gsp-cmp/querysolution/gsp-cmp-querysolution.ngfactory', '@farris/ui-splitter/farris-ui-splitter.ngfactory', '@gsp-wf/rtdevkit/gsp-wf-rtdevkit.ngfactory', '@progress/kendo-angular-dialog.ngfactory', '@gsp-svc/cloudprint/gsp-svc-cloudprint.ngfactory', '@farris/dynamic-control-group/farris-dynamic-control-group.ngfactory', '@farris/ui-batch-edit-dialog/farris-ui-batch-edit-dialog.ngfactory', '@farris/discussion-group/farris-discussion-group.ngfactory', '@farris/extend-file-upload/farris-extend-file-upload.ngfactory', '@farris/ui-datagrid-filter/farris-ui-datagrid-filter.ngfactory', '@farris/ui-organization-selector/farris-ui-organization-selector.ngfactory', '@farris/ui-datagrid-settings/farris-ui-datagrid-settings.ngfactory', '@farris/extend-page-modal/farris-extend-page-modal.ngfactory', '@farris/ui-feature-editor/farris-ui-feature-editor.ngfactory', '@gsp-sys/rtf-ui/gsp-sys-rtf-ui.ngfactory', 'ngx-color-picker/dist/ngx-color-picker.ngfactory', '@progress/kendo-angular-treeview', '@progress/kendo-angular-popup', '@progress/kendo-angular-resize-sensor', '@progress/kendo-angular-layout.ngfactory', '@progress/kendo-angular-l10n', '@progress/kendo-angular-treeview.ngfactory', '@gsp-svc/expression/gsp-svc-expression.ngfactory', '@gsp-svc/filtercondition/gsp-svc-filtercondition.ngfactory', '@farris/ui-response-toolbar/farris-ui-response-toolbar.ngfactory', '@farris/ui-datagrid/farris-ui-datagrid.ngfactory', '@gsp-wf/wf-task-handler', '@farris/ui-section/farris-ui-section.ngfactory', '@farris/ui-text/farris-ui-text.ngfactory', '@farris/ui-forms/validation-message/farris-ui-forms-validation-message.ngfactory', '@farris/ui-shortcuts', '@farris/ui-number-spinner/farris-ui-number-spinner.ngfactory', '@progress/kendo-angular-dialog', '@farris/ui-filter-condition', '@gsp-sys/sysmgr-common', '@gsp-sys/sysmgr-ui', '@gsp-wf/wf-approval-logs', '@farris/component-querycondition', '@gsp-wf/ui-comment', '@farris/extend-file-upload', '@gsp-sys/rtf-ui', 'ngx-color-picker', '@gsp-svc/expression', '@qdp/ide-cmp', '@farris/ui-dropdown', '@gsp-svc/filtercondition', '@farris/ui-datalist', '@farris/ui-filter-panel', '@gsp-wf/task-impl-api', '@gsp-wf/wf-sign', '@farris/ui-filter-editor', '@farris/ui-sort-editor', '@farris/ui-progress', '@farris/ui-progress-step', '@farris/ui-tree', '@farris/ui-organization-selector', '@farris/ui-panel'], function (exports, module) {
    'use strict';
    var Pipe, Injectable, Injector, HostBinding, ViewChild, Component, ElementRef, NgModule, LOCALE_ID, ɵcmf, ɵmod, ɵmpd, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, NgModuleRef, ɵcrt, ɵccf, ɵvid, ɵeld, ɵdid, ViewContainerRef, ChangeDetectorRef, Renderer2, Input, Output, defineInjectable, inject, INJECTOR, forwardRef, EventEmitter, RendererFactory2, PLATFORM_ID, NgZone, ApplicationRef, ɵnov, ɵprd, ɵpid, ɵqud, ɵted, ɵppd, ɵand, TemplateRef, IterableDiffers, ɵunv, ɵEMPTY_MAP, Optional, Sanitizer, ɵinlineInterpolate, KeyValueDiffers, ɵpod, ɵpad, ɵEMPTY_ARRAY, Compiler, Inject, InjectionToken, ErrorHandler, __decorate, __metadata, __extends, __spread, CommonModule, NgLocalization, NgLocaleLocalization, ɵangular_packages_common_common_a, NgForOf, NgIf, DOCUMENT, NgClass, isPlatformBrowser, FormControl, FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_bc, DefaultValueAccessor, COMPOSITION_BUFFER_MODE, NgModel, NgControl, NgControlStatus, FormBuilder, FormGroupDirective, ControlContainer, NgControlStatusGroup, MaxLengthValidator, NG_VALIDATORS, FormControlName, ɵangular_packages_forms_forms_k, DateConverter, KendoBindingModule, FarrisDatagridUseBindingDataDirective, EditableDirective, FarrisDataGridEndEditDirective, FarrisDataGridRemoteSummaryDirective, DatagridComponentRefDirective, SectionComponentRefDirective, InputEndEditDirective, LookupDataMappingDirective, LookupGridComponentRefDirective, DatepickerComponentRefDirective, NumberSpinnerComponentRefDirective, FarrisKendoGridFormatService, FarrisTreetableFormatService, LayoutModule, PanelBarModule, SplitterModule$1, TabStripModule, SplitterService, SplitterComponent, SplitterPaneComponent, FlexLayoutModule, FarrisFormsModule, FormMessageModule, ValidationMessageComponent, LoadingModule, LoadingService, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, MessagerModule, MessagerService, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, NotifyModule, NotifyService, FResponseToolbarModule, ResponseToolbarComponent, UriService, BefProxy, BefRepository, BefLookupRestService, DefaultComboHttpService, FrameworkSessionService, BE_SESSION_HANDLING_STRATEGY_TOKEN, BE_SERVER_URI_TOKEN, TranslateService, TranslateModule, TranslateLoader, MissingTranslationHandler, TranslateStore, TranslateCompiler, TranslateFakeCompiler, TranslateParser, TranslateDefaultParser, USE_DEFAULT_LANG, USE_STORE, TranslateHttpLoader, of, Observable, BehaviorSubject, Subject, from, switchMap, catchError, HttpClient, HttpClientModule, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_f, HTTP_INTERCEPTORS, ɵangular_packages_common_http_http_d, XhrFactory, HttpXhrBackend, HttpBackend, HttpHandler, ɵHttpInterceptingHandler, HttpClientXsrfModule, DomSanitizer, EventManager, Declaration, NgCommand, ViewModel, NgField, NgEntity, Entity, NgObject, NgList, EntityList, NgRepository, NgValidateForm, Form, NgState, State, NgRenderState, NgAction, StateMachine, UIState, NgCommandHandler, CommandHandler, FARRIS_DEVKIT_FRAME_PROVIDERS, FRAME_ID, BindingData, Repository, NAMESPACE, TranslateToken, FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS, AppContext, PARAM_TYPE_TRANSFORM_TOKEN, FORM_ID, EXCEPTION_HANDLER, BACK_END_MESSAGE_HANDLER_TOKEN, COMMAND_HANDLERS_TOKEN, FrameComponent, NgFormControl, FARRIS_DEVKIT_APP_PROVIDERS, FORM_PATH_TOKEN, CommandHandlerRegistry, CommandHandlerExtenderRegistry, COMMAND_HANDLER_EXTENDERS_TOKEN, CommandHandlerFactory, FrameContext, VariableParseService, CommandBus, RouterParamService, ResolveService, ExpressionExecutor, FORM_MANIFEST_SERVICE_TOKEN, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, FRAME_COMPONENT_INIT_HANDLER_TOKEN, UserSettingsToken, AppContextManager, RESOLVER_TOKEN, EntityDependencyResolver, StateDependencyResolver, CommentDependencyResolver, ResolverRegistry, LISTENER_TOKEN, UIStateChangeListener, RepositoryChangeListener, BindingDataChangeListener, EFFECTOR_TOKEN, RepositoryEffector, UIStateEffector, ReadonlyEffector, DependencyEffector, RelativeEffector, ValidateEffector, RequiredEffector, VisibleEffector, ListenerRegistry, Listeners, EffectorRegistry, EffectorFactory, ExpressionRegistry, ExpressionEventEmitter, ExpressionResult, ExpressionManager, ExpressionResultFactory, EVENT_HANDLER_TOKEN, RepositoryAddEntityEventHandler, RepositoryRemoveEntityEventHandler, EntityValueChangedEventHandler, StateValueChangedEventHandler, RepositoryLoadEventHandler, EntityUpdateEventHandler, BindingDataAppendObjectEventHandler, BindingDataValueChangeEventHandler, BindingDataRemoveObjectEventHandler, BindingDataLoadEventHandler, BindingDataSelectionChangedEventHandler, EventHandlerRegistry, ExpressionEngineImpl, FrameEventBus, EventBus, Subscription, RestfulService$1, VARIABLE_PARSERS, FrameIdVariableParser, ɵa$3, EventParamVariableParser, DataVariableParser, UIStateVariableParser, StateMachineVariableParser, CommandVariableParser, NavigationMiddlewareService, CommandService, CardDataService, StateMachineService, ValidationService, EndEditService, PaginationService, ChangeItemService, FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService, ExceptionHandler, BackEndMessageHandler, KeybindingService, LocalizationService, ApplicationParamService, FocusInvalidService, SubListDataService, DataGridService, ListDataService, CommandServicesModule, FormMessageService, FormLoadingService, LanguageService, FormNotifyService, FormErrorService, FilterConditionService, UIStateService, BindingDataService, EntityTraversingService, EntityManipulationService, EntityAggregationService, EntityListService, EntityService, TreeDataService, SubTreeDataService, RuntimeFrameworkService, RemoveDataService, SaveDataService, EditDataService, FilterConditionDataService, RemoteSummaryService, BeActionService, ApproveService, PrintService, AttachmentDataService, AttachmentService, FileService, NavigationEventService, MenuStateService, QuerystringService, NavigationService$2, GridMiddlewareService, SidebarService, FarrisFormService, FARRIS_FORM_COMPONENTS, DialogService$1, RouterService, AuthorityService, ɵb, ɵc, BatchEditService, DiscussionGroupService, FormAttentionService, FeatureDataService, FeatureRepository, FeatureEditService, ExpressionService, PopUpService, DirtyCheckingService, FormService, ViewModelService, FormManifestService, FormExpressionManifestService, WorkFlowMessageHandler, WorkFlowMessageService, WorkFlowMessage, BindingPathService, FormControlService, FrameContextService, HideEventService, FormWizardService, CheckService, DataCheckService, EventService, FilterService$2, ParamService, UserSettingsService, VerifyDetailService, VerifyDetailModule, FrmCommonModule, CacheService, SessionService, LanguageService$1, HttpService, CacheStorageAbstract, CacheMemoryStorage, WindowVariableService, TabEntityService, FrmI18nSettingService, FrameworkService, FrameworkVariableService, AppService, FrmEventBus, FuncsService, LoadingService$1, CommonSharedModule, FarrisTooltipModule, AttentionService, FInputTipsDirective, GridModule, SharedModule, DragAndDropModule, GroupModule, BodyModule, SharedFilterModule, RowFilterModule, FilterMenuModule, ColumnMenuModule, HeaderModule, FooterModule, PagerModule, SuspendService, ResizeService$1, SinglePopupService, ScrollSyncService, DragAndDropService, DragHintService, DropCueService, IdService$1, BrowserSupportService, DomEventsService, LocalDataChangesService, SelectionService, GroupInfoService, GroupsService, Skip, ChangeNotificationService, DetailsService, EditService$1, FilterService, PDFService, ResponsiveService, ExcelService, ColumnResizingService, ColumnReorderService, ColumnInfoService, PagerContextService, ScrollRequestService, FocusRoot, NavigationService, FocusableDirective, SortService, GridComponent, DataBindingDirective, SelectionDirective, CELL_CONTEXT, EMPTY_CELL_CONTEXT, CheckboxColumnComponent, ColumnBase, ColumnComponent, DateInputsModule, DOMService, CenturyViewService, DecadeViewService, MonthViewService, YearViewService, WeekNamesService, EventsModule$1, DateInputModule, CalendarCommonModule, TemplatesModule, VirtualizationModule, CalendarModule$1, DatePickerModule, TOUCH_ENABLED, touchEnabled, NavigationService$3, BusViewService, DOMService$1, HoursService, MinutesService, SecondsService, DayPeriodService, MultiViewCalendarModule, CalendarsModule, TimePickerModule$1, DateRangeModule, DropDownsModule, SharedDirectivesModule, SharedModule$1, DropDownListModule, AutoCompleteModule, ComboBoxModule, MultiSelectModule$1, TOUCH_ENABLED$1, touchEnabled$1, ButtonsModule, ButtonModule, ButtonGroupModule, ListModule, SplitButtonModule, DropDownButtonModule, InputsModule, EventsModule, NumericTextBoxModule, TextBoxModule, DraggableModule, SliderModule, SwitchModule$1, MaskedTextBoxModule, IntlModule, IntlService, CldrIntlService, ServerSideToken, LookupGridComponent, LookupModule, LookupComponent, PersonalConfigService, LookupDefaultMapping, LookupUtils, TreeTableModule, TreetableService, TTHotkeys, FieldGroupModule, ɵa, FarrisTabsModule, FarrisTabsComponent, TabService, FarrisTabComponent, NgbDropdownConfig, NgbTooltipConfig, TabConfig, NgbDropdownModule, NgbTooltipModule, FarrisTagModule, FarrisSidebarModule, FarrisSidebarService, UploadDialogMoudle, UploadDialogService, DownloadService, UploadService, UploadModule, FarrisSectionModule, FarrisSectionComponent, FarrisDatePickerModule, UtilService, DefaultConfigService, FarrisDatepickerComponent, FarrisTimeSpinnerModule, DatagridComponent, GRID_SETTINGS_HTTP, DatagridModule, DatagridSmartFilterService, DatagridFacadeService, DatagridService, ɵt, ValidatorMessagerService, GRID_SETTINGS_SERVICE, NgxPaginationModule, ScrollbarModule, DatagridSmartFilterModule, SCROLLBAR_CONFIG, GRID_EDITORS, GRID_FILTER_ROW, WizardService, WizardModule, QuerySolutionModule, QUERYSOLUTION_HANDLER_TOKEN, FarrisButtonModule, ListViewModule, TimePickerModule, AngularDraggableModule, SplitterModule, ListNavModule, TextModule, TextComponent, WFSubmiteService, WFRuntimeModule, I18nService$1, TaskService$1, UserService, MultiSelectModule, InputGroupModule, InputGroupComponent, ComboServerSideToken, ComboListModule, ComboLocaleService, ComboService, FarrisHtmlEditorModule, ɵb$5, defaultModules, CloudprintService, CloudPrintModule, ɵa$1, ɵb$1, ɵc$1, ɵe, EditorTypes, DatagridEditorsModule, EditorProviders, DatagridTextareaComponent, DatagridTextboxComponent, ɵa$4, ɵb$4, ɵc$3, ɵd$1, ɵe$1, ɵf$2, ɵg$1, ɵh$1, ɵi, ɵj$2, ɵk, DatagridEnumEditorComponent, DatagridFilterEditorComponent, DatagridSortEditorComponent, ViewChangeModule, SwitchModule, SWITCH_OPTIONS, ListFilterModule, LISTFILTER_HANDLER_TOKEN, ConvertorService$2, SolutionService$2, QuerySolutionService$1, SimpleFilterModule, FilterService$1, ConvertorService, SolutionService, AvatarModule, CalendarModule, WFFlowchartService, UiFlowchartModule, UiFlowchartService, NumberSpinnerModule, NumberSpinnerComponent, ComboLookupModule, ScrollspyModule, FarrisScrollSpyService, FileListModule, FileViewerService, ɵj, ɵs, ɵn, ɵu, ɵv, ɵo, ɵz, ɵd, ɵa$2, ɵy, ɵf$1, ɵh, ɵbe, ɵg, ɵt$1, ɵbg, ɵbh, LanguageTextboxModule, DynamicControlGroupModule, BatchEditDialogModule, BatchEditDialogService, DatagridFilterRowModule, FilterRowComponent, DatagridSettingsModule, DatagridSettingsService, FarrisFooterModule, DiscussionGroupModule, DiscussionListService, NavModule, TagsModule, EditorModule, EditorService, TINYMCE_SCRIPT_SRC, FfileuploadAdaptUnifileModule, FFileUploadAdaptUnifileConfigService, FFileUploadAdaptUnifileConfigToken, FfileuploadAdaptUnifileService, FfilepreviewAdaptUnifileService, FEHeaderFooterModule, FEPageModalModule, FEPageModalService, FeatureEditorModule, FeatureEditorService, I18nService, FEScrollCollapsibleAreaModule, FEScrollCollapsibleAreaService, ConditionDialogComponent, QueryFrameworkLayoutComponent, QueryFrameworkModule, QdpViewComponent, SpreadModule, RenderService, EchartsModule, QdpCommonModule, Server_Host, FilterManagerService, RestfulService, ParasMappingManagerService, JointSearchManagerService, LcpService, SchemaManagerService, SchemaRenderExtendService, PrintIntegrationManagerService, ɵb$3, DataRenderExtendService, DndListModule, ConditionSchemaModule, FinishLoadService, ConditionSchemaService, ActivatedRoute, Router, RouterModule, ɵangular_packages_router_router_a, ɵEmptyOutletComponent, RouterOutlet, ChildrenOutletContexts, ROUTES, QDP_COMMAND_SERVICE_PROVIDERS, QueryIndexService, FinishEventService, CommonUtils, FarrisCommonModule, RuntimeStateService, IdService, LoadingComponentNgFactory$1, TooltipComponentNgFactory$1, ModalBackdropComponentNgFactory$1, ModalContainerComponentNgFactory$1, MessagerComponentNgFactory$1, NotifyContainerComponentNgFactory$1, PopoverContainerComponentNgFactory$1, FarrisContextMenuComponentNgFactory$1, DataTableComponentNgFactory$1, TreeTableComponentNgFactory$1, View_LookupGridComponent_0, RenderType_LookupGridComponent, LookupLeftComponentNgFactory$1, LookupTabsComponentNgFactory$1, LookupQuickSelectPanelComponentNgFactory$1, TimePickerPanelComponentNgFactory, View_FarrisDatepickerComponent_0, RenderType_FarrisDatepickerComponent, CalendarComponentNgFactory, FilterPanelComponentNgFactory, PopupComponentNgFactory, ɵbNgFactory, ɵiNgFactory, ɵwNgFactory, ɵbfNgFactory, ɵcNgFactory, ɵeNgFactory, ɵbbNgFactory, ɵbcNgFactory, FileListComponentNgFactory, WfApprovalLogsComponentNgFactory, UIFlowchartComponentNgFactory, LanguageTextPanelComponentNgFactory, BsModalService, ModalModule, cloneDeep, LocaleService, LocaleModule, FARRIS_LOCAL_CUSTOM_DATA, FarrisLocalePipe, PerfectScrollbarModule, PerfectScrollbarComponent, PopoverContainerComponentNgFactory, TooltipComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, MessagerComponentNgFactory, NotifyContainerComponentNgFactory, LoadingComponentNgFactory, FarrisContextMenuComponentNgFactory, DataTableComponentNgFactory, TreeTableComponentNgFactory, LookupLeftComponentNgFactory, LookupTabsComponentNgFactory, LookupQuickSelectPanelComponentNgFactory, PopoverConfig, PopoverModule, PositioningService, ComponentLoaderFactory, PaginationService$1, PaginationModule, DateTimeHelperService, DateHelperModule, NumberHelperService, NumberHelperModule, ColumnFormatService, DataColumnModule, FarrisContextMenuService, FarrisContextMenuModule, ResizeService, DialogService, FarrisDialogModule, FAreaResponseModule, LayoutModule$1, DataTableModule, View_PerfectScrollbarComponent_0, RenderType_PerfectScrollbarComponent, View_InputGroupComponent_0, RenderType_InputGroupComponent, FilterEditorComponentNgFactory, SortEditorComponentNgFactory, ɵlNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ɵaNgFactory$1, ɵbNgFactory$1, ɵcNgFactory$1, ɵdNgFactory, ɵeNgFactory$1, ɵfNgFactory, ɵgNgFactory, ɵhNgFactory, ɵiNgFactory$1, ɵjNgFactory, ɵkNgFactory, DatagridEnumEditorComponentNgFactory, DatagridSortEditorComponentNgFactory, DatagridFilterEditorComponentNgFactory, TaskExecuteComponentNgFactory, TaskAssigninfoComponentNgFactory, ProcessSelectorComponentNgFactory, VerifyDetailComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, View_GridComponent_0, RenderType_GridComponent, View_CheckboxColumnComponent_0, RenderType_CheckboxColumnComponent, View_ColumnComponent_0, RenderType_ColumnComponent, View_FarrisTabsComponent_0, RenderType_FarrisTabsComponent, View_FarrisTabComponent_0, RenderType_FarrisTabComponent, NgbTooltipWindowNgFactory, FileUploadComponentNgFactory, UploadDialogComponentNgFactory, ɵbNgFactory$2, QueryConditionComponentNgFactory, ɵcNgFactory$2, ɵeNgFactory$2, ɵaNgFactory$2, ProcessSelectorComponentNgFactory$1, WfWorkitemHandleComponentNgFactory, UserHelperComponentNgFactory, TaskAssignComponentNgFactory, TaskSignaddComponentNgFactory, TaskTransferComponentNgFactory, ɵaNgFactory$3, WindowComponentNgFactory, WindowTitleBarComponentNgFactory, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, ɵdNgFactory$1, ɵfNgFactory$1, ɵgNgFactory$1, ɵhNgFactory$1, ɵbNgFactory$3, ɵcNgFactory$3, ɵdNgFactory$2, ɵeNgFactory$3, ɵfNgFactory$2, ɵgNgFactory$2, ɵhNgFactory$2, BatchEditDialogComponentNgFactory, ResultConfirmComponentNgFactory, DiscussionPersonnelComponentNgFactory, MultiDownloadInfoComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory, FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory, FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, OrganizationSelectorComponentNgFactory, GridOrganizationSelectorComponentNgFactory, DatagridSettingsComponentNgFactory, SimpleColumnsComponentNgFactory, NewSchemeComponentNgFactory, SchemeListComponentNgFactory, FEPageModalComponentNgFactory, FEModalBackdropComponentNgFactory, ɵaNgFactory$4, FeatureEditorComponentNgFactory, RtfAppComponentNgFactory$1, ColorPickerComponentNgFactory, TreeViewModule, CheckBoxModule, SharedModule$2, IndexBuilderService, LoadingNotificationService, ExpandStateService, NavigationService$1, NodeChildrenService, SelectionService$1, TreeViewLookupService, DataChangeNotificationService, TreeViewComponent, ExpandDirective, SelectDirective, FlatDataBindingDirective, PopupService, POPUP_CONTAINER, PopupModule, ResizeBatchService, ResizeSensorModule, View_SplitterComponent_0, RenderType_SplitterComponent, View_SplitterPaneComponent_0, RenderType_SplitterPaneComponent, L10N_PREFIX, LocalizationService$1, MessageService, RTL, View_TreeViewComponent_0, RenderType_TreeViewComponent, ɵlNgFactory$1, ɵaNgFactory$5, ExpressioneditorComponentNgFactory, FilterConditionComponentNgFactory, FilterExpressionComponentNgFactory, View_ResponseToolbarComponent_0, RenderType_ResponseToolbarComponent, View_DatagridComponent_0, RenderType_DatagridComponent, WfTaskHandlerService, TaskService, I18nService$2, WfTaskHandlerModule, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent, View_TextComponent_0, RenderType_TextComponent, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent, ShortcutsService, View_NumberSpinnerComponent_0, RenderType_NumberSpinnerComponent, WindowService, WindowContainerService, DialogContainerService, DialogService$2, SharedModule$3, WindowModule, DialogModule, DialogsModule, QuerySolutionService, FilterConditionModule, SysCommonUtilService, SysSecurityConfigService, SysCommonModule, HelpFilterMap, SysHelpService, SysExceptionService, ɵf, SysLocaleService, SysManagerUIModule, WfApprovalLogsService, WfApprovalLogsModule, SolutionService$1, ConvertorService$1, QueryConditionModule, TaskCommentService, TaskCommentUIState, TaskCommentViewModel, I18nService$3, TaskCommentRepository, WFCommentModule, UploadServerService, FFileUploaderService, FFileUploadModule, FFileUploadAPIServiceToken, ɵc$2, ɵb$2, RtfAppHelpModule$1, ColorPickerService, ColorPickerModule, ɵm, ExpressionEventService, ExpressionService$1, ɵj$1, ExpressionModule, ɵn$1, ParasMappingService, JointSearchService, SchemaService, PrintIntegrationService, IdeCmpModule, FDropdownDirective, FDropdownDirectiveTypeModule, FilterService$3, FilterConditionModule$1, DatalistModule, FilterPanelModule, TaskImplApiModule, WfSignModule, FilterModule, SorterModule, ProgressModule, ProgressStepModule, TreeModule, OrganizationSelectorModule, FarrisPanelModule;
    return {
        setters: [function (module) {
            Pipe = module.Pipe;
            Injectable = module.Injectable;
            Injector = module.Injector;
            HostBinding = module.HostBinding;
            ViewChild = module.ViewChild;
            Component = module.Component;
            ElementRef = module.ElementRef;
            NgModule = module.NgModule;
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
            Optional = module.Optional;
            Sanitizer = module.Sanitizer;
            ɵinlineInterpolate = module.ɵinlineInterpolate;
            KeyValueDiffers = module.KeyValueDiffers;
            ɵpod = module.ɵpod;
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
            DOCUMENT = module.DOCUMENT;
            NgClass = module.NgClass;
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
            FormBuilder = module.FormBuilder;
            FormGroupDirective = module.FormGroupDirective;
            ControlContainer = module.ControlContainer;
            NgControlStatusGroup = module.NgControlStatusGroup;
            MaxLengthValidator = module.MaxLengthValidator;
            NG_VALIDATORS = module.NG_VALIDATORS;
            FormControlName = module.FormControlName;
            ɵangular_packages_forms_forms_k = module.ɵangular_packages_forms_forms_k;
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
            SplitterService = module.SplitterService;
            SplitterComponent = module.SplitterComponent;
            SplitterPaneComponent = module.SplitterPaneComponent;
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
            from = module.from;
        }, function (module) {
            switchMap = module.switchMap;
            catchError = module.catchError;
        }, function (module) {
            HttpClient = module.HttpClient;
            HttpClientModule = module.HttpClientModule;
            HttpXsrfTokenExtractor = module.HttpXsrfTokenExtractor;
            ɵangular_packages_common_http_http_g = module.ɵangular_packages_common_http_http_g;
            ɵangular_packages_common_http_http_e = module.ɵangular_packages_common_http_http_e;
            ɵangular_packages_common_http_http_h = module.ɵangular_packages_common_http_http_h;
            ɵangular_packages_common_http_http_f = module.ɵangular_packages_common_http_http_f;
            HTTP_INTERCEPTORS = module.HTTP_INTERCEPTORS;
            ɵangular_packages_common_http_http_d = module.ɵangular_packages_common_http_http_d;
            XhrFactory = module.XhrFactory;
            HttpXhrBackend = module.HttpXhrBackend;
            HttpBackend = module.HttpBackend;
            HttpHandler = module.HttpHandler;
            ɵHttpInterceptingHandler = module.ɵHttpInterceptingHandler;
            HttpClientXsrfModule = module.HttpClientXsrfModule;
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
            UIState = module.UIState;
            NgCommandHandler = module.NgCommandHandler;
            CommandHandler = module.CommandHandler;
            FARRIS_DEVKIT_FRAME_PROVIDERS = module.FARRIS_DEVKIT_FRAME_PROVIDERS;
            FRAME_ID = module.FRAME_ID;
            BindingData = module.BindingData;
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
            FrameContext = module.FrameContext;
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
            RestfulService$1 = module.RestfulService;
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
            FormMessageService = module.FormMessageService;
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
            NavigationService$2 = module.NavigationService;
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
            CacheService = module.CacheService;
            SessionService = module.SessionService;
            LanguageService$1 = module.LanguageService;
            HttpService = module.HttpService;
            CacheStorageAbstract = module.CacheStorageAbstract;
            CacheMemoryStorage = module.CacheMemoryStorage;
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
            SuspendService = module.SuspendService;
            ResizeService$1 = module.ResizeService;
            SinglePopupService = module.SinglePopupService;
            ScrollSyncService = module.ScrollSyncService;
            DragAndDropService = module.DragAndDropService;
            DragHintService = module.DragHintService;
            DropCueService = module.DropCueService;
            IdService$1 = module.IdService;
            BrowserSupportService = module.BrowserSupportService;
            DomEventsService = module.DomEventsService;
            LocalDataChangesService = module.LocalDataChangesService;
            SelectionService = module.SelectionService;
            GroupInfoService = module.GroupInfoService;
            GroupsService = module.GroupsService;
            Skip = module.Skip;
            ChangeNotificationService = module.ChangeNotificationService;
            DetailsService = module.DetailsService;
            EditService$1 = module.EditService$1;
            FilterService = module.FilterService;
            PDFService = module.PDFService;
            ResponsiveService = module.ResponsiveService;
            ExcelService = module.ExcelService;
            ColumnResizingService = module.ColumnResizingService;
            ColumnReorderService = module.ColumnReorderService;
            ColumnInfoService = module.ColumnInfoService;
            PagerContextService = module.PagerContextService;
            ScrollRequestService = module.ScrollRequestService;
            FocusRoot = module.FocusRoot;
            NavigationService = module.NavigationService;
            FocusableDirective = module.FocusableDirective;
            SortService = module.SortService;
            GridComponent = module.GridComponent;
            DataBindingDirective = module.DataBindingDirective;
            SelectionDirective = module.SelectionDirective;
            CELL_CONTEXT = module.CELL_CONTEXT;
            EMPTY_CELL_CONTEXT = module.EMPTY_CELL_CONTEXT;
            CheckboxColumnComponent = module.CheckboxColumnComponent;
            ColumnBase = module.ColumnBase;
            ColumnComponent = module.ColumnComponent;
        }, function (module) {
            DateInputsModule = module.DateInputsModule;
            DOMService = module.DOMService;
            CenturyViewService = module.CenturyViewService;
            DecadeViewService = module.DecadeViewService;
            MonthViewService = module.MonthViewService;
            YearViewService = module.YearViewService;
            WeekNamesService = module.WeekNamesService;
            EventsModule$1 = module.EventsModule;
            DateInputModule = module.DateInputModule;
            CalendarCommonModule = module.CalendarCommonModule;
            TemplatesModule = module.TemplatesModule;
            VirtualizationModule = module.VirtualizationModule;
            CalendarModule$1 = module.CalendarModule;
            DatePickerModule = module.DatePickerModule;
            TOUCH_ENABLED = module.TOUCH_ENABLED;
            touchEnabled = module.touchEnabled;
            NavigationService$3 = module.NavigationService;
            BusViewService = module.BusViewService;
            DOMService$1 = module.DOMService$1;
            HoursService = module.HoursService;
            MinutesService = module.MinutesService;
            SecondsService = module.SecondsService;
            DayPeriodService = module.DayPeriodService;
            MultiViewCalendarModule = module.MultiViewCalendarModule;
            CalendarsModule = module.CalendarsModule;
            TimePickerModule$1 = module.TimePickerModule;
            DateRangeModule = module.DateRangeModule;
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
            ComboService = module.ComboService;
        }, function (module) {
            FarrisHtmlEditorModule = module.FarrisHtmlEditorModule;
            ɵb$5 = module.ɵb;
            defaultModules = module.defaultModules;
        }, function (module) {
            CloudprintService = module.CloudprintService;
            CloudPrintModule = module.CloudPrintModule;
            ɵa$1 = module.ɵa;
            ɵb$1 = module.ɵb;
            ɵc$1 = module.ɵc;
            ɵe = module.ɵe;
        }, function (module) {
            EditorTypes = module.EditorTypes;
            DatagridEditorsModule = module.DatagridEditorsModule;
            EditorProviders = module.EditorProviders;
            DatagridTextareaComponent = module.DatagridTextareaComponent;
            DatagridTextboxComponent = module.DatagridTextboxComponent;
            ɵa$4 = module.ɵa;
            ɵb$4 = module.ɵb;
            ɵc$3 = module.ɵc;
            ɵd$1 = module.ɵd;
            ɵe$1 = module.ɵe;
            ɵf$2 = module.ɵf;
            ɵg$1 = module.ɵg;
            ɵh$1 = module.ɵh;
            ɵi = module.ɵi;
            ɵj$2 = module.ɵj;
            ɵk = module.ɵk;
            DatagridEnumEditorComponent = module.DatagridEnumEditorComponent;
            DatagridFilterEditorComponent = module.DatagridFilterEditorComponent;
            DatagridSortEditorComponent = module.DatagridSortEditorComponent;
        }, function (module) {
            ViewChangeModule = module.ViewChangeModule;
        }, function (module) {
            SwitchModule = module.SwitchModule;
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
            ɵf$1 = module.ɵf;
            ɵh = module.ɵh;
            ɵbe = module.ɵbe;
            ɵg = module.ɵg;
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
            ConditionDialogComponent = module.ConditionDialogComponent;
            QueryFrameworkLayoutComponent = module.QueryFrameworkLayoutComponent;
            QueryFrameworkModule = module.QueryFrameworkModule;
        }, function (module) {
            QdpViewComponent = module.QdpViewComponent;
            SpreadModule = module.SpreadModule;
            RenderService = module.RenderService;
        }, function (module) {
            EchartsModule = module.EchartsModule;
        }, function (module) {
            QdpCommonModule = module.QdpCommonModule;
            Server_Host = module.Server_Host;
            FilterManagerService = module.FilterManagerService;
            RestfulService = module.RestfulService;
            ParasMappingManagerService = module.ParasMappingManagerService;
            JointSearchManagerService = module.JointSearchManagerService;
            LcpService = module.LcpService;
            SchemaManagerService = module.SchemaManagerService;
            SchemaRenderExtendService = module.SchemaRenderExtendService;
            PrintIntegrationManagerService = module.PrintIntegrationManagerService;
            ɵb$3 = module.ɵb;
            DataRenderExtendService = module.DataRenderExtendService;
            DndListModule = module.DndListModule;
        }, function (module) {
            ConditionSchemaModule = module.ConditionSchemaModule;
            FinishLoadService = module.FinishLoadService;
            ConditionSchemaService = module.ConditionSchemaService;
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
            QDP_COMMAND_SERVICE_PROVIDERS = module.QDP_COMMAND_SERVICE_PROVIDERS;
            QueryIndexService = module.QueryIndexService;
            FinishEventService = module.FinishEventService;
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
            ɵaNgFactory$1 = module.ɵaNgFactory;
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
            View_GridComponent_0 = module.View_GridComponent_0;
            RenderType_GridComponent = module.RenderType_GridComponent;
            View_CheckboxColumnComponent_0 = module.View_CheckboxColumnComponent_0;
            RenderType_CheckboxColumnComponent = module.RenderType_CheckboxColumnComponent;
            View_ColumnComponent_0 = module.View_ColumnComponent_0;
            RenderType_ColumnComponent = module.RenderType_ColumnComponent;
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
            ɵaNgFactory$2 = module.ɵaNgFactory;
        }, function (module) {
            ProcessSelectorComponentNgFactory$1 = module.ProcessSelectorComponentNgFactory;
            WfWorkitemHandleComponentNgFactory = module.WfWorkitemHandleComponentNgFactory;
            UserHelperComponentNgFactory = module.UserHelperComponentNgFactory;
            TaskAssignComponentNgFactory = module.TaskAssignComponentNgFactory;
            TaskSignaddComponentNgFactory = module.TaskSignaddComponentNgFactory;
            TaskTransferComponentNgFactory = module.TaskTransferComponentNgFactory;
            ɵaNgFactory$3 = module.ɵaNgFactory;
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
            ɵaNgFactory$4 = module.ɵaNgFactory;
        }, function (module) {
            FeatureEditorComponentNgFactory = module.FeatureEditorComponentNgFactory;
        }, function (module) {
            RtfAppComponentNgFactory$1 = module.RtfAppComponentNgFactory;
        }, function (module) {
            ColorPickerComponentNgFactory = module.ColorPickerComponentNgFactory;
        }, function (module) {
            TreeViewModule = module.TreeViewModule;
            CheckBoxModule = module.CheckBoxModule;
            SharedModule$2 = module.SharedModule;
            IndexBuilderService = module.IndexBuilderService;
            LoadingNotificationService = module.LoadingNotificationService;
            ExpandStateService = module.ExpandStateService;
            NavigationService$1 = module.NavigationService;
            NodeChildrenService = module.NodeChildrenService;
            SelectionService$1 = module.SelectionService;
            TreeViewLookupService = module.TreeViewLookupService;
            DataChangeNotificationService = module.DataChangeNotificationService;
            TreeViewComponent = module.TreeViewComponent;
            ExpandDirective = module.ExpandDirective;
            SelectDirective = module.SelectDirective;
            FlatDataBindingDirective = module.FlatDataBindingDirective;
        }, function (module) {
            PopupService = module.PopupService;
            POPUP_CONTAINER = module.POPUP_CONTAINER;
            PopupModule = module.PopupModule;
        }, function (module) {
            ResizeBatchService = module.ResizeBatchService;
            ResizeSensorModule = module.ResizeSensorModule;
        }, function (module) {
            View_SplitterComponent_0 = module.View_SplitterComponent_0;
            RenderType_SplitterComponent = module.RenderType_SplitterComponent;
            View_SplitterPaneComponent_0 = module.View_SplitterPaneComponent_0;
            RenderType_SplitterPaneComponent = module.RenderType_SplitterPaneComponent;
        }, function (module) {
            L10N_PREFIX = module.L10N_PREFIX;
            LocalizationService$1 = module.LocalizationService;
            MessageService = module.MessageService;
            RTL = module.RTL;
        }, function (module) {
            View_TreeViewComponent_0 = module.View_TreeViewComponent_0;
            RenderType_TreeViewComponent = module.RenderType_TreeViewComponent;
        }, function (module) {
            ɵlNgFactory$1 = module.ɵlNgFactory;
            ɵaNgFactory$5 = module.ɵaNgFactory;
            ExpressioneditorComponentNgFactory = module.ExpressioneditorComponentNgFactory;
        }, function (module) {
            FilterConditionComponentNgFactory = module.FilterConditionComponentNgFactory;
            FilterExpressionComponentNgFactory = module.FilterExpressionComponentNgFactory;
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
            View_TextComponent_0 = module.View_TextComponent_0;
            RenderType_TextComponent = module.RenderType_TextComponent;
        }, function (module) {
            View_ValidationMessageComponent_0 = module.View_ValidationMessageComponent_0;
            RenderType_ValidationMessageComponent = module.RenderType_ValidationMessageComponent;
        }, function (module) {
            ShortcutsService = module.ShortcutsService;
        }, function (module) {
            View_NumberSpinnerComponent_0 = module.View_NumberSpinnerComponent_0;
            RenderType_NumberSpinnerComponent = module.RenderType_NumberSpinnerComponent;
        }, function (module) {
            WindowService = module.WindowService;
            WindowContainerService = module.WindowContainerService;
            DialogContainerService = module.DialogContainerService;
            DialogService$2 = module.DialogService;
            SharedModule$3 = module.SharedModule;
            WindowModule = module.WindowModule;
            DialogModule = module.DialogModule;
            DialogsModule = module.DialogsModule;
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
            ɵf = module.ɵf;
            SysLocaleService = module.SysLocaleService;
            SysManagerUIModule = module.SysManagerUIModule;
        }, function (module) {
            WfApprovalLogsService = module.WfApprovalLogsService;
            WfApprovalLogsModule = module.WfApprovalLogsModule;
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
            ɵc$2 = module.ɵc;
            ɵb$2 = module.ɵb;
            RtfAppHelpModule$1 = module.RtfAppHelpModule;
        }, function (module) {
            ColorPickerService = module.ColorPickerService;
            ColorPickerModule = module.ColorPickerModule;
        }, function (module) {
            ɵm = module.ɵm;
            ExpressionEventService = module.ExpressionEventService;
            ExpressionService$1 = module.ExpressionService;
            ɵj$1 = module.ɵj;
            ExpressionModule = module.ExpressionModule;
            ɵn$1 = module.ɵn;
        }, function (module) {
            ParasMappingService = module.ParasMappingService;
            JointSearchService = module.JointSearchService;
            SchemaService = module.SchemaService;
            PrintIntegrationService = module.PrintIntegrationService;
            IdeCmpModule = module.IdeCmpModule;
        }, function (module) {
            FDropdownDirective = module.FDropdownDirective;
            FDropdownDirectiveTypeModule = module.FDropdownDirectiveTypeModule;
        }, function (module) {
            FilterService$3 = module.FilterService;
            FilterConditionModule$1 = module.FilterConditionModule;
        }, function (module) {
            DatalistModule = module.DatalistModule;
        }, function (module) {
            FilterPanelModule = module.FilterPanelModule;
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
            FarrisPanelModule = module.FarrisPanelModule;
        }],
        execute: function () {

            function createTranslateLoader(http, version) {
                var versionSuffix = "";
                if (version) {
                    versionSuffix = "?v=" + version;
                }
                return new TranslateHttpLoader(http, '/apps/scm/cm/web/bo-purchaseorder-front/purchaseorderdetail/i18n/', '.json' + versionSuffix);
            }
            var lang = { "zh-CHS": { "materialId_MaterialId_MaterialCat_d133ecf7_ql7e": "物料类别", "GridField/materialId_MaterialId_MaterialCat_d133ecf7_ql7e/editor/materialId_MaterialId_MaterialCat_d133ecf7_moh6": "文本", "GridField/materialId_MaterialId_MaterialCat_d133ecf7_ql7e/editor/TextBox/materialId_MaterialId_MaterialCat_d133ecf7_moh6/placeHolder": "", "root-component": "", "root-layout": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "title": "采购订单详情", "page-header-toolbar": "", "button-add": "新增", "button-edit": "编辑", "button-save": "保存", "button-cancel": "取消", "main-container": "", "like-card-container": "", "basic-form-component-ref": "", "detail-container": "", "detail-section": "", "Section/detail-section/mainTitle": "", "Section/detail-section/subTitle": "", "detail-tab": "", "orderdetails-tab-page": "采购订单明细", "orderdetails-component-ref": "", "orderdetails-tab-toolbar": "", "orderdetailsAddButton": "新增", "orderdetailsRemoveButton": "删除", "basic-form-component": "", "basic-form-section": "", "Section/basic-form-section/mainTitle": "基本信息", "Section/basic-form-section/subTitle": "", "basic-form-layout": "", "orderCode_8f6f5647_uaby": "订单编号", "TextBox/orderCode_8f6f5647_uaby/placeHolder": "", "orderName_35bceb1e_r0en": "订单名称", "TextBox/orderName_35bceb1e_r0en/placeHolder": "", "purchaseDept_PurchaseDept_name_a6a5688e_ss3h": "采购部门", "LookupEdit/purchaseDept_PurchaseDept_name_a6a5688e_ss3h/placeHolder": "", "LookupEdit/purchaseDept_PurchaseDept_name_a6a5688e_ss3h/dialogTitle": "", "purchaser_Purchaser_Name_8e36074b_1h8e": "采购人", "LookupEdit/purchaser_Purchaser_Name_8e36074b_1h8e/placeHolder": "", "LookupEdit/purchaser_Purchaser_Name_8e36074b_1h8e/dialogTitle": "", "orderDate_56f7fcde_n04v": "下单日期", "DateBox/orderDate_56f7fcde_n04v/placeHolder": "", "totalPrice_b3c131a8_xth5": "物料总价", "NumberSpinner/totalPrice_b3c131a8_xth5/placeHolder": "", "orderdetails-component": "", "orderdetails-component-layout": "", "dataGrid_orderdetails": "", "DataGrid/dataGrid_orderdetails/lineNumberTitle": "", "DataGrid/dataGrid_orderdetails/OperateEditButton": "编辑", "DataGrid/dataGrid_orderdetails/OperateDeleteButton": "删除", "DataGrid/dataGrid_orderdetails/OperateColumn": "操作", "materialId_MaterialId_MaterialCode_4b4e149b_20en": "物料编号", "GridField/materialId_MaterialId_MaterialCode_4b4e149b_20en/editor/materialId_MaterialId_MaterialCode_4b4e149b_2ctd": "文本", "GridField/materialId_MaterialId_MaterialCode_4b4e149b_20en/editor/LookupEdit/materialId_MaterialId_MaterialCode_4b4e149b_2ctd/placeHolder": "", "GridField/materialId_MaterialId_MaterialCode_4b4e149b_20en/editor/LookupEdit/materialId_MaterialId_MaterialCode_4b4e149b_2ctd/dialogTitle": "", "materialId_MaterialId_MaterialName_a5c03a88_809u": "物料名称", "GridField/materialId_MaterialId_MaterialName_a5c03a88_809u/editor/materialId_MaterialId_MaterialName_a5c03a88_02gq": "文本", "GridField/materialId_MaterialId_MaterialName_a5c03a88_809u/editor/TextBox/materialId_MaterialId_MaterialName_a5c03a88_02gq/placeHolder": "", "materialId_MaterialId_MaterialCat_CatName_d031c736_pe2r": "类别名称", "GridField/materialId_MaterialId_MaterialCat_CatName_d031c736_pe2r/editor/materialId_MaterialId_MaterialCat_CatName_d031c736_0alv": "类别名称", "GridField/materialId_MaterialId_MaterialCat_CatName_d031c736_pe2r/editor/TextBox/materialId_MaterialId_MaterialCat_CatName_d031c736_0alv/placeHolder": "", "materialId_MaterialId_EvePrice_e3cd5498_b9ip": "市场价格", "GridField/materialId_MaterialId_EvePrice_e3cd5498_b9ip/editor/materialId_MaterialId_EvePrice_e3cd5498_49kl": "数值框", "GridField/materialId_MaterialId_EvePrice_e3cd5498_b9ip/editor/NumberSpinner/materialId_MaterialId_EvePrice_e3cd5498_49kl/placeHolder": "", "amount_58fd9353_fn66": "物料数量", "GridField/amount_58fd9353_fn66/editor/amount_58fd9353_0crg": "数值框", "GridField/amount_58fd9353_fn66/editor/NumberSpinner/amount_58fd9353_0crg/placeHolder": "", "supplier_Supplier_SupplierCode_ae2bec36_wkv2": "供应商编号", "GridField/supplier_Supplier_SupplierCode_ae2bec36_wkv2/editor/supplier_Supplier_SupplierCode_ae2bec36_6df1": "文本", "GridField/supplier_Supplier_SupplierCode_ae2bec36_wkv2/editor/LookupEdit/supplier_Supplier_SupplierCode_ae2bec36_6df1/placeHolder": "", "GridField/supplier_Supplier_SupplierCode_ae2bec36_wkv2/editor/LookupEdit/supplier_Supplier_SupplierCode_ae2bec36_6df1/dialogTitle": "", "supplier_Supplier_SupplierName_63c38913_j2pw": "供应商名称", "GridField/supplier_Supplier_SupplierName_63c38913_j2pw/editor/supplier_Supplier_SupplierName_63c38913_ac4f": "文本", "GridField/supplier_Supplier_SupplierName_63c38913_j2pw/editor/TextBox/supplier_Supplier_SupplierName_63c38913_ac4f/placeHolder": "", "supplier_Supplier_ContactsEmail_bbc84198_n9pv": "联系人邮箱", "GridField/supplier_Supplier_ContactsEmail_bbc84198_n9pv/editor/supplier_Supplier_ContactsEmail_bbc84198_dkci": "文本", "GridField/supplier_Supplier_ContactsEmail_bbc84198_n9pv/editor/TextBox/supplier_Supplier_ContactsEmail_bbc84198_dkci/placeHolder": "", "supplier_Supplier_ContactsAddress_65f7e3ff_389o": "办公地址", "GridField/supplier_Supplier_ContactsAddress_65f7e3ff_389o/editor/supplier_Supplier_ContactsAddress_65f7e3ff_ggel": "文本", "GridField/supplier_Supplier_ContactsAddress_65f7e3ff_389o/editor/TextBox/supplier_Supplier_ContactsAddress_65f7e3ff_ggel/placeHolder": "" } };
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
                        var httpOb = this.http.get("/apps/scm/cm/web/bo-purchaseorder-front/version.json?v=" + new Date().getTime()).pipe(switchMap(function (data) {
                            var currentVersion = null;
                            if (data instanceof Array) {
                                var versionKey_1 = "purchaseorderdetail/" + langCode + ".json";
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
                        'OrderdetailsComponentViewmodel': 'orderdetailsComponentViewmodel'
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
                            transitionAction: 'Cancel'
                        },
                        paramDescriptions: {
                            id: ɵ0,
                            transitionAction: { type: 'string' }
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
                            transitionAction: 'Edit'
                        },
                        paramDescriptions: {
                            id: ɵ1,
                            transitionAction: { type: 'string' }
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
                            transitionAction: 'Cancel'
                        },
                        paramDescriptions: {
                            transitionAction: { type: 'string' }
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
                RootViewmodel = __decorate([
                    Injectable()
                ], RootViewmodel);
                return RootViewmodel;
            }(ViewModel));

            var MaterialE577Entity = /** @class */ (function (_super) {
                __extends(MaterialE577Entity, _super);
                function MaterialE577Entity() {
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
                ], MaterialE577Entity.prototype, "materialId", void 0);
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
                ], MaterialE577Entity.prototype, "materialId_ID", void 0);
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
                ], MaterialE577Entity.prototype, "materialId_MaterialCode", void 0);
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
                ], MaterialE577Entity.prototype, "materialId_MaterialName", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'EvePrice',
                        dataField: 'materialId_EvePrice',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'MaterialId.MaterialId_EvePrice',
                    }),
                    __metadata("design:type", Object)
                ], MaterialE577Entity.prototype, "materialId_EvePrice", void 0);
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
                ], MaterialE577Entity.prototype, "materialId_MaterialCat_CatName", void 0);
                MaterialE577Entity = __decorate([
                    NgEntity({
                        originalCode: "MaterialId",
                        nodeCode: "materialId"
                    })
                ], MaterialE577Entity);
                return MaterialE577Entity;
            }(Entity));

            var SupplierMa64aeEntity = /** @class */ (function (_super) {
                __extends(SupplierMa64aeEntity, _super);
                function SupplierMa64aeEntity() {
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
                ], SupplierMa64aeEntity.prototype, "supplier", void 0);
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
                ], SupplierMa64aeEntity.prototype, "supplier_ID", void 0);
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
                ], SupplierMa64aeEntity.prototype, "supplier_SupplierName", void 0);
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
                ], SupplierMa64aeEntity.prototype, "supplier_SupplierCode", void 0);
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
                ], SupplierMa64aeEntity.prototype, "supplier_ContactsEmail", void 0);
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
                ], SupplierMa64aeEntity.prototype, "supplier_ContactsAddress", void 0);
                SupplierMa64aeEntity = __decorate([
                    NgEntity({
                        originalCode: "Supplier",
                        nodeCode: "supplier"
                    })
                ], SupplierMa64aeEntity);
                return SupplierMa64aeEntity;
            }(Entity));

            var OrderDetailsEntity = /** @class */ (function (_super) {
                __extends(OrderDetailsEntity, _super);
                function OrderDetailsEntity() {
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
                ], OrderDetailsEntity.prototype, "id", void 0);
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
                ], OrderDetailsEntity.prototype, "parentID", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Amount',
                        dataField: 'amount',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'Amount',
                    }),
                    __metadata("design:type", Object)
                ], OrderDetailsEntity.prototype, "amount", void 0);
                __decorate([
                    NgObject({
                        dataField: 'materialId',
                        originalDataField: 'MaterialId',
                        type: MaterialE577Entity
                    }),
                    __metadata("design:type", MaterialE577Entity)
                ], OrderDetailsEntity.prototype, "materialId", void 0);
                __decorate([
                    NgObject({
                        dataField: 'supplier',
                        originalDataField: 'Supplier',
                        type: SupplierMa64aeEntity
                    }),
                    __metadata("design:type", SupplierMa64aeEntity)
                ], OrderDetailsEntity.prototype, "supplier", void 0);
                OrderDetailsEntity = __decorate([
                    NgEntity({
                        originalCode: "OrderDetails",
                        nodeCode: "orderDetailss"
                    })
                ], OrderDetailsEntity);
                return OrderDetailsEntity;
            }(Entity));

            var SysOrg77e5Entity = /** @class */ (function (_super) {
                __extends(SysOrg77e5Entity, _super);
                function SysOrg77e5Entity() {
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
                ], SysOrg77e5Entity.prototype, "purchaseDept", void 0);
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
                ], SysOrg77e5Entity.prototype, "purchaseDept_ID", void 0);
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
                ], SysOrg77e5Entity.prototype, "purchaseDept_name", void 0);
                SysOrg77e5Entity = __decorate([
                    NgEntity({
                        originalCode: "PurchaseDept",
                        nodeCode: "purchaseDept"
                    })
                ], SysOrg77e5Entity);
                return SysOrg77e5Entity;
            }(Entity));

            var GspUser57e9Entity = /** @class */ (function (_super) {
                __extends(GspUser57e9Entity, _super);
                function GspUser57e9Entity() {
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
                ], GspUser57e9Entity.prototype, "purchaser", void 0);
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
                ], GspUser57e9Entity.prototype, "purchaser_ID", void 0);
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
                ], GspUser57e9Entity.prototype, "purchaser_Name", void 0);
                GspUser57e9Entity = __decorate([
                    NgEntity({
                        originalCode: "Purchaser",
                        nodeCode: "purchaser"
                    })
                ], GspUser57e9Entity);
                return GspUser57e9Entity;
            }(Entity));

            var PurchaseOrderEntity = /** @class */ (function (_super) {
                __extends(PurchaseOrderEntity, _super);
                function PurchaseOrderEntity() {
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
                ], PurchaseOrderEntity.prototype, "id", void 0);
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
                ], PurchaseOrderEntity.prototype, "version", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'OrderCode',
                        dataField: 'orderCode',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'OrderCode',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], PurchaseOrderEntity.prototype, "orderCode", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'OrderName',
                        dataField: 'orderName',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'OrderName',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], PurchaseOrderEntity.prototype, "orderName", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'OrderDate',
                        dataField: 'orderDate',
                        originalDataFieldType: 'Date',
                        initValue: '0001-01-01T00:00:00',
                        path: 'OrderDate',
                    }),
                    __metadata("design:type", String)
                ], PurchaseOrderEntity.prototype, "orderDate", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'TotalPrice',
                        dataField: 'totalPrice',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'TotalPrice',
                    }),
                    __metadata("design:type", Object)
                ], PurchaseOrderEntity.prototype, "totalPrice", void 0);
                __decorate([
                    NgList({
                        dataField: 'orderDetailss',
                        originalDataField: '',
                        type: OrderDetailsEntity
                    }),
                    __metadata("design:type", EntityList)
                ], PurchaseOrderEntity.prototype, "orderDetailss", void 0);
                __decorate([
                    NgObject({
                        dataField: 'purchaseDept',
                        originalDataField: 'PurchaseDept',
                        type: SysOrg77e5Entity
                    }),
                    __metadata("design:type", SysOrg77e5Entity)
                ], PurchaseOrderEntity.prototype, "purchaseDept", void 0);
                __decorate([
                    NgObject({
                        dataField: 'purchaser',
                        originalDataField: 'Purchaser',
                        type: GspUser57e9Entity
                    }),
                    __metadata("design:type", GspUser57e9Entity)
                ], PurchaseOrderEntity.prototype, "purchaser", void 0);
                PurchaseOrderEntity = __decorate([
                    NgEntity({
                        originalCode: "PurchaseOrder",
                        nodeCode: "purchaseOrders"
                    })
                ], PurchaseOrderEntity);
                return PurchaseOrderEntity;
            }(Entity));

            var PurchaseOrderProxy = /** @class */ (function (_super) {
                __extends(PurchaseOrderProxy, _super);
                function PurchaseOrderProxy(httpClient, uriService) {
                    var _this = _super.call(this, httpClient, uriService) || this;
                    _this.apiUrl = 'api/scm/cm/v1.0/purchaseorderdetail_frm';
                    _this.baseUri = uriService.extendUri(_this.apiUrl);
                    return _this;
                }
                PurchaseOrderProxy = __decorate([
                    Injectable(),
                    __metadata("design:paramtypes", [HttpClient,
                        UriService])
                ], PurchaseOrderProxy);
                return PurchaseOrderProxy;
            }(BefProxy));

            var PurchaseOrderRepository = /** @class */ (function (_super) {
                __extends(PurchaseOrderRepository, _super);
                function PurchaseOrderRepository(injector) {
                    var _this = _super.call(this, injector) || this;
                    _this.name = 'PurchaseOrderRepository';
                    _this.paginationInfo = {};
                    _this.proxy = injector.get(PurchaseOrderProxy, null);
                    return _this;
                }
                PurchaseOrderRepository = __decorate([
                    Injectable(),
                    NgRepository({
                        apiUrl: 'api/scm/cm/v1.0/purchaseorderdetail_frm',
                        entityType: PurchaseOrderEntity
                    }),
                    __metadata("design:paramtypes", [Injector])
                ], PurchaseOrderRepository);
                return PurchaseOrderRepository;
            }(BefRepository));

            var RootViewmodelForm = /** @class */ (function (_super) {
                __extends(RootViewmodelForm, _super);
                function RootViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                RootViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '采购订单',
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
                    _this.orderdetailsTabToolbar = {
                        position: 'inHead',
                        contents: [
                            {
                                id: 'orderdetailsAddButton',
                                disable: !_this.viewModel.stateMachine['canAddDetail'],
                                visible: true,
                                title: _this.langService.transform('orderdetailsAddButton', _this.lang, "新增"),
                                click: function () { _this.viewModel.orderdetailsComponentViewmodel.orderdetailsAddItem1(); },
                                appearance: {
                                    "class": "btn btn-secondary f-btn-ml"
                                }
                            },
                            {
                                id: 'orderdetailsRemoveButton',
                                disable: !_this.viewModel.stateMachine['canRemoveDetail'],
                                visible: true,
                                title: _this.langService.transform('orderdetailsRemoveButton', _this.lang, "删除"),
                                click: function () { _this.viewModel.orderdetailsComponentViewmodel.orderdetailsRemoveItem1(); },
                                appearance: {
                                    "class": "btn btn-secondary f-btn-ml"
                                }
                            }
                        ]
                    };
                    _this.orderdetailstabpage = _this.langService.transform('orderdetails-tab-page', _this.lang, "采购订单明细");
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
                            'orderdetailsAddButton': !_this.viewModel.stateMachine['canAddDetail'],
                            'orderdetailsRemoveButton': !_this.viewModel.stateMachine['canRemoveDetail'],
                        };
                        _this.tabsToolbarStates.next(states);
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var visibleStates = {
                            'orderdetailsAddButton': true,
                            'orderdetailsRemoveButton': true,
                        };
                        _this.tabsToolbarVisibleStates.next(visibleStates);
                    });
                };
                RootComponent.prototype.ngAfterViewInit = function () {
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
                __decorate([
                    ViewChild(ConditionDialogComponent),
                    __metadata("design:type", ConditionDialogComponent)
                ], RootComponent.prototype, "conditionDialog", void 0);
                __decorate([
                    ViewChild(QdpViewComponent),
                    __metadata("design:type", QdpViewComponent)
                ], RootComponent.prototype, "qdpViewComponent", void 0);
                __decorate([
                    ViewChild(QueryFrameworkLayoutComponent),
                    __metadata("design:type", QueryFrameworkLayoutComponent)
                ], RootComponent.prototype, "queryFrameworkLayoutComponent", void 0);
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
                            { provide: Repository, useExisting: PurchaseOrderRepository },
                            LangService,
                            { provide: NAMESPACE, useValue: '' },
                            QDP_COMMAND_SERVICE_PROVIDERS,
                            { provide: ServerSideToken, useClass: BefLookupRestService },
                            { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                            { provide: Form, useClass: RootViewmodelForm },
                            { provide: StateMachine, useClass: RootViewmodelStateMachine },
                            { provide: UIState, useClass: RootViewmodelUIState },
                            FrameworkSessionService,
                            UriService,
                            PurchaseOrderProxy,
                            PurchaseOrderRepository,
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
                            { provide: FORM_ID, useValue: "9c4742c3-a1f7-49fe-969d-21dd36f60c5d" },
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
            var PurchaseOrderDetailRoutingModule = /** @class */ (function () {
                function PurchaseOrderDetailRoutingModule() {
                }
                PurchaseOrderDetailRoutingModule = __decorate([
                    NgModule({
                        imports: [
                            RouterModule.forChild(routes)
                        ],
                        exports: [
                            RouterModule
                        ]
                    })
                ], PurchaseOrderDetailRoutingModule);
                return PurchaseOrderDetailRoutingModule;
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
                        id: 'orderCode_8f6f5647_uaby',
                        name: "{{orderCode_8f6f5647_uaby}}",
                        binding: 'orderCode',
                        updateOn: 'blur',
                        defaultI18nValue: '订单编号',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "orderCode", void 0);
                __decorate([
                    NgFormControl({
                        id: 'orderName_35bceb1e_r0en',
                        name: "{{orderName_35bceb1e_r0en}}",
                        binding: 'orderName',
                        updateOn: 'blur',
                        defaultI18nValue: '订单名称',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "orderName", void 0);
                __decorate([
                    NgFormControl({
                        id: 'purchaseDept_PurchaseDept_name_a6a5688e_ss3h',
                        name: "{{purchaseDept_PurchaseDept_name_a6a5688e_ss3h}}",
                        binding: 'purchaseDept.purchaseDept_name',
                        updateOn: 'blur',
                        defaultI18nValue: '采购部门',
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "purchaseDept_PurchaseDept_name", void 0);
                __decorate([
                    NgFormControl({
                        id: 'purchaser_Purchaser_Name_8e36074b_1h8e',
                        name: "{{purchaser_Purchaser_Name_8e36074b_1h8e}}",
                        binding: 'purchaser.purchaser_Name',
                        updateOn: 'blur',
                        defaultI18nValue: '采购人',
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "purchaser_Purchaser_Name", void 0);
                __decorate([
                    NgFormControl({
                        id: 'orderDate_56f7fcde_n04v',
                        name: "{{orderDate_56f7fcde_n04v}}",
                        binding: 'orderDate',
                        updateOn: 'blur',
                        valueConverter: new DateConverter('yyyy-MM-dd'),
                        defaultI18nValue: '下单日期',
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "orderDate", void 0);
                __decorate([
                    NgFormControl({
                        id: 'totalPrice_b3c131a8_xth5',
                        name: "{{totalPrice_b3c131a8_xth5}}",
                        binding: 'totalPrice',
                        updateOn: 'blur',
                        defaultI18nValue: '物料总价',
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "totalPrice", void 0);
                BasicFormViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '采购订单',
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
                    _this.LookupEditpurchaseDeptPurchaseDeptnamea6a5688ess3hDialogTitle = _this.langService.transform('LookupEdit/purchaseDept_PurchaseDept_name_a6a5688e_ss3h/dialogTitle', _this.lang, "");
                    _this.purchaseDept_PurchaseDept_name_a6a5688e_ss3h_PlaceHolder = _this.langService.transform('LookupEdit/purchaseDept_PurchaseDept_name_a6a5688e_ss3h/placeHolder', _this.lang, "");
                    _this.purchaseDept_PurchaseDept_name_a6a5688e_ss3hQuickSelect = {
                        "enable": false,
                        "showItemsCount": 10,
                        "showMore": true
                    };
                    _this.LookupEditpurchaserPurchaserName8e36074b1h8eDialogTitle = _this.langService.transform('LookupEdit/purchaser_Purchaser_Name_8e36074b_1h8e/dialogTitle', _this.lang, "");
                    _this.purchaser_Purchaser_Name_8e36074b_1h8e_PlaceHolder = _this.langService.transform('LookupEdit/purchaser_Purchaser_Name_8e36074b_1h8e/placeHolder', _this.lang, "");
                    _this.purchaser_Purchaser_Name_8e36074b_1h8eQuickSelect = {
                        "enable": false,
                        "showItemsCount": 10,
                        "showMore": true
                    };
                    _this.totalPrice_b3c131a8_xth5_PlaceHolder = _this.langService.transform('NumericBox/totalPrice_b3c131a8_xth5/placeHolder', _this.lang, "");
                    _this.totalPriceB3c131a8Xth5TextOptions = {
                        "type": "number",
                        "useThousands": true,
                        "precision": 2,
                    };
                    _this.orderDate_56f7fcde_n04v_PlaceHolder = _this.langService.transform('DateBox/orderDate_56f7fcde_n04v/placeHolder', _this.lang, "");
                    _this.orderCode_8f6f5647_uaby_PlaceHolder = _this.langService.transform('TextBox/orderCode_8f6f5647_uaby/placeHolder', _this.lang, "");
                    _this.orderName_35bceb1e_r0en_PlaceHolder = _this.langService.transform('TextBox/orderName_35bceb1e_r0en/placeHolder', _this.lang, "");
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
                    this.componentManagerService.appendControl('purchaseDept_PurchaseDept_name_a6a5688e_ss3h', this.purchaseDept_PurchaseDept_name_a6a5688e_ss3h);
                    this.componentManagerService.appendControl('purchaser_Purchaser_Name_8e36074b_1h8e', this.purchaser_Purchaser_Name_8e36074b_1h8e);
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
                    ViewChild('purchaseDept_PurchaseDept_name_a6a5688e_ss3h'),
                    __metadata("design:type", LookupGridComponent)
                ], BasicFormComponent.prototype, "purchaseDept_PurchaseDept_name_a6a5688e_ss3h", void 0);
                __decorate([
                    ViewChild('purchaser_Purchaser_Name_8e36074b_1h8e'),
                    __metadata("design:type", LookupGridComponent)
                ], BasicFormComponent.prototype, "purchaser_Purchaser_Name_8e36074b_1h8e", void 0);
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], BasicFormComponent.prototype, "cls", void 0);
                __decorate([
                    ViewChild(ConditionDialogComponent),
                    __metadata("design:type", ConditionDialogComponent)
                ], BasicFormComponent.prototype, "conditionDialog", void 0);
                __decorate([
                    ViewChild(QdpViewComponent),
                    __metadata("design:type", QdpViewComponent)
                ], BasicFormComponent.prototype, "qdpViewComponent", void 0);
                __decorate([
                    ViewChild(QueryFrameworkLayoutComponent),
                    __metadata("design:type", QueryFrameworkLayoutComponent)
                ], BasicFormComponent.prototype, "queryFrameworkLayoutComponent", void 0);
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
                            { provide: Repository, useExisting: PurchaseOrderRepository },
                            LangService,
                            { provide: NAMESPACE, useValue: '' },
                            QDP_COMMAND_SERVICE_PROVIDERS,
                            { provide: ServerSideToken, useClass: BefLookupRestService },
                            { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                            { provide: Form, useClass: BasicFormViewmodelForm },
                            { provide: UIState, useClass: BasicFormViewmodelUIState },
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
            var OrderdetailsComponentViewmodel = /** @class */ (function (_super) {
                __extends(OrderdetailsComponentViewmodel, _super);
                function OrderdetailsComponentViewmodel() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.bindingPath = '/orderDetailss';
                    _this.dom = {
                        "dataGrid_orderdetails": {
                            "type": "DataGrid",
                            "resourceId": "dataGrid_orderdetails",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "dataGrid_orderdetails",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "fields": [
                                {
                                    "type": "GridField",
                                    "resourceId": "materialId_MaterialId_MaterialCode_4b4e149b_20en",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "materialId_MaterialId_MaterialCode_4b4e149b_20en",
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
                                        "resourceId": "materialId_MaterialId_MaterialCode_4b4e149b_2ctd",
                                        "defaultI18nValue": "文本",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "materialId_MaterialId_MaterialCode_4b4e149b_2ctd",
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
                                            "uri": "OrderDetails.materialId_MaterialId_MaterialCode",
                                            "displayName": "物料管理帮助",
                                            "idField": "id",
                                            "type": "ViewObject"
                                        },
                                        "valueField": "id",
                                        "textField": "materialName",
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
                                    "resourceId": "materialId_MaterialId_MaterialName_a5c03a88_809u",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "materialId_MaterialId_MaterialName_a5c03a88_809u",
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
                                        "resourceId": "materialId_MaterialId_MaterialName_a5c03a88_02gq",
                                        "defaultI18nValue": "文本",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "materialId_MaterialId_MaterialName_a5c03a88_02gq",
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
                                    "resourceId": "materialId_MaterialId_MaterialCat_CatName_d031c736_pe2r",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "materialId_MaterialId_MaterialCat_CatName_d031c736_pe2r",
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
                                    "caption": "类别名称",
                                    "editor": {
                                        "type": "TextBox",
                                        "isTextArea": true,
                                        "resourceId": "materialId_MaterialId_MaterialCat_CatName_d031c736_0alv",
                                        "defaultI18nValue": "类别名称",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "materialId_MaterialId_MaterialCat_CatName_d031c736_0alv",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "materialId_MaterialId_MaterialCat_CatName",
                                            "fullPath": "MaterialId.MaterialId_MaterialCat_CatName",
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
                                    "resourceId": "materialId_MaterialId_EvePrice_e3cd5498_b9ip",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "materialId_MaterialId_EvePrice_e3cd5498_b9ip",
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
                                        "resourceId": "materialId_MaterialId_EvePrice_e3cd5498_49kl",
                                        "defaultI18nValue": "数值框",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "materialId_MaterialId_EvePrice_e3cd5498_49kl",
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
                                        "decimal": "."
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "amount_58fd9353_fn66",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "amount_58fd9353_fn66",
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
                                        "path": "amount",
                                        "fullPath": "Amount",
                                        "isExpression": false,
                                        "value": "amount"
                                    },
                                    "dataField": "amount",
                                    "dataType": "number",
                                    "multiLanguage": false,
                                    "caption": "物料数量",
                                    "editor": {
                                        "type": "FarrisNumberSpinner",
                                        "isTextArea": true,
                                        "resourceId": "amount_58fd9353_0crg",
                                        "defaultI18nValue": "数值框",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "amount_58fd9353_0crg",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "amount",
                                            "isExpression": false,
                                            "value": "amount"
                                        },
                                        "disable": false,
                                        "minValue": 0,
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
                                    "resourceId": "supplier_Supplier_SupplierCode_ae2bec36_wkv2",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "supplier_Supplier_SupplierCode_ae2bec36_wkv2",
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
                                        "resourceId": "supplier_Supplier_SupplierCode_ae2bec36_6df1",
                                        "defaultI18nValue": "文本",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "supplier_Supplier_SupplierCode_ae2bec36_6df1",
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
                                            "uri": "OrderDetails.supplier_Supplier_SupplierCode",
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
                                    "resourceId": "supplier_Supplier_SupplierName_63c38913_j2pw",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "supplier_Supplier_SupplierName_63c38913_j2pw",
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
                                        "resourceId": "supplier_Supplier_SupplierName_63c38913_ac4f",
                                        "defaultI18nValue": "文本",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "supplier_Supplier_SupplierName_63c38913_ac4f",
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
                                    "resourceId": "supplier_Supplier_ContactsEmail_bbc84198_n9pv",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "supplier_Supplier_ContactsEmail_bbc84198_n9pv",
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
                                        "resourceId": "supplier_Supplier_ContactsEmail_bbc84198_dkci",
                                        "defaultI18nValue": "文本",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "supplier_Supplier_ContactsEmail_bbc84198_dkci",
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
                                    "resourceId": "supplier_Supplier_ContactsAddress_65f7e3ff_389o",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "supplier_Supplier_ContactsAddress_65f7e3ff_389o",
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
                                        "resourceId": "supplier_Supplier_ContactsAddress_65f7e3ff_ggel",
                                        "defaultI18nValue": "文本",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "supplier_Supplier_ContactsAddress_65f7e3ff_ggel",
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
                            "multiSelect": false,
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
                OrderdetailsComponentViewmodel.prototype.orderdetailsAddItem1 = function (commandParam) { return; };
                OrderdetailsComponentViewmodel.prototype.orderdetailsRemoveItem1 = function (commandParam) { return; };
                __decorate([
                    NgCommand({
                        name: 'orderdetailsAddItem1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], OrderdetailsComponentViewmodel.prototype, "orderdetailsAddItem1", null);
                __decorate([
                    NgCommand({
                        name: 'orderdetailsRemoveItem1',
                        params: {
                            id: '{DATA~/#{orderdetails-component}/orderDetailss/id}'
                        },
                        paramDescriptions: {
                            id: ɵ0$2
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], OrderdetailsComponentViewmodel.prototype, "orderdetailsRemoveItem1", null);
                OrderdetailsComponentViewmodel = __decorate([
                    Injectable()
                ], OrderdetailsComponentViewmodel);
                return OrderdetailsComponentViewmodel;
            }(ViewModel));

            var OrderdetailsComponentViewmodelForm = /** @class */ (function (_super) {
                __extends(OrderdetailsComponentViewmodelForm, _super);
                function OrderdetailsComponentViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgFormControl({
                        id: 'materialId.materialId_MaterialCode',
                        name: "{{materialId_MaterialId_MaterialCode_4b4e149b_20en}}",
                        binding: 'materialId.materialId_MaterialCode',
                        updateOn: 'blur',
                        defaultI18nValue: '物料编号',
                    }),
                    __metadata("design:type", FormControl)
                ], OrderdetailsComponentViewmodelForm.prototype, "materialId_MaterialId_MaterialCode", void 0);
                __decorate([
                    NgFormControl({
                        id: 'materialId.materialId_MaterialName',
                        name: "{{materialId_MaterialId_MaterialName_a5c03a88_809u}}",
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
                ], OrderdetailsComponentViewmodelForm.prototype, "materialId_MaterialId_MaterialName", void 0);
                __decorate([
                    NgFormControl({
                        id: 'materialId.materialId_EvePrice',
                        name: "{{materialId_MaterialId_EvePrice_e3cd5498_b9ip}}",
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
                ], OrderdetailsComponentViewmodelForm.prototype, "materialId_MaterialId_EvePrice", void 0);
                __decorate([
                    NgFormControl({
                        id: 'amount',
                        name: "{{amount_58fd9353_fn66}}",
                        binding: 'amount',
                        updateOn: 'blur',
                        defaultI18nValue: '物料数量',
                        validRules: [
                            {
                                type: 'maxValue',
                                constraints: [1.7976931348623157e+308],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], OrderdetailsComponentViewmodelForm.prototype, "amount", void 0);
                __decorate([
                    NgFormControl({
                        id: 'supplier.supplier_SupplierName',
                        name: "{{supplier_Supplier_SupplierName_63c38913_j2pw}}",
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
                ], OrderdetailsComponentViewmodelForm.prototype, "supplier_Supplier_SupplierName", void 0);
                __decorate([
                    NgFormControl({
                        id: 'supplier.supplier_SupplierCode',
                        name: "{{supplier_Supplier_SupplierCode_ae2bec36_wkv2}}",
                        binding: 'supplier.supplier_SupplierCode',
                        updateOn: 'blur',
                        defaultI18nValue: '供应商编号',
                    }),
                    __metadata("design:type", FormControl)
                ], OrderdetailsComponentViewmodelForm.prototype, "supplier_Supplier_SupplierCode", void 0);
                __decorate([
                    NgFormControl({
                        id: 'supplier.supplier_ContactsEmail',
                        name: "{{supplier_Supplier_ContactsEmail_bbc84198_n9pv}}",
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
                ], OrderdetailsComponentViewmodelForm.prototype, "supplier_Supplier_ContactsEmail", void 0);
                __decorate([
                    NgFormControl({
                        id: 'supplier.supplier_ContactsAddress',
                        name: "{{supplier_Supplier_ContactsAddress_65f7e3ff_389o}}",
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
                ], OrderdetailsComponentViewmodelForm.prototype, "supplier_Supplier_ContactsAddress", void 0);
                __decorate([
                    NgFormControl({
                        id: 'materialId.materialId_MaterialCat_CatName',
                        name: "{{materialId_MaterialId_MaterialCat_CatName_d031c736_pe2r}}",
                        binding: 'materialId.materialId_MaterialCat_CatName',
                        updateOn: 'blur',
                        defaultI18nValue: '类别名称',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], OrderdetailsComponentViewmodelForm.prototype, "materialId_MaterialId_MaterialCat_CatName", void 0);
                OrderdetailsComponentViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '采购订单明细',
                        enableValidate: true
                    }),
                    Injectable()
                ], OrderdetailsComponentViewmodelForm);
                return OrderdetailsComponentViewmodelForm;
            }(Form));

            var OrderdetailsComponentViewmodelUIState = /** @class */ (function (_super) {
                __extends(OrderdetailsComponentViewmodelUIState, _super);
                function OrderdetailsComponentViewmodelUIState() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                OrderdetailsComponentViewmodelUIState = __decorate([
                    Injectable()
                ], OrderdetailsComponentViewmodelUIState);
                return OrderdetailsComponentViewmodelUIState;
            }(UIState));

            var orderdetailsAddItem1Handler = /** @class */ (function (_super) {
                __extends(orderdetailsAddItem1Handler, _super);
                function orderdetailsAddItem1Handler(_SubListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._SubListDataService1 = _SubListDataService1;
                    return _this;
                }
                orderdetailsAddItem1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('add', function (context) {
                        var args = [];
                        return _this.invoke(_this._SubListDataService1, 'add', args, context);
                    });
                };
                orderdetailsAddItem1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'orderdetailsAddItem1'
                    }),
                    __metadata("design:paramtypes", [SubListDataService])
                ], orderdetailsAddItem1Handler);
                return orderdetailsAddItem1Handler;
            }(CommandHandler));

            var orderdetailsRemoveItem1Handler = /** @class */ (function (_super) {
                __extends(orderdetailsRemoveItem1Handler, _super);
                function orderdetailsRemoveItem1Handler(_DataGridService1, _SubListDataService1, _ListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._DataGridService1 = _DataGridService1;
                    _this._SubListDataService1 = _SubListDataService1;
                    _this._ListDataService1 = _ListDataService1;
                    return _this;
                }
                orderdetailsRemoveItem1Handler.prototype.schedule = function () {
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
                orderdetailsRemoveItem1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'orderdetailsRemoveItem1'
                    }),
                    __metadata("design:paramtypes", [DataGridService,
                        SubListDataService,
                        ListDataService])
                ], orderdetailsRemoveItem1Handler);
                return orderdetailsRemoveItem1Handler;
            }(CommandHandler));

            var OrderdetailsComponent = /** @class */ (function (_super) {
                __extends(OrderdetailsComponent, _super);
                function OrderdetailsComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, farrisGridUtils, sanitizer, injector) {
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
                    _this.dataGrid_orderdetailsColumns = [];
                    _this.cls = 'f-struct-is-subgrid ';
                    _this.lang = "";
                    _this.size = {};
                    _this.enabledLanguageList = [];
                    _this.tabsToolbarStates = new BehaviorSubject({});
                    _this.tabsToolbarVisibleStates = new BehaviorSubject({});
                    _this.dataGrid_orderdetailslineNumberTitle = _this.langService.transform('DataGrid/dataGrid_orderdetails/lineNumberTitle', _this.lang, "");
                    _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
                    _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
                        _this.focusInvalidService.focusGridCell(verifyInformations, _this.dataGrid_orderdetailsDataGrid);
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
                OrderdetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.keybindingService) {
                        this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                            _this.keybindingService.register(keyBinding, function () {
                                return _this.viewModel[method]();
                            });
                        });
                    }
                    this.dataGrid_orderdetailsColumns = [
                        [
                            {
                                id: 'materialId_MaterialId_MaterialCode_4b4e149b_20en',
                                field: 'materialId.materialId_MaterialCode',
                                width: 120,
                                title: this.langService.transform('materialId_MaterialId_MaterialCode_4b4e149b_20en', this.lang, "物料编号"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.LOOKUP,
                                    options: {
                                        "type": 'EditorTypes.LOOKUP',
                                        "uri": 'OrderDetails.materialId_MaterialId_MaterialCode',
                                        "readonly": false,
                                        "idField": 'id',
                                        "singleSelect": true,
                                        "textField": 'materialName',
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
                                        "title": this.langService.transform('GridField/materialId_MaterialId_MaterialCode_4b4e149b_20en/editor/LookupEdit/materialId_MaterialId_MaterialCode_4b4e149b_2ctd/dialogTitle', this.lang, ""),
                                        "nosearch": false,
                                        "context": {
                                            "enableExtendLoadMethod": true
                                        },
                                        "isRecordSize": false
                                    }
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
                                id: 'materialId_MaterialId_MaterialName_a5c03a88_809u',
                                field: 'materialId.materialId_MaterialName',
                                width: 120,
                                title: this.langService.transform('materialId_MaterialId_MaterialName_a5c03a88_809u', this.lang, "物料名称"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.TEXTBOX,
                                    options: { "id": "materialId_MaterialId_MaterialName_a5c03a88_02gq", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
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
                                id: 'materialId_MaterialId_MaterialCat_CatName_d031c736_pe2r',
                                field: 'materialId.materialId_MaterialCat_CatName',
                                width: 120,
                                title: this.langService.transform('materialId_MaterialId_MaterialCat_CatName_d031c736_pe2r', this.lang, "类别名称"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.TEXTBOX,
                                    options: { "id": "materialId_MaterialId_MaterialCat_CatName_d031c736_0alv", "title": "类别名称", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
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
                                id: 'materialId_MaterialId_EvePrice_e3cd5498_b9ip',
                                field: 'materialId.materialId_EvePrice',
                                width: 120,
                                title: this.langService.transform('materialId_MaterialId_EvePrice_e3cd5498_b9ip', this.lang, "市场价格"),
                                dataType: 'number',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.NUMBERBOX,
                                    options: { "id": "materialId_MaterialId_EvePrice_e3cd5498_49kl", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 2, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
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
                                formatter: { "type": "number", "options": { "precision": 2, "thousand": ",", "decimal": "." } }
                            },
                            {
                                id: 'amount_58fd9353_fn66',
                                field: 'amount',
                                width: 120,
                                title: this.langService.transform('amount_58fd9353_fn66', this.lang, "物料数量"),
                                dataType: 'number',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.NUMBERBOX,
                                    options: { "id": "amount_58fd9353_0crg", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 0, "step": 1, "min": 0, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
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
                                formatter: { "type": "number", "options": { "precision": 0, "thousand": ",", "decimal": "." } }
                            },
                            {
                                id: 'supplier_Supplier_SupplierCode_ae2bec36_wkv2',
                                field: 'supplier.supplier_SupplierCode',
                                width: 120,
                                title: this.langService.transform('supplier_Supplier_SupplierCode_ae2bec36_wkv2', this.lang, "供应商编号"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.LOOKUP,
                                    options: {
                                        "type": 'EditorTypes.LOOKUP',
                                        "uri": 'OrderDetails.supplier_Supplier_SupplierCode',
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
                                        "title": this.langService.transform('GridField/supplier_Supplier_SupplierCode_ae2bec36_wkv2/editor/LookupEdit/supplier_Supplier_SupplierCode_ae2bec36_6df1/dialogTitle', this.lang, ""),
                                        "nosearch": false,
                                        "context": {
                                            "enableExtendLoadMethod": true
                                        },
                                        "isRecordSize": false
                                    }
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
                                id: 'supplier_Supplier_SupplierName_63c38913_j2pw',
                                field: 'supplier.supplier_SupplierName',
                                width: 120,
                                title: this.langService.transform('supplier_Supplier_SupplierName_63c38913_j2pw', this.lang, "供应商名称"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.TEXTBOX,
                                    options: { "id": "supplier_Supplier_SupplierName_63c38913_ac4f", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
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
                                id: 'supplier_Supplier_ContactsEmail_bbc84198_n9pv',
                                field: 'supplier.supplier_ContactsEmail',
                                width: 120,
                                title: this.langService.transform('supplier_Supplier_ContactsEmail_bbc84198_n9pv', this.lang, "联系人邮箱"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.TEXTBOX,
                                    options: { "id": "supplier_Supplier_ContactsEmail_bbc84198_dkci", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 100 }
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
                                id: 'supplier_Supplier_ContactsAddress_65f7e3ff_389o',
                                field: 'supplier.supplier_ContactsAddress',
                                width: 120,
                                title: this.langService.transform('supplier_Supplier_ContactsAddress_65f7e3ff_389o', this.lang, "办公地址"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.TEXTBOX,
                                    options: { "id": "supplier_Supplier_ContactsAddress_65f7e3ff_ggel", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 100 }
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
                            }
                        ]
                    ];
                    this.viewModel.dataGrid_orderdetailsColumns = this.dataGrid_orderdetailsColumns;
                    this.viewModel.dataGridColumnsName = "dataGrid_orderdetailsColumns";
                    this.onFormLoad();
                };
                OrderdetailsComponent.prototype.ngAfterViewInit = function () {
                };
                OrderdetailsComponent.prototype.ngOnDestroy = function () {
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
                OrderdetailsComponent.prototype.handleSizeChange = function (size) {
                    this.size = size;
                };
                OrderdetailsComponent.prototype.onFormLoad = function () {
                };
                __decorate([
                    ViewChild('dataGrid_orderdetailsDataGrid'),
                    __metadata("design:type", DatagridComponent)
                ], OrderdetailsComponent.prototype, "dataGrid_orderdetailsDataGrid", void 0);
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], OrderdetailsComponent.prototype, "cls", void 0);
                __decorate([
                    ViewChild(ConditionDialogComponent),
                    __metadata("design:type", ConditionDialogComponent)
                ], OrderdetailsComponent.prototype, "conditionDialog", void 0);
                __decorate([
                    ViewChild(QdpViewComponent),
                    __metadata("design:type", QdpViewComponent)
                ], OrderdetailsComponent.prototype, "qdpViewComponent", void 0);
                __decorate([
                    ViewChild(QueryFrameworkLayoutComponent),
                    __metadata("design:type", QueryFrameworkLayoutComponent)
                ], OrderdetailsComponent.prototype, "queryFrameworkLayoutComponent", void 0);
                OrderdetailsComponent = __decorate([
                    Component({
                        selector: 'app-orderdetailscomponent',
                        templateUrl: './orderdetailscomponent.html',
                        styleUrls: ['./orderdetailscomponent.scss'],
                        providers: [
                            FARRIS_DEVKIT_FRAME_PROVIDERS,
                            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                            { provide: FRAME_ID, useValue: 'orderdetails-component' },
                            { provide: BindingData, useClass: BindingData },
                            { provide: Repository, useExisting: PurchaseOrderRepository },
                            LangService,
                            { provide: NAMESPACE, useValue: '' },
                            QDP_COMMAND_SERVICE_PROVIDERS,
                            { provide: ServerSideToken, useClass: BefLookupRestService },
                            { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                            { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
                            { provide: Form, useClass: OrderdetailsComponentViewmodelForm },
                            { provide: UIState, useClass: OrderdetailsComponentViewmodelUIState },
                            { provide: ViewModel, useClass: OrderdetailsComponentViewmodel },
                            { provide: EXCEPTION_HANDLER, useValue: null },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: orderdetailsAddItem1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: orderdetailsRemoveItem1Handler, multi: true },
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
                ], OrderdetailsComponent);
                return OrderdetailsComponent;
            }(FrameComponent));

            var JitMissingTranslationHandler = /** @class */ (function () {
                function JitMissingTranslationHandler() {
                }
                JitMissingTranslationHandler.prototype.handle = function (params) {
                    return "JitI18nDefaultValue";
                };
                return JitMissingTranslationHandler;
            }());
            var ɵ0$3 = (createTranslateLoader$1), ɵ1$2 = localStorage.getItem('languageCode') || 'zh-CHS', ɵ2$2 = function () { return window.location.protocol + "//" + window.location.hostname + ":" + window.location.port; }, ɵ3$2 = function () { return window.location.protocol + "//" + window.location.hostname + ":" + window.location.port; };
            var PurchaseOrderDetailModule = /** @class */ (function () {
                function PurchaseOrderDetailModule(trans) {
                    this.trans = trans;
                }
                PurchaseOrderDetailModule = __decorate([
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
                            OrderdetailsComponent
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
                            QdpCommonModule.forRoot(),
                            QueryFrameworkModule,
                            SpreadModule.forRoot(),
                            EchartsModule,
                            ConditionSchemaModule,
                            PurchaseOrderDetailRoutingModule,
                        ],
                        providers: [
                            { provide: LOCALE_ID, useValue: ɵ1$2 },
                            TranslateResolveService,
                            FARRIS_DEVKIT_APP_PROVIDERS,
                            FrameworkVariableService,
                            FrmI18nSettingService,
                            FileViewerService,
                            { provide: FORM_PATH_TOKEN, useValue: '/apps/scm/cm/web/bo-purchaseorder-front/purchaseorderdetail/' },
                            FinishLoadService,
                            { provide: Server_Host, useFactory: ɵ2$2 },
                            { provide: BE_SERVER_URI_TOKEN, useFactory: ɵ3$2 }
                        ]
                    }),
                    __metadata("design:paramtypes", [TranslateResolveService])
                ], PurchaseOrderDetailModule);
                return PurchaseOrderDetailModule;
            }());
            function createTranslateLoader$1(http) {
                return new TranslateHttpLoader(http, '/apps/scm/cm/web/bo-purchaseorder-front/purchaseorderdetail/i18n/', '.json');
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
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // tslint:disable
            var AppModuleTreeComponent = /** @class */ (function () {
                function AppModuleTreeComponent() {
                    /**
                     * 菜单明细类
                     */
                    this.appTreeData = [];
                    this.selectKeys = [];
                    /**
                     * 功能菜单模块变化后后
                     */
                    this.appTreeChanged = new EventEmitter();
                    /**
                     * 树控件展开的节点值
                     */
                    this.expandedKeys = [];
                }
                /**
                 * 变化情况
                 * @param changes 变化
                 */
                /**
                 * 变化情况
                 * @param {?} changes 变化
                 * @return {?}
                 */
                AppModuleTreeComponent.prototype.ngOnChanges = /**
                 * 变化情况
                 * @param {?} changes 变化
                 * @return {?}
                 */
                function (changes) {
                    var _this = this;
                    // 初始化变化取消
                    // 未包含appTreeData的变化
                    if (!changes['appTreeData']) {
                        return;
                    }
                    // 无效的值不予处理
                    if (!changes['appTreeData'].currentValue ||
                        changes['appTreeData'].currentValue.length === 0) {
                        return;
                    }
                    // 获取到菜单数据
                    from(this.appTreeData).subscribe((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        if (!item.parentId || item.parentId === '0') {
                            item.parentId = undefined;
                            if (item.layer === 1) {
                                _this.expandedKeys.push(item.id);
                            }
                        }
                    }));
                    /*
                     // 默认业务对象的处理
                     if (!isNullOrUndefined(this.bizObjectId) && this.bizObjectId !== '') {
                        // 树焦点行
                        let curBizObjectId = this.bizObjectId;
                        while (!isNullOrUndefined(curBizObjectId)) {
                            this.expandedKeys.push(curBizObjectId);
                            // 找到当前节点的付家店
                            curBizObjectId = this.data.find(item => item['id'] === curBizObjectId)['parentID'];
                        }
                        // 右侧操作变化
                        this.selectKeys = [this.bizObjectId];
                        setTimeout(() => {
                            this.bizObjectChanged.emit(this.bizObjectId);
                        }, 80);
                    }
                    */
                };
                /**
                 * @return {?}
                 */
                AppModuleTreeComponent.prototype.ngOnInit = /**
                 * @return {?}
                 */
                function () {
                };
                /**选中行改变后触发事件 */
                /**
                 * 选中行改变后触发事件
                 * @param {?} args
                 * @return {?}
                 */
                AppModuleTreeComponent.prototype.selectChange = /**
                 * 选中行改变后触发事件
                 * @param {?} args
                 * @return {?}
                 */
                function (args) {
                    /** @type {?} */
                    var curApp = args.dataItem;
                    // 首次触发
                    if (this.selectKeys == null || this.selectKeys.length === 0) {
                        this.appTreeChanged.emit(curApp);
                    }
                    else {
                        // 这个事件里还不会对selectedkeys数组赋值，是上一个状态的
                        /** @type {?} */
                        var lastAppId = this.selectKeys[0];
                        /** @type {?} */
                        var curAppId = curApp.id;
                        // 变化的情况下触发
                        if (lastAppId !== curAppId) {
                            this.appTreeChanged.emit(curApp);
                        }
                    }
                };
                AppModuleTreeComponent.decorators = [
                    { type: Component, args: [{
                                selector: 'app-module-tree',
                                template: "<div class=\"d-flex flex-column flex-fill pt-2 pb-2\" style=\"height: 100%\">\r\n    <kendo-treeview [nodes]=\"appTreeData\" textField=\"name\" kendoTreeViewExpandable kendoTreeViewFlatDataBinding\r\n        idField=\"id\" parentIdField=\"parentId\" kendoTreeViewSelectable [selectBy]=\"'id'\"\r\n        [(selectedKeys)]=\"this.selectKeys\" [(expandedKeys)]=\"expandedKeys\" [expandBy]=\"'id'\"\r\n        (selectionChange)=\"selectChange($event)\">\r\n    </kendo-treeview>\r\n</div>",
                                styles: [""]
                            }] }
                ];
                /** @nocollapse */
                AppModuleTreeComponent.ctorParameters = function () { return []; };
                AppModuleTreeComponent.propDecorators = {
                    appTreeData: [{ type: Input }],
                    bizObjectId: [{ type: Input }],
                    appTreeChanged: [{ type: Output }]
                };
                return AppModuleTreeComponent;
            }());

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var RtfUIWebapiService = /** @class */ (function () {
                function RtfUIWebapiService() {
                }
                Object.defineProperty(RtfUIWebapiService.prototype, "functionsApi", {
                    /**
                     * 菜单api地址
                     */
                    get: /**
                     * 菜单api地址
                     * @return {?}
                     */
                    function () {
                        return '/api/runtime/sys/v1.0/gspapp/all';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RtfUIWebapiService.prototype, "appsWithBOApi", {
                    /**
                     * 带有BO数据的应用 访问地址
                     */
                    get: /**
                     * 带有BO数据的应用 访问地址
                     * @return {?}
                     */
                    function () {
                        return '/api/runtime/sys/v1.0/gspapp/allAppsBO';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RtfUIWebapiService.prototype, "bizObjectApi", {
                    /**
                     * 业务对象api地址
                     */
                    get: /**
                     * 业务对象api地址
                     * @return {?}
                     */
                    function () {
                        return '/api/dev/main/v1.0/business-objects';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RtfUIWebapiService.prototype, "httpHeader", {
                    /**
                     * Http头信息
                     */
                    get: /**
                     * Http头信息
                     * @return {?}
                     */
                    function () {
                        /** @type {?} */
                        var options = {
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                SessionId: this.sessionId
                            },
                            responseType: 'json'
                        };
                        return options;
                    },
                    enumerable: true,
                    configurable: true
                });
                RtfUIWebapiService.decorators = [
                    { type: Injectable }
                ];
                /** @nocollapse */
                RtfUIWebapiService.ctorParameters = function () { return []; };
                return RtfUIWebapiService;
            }());

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var RtfAppService = /** @class */ (function () {
                function RtfAppService(rtfCommon, httpClient) {
                    this.rtfCommon = rtfCommon;
                    this.httpClient = httpClient;
                }
                /**
                 * 获取功能菜单操作
                 */
                /**
                 * 获取功能菜单操作
                 * @return {?}
                 */
                RtfAppService.prototype.getAppList = /**
                 * 获取功能菜单操作
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var url = this.rtfCommon.functionsApi;
                    /** @type {?} */
                    var header = this.rtfCommon.httpHeader;
                    return this.httpClient.get(url, header);
                };
                /**
                 * 获取包含BO数据的应用数据
                 */
                /**
                 * 获取包含BO数据的应用数据
                 * @return {?}
                 */
                RtfAppService.prototype.getAppListWithBizObjectData = /**
                 * 获取包含BO数据的应用数据
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var url = this.rtfCommon.appsWithBOApi;
                    /** @type {?} */
                    var header = this.rtfCommon.httpHeader;
                    return this.httpClient.get(url, header);
                };
                /**
                 * 获取多语资源文件
                 */
                /**
                 * 获取多语资源文件
                 * @param {?} url
                 * @return {?}
                 */
                RtfAppService.prototype.getI18nJson = /**
                 * 获取多语资源文件
                 * @param {?} url
                 * @return {?}
                 */
                function (url) {
                    /** @type {?} */
                    var header = this.rtfCommon.httpHeader;
                    return this.httpClient.get(url, header);
                };
                RtfAppService.decorators = [
                    { type: Injectable }
                ];
                /** @nocollapse */
                RtfAppService.ctorParameters = function () { return [
                    { type: RtfUIWebapiService },
                    { type: HttpClient }
                ]; };
                return RtfAppService;
            }());

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // WARNING: interface has both a type and a value, skipping emit
            var I18NresourceService = /** @class */ (function () {
                function I18NresourceService(rtfAppService) {
                    this.rtfAppService = rtfAppService;
                }
                /**
                 * @return {?}
                 */
                I18NresourceService.prototype.getI18nJson = /**
                 * @return {?}
                 */
                function () {
                    if (this.i18nObj) {
                        return of(this.i18nObj);
                    }
                    /** @type {?} */
                    var url = this.getI18nJsonApi(null);
                    return this.rtfAppService.getI18nJson(url);
                };
                /**
                 * @param {?} lang
                 * @return {?}
                 */
                I18NresourceService.prototype.getI18nJsonApi = /**
                 * @param {?} lang
                 * @return {?}
                 */
                function (lang) {
                    // const curLang = lang || 'zh-CHS';
                    /** @type {?} */
                    var curLang = 'zh-CHS';
                    return "/platform/runtime/sys/web/assets/i18n/apphelp/" + curLang + ".json";
                };
                I18NresourceService.decorators = [
                    { type: Injectable, args: [{
                                providedIn: 'root'
                            },] }
                ];
                /** @nocollapse */
                I18NresourceService.ctorParameters = function () { return [
                    { type: RtfAppService }
                ]; };
                /** @nocollapse */ I18NresourceService.ngInjectableDef = defineInjectable({ factory: function I18NresourceService_Factory() { return new I18NresourceService(inject(RtfAppService)); }, token: I18NresourceService, providedIn: "root" });
                return I18NresourceService;
            }());

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var i18nAppHelpInfo = {
                'zh-CHS': {
                    TitleName: '应用帮助',
                    EntranceList: '入口列表',
                    Code: '编号',
                    Name: '名称',
                    Entrance: '入口',
                    Confirm: '确认',
                    Cancel: '取消'
                },
                'zh-CHT': {
                    TitleName: '應用幫助',
                    EntranceList: '入口列表',
                    Code: '編號',
                    Name: '名稱',
                    Entrance: '入口',
                    Confirm: '確認',
                    Cancel: '取消'
                },
                en: {
                    TitleName: 'Application Help',
                    EntranceList: 'EntranceList',
                    Code: 'Code',
                    Name: 'Name',
                    Entrance: 'Entrance',
                    Confirm: 'Confirm',
                    Cancel: 'Cancel'
                }
            };

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * 系统管理：功能操作左树有、右列表展示
             */
            // tslint:disable
            var RtfAppComponent = /** @class */ (function () {
                function RtfAppComponent(rtfAppService, i18nService, farrisMsg) {
                    this.rtfAppService = rtfAppService;
                    this.i18nService = i18nService;
                    this.farrisMsg = farrisMsg;
                    /**
                     * 确认事件
                     */
                    this.afterConfirm = new EventEmitter();
                    /**
                     * 关闭事件
                     */
                    this.afterCancle = new EventEmitter();
                    this.dataarray = [];
                    /**
                     * 当前选中数据
                     */
                    this.curSelectedKeys = [];
                    this.title = '';
                    this.i18nEntity = {};
                    if (!i18nService) {
                        this.i18nService = new I18NresourceService(rtfAppService);
                    }
                    // this.i18nEntityInit();
                }
                /**
                 * @return {?}
                 */
                RtfAppComponent.prototype.ngOnInit = /**
                 * @return {?}
                 */
                function () {
                    var _this = this;
                    this.selectableSettings = {
                        checkboxOnly: true,
                        // 默认单选
                        mode: !this.gridSelectMode ? 'single' : this.gridSelectMode,
                        enabled: true
                    };
                    /*this.rtfAppService.getAppList().subscribe(
                        res => {
                            // 左侧树
                            this.treeData = res;
                            // 菜单明细数据
                            const info = res.filter(item => item.layer === '4');
                            info.forEach(element => {
                                this.dataarray = this.dataarray.concat(element.appInvoks);
                            });
                            // this.gridData = this.dataarray;
                        },
                        error => {
                            console.log('获取失败');
                        }
                    );*/
                    // 获取所有应用数据
                    this.rtfAppService.getAppListWithBizObjectData().subscribe((/**
                     * @param {?} res
                     * @return {?}
                     */
                    function (res) {
                        _this.treeData = res;
                        /** @type {?} */
                        var appDetails = res.filter((/**
                         * @param {?} item
                         * @return {?}
                         */
                        function (item) { return item.layer === '4' || (item.layer === '5'); }));
                        appDetails.forEach((/**
                         * @param {?} ele
                         * @return {?}
                         */
                        function (ele) {
                            _this.dataarray = _this.dataarray.concat(ele.appInvoks);
                        }));
                    }), (/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) {
                        _this.farrisMsg.error("获取应用数据失败");
                    }));
                };
                /**
                 * 搜索
                 * @param filterValue 查询条件
                 */
                /**
                 * 搜索
                 * @param {?} filterValue 查询条件
                 * @return {?}
                 */
                RtfAppComponent.prototype.searchData = /**
                 * 搜索
                 * @param {?} filterValue 查询条件
                 * @return {?}
                 */
                function (filterValue) {
                    // 空的搜索是全部数据
                    if (filterValue === null || filterValue === '') {
                        this.gridData = this.data.concat();
                        return;
                    }
                    /** @type {?} */
                    var filter = filterValue.toLowerCase();
                    // 搜索到上级时
                    this.gridData = this.data.filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        return item.code.toLowerCase().includes(filter) ||
                            item.name.toLowerCase().includes(filter);
                    }));
                };
                /**
                 * 左侧树切换
                 * @param arg 对象参数
                 */
                /**
                 * 左侧树切换
                 * @param {?} arg 对象参数
                 * @return {?}
                 */
                RtfAppComponent.prototype.leftAppTreeChanged = /**
                 * 左侧树切换
                 * @param {?} arg 对象参数
                 * @return {?}
                 */
                function (arg) {
                    this.selectedTreeNode = arg;
                    if (!('4' === arg.layer || '5' === arg.layer)) {
                        this.gridData = [];
                        return;
                    }
                    /** @type {?} */
                    var selectedId = arg && arg.id;
                    // 根据父子关系过滤当前界面数据，包含上下级
                    this.gridData = this.dataarray.filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return selectedId && item.appId === selectedId; }));
                };
                /**
                 * 获取选中数据
                 */
                /**
                 * 获取选中数据
                 * @return {?}
                 */
                RtfAppComponent.prototype.getSelectedObject = /**
                 * 获取选中数据
                 * @return {?}
                 */
                function () {
                    var _this = this;
                    /** @type {?} */
                    var result = this.dataarray.filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return _this.curSelectedKeys && _this.curSelectedKeys.findIndex((/**
                     * @param {?} select
                     * @return {?}
                     */
                    function (select) { return select === item.id; })) >= 0; }));
                    return result;
                };
                /**
                 * 确认
                 */
                /**
                 * 确认
                 * @return {?}
                 */
                RtfAppComponent.prototype.confirm = /**
                 * 确认
                 * @return {?}
                 */
                function () {
                    var _this = this;
                    /** @type {?} */
                    var result = this.getSelectedObject();
                    if (this.selectedTreeNode && result && result.length > 0) {
                        this.selectedTreeNode.selectedInvok = result.filter((/**
                         * @param {?} inv
                         * @return {?}
                         */
                        function (inv) { return inv && inv.appId === _this.selectedTreeNode.id; }));
                    }
                    this.afterConfirm.next(this.selectedTreeNode);
                    // 取消-目的是在这里让模态框消失
                    this.cancle();
                };
                /**
                 * 取消
                 */
                /**
                 * 取消
                 * @return {?}
                 */
                RtfAppComponent.prototype.cancle = /**
                 * 取消
                 * @return {?}
                 */
                function () {
                    this.afterCancle.next();
                };
                /**
                 * @return {?}
                 */
                RtfAppComponent.prototype.i18nEntityInitBak = /**
                 * @return {?}
                 */
                function () {
                    var _this = this;
                    this.i18nService.getI18nJson().subscribe((/**
                     * @param {?} entity
                     * @return {?}
                     */
                    function (entity) {
                        if (entity) {
                            _this.title = entity.TitleName;
                            _this.i18nEntity = entity;
                            _this.i18nService.i18nObj = entity;
                        }
                    }));
                };
                /**
                 * @param {?} langCode
                 * @return {?}
                 */
                RtfAppComponent.prototype.setCurrentLangCode = /**
                 * @param {?} langCode
                 * @return {?}
                 */
                function (langCode) {
                    this.currentLangCode = langCode;
                    this.title = this.getResOnCurrentLangeContext('TitleName');
                };
                /**
                 * @param {?} resKey
                 * @return {?}
                 */
                RtfAppComponent.prototype.getResOnCurrentLangeContext = /**
                 * @param {?} resKey
                 * @return {?}
                 */
                function (resKey) {
                    /** @type {?} */
                    var resValue = i18nAppHelpInfo[this.currentLangCode][resKey];
                    return resValue;
                };
                RtfAppComponent.decorators = [
                    { type: Component, args: [{
                                selector: 'app-rtf-app',
                                template: "<div class=\"d-flex flex-row\" style=\"\r\nwidth: 800px; \r\nborder:2px;\r\nposition:absolute;\r\ntop:0px;\r\nbottom: 0px;\r\nright:0px;\r\nleft:0px;\r\noverflow: hidden;\r\nheight: 100%;\">\r\n    <div class=\"flex-fill\">\r\n        <kendo-splitter style=\"height:100%\" orientation=\"horizontal\">\r\n            <kendo-splitter-pane size=\"40%\" min=\"20%\" max=\"50%\">\r\n                <div class=\"d-flex flex-column flex-fill\" style=\"height:100%\">\r\n                    <div class=\"p-2\" style=\"height: 35px;\">\r\n                        <h5>{{this.getResOnCurrentLangeContext('TitleName')}}</h5>\r\n                        <hr class=\"m-0 p-0\" />\r\n                    </div>\r\n                    <div class=\"flex-fill\" style=\"overflow: auto;\">\r\n                        <app-module-tree [appTreeData]=\"this.treeData\" [bizObjectId]=\"bizObjectId\"\r\n                            (appTreeChanged)=\"leftAppTreeChanged($event)\"></app-module-tree>\r\n                    </div>\r\n                </div>\r\n            </kendo-splitter-pane>\r\n            <kendo-splitter-pane style=\"flex:1 1 0px; order: 2;\">\r\n                <div class=\"d-flex flex-column flex-fill\" style=\"height:100%\">\r\n                    <div class=\"p-2\" style=\"height: 35px;\">\r\n                        <h5>{{this.getResOnCurrentLangeContext('EntranceList')}}</h5>\r\n                        <hr class=\"m-0 p-0\" />\r\n                    </div>\r\n                    \r\n                    <!-- <div class=\"clearfix mt-1 mb-1 ml-1\">\r\n            <input #filter placeholder=\"\u8F93\u5165\u7F16\u53F7\u6216\u540D\u79F0\u67E5\u627E\" type=\"text\" />\r\n            <button class=\"btn btn-sm btn-default\" (click)=\"searchData(filter.value)\">\u67E5\u627E</button>\r\n          </div> -->\r\n                    <div class=\"d-flex flex-fill\" style=\"position:relative;\">\r\n                        <kendo-grid [class]=\"'flex-fill'\" [selectable]=\"selectableSettings\"\r\n                            [kendoGridBinding]=\"gridData\" [kendoGridSelectBy]=\"'id'\" [selectedKeys]=\"curSelectedKeys\">\r\n                            <kendo-grid-checkbox-column width=\"50px\"></kendo-grid-checkbox-column>\r\n                            <kendo-grid-column field=\"code\" title=\"{{this.getResOnCurrentLangeContext( 'Code')}}\">\r\n                            </kendo-grid-column>\r\n                            <kendo-grid-column field=\"name\" title=\"{{this.getResOnCurrentLangeContext( 'Name')}}\">\r\n                            </kendo-grid-column>\r\n                            <kendo-grid-column field=\"appEntrance\"\r\n                                title=\"{{this.getResOnCurrentLangeContext( 'Entrance')}}\"></kendo-grid-column>\r\n                        </kendo-grid>\r\n                    </div>\r\n                </div>\r\n            </kendo-splitter-pane>\r\n        </kendo-splitter>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #btnOkAndCancle>\r\n    <button class=\"btn btn-sm btn-primary\" (click)=\"confirm()\">{{this.getResOnCurrentLangeContext('Confirm')}}</button>\r\n    <button class=\"btn btn-sm btn-default\" (click)=\"cancle()\">{{this.getResOnCurrentLangeContext('Cancel')}}</button>\r\n</ng-template>",
                                styles: [""]
                            }] }
                ];
                /** @nocollapse */
                RtfAppComponent.ctorParameters = function () { return [
                    { type: RtfAppService },
                    { type: I18NresourceService, decorators: [{ type: Optional }] },
                    { type: MessagerService }
                ]; };
                RtfAppComponent.propDecorators = {
                    bizObjectId: [{ type: Input }],
                    gridSelectMode: [{ type: Input }],
                    afterConfirm: [{ type: Output }],
                    afterCancle: [{ type: Output }],
                    btnOkAndCancleRef: [{ type: ViewChild, args: ['btnOkAndCancle',] }]
                };
                return RtfAppComponent;
            }());

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // tslint:disable
            var RtfAppHelpComponent = /** @class */ (function () {
                function RtfAppHelpComponent(rtfCommon, modalService, farrisMsg, injector, cfr) {
                    this.rtfCommon = rtfCommon;
                    this.modalService = modalService;
                    this.farrisMsg = farrisMsg;
                    this.injector = injector;
                    this.cfr = cfr;
                    /**
                     * 初始选中的权限对象内码
                     */
                    this.initSelectKeys = [];
                    this.languageCode = 'zh-CHS';
                    /**
                     * 输出事件
                     */
                    this.afterHelpConfirm = new EventEmitter();
                }
                /**
                 * @return {?}
                 */
                RtfAppHelpComponent.prototype.ngOnInit = /**
                 * @return {?}
                 */
                function () {
                };
                /**
                 * 弹出Farris模态框帮助
                 */
                /**
                 * 弹出Farris模态框帮助
                 * @param {?=} sessionId
                 * @return {?}
                 */
                RtfAppHelpComponent.prototype.showHelp = /**
                 * 弹出Farris模态框帮助
                 * @param {?=} sessionId
                 * @return {?}
                 */
                function (sessionId) {
                    var _this = this;
                    this.rtfCommon.sessionId = ' ';
                    /** @type {?} */
                    var compFactory = this.cfr.resolveComponentFactory(RtfAppComponent);
                    this.funcOpComp = compFactory.create(this.injector);
                    // 向组件绑定语言代码
                    this.funcOpComp.instance.setCurrentLangCode(this.languageCode);
                    // 获取功能菜单的实例组件
                    if (this.initSelectKeys != null && this.initSelectKeys.length > 0) {
                        /*this.initSelectKeys
                            .forEach(key => this.funcOpComp.instance.curSelectedKeys.push(key));*/
                        this.funcOpComp.instance.curSelectedKeys.push(this.initSelectKeys[0]);
                    }
                    // 初始化选择的业务对象
                    if (this.bizObjectId && this.bizObjectId !== '') {
                        this.funcOpComp.instance.bizObjectId = this.bizObjectId;
                    }
                    /** @type {?} */
                    var modalConfig = {
                        title: this.funcOpComp.instance.title,
                        width: 800,
                        height: 550,
                        buttons: this.funcOpComp.instance.btnOkAndCancleRef,
                        showButtons: true,
                        showMaxButton: false,
                        resizable: false
                    };
                    // 弹出帮助框
                    this.funcOpDialog = this.modalService.show(this.funcOpComp, modalConfig);
                    // 取消后
                    this.funcOpComp.instance.afterCancle.subscribe((/**
                     * @param {?} res
                     * @return {?}
                     */
                    function (res) {
                        // 消失模态框
                        _this.funcOpDialog.close();
                    }));
                    // 确认后
                    this.funcOpComp.instance.afterConfirm.subscribe((/**
                     * @param {?} res
                     * @return {?}
                     */
                    function (res) {
                        _this.afterHelpConfirm.next(res);
                    }));
                };
                RtfAppHelpComponent.decorators = [
                    { type: Component, args: [{
                                selector: 'app-rtf-application-help',
                                template: "",
                                styles: [""]
                            }] }
                ];
                /** @nocollapse */
                RtfAppHelpComponent.ctorParameters = function () { return [
                    { type: RtfUIWebapiService },
                    { type: BsModalService },
                    { type: MessagerService },
                    { type: Injector },
                    { type: ComponentFactoryResolver }
                ]; };
                RtfAppHelpComponent.propDecorators = {
                    bizObjectId: [{ type: Input }],
                    initSelectKeys: [{ type: Input }],
                    languageCode: [{ type: Input }],
                    afterHelpConfirm: [{ type: Output }]
                };
                return RtfAppHelpComponent;
            }());

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var RtfAppHelpModule = /** @class */ (function () {
                function RtfAppHelpModule() {
                }
                RtfAppHelpModule.decorators = [
                    { type: NgModule, args: [{
                                imports: [
                                    CommonModule,
                                    HttpClientModule,
                                    // kendo
                                    GridModule,
                                    LayoutModule,
                                    TreeViewModule,
                                    // farris
                                    ModalModule.forRoot(),
                                    MessagerModule.forRoot(),
                                ],
                                declarations: [
                                    AppModuleTreeComponent,
                                    RtfAppComponent,
                                    RtfAppHelpComponent,
                                ],
                                entryComponents: [
                                    RtfAppComponent
                                ],
                                providers: [
                                    RtfUIWebapiService,
                                    RtfAppService,
                                    I18NresourceService
                                ],
                                exports: [
                                    RtfAppComponent,
                                    RtfAppHelpComponent
                                ]
                            },] }
                ];
                return RtfAppHelpModule;
            }());

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var RtfAppHelpModuleNgFactory = ɵcmf(RtfAppHelpModule, [], function (_l) { return ɵmod([ɵmpd(512, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, [[8, [PopupComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, TooltipComponentNgFactory$1, ModalBackdropComponentNgFactory$1, ModalContainerComponentNgFactory$1, MessagerComponentNgFactory$1, RtfAppComponentNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ɵmpd(4608, NgLocalization, NgLocaleLocalization, [LOCALE_ID, [2, ɵangular_packages_common_common_a]]), ɵmpd(4608, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, [DOCUMENT, PLATFORM_ID, ɵangular_packages_common_http_http_e]), ɵmpd(4608, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_h, [HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_f]), ɵmpd(5120, HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [ɵangular_packages_common_http_http_h]), ɵmpd(4608, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_d, []), ɵmpd(6144, XhrFactory, null, [ɵangular_packages_common_http_http_d]), ɵmpd(4608, HttpXhrBackend, HttpXhrBackend, [XhrFactory]), ɵmpd(6144, HttpBackend, null, [HttpXhrBackend]), ɵmpd(4608, HttpHandler, ɵHttpInterceptingHandler, [HttpBackend, Injector]), ɵmpd(4608, HttpClient, HttpClient, [HttpHandler]), ɵmpd(4608, FormBuilder, FormBuilder, []), ɵmpd(4608, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_j, []), ɵmpd(4608, IntlService, CldrIntlService, [LOCALE_ID]), ɵmpd(4608, DOMService, DOMService, []), ɵmpd(4608, CenturyViewService, CenturyViewService, []), ɵmpd(4608, DecadeViewService, DecadeViewService, []), ɵmpd(4608, MonthViewService, MonthViewService, [IntlService]), ɵmpd(4608, YearViewService, YearViewService, [IntlService]), ɵmpd(4608, WeekNamesService, WeekNamesService, [IntlService]), ɵmpd(4608, PopupService, PopupService, [ApplicationRef, ComponentFactoryResolver, Injector, [2, POPUP_CONTAINER]]), ɵmpd(135680, ResizeBatchService, ResizeBatchService, [NgZone]), ɵmpd(4608, AttentionService, AttentionService, [RendererFactory2, NgZone]), ɵmpd(4608, CommonUtils, CommonUtils, []), ɵmpd(4608, RuntimeStateService, RuntimeStateService, [CommonUtils]), ɵmpd(4608, IdService, IdService, []), ɵmpd(4608, LocaleService, LocaleService, [LOCALE_ID, CommonUtils, [2, FARRIS_LOCAL_CUSTOM_DATA]]), ɵmpd(4608, PositioningService, PositioningService, [RendererFactory2, PLATFORM_ID]), ɵmpd(4608, ComponentLoaderFactory, ComponentLoaderFactory, [ComponentFactoryResolver, NgZone, Injector, PositioningService, ApplicationRef]), ɵmpd(4608, BsModalService, BsModalService, [RendererFactory2, ComponentLoaderFactory, NgZone]), ɵmpd(4608, MessagerService, MessagerService, [BsModalService, Injector]), ɵmpd(4608, RtfUIWebapiService, RtfUIWebapiService, []), ɵmpd(4608, RtfAppService, RtfAppService, [RtfUIWebapiService, HttpClient]), ɵmpd(4608, I18NresourceService, I18NresourceService, [RtfAppService]), ɵmpd(1073742336, CommonModule, CommonModule, []), ɵmpd(1073742336, HttpClientXsrfModule, HttpClientXsrfModule, []), ɵmpd(1073742336, HttpClientModule, HttpClientModule, []), ɵmpd(1073742336, SharedModule, SharedModule, []), ɵmpd(1073742336, DragAndDropModule, DragAndDropModule, []), ɵmpd(1073742336, GroupModule, GroupModule, []), ɵmpd(1073742336, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bc, []), ɵmpd(1073742336, ReactiveFormsModule, ReactiveFormsModule, []), ɵmpd(1073742336, FormsModule, FormsModule, []), ɵmpd(1073742336, EventsModule, EventsModule, []), ɵmpd(1073742336, NumericTextBoxModule, NumericTextBoxModule, []), ɵmpd(1073742336, IntlModule, IntlModule, []), ɵmpd(1073742336, EventsModule$1, EventsModule$1, []), ɵmpd(1073742336, DateInputModule, DateInputModule, []), ɵmpd(1073742336, CalendarCommonModule, CalendarCommonModule, []), ɵmpd(1073742336, TemplatesModule, TemplatesModule, []), ɵmpd(1073742336, VirtualizationModule, VirtualizationModule, []), ɵmpd(1073742336, CalendarModule$1, CalendarModule$1, []), ɵmpd(1073742336, PopupModule, PopupModule, []), ɵmpd(1073742336, DatePickerModule, DatePickerModule, []), ɵmpd(1073742336, BodyModule, BodyModule, []), ɵmpd(1073742336, ResizeSensorModule, ResizeSensorModule, []), ɵmpd(1073742336, SharedDirectivesModule, SharedDirectivesModule, []), ɵmpd(1073742336, SharedModule$1, SharedModule$1, []), ɵmpd(1073742336, DropDownListModule, DropDownListModule, []), ɵmpd(1073742336, AutoCompleteModule, AutoCompleteModule, []), ɵmpd(1073742336, TextBoxModule, TextBoxModule, []), ɵmpd(1073742336, DraggableModule, DraggableModule, []), ɵmpd(1073742336, SliderModule, SliderModule, []), ɵmpd(1073742336, SwitchModule$1, SwitchModule$1, []), ɵmpd(1073742336, MaskedTextBoxModule, MaskedTextBoxModule, []), ɵmpd(1073742336, InputsModule, InputsModule, []), ɵmpd(1073742336, SharedFilterModule, SharedFilterModule, []), ɵmpd(1073742336, RowFilterModule, RowFilterModule, []), ɵmpd(1073742336, FilterMenuModule, FilterMenuModule, []), ɵmpd(1073742336, ColumnMenuModule, ColumnMenuModule, []), ɵmpd(1073742336, HeaderModule, HeaderModule, []), ɵmpd(1073742336, FooterModule, FooterModule, []), ɵmpd(1073742336, PagerModule, PagerModule, []), ɵmpd(1073742336, GridModule, GridModule, []), ɵmpd(1073742336, PanelBarModule, PanelBarModule, []), ɵmpd(1073742336, SplitterModule$1, SplitterModule$1, []), ɵmpd(1073742336, TabStripModule, TabStripModule, []), ɵmpd(1073742336, LayoutModule, LayoutModule, []), ɵmpd(1073742336, CheckBoxModule, CheckBoxModule, []), ɵmpd(1073742336, SharedModule$2, SharedModule$2, []), ɵmpd(1073742336, TreeViewModule, TreeViewModule, []), ɵmpd(1073742336, PerfectScrollbarModule, PerfectScrollbarModule, []), ɵmpd(1073742336, AngularDraggableModule, AngularDraggableModule, []), ɵmpd(1073742336, FAreaResponseModule, FAreaResponseModule, []), ɵmpd(1073742336, FarrisCommonModule, FarrisCommonModule, []), ɵmpd(1073742336, FarrisTooltipModule, FarrisTooltipModule, []), ɵmpd(1073742336, ModalModule, ModalModule, []), ɵmpd(1073742336, LocaleModule, LocaleModule, []), ɵmpd(1073742336, MessagerModule, MessagerModule, []), ɵmpd(1073742336, RtfAppHelpModule, RtfAppHelpModule, []), ɵmpd(256, ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), ɵmpd(256, ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), ɵmpd(256, TOUCH_ENABLED, touchEnabled, []), ɵmpd(256, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, [])]); });
            var styles_RtfAppHelpComponent = [""];
            var RenderType_RtfAppHelpComponent = ɵcrt({ encapsulation: 0, styles: styles_RtfAppHelpComponent, data: {} });
            function View_RtfAppHelpComponent_0(_l) { return ɵvid(0, [], null, null); }
            function View_RtfAppHelpComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "app-rtf-application-help", [], null, null, null, View_RtfAppHelpComponent_0, RenderType_RtfAppHelpComponent)), ɵdid(1, 114688, null, 0, RtfAppHelpComponent, [RtfUIWebapiService, BsModalService, MessagerService, Injector, ComponentFactoryResolver], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            var RtfAppHelpComponentNgFactory = ɵccf("app-rtf-application-help", RtfAppHelpComponent, View_RtfAppHelpComponent_Host_0, { bizObjectId: "bizObjectId", initSelectKeys: "initSelectKeys", languageCode: "languageCode" }, { afterHelpConfirm: "afterHelpConfirm" }, []);
            var styles_RtfAppComponent = [""];
            var RenderType_RtfAppComponent = ɵcrt({ encapsulation: 0, styles: styles_RtfAppComponent, data: {} });
            function View_RtfAppComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "button", [["class", "btn btn-sm btn-primary"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (_co.confirm() !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), (_l()(), ɵted(1, null, ["", ""])), (_l()(), ɵeld(2, 0, null, null, 1, "button", [["class", "btn btn-sm btn-default"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (_co.cancle() !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), (_l()(), ɵted(3, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getResOnCurrentLangeContext("Confirm"); _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.getResOnCurrentLangeContext("Cancel"); _ck(_v, 3, 0, currVal_1); }); }
            function View_RtfAppComponent_0(_l) { return ɵvid(0, [ɵqud(402653184, 1, { btnOkAndCancleRef: 0 }), (_l()(), ɵeld(1, 0, null, null, 110, "div", [["class", "d-flex flex-row"], ["style", "\nwidth: 800px; \nborder:2px;\nposition:absolute;\ntop:0px;\nbottom: 0px;\nright:0px;\nleft:0px;\noverflow: hidden;\nheight: 100%;"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 109, "div", [["class", "flex-fill"]], null, null, null, null, null)), (_l()(), ɵeld(3, 0, null, null, 108, "kendo-splitter", [["orientation", "horizontal"], ["style", "height:100%"]], [[2, "k-widget", null], [2, "k-splitter", null], [2, "k-splitter-flex", null], [2, "k-splitter-horizontal", null], [2, "k-splitter-vertical", null], [1, "dir", 0], [1, "role", 0]], null, null, View_SplitterComponent_0, RenderType_SplitterComponent)), ɵprd(512, null, SplitterService, SplitterService, [NgZone]), ɵprd(256, null, L10N_PREFIX, "kendo.spliter", []), ɵprd(131584, null, LocalizationService$1, LocalizationService$1, [L10N_PREFIX, [2, MessageService], [2, RTL]]), ɵdid(7, 1753088, null, 1, SplitterComponent, [ElementRef, SplitterService, LocalizationService$1, [8, null]], { orientation: [0, "orientation"] }, null), ɵqud(603979776, 2, { panes: 1 }), (_l()(), ɵeld(9, 0, null, 0, 9, "kendo-splitter-pane", [["max", "50%"], ["min", "20%"], ["size", "40%"]], [[2, "k-pane-flex", null], [2, "k-pane", null], [2, "k-pane-static", null], [2, "k-scrollable", null]], null, null, View_SplitterPaneComponent_0, RenderType_SplitterPaneComponent)), ɵdid(10, 8437760, [[2, 4]], 0, SplitterPaneComponent, [ElementRef, Renderer2, ChangeDetectorRef], { size: [0, "size"], min: [1, "min"], max: [2, "max"] }, null), (_l()(), ɵeld(11, 0, null, 0, 7, "div", [["class", "d-flex flex-column flex-fill"], ["style", "height:100%"]], null, null, null, null, null)), (_l()(), ɵeld(12, 0, null, null, 3, "div", [["class", "p-2"], ["style", "height: 35px;"]], null, null, null, null, null)), (_l()(), ɵeld(13, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), ɵted(14, null, ["", ""])), (_l()(), ɵeld(15, 0, null, null, 0, "hr", [["class", "m-0 p-0"]], null, null, null, null, null)), (_l()(), ɵeld(16, 0, null, null, 2, "div", [["class", "flex-fill"], ["style", "overflow: auto;"]], null, null, null, null, null)), (_l()(), ɵeld(17, 0, null, null, 1, "app-module-tree", [], null, [[null, "appTreeChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("appTreeChanged" === en)) {
                    var pd_0 = (_co.leftAppTreeChanged($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_ɵa_0, RenderType_ɵa)), ɵdid(18, 638976, null, 0, AppModuleTreeComponent, [], { appTreeData: [0, "appTreeData"], bizObjectId: [1, "bizObjectId"] }, { appTreeChanged: "appTreeChanged" }), (_l()(), ɵeld(19, 0, null, 0, 92, "kendo-splitter-pane", [["style", "flex:1 1 0px; order: 2;"]], [[2, "k-pane-flex", null], [2, "k-pane", null], [2, "k-pane-static", null], [2, "k-scrollable", null]], null, null, View_SplitterPaneComponent_0, RenderType_SplitterPaneComponent)), ɵdid(20, 8437760, [[2, 4]], 0, SplitterPaneComponent, [ElementRef, Renderer2, ChangeDetectorRef], null, null), (_l()(), ɵeld(21, 0, null, 0, 90, "div", [["class", "d-flex flex-column flex-fill"], ["style", "height:100%"]], null, null, null, null, null)), (_l()(), ɵeld(22, 0, null, null, 3, "div", [["class", "p-2"], ["style", "height: 35px;"]], null, null, null, null, null)), (_l()(), ɵeld(23, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), ɵted(24, null, ["", ""])), (_l()(), ɵeld(25, 0, null, null, 0, "hr", [["class", "m-0 p-0"]], null, null, null, null, null)), (_l()(), ɵeld(26, 0, null, null, 85, "div", [["class", "d-flex flex-fill"], ["style", "position:relative;"]], null, null, null, null, null)), (_l()(), ɵeld(27, 0, null, null, 84, "kendo-grid", [], [[8, "className", 0], [1, "dir", 0], [2, "k-widget", null], [2, "k-grid", null], [2, "k-grid-lockedcolumns", null], [2, "k-grid-virtual", null], [2, "k-grid-column-resizing", null], [2, "k-grid-no-scrollbar", null]], null, null, View_GridComponent_0, RenderType_GridComponent)), ɵprd(4608, null, SuspendService, SuspendService, []), ɵprd(4608, null, ResizeService$1, ResizeService$1, []), ɵprd(135680, null, SinglePopupService, SinglePopupService, [PopupService, Renderer2, NgZone, ScrollSyncService, LocalizationService$1]), ɵprd(4608, null, DragAndDropService, DragAndDropService, []), ɵprd(4608, null, DragHintService, DragHintService, [Sanitizer]), ɵprd(4608, null, DropCueService, DropCueService, []), ɵprd(4608, null, IdService$1, IdService$1, []), ɵprd(512, null, BrowserSupportService, BrowserSupportService, []), ɵprd(512, null, DomEventsService, DomEventsService, []), ɵprd(512, null, LocalDataChangesService, LocalDataChangesService, []), ɵprd(131584, null, SelectionService, SelectionService, [DomEventsService, LocalDataChangesService]), ɵprd(512, null, GroupInfoService, GroupInfoService, []), ɵprd(512, null, GroupsService, GroupsService, [[2, Skip]]), ɵprd(512, null, ChangeNotificationService, ChangeNotificationService, [NgZone]), ɵprd(512, null, DetailsService, DetailsService, []), ɵprd(512, null, EditService$1, EditService$1, [NgZone]), ɵprd(512, null, FilterService, FilterService, []), ɵprd(512, null, PDFService, PDFService, []), ɵprd(512, null, ResponsiveService, ResponsiveService, []), ɵprd(512, null, ExcelService, ExcelService, []), ɵprd(256, null, L10N_PREFIX, "kendo.grid", []), ɵprd(131584, null, LocalizationService$1, LocalizationService$1, [L10N_PREFIX, [2, MessageService], [2, RTL]]), ɵprd(512, null, ScrollSyncService, ScrollSyncService, [NgZone, LocalizationService$1]), ɵprd(512, null, ColumnResizingService, ColumnResizingService, []), ɵprd(512, null, ColumnReorderService, ColumnReorderService, []), ɵprd(512, null, ColumnInfoService, ColumnInfoService, []), ɵprd(512, null, PagerContextService, PagerContextService, []), ɵprd(512, null, ScrollRequestService, ScrollRequestService, []), ɵprd(512, null, FocusRoot, FocusRoot, []), ɵprd(131584, null, NavigationService, NavigationService, [NgZone, DomEventsService, PagerContextService, ScrollRequestService, GroupsService, DetailsService, FocusRoot, EditService$1, ChangeDetectorRef, LocalizationService$1, [2, FocusableDirective]]), ɵprd(512, null, SortService, SortService, []), ɵdid(59, 8110080, null, 6, GridComponent, [BrowserSupportService, SelectionService, ElementRef, GroupInfoService, GroupsService, ChangeNotificationService, DetailsService, EditService$1, FilterService, PDFService, ResponsiveService, Renderer2, ExcelService, NgZone, ScrollSyncService, DomEventsService, ColumnResizingService, ChangeDetectorRef, ColumnReorderService, ColumnInfoService, NavigationService, SortService, LocalizationService$1], { selectable: [0, "selectable"] }, null), ɵqud(603979776, 3, { columns: 1 }), ɵqud(603979776, 4, { detailTemplateChildren: 1 }), ɵqud(603979776, 5, { noRecordsTemplateChildren: 1 }), ɵqud(603979776, 6, { pagerTemplateChildren: 1 }), ɵqud(603979776, 7, { toolbarTemplateChildren: 1 }), ɵqud(603979776, 8, { columnMenuTemplates: 1 }), ɵdid(66, 737280, null, 0, DataBindingDirective, [GridComponent, ChangeDetectorRef, LocalDataChangesService], { data: [0, "data"] }, null), ɵdid(67, 212992, null, 0, SelectionDirective, [GridComponent, ChangeDetectorRef], { selectedKeys: [0, "selectedKeys"], selectionKey: [1, "selectionKey"] }, null), ɵprd(256, null, CELL_CONTEXT, EMPTY_CELL_CONTEXT, []), (_l()(), ɵeld(69, 0, null, null, 6, "kendo-grid-checkbox-column", [["width", "50px"]], null, null, null, View_CheckboxColumnComponent_0, RenderType_CheckboxColumnComponent)), ɵdid(70, 49152, null, 4, CheckboxColumnComponent, [[8, null]], { width: [0, "width"] }, null), ɵqud(603979776, 9, { headerTemplates: 1 }), ɵqud(335544320, 10, { footerTemplate: 0 }), ɵqud(603979776, 11, { columnMenuTemplates: 1 }), ɵqud(335544320, 12, { template: 0 }), ɵprd(2048, [[3, 4]], ColumnBase, null, [CheckboxColumnComponent]), (_l()(), ɵeld(76, 0, null, null, 11, "kendo-grid-column", [["field", "code"]], null, null, null, View_ColumnComponent_0, RenderType_ColumnComponent)), ɵdid(77, 49152, null, 9, ColumnComponent, [[8, null]], { title: [0, "title"], field: [1, "field"] }, null), ɵqud(603979776, 13, { headerTemplates: 1 }), ɵqud(335544320, 14, { footerTemplate: 0 }), ɵqud(603979776, 15, { columnMenuTemplates: 1 }), ɵqud(335544320, 16, { template: 0 }), ɵqud(335544320, 17, { groupHeaderTemplate: 0 }), ɵqud(335544320, 18, { groupFooterTemplate: 0 }), ɵqud(335544320, 19, { editTemplate: 0 }), ɵqud(335544320, 20, { filterCellTemplate: 0 }), ɵqud(335544320, 21, { filterMenuTemplate: 0 }), ɵprd(2048, [[3, 4]], ColumnBase, null, [ColumnComponent]), (_l()(), ɵeld(88, 0, null, null, 11, "kendo-grid-column", [["field", "name"]], null, null, null, View_ColumnComponent_0, RenderType_ColumnComponent)), ɵdid(89, 49152, null, 9, ColumnComponent, [[8, null]], { title: [0, "title"], field: [1, "field"] }, null), ɵqud(603979776, 22, { headerTemplates: 1 }), ɵqud(335544320, 23, { footerTemplate: 0 }), ɵqud(603979776, 24, { columnMenuTemplates: 1 }), ɵqud(335544320, 25, { template: 0 }), ɵqud(335544320, 26, { groupHeaderTemplate: 0 }), ɵqud(335544320, 27, { groupFooterTemplate: 0 }), ɵqud(335544320, 28, { editTemplate: 0 }), ɵqud(335544320, 29, { filterCellTemplate: 0 }), ɵqud(335544320, 30, { filterMenuTemplate: 0 }), ɵprd(2048, [[3, 4]], ColumnBase, null, [ColumnComponent]), (_l()(), ɵeld(100, 0, null, null, 11, "kendo-grid-column", [["field", "appEntrance"]], null, null, null, View_ColumnComponent_0, RenderType_ColumnComponent)), ɵdid(101, 49152, null, 9, ColumnComponent, [[8, null]], { title: [0, "title"], field: [1, "field"] }, null), ɵqud(603979776, 31, { headerTemplates: 1 }), ɵqud(335544320, 32, { footerTemplate: 0 }), ɵqud(603979776, 33, { columnMenuTemplates: 1 }), ɵqud(335544320, 34, { template: 0 }), ɵqud(335544320, 35, { groupHeaderTemplate: 0 }), ɵqud(335544320, 36, { groupFooterTemplate: 0 }), ɵqud(335544320, 37, { editTemplate: 0 }), ɵqud(335544320, 38, { filterCellTemplate: 0 }), ɵqud(335544320, 39, { filterMenuTemplate: 0 }), ɵprd(2048, [[3, 4]], ColumnBase, null, [ColumnComponent]), (_l()(), ɵand(0, [[1, 2], ["btnOkAndCancle", 2]], null, 0, null, View_RtfAppComponent_1))], function (_ck, _v) { var _co = _v.component; var currVal_7 = "horizontal"; _ck(_v, 7, 0, currVal_7); var currVal_12 = "40%"; var currVal_13 = "20%"; var currVal_14 = "50%"; _ck(_v, 10, 0, currVal_12, currVal_13, currVal_14); var currVal_16 = _co.treeData; var currVal_17 = _co.bizObjectId; _ck(_v, 18, 0, currVal_16, currVal_17); var currVal_31 = _co.selectableSettings; _ck(_v, 59, 0, currVal_31); var currVal_32 = _co.gridData; _ck(_v, 66, 0, currVal_32); var currVal_33 = _co.curSelectedKeys; var currVal_34 = "id"; _ck(_v, 67, 0, currVal_33, currVal_34); var currVal_35 = "50px"; _ck(_v, 70, 0, currVal_35); var currVal_36 = ɵinlineInterpolate(1, "", _co.getResOnCurrentLangeContext("Code"), ""); var currVal_37 = "code"; _ck(_v, 77, 0, currVal_36, currVal_37); var currVal_38 = ɵinlineInterpolate(1, "", _co.getResOnCurrentLangeContext("Name"), ""); var currVal_39 = "name"; _ck(_v, 89, 0, currVal_38, currVal_39); var currVal_40 = ɵinlineInterpolate(1, "", _co.getResOnCurrentLangeContext("Entrance"), ""); var currVal_41 = "appEntrance"; _ck(_v, 101, 0, currVal_40, currVal_41); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ɵnov(_v, 7).hostClasses; var currVal_1 = ɵnov(_v, 7).hostClasses; var currVal_2 = ɵnov(_v, 7).hostClasses; var currVal_3 = ɵnov(_v, 7).horizontalHostClasses; var currVal_4 = ɵnov(_v, 7).verticalHostClasses; var currVal_5 = ɵnov(_v, 7).dir; var currVal_6 = ɵnov(_v, 7).ariaRole; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = ɵnov(_v, 10).styleDisplayFlex; var currVal_9 = ɵnov(_v, 10).hostClass; var currVal_10 = ɵnov(_v, 10).staticPaneClass; var currVal_11 = ɵnov(_v, 10).scrollablePaneClass; _ck(_v, 9, 0, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_15 = _co.getResOnCurrentLangeContext("TitleName"); _ck(_v, 14, 0, currVal_15); var currVal_18 = ɵnov(_v, 20).styleDisplayFlex; var currVal_19 = ɵnov(_v, 20).hostClass; var currVal_20 = ɵnov(_v, 20).staticPaneClass; var currVal_21 = ɵnov(_v, 20).scrollablePaneClass; _ck(_v, 19, 0, currVal_18, currVal_19, currVal_20, currVal_21); var currVal_22 = _co.getResOnCurrentLangeContext("EntranceList"); _ck(_v, 24, 0, currVal_22); var currVal_23 = "flex-fill"; var currVal_24 = ɵnov(_v, 59).dir; var currVal_25 = ɵnov(_v, 59).hostClasses; var currVal_26 = ɵnov(_v, 59).hostClasses; var currVal_27 = ɵnov(_v, 59).lockedClasses; var currVal_28 = ɵnov(_v, 59).virtualClasses; var currVal_29 = ɵnov(_v, 59).columnResizing; var currVal_30 = ɵnov(_v, 59).noScrollbarClass; _ck(_v, 27, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30); }); }
            function View_RtfAppComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "app-rtf-app", [], null, null, null, View_RtfAppComponent_0, RenderType_RtfAppComponent)), ɵdid(1, 114688, null, 0, RtfAppComponent, [RtfAppService, [2, I18NresourceService], MessagerService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            var RtfAppComponentNgFactory = ɵccf("app-rtf-app", RtfAppComponent, View_RtfAppComponent_Host_0, { bizObjectId: "bizObjectId", gridSelectMode: "gridSelectMode" }, { afterConfirm: "afterConfirm", afterCancle: "afterCancle" }, []);
            var styles_ɵa = [""];
            var RenderType_ɵa = ɵcrt({ encapsulation: 0, styles: styles_ɵa, data: {} });
            function View_ɵa_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 16, "div", [["class", "d-flex flex-column flex-fill pt-2 pb-2"], ["style", "height: 100%"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 15, "kendo-treeview", [["idField", "id"], ["kendoTreeViewExpandable", ""], ["kendoTreeViewFlatDataBinding", ""], ["kendoTreeViewSelectable", ""], ["parentIdField", "parentId"], ["textField", "name"]], [[2, "k-widget", null], [2, "k-treeview", null], [1, "role", 0], [1, "dir", 0], [40, "@.disabled", 0], [1, "aria-multiselectable", 0]], [[null, "selectedKeysChange"], [null, "expandedKeysChange"], [null, "selectionChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("selectedKeysChange" === en)) {
                    var pd_0 = ((_co.selectKeys = $event) !== false);
                    ad = (pd_0 && ad);
                } if (("expandedKeysChange" === en)) {
                    var pd_1 = ((_co.expandedKeys = $event) !== false);
                    ad = (pd_1 && ad);
                } if (("selectionChange" === en)) {
                    var pd_2 = (_co.selectChange($event) !== false);
                    ad = (pd_2 && ad);
                } return ad; }, View_TreeViewComponent_0, RenderType_TreeViewComponent)), ɵprd(4608, null, IndexBuilderService, IndexBuilderService, []), ɵprd(4608, null, LoadingNotificationService, LoadingNotificationService, []), ɵprd(512, null, ExpandStateService, ExpandStateService, []), ɵprd(256, null, L10N_PREFIX, "kendo.treeview", []), ɵprd(131584, null, LocalizationService$1, LocalizationService$1, [L10N_PREFIX, [2, MessageService], [2, RTL]]), ɵprd(512, null, NavigationService$1, NavigationService$1, [LocalizationService$1]), ɵprd(512, null, NodeChildrenService, NodeChildrenService, []), ɵprd(512, null, SelectionService$1, SelectionService$1, []), ɵprd(512, null, TreeViewLookupService, TreeViewLookupService, []), ɵprd(512, null, DataChangeNotificationService, DataChangeNotificationService, []), ɵdid(12, 770048, null, 1, TreeViewComponent, [ExpandStateService, NavigationService$1, NodeChildrenService, SelectionService$1, TreeViewLookupService, NgZone, Renderer2, ElementRef, DataChangeNotificationService, LocalizationService$1], { nodes: [0, "nodes"], textField: [1, "textField"] }, { selectionChange: "selectionChange" }), ɵqud(335544320, 1, { nodeTemplate: 0 }), ɵdid(14, 147456, null, 0, ExpandDirective, [TreeViewComponent], { expandKey: [0, "expandKey"], expandedKeys: [1, "expandedKeys"] }, { expandedKeysChange: "expandedKeysChange" }), ɵdid(15, 147456, null, 0, SelectDirective, [TreeViewComponent], { selectKey: [0, "selectKey"], selection: [1, "selection"], selectedKeys: [2, "selectedKeys"] }, { selectedKeysChange: "selectedKeysChange" }), ɵdid(16, 606208, null, 0, FlatDataBindingDirective, [TreeViewComponent], { nodes: [0, "nodes"], parentIdField: [1, "parentIdField"], idField: [2, "idField"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.appTreeData; var currVal_7 = "name"; _ck(_v, 12, 0, currVal_6, currVal_7); var currVal_8 = "id"; var currVal_9 = _co.expandedKeys; _ck(_v, 14, 0, currVal_8, currVal_9); var currVal_10 = "id"; var currVal_11 = ""; var currVal_12 = _co.selectKeys; _ck(_v, 15, 0, currVal_10, currVal_11, currVal_12); var currVal_13 = _co.appTreeData; var currVal_14 = "parentId"; var currVal_15 = "id"; _ck(_v, 16, 0, currVal_13, currVal_14, currVal_15); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 12).classNames; var currVal_1 = ɵnov(_v, 12).classNames; var currVal_2 = ɵnov(_v, 12).role; var currVal_3 = ɵnov(_v, 12).direction; var currVal_4 = ɵnov(_v, 12).animate; var currVal_5 = ɵnov(_v, 15).getAriaMultiselectable; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
            function View_ɵa_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "app-module-tree", [], null, null, null, View_ɵa_0, RenderType_ɵa)), ɵdid(1, 638976, null, 0, AppModuleTreeComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            var ɵaNgFactory = ɵccf("app-module-tree", AppModuleTreeComponent, View_ɵa_Host_0, { appTreeData: "appTreeData", bizObjectId: "bizObjectId" }, { appTreeChanged: "appTreeChanged" }, []);

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
            var styles_OrderdetailsComponent = [styles$1];
            var RenderType_OrderdetailsComponent = ɵcrt({ encapsulation: 0, styles: styles_OrderdetailsComponent, data: {} });
            function View_OrderdetailsComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "farris-datagrid", [["class", "f-component-grid f-utils-fill"], ["datagridRef", ""], ["farris-grid-end-edit", ""], ["farris-remote-summary-command", ""], ["farris-use-binding-data", ""], ["id", "dataGrid_orderdetails"]], [[4, "position", null], [2, "f-datagrid-full", null], [2, "f-datagrid-auto-height", null]], [[null, "click"], [null, "pageChanged"], [null, "selectChanged"], [null, "unSelect"], [null, "checkedChange"], [null, "pageSizeChanged"], [null, "scrollYLoad"], [null, "filterChanged"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
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
                } return ad; }, View_DatagridComponent_0, RenderType_DatagridComponent)), ɵprd(4608, null, DatagridSmartFilterService, DatagridSmartFilterService, []), ɵprd(512, null, DatagridFacadeService, DatagridFacadeService, [HttpClient]), ɵprd(512, null, DatagridService, DatagridService, []), ɵdid(4, 6275072, [[1, 4], ["dataGrid_orderdetailsDataGrid", 4]], 1, DatagridComponent, [ChangeDetectorRef, ElementRef, Injector, NgZone, DatagridFacadeService, DatagridService, ApplicationRef, DomSanitizer, Renderer2], { id: [0, "id"], autoHeight: [1, "autoHeight"], showBorder: [2, "showBorder"], striped: [3, "striped"], headerWrap: [4, "headerWrap"], footerHeight: [5, "footerHeight"], footerDataFrom: [6, "footerDataFrom"], footerPosition: [7, "footerPosition"], rowHeight: [8, "rowHeight"], fit: [9, "fit"], fitColumns: [10, "fitColumns"], autoFitColumns: [11, "autoFitColumns"], scrollBarShowMode: [12, "scrollBarShowMode"], showLineNumber: [13, "showLineNumber"], lineNumberTitle: [14, "lineNumberTitle"], lineNumberWidth: [15, "lineNumberWidth"], lockPagination: [16, "lockPagination"], showPageList: [17, "showPageList"], showGotoInput: [18, "showGotoInput"], multiSelect: [19, "multiSelect"], showCheckbox: [20, "showCheckbox"], showAllCheckbox: [21, "showAllCheckbox"], checkOnSelect: [22, "checkOnSelect"], selectOnCheck: [23, "selectOnCheck"], selectionMode: [24, "selectionMode"], keepSelect: [25, "keepSelect"], fields: [26, "fields"], nowrap: [27, "nowrap"], virtualized: [28, "virtualized"], virtualizedAsyncLoad: [29, "virtualizedAsyncLoad"], editMode: [30, "editMode"], enableEditCellStyle: [31, "enableEditCellStyle"], selectOnEditing: [32, "selectOnEditing"], enableDragColumn: [33, "enableDragColumn"], groupSummaryPosition: [34, "groupSummaryPosition"], showGroupColumn: [35, "showGroupColumn"], showRowGroupPanel: [36, "showRowGroupPanel"], AutoColumnWidthUseDblclick: [37, "AutoColumnWidthUseDblclick"], mergeCell: [38, "mergeCell"], enableSimpleMode: [39, "enableSimpleMode"], enableScheme: [40, "enableScheme"], clearSelectionsWhenDataIsEmpty: [41, "clearSelectionsWhenDataIsEmpty"], enableContextMenu: [42, "enableContextMenu"], enableHighlightCell: [43, "enableHighlightCell"] }, { pageSizeChanged: "pageSizeChanged", pageChanged: "pageChanged", filterChanged: "filterChanged", selectChanged: "selectChanged", unSelect: "unSelect", scrollYLoad: "scrollYLoad", checkedChange: "checkedChange" }), ɵqud(603979776, 5, { dgColumns: 1 }), ɵdid(6, 737280, null, 0, FarrisDatagridUseBindingDataDirective, [BindingData, ViewModel, DatagridComponent], null, null), ɵdid(7, 737280, null, 0, EditableDirective, [BindingData, ViewModel, DatagridComponent, DateTimeHelperService, Injector, RuntimeStateService, DialogService, NgZone], { gridEditable: [0, "gridEditable"], disableGroupOnEditing: [1, "disableGroupOnEditing"] }, null), ɵdid(8, 147456, null, 0, FarrisDataGridEndEditDirective, [AppContext, DatagridComponent], null, null), ɵdid(9, 16384, null, 0, FarrisDataGridRemoteSummaryDirective, [ViewModel, DatagridComponent], { remoteSummaryCommand: [0, "remoteSummaryCommand"] }, null), ɵdid(10, 212992, null, 0, DatagridComponentRefDirective, [Injector, DatagridComponent, ElementRef, FrameContext], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = "dataGrid_orderdetails"; var currVal_4 = false; var currVal_5 = false; var currVal_6 = true; var currVal_7 = false; var currVal_8 = 29; var currVal_9 = "client"; var currVal_10 = "bottom"; var currVal_11 = 30; var currVal_12 = true; var currVal_13 = true; var currVal_14 = true; var currVal_15 = "auto"; var currVal_16 = false; var currVal_17 = _co.dataGrid_orderdetailslineNumberTitle; var currVal_18 = 36; var currVal_19 = (_co.viewModel.stateMachine && _co.viewModel.stateMachine["editable"]); var currVal_20 = false; var currVal_21 = false; var currVal_22 = false; var currVal_23 = false; var currVal_24 = false; var currVal_25 = false; var currVal_26 = false; var currVal_27 = "default"; var currVal_28 = true; var currVal_29 = _co.viewModel.dataGrid_orderdetailsColumns; var currVal_30 = true; var currVal_31 = false; var currVal_32 = false; var currVal_33 = "cell"; var currVal_34 = false; var currVal_35 = false; var currVal_36 = false; var currVal_37 = "groupFooterRow"; var currVal_38 = true; var currVal_39 = false; var currVal_40 = true; var currVal_41 = false; var currVal_42 = false; var currVal_43 = false; var currVal_44 = true; var currVal_45 = false; var currVal_46 = false; _ck(_v, 4, 1, [currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46]); _ck(_v, 6, 0); var currVal_47 = _co.viewModel.stateMachine["editable"]; var currVal_48 = true; _ck(_v, 7, 0, currVal_47, currVal_48); var currVal_49 = ""; _ck(_v, 9, 0, currVal_49); _ck(_v, 10, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 4).pos; var currVal_1 = ɵnov(_v, 4).hostCls; var currVal_2 = ɵnov(_v, 4).autoHeightCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
            function View_OrderdetailsComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 3, "div", [["class", "f-grid-is-sub f-utils-flex-column"], ["id", "orderdetails-component-layout"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 2, "div", [["class", "f-utils-fill"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_OrderdetailsComponent_2)), ɵdid(3, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 3, 0, currVal_0); }, null); }
            function View_OrderdetailsComponent_0(_l) { return ɵvid(0, [ɵqud(671088640, 1, { dataGrid_orderdetailsDataGrid: 0 }), ɵqud(402653184, 2, { conditionDialog: 0 }), ɵqud(402653184, 3, { qdpViewComponent: 0 }), ɵqud(402653184, 4, { queryFrameworkLayoutComponent: 0 }), (_l()(), ɵand(16777216, null, null, 1, null, View_OrderdetailsComponent_1)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 5, 0, currVal_0); }, null); }
            function View_OrderdetailsComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 84, "app-orderdetailscomponent", [], [[8, "className", 0]], null, null, View_OrderdetailsComponent_0, RenderType_OrderdetailsComponent)), ɵprd(4608, null, ViewModel, OrderdetailsComponentViewmodel, []), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p1_0, p1_1, p1_2) { return [new orderdetailsAddItem1Handler(p0_0), new orderdetailsRemoveItem1Handler(p1_0, p1_1, p1_2)]; }, [SubListDataService, DataGridService, SubListDataService, ListDataService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService$2, NavigationService$2, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService$2, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService$1, DialogService$1, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, QueryIndexService, QueryIndexService, [Repository, CacheService, Router, FrameworkService, FilterManagerService]), ɵprd(4608, null, FinishEventService, FinishEventService, [FinishLoadService]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, GRID_SETTINGS_HTTP, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, Form, OrderdetailsComponentViewmodelForm, []), ɵprd(4608, null, UIState, OrderdetailsComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [PurchaseOrderRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(81, 4440064, null, 0, OrderdetailsComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, CommonUtils, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "orderdetails-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 81, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 81).cls; _ck(_v, 0, 0, currVal_0); }); }
            var OrderdetailsComponentNgFactory = ɵccf("app-orderdetailscomponent", OrderdetailsComponent, View_OrderdetailsComponent_Host_0, {}, {}, []);

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
            function View_BasicFormComponent_5(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "orderCode"], ["id", "orderCode_8f6f5647_uaby"], ["input-end-edit", ""], ["maxlength", "36"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
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
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "36"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "orderCode"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = false; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent, 0), "TextBox/orderCode_8f6f5647_uaby/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_BasicFormComponent_6(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "orderCode"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { type: [0, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = "string"; _ck(_v, 1, 0, currVal_8); var currVal_9 = "orderCode"; _ck(_v, 3, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_3(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "orderCode_8f6f5647_uaby"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_4)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_5)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_6)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("orderCode"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "orderCode_8f6f5647_uaby", _co.lang, "\u8BA2\u5355\u7F16\u53F7")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "orderCode_8f6f5647_uaby", _co.lang, "\u8BA2\u5355\u7F16\u53F7")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_8(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_9(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "orderName"], ["id", "orderName_35bceb1e_r0en"], ["input-end-edit", ""], ["maxlength", "36"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
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
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "36"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "orderName"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent, 0), "TextBox/orderName_35bceb1e_r0en/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_BasicFormComponent_10(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "orderName"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { type: [0, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = "string"; _ck(_v, 1, 0, currVal_8); var currVal_9 = "orderName"; _ck(_v, 3, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_7(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "orderName_35bceb1e_r0en"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_8)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_9)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_10)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("orderName"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "orderName_35bceb1e_r0en", _co.lang, "\u8BA2\u5355\u540D\u79F0")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "orderName_35bceb1e_r0en", _co.lang, "\u8BA2\u5355\u540D\u79F0")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_12(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_13(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "farris-lookup-grid", [["data-mapping", ""], ["formControlName", "purchaseDept_PurchaseDept_name"], ["id", "purchaseDept_PurchaseDept_name_a6a5688e_ss3h"], ["input-end-edit", ""], ["lookupGridRef", ""]], [[8, "className", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, View_LookupGridComponent_0, RenderType_LookupGridComponent)), ɵprd(4608, null, PersonalConfigService, PersonalConfigService, [IdService]), ɵprd(512, null, LookupDefaultMapping, LookupDefaultMapping, [CommonUtils]), ɵprd(131584, null, ShortcutsService, ShortcutsService, []), ɵprd(512, null, LookupUtils, LookupUtils, [CommonUtils, RuntimeStateService, NgZone]), ɵdid(5, 13352960, [[1, 4], ["purchaseDept_PurchaseDept_name_a6a5688e_ss3h", 4]], 0, LookupGridComponent, [Injector, ComponentFactoryResolver, ElementRef, CommonUtils, LookupDefaultMapping, ChangeDetectorRef, ShortcutsService, LookupUtils, NgZone, Renderer2], { title: [0, "title"], showCloseButton: [1, "showCloseButton"], showMaxButton: [2, "showMaxButton"], resizable: [3, "resizable"], editable: [4, "editable"], readonly: [5, "readonly"], mapFields: [6, "mapFields"], valueField: [7, "valueField"], textField: [8, "textField"], context: [9, "context"], viewType: [10, "viewType"], displayType: [11, "displayType"], enableClear: [12, "enableClear"], singleSelect: [13, "singleSelect"], idField: [14, "idField"], uri: [15, "uri"], pagination: [16, "pagination"], pageIndex: [17, "pageIndex"], pageSize: [18, "pageSize"], pageList: [19, "pageList"], nosearch: [20, "nosearch"], treeInfo: [21, "treeInfo"], cascadeStatus: [22, "cascadeStatus"], placeholder: [23, "placeholder"], useFavorite: [24, "useFavorite"], useTip: [25, "useTip"], isRecordSize: [26, "isRecordSize"], enableToSelect: [27, "enableToSelect"], expandLevel: [28, "expandLevel"], treeTableOptions: [29, "treeTableOptions"], loadTreeDataType: [30, "loadTreeDataType"], loadDataWhenOpen: [31, "loadDataWhenOpen"], selectFirstInNav: [32, "selectFirstInNav"], enableFullTree: [33, "enableFullTree"], useExtendInfo: [34, "useExtendInfo"], quickSelect: [35, "quickSelect"] }, null), ɵpod(6, { "id": 0, "name": 1 }), ɵpod(7, { "enableExtendLoadMethod": 0 }), ɵpad(8, 5), ɵpod(9, { "onlySelectLeaf": 0 }), ɵppd(10, 3), ɵpod(11, { "enableContextMenu": 0 }), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [LookupGridComponent]), ɵdid(13, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(15, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(16, 81920, null, 0, LookupDataMappingDirective, [[2, ViewModel], [6, LookupGridComponent]], null, null), ɵdid(17, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(18, 212992, null, 0, LookupGridComponentRefDirective, [Injector, LookupGridComponent, ElementRef, FrameContext], null, null), ɵdid(19, 4276224, null, 0, ɵa, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.LookupEditpurchaseDeptPurchaseDeptnamea6a5688ess3hDialogTitle; var currVal_9 = true; var currVal_10 = true; var currVal_11 = true; var currVal_12 = false; var currVal_13 = !_co.viewModel.stateMachine["editable"]; var currVal_14 = _ck(_v, 6, 0, "purchaseDept.purchaseDept_ID,purchaseDept.purchaseDept", "purchaseDept.purchaseDept_name"); var currVal_15 = "id"; var currVal_16 = "name"; var currVal_17 = _ck(_v, 7, 0, true); var currVal_18 = "text"; var currVal_19 = "TreeList"; var currVal_20 = true; var currVal_21 = true; var currVal_22 = "id"; var currVal_23 = "PurchaseOrder.purchaseDept_PurchaseDept_name"; var currVal_24 = true; var currVal_25 = 1; var currVal_26 = 20; var currVal_27 = _ck(_v, 8, 0, 10, 20, 30, 50, 100); var currVal_28 = false; var currVal_29 = _ck(_v, 9, 0, "default"); var currVal_30 = "enable"; var currVal_31 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 23, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent, 0), "LookupEdit/purchaseDept_PurchaseDept_name_a6a5688e_ss3h/placeHolder", _co.lang, "")), ""); var currVal_32 = true; var currVal_33 = false; var currVal_34 = false; var currVal_35 = true; var currVal_36 = (0 - 1); var currVal_37 = _ck(_v, 11, 0, false); var currVal_38 = "default"; var currVal_39 = true; var currVal_40 = false; var currVal_41 = false; var currVal_42 = false; var currVal_43 = _co.purchaseDept_PurchaseDept_name_a6a5688e_ss3hQuickSelect; _ck(_v, 5, 1, [currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43]); var currVal_44 = "purchaseDept_PurchaseDept_name"; _ck(_v, 13, 0, currVal_44); _ck(_v, 16, 0); _ck(_v, 17, 0); _ck(_v, 18, 0); var currVal_45 = 0; _ck(_v, 19, 0, currVal_45); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 5).hostCls; var currVal_1 = ɵnov(_v, 15).ngClassUntouched; var currVal_2 = ɵnov(_v, 15).ngClassTouched; var currVal_3 = ɵnov(_v, 15).ngClassPristine; var currVal_4 = ɵnov(_v, 15).ngClassDirty; var currVal_5 = ɵnov(_v, 15).ngClassValid; var currVal_6 = ɵnov(_v, 15).ngClassInvalid; var currVal_7 = ɵnov(_v, 15).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_14(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "purchaseDept_PurchaseDept_name"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], maxHeight: [1, "maxHeight"], type: [2, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = 500; var currVal_10 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = "purchaseDept_PurchaseDept_name"; _ck(_v, 3, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_11(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "purchaseDept_PurchaseDept_name_a6a5688e_ss3h"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_12)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_13)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_14)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("purchaseDept_PurchaseDept_name"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "purchaseDept_PurchaseDept_name_a6a5688e_ss3h", _co.lang, "\u91C7\u8D2D\u90E8\u95E8")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "purchaseDept_PurchaseDept_name_a6a5688e_ss3h", _co.lang, "\u91C7\u8D2D\u90E8\u95E8")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_16(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_17(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 17, "farris-lookup-grid", [["data-mapping", ""], ["formControlName", "purchaser_Purchaser_Name"], ["id", "purchaser_Purchaser_Name_8e36074b_1h8e"], ["input-end-edit", ""], ["lookupGridRef", ""]], [[8, "className", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, View_LookupGridComponent_0, RenderType_LookupGridComponent)), ɵprd(4608, null, PersonalConfigService, PersonalConfigService, [IdService]), ɵprd(512, null, LookupDefaultMapping, LookupDefaultMapping, [CommonUtils]), ɵprd(131584, null, ShortcutsService, ShortcutsService, []), ɵprd(512, null, LookupUtils, LookupUtils, [CommonUtils, RuntimeStateService, NgZone]), ɵdid(5, 13352960, [[2, 4], ["purchaser_Purchaser_Name_8e36074b_1h8e", 4]], 0, LookupGridComponent, [Injector, ComponentFactoryResolver, ElementRef, CommonUtils, LookupDefaultMapping, ChangeDetectorRef, ShortcutsService, LookupUtils, NgZone, Renderer2], { title: [0, "title"], showCloseButton: [1, "showCloseButton"], showMaxButton: [2, "showMaxButton"], resizable: [3, "resizable"], editable: [4, "editable"], readonly: [5, "readonly"], mapFields: [6, "mapFields"], valueField: [7, "valueField"], textField: [8, "textField"], context: [9, "context"], viewType: [10, "viewType"], displayType: [11, "displayType"], enableClear: [12, "enableClear"], singleSelect: [13, "singleSelect"], idField: [14, "idField"], uri: [15, "uri"], pagination: [16, "pagination"], pageIndex: [17, "pageIndex"], pageSize: [18, "pageSize"], pageList: [19, "pageList"], nosearch: [20, "nosearch"], cascadeStatus: [21, "cascadeStatus"], placeholder: [22, "placeholder"], useFavorite: [23, "useFavorite"], useTip: [24, "useTip"], isRecordSize: [25, "isRecordSize"], enableToSelect: [26, "enableToSelect"], expandLevel: [27, "expandLevel"], loadTreeDataType: [28, "loadTreeDataType"], loadDataWhenOpen: [29, "loadDataWhenOpen"], selectFirstInNav: [30, "selectFirstInNav"], enableFullTree: [31, "enableFullTree"], useExtendInfo: [32, "useExtendInfo"], quickSelect: [33, "quickSelect"] }, null), ɵpod(6, { "id": 0, "name": 1 }), ɵpod(7, { "enableExtendLoadMethod": 0 }), ɵpad(8, 5), ɵppd(9, 3), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [LookupGridComponent]), ɵdid(11, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(13, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(14, 81920, null, 0, LookupDataMappingDirective, [[2, ViewModel], [6, LookupGridComponent]], null, null), ɵdid(15, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(16, 212992, null, 0, LookupGridComponentRefDirective, [Injector, LookupGridComponent, ElementRef, FrameContext], null, null), ɵdid(17, 4276224, null, 0, ɵa, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.LookupEditpurchaserPurchaserName8e36074b1h8eDialogTitle; var currVal_9 = true; var currVal_10 = true; var currVal_11 = true; var currVal_12 = false; var currVal_13 = !_co.viewModel.stateMachine["editable"]; var currVal_14 = _ck(_v, 6, 0, "purchaser.purchaser,purchaser.purchaser_ID", "purchaser.purchaser_Name"); var currVal_15 = "id"; var currVal_16 = "name"; var currVal_17 = _ck(_v, 7, 0, true); var currVal_18 = "text"; var currVal_19 = "List"; var currVal_20 = true; var currVal_21 = true; var currVal_22 = "id"; var currVal_23 = "PurchaseOrder.purchaser_Purchaser_Name"; var currVal_24 = true; var currVal_25 = 1; var currVal_26 = 20; var currVal_27 = _ck(_v, 8, 0, 10, 20, 30, 50, 100); var currVal_28 = false; var currVal_29 = "enable"; var currVal_30 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 22, _ck(_v, 9, 0, ɵnov(_v.parent.parent.parent.parent, 0), "LookupEdit/purchaser_Purchaser_Name_8e36074b_1h8e/placeHolder", _co.lang, "")), ""); var currVal_31 = true; var currVal_32 = false; var currVal_33 = false; var currVal_34 = true; var currVal_35 = (0 - 1); var currVal_36 = "default"; var currVal_37 = true; var currVal_38 = false; var currVal_39 = false; var currVal_40 = false; var currVal_41 = _co.purchaser_Purchaser_Name_8e36074b_1h8eQuickSelect; _ck(_v, 5, 1, [currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41]); var currVal_42 = "purchaser_Purchaser_Name"; _ck(_v, 11, 0, currVal_42); _ck(_v, 14, 0); _ck(_v, 15, 0); _ck(_v, 16, 0); var currVal_43 = 0; _ck(_v, 17, 0, currVal_43); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 5).hostCls; var currVal_1 = ɵnov(_v, 13).ngClassUntouched; var currVal_2 = ɵnov(_v, 13).ngClassTouched; var currVal_3 = ɵnov(_v, 13).ngClassPristine; var currVal_4 = ɵnov(_v, 13).ngClassDirty; var currVal_5 = ɵnov(_v, 13).ngClassValid; var currVal_6 = ɵnov(_v, 13).ngClassInvalid; var currVal_7 = ɵnov(_v, 13).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_18(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "purchaser_Purchaser_Name"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], maxHeight: [1, "maxHeight"], type: [2, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = 500; var currVal_10 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = "purchaser_Purchaser_Name"; _ck(_v, 3, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_15(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "purchaser_Purchaser_Name_8e36074b_1h8e"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_16)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_17)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_18)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("purchaser_Purchaser_Name"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "purchaser_Purchaser_Name_8e36074b_1h8e", _co.lang, "\u91C7\u8D2D\u4EBA")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "purchaser_Purchaser_Name_8e36074b_1h8e", _co.lang, "\u91C7\u8D2D\u4EBA")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_20(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_21(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 12, "farris-datepicker", [["datepickerRef", ""], ["formControlName", "orderDate"], ["id", "orderDate_56f7fcde_n04v"], ["input-end-edit", ""]], [[8, "className", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 4).onMouseEnter($event) !== false);
                    ad = (pd_0 && ad);
                } if (("mouseleave" === en)) {
                    var pd_1 = (ɵnov(_v, 4).onMouseLeave($event) !== false);
                    ad = (pd_1 && ad);
                } return ad; }, View_FarrisDatepickerComponent_0, RenderType_FarrisDatepickerComponent)), ɵprd(4608, null, LocaleService, LocaleService, [LOCALE_ID, CommonUtils, [2, FARRIS_LOCAL_CUSTOM_DATA]]), ɵprd(512, null, UtilService, UtilService, []), ɵprd(512, null, DefaultConfigService, DefaultConfigService, []), ɵdid(4, 4964352, [["orderDate_56f7fcde_n04v", 4]], 0, FarrisDatepickerComponent, [ElementRef, UtilService, DefaultConfigService, Injector], { readonly: [0, "readonly"], editable: [1, "editable"], dateRange: [2, "dateRange"], showTime: [3, "showTime"], showType: [4, "showType"], locale: [5, "locale"], dateFormat: [6, "dateFormat"], useDefault: [7, "useDefault"], returnType: [8, "returnType"], returnFormat: [9, "returnFormat"], placeholder: [10, "placeholder"], disableDates: [11, "disableDates"], showWeekNumbers: [12, "showWeekNumbers"], dateRangeDatesDelimiter: [13, "dateRangeDatesDelimiter"], shortcuts: [14, "shortcuts"] }, null), ɵppd(5, 3), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [FarrisDatepickerComponent]), ɵdid(7, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(9, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(10, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(11, 212992, null, 0, DatepickerComponentRefDirective, [Injector, FarrisDatepickerComponent, ElementRef, FrameContext], null, null), ɵdid(12, 4276224, null, 0, ɵa, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = !_co.viewModel.stateMachine["editable"]; var currVal_9 = true; var currVal_10 = false; var currVal_11 = false; var currVal_12 = 1; var currVal_13 = "zh-cn"; var currVal_14 = "yyyy-MM-dd"; var currVal_15 = false; var currVal_16 = "Date"; var currVal_17 = "yyyy-MM-dd"; var currVal_18 = ɵinlineInterpolate(1, "", ɵunv(_v, 4, 10, _ck(_v, 5, 0, ɵnov(_v.parent.parent.parent.parent, 0), "DateBox/orderDate_56f7fcde_n04v/placeHolder", _co.lang, "")), ""); var currVal_19 = ɵEMPTY_ARRAY; var currVal_20 = false; var currVal_21 = "~"; var currVal_22 = ɵEMPTY_ARRAY; _ck(_v, 4, 1, [currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22]); var currVal_23 = "orderDate"; _ck(_v, 7, 0, currVal_23); _ck(_v, 10, 0); _ck(_v, 11, 0); var currVal_24 = (0 - 1); _ck(_v, 12, 0, currVal_24); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 4).cls; var currVal_1 = ɵnov(_v, 9).ngClassUntouched; var currVal_2 = ɵnov(_v, 9).ngClassTouched; var currVal_3 = ɵnov(_v, 9).ngClassPristine; var currVal_4 = ɵnov(_v, 9).ngClassDirty; var currVal_5 = ɵnov(_v, 9).ngClassValid; var currVal_6 = ɵnov(_v, 9).ngClassInvalid; var currVal_7 = ɵnov(_v, 9).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_22(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "orderDate"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { type: [0, "type"], dateRange: [1, "dateRange"], format: [2, "format"], showTime: [3, "showTime"], dateRangeDelimiter: [4, "dateRangeDelimiter"], showType: [5, "showType"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = "date"; var currVal_9 = false; var currVal_10 = "yyyy-MM-dd"; var currVal_11 = false; var currVal_12 = "~"; var currVal_13 = 1; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_14 = "orderDate"; _ck(_v, 3, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_19(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "orderDate_56f7fcde_n04v"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_20)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_21)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_22)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("orderDate"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "orderDate_56f7fcde_n04v", _co.lang, "\u4E0B\u5355\u65E5\u671F")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "orderDate_56f7fcde_n04v", _co.lang, "\u4E0B\u5355\u65E5\u671F")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_24(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_25(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 9, "farris-number-spinner", [["formControlName", "totalPrice"], ["id", "totalPrice_b3c131a8_xth5"], ["input-end-edit", ""], ["numberSpinnerRef", ""]], [[2, "f-cmp-number-spinner", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, View_NumberSpinnerComponent_0, RenderType_NumberSpinnerComponent)), ɵdid(1, 4964352, null, 0, NumberSpinnerComponent, [ElementRef, Renderer2, Injector], { readonly: [0, "readonly"], placeholder: [1, "placeholder"], step: [2, "step"], bigNumber: [3, "bigNumber"], showButton: [4, "showButton"], useThousands: [5, "useThousands"], textAlign: [6, "textAlign"], canNull: [7, "canNull"], precision: [8, "precision"], showZero: [9, "showZero"] }, null), ɵppd(2, 3), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [NumberSpinnerComponent]), ɵdid(4, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(6, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(7, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(8, 4407296, null, 0, NumberSpinnerComponentRefDirective, [Injector, NumberSpinnerComponent, ElementRef, FrameContext], null, null), ɵdid(9, 4276224, null, 0, ɵa, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = true; var currVal_9 = ɵinlineInterpolate(1, "", ɵunv(_v, 1, 1, _ck(_v, 2, 0, ɵnov(_v.parent.parent.parent.parent, 0), "NumberSpinner/totalPrice_b3c131a8_xth5/placeHolder", _co.lang, "")), ""); var currVal_10 = 1; var currVal_11 = false; var currVal_12 = true; var currVal_13 = true; var currVal_14 = "left"; var currVal_15 = true; var currVal_16 = 2; var currVal_17 = true; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17); var currVal_18 = "totalPrice"; _ck(_v, 4, 0, currVal_18); _ck(_v, 7, 0); _ck(_v, 8, 0); var currVal_19 = (0 - 1); _ck(_v, 9, 0, currVal_19); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).hostClass; var currVal_1 = ɵnov(_v, 6).ngClassUntouched; var currVal_2 = ɵnov(_v, 6).ngClassTouched; var currVal_3 = ɵnov(_v, 6).ngClassPristine; var currVal_4 = ɵnov(_v, 6).ngClassDirty; var currVal_5 = ɵnov(_v, 6).ngClassValid; var currVal_6 = ɵnov(_v, 6).ngClassInvalid; var currVal_7 = ɵnov(_v, 6).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_26(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "totalPrice"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { type: [0, "type"], textAlign: [1, "textAlign"], option: [2, "option"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = "number"; var currVal_9 = "left"; var currVal_10 = _co.totalPriceB3c131a8Xth5TextOptions; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = "totalPrice"; _ck(_v, 3, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_23(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "totalPrice_b3c131a8_xth5"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_24)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_25)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_26)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("totalPrice"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "totalPrice_b3c131a8_xth5", _co.lang, "\u7269\u6599\u603B\u4EF7")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "totalPrice_b3c131a8_xth5", _co.lang, "\u7269\u6599\u603B\u4EF7")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 15, "div", [["class", "f-form-layout farris-form farris-form-controls-inline"], ["id", "basic-form-layout"]], [[2, "farris-form-controls-inline", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
                    var pd_0 = (ɵnov(_v, 1).onSubmit($event) !== false);
                    ad = (pd_0 && ad);
                } if (("reset" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onReset() !== false);
                    ad = (pd_1 && ad);
                } return ad; }, null, null)), ɵdid(1, 540672, null, 0, FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, null), ɵprd(2048, null, ControlContainer, null, [FormGroupDirective]), ɵdid(3, 16384, null, 0, NgControlStatusGroup, [[4, ControlContainer]], null, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_3)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_7)), ɵdid(7, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_11)), ɵdid(9, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_15)), ɵdid(11, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_19)), ɵdid(13, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_23)), ɵdid(15, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.viewModel.form; _ck(_v, 1, 0, currVal_8); var currVal_9 = true; _ck(_v, 5, 0, currVal_9); var currVal_10 = true; _ck(_v, 7, 0, currVal_10); var currVal_11 = true; _ck(_v, 9, 0, currVal_11); var currVal_12 = true; _ck(_v, 11, 0, currVal_12); var currVal_13 = true; _ck(_v, 13, 0, currVal_13); var currVal_14 = true; _ck(_v, 15, 0, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.lang === "zh-CHS") || (_co.lang === "zh-CHT")); var currVal_1 = ɵnov(_v, 3).ngClassUntouched; var currVal_2 = ɵnov(_v, 3).ngClassTouched; var currVal_3 = ɵnov(_v, 3).ngClassPristine; var currVal_4 = ɵnov(_v, 3).ngClassDirty; var currVal_5 = ɵnov(_v, 3).ngClassValid; var currVal_6 = ɵnov(_v, 3).ngClassInvalid; var currVal_7 = ɵnov(_v, 3).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 11, "farris-section", [["class", "f-section-form f-section-in-mainsubcard"], ["id", "basic-form-section"], ["sectionRef", ""]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent)), ɵdid(1, 245760, null, 7, FarrisSectionComponent, [[2, Injector]], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], enableAccordion: [4, "enableAccordion"], fill: [5, "fill"], expandStatus: [6, "expandStatus"], index: [7, "index"] }, null), ɵqud(335544320, 6, { headerDirective: 0 }), ɵqud(335544320, 7, { headerTitleDirective: 0 }), ɵqud(335544320, 8, { headerContentDirective: 0 }), ɵqud(335544320, 9, { headerToolbarDirective: 0 }), ɵqud(335544320, 10, { extendDirective: 0 }), ɵqud(335544320, 11, { contentDirective: 0 }), ɵqud(335544320, 12, { viewChangeDirective: 0 }), ɵdid(9, 212992, null, 0, SectionComponentRefDirective, [Injector, FarrisSectionComponent, ElementRef, FrameContext], null, null), (_l()(), ɵand(16777216, null, 0, 1, null, View_BasicFormComponent_2)), ɵdid(11, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectionbasicformsectionMainTitle; var currVal_7 = _co.SectionbasicformsectionSubTitle; var currVal_8 = true; var currVal_9 = false; var currVal_10 = "default"; var currVal_11 = false; var currVal_12 = true; var currVal_13 = _co.index; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); _ck(_v, 9, 0); var currVal_14 = true; _ck(_v, 11, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).baseCls; var currVal_1 = ɵnov(_v, 1).maxStatus; var currVal_2 = ɵnov(_v, 1).fillCls; var currVal_3 = ɵnov(_v, 1).enableAccordionCls; var currVal_4 = ɵnov(_v, 1).enableCollapseCls; var currVal_5 = ɵnov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
            function View_BasicFormComponent_0(_l) { return ɵvid(0, [ɵpid(0, LangPipe, [TranslateService, HttpClient]), ɵqud(671088640, 1, { purchaseDept_PurchaseDept_name_a6a5688e_ss3h: 0 }), ɵqud(671088640, 2, { purchaser_Purchaser_Name_8e36074b_1h8e: 0 }), ɵqud(402653184, 3, { conditionDialog: 0 }), ɵqud(402653184, 4, { qdpViewComponent: 0 }), ɵqud(402653184, 5, { queryFrameworkLayoutComponent: 0 }), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_1)), ɵdid(7, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 7, 0, currVal_0); }, null); }
            function View_BasicFormComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 82, "app-basicformcomponent", [], [[8, "className", 0]], null, null, View_BasicFormComponent_0, RenderType_BasicFormComponent)), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, ViewModel, BasicFormViewmodel, []), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService$2, NavigationService$2, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService$2, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService$1, DialogService$1, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, QueryIndexService, QueryIndexService, [Repository, CacheService, Router, FrameworkService, FilterManagerService]), ɵprd(4608, null, FinishEventService, FinishEventService, [FinishLoadService]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, BasicFormViewmodelForm, []), ɵprd(4608, null, UIState, BasicFormViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [PurchaseOrderRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(79, 4440064, null, 0, BasicFormComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, ComponentManagerService, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "basic-form-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 79, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 79).cls; _ck(_v, 0, 0, currVal_0); }); }
            var BasicFormComponentNgFactory = ɵccf("app-basicformcomponent", BasicFormComponent, View_BasicFormComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_RootComponent = [styles];
            var RenderType_RootComponent = ɵcrt({ encapsulation: 0, styles: styles_RootComponent, data: {} });
            function View_RootComponent_4(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 14, "div", [["class", "f-title"], ["id", "header-title-container"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 1, "span", [["class", "f-title-icon f-text-orna-bill"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 0, "i", [["class", "f-icon f-icon-page-title-record"]], null, null, null, null, null)), (_l()(), ɵeld(3, 0, null, null, 4, "h4", [["class", "f-title-text"]], null, null, null, null, null)), (_l()(), ɵted(4, null, ["", ",\u5355\u636E\u7F16\u53F7\uFF1A", ",\u8BA2\u5355\u91D1\u989D\uFF1A", ""])), ɵppd(5, 3), ɵpad(6, 1), ɵpad(7, 1), (_l()(), ɵeld(8, 0, null, null, 6, "div", [["class", "f-title-pagination"]], null, null, null, null, null)), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "f-icon f-icon-arrow-w"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = ((_co.viewModel.stateMachine["canEdit"] && _co.viewModel.ChangeItem1()) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), ɵdid(10, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(11, { "f-state-disabled": 0 }), (_l()(), ɵeld(12, 0, null, null, 2, "span", [["class", "f-icon f-icon-arrow-e"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = ((_co.viewModel.stateMachine["canEdit"] && _co.viewModel.ChangeItem2()) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), ɵdid(13, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(14, { "f-state-disabled": 0 })], function (_ck, _v) { var _co = _v.component; var currVal_3 = "f-icon f-icon-arrow-w"; var currVal_4 = _ck(_v, 11, 0, !_co.viewModel.stateMachine["canEdit"]); _ck(_v, 10, 0, currVal_3, currVal_4); var currVal_5 = "f-icon f-icon-arrow-e"; var currVal_6 = _ck(_v, 14, 0, !_co.viewModel.stateMachine["canEdit"]); _ck(_v, 13, 0, currVal_5, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ɵunv(_v, 4, 0, _ck(_v, 5, 0, ɵnov(_v.parent.parent.parent.parent, 0), "title", _co.lang, "\u91C7\u8D2D\u8BA2\u5355\u8BE6\u60C5")); var currVal_1 = _co.viewModel.bindingData.getValue(_ck(_v, 6, 0, "orderCode")); var currVal_2 = _co.viewModel.bindingData.getValue(_ck(_v, 7, 0, "totalPrice")); _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2); }); }
            function View_RootComponent_5(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "f-response-toolbar", [["class", "col-7 f-toolbar"], ["id", "page-header-toolbar"]], [[2, "f-response-toolbar", null], [2, "position-relative", null]], [[null, "rtClickEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("rtClickEvent" === en)) {
                    var pd_0 = (_co.pageHeaderToolbarClickHandler($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_ResponseToolbarComponent_0, RenderType_ResponseToolbarComponent)), ɵdid(1, 13090816, [["responsebar", 4]], 0, ResponseToolbarComponent, [ElementRef, Renderer2, ChangeDetectorRef, LocaleService], { datas: [0, "datas"], btnState: [1, "btnState"], btnVisible: [2, "btnVisible"], buttonSize: [3, "buttonSize"], popDirection: [4, "popDirection"] }, { rtClickEvent: "rtClickEvent" })], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.pageHeaderToolbarToolbarItems; var currVal_3 = _co.pageHeaderToolbarToolbarItemsStates; var currVal_4 = _co.pageHeaderToolbarToolbarItemsVisibleStates; var currVal_5 = "default"; var currVal_6 = "default"; _ck(_v, 1, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).frtCls; var currVal_1 = ɵnov(_v, 1).prCls; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
            function View_RootComponent_3(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 4, "div", [["class", "f-page-header-base"], ["id", "header-nav"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_4)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_5)), ɵdid(4, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); var currVal_1 = true; _ck(_v, 4, 0, currVal_1); }, null); }
            function View_RootComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 2, "div", [["class", "f-page-header"], ["id", "page-header"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_3)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_RootComponent_11(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 84, "app-orderdetailscomponent", [], [[8, "className", 0]], null, null, View_OrderdetailsComponent_0, RenderType_OrderdetailsComponent)), ɵprd(4608, null, ViewModel, OrderdetailsComponentViewmodel, []), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p1_0, p1_1, p1_2) { return [new orderdetailsAddItem1Handler(p0_0), new orderdetailsRemoveItem1Handler(p1_0, p1_1, p1_2)]; }, [SubListDataService, DataGridService, SubListDataService, ListDataService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService$2, NavigationService$2, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService$2, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService$1, DialogService$1, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, QueryIndexService, QueryIndexService, [Repository, CacheService, Router, FrameworkService, FilterManagerService]), ɵprd(4608, null, FinishEventService, FinishEventService, [FinishLoadService]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, GRID_SETTINGS_HTTP, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, Form, OrderdetailsComponentViewmodelForm, []), ɵprd(4608, null, UIState, OrderdetailsComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [PurchaseOrderRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(81, 4440064, null, 0, OrderdetailsComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, CommonUtils, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "orderdetails-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 81, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 81).cls; _ck(_v, 0, 0, currVal_0); }); }
            function View_RootComponent_10(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 6, "farris-tabs", [["class", "f-component-tabs f-tabs-has-grid"], ["id", "detail-tab"]], null, null, null, View_FarrisTabsComponent_0, RenderType_FarrisTabsComponent)), ɵdid(1, 16498688, null, 0, FarrisTabsComponent, [TabService, ElementRef, Renderer2, ChangeDetectorRef, NgZone], { autoTitleWidth: [0, "autoTitleWidth"], titleLength: [1, "titleLength"], selectId: [2, "selectId"], contentFill: [3, "contentFill"], btnStates: [4, "btnStates"], btnVisible: [5, "btnVisible"], titleWidth: [6, "titleWidth"] }, null), (_l()(), ɵeld(2, 0, null, 0, 4, "farris-tab", [], null, null, null, View_FarrisTabComponent_0, RenderType_FarrisTabComponent)), ɵdid(3, 12697600, null, 2, FarrisTabComponent, [Compiler, ComponentFactoryResolver, Renderer2, ElementRef, ChangeDetectorRef, [2, FarrisTabsComponent]], { show: [0, "show"], id: [1, "id"], title: [2, "title"], removeable: [3, "removeable"], toolbar: [4, "toolbar"] }, null), ɵqud(335544320, 11, { contentTempl: 0 }), ɵqud(335544320, 12, { farrisTabsExtendDirective: 0 }), (_l()(), ɵand(0, [[11, 2], ["content", 2]], null, 0, null, View_RootComponent_11))], function (_ck, _v) { var _co = _v.component; var currVal_0 = false; var currVal_1 = 7; var currVal_2 = "orderdetails-tab-page"; var currVal_3 = false; var currVal_4 = _co.tabsToolbarStates; var currVal_5 = _co.tabsToolbarVisibleStates; var currVal_6 = 0; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = true; var currVal_8 = "orderdetails-tab-page"; var currVal_9 = _co.orderdetailstabpage; var currVal_10 = false; var currVal_11 = _co.orderdetailsTabToolbar; _ck(_v, 3, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); }, null); }
            function View_RootComponent_9(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 11, "farris-section", [["class", "f-section-tabs f-section-in-mainsubcard"], ["id", "detail-section"], ["sectionRef", ""]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent)), ɵdid(1, 245760, null, 7, FarrisSectionComponent, [[2, Injector]], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], enableAccordion: [4, "enableAccordion"], fill: [5, "fill"], expandStatus: [6, "expandStatus"], index: [7, "index"] }, null), ɵqud(335544320, 4, { headerDirective: 0 }), ɵqud(335544320, 5, { headerTitleDirective: 0 }), ɵqud(335544320, 6, { headerContentDirective: 0 }), ɵqud(335544320, 7, { headerToolbarDirective: 0 }), ɵqud(335544320, 8, { extendDirective: 0 }), ɵqud(335544320, 9, { contentDirective: 0 }), ɵqud(335544320, 10, { viewChangeDirective: 0 }), ɵdid(9, 212992, null, 0, SectionComponentRefDirective, [Injector, FarrisSectionComponent, ElementRef, FrameContext], null, null), (_l()(), ɵand(16777216, null, 0, 1, null, View_RootComponent_10)), ɵdid(11, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectiondetailsectionMainTitle; var currVal_7 = _co.SectiondetailsectionSubTitle; var currVal_8 = false; var currVal_9 = false; var currVal_10 = "default"; var currVal_11 = false; var currVal_12 = true; var currVal_13 = _co.index; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); _ck(_v, 9, 0); var currVal_14 = true; _ck(_v, 11, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).baseCls; var currVal_1 = ɵnov(_v, 1).maxStatus; var currVal_2 = ɵnov(_v, 1).fillCls; var currVal_3 = ɵnov(_v, 1).enableAccordionCls; var currVal_4 = ɵnov(_v, 1).enableCollapseCls; var currVal_5 = ɵnov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
            function View_RootComponent_8(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 2, "div", [["class", "f-struct-wrapper"], ["id", "detail-container"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_9)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_RootComponent_7(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 85, "div", [["class", "f-struct-like-card"], ["id", "like-card-container"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 82, "app-basicformcomponent", [], [[8, "className", 0]], null, null, View_BasicFormComponent_0, RenderType_BasicFormComponent)), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, ViewModel, BasicFormViewmodel, []), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService$2, NavigationService$2, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService$2, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService$1, DialogService$1, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, QueryIndexService, QueryIndexService, [Repository, CacheService, Router, FrameworkService, FilterManagerService]), ɵprd(4608, null, FinishEventService, FinishEventService, [FinishLoadService]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, BasicFormViewmodelForm, []), ɵprd(4608, null, UIState, BasicFormViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [PurchaseOrderRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(80, 4440064, null, 0, BasicFormComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, ComponentManagerService, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "basic-form-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, []), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_8)), ɵdid(85, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { _ck(_v, 80, 0); var currVal_1 = true; _ck(_v, 85, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 80).cls; _ck(_v, 1, 0, currVal_0); }); }
            function View_RootComponent_6(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 2, "div", [["class", "f-page-main"], ["id", "main-container"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_7)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_RootComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 4, "div", [["class", "f-page f-page-card f-page-is-mainsubcard"], ["id", "root-layout"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_2)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_6)), ɵdid(4, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); var currVal_1 = true; _ck(_v, 4, 0, currVal_1); }, null); }
            function View_RootComponent_0(_l) { return ɵvid(0, [ɵpid(0, LangPipe, [TranslateService, HttpClient]), ɵqud(402653184, 1, { conditionDialog: 0 }), ɵqud(402653184, 2, { qdpViewComponent: 0 }), ɵqud(402653184, 3, { queryFrameworkLayoutComponent: 0 }), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_1)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 5, 0, currVal_0); }, null); }
            function View_RootComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 118, "app-rootcomponent", [], [[8, "className", 0]], null, null, View_RootComponent_0, RenderType_RootComponent)), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(135680, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(4608, null, NavigationService$2, NavigationService$2, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, ViewModel, RootViewmodel, []), ɵprd(135680, null, AppContext, AppContext, [[2, Injector], [2, AppContextManager], [3, AppContext]]), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService$2, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(135680, null, PurchaseOrderRepository, PurchaseOrderRepository, [Injector]), ɵprd(6144, null, Repository, null, [PurchaseOrderRepository]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p1_0, p1_1, p2_0, p2_1, p3_0, p3_1, p4_0, p4_1, p5_0, p5_1, p6_0, p6_1, p6_2, p6_3, p7_0, p7_1, p7_2, p7_3, p7_4, p8_0, p8_1, p8_2, p8_3, p9_0, p9_1, p9_2, p9_3) { return [new Load1Handler(p0_0, p0_1), new LoadAndAdd1Handler(p1_0, p1_1), new LoadAndView1Handler(p2_0, p2_1), new LoadAndEdit1Handler(p3_0, p3_1), new Add1Handler(p4_0, p4_1), new Edit1Handler(p5_0, p5_1), new Save1Handler(p6_0, p6_1, p6_2, p6_3), new Cancel1Handler(p7_0, p7_1, p7_2, p7_3, p7_4), new ChangeItem1Handler(p8_0, p8_1, p8_2, p8_3), new ChangeItem2Handler(p9_0, p9_1, p9_2, p9_3)]; }, [NavigationMiddlewareService, CommandService, CardDataService, StateMachineService, CardDataService, StateMachineService, CardDataService, StateMachineService, CardDataService, StateMachineService, CardDataService, StateMachineService, ValidationService, EndEditService, CardDataService, StateMachineService, ValidationService, EndEditService, PaginationService, CardDataService, StateMachineService, ChangeItemService, PaginationService, CardDataService, StateMachineService, ChangeItemService, PaginationService, CardDataService, StateMachineService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(4608, null, FormControlService, FormControlService, []), ɵprd(4608, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(4608, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, WFSubmiteService, WFSubmiteService, [Injector, ComponentFactoryResolver, BsModalService, [2, I18nService$1]]), ɵprd(4608, null, WFFlowchartService, WFFlowchartService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, CloudprintService, CloudprintService, [ɵa$1, ComponentFactoryResolver, ɵb$1, ɵc$1, Injector, ApplicationRef, NotifyService, AppService, WindowService, BsModalService]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService$1, DialogService$1, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, FrameworkSessionService, FrameworkSessionService, [[2, SessionService]]), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, ComponentManagerService, ComponentManagerService, []), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(5120, null, RESOLVER_TOKEN, function (p0_0) { return [new EntityDependencyResolver(p0_0), new StateDependencyResolver(), new CommentDependencyResolver()]; }, [Repository]), ɵprd(4608, null, ResolverRegistry, ResolverRegistry, [Injector, [2, RESOLVER_TOKEN]]), ɵprd(4608, null, ResolveService, ResolveService, [Injector, ResolverRegistry]), ɵprd(4608, null, ExpressionExecutor, ExpressionExecutor, []), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, QueryIndexService, QueryIndexService, [Repository, CacheService, Router, FrameworkService, FilterManagerService]), ɵprd(4608, null, FinishEventService, FinishEventService, [FinishLoadService]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, RootViewmodelForm, []), ɵprd(4608, null, UIState, RootViewmodelUIState, []), ɵprd(4608, null, UriService, UriService, [BE_SERVER_URI_TOKEN]), ɵprd(4608, null, PurchaseOrderProxy, PurchaseOrderProxy, [HttpClient, UriService]), ɵprd(4608, null, Declaration, EventDeclaration, []), ɵprd(6144, null, TranslateToken, null, [LangService]), ɵprd(5120, null, LISTENER_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p0_4, p1_0, p1_1, p1_2, p2_0, p2_1, p2_2) { return [new UIStateChangeListener(p0_0, p0_1, p0_2, p0_3, p0_4), new RepositoryChangeListener(p1_0, p1_1, p1_2), new BindingDataChangeListener(p2_0, p2_1, p2_2)]; }, [Injector, UIState, NAMESPACE, FRAME_ID, BindingData, Injector, Repository, NAMESPACE, Injector, BindingData, NAMESPACE]), ɵprd(5120, null, EFFECTOR_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p1_0, p1_1, p1_2, p2_0, p2_1, p2_2, p3_0, p3_1, p3_2, p3_3, p4_0, p4_1, p4_2, p4_3, p5_0, p5_1, p5_2, p5_3, p5_4, p6_0, p6_1, p6_2, p6_3, p7_0, p7_1, p7_2, p7_3) { return [new RepositoryEffector(p0_0, p0_1, p0_2, p0_3), new UIStateEffector(p1_0, p1_1, p1_2), new ReadonlyEffector(p2_0, p2_1, p2_2), new DependencyEffector(p3_0, p3_1, p3_2, p3_3), new RelativeEffector(p4_0, p4_1, p4_2, p4_3), new ValidateEffector(p5_0, p5_1, p5_2, p5_3, p5_4), new RequiredEffector(p6_0, p6_1, p6_2, p6_3), new VisibleEffector(p7_0, p7_1, p7_2, p7_3)]; }, [Injector, Repository, NAMESPACE, BindingData, Injector, UIState, NAMESPACE, Injector, NAMESPACE, FrameContext, Injector, Repository, NAMESPACE, BindingData, Injector, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, NAMESPACE, Injector, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, NAMESPACE, FrameContext, Injector, Repository, NAMESPACE, FrameContext, Injector, NAMESPACE, FrameContext, Repository]), ɵprd(4608, null, ListenerRegistry, ListenerRegistry, [[2, LISTENER_TOKEN], [2, Injector]]), ɵprd(4608, null, Listeners, Listeners, [[2, ListenerRegistry]]), ɵprd(4608, null, EffectorRegistry, EffectorRegistry, [Injector, [2, EFFECTOR_TOKEN]]), ɵprd(4608, null, EffectorFactory, EffectorFactory, [Injector, EffectorRegistry]), ɵprd(4608, null, ExpressionRegistry, ExpressionRegistry, [Injector, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, [2, TranslateToken]]), ɵprd(4608, null, ExpressionEventEmitter, ExpressionEventEmitter, [Listeners]), ɵprd(4608, null, ExpressionResult, ExpressionResult, [Injector]), ɵprd(4608, null, ExpressionManager, ExpressionManager, [Injector, ResolveService, ExpressionExecutor, ExpressionRegistry, ExpressionResult, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN]), ɵprd(4608, null, ExpressionResultFactory, ExpressionResultFactory, [Injector, ExpressionRegistry, ExpressionManager, ExpressionResult]), ɵprd(5120, null, EVENT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6, p1_0, p1_1, p1_2, p1_3, p1_4, p1_5, p1_6, p2_0, p2_1, p2_2, p2_3, p2_4, p2_5, p2_6, p3_0, p3_1, p3_2, p3_3, p3_4, p3_5, p3_6, p4_0, p4_1, p4_2, p4_3, p4_4, p4_5, p4_6, p5_0, p5_1, p5_2, p5_3, p5_4, p5_5, p5_6, p6_0, p6_1, p6_2, p6_3, p6_4, p6_5, p6_6, p7_0, p7_1, p7_2, p7_3, p7_4, p7_5, p7_6, p8_0, p8_1, p8_2, p8_3, p8_4, p8_5, p8_6, p9_0, p9_1, p9_2, p9_3, p9_4, p9_5, p9_6, p10_0, p10_1, p10_2, p10_3, p10_4, p10_5, p10_6) { return [new RepositoryAddEntityEventHandler(p0_0, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6), new RepositoryRemoveEntityEventHandler(p1_0, p1_1, p1_2, p1_3, p1_4, p1_5, p1_6), new EntityValueChangedEventHandler(p2_0, p2_1, p2_2, p2_3, p2_4, p2_5, p2_6), new StateValueChangedEventHandler(p3_0, p3_1, p3_2, p3_3, p3_4, p3_5, p3_6), new RepositoryLoadEventHandler(p4_0, p4_1, p4_2, p4_3, p4_4, p4_5, p4_6), new EntityUpdateEventHandler(p5_0, p5_1, p5_2, p5_3, p5_4, p5_5, p5_6), new BindingDataAppendObjectEventHandler(p6_0, p6_1, p6_2, p6_3, p6_4, p6_5, p6_6), new BindingDataValueChangeEventHandler(p7_0, p7_1, p7_2, p7_3, p7_4, p7_5, p7_6), new BindingDataRemoveObjectEventHandler(p8_0, p8_1, p8_2, p8_3, p8_4, p8_5, p8_6), new BindingDataLoadEventHandler(p9_0, p9_1, p9_2, p9_3, p9_4, p9_5, p9_6), new BindingDataSelectionChangedEventHandler(p10_0, p10_1, p10_2, p10_3, p10_4, p10_5, p10_6)]; }, [Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult]), ɵprd(4608, null, EventHandlerRegistry, EventHandlerRegistry, [[2, EVENT_HANDLER_TOKEN]]), ɵprd(4608, null, ExpressionEngineImpl, ExpressionEngineImpl, [Injector, ExpressionRegistry, ExpressionEventEmitter, ResolverRegistry, EventHandlerRegistry, ResolveService]), ɵprd(4608, null, EXCEPTION_HANDLER, ExceptionHandler, [FormErrorService, [2, LanguageService], AppContext]), ɵprd(4608, null, BACK_END_MESSAGE_HANDLER_TOKEN, BackEndMessageHandler, [Injector, FrameContext, TranslateToken]), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(512, null, VerifyDetailService, VerifyDetailService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵprd(512, null, StateMachine, RootViewmodelStateMachine, []), ɵdid(113, 4440064, null, 0, RootComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FrameworkService, ApplicationParamService, VerifyDetailService, StateMachine, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "root-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, PARAM_TYPE_TRANSFORM_TOKEN, false, []), ɵprd(256, null, FORM_ID, "9c4742c3-a1f7-49fe-969d-21dd36f60c5d", []), ɵprd(256, null, BE_SESSION_HANDLING_STRATEGY_TOKEN, "SeparatedSession", [])], function (_ck, _v) { _ck(_v, 113, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 113).cls; _ck(_v, 0, 0, currVal_0); }); }
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
            var PurchaseOrderDetailModuleNgFactory = exports('PurchaseOrderDetailModuleNgFactory', ɵcmf(PurchaseOrderDetailModule, [RootComponent], function (_l) { return ɵmod([ɵmpd(512, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, [[8, [LoadingComponentNgFactory$1, TooltipComponentNgFactory$1, ModalBackdropComponentNgFactory$1, ModalContainerComponentNgFactory$1, MessagerComponentNgFactory$1, NotifyContainerComponentNgFactory$1, PopoverContainerComponentNgFactory$1, FarrisContextMenuComponentNgFactory$1, DataTableComponentNgFactory$1, TreeTableComponentNgFactory$1, LookupLeftComponentNgFactory$1, LookupTabsComponentNgFactory$1, LookupQuickSelectPanelComponentNgFactory$1, TimePickerPanelComponentNgFactory, CalendarComponentNgFactory, FilterPanelComponentNgFactory, PopupComponentNgFactory, ɵbNgFactory, ɵiNgFactory, ɵwNgFactory, ɵbfNgFactory, ɵcNgFactory, ɵeNgFactory, ɵbbNgFactory, ɵbcNgFactory, FileListComponentNgFactory, WfApprovalLogsComponentNgFactory, UIFlowchartComponentNgFactory, ɵEmptyOutletComponentNgFactory, LanguageTextPanelComponentNgFactory, EnumEditorComponentNgFactory, FilterEditorComponentNgFactory, SortEditorComponentNgFactory, ɵlNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ɵaNgFactory$1, ɵbNgFactory$1, ɵcNgFactory$1, ɵdNgFactory, ɵeNgFactory$1, ɵfNgFactory, ɵgNgFactory, ɵhNgFactory, ɵiNgFactory$1, ɵjNgFactory, ɵkNgFactory, DatagridEnumEditorComponentNgFactory, DatagridSortEditorComponentNgFactory, DatagridFilterEditorComponentNgFactory, TaskExecuteComponentNgFactory, TaskAssigninfoComponentNgFactory, ProcessSelectorComponentNgFactory, VerifyDetailComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, NgbTooltipWindowNgFactory, FileUploadComponentNgFactory, UploadDialogComponentNgFactory, ɵbNgFactory$2, QueryConditionComponentNgFactory, ɵcNgFactory$2, ɵeNgFactory$2, ɵaNgFactory$2, ProcessSelectorComponentNgFactory$1, WfWorkitemHandleComponentNgFactory, UserHelperComponentNgFactory, TaskAssignComponentNgFactory, TaskSignaddComponentNgFactory, TaskTransferComponentNgFactory, ɵaNgFactory$3, WindowComponentNgFactory, WindowTitleBarComponentNgFactory, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, ɵdNgFactory$1, ɵfNgFactory$1, ɵgNgFactory$1, ɵhNgFactory$1, ɵbNgFactory$3, ɵcNgFactory$3, ɵdNgFactory$2, ɵeNgFactory$3, ɵfNgFactory$2, ɵgNgFactory$2, ɵhNgFactory$2, BatchEditDialogComponentNgFactory, ResultConfirmComponentNgFactory, DiscussionPersonnelComponentNgFactory, MultiDownloadInfoComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory, FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory, FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, OrganizationSelectorComponentNgFactory, GridOrganizationSelectorComponentNgFactory, DatagridSettingsComponentNgFactory, SimpleColumnsComponentNgFactory, NewSchemeComponentNgFactory, SchemeListComponentNgFactory, FEPageModalComponentNgFactory, FEModalBackdropComponentNgFactory, ɵaNgFactory$4, FeatureEditorComponentNgFactory, RtfAppComponentNgFactory$1, ColorPickerComponentNgFactory, RtfAppComponentNgFactory, ɵlNgFactory$1, ɵaNgFactory$5, ExpressioneditorComponentNgFactory, FilterConditionComponentNgFactory, FilterExpressionComponentNgFactory, RootComponentNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ɵmpd(4608, NgLocalization, NgLocaleLocalization, [LOCALE_ID, [2, ɵangular_packages_common_common_a]]), ɵmpd(4608, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_j, []), ɵmpd(4608, FormBuilder, FormBuilder, []), ɵmpd(4608, CommonUtils, CommonUtils, []), ɵmpd(4608, RuntimeStateService, RuntimeStateService, [CommonUtils]), ɵmpd(4608, IdService, IdService, []), ɵmpd(4608, DialogService, DialogService, []), ɵmpd(135680, GridComponent, GridComponent, [BrowserSupportService, SelectionService, ElementRef, GroupInfoService, GroupsService, ChangeNotificationService, DetailsService, EditService$1, FilterService, PDFService, ResponsiveService, Renderer2, ExcelService, NgZone, ScrollSyncService, DomEventsService, ColumnResizingService, ChangeDetectorRef, ColumnReorderService, ColumnInfoService, NavigationService, SortService, LocalizationService$1]), ɵmpd(4608, DateTimeHelperService, DateTimeHelperService, []), ɵmpd(4608, NumberHelperService, NumberHelperService, []), ɵmpd(4608, FarrisKendoGridFormatService, FarrisKendoGridFormatService, [DateTimeHelperService, NumberHelperService]), ɵmpd(4608, FarrisTreetableFormatService, FarrisTreetableFormatService, []), ɵmpd(4608, LocaleService, LocaleService, [LOCALE_ID, CommonUtils, [2, FARRIS_LOCAL_CUSTOM_DATA]]), ɵmpd(4608, AttentionService, AttentionService, [RendererFactory2, NgZone]), ɵmpd(4608, PositioningService, PositioningService, [RendererFactory2, PLATFORM_ID]), ɵmpd(4608, ComponentLoaderFactory, ComponentLoaderFactory, [ComponentFactoryResolver, NgZone, Injector, PositioningService, ApplicationRef]), ɵmpd(4608, BsModalService, BsModalService, [RendererFactory2, ComponentLoaderFactory, NgZone]), ɵmpd(4608, NotifyService, NotifyService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵmpd(4608, PaginationService$1, PaginationService$1, []), ɵmpd(4608, PopoverConfig, PopoverConfig, []), ɵmpd(4608, ColumnFormatService, ColumnFormatService, [DateTimeHelperService, NumberHelperService]), ɵmpd(4608, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, [DOCUMENT, PLATFORM_ID, ɵangular_packages_common_http_http_e]), ɵmpd(4608, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_h, [HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_f]), ɵmpd(5120, HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [ɵangular_packages_common_http_http_h]), ɵmpd(4608, LoadingService, LoadingService, [ApplicationRef, ComponentFactoryResolver, Injector]), ɵmpd(4608, ComboLocaleService, ComboLocaleService, [LocaleService]), ɵmpd(4608, FarrisContextMenuService, FarrisContextMenuService, [ComponentFactoryResolver, Injector]), ɵmpd(4608, TreetableService, TreetableService, []), ɵmpd(4608, ResizeService, ResizeService, []), ɵmpd(4608, TTHotkeys, TTHotkeys, [EventManager]), ɵmpd(4608, MessagerService, MessagerService, [BsModalService, Injector]), ɵmpd(4608, QuerySolutionService, QuerySolutionService, []), ɵmpd(4608, FilterService$1, FilterService$1, []), ɵmpd(4608, ConvertorService, ConvertorService, []), ɵmpd(4608, SolutionService, SolutionService, []), ɵmpd(4608, ErrorHandler, ɵt, []), ɵmpd(4608, ValidatorMessagerService, ValidatorMessagerService, []), ɵmpd(4608, SessionService, SessionService, []), ɵmpd(4608, SysCommonUtilService, SysCommonUtilService, [SessionService]), ɵmpd(4608, SysSecurityConfigService, SysSecurityConfigService, [HttpClient, SysCommonUtilService]), ɵmpd(4608, HelpFilterMap, HelpFilterMap, []), ɵmpd(4608, SysHelpService, SysHelpService, [HttpClient, SysCommonUtilService]), ɵmpd(4608, SysExceptionService, SysExceptionService, []), ɵmpd(4608, ɵf, ɵf, [HttpClient, SysCommonUtilService]), ɵmpd(4608, CookieService, CookieService, [DOCUMENT, PLATFORM_ID]), ɵmpd(4608, LanguageService$1, LanguageService$1, [CookieService]), ɵmpd(4608, SysLocaleService, SysLocaleService, [LanguageService$1]), ɵmpd(4608, PopupService, PopupService, [ApplicationRef, ComponentFactoryResolver, Injector, [2, POPUP_CONTAINER]]), ɵmpd(4608, ɵj, ɵj, []), ɵmpd(4608, ɵs, ɵs, []), ɵmpd(4608, ɵn, ɵn, []), ɵmpd(4608, ɵu, ɵu, []), ɵmpd(4608, ɵv, ɵv, [ɵu]), ɵmpd(4608, HttpService, HttpService, [HttpClient, SessionService]), ɵmpd(4608, ɵo, ɵo, []), ɵmpd(4608, ɵz, ɵz, []), ɵmpd(4608, ɵd, ɵd, [HttpService, HttpClient, ɵz]), ɵmpd(4608, ɵa$2, ɵa$2, [HttpService, HttpClient]), ɵmpd(4608, ɵy, ɵy, []), ɵmpd(4608, ɵa$1, ɵa$1, [HttpClient]), ɵmpd(4608, ɵb$1, ɵb$1, [HttpClient]), ɵmpd(4608, ɵc$1, ɵc$1, [HttpClient]), ɵmpd(4608, FrameworkVariableService, FrameworkVariableService, []), ɵmpd(4608, FrmI18nSettingService, FrmI18nSettingService, [FrameworkVariableService, LanguageService$1, HttpService]), ɵmpd(4608, AppService, AppService, [HttpService, SessionService, [2, FrmI18nSettingService]]), ɵmpd(4608, WindowContainerService, WindowContainerService, []), ɵmpd(4608, WindowService, WindowService, [ComponentFactoryResolver, WindowContainerService]), ɵmpd(4608, CloudprintService, CloudprintService, [ɵa$1, ComponentFactoryResolver, ɵb$1, ɵc$1, Injector, ApplicationRef, NotifyService, AppService, WindowService, BsModalService]), ɵmpd(4608, WfApprovalLogsService, WfApprovalLogsService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵmpd(4608, NgbDropdownConfig, NgbDropdownConfig, []), ɵmpd(4608, UiFlowchartService, UiFlowchartService, [HttpService]), ɵmpd(4608, WFFlowchartService, WFFlowchartService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵmpd(4608, TaskService, TaskService, [HttpService, MessagerService]), ɵmpd(4608, I18nService$2, I18nService$2, []), ɵmpd(4608, CacheStorageAbstract, CacheMemoryStorage, []), ɵmpd(4608, CacheService, CacheService, [[2, CacheStorageAbstract]]), ɵmpd(4608, FrmEventBus, FrmEventBus, []), ɵmpd(4608, FuncsService, FuncsService, [[2, FrameworkVariableService]]), ɵmpd(4608, FrameworkService, FrameworkService, [HttpService, Router, CacheService, SessionService, FrmEventBus, FuncsService, LoadingService$1, [2, AppService], [2, FrmI18nSettingService]]), ɵmpd(4608, WfTaskHandlerService, WfTaskHandlerService, [WfApprovalLogsService, WFFlowchartService, Injector, ComponentFactoryResolver, BsModalService, TaskService, NotifyService, I18nService$2, FrameworkService, ApplicationRef]), ɵmpd(4608, AppContextManager, AppContextManager, []), ɵmpd(135680, AppContext, AppContext, [[2, Injector], [2, AppContextManager], [3, AppContext]]), ɵmpd(4608, FormLoadingService, FormLoadingService, [LoadingService, [2, HideEventService], [2, AppContext]]), ɵmpd(4608, LanguageService, LanguageService, [[2, LOCALE_ID]]), ɵmpd(4608, FormMessageService, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵmpd(4608, FormNotifyService, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵmpd(4608, FormErrorService, FormErrorService, [FormMessageService, [2, LanguageService]]), ɵmpd(4608, WizardService, WizardService, []), ɵmpd(4608, FormWizardService, FormWizardService, [WizardService]), ɵmpd(4608, CheckService, CheckService, []), ɵmpd(4608, DataCheckService, DataCheckService, [FormMessageService, FormNotifyService, [2, LanguageService]]), ɵmpd(4608, FrameEventBus, FrameEventBus, []), ɵmpd(4608, EventService, EventService, [FrameEventBus]), ɵmpd(4608, ComponentManagerService, ComponentManagerService, []), ɵmpd(4608, FilterService$2, FilterService$2, []), ɵmpd(4608, KeybindingService, KeybindingService, []), ɵmpd(4608, QuerystringService, QuerystringService, []), ɵmpd(4608, RuntimeFrameworkService, RuntimeFrameworkService, []), ɵmpd(4608, ParamService, ParamService, [QuerystringService, RuntimeFrameworkService]), ɵmpd(4608, MenuStateService, MenuStateService, []), ɵmpd(4608, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵmpd(4608, NavigationService$2, NavigationService$2, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵmpd(4608, RouterParamService, RouterParamService, []), ɵmpd(4608, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵmpd(4608, ApplicationParamService, ApplicationParamService, [[2, ParamService], [2, RuntimeFrameworkService]]), ɵmpd(4608, FilterConditionService, FilterConditionService, []), ɵmpd(4608, UserSettingsToken, UserSettingsService, [Injector, [2, FrmI18nSettingService]]), ɵmpd(4608, VerifyDetailService, VerifyDetailService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵmpd(4608, IntlService, CldrIntlService, [LOCALE_ID]), ɵmpd(4608, DOMService, DOMService, []), ɵmpd(4608, CenturyViewService, CenturyViewService, []), ɵmpd(4608, DecadeViewService, DecadeViewService, []), ɵmpd(4608, MonthViewService, MonthViewService, [IntlService]), ɵmpd(4608, YearViewService, YearViewService, [IntlService]), ɵmpd(4608, WeekNamesService, WeekNamesService, [IntlService]), ɵmpd(135680, ResizeBatchService, ResizeBatchService, [NgZone]), ɵmpd(4608, NavigationService$3, NavigationService$3, [BusViewService]), ɵmpd(4608, DOMService$1, DOMService$1, []), ɵmpd(4608, HoursService, HoursService, [IntlService]), ɵmpd(4608, MinutesService, MinutesService, [IntlService]), ɵmpd(4608, SecondsService, SecondsService, [IntlService]), ɵmpd(4608, DayPeriodService, DayPeriodService, [IntlService]), ɵmpd(4608, NgbTooltipConfig, NgbTooltipConfig, []), ɵmpd(4608, TabService, TabService, [[2, TabConfig]]), ɵmpd(4608, UploadService, UploadService, [HttpService]), ɵmpd(4608, DownloadService, DownloadService, []), ɵmpd(4608, UploadDialogService, UploadDialogService, [BsModalService, ComponentFactoryResolver, Injector]), ɵmpd(4608, SolutionService$1, SolutionService$1, [NotifyService]), ɵmpd(4608, ConvertorService$1, ConvertorService$1, []), ɵmpd(4608, TaskCommentService, TaskCommentService, [HttpService]), ɵmpd(4608, TaskCommentUIState, TaskCommentUIState, []), ɵmpd(4608, TaskCommentViewModel, TaskCommentViewModel, [TaskCommentUIState, HttpService]), ɵmpd(4608, I18nService$3, I18nService$3, []), ɵmpd(4608, TaskCommentRepository, TaskCommentRepository, []), ɵmpd(4608, TaskService$1, TaskService$1, [HttpService]), ɵmpd(4608, UserService, UserService, [HttpClient, HttpService, SessionService]), ɵmpd(4608, I18nService$1, I18nService$1, []), ɵmpd(4608, WFSubmiteService, WFSubmiteService, [Injector, ComponentFactoryResolver, BsModalService, [2, I18nService$1]]), ɵmpd(4608, DialogContainerService, DialogContainerService, []), ɵmpd(4608, DialogService$2, DialogService$2, [ComponentFactoryResolver, DialogContainerService]), ɵmpd(4608, ɵe, ɵe, [HttpClient]), ɵmpd(4608, ConvertorService$2, ConvertorService$2, []), ɵmpd(4608, SolutionService$2, SolutionService$2, []), ɵmpd(4608, QuerySolutionService$1, QuerySolutionService$1, []), ɵmpd(135680, FarrisScrollSpyService, FarrisScrollSpyService, [NgZone]), ɵmpd(4608, DiscussionListService, DiscussionListService, []), ɵmpd(4608, FFileUploadAdaptUnifileConfigService, FFileUploadAdaptUnifileConfigService, [[2, FFileUploadAdaptUnifileConfigToken]]), ɵmpd(4608, UploadServerService, FfileuploadAdaptUnifileService, [UploadService, FFileUploadAdaptUnifileConfigService]), ɵmpd(4608, FFileUploaderService, FFileUploaderService, [[2, UploadServerService]]), ɵmpd(4608, FileViewerService, FileViewerService, [BsModalService, ComponentFactoryResolver, Injector, ɵa$2, MessagerService, CloudprintService, AppService]), ɵmpd(4608, FfilepreviewAdaptUnifileService, FfilepreviewAdaptUnifileService, [FileViewerService, FFileUploadAdaptUnifileConfigService, [2, DownloadService]]), ɵmpd(4608, EditorService, EditorService, []), ɵmpd(4608, I18nService, I18nService, [[2, LOCALE_ID]]), ɵmpd(4608, FEScrollCollapsibleAreaService, FEScrollCollapsibleAreaService, []), ɵmpd(4608, ɵc$2, ɵc$2, []), ɵmpd(4608, ɵb$2, ɵb$2, [ɵc$2, HttpClient]), ɵmpd(4608, ColorPickerService, ColorPickerService, []), ɵmpd(4608, RtfUIWebapiService, RtfUIWebapiService, []), ɵmpd(4608, RtfAppService, RtfAppService, [RtfUIWebapiService, HttpClient]), ɵmpd(4608, I18NresourceService, I18NresourceService, [RtfAppService]), ɵmpd(4608, ɵm, ɵm, []), ɵmpd(4608, ComboService, ComboService, [HttpClient, LoadingService, Injector]), ɵmpd(4608, ExpressionEventService, ExpressionEventService, []), ɵmpd(4608, RestfulService, RestfulService, [HttpClient]), ɵmpd(5120, "serverHost", ɵ2$2, []), ɵmpd(4608, ParasMappingManagerService, ParasMappingManagerService, [RestfulService, SessionService, "serverHost"]), ɵmpd(4608, ParasMappingService, ParasMappingService, [ParasMappingManagerService]), ɵmpd(4608, JointSearchManagerService, JointSearchManagerService, [RestfulService, SessionService, "serverHost"]), ɵmpd(4608, LcpService, LcpService, [RestfulService, SessionService, [2, "serverHost"], [2, "loadDataUri"], [2, "loadDataCol"]]), ɵmpd(4608, JointSearchService, JointSearchService, [JointSearchManagerService, LcpService]), ɵmpd(4608, SchemaManagerService, SchemaManagerService, [RestfulService, SessionService, "serverHost", [2, SchemaRenderExtendService]]), ɵmpd(4608, SchemaService, SchemaService, [SchemaManagerService, LcpService]), ɵmpd(4608, PrintIntegrationManagerService, PrintIntegrationManagerService, [RestfulService, SessionService, "serverHost"]), ɵmpd(4608, PrintIntegrationService, PrintIntegrationService, [PrintIntegrationManagerService]), ɵmpd(4608, ExpressionService$1, ExpressionService$1, [Injector, ApplicationRef, ComponentFactoryResolver, HttpClient]), ɵmpd(135680, FDropdownDirective, FDropdownDirective, [ElementRef, Renderer2]), ɵmpd(4608, FilterService$3, FilterService$3, [Injector, ApplicationRef, ComponentFactoryResolver, HttpClient]), ɵmpd(4608, FilterManagerService, FilterManagerService, [RestfulService, SessionService, "serverHost"]), ɵmpd(4608, ConditionSchemaService, ConditionSchemaService, [RestfulService, SessionService, "serverHost", [2, Injector]]), ɵmpd(4608, ɵb$3, ɵb$3, []), ɵmpd(4608, GRID_SETTINGS_SERVICE, DatagridSettingsService, [Injector, BsModalService, MessagerService, IdService, LocaleService]), ɵmpd(4608, WindowVariableService, WindowVariableService, []), ɵmpd(4608, TabEntityService, TabEntityService, []), ɵmpd(4608, FEPageModalService, FEPageModalService, [RendererFactory2, [2, ComponentLoaderFactory], Injector, NgZone]), ɵmpd(4608, RenderService, RenderService, [SchemaManagerService, LcpService, CacheService, LoadingService, MessagerService, [2, DataRenderExtendService], [2, Injector]]), ɵmpd(4608, EventBus, EventBus, []), ɵmpd(4608, Subscription, Subscription, []), ɵmpd(4608, RestfulService$1, RestfulService$1, [HttpClient]), ɵmpd(5120, VARIABLE_PARSERS, function () { return [new FrameIdVariableParser(), new ɵa$3(), new EventParamVariableParser(), new DataVariableParser(), new UIStateVariableParser(), new StateMachineVariableParser(), new CommandVariableParser()]; }, []), ɵmpd(4608, VariableParseService, VariableParseService, [VARIABLE_PARSERS]), ɵmpd(4608, FinishLoadService, FinishLoadService, []), ɵmpd(5120, BE_SERVER_URI_TOKEN, ɵ3$2, []), ɵmpd(1073742336, CommonModule, CommonModule, []), ɵmpd(1073742336, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bc, []), ɵmpd(1073742336, FormsModule, FormsModule, []), ɵmpd(1073742336, ReactiveFormsModule, ReactiveFormsModule, []), ɵmpd(1073742336, PanelBarModule, PanelBarModule, []), ɵmpd(1073742336, SplitterModule$1, SplitterModule$1, []), ɵmpd(1073742336, TabStripModule, TabStripModule, []), ɵmpd(1073742336, LayoutModule, LayoutModule, []), ɵmpd(1073742336, FarrisCommonModule, FarrisCommonModule, []), ɵmpd(1073742336, KendoBindingModule, KendoBindingModule, []), ɵmpd(1073742336, FlexLayoutModule, FlexLayoutModule, []), ɵmpd(1073742336, LocaleModule, LocaleModule, []), ɵmpd(1073742336, LoadingModule, LoadingModule, []), ɵmpd(1073742336, PerfectScrollbarModule, PerfectScrollbarModule, []), ɵmpd(1073742336, AngularDraggableModule, AngularDraggableModule, []), ɵmpd(1073742336, FAreaResponseModule, FAreaResponseModule, []), ɵmpd(1073742336, FarrisTooltipModule, FarrisTooltipModule, []), ɵmpd(1073742336, ModalModule, ModalModule, []), ɵmpd(1073742336, MessagerModule, MessagerModule, []), ɵmpd(1073742336, NotifyModule, NotifyModule, []), ɵmpd(1073742336, PaginationModule, PaginationModule, []), ɵmpd(1073742336, PopoverModule, PopoverModule, []), ɵmpd(1073742336, InputGroupModule, InputGroupModule, []), ɵmpd(1073742336, DateHelperModule, DateHelperModule, []), ɵmpd(1073742336, NumberHelperModule, NumberHelperModule, []), ɵmpd(1073742336, DataColumnModule, DataColumnModule, []), ɵmpd(1073742336, DataTableModule, DataTableModule, []), ɵmpd(1073742336, FarrisDialogModule, FarrisDialogModule, []), ɵmpd(1073742336, HttpClientXsrfModule, HttpClientXsrfModule, []), ɵmpd(1073742336, HttpClientModule, HttpClientModule, []), ɵmpd(1073742336, DatalistModule, DatalistModule, []), ɵmpd(1073742336, ComboListModule, ComboListModule, []), ɵmpd(1073742336, LayoutModule$1, LayoutModule$1, []), ɵmpd(1073742336, FarrisContextMenuModule, FarrisContextMenuModule, []), ɵmpd(1073742336, TreeTableModule, TreeTableModule, []), ɵmpd(1073742336, LookupModule, LookupModule, []), ɵmpd(1073742336, NgxPaginationModule, NgxPaginationModule, []), ɵmpd(1073742336, ScrollbarModule, ScrollbarModule, []), ɵmpd(1073742336, TimePickerModule, TimePickerModule, []), ɵmpd(1073742336, FarrisDatePickerModule, FarrisDatePickerModule, []), ɵmpd(1073742336, FarrisFormsModule, FarrisFormsModule, []), ɵmpd(1073742336, NumberSpinnerModule, NumberSpinnerModule, []), ɵmpd(1073742336, SwitchModule, SwitchModule, []), ɵmpd(1073742336, FilterConditionModule, FilterConditionModule, []), ɵmpd(1073742336, FilterPanelModule, FilterPanelModule, []), ɵmpd(1073742336, FarrisSidebarModule, FarrisSidebarModule, []), ɵmpd(1073742336, SimpleFilterModule, SimpleFilterModule, []), ɵmpd(1073742336, DatagridSmartFilterModule, DatagridSmartFilterModule, []), ɵmpd(1073742336, DatagridModule, DatagridModule, []), ɵmpd(1073742336, SysCommonModule, SysCommonModule, []), ɵmpd(1073742336, SysManagerUIModule, SysManagerUIModule, []), ɵmpd(1073742336, ButtonModule, ButtonModule, []), ɵmpd(1073742336, ButtonGroupModule, ButtonGroupModule, []), ɵmpd(1073742336, PopupModule, PopupModule, []), ɵmpd(1073742336, ListModule, ListModule, []), ɵmpd(1073742336, SplitButtonModule, SplitButtonModule, []), ɵmpd(1073742336, DropDownButtonModule, DropDownButtonModule, []), ɵmpd(1073742336, ButtonsModule, ButtonsModule, []), ɵmpd(1073742336, ɵf$1, ɵf$1, []), ɵmpd(1073742336, ɵh, ɵh, []), ɵmpd(1073742336, ɵbe, ɵbe, []), ɵmpd(1073742336, ɵg, ɵg, []), ɵmpd(1073742336, ɵt$1, ɵt$1, []), ɵmpd(1073742336, ɵbg, ɵbg, []), ɵmpd(1073742336, ɵbh, ɵbh, []), ɵmpd(1073742336, FileListModule, FileListModule, []), ɵmpd(1073742336, WfApprovalLogsModule, WfApprovalLogsModule, []), ɵmpd(1073742336, NgbDropdownModule, NgbDropdownModule, []), ɵmpd(1073742336, FarrisSectionModule, FarrisSectionModule, []), ɵmpd(1073742336, FDropdownDirectiveTypeModule, FDropdownDirectiveTypeModule, []), ɵmpd(1073742336, UiFlowchartModule, UiFlowchartModule, []), ɵmpd(1073742336, RouterModule, RouterModule, [[2, ɵangular_packages_router_router_a], [2, Router]]), ɵmpd(1073742336, CommonSharedModule, CommonSharedModule, []), ɵmpd(1073742336, TaskImplApiModule, TaskImplApiModule, []), ɵmpd(1073742336, WfSignModule, WfSignModule, []), ɵmpd(1073742336, AvatarModule, AvatarModule, []), ɵmpd(1073742336, ComboLookupModule, ComboLookupModule, []), ɵmpd(1073742336, LanguageTextboxModule, LanguageTextboxModule, []), ɵmpd(1073742336, EnumEditorModule, EnumEditorModule, []), ɵmpd(1073742336, FilterModule, FilterModule, []), ɵmpd(1073742336, SorterModule, SorterModule, []), ɵmpd(1073742336, DatagridEditorsModule, DatagridEditorsModule, []), ɵmpd(1073742336, WfTaskHandlerModule, WfTaskHandlerModule, []), ɵmpd(512, WorkFlowMessageService, WorkFlowMessageService, []), ɵmpd(512, WorkFlowMessage, WorkFlowMessage, [Injector, WorkFlowMessageService]), ɵmpd(1073742336, CommandServicesModule, CommandServicesModule, [WorkFlowMessage]), ɵmpd(1073742336, FResponseToolbarModule, FResponseToolbarModule, []), ɵmpd(1073742336, FormMessageModule, FormMessageModule, []), ɵmpd(1073742336, TranslateModule, TranslateModule, []), ɵmpd(1073742336, VerifyDetailModule, VerifyDetailModule, []), ɵmpd(1073742336, SharedModule, SharedModule, []), ɵmpd(1073742336, DragAndDropModule, DragAndDropModule, []), ɵmpd(1073742336, GroupModule, GroupModule, []), ɵmpd(1073742336, EventsModule, EventsModule, []), ɵmpd(1073742336, NumericTextBoxModule, NumericTextBoxModule, []), ɵmpd(1073742336, IntlModule, IntlModule, []), ɵmpd(1073742336, EventsModule$1, EventsModule$1, []), ɵmpd(1073742336, DateInputModule, DateInputModule, []), ɵmpd(1073742336, CalendarCommonModule, CalendarCommonModule, []), ɵmpd(1073742336, TemplatesModule, TemplatesModule, []), ɵmpd(1073742336, VirtualizationModule, VirtualizationModule, []), ɵmpd(1073742336, CalendarModule$1, CalendarModule$1, []), ɵmpd(1073742336, DatePickerModule, DatePickerModule, []), ɵmpd(1073742336, BodyModule, BodyModule, []), ɵmpd(1073742336, ResizeSensorModule, ResizeSensorModule, []), ɵmpd(1073742336, SharedDirectivesModule, SharedDirectivesModule, []), ɵmpd(1073742336, SharedModule$1, SharedModule$1, []), ɵmpd(1073742336, DropDownListModule, DropDownListModule, []), ɵmpd(1073742336, AutoCompleteModule, AutoCompleteModule, []), ɵmpd(1073742336, TextBoxModule, TextBoxModule, []), ɵmpd(1073742336, DraggableModule, DraggableModule, []), ɵmpd(1073742336, SliderModule, SliderModule, []), ɵmpd(1073742336, SwitchModule$1, SwitchModule$1, []), ɵmpd(1073742336, MaskedTextBoxModule, MaskedTextBoxModule, []), ɵmpd(1073742336, InputsModule, InputsModule, []), ɵmpd(1073742336, SharedFilterModule, SharedFilterModule, []), ɵmpd(1073742336, RowFilterModule, RowFilterModule, []), ɵmpd(1073742336, FilterMenuModule, FilterMenuModule, []), ɵmpd(1073742336, ColumnMenuModule, ColumnMenuModule, []), ɵmpd(1073742336, HeaderModule, HeaderModule, []), ɵmpd(1073742336, FooterModule, FooterModule, []), ɵmpd(1073742336, PagerModule, PagerModule, []), ɵmpd(1073742336, GridModule, GridModule, []), ɵmpd(1073742336, MultiViewCalendarModule, MultiViewCalendarModule, []), ɵmpd(1073742336, CalendarsModule, CalendarsModule, []), ɵmpd(1073742336, TimePickerModule$1, TimePickerModule$1, []), ɵmpd(1073742336, DateRangeModule, DateRangeModule, []), ɵmpd(1073742336, DateInputsModule, DateInputsModule, []), ɵmpd(1073742336, ComboBoxModule, ComboBoxModule, []), ɵmpd(1073742336, MultiSelectModule$1, MultiSelectModule$1, []), ɵmpd(1073742336, DropDownsModule, DropDownsModule, []), ɵmpd(1073742336, NgbTooltipModule, NgbTooltipModule, []), ɵmpd(1073742336, FarrisTabsModule, FarrisTabsModule, []), ɵmpd(1073742336, FarrisTagModule, FarrisTagModule, []), ɵmpd(1073742336, ProgressModule, ProgressModule, []), ɵmpd(1073742336, UploadModule, UploadModule, []), ɵmpd(1073742336, UploadDialogMoudle, UploadDialogMoudle, []), ɵmpd(1073742336, FieldGroupModule, FieldGroupModule, []), ɵmpd(1073742336, FarrisTimeSpinnerModule, FarrisTimeSpinnerModule, []), ɵmpd(1073742336, ProgressStepModule, ProgressStepModule, []), ɵmpd(1073742336, WizardModule, WizardModule, []), ɵmpd(1073742336, MultiSelectModule, MultiSelectModule, []), ɵmpd(1073742336, QueryConditionModule, QueryConditionModule, []), ɵmpd(1073742336, QuerySolutionModule, QuerySolutionModule, []), ɵmpd(1073742336, FarrisButtonModule, FarrisButtonModule, []), ɵmpd(1073742336, ListViewModule, ListViewModule, []), ɵmpd(1073742336, SplitterModule, SplitterModule, []), ɵmpd(1073742336, ListNavModule, ListNavModule, []), ɵmpd(1073742336, TextModule, TextModule, []), ɵmpd(1073742336, WFCommentModule, WFCommentModule, []), ɵmpd(1073742336, WFRuntimeModule, WFRuntimeModule, []), ɵmpd(1073742336, SharedModule$3, SharedModule$3, []), ɵmpd(1073742336, WindowModule, WindowModule, []), ɵmpd(1073742336, DialogModule, DialogModule, []), ɵmpd(1073742336, CloudPrintModule, CloudPrintModule, []), ɵmpd(1073742336, FarrisHtmlEditorModule, FarrisHtmlEditorModule, []), ɵmpd(1073742336, ViewChangeModule, ViewChangeModule, []), ɵmpd(1073742336, ListFilterModule, ListFilterModule, []), ɵmpd(1073742336, CalendarModule, CalendarModule, []), ɵmpd(1073742336, ScrollspyModule, ScrollspyModule, []), ɵmpd(1073742336, DynamicControlGroupModule, DynamicControlGroupModule, []), ɵmpd(1073742336, FarrisFooterModule, FarrisFooterModule, []), ɵmpd(1073742336, BatchEditDialogModule, BatchEditDialogModule, []), ɵmpd(1073742336, TreeModule, TreeModule, []), ɵmpd(1073742336, DiscussionGroupModule, DiscussionGroupModule, []), ɵmpd(1073742336, NavModule, NavModule, []), ɵmpd(1073742336, TagsModule, TagsModule, []), ɵmpd(1073742336, FFileUploadModule, FFileUploadModule, []), ɵmpd(1073742336, FfileuploadAdaptUnifileModule, FfileuploadAdaptUnifileModule, []), ɵmpd(1073742336, DatagridFilterRowModule, DatagridFilterRowModule, []), ɵmpd(1073742336, OrganizationSelectorModule, OrganizationSelectorModule, []), ɵmpd(1073742336, DatagridSettingsModule, DatagridSettingsModule, []), ɵmpd(1073742336, EditorModule, EditorModule, []), ɵmpd(1073742336, FrmCommonModule, FrmCommonModule, []), ɵmpd(1073742336, FEHeaderFooterModule, FEHeaderFooterModule, []), ɵmpd(1073742336, FEPageModalModule, FEPageModalModule, []), ɵmpd(1073742336, FeatureEditorModule, FeatureEditorModule, []), ɵmpd(1073742336, FEScrollCollapsibleAreaModule, FEScrollCollapsibleAreaModule, []), ɵmpd(1073742336, QdpCommonModule, QdpCommonModule, []), ɵmpd(1073742336, CheckBoxModule, CheckBoxModule, []), ɵmpd(1073742336, SharedModule$2, SharedModule$2, []), ɵmpd(1073742336, TreeViewModule, TreeViewModule, []), ɵmpd(1073742336, RtfAppHelpModule$1, RtfAppHelpModule$1, []), ɵmpd(1073742336, ColorPickerModule, ColorPickerModule, []), ɵmpd(1073742336, RtfAppHelpModule, RtfAppHelpModule, []), ɵmpd(1073742336, ɵj$1, ɵj$1, []), ɵmpd(1073742336, DialogsModule, DialogsModule, []), ɵmpd(1073742336, ExpressionModule, ExpressionModule, []), ɵmpd(1073742336, FarrisPanelModule, FarrisPanelModule, []), ɵmpd(1073742336, IdeCmpModule, IdeCmpModule, []), ɵmpd(1073742336, FilterConditionModule$1, FilterConditionModule$1, []), ɵmpd(1073742336, QueryFrameworkModule, QueryFrameworkModule, []), ɵmpd(1073742336, DndListModule, DndListModule, []), ɵmpd(1073742336, SpreadModule, SpreadModule, []), ɵmpd(1073742336, EchartsModule, EchartsModule, []), ɵmpd(1073742336, ConditionSchemaModule, ConditionSchemaModule, []), ɵmpd(1073742336, PurchaseOrderDetailRoutingModule, PurchaseOrderDetailRoutingModule, []), ɵmpd(512, TranslateStore, TranslateStore, []), ɵmpd(512, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_d, []), ɵmpd(2048, XhrFactory, null, [ɵangular_packages_common_http_http_d]), ɵmpd(512, HttpXhrBackend, HttpXhrBackend, [XhrFactory]), ɵmpd(2048, HttpBackend, null, [HttpXhrBackend]), ɵmpd(512, HttpHandler, ɵHttpInterceptingHandler, [HttpBackend, Injector]), ɵmpd(512, HttpClient, HttpClient, [HttpHandler]), ɵmpd(1024, TranslateLoader, ɵ0$3, [HttpClient]), ɵmpd(512, TranslateCompiler, TranslateFakeCompiler, []), ɵmpd(512, TranslateParser, TranslateDefaultParser, []), ɵmpd(512, MissingTranslationHandler, JitMissingTranslationHandler, []), ɵmpd(256, USE_DEFAULT_LANG, undefined, []), ɵmpd(256, USE_STORE, undefined, []), ɵmpd(512, TranslateService, TranslateService, [TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler, USE_DEFAULT_LANG, USE_STORE]), ɵmpd(512, TranslateResolveService, TranslateResolveService, [TranslateService, HttpClient]), ɵmpd(1073742336, PurchaseOrderDetailModule, PurchaseOrderDetailModule, [TranslateResolveService]), ɵmpd(256, LOCALE_ID, ɵ1$2, []), ɵmpd(256, FARRIS_LOCAL_CUSTOM_DATA, {}, []), ɵmpd(256, ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), ɵmpd(256, ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), ɵmpd(256, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, []), ɵmpd(256, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, []), ɵmpd(256, SWITCH_OPTIONS, {}, []), ɵmpd(256, SCROLLBAR_CONFIG, { minScrollbarLength: 20 }, []), ɵmpd(1024, GRID_EDITORS, function () { return [{ name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$4 }, { name: "input-group", value: ɵc$3 }, { name: "select", value: ɵd$1 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$2 }, { name: "combolist", value: ɵg$1 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$2 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }, { name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$4 }, { name: "input-group", value: ɵc$3 }, { name: "select", value: ɵd$1 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$2 }, { name: "combolist", value: ɵg$1 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$2 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }, { name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$4 }, { name: "input-group", value: ɵc$3 }, { name: "select", value: ɵd$1 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$2 }, { name: "combolist", value: ɵg$1 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$2 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }, { name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$4 }, { name: "input-group", value: ɵc$3 }, { name: "select", value: ɵd$1 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$2 }, { name: "combolist", value: ɵg$1 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$2 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }]; }, []), ɵmpd(256, TOUCH_ENABLED, touchEnabled, []), ɵmpd(256, TOUCH_ENABLED$1, touchEnabled$1, []), ɵmpd(256, ɵb$5, { modules: defaultModules }, []), ɵmpd(256, FFileUploadAPIServiceToken, null, []), ɵmpd(256, ɵn$1, { baseUrl: "assets", defaultOptions: { scrollBeyondLastLine: false } }, []), ɵmpd(256, GRID_FILTER_ROW, FilterRowComponent, []), ɵmpd(1024, ROUTES, function () { return [[{ path: "", component: RootComponent, children: [], resolve: { "translate": TranslateResolveService } }]]; }, []), ɵmpd(256, TINYMCE_SCRIPT_SRC, "/platform/common/web/assets/tinymce/tinymce.min.js", []), ɵmpd(256, FORM_PATH_TOKEN, "/apps/scm/cm/web/bo-purchaseorder-front/purchaseorderdetail/", [])]); }));

        }
    };
});
