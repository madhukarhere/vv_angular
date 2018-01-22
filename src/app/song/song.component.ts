import { SongService } from './../song.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router/src/config';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {

  song = {};

  constructor(private router: Router, private route: ActivatedRoute, private songService: SongService) {
    let id = this.route.snapshot.paramMap.get('id');
    let title = this.route.snapshot.paramMap.get('title');
    console.log('id:', id);
    console.log('title:', title);
    this.song = songService.getSong(id);
  }

}
