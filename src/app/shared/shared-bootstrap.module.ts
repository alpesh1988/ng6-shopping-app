import { NgModule } from '@angular/core'; 
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
  
@NgModule({  
    imports: [BsDropdownModule.forRoot(), PaginationModule.forRoot()],  
    exports: [BsDropdownModule, PaginationModule],  
    declarations: [],  
    providers: []  
})  
  
export class SharedBootstrapModule {  
  
}  