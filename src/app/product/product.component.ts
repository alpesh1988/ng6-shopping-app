import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/services/product.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private  products:  Array<object> = [];
  public imageEndpoint: string = environment.imageEndpoint;
  
  constructor( private _productService: ProductService ) { }

  ngOnInit() {
    console.log('host: ..', this.imageEndpoint )
    this.getProducts();
  }

  public getProducts(){
    this._productService.getProducts().subscribe((products:  Array<object>) => {
      console.log('Products data: ', products);
      this.products = products;
    });
  }

}
