
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { ListDataService as ListDataService1 } from '@farris/command-services';
import { PurchaseOrderListFrmControllerService as PurchaseOrderListFrmControllerService1 } from '../../services/purchaseorderlist_frm_controller';

@Injectable()
@NgCommandHandler({
    commandName: 'rootviewmodelsendGoods1'
})
export class rootviewmodelsendGoods1Handler extends CommandHandler {
    constructor(
        public _ListDataService1: ListDataService1,
        public _PurchaseOrderListFrmControllerService1: PurchaseOrderListFrmControllerService1
    ) {
        super();
    }

    schedule() {
        this.addTask('sendGoods', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/id}', 
                '{COMMAND~/params/IsFinished}'
                    ];
            return this.invoke(this._PurchaseOrderListFrmControllerService1, 'sendGoods', args, context);
        });

        this.addTask('refresh', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/loadCmdName}', 
                '{COMMAND~/params/loadCmdFrameId}'
                    ];
            return this.invoke(this._ListDataService1, 'refresh', args, context);
        });

        this.addLink('sendGoods', 'refresh', `1==1`);
    }
}