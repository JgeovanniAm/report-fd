import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { BillComponent } from './bill/bill.component';
import { SavingComponent } from './saving/saving.component';
import { SignComponent } from './sign/sign.component';
// modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { app_routing } from '../../app-routing';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    BillComponent,
    SavingComponent,
    SignComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    app_routing
  ],
  exports: [
    DashboardComponent,
    HomeComponent,
    BillComponent,
    SavingComponent,
    SignComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: []
})
export class MainModule { }