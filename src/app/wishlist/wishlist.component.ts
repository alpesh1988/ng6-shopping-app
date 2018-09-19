import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../app.constant';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  public wishlistData: Array<Object> = [];
  public showRemovedProductAlert: boolean = false;
  public openWishlistOneAtATime: boolean = AppConstants.openWishlistOneAtATime;
  public imageEndpoint: string = environment.imageEndpoint;
  public showEditableBox: any = [];
  public wishlisteditname: any = [];
  public previousWishlistName: any = [];
  constructor() { }

  ngOnInit() {
    console.log(' calling every route');
    this.wishlistData = JSON.parse(localStorage.getItem('wishlists'));
    this.wishlistData.forEach((item: any, index)=> {
      this.showEditableBox[index] = false;
      this.previousWishlistName[index] = item.name;
    })
    console.log('ngOnInit : this.previousWishlistName: ', this.previousWishlistName )
  }

  // takes product and wishlist name from which product needs to removed
  public removeProductFromWishlist( event, product, wishlistname ) {
    event.preventDefault()
    event.stopPropagation();
    // Filter which wishlist product does belong to
    let wishlistData = JSON.parse(localStorage.getItem('wishlists'));

    let item = wishlistData.filter((wishlist:any) => wishlist.name === wishlistname );
    this.removeProduct( item[0], product.code, wishlistData );
  }

  // Remove  specific product form products array using product' code property
  public removeProduct( item, productCode, wishlistData ) {
    let productArray = item.products;
    for (var i =0; i < productArray.length; i++) {
      if (productArray[i].code === productCode ) {
        productArray.splice(i,1);
        this.showRemovedProductAlert = true;
        break;
      }
    }
    console.log('after removal wishlistData: ', wishlistData);
    localStorage.setItem( 'wishlists', JSON.stringify(wishlistData ));
    this.wishlistData = wishlistData;
  }

  public onRemovedAlertClosed() {
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
    //this.wishlisteditname[index] = wishlistname;    
    let item: any = this.wishlistData.find((wishlist:any) => wishlist.name === this.previousWishlistName[index] );
    console.log( 'item:', item );
    item.name = wishlistname;
    localStorage.setItem( 'wishlists', JSON.stringify(this.wishlistData ));
  }

  cancelWishlistName( index ) {
    console.log('cancelWishlistName wishlistname: ' );
    console.log('index: ', index );
    this.showEditableBox[index] = false;
    this.wishlisteditname[index] = this.previousWishlistName[index];
  }

}
