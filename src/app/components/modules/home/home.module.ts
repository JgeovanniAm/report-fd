import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
// modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }