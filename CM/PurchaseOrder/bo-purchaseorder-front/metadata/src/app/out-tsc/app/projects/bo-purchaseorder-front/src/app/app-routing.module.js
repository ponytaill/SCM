import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    { path: 'PurchaseOrderDetail', loadChildren: './purchaseorderdetail/purchaseorderdetail#PurchaseOrderDetailModule' },
    { path: 'PurchaseOrderList', loadChildren: './purchaseorderlist/purchaseorderlist#PurchaseOrderListModule' },
    { path: 'PurchaseOrderQuery', loadChildren: './purchaseorderquery/purchaseorderquery#PurchaseOrderQueryModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes, { useHash: true })],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
