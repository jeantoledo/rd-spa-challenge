import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { GoogleBooksService } from '.././api/google-books.service';
import { UiModule }  from './ui/ui.module';
import { HomeComponent } from './home/home.component';
import { AppRouting } from './app.routing';
import { FavoritesComponent } from './favorites/favorites.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { FavoritesService } from '../services/favorites.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule,  AppRouting, UiModule, FormsModule ],
  declarations: [ AppComponent, HomeComponent, FavoritesComponent, BookComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ GoogleBooksService, FavoritesService ]
})
export class AppModule { }

/* Módulo principal da aplicação */
