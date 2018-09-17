import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private  products:  Array<object> = [];
  
  constructor( private _productService: ProductService ) { }

  ngOnInit() {
    this.getProducts();
  }

  public getProducts(){
    this._productService.getProducts().subscribe((products:  Array<object>) => {
      console.log('Products data: ', products);
      this.products = products;
    });
  }

}
