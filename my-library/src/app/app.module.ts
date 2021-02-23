import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyClockModule } from 'my-clock'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyClockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
