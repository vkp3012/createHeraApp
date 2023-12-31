import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './MyComponents/heroes/heroes.component';
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from './MyComponents/hero-detail/hero-detail.component';
import { MessagesComponent } from './MyComponents/messages/messages.component';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
