
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { FileService as FileService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'materialfilef59ocomponentviewmodelremoveFileRows1'
})
export class materialfilef59ocomponentviewmodelremoveFileRows1Handler extends CommandHandler {
    constructor(
        public _FileService1: FileService1
    ) {
        super();
    }

    schedule() {
        this.addTask('removeFileRows', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/fileInfoFieldPath}'
                    ];
            return this.invoke(this._FileService1, 'removeFileRows', args, context);
        });

    }
}