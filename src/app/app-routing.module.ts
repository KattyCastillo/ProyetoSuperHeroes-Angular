import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SharedComponent } from './components/shared/shared.component';

const ROUTES: Routes = [
{path:'routePath', component: Component},
{path:'home', component: HomeComponent},
{path:'about', component: AboutComponent},
{path:'heroes', component: HeroesComponent},
{path:'heroes/heroe/:id', component: HeroeComponent},
{path:'shared/:termino', component: SharedComponent},
{path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
