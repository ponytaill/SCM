import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var ɵ0 = { type: 'string' }, ɵ1 = { type: 'any' }, ɵ2 = { type: 'any' };
var RootViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(RootViewmodel, _super);
    function RootViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/';
        _this.dom = {};
        _this.childViewModels = {
            'DataGridComponentViewmodel': 'dataGridComponentViewmodel'
        };
        return _this;
    }
    RootViewmodel.prototype.Load1 = function (commandParam) { return; };
    RootViewmodel.prototype.Search1 = function (commandParam) { return; };
    RootViewmodel.prototype.RemoveRows1 = function (commandParam) { return; };
    RootViewmodel.prototype.Add1 = function (commandParam) { return; };
    RootViewmodel.prototype.View1 = function (commandParam) { return; };
    RootViewmodel.prototype.Edit1 = function (commandParam) { return; };
    RootViewmodel.prototype.Remove1 = function (commandParam) { return; };
    RootViewmodel.prototype.Filter1 = function (commandParam) { return; };
    RootViewmodel.prototype.rootviewmodelchangeLog1 = function (commandParam) { return; };
    RootViewmodel.prototype.rootviewmodelprintSingle1 = function (commandParam) { return; };
    RootViewmodel.prototype.rootviewmodelsendGoods1 = function (commandParam) { return; };
    RootViewmodel.prototype.rootviewmodelsendGoods2 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'Load1',
            params: {
                filter: '',
                sort: ''
            },
            paramDescriptions: {
                filter: { type: 'string' },
                sort: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Load1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Search1',
            params: {
                filter: '',
                sort: '',
                pageSize: '',
                pageIndex: '',
                specialFilterValues: ''
            },
            paramDescriptions: {
                filter: { type: 'string' },
                sort: { type: 'string' },
                pageSize: { type: 'int' },
                pageIndex: { type: 'int' },
                specialFilterValues: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Search1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'RemoveRows1',
            params: {
                ids: '{UISTATE~/data-grid-component/ids}',
                refreshCommandName: '',
                refreshCommandFrameId: '',
                successMsg: ''
            },
            paramDescriptions: {
                ids: { type: 'decimal' },
                refreshCommandName: { type: 'string' },
                refreshCommandFrameId: { type: 'string' },
                successMsg: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "RemoveRows1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Add1',
            params: {
                url: 'b343c796-589b-4722-bf12-34dab0a29f5b',
                params: '{"action":"LoadAndAdd1"}',
                enableRefresh: '',
                tabName: '',
                destructuring: ''
            },
            paramDescriptions: {
                url: { type: 'string' },
                params: { type: 'string' },
                enableRefresh: { type: 'string' },
                tabName: { type: 'string' },
                destructuring: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Add1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'View1',
            params: {
                url: 'b343c796-589b-4722-bf12-34dab0a29f5b',
                params: '{"action":"LoadAndView1", "id":"{DATA~/data-grid-component/id}"}',
                idToView: '{DATA~/data-grid-component/id}',
                enableRefresh: '',
                tabName: '',
                destructuring: ''
            },
            paramDescriptions: {
                url: { type: 'string' },
                params: { type: 'string' },
                idToView: { type: 'string' },
                enableRefresh: { type: 'string' },
                tabName: { type: 'string' },
                destructuring: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "View1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Edit1',
            params: {
                url: 'b343c796-589b-4722-bf12-34dab0a29f5b',
                params: '{"action":"LoadAndEdit1", "id":"{DATA~/data-grid-component/id}"}',
                idToEdit: '{DATA~/data-grid-component/id}',
                enableRefresh: '',
                tabName: '',
                destructuring: ''
            },
            paramDescriptions: {
                url: { type: 'string' },
                params: { type: 'string' },
                idToEdit: { type: 'string' },
                enableRefresh: { type: 'string' },
                tabName: { type: 'string' },
                destructuring: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Edit1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Remove1',
            params: {
                id: '{DATA~/data-grid-component/id}',
                refreshCommandName: '',
                refreshCommandFrameId: '',
                successMsg: ''
            },
            paramDescriptions: {
                id: ɵ0,
                refreshCommandName: { type: 'string' },
                refreshCommandFrameId: { type: 'string' },
                successMsg: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Remove1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Filter1',
            params: {
                filter: '{UISTATE~/root-component/originalFilterConditionList}',
                sort: ''
            },
            paramDescriptions: {
                filter: { type: 'string' },
                sort: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Filter1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootviewmodelchangeLog1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "rootviewmodelchangeLog1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootviewmodelprintSingle1',
            params: {
                beMetaId: '385d8182-1b4a-4c7d-9d7f-2fe1ca5283ab',
                bizBillId: '{UISTATE~/data-grid-component/ids}'
            },
            paramDescriptions: {
                beMetaId: { type: 'string' },
                bizBillId: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "rootviewmodelprintSingle1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootviewmodelsendGoods1',
            params: {
                id: '',
                IsFinished: '',
                loadCmdName: '',
                loadCmdFrameId: ''
            },
            paramDescriptions: {
                id: ɵ1,
                IsFinished: { type: 'any' },
                loadCmdName: { type: 'string' },
                loadCmdFrameId: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "rootviewmodelsendGoods1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootviewmodelsendGoods2',
            params: {
                id: '{DATA~/data-grid-component/id}',
                IsFinished: 'yes',
                loadCmdName: 'Load1',
                loadCmdFrameId: '#{root-component}'
            },
            paramDescriptions: {
                id: ɵ2,
                IsFinished: { type: 'any' },
                loadCmdName: { type: 'string' },
                loadCmdFrameId: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "rootviewmodelsendGoods2", null);
    RootViewmodel = tslib_1.__decorate([
        Injectable()
    ], RootViewmodel);
    return RootViewmodel;
}(ViewModel));
export { RootViewmodel };
export { ɵ0, ɵ1, ɵ2 };
