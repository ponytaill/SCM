import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'MaterialPlanCard', loadChildren:'./materialplancard/materialplancard#MaterialPlanCardModule'},
  { path: 'MaterialPlanForm', loadChildren:'./materialplanform/materialplanform#MaterialPlanFormModule'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }