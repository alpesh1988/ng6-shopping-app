import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  public wishlistData: Array<Object> = [];

  constructor() { }

  ngOnInit() {
    this.wishlistData = [{
      "name": "wishlist 1",
      "products": [{
        "code": "1234_1",
        "name": "Lipton Ice Tea Zitrone ohne Zucker",
        "currencySymbol": "€",
        "price": 17.74,
        "url": "/medias/sys_master/images/images/h0c/h8a/8863634948126/63033-1-2-1.jpg"
      }, {
        "code": "1234_2",
        "name": "Lipton Ice Tea Zitrone ohne Zucker",
        "currencySymbol": "€",
        "price": 27.74,
        "url": "/medias/sys_master/images/images/h0c/h8a/8863634948126/63033-1-2-1.jpg"
      }, {
        "code": "1234_3",
        "name": "Lipton Ice Tea Zitrone ohne Zucker",
        "currencySymbol": "€",
        "price": 37.74,
        "url": "/medias/sys_master/images/images/h0c/h8a/8863634948126/63033-1-2-1.jpg"
      }]
    }, {
      "name": "wishlist 2",
      "products": [{
        "code": "12345_1",
        "name": "Lipton Ice Tea Zitrone ohne Zucker",
        "currencySymbol": "€",
        "price": 2.74,
        "url": "/medias/sys_master/images/images/h0c/h8a/8863634948126/63033-1-2-1.jpg"
      }, {
        "code": "12345_2",
        "name": "Lipton Ice Tea Zitrone ohne Zucker",
        "currencySymbol": "€",
        "price": 3.74,
        "url": "/medias/sys_master/images/images/h0c/h8a/8863634948126/63033-1-2-1.jpg"
      }, {
        "code": "12345_3",
        "name": "Lipton Ice Tea Zitrone ohne Zucker",
        "currencySymbol": "€",
        "price": 4.74,
        "url": "/medias/sys_master/images/images/h0c/h8a/8863634948126/63033-1-2-1.jpg"
      }]
    }];
  }

}
