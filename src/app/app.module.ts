import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountriesComponent } from '../components/countries/countries.component';
import { DragComponent } from '../components/drag/drag.component';
import { VirtualComponent } from '../components/virtual/virtual.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, VirtualComponent, DragComponent, CountriesComponent],
  imports: [BrowserModule, AppRoutingModule, ScrollingModule, DragDropModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
