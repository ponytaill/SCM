
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { BefProxy, UriService, Uri } from '@farris/bef';
@Injectable()
export class PurchaseOrderProxy extends BefProxy {

    private apiUrl = 'api/scm/cm/v1.0/purchaseorderlist_frm';

    constructor(
        httpClient: HttpClient,
        uriService: UriService) {
        super(httpClient, uriService);
        this.baseUri = uriService.extendUri(this.apiUrl);
    }
    Instorage1(
        id: any,
        IsFinished: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/instorage1',{
        });
        const url = uri.toString();
        const method = 'PUT';
        const options = {
            params: {
            },
            headers: {
            },
            body: {
                requestInfo: null,
                id: id,
                IsFinished: IsFinished,
            }
        };
        return this.invoke(url, method, options);
    }
    Instorage2(
        template: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/instorage2',{
        });
        const url = uri.toString();
        const method = 'PUT';
        const options = {
            params: {
            },
            headers: {
            },
            body: {
                requestInfo: null,
                template: template,
            }
        };
        return this.invoke(url, method, options);
    }
}