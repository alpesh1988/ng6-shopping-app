import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/services/product.service';
import { environment } from '../../environments/environment';
import { AppConstants } from '../app.constant';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private products: any = {};
  public imageEndpoint: string = environment.imageEndpoint;
  public itemsPerPageConstant: Array<Object> = AppConstants.itemsPerPageConstant;
  public query: string = AppConstants.query;
  public totalItems: number = AppConstants.totalItems; // total items
  public pageSize: number = 0 ; // items per page.
  public currentPage: number = AppConstants.currentPage; // current page number
  public category: number = AppConstants.category; // category all = 1
  public maxSize: number = AppConstants.maxSize; // pagination max count
  public sortOrder: string = AppConstants.sortOrder; // sortOrder default to relevance
  
  constructor( private _productService: ProductService ) { }

  ngOnInit() {
    console.log('host: ..', this.imageEndpoint );
    // setting pageSize from constant
    this.pageSize = this.itemsPerPageConstant[0]['value'];
    this.fetchProducts();
  }

  // api to fetch products data
  public fetchProducts() {
    let url = '';
    url = AppConstants.fetchAPI;
    url = url.replace( '[:query]', this.query );
    url = url.replace( '[:sortOrder]', this.sortOrder );
    url = url.replace( '[:category]', this.category.toString() );
    url = url.replace( '[:currentPage]', this.currentPage.toString() );
    url = url.replace( '[:pageSize]', this.pageSize.toString());
    console.log( 'getProduct component URL: ', url );
    // service call for api
    this._productService.fetchProducts(url).subscribe(( products:  any ) => {
      console.log('Products data: ', products);
      this.products = products;
      this.totalItems = products.pagination.totalResults;
      this.pageSize = products.pagination.pageSize;
    });
  }

  // event to handle page change in pagination
  public changeCurrentPage(event: any): void {
    console.log( 'currentPage clicked: ', event.page )
    this.currentPage = event.page - 1;
    this.fetchProducts();
  }

  // event to handle change in pageSize
  public changePageSize(item: any) {
    console.log('item changePageSize: ', item );
    this.pageSize = item.value;
    this.fetchProducts();
  }

}
