import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';


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
import { ContactService } from './contact.service';
import { SongsService } from './songs.service';
import { SongService } from './song.service';
import { SongComponent } from './song/song.component';
import { TrimPipe } from './trim.pipe';


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
    TrimPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'downloads', component: DownloadsComponent },
      { path: 'ringtones', component: RingtonesComponent },
      { path: 'songs/all', component: SongsComponent },
      { path: 'song/:id/:title', component: SongComponent },
      { path: 'songs/genre', component: SongsbygenreComponent },
      { path: 'songs/alphabetical', component: SongsbyalphabetComponent }
    ]),
    NgbModule.forRoot()
  ],
  providers: [
    ContactService,
    SongsService,
    SongService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
