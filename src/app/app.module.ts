import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmResultsComponent } from './film-results/film-results.component';
import { AppService } from './app.service';
import { HttpClient,  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    FilmListComponent,
    FilmDetailComponent,
    FilmResultsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
