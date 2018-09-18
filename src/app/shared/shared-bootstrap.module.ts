import { NgModule } from '@angular/core'; 
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({  
    imports: [BsDropdownModule.forRoot(), PaginationModule.forRoot(), AccordionModule.forRoot()],  
    exports: [BsDropdownModule, PaginationModule, AccordionModule],  
    declarations: [],  
    providers: []  
})  
  
export class SharedBootstrapModule {  
  
}  