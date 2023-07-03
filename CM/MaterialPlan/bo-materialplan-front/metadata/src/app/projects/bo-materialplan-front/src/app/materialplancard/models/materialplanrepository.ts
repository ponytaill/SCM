
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { MaterialPlanEntity } from './entities/materialplanentity';

import { MaterialPlanProxy } from './materialplanproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/scm/cm/v1.0/materialplancard_frm',
    entityType: MaterialPlanEntity
})
export class MaterialPlanRepository extends BefRepository<MaterialPlanEntity> {
    public name = 'MaterialPlanRepository';

    public proxy: MaterialPlanProxy;
    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(MaterialPlanProxy, null);
    }
}