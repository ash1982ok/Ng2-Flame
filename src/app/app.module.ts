import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './components/header.component';
import { FlameComponent } from './components/flame.component';

@NgModule({
  imports:      [ BrowserModule],
  declarations: [ AppComponent,HeaderComponent,FlameComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
