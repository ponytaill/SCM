
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { PrintService as PrintService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'rootviewmodelprintSingle1'
})
export class rootviewmodelprintSingle1Handler extends CommandHandler {
    constructor(
        public _PrintService1: PrintService1
    ) {
        super();
    }

    schedule() {
        this.addTask('printSingle', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/beMetaId}', 
                '{COMMAND~/params/bizBillId}'
                    ];
            return this.invoke(this._PrintService1, 'printSingle', args, context);
        });

    }
}