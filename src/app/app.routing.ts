import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';

const APP_ROUTES: Routes = [
    { path: 'favorites', component: FavoritesComponent },
    { path: 'book/:id', component: BookComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' }
]

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);