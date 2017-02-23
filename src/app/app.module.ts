import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { ChuckNorrisJokesService } from '.././api/chuckNorrisJokes.service';
import { UiModule }  from './ui/ui.module';
import { RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, UiModule, RouterModule.forRoot([
        { path: 'favorites', component: FavoritesComponent },
        { path: '', component: HomeComponent }
    ]) ],
  declarations: [ AppComponent, FavoritesComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ChuckNorrisJokesService ]
})
export class AppModule { }