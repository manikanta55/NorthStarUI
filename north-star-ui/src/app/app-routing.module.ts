import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GabbarSinghInfoComponent } from './movie-information/gabbar-singh-info/gabbar-singh-info.component';
import { GhostInfoComponent } from './movie-information/ghost-info/ghost-info.component';
import { LakshyaInfoComponent } from './movie-information/lakshya-info/lakshya-info.component';
import { MovieInfoComponent } from './movie-information/movie-info/movie-info.component';



const routes: Routes = [
  { path: 'contactus', component: FooterComponent },
  { path: 'gaalivaana', component: MovieInfoComponent },
  { path: 'sardaar-gabbar-singh', component: GabbarSinghInfoComponent},
  { path: 'ghost', component: GhostInfoComponent},
  { path: 'lakshya', component: LakshyaInfoComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},

  //Redirecting to movie-info
  { path: 'home/gaalivaana', redirectTo: 'gaalivaana', pathMatch: 'full'},
  { path: 'home/sardaar-gabbar-singh', redirectTo: 'sardaar-gabbar-singh', pathMatch: 'full'},
  { path: 'home/ghost', redirectTo: 'ghost', pathMatch: 'full'},
  { path: 'home/lakshya', redirectTo: 'lakshya', pathMatch: 'full'},

   //home page path
  { path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
