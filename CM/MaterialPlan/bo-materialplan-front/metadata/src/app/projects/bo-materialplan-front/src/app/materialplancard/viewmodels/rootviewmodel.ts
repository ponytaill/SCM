
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

import { BasicFormViewmodel } from './basicformviewmodel';

import { PlandetailsComponentViewmodel } from './plandetailscomponentviewmodel';

@Injectable()
export class RootViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    public childViewModels = {
        'BasicFormViewmodel' : 'basicFormViewmodel',
        'PlandetailsComponentViewmodel' : 'plandetailsComponentViewmodel'
    }
    public basicFormViewmodel: BasicFormViewmodel;
    public plandetailsComponentViewmodel: PlandetailsComponentViewmodel;
    @NgCommand({
        name: 'Load1',
        params: {
            action: '{UISTATE~/root-component/action}'
        },
        paramDescriptions: {
            action: { type: 'string' }
        }
    })
    public Load1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'LoadAndAdd1',
        params: {
            transitionAction: 'Create'
        },
        paramDescriptions: {
            transitionAction: { type: 'string' }
        }
    })
    public LoadAndAdd1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'LoadAndView1',
        params: {
            id: '{UISTATE~/root-component/id}',
            transitionAction: 'Cancel',
            transitionActionParamName: ''
        },
        paramDescriptions: {
            id: { type: 'string' },
            transitionAction: { type: 'string' },
            transitionActionParamName: { type: 'string' }
        }
    })
    public LoadAndView1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'LoadAndEdit1',
        params: {
            id: '{UISTATE~/root-component/id}',
            transitionAction: 'Edit',
            transitionActionParamName: ''
        },
        paramDescriptions: {
            id: { type: 'string' },
            transitionAction: { type: 'string' },
            transitionActionParamName: { type: 'string' }
        }
    })
    public LoadAndEdit1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Add1',
        params: {
            transitionAction: 'Create'
        },
        paramDescriptions: {
            transitionAction: { type: 'string' }
        }
    })
    public Add1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Edit1',
        params: {
            transitionAction: 'Edit'
        },
        paramDescriptions: {
            transitionAction: { type: '' }
        }
    })
    public Edit1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Save1',
        params: {
            transitionAction: 'Cancel',
            successMsg: ''
        },
        paramDescriptions: {
            transitionAction: { type: 'string' },
            successMsg: { type: '' }
        }
    })
    public Save1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Cancel1',
        params: {
            transitionAction: 'Cancel'
        },
        paramDescriptions: {
            transitionAction: { type: 'string' }
        }
    })
    public Cancel1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'ChangeItem1',
        params: {
            id: '{DATA~/root-component/id}',
            type: 'prev',
            parentId: '{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}',
            transitionAction: 'Cancel'
        },
        paramDescriptions: {
            id: { type: 'string' },
            type: { type: 'string' },
            transitionAction: { type: 'string' }
        }
    })
    public ChangeItem1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'ChangeItem2',
        params: {
            id: '{DATA~/root-component/id}',
            type: 'next',
            parentId: '{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}',
            transitionAction: 'Cancel'
        },
        paramDescriptions: {
            id: { type: 'string' },
            type: { type: 'string' },
            transitionAction: { type: 'string' }
        }
    })
    public ChangeItem2(commandParam?: any): Observable<any> { return; }

    @NgCommand({
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
    })
    public dataImport1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
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
    })
    public dataExport1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'listDataExport1',
        params: {
            ruleID: '',
            option: ''
        },
        paramDescriptions: {
            ruleID: { type: 'string' },
            option: { type: 'string' }
        }
    })
    public listDataExport1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelgetMinDate1',
        params: {
        }
    })
    public rootviewmodelgetMinDate1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
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
    })
    public rootviewmodelDataExport1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
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
    })
    public rootviewmodelDataExport2(commandParam?: any): Observable<any> { return; }

    @NgCommand({
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
    })
    public rootviewmodelDataImport1(commandParam?: any): Observable<any> { return; }

}