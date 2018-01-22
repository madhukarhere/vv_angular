import { SongsService } from './../songs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs;

  constructor(private songsService: SongsService) {
    this.songs = songsService.getSongs();
  }

  ngOnInit() {
  }

}
