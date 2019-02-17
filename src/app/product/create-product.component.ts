import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
      volume:['']      
    })
  }
  onSubmit(): void {
    console.log(this.productForm.value);
  }

  onLoadDataClick(): void {

  }

}
