import { Component, OnInit } from '@angular/core';
import {ProductsService}  from '../services/products.service';
import {Product} from '../models/product';
import {Substitute} from '../models/substitute';
import { HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Product[];
  subs : Substitute[];

  constructor(private productsService: ProductsService) {

  }

  ngOnInit() {
    this.productsService.getProducts()
                        .subscribe(prods => {this.products = prods;}); 
    console.log(this.products);
  }
  getSubstitutesForProduct(prodId: string){
    const params = new HttpParams()
      .set('prodId', prodId);
      //TODO: filter by params
    this.productsService.getSubstitutes(params)
      .subscribe(subs => this.subs = subs.filter(x => x.BaseProductId == prodId)); // filter should be on api part
        console.log(this.subs);
  }

}
