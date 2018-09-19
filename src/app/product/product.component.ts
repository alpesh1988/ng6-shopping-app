import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

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
  public sortOrderConstant: Array<Object> = AppConstants.sortOrderConstant;
  public sortOrder: string = ''; // sortOrder default to relevance
  public sortOrderLabel: string = '';
  public searchtext: string = '';
  public modalRef: BsModalRef;
  public wishlistData: Array<Object> = []; 
  public productToBeAddedToWishlist: any = {};
  public newwishlist: string = '';
  public showAddedProductAlert: boolean = false;

  constructor( private _productService: ProductService , private spinner: NgxSpinnerService, private modalService: BsModalService) { }

  ngOnInit() {
    this.spinner.show();
    console.log('host: ..', this.imageEndpoint );
    // setting pageSize from constant
    this.pageSize = this.itemsPerPageConstant[0]['value'];
    this.sortOrder = this.sortOrderConstant[0]['value'];
    this.sortOrderLabel = this.sortOrderConstant[0]['label'];
    this.fetchProducts();
    // setting wishlist data
    this.wishlistData = JSON.parse(localStorage.getItem('wishlists')) || [];
  }

  // api to fetch products data
  public fetchProducts() {
    let url = '';
    url = AppConstants.fetchAPI;
    url = url.replace( '[:query]', this.query );
    url = url.replace( '[:sortOrder]', this.sortOrder.toString());
    url = url.replace( '[:category]', this.category.toString());
    url = url.replace( '[:currentPage]', this.currentPage.toString());
    url = url.replace( '[:pageSize]', this.pageSize.toString());
    console.log( 'getProduct component URL: ', url );
    // service call for api
    this._productService.fetchProducts(url).subscribe(( products:  any ) => {
      console.log('Products data: ', products);
      this.products = products;
      this.totalItems = products.pagination.totalResults;
      this.pageSize = products.pagination.pageSize;
      this.spinner.hide();
    });
  }

  // event to handle page change in pagination
  public changeCurrentPage(event: any): void {
    this.spinner.show();
    console.log( 'currentPage clicked: ', event.page )
    this.currentPage = event.page - 1;
    this.fetchProducts();
  }

  // event to handle change in pageSize
  public changePageSize(item: any) {
    this.spinner.show();
    console.log('item changePageSize: ', item );
    this.pageSize = item.value;
    this.fetchProducts();
  }

  // event to handle change in sortOrder
  public changeSortOrder(item: any) {
    this.spinner.show();
    console.log('item changeSortOrder: ', item );
    this.sortOrder = item.value;
    this.sortOrderLabel = item.label;
    this.fetchProducts();
  }

  // event to update query
  public changeSearchText( searchtext ) {
    this.spinner.show();
    console.log('item changeSearchText: ', searchtext );
    this.query = searchtext;
    this.currentPage = 0;
    this.fetchProducts();
  }

  // event to clear search text
  public clearSearchText() {
    this.spinner.show();
    console.log('item clearSearchText:' );
    this.searchtext = '';
    this.query = '';
    this.currentPage = 0;
    this.fetchProducts();
  }

  openWishlistModal(template: TemplateRef<any>, productToBeAddedToWishlist ) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'gray modal-lg' }));
    this.productToBeAddedToWishlist = productToBeAddedToWishlist;
  }

  addToWishlist( selectedWishlist ) {
    console.log('sselectedWishlist: ', selectedWishlist)
    console.log('productToBeAddedToWishlist:', this.productToBeAddedToWishlist );
    let item: any = this.wishlistData.find((wishlist:any) => wishlist.name === selectedWishlist );
    item.products.push(this.productToBeAddedToWishlist);
    console.log('final wishlist: ', item );
    localStorage.setItem( 'wishlists', JSON.stringify(this.wishlistData ));    
    this.showAddedProductAlert = true;
  }

  createWishlist( newWishlistName ) {
    let newWishListFormat = {
      name: newWishlistName,
      products: []
    };
    this.wishlistData.push(newWishListFormat);
    localStorage.setItem( 'wishlists', JSON.stringify(this.wishlistData ));
    this.newwishlist = '';
  }
  
  onAddedAlertClosed() {
    this.showAddedProductAlert = false;
    this.modalRef.hide();
  }

}
