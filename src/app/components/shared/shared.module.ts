import { NgModule } from '@angular/core';
import { app_routing } from '../../app-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { SliderComponent } from './slider/slider.component';
import { PanelDashboardComponent } from './panel-dashboard/panel-dashboard.component';
import { FormPanelComponent } from './form-panel/form-panel.component';
import { AlertComponent } from './alert/alert.component';
import { LoaderComponent } from './loader/loader.component';
import { AccountComponent } from './account/account.component';
import { RowCardComponent } from './row-card/row-card.component';
import { LoadcountComponent } from './loadcount/loadcount.component';
import { CalTableComponent } from './cal-table/cal-table.component';
import { TabBillComponent } from './tab-bill/tab-bill.component';
import { dateFormt } from 'src/app/pipes/date';

@NgModule({
  declarations: [
  HeaderComponent,
  ModalComponent,
  SliderComponent,
  PanelDashboardComponent,
  FormPanelComponent,
  AlertComponent,
  LoaderComponent,
  AccountComponent,
  RowCardComponent,
  LoadcountComponent,
  CalTableComponent,
  TabBillComponent,
  dateFormt
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
    FormPanelComponent,
    LoaderComponent,
    AlertComponent,
    TabBillComponent
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }