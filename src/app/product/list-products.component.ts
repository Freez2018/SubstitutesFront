import { Component, OnInit } from '@angular/core';
import {ProductsService}  from '../services/products.service';
import {Category} from '../models/category';
import {Product} from '../models/product';
import {Substitute} from '../models/substitute';
import { HttpParams } from "@angular/common/http";
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  categories: Category[];
  products: Product[];
  subs : Substitute[];
  parCategoryId: string;

  constructor(private productsService: ProductsService, private route: ActivatedRoute) {
    this.parCategoryId = this.route.snapshot.params.param1;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.parCategoryId = params['FK_category_categoryId'];    
    });

    if (this.parCategoryId){
      const params = new HttpParams()
      .set('FK_category_categoryId', this.parCategoryId);

      this.productsService.getProductsByCategory(params)
      .subscribe(prods => {this.products = prods;});  
    }else{
      this.productsService.getProducts()
      .subscribe(prods => {this.products = prods;});   
    }   

    this.productsService.getCategories()
                        .subscribe(categories => {this.categories = categories;});  
  }
  getSubstitutesForProduct(BaseProductId: string){
    const params = new HttpParams()
      .set('BaseProductId', BaseProductId);     
      console.log(BaseProductId);
    this.productsService.getSubstitutes(params)
      .subscribe(subs => this.subs = subs.filter(x => x.BaseProductId == BaseProductId)); // filter should be on api part
        console.log(this.subs);
  }
  getProducts(){   
      this.productsService.getProducts()
      .subscribe(prods => {this.products = prods;});  
  }
  getProductsByCategory(category: string){   
    const params = new HttpParams()
      .set('FK_category_categoryId', category);
    this.productsService.getProductsByCategory(params)
      .subscribe(prods => {this.products = prods;});  
  }
}
