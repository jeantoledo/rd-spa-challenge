import { NgModule } from '@angular/core';   
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [ RouterModule, BrowserModule ],
  declarations: [ HeaderComponent, CardComponent, SearchComponent ],
  exports: [ HeaderComponent, CardComponent, SearchComponent ]
})
export class UiModule { }