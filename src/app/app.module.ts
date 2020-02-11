import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SnowFlakeComponent } from './snow-flake/snow-flake.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReceptionComponent } from './reception/reception.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SnowFlakeComponent,
    ReceptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFontAwesomeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
