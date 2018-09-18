import { NgModule } from '@angular/core'; 
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({  
    imports: [BsDropdownModule.forRoot(), PaginationModule.forRoot(), AccordionModule.forRoot(), AlertModule.forRoot()],  
    exports: [BsDropdownModule, PaginationModule, AccordionModule, AlertModule],  
    declarations: [],  
    providers: []  
})  
  
export class SharedBootstrapModule {  
  
}  