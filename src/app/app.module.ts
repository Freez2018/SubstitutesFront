import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './product/create-product.component';
import { ListProductsComponent } from './product/list-products.component';
import {HttpClientModule} from '@angular/common/http';
import { DataTableModule } from "angular-6-datatable";

import { ListSubstitutesComponent } from './substitute/list-substitutes/list-substitutes.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ListProductsComponent,    
    ListSubstitutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
