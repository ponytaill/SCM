import { Injectable } from '@angular/core';
import { catchError, switchMap, map, tap } from 'rxjs/operators';
import { FrameContext, Entity, BindingData, EntityValueChange } from '@farris/devkit';
import { Observable, EMPTY, of } from 'rxjs';
import { FormMessageService, FormLoadingService, CommandService,FormNotifyService } from '@farris/command-services';

@Injectable()
export class MaterialDetailFrmMinDateService {
  constructor(
     private msgService: FormMessageService,
        private frameContext: FrameContext,
        private bindingData: BindingData
  ) {}
  
getMinDate(){
  var date = new Date();
   this.frameContext.appContext.frameContextManager.getFrameContextById("root-component").viewModel.uiState['mindate'] = date;
}
}
