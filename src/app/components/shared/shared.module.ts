import { NgModule } from '@angular/core';
import { app_routing } from '../../app-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { SliderComponent } from './slider/slider.component';
import { PanelDashboardComponent } from './panel-dashboard/panel-dashboard.component';
import { FormPanelComponent } from './form-panel/form-panel.component';

@NgModule({
  declarations: [
  HeaderComponent,
  ModalComponent,
  SliderComponent,
  PanelDashboardComponent,
  FormPanelComponent,
],
  imports: [
    CommonModule,
    app_routing,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    ModalComponent,
    SliderComponent,
    PanelDashboardComponent,
    FormPanelComponent
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }