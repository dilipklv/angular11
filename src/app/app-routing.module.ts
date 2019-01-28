import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommunityComponent } from './community/community.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
   path: 'home',
   component: HomeComponent
  },
  {
    path: 'community',
    component: CommunityComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
