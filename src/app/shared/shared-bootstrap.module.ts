import { NgModule } from '@angular/core'; 
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({  
    imports: [BsDropdownModule.forRoot(), PaginationModule.forRoot(), AccordionModule.forRoot(), AlertModule.forRoot(), ModalModule.forRoot()],  
    exports: [BsDropdownModule, PaginationModule, AccordionModule, AlertModule, ModalModule],  
    declarations: [],  
    providers: []  
})  
  
export class SharedBootstrapModule {  
  
}  