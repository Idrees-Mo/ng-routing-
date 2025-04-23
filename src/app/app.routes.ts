import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageComponent } from './page/page.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './settings/profile/profile.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./products/products.component').then((m) => m.ProductsComponent),
  },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
    canActivate: [authGuard()], // Guard to protect the settings route
  },
  { path: 'pages/:pageId', component: PageComponent }, // Route with a parameter
  {
    path: 'old-pages/:pageId',
    redirectTo: (route) => {
      return `/pages/${route.params['pageId']}`;
    },
  }, // Redirect from old page to new page
  { path: 'notfound', component: NotFoundComponent },

  { path: '**', redirectTo: 'notfound' }, // Wildcard route for a 404 page
];
