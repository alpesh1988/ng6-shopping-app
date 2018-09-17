import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:  'root'
})

export class ProductService {
  
  constructor(private  httpClient:  HttpClient) { }

  getProducts(){
    return this.httpClient.get('/api?query=sugar:price-desc:category:1&currentPage=0&pageSize=36')
  }
}
