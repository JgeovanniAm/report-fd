import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { BillComponent } from './components/main/bill/bill.component';
import { SavingComponent } from './components/main/saving/saving.component';
import { SignComponent } from './components/main/sign/sign.component';


const APP_ROUTES: Routes = [
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'',
    component: SignComponent,
  },
  {
    path:'dashboard',
    component: DashboardComponent ,
  },
  {
    path:'bill',
    component: BillComponent,
  },
  {
    path:'saving',
    component: SavingComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/'
  },
]

export const app_routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });
