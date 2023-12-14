import { Routes } from '@angular/router';
import { onlyAuthenticated } from './security/only-authenticated.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout.page').then(m => m.LayoutPage),
    canActivate: [ onlyAuthenticated ],
    children: [
      {
        path: 'create-trip',
        loadComponent: () => import('./layout/create-trip/create-trip.page').then(m => m.CreateTripPage)
      },
      {
        path: 'places-map',
        loadComponent: () => import('./layout/places-map/places-map.page').then(m => m.PlacesMapPage)
      },
      {
        path: 'trip-list',
        loadComponent: () => import('./layout/trip-list/trip-list.page').then(m => m.TripListPage)
      },
      {
        path: '',
        redirectTo: 'trip-list',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./security/login/login.page').then(m => m.LoginPage)
  },
];
