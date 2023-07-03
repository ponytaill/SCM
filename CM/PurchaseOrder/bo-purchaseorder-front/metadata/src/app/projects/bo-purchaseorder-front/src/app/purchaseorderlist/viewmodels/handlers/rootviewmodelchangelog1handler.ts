
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { PurchaseOrderFormFrmChangeLogService as PurchaseOrderFormFrmChangeLogService1 } from '../../services/purchaseorderlist_frm_changelog';

@Injectable()
@NgCommandHandler({
    commandName: 'rootviewmodelchangeLog1'
})
export class rootviewmodelchangeLog1Handler extends CommandHandler {
    constructor(
        public _PurchaseOrderFormFrmChangeLogService1: PurchaseOrderFormFrmChangeLogService1
    ) {
        super();
    }

    schedule() {
        this.addTask('changeLog', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._PurchaseOrderFormFrmChangeLogService1, 'changeLog', args, context);
        });

    }
}