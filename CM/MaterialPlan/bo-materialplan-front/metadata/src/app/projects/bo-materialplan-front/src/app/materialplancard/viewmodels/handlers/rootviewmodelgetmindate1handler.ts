
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { MaterialDetailFrmMinDateService as MaterialDetailFrmMinDateService1 } from '../../services/materialplancard_frm_mindate';

@Injectable()
@NgCommandHandler({
    commandName: 'rootviewmodelgetMinDate1'
})
export class rootviewmodelgetMinDate1Handler extends CommandHandler {
    constructor(
        public _MaterialDetailFrmMinDateService1: MaterialDetailFrmMinDateService1
    ) {
        super();
    }

    schedule() {
        this.addTask('getMinDate', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._MaterialDetailFrmMinDateService1, 'getMinDate', args, context);
        });

    }
}