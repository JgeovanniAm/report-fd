import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: './components/modules/sign/sign.module',
  },
  {
    path: 'home',
    loadChildren:'./components/modules/home/home.module',
  },
  {
    path: 'dashboard',
    loadChildren:'./components/modules/dashboard/dashboard.module',
  },
  {
    path: 'bill',
    loadChildren: './components/modules/bill/bill.module',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/'
  },
]

export const app_routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });
