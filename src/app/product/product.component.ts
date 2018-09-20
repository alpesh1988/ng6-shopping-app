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
   imageEndpoint: string = environment.imageEndpoint;
   itemsPerPageConstant: Array<Object> = AppConstants.itemsPerPageConstant;
   query: string = AppConstants.query;
   totalItems: number = AppConstants.totalItems; // total items
   pageSize = 0 ; // items per page.
   currentPage: number = AppConstants.currentPage; // current page number
   category: number = AppConstants.category; // category all = 1
   maxSize: number = AppConstants.maxSize; // pagination max count
   sortOrderConstant: Array<Object> = AppConstants.sortOrderConstant;
   sortOrder = ''; // sortOrder default to relevance
   sortOrderLabel = '';
   searchtext = '';
   modalRef: BsModalRef;
   wishlistData: Array<Object> = [];
   productToBeAddedToWishlist: any = {};
   newwishlist = '';
   showAddedProductAlert = false;

  constructor( private _productService: ProductService, private spinner: NgxSpinnerService, private modalService: BsModalService) { }

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
   fetchProducts() {
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
   changeCurrentPage(event: any): void {
    this.spinner.show();
    console.log( 'currentPage clicked: ', event.page );
    this.currentPage = event.page - 1;
    this.fetchProducts();
  }

  // event to handle change in pageSize
   changePageSize(item: any) {
    this.spinner.show();
    console.log('item changePageSize: ', item );
    this.pageSize = item.value;
    this.fetchProducts();
  }

  // event to handle change in sortOrder
   changeSortOrder(item: any) {
    this.spinner.show();
    console.log('item changeSortOrder: ', item );
    this.sortOrder = item.value;
    this.sortOrderLabel = item.label;
    this.fetchProducts();
  }

  // event to update query
   changeSearchText( searchtext ) {
    this.spinner.show();
    console.log('item changeSearchText: ', searchtext );
    this.query = searchtext;
    this.currentPage = 0;
    this.fetchProducts();
  }

  // event to clear search text
   clearSearchText() {
    this.spinner.show();
    console.log('item clearSearchText:' );
    this.searchtext = '';
    this.query = '';
    this.currentPage = 0;
    this.fetchProducts();
  }

  // when 'add to wishlist' button from single product is clicked
  openWishlistModal(template: TemplateRef<any>, productToBeAddedToWishlist ) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'gray modal-lg' }));
    this.productToBeAddedToWishlist = productToBeAddedToWishlist;
  }

  // when product is added to wishlist by clicking 'add to wishlist' button
  addToWishlist( selectedWishlist ) {
    console.log('sselectedWishlist: ', selectedWishlist);
    console.log('productToBeAddedToWishlist:', this.productToBeAddedToWishlist );
    const item: any = this.wishlistData.find((wishlist: any) => wishlist.name === selectedWishlist );
    item.products.push(this.productToBeAddedToWishlist);
    console.log('final wishlist: ', item );
    localStorage.setItem( 'wishlists', JSON.stringify(this.wishlistData ));
    this.showAddedProductAlert = true;
  }

  // create a wishlist using input box
  createWishlist( newWishlistName ) {
    const newWishListFormat = {
      name: newWishlistName,
      products: []
    };
    this.wishlistData.push(newWishListFormat);
    localStorage.setItem( 'wishlists', JSON.stringify(this.wishlistData ));
    this.newwishlist = '';
  }

  // when 'add to wishlist' modal is closed
  onAddedAlertClosed() {
    this.showAddedProductAlert = false;
    this.modalRef.hide();
  }

  // create product image dynamically
  getSrcFromProduct(product) {
    if (product.images != null && product.images[0] != null && product.images[0].url != null ) {
      return this.imageEndpoint + product.images[0].url;
    }
    return null;
  }

}
