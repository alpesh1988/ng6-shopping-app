import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../app.constant';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
   wishlistData: Array<Object> = [];
   showRemovedProductAlert = false;
   imageEndpoint: string = environment.imageEndpoint;
   showEditableBox: any = [];
   wishlisteditname: any = [];
   previousWishlistName: any = [];
  constructor() { }

  ngOnInit() {
    console.log(' calling every route');
    this.wishlistData = JSON.parse(localStorage.getItem('wishlists')) || [];
    if ( this.wishlistData.length > 0 ) {
      this.wishlistData.forEach((item: any, index) => {
        this.showEditableBox[index] = false;
        this.previousWishlistName[index] = item.name;
      });
    }
    console.log('ngOnInit : this.previousWishlistName: ', this.previousWishlistName );
  }

  // takes product and wishlist name from which product needs to removed
   removeProductFromWishlist( event, product, wishlistname ) {
    event.preventDefault();
    event.stopPropagation();
    // Filter which wishlist product does belong to
    const wishlistData = JSON.parse(localStorage.getItem('wishlists'));

    const item = wishlistData.filter((wishlist: any) => wishlist.name === wishlistname );
    this.removeProduct( item[0], product.code, wishlistData );
  }

  // Remove  specific product form products array using product' code property
   removeProduct( item, productCode, wishlistData ) {
    const productArray = item.products;
    for (let i = 0; i < productArray.length; i++) {
      if (productArray[i].code === productCode ) {
        productArray.splice(i, 1);
        this.showRemovedProductAlert = true;
        break;
      }
    }
    console.log('after removal wishlistData: ', wishlistData);
    localStorage.setItem( 'wishlists', JSON.stringify(wishlistData ));
    this.wishlistData = wishlistData;
  }

   onRemovedAlertClosed() {
    this.showRemovedProductAlert = false;
  }

  enableEditableBox( wishlistname, index ) {
    console.log('wishlistname: ', wishlistname );
    console.log('index: ', index );
    this.showEditableBox[index] = true;
    this.wishlisteditname[index] = wishlistname;
  }

  saveWishlistName( wishlistname, index ) {
    console.log('saveWishlistName wishlistname: ', wishlistname );
    console.log('index: ', index );
    this.showEditableBox[index] = false;
    // this.wishlisteditname[index] = wishlistname;
    const item: any = this.wishlistData.find((wishlist: any) => wishlist.name === this.previousWishlistName[index] );
    console.log( 'item:', item );
    item.name = wishlistname;
    this.previousWishlistName[index] = wishlistname;
    localStorage.setItem( 'wishlists', JSON.stringify(this.wishlistData ));
  }

  cancelWishlistName( index ) {
    console.log('cancelWishlistName wishlistname: ' );
    console.log('index: ', index );
    this.showEditableBox[index] = false;
    this.wishlisteditname[index] = this.previousWishlistName[index];
  }

  getSrcFromProduct(product) {
    if (product.images != null && product.images[0] != null && product.images[0].url != null ) {
      return this.imageEndpoint + product.images[0].url;
    }
    return null;
  }

}
