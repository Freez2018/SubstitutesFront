import { Component, OnInit } from '@angular/core';
import {ProductsService}  from '../../services/products.service';
import {Substitute} from '../../models/substitute';
import { HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-list-substitutes',
  templateUrl: './list-substitutes.component.html',
  styleUrls: ['./list-substitutes.component.css']
})
export class ListSubstitutesComponent implements OnInit {
  substitutes: Substitute[];

  constructor(private productsService: ProductsService) {

  }

  ngOnInit() {
    /*this.productsService.getSubstitutes()
                        .subscribe(subs => this.subs = subs); 
    console.log(this.subs);*/
  }

}
