import { NgModule } from '@angular/core';
import { BillComponent } from './bill.component';
import { TabBillComponent } from '../../core/tab-bill/tab-bill.component';
import { CommonModule } from '@angular/common';
import { BillRoutingModule  } from './bill-routing.module';
import { SharedModule } from '../../shared/shared.module';

// modules

@NgModule({
  declarations: [
    BillComponent,
    TabBillComponent,
  ],
  imports: [
    CommonModule,
    BillRoutingModule,
    SharedModule
  ],
  exports: [
    BillComponent,
  ],
  providers: [],
  bootstrap: []
})
export default class BillModule { }