import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { AboutNorthStarComponent } from './about-north-star/about-north-star.component';
import { NothStarCaptionComponent } from './noth-star-caption/noth-star-caption.component';
import { BrandPartnersComponent } from './brand-partners/brand-partners.component';
import { MovieInfoComponent } from './movie-information/movie-info/movie-info.component';
import { HomeComponent } from './home/home.component';
import { GabbarSinghInfoComponent } from './movie-information/gabbar-singh-info/gabbar-singh-info.component';
import { GhostInfoComponent } from './movie-information/ghost-info/ghost-info.component';
import { LakshyaInfoComponent } from './movie-information/lakshya-info/lakshya-info.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    FooterComponent,
    AboutNorthStarComponent,
    NothStarCaptionComponent,
    BrandPartnersComponent,
    MovieInfoComponent,
    HomeComponent,
    GabbarSinghInfoComponent,
    GhostInfoComponent,
    LakshyaInfoComponent,
    ProjectDetailsComponent,
    AppMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
