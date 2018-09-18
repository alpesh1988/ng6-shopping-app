import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PageNotFoundComponent } from './not-found.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: '',   redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

