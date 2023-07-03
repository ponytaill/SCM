
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { MaterialEntity } from './entities/materialentity';

import { MaterialProxy } from './materialproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/scm/cm/v1.0/materialform_frm',
    entityType: MaterialEntity
})
export class MaterialRepository extends BefRepository<MaterialEntity> {
    public name = 'MaterialRepository';

    public proxy: MaterialProxy;
    public paginationInfo = {
        MaterialEntity: {
            pageSize: 20,
        }
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(MaterialProxy, null);
    }
}