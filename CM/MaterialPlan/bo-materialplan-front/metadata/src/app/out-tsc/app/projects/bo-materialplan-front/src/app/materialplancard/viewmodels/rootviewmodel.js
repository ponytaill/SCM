import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var ɵ0 = { type: 'string' }, ɵ1 = { type: 'string' }, ɵ2 = { type: 'string' }, ɵ3 = { type: 'string' };
var RootViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(RootViewmodel, _super);
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
    tslib_1.__decorate([
        NgCommand({
            name: 'Load1',
            params: {
                action: '{UISTATE~/root-component/action}'
            },
            paramDescriptions: {
                action: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Load1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'LoadAndAdd1',
            params: {
                transitionAction: 'Create'
            },
            paramDescriptions: {
                transitionAction: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "LoadAndAdd1", null);
    tslib_1.__decorate([
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
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "LoadAndView1", null);
    tslib_1.__decorate([
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
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "LoadAndEdit1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Add1',
            params: {
                transitionAction: 'Create'
            },
            paramDescriptions: {
                transitionAction: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Add1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Edit1',
            params: {
                transitionAction: 'Edit'
            },
            paramDescriptions: {
                transitionAction: { type: '' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Edit1", null);
    tslib_1.__decorate([
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
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Save1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Cancel1',
            params: {
                transitionAction: 'Cancel'
            },
            paramDescriptions: {
                transitionAction: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Cancel1", null);
    tslib_1.__decorate([
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
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "ChangeItem1", null);
    tslib_1.__decorate([
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
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "ChangeItem2", null);
    tslib_1.__decorate([
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
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "dataImport1", null);
    tslib_1.__decorate([
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
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "dataExport1", null);
    tslib_1.__decorate([
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
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "listDataExport1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootviewmodelgetMinDate1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "rootviewmodelgetMinDate1", null);
    tslib_1.__decorate([
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
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "rootviewmodelDataExport1", null);
    tslib_1.__decorate([
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
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "rootviewmodelDataExport2", null);
    tslib_1.__decorate([
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
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "rootviewmodelDataImport1", null);
    RootViewmodel = tslib_1.__decorate([
        Injectable()
    ], RootViewmodel);
    return RootViewmodel;
}(ViewModel));
export { RootViewmodel };
export { ɵ0, ɵ1, ɵ2, ɵ3 };
