import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BefProxy, UriService, Uri } from '@farris/bef';
var PurchaseOrderQueryFrmProxy = /** @class */ (function (_super) {
    tslib_1.__extends(PurchaseOrderQueryFrmProxy, _super);
    function PurchaseOrderQueryFrmProxy(httpClient, uriService) {
        var _this = _super.call(this, httpClient, uriService) || this;
        _this.apiUrl = 'api/scm/cm/v1.0/purchaseorderquery_frm';
        _this.baseUri = uriService.extendUri(_this.apiUrl);
        return _this;
    }
    PurchaseOrderQueryFrmProxy.prototype.QueryCol = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/querycol', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.QueryData = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/querydata', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.Export = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/export', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.GetParasMappingList = function (queryId, datasourceId, userId, languageType) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getparasmappinglist', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                queryId: queryId,
                datasourceId: datasourceId,
                userId: userId,
                languageType: languageType,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.SaveParasMapping = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/saveparasmapping', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.DeleteParasMapping = function (queryId, datasourceId) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/deleteparasmapping', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                queryId: queryId,
                datasourceId: datasourceId,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.GetJoinSearch = function (formId, queryId) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getjoinsearch', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                formId: formId,
                queryId: queryId,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.AddJointSearch = function (joinSearch) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/addjointsearch', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                joinSearch: joinSearch,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.DeleteJointSearch = function (formid, queryId) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/deletejointsearch', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                formid: formid,
                queryId: queryId,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.VisibleJoint = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/visiblejoint', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.GetPreSchema = function () {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getpreschema', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.GetSchemaById = function (id) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getschemabyid', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                id: id,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.GetSchemaList = function (queryId, userId, languageType) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getschemalist', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                queryId: queryId,
                userId: userId,
                languageType: languageType,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.SaveSchema = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/saveschema', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.DeleteSchema = function (id) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/deleteschema', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                id: id,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.GetSpreadTemplate = function (id, scheme) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getspreadtemplate', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                id: id,
                scheme: scheme,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.GetInitSpreadTemplate = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getinitspreadtemplate', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.GetSpreadTemplateWithDynamicColumn = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getspreadtemplatewithdynamiccolumn', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.GetFilterList = function (queryId, datasourceId, userId, languageType, queryType) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getfilterlist', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                queryId: queryId,
                datasourceId: datasourceId,
                userId: userId,
                languageType: languageType,
                queryType: queryType,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.SaveFilter = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/savefilter', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.DeleteFilter = function (queryId, datasourceId, queryType) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/deletefilter', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                queryId: queryId,
                datasourceId: datasourceId,
                queryType: queryType,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.GetCrossTabTemplate = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getcrosstabtemplate', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.GetPrintIntegrationList = function (queryId, schemaId) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getprintintegrationlist', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                queryId: queryId,
                schemaId: schemaId,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.SavePrintIntegration = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/saveprintintegration', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.DeletePrintIntegration = function (queryId, schemaId) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/deleteprintintegration', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                queryId: queryId,
                schemaId: schemaId,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy.prototype.Print = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/print', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderQueryFrmProxy = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            UriService])
    ], PurchaseOrderQueryFrmProxy);
    return PurchaseOrderQueryFrmProxy;
}(BefProxy));
export { PurchaseOrderQueryFrmProxy };
