
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class MaterialfileF59oComponentViewmodel extends ViewModel {
    public bindingPath = '/materialFiles';
    public dom = {};
    @NgCommand({
        name: 'materialfilef59ocomponentviewmodeladdFileRows1',
        params: {
            fileInfoFieldPath: '/materialFiles/fileInfo'
        },
        paramDescriptions: {
            fileInfoFieldPath: { type: 'string' }
        }
    })
    public materialfilef59ocomponentviewmodeladdFileRows1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'materialfilef59ocomponentviewmodelremoveFileRows1',
        params: {
            fileInfoFieldPath: '/materialFiles/fileInfo'
        },
        paramDescriptions: {
            fileInfoFieldPath: { type: 'string' }
        }
    })
    public materialfilef59ocomponentviewmodelremoveFileRows1(commandParam?: any): Observable<any> { return; }

}