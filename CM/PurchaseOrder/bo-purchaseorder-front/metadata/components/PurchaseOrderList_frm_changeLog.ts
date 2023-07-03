import { Injectable } from '@angular/core';
import { ChgdrListUiService } from '@gsp-cmp/chgdr';
import { AppContext } from '@farris/devkit';
@Injectable()
export class PurchaseOrderFormFrmChangeLogService {
  constructor( private chgdrListUiService: ChgdrListUiService,
    private appContext: AppContext) {}
    changeLog() {
    // 此处entityId为业务实体ID
    const entityId = "385d8182-1b4a-4c7d-9d7f-2fe1ca5283ab";
    const dataId = this.appContext.getFrameContext('data-grid-component').bindingData.list.currentItem.getValue("id");
    this.chgdrListUiService.showDialog(entityId, dataId);
  }
}