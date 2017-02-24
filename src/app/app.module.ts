import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { GoogleBooksService } from '.././api/googlebooks.service';
import { UiModule }  from './ui/ui.module';
import { HomeComponent } from './home/home.component';
import { AppRouting } from './app.routing';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule,  AppRouting, UiModule, ],
  declarations: [ AppComponent, HomeComponent, FavoritesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ GoogleBooksService ]
})
export class AppModule { }