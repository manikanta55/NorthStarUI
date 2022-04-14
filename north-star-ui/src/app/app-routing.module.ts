import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';



const routes: Routes = [
  { path: 'contactus', component: FooterComponent },
  { path: 'gaalivaana', component: MovieInfoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home/gaalivaana', redirectTo: 'gaalivaana', pathMatch: 'full'},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
