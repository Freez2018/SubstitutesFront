import { Component, OnInit } from '@angular/core';
import {ProductsService}  from '../../services/products.service';
import {Substitute} from '../../models/substitute';
import { HttpParams } from "@angular/common/http";
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-list-substitutes',
  templateUrl: './list-substitutes.component.html',
  styleUrls: ['./list-substitutes.component.css']
})
export class ListSubstitutesComponent implements OnInit {
  substitutes: Substitute[];
  parBaseProductId: string;
  
  constructor(private productsService: ProductsService, private route: ActivatedRoute) {
  
    this.parBaseProductId = this.route.snapshot.params.param1;
  }

  ngOnInit() {    
    this.route.queryParams.subscribe(params => {
      this.parBaseProductId = params['BaseProductId'];    
    });
   
    const params = new HttpParams()
    .set('BaseProductId', this.parBaseProductId);

    this.productsService.getSubstitutes(params)
                        .subscribe(subs => {
                          this.substitutes = subs;
                          console.log(this.substitutes); 
                        });
                           
  }

}
