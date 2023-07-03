
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { SupplierMaEntity } from './entities/suppliermaentity';

import { SupplierMaProxy } from './suppliermaproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/scm/cm/v1.0/suppliermacard_frm',
    entityType: SupplierMaEntity
})
export class SupplierMaRepository extends BefRepository<SupplierMaEntity> {
    public name = 'SupplierMaRepository';

    public proxy: SupplierMaProxy;
    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(SupplierMaProxy, null);
    }
}