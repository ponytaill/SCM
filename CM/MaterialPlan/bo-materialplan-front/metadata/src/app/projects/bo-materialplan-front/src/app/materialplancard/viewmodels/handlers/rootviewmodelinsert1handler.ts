
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { SubListDataService as SubListDataService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'rootviewmodelInsert1'
})
export class rootviewmodelInsert1Handler extends CommandHandler {
    constructor(
        public _SubListDataService1: SubListDataService1
    ) {
        super();
    }

    schedule() {
        this.addTask('insert', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/position}'
                    ];
            return this.invoke(this._SubListDataService1, 'insert', args, context);
        });

    }
}