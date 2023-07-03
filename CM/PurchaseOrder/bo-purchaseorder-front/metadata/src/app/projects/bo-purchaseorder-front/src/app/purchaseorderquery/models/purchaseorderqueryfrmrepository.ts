
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { PurchaseOrderQueryFrmEntity } from './entities/purchaseorderqueryfrmentity';

import { PurchaseOrderQueryFrmProxy } from './purchaseorderqueryfrmproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/scm/cm/v1.0/purchaseorderquery_frm',
    entityType: PurchaseOrderQueryFrmEntity
})
export class PurchaseOrderQueryFrmRepository extends BefRepository<PurchaseOrderQueryFrmEntity> {
    public name = 'PurchaseOrderQueryFrmRepository';

    public proxy: PurchaseOrderQueryFrmProxy;
    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(PurchaseOrderQueryFrmProxy, null);
    }
}