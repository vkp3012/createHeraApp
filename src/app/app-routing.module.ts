import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { HeroesComponent } from './MyComponents/heroes/heroes.component';
import { HeroDetailComponent } from './MyComponents/hero-detail/hero-detail.component';
import { MessagesComponent } from './MyComponents/messages/messages.component';
const routes: Routes = [
  {path:"",redirectTo:"/dashboard",pathMatch:"full"},
  {path:"dashboard",component:DashboardComponent},
  {path:"detail/:id",component:HeroDetailComponent},
  {path:"heroes",component:HeroesComponent},
  {path:"message",component:MessagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
