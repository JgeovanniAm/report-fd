import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { BillComponent } from './components/main/bill/bill.component';
import { SignComponent } from './components/main/sign/sign.component';


const APP_ROUTES: Routes = [
  {
    path:'',
    component: SignComponent,
  },
  {
    path:'home',
    component: HomeComponent,
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
    path: '**',
    pathMatch: 'full',
    redirectTo: '/'
  },
]

export const app_routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });
