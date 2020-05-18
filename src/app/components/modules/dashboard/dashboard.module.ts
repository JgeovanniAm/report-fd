import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { AccountComponent } from '../../core/account/account.component';
import { AlertComponent } from '../../core/alert/alert.component';
import { CalTableComponent } from '../../core/cal-table/cal-table.component';
import { FormPanelComponent } from '../../core/form-panel/form-panel.component';
import { PanelDashboardComponent } from '../../core/panel-dashboard/panel-dashboard.component';
import { RowCardComponent } from '../../core/row-card/row-card.component';
import { SliderComponent } from '../../core/slider/slider.component';
// modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    AccountComponent,
    AlertComponent,
    CalTableComponent,
    FormPanelComponent,
    PanelDashboardComponent,
    RowCardComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: []
})
export default class DashboardModule { }