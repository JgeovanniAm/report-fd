import { Routes, RouterModule } from '@angular/router';


const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => {
      return import('./components/modules/sign/sign.module').then(module => module.SignModule)
    },
  },
  {
    path: 'home',
    loadChildren: () => {
      return import('./components/modules/home/home.module').then(module => module.HomeModule)
    },
  },
  {
    path: 'dashboard',
    loadChildren: () => {
      return import('./components/modules/dashboard/dashboard.module').then(module => module.DashboardModule)
    },
  },
  {
    path: 'bill',
    loadChildren: () => {
      return import('./components/modules/bill/bill.module').then(module => module.BillModule)
    },
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/'
  },
]

export const app_routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });
