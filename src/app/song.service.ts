import { Injectable } from '@angular/core';

@Injectable()
export class SongService {

  constructor() { }

  getSong(id) {
    console.log('from service:', id);
    let song =  {
      id: 1,
      title: 'Hello world 1',
      desc: `What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the ...`,
      url: 'http://www.vijayavipanchi.org/FileHandle.ashx?FileID=124',
      downloadUrl: 'http://www.vijayavipanchi.org/FileHandle.ashx?FileID=124'
    };
    return song;
  }


}
