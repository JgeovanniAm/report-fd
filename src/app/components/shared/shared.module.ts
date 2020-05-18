import { NgModule } from '@angular/core';
// modules
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component';
import { LoadcountComponent } from './loadcount/loadcount.component';
import { dateFormt } from 'src/app/pipes/date';

@NgModule({
  declarations: [
    LoaderComponent,
    ModalComponent,
    LoaderComponent,
    LoadcountComponent,
    dateFormt
  ],
  imports: [],
  exports: [
    CommonModule,
    ModalComponent,
    LoaderComponent,
    LoadcountComponent,
    dateFormt
    
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }