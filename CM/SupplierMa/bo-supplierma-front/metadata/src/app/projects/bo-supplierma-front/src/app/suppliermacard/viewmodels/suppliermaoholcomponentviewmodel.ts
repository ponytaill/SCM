
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class SuppliermaOholComponentViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
}