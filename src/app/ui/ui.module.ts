import { NgModule } from '@angular/core';   
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ RouterModule, BrowserModule, FormsModule ],
  declarations: [ HeaderComponent, CardComponent, SearchComponent, PaginationComponent ],
  exports: [ HeaderComponent, CardComponent, SearchComponent, PaginationComponent ]
})
export class UiModule { }

/* Esse modulo é para organizar todos os componentes reutilizaveis desse projeto, que não sejam páginas e sejam elementos de UI */
