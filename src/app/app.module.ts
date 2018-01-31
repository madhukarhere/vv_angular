
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatInputModule, MatButtonModule, MatCheckboxModule, MatSelectModule, MatCheckbox } from '@angular/material';
import {Component} from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SongsComponent } from './songs/songs.component';
import { AboutComponent } from './about/about.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { ContactComponent } from './contact/contact.component';
import { RingtonesComponent } from './ringtones/ringtones.component';
import { SongsbygenreComponent } from './songsbygenre/songsbygenre.component';
import { SongsbyalphabetComponent } from './songsbyalphabet/songsbyalphabet.component';
import { FooterComponent } from './footer/footer.component';
import { SongComponent } from './song/song.component';
import { TrimPipe } from './trim.pipe';
import { MenuLinksComponent } from './menu-links/menu-links.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';

import { ContactService } from './contact.service';
import { SongsService } from './songs.service';
import { SongService } from './song.service';
import { CategoryService } from './category.service';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'ringtones', component: RingtonesComponent },
  { path: 'songs/genre/:id/:title', component: SongsComponent },
  { path: 'songs/all', component: SongsComponent },
  { path: 'songs/alphabetical', component: SongsbyalphabetComponent },
  { path: 'song/:id/:title', component: SongComponent }
];

const mtComponents = [
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SongsComponent,
    AboutComponent,
    DownloadsComponent,
    ContactComponent,
    RingtonesComponent,
    SongsbygenreComponent,
    SongsbyalphabetComponent,
    FooterComponent,
    SongComponent,
    TrimPipe,
    MenuLinksComponent,
    CategoryMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CustomFormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    mtComponents,
    CarouselModule.forRoot()
  ],
  providers: [
    ContactService,
    SongsService,
    SongService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
