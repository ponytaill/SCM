
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

import { DataGridComponentViewmodel } from './datagridcomponentviewmodel';

import { DetailFormComponentViewmodel } from './detailformcomponentviewmodel';

import { MaterialfileF59oComponentViewmodel } from './materialfilef59ocomponentviewmodel';

@Injectable()
export class RootViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    public childViewModels = {
        'DataGridComponentViewmodel' : 'dataGridComponentViewmodel',
        'DetailFormComponentViewmodel' : 'detailFormComponentViewmodel',
        'MaterialfileF59oComponentViewmodel' : 'materialfileF59oComponentViewmodel'
    }
    public dataGridComponentViewmodel: DataGridComponentViewmodel;
    public detailFormComponentViewmodel: DetailFormComponentViewmodel;
    public materialfileF59oComponentViewmodel: MaterialfileF59oComponentViewmodel;
}