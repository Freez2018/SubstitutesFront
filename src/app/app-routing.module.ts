import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './product/list-products.component';
import { CreateProductComponent } from './product/create-product.component';
import {ListSubstitutesComponent} from './substitute/list-substitutes/list-substitutes.component';
const routes: Routes = [
  {path:'list', component:ListProductsComponent},
  {path:'create', component:CreateProductComponent},
  {path:'substitutesList', component:ListSubstitutesComponent},
  {path:'',redirectTo:'/list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
