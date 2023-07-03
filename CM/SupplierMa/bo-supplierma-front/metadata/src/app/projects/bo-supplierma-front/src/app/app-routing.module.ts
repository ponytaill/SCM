import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'SupplierMaCard', loadChildren:'./suppliermacard/suppliermacard#SupplierMaCardModule'},
  { path: 'SupplierMaList', loadChildren:'./suppliermalist/suppliermalist#SupplierMaListModule'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }