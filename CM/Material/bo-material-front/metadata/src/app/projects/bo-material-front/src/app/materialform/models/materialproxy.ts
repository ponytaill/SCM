
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { BefProxy, UriService, Uri } from '@farris/bef';
@Injectable()
export class MaterialProxy extends BefProxy {

    private apiUrl = 'api/scm/cm/v1.0/materialform_frm';

    constructor(
        httpClient: HttpClient,
        uriService: UriService) {
        super(httpClient, uriService);
        this.baseUri = uriService.extendUri(this.apiUrl);
    }
    UpdateAttachment(
        updateAttachInfo: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/updateattachment',{
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
                updateAttachInfo: updateAttachInfo,
            }
        };
        return this.invoke(url, method, options);
    }
    BatchUploadAttachment(
        batchUploadInfo: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/batchuploadattachment',{
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
                batchUploadInfo: batchUploadInfo,
            }
        };
        return this.invoke(url, method, options);
    }
}