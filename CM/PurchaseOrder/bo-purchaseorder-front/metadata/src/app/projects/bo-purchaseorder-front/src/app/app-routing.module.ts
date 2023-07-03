import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'PurchaseOrderDetail', loadChildren:'./purchaseorderdetail/purchaseorderdetail#PurchaseOrderDetailModule'},
  { path: 'PurchaseOrderList', loadChildren:'./purchaseorderlist/purchaseorderlist#PurchaseOrderListModule'},
  { path: 'PurchaseOrderQuery', loadChildren:'./purchaseorderquery/purchaseorderquery#PurchaseOrderQueryModule'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }