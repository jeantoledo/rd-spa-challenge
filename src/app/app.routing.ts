import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    { path: 'favorites', component: FavoritesComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' }
]

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);