import { NgModule } from '@angular/core';
import { SignComponent } from './sign.component';
import { ModalComponent } from '../../shared/modal/modal.component';
// modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignRoutingModule } from './sign-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    SignComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignRoutingModule,
    SharedModule
  ],
  exports: [
    SignComponent,
  ],
  providers: [],
  bootstrap: []
})
export default class SignModule { }