import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SongsComponent } from './songs/songs.component';
import { AboutComponent } from './about/about.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { ContactComponent } from './contact/contact.component';
import { RingtonesComponent } from './ringtones/ringtones.component';
import { AllsongsComponent } from './allsongs/allsongs.component';
import { SongsbygenreComponent } from './songsbygenre/songsbygenre.component';
import { SongsbyalphabetComponent } from './songsbyalphabet/songsbyalphabet.component';
import { FooterComponent } from './footer/footer.component';


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
    AllsongsComponent,
    SongsbygenreComponent,
    SongsbyalphabetComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'downloads', component: DownloadsComponent },
      { path: 'ringtones', component: RingtonesComponent },
      { path: 'songs/all', component: SongsComponent },
      { path: 'songs/genre', component: SongsbygenreComponent },
      { path: 'songs/alphabetical', component: SongsbyalphabetComponent }
    ]),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
