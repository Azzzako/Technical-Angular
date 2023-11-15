import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursosListModule } from './cursos/cursos-list.module';
import { HttpClientModule } from '@angular/common/http';
import { FullpageComponent } from './cursos/pages/cursos/fullPage.component';
import { SearchbarComponent } from './cursos/components/searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    FullpageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    CursosListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
