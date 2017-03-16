import { NgModule } from '@angular/core';   
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [ RouterModule, BrowserModule, FormsModule ],
  declarations: [ HeaderComponent, CardComponent, SearchComponent, PaginationComponent, LoadingComponent, AlertComponent ],
  exports: [ HeaderComponent, CardComponent, SearchComponent, PaginationComponent, LoadingComponent, AlertComponent ]
})
export class UiModule { }

/* Esse modulo é para organizar todos os componentes reutilizaveis desse projeto, que não sejam páginas e sejam elementos de UI */
