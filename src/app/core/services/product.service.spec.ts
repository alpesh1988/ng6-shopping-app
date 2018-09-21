import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService, HttpClient],
      imports: [
        HttpClientModule
      ],
    });
  });

  it('ProductService should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));

  it('HttpClient should be created', inject([HttpClient], (service: HttpClient) => {
    expect(service).toBeTruthy();
  }));
});
