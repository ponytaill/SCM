import { Injectable } from '@angular/core';
import { FrameContext } from '@farris/devkit';
import { BefRepository, ResponseInfo } from '@farris/bef';
import { BeActionService, FormMessageService } from '@farris/command-services';
import { tap } from 'rxjs/operators';

@Injectable()
export class PurchaseOrderListFrmControllerService {
  constructor( private frameContext: FrameContext,
    private beActionService: BeActionService,
    private messageService: FormMessageService) {}

  /**
   * 方法1
   * @remarks 
   * @returns 
   */
 sendGoods(id, IsFinished): any {
    const repository = this.frameContext.repository as BefRepository<any>;
    const requestInfo = repository.restService.buildRequestInfo();
    const actionUri = 'instorage1';
    //此处actionUri为报销单列表Eapi中发货操作URI尾部字段
    const body = {
      id: id,
      IsFinished: IsFinished,
      requestInfo: requestInfo
    }
    const action$ = this.beActionService.invokeAction(actionUri, 'PUT', null, null, body);
    return action$.pipe(
      tap((responseInfo: ResponseInfo) => {
        this.messageService.info("入库成功!");
      })
    )
  }
}
