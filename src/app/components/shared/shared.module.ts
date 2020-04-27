import { NgModule } from '@angular/core';
import { app_routing } from '../../app-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
  HeaderComponent,
  ModalComponent,
],
  imports: [
    CommonModule,
    app_routing,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    ModalComponent
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }