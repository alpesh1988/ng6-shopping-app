import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { SharedBootstrapModule } from './shared/shared-bootstrap.module';

import { TranslateService } from '@ngx-translate/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './not-found.component';
import { HttpLoaderFactory } from "./app.module";

describe('AppComponent', () => {
  let http: HttpClient;
  let translate: TranslateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ProductComponent,
        WishlistComponent,
        PageNotFoundComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        NgxSpinnerModule,
        SharedBootstrapModule,
        AppRoutingModule,
        TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
          }
        }),
        HttpClientTestingModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        TranslateService
      ]
    }).compileComponents();
    translate = TestBed.get(TranslateService);

  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
