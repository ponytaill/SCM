
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

import { DataGridComponentViewmodel } from './datagridcomponentviewmodel';

@Injectable()
export class RootViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    public childViewModels = {
        'DataGridComponentViewmodel' : 'dataGridComponentViewmodel'
    }
    public dataGridComponentViewmodel: DataGridComponentViewmodel;
    @NgCommand({
        name: 'Load1',
        params: {
            filter: '',
            sort: ''
        },
        paramDescriptions: {
            filter: { type: 'string' },
            sort: { type: 'string' }
        }
    })
    public Load1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
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
    })
    public Search1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
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
    })
    public RemoveRows1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
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
    })
    public Add1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
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
    })
    public View1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
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
    })
    public Edit1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Remove1',
        params: {
            id: '{DATA~/data-grid-component/id}',
            refreshCommandName: '',
            refreshCommandFrameId: '',
            successMsg: ''
        },
        paramDescriptions: {
            id: { type: 'string' },
            refreshCommandName: { type: 'string' },
            refreshCommandFrameId: { type: 'string' },
            successMsg: { type: 'string' }
        }
    })
    public Remove1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Filter1',
        params: {
            filter: '{UISTATE~/root-component/originalFilterConditionList}',
            sort: ''
        },
        paramDescriptions: {
            filter: { type: 'string' },
            sort: { type: 'string' }
        }
    })
    public Filter1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelchangeLog1',
        params: {
        }
    })
    public rootviewmodelchangeLog1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelprintSingle1',
        params: {
            beMetaId: '385d8182-1b4a-4c7d-9d7f-2fe1ca5283ab',
            bizBillId: '{UISTATE~/data-grid-component/ids}'
        },
        paramDescriptions: {
            beMetaId: { type: 'string' },
            bizBillId: { type: 'string' }
        }
    })
    public rootviewmodelprintSingle1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelsendGoods1',
        params: {
            id: '',
            IsFinished: '',
            loadCmdName: '',
            loadCmdFrameId: ''
        },
        paramDescriptions: {
            id: { type: 'any' },
            IsFinished: { type: 'any' },
            loadCmdName: { type: 'string' },
            loadCmdFrameId: { type: 'string' }
        }
    })
    public rootviewmodelsendGoods1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelsendGoods2',
        params: {
            id: '{DATA~/data-grid-component/id}',
            IsFinished: 'yes',
            loadCmdName: 'Load1',
            loadCmdFrameId: '#{root-component}'
        },
        paramDescriptions: {
            id: { type: 'any' },
            IsFinished: { type: 'any' },
            loadCmdName: { type: 'string' },
            loadCmdFrameId: { type: 'string' }
        }
    })
    public rootviewmodelsendGoods2(commandParam?: any): Observable<any> { return; }

}