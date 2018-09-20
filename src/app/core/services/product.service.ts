import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:  'root'
})

export class ProductService {

  constructor(private  httpClient:  HttpClient) { }

  fetchProducts( url ) {
    return this.httpClient.get( url );
  }
}
