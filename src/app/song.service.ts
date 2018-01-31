import { Injectable } from '@angular/core';

@Injectable()
export class SongService {

  constructor() { }

  getSong(id) {
    console.log('from service:', id);
    let song =  {
      id: 1,
      size: '5.9 MB',
      downloads: '90',
      hits: '190',
      author: 'Vijayavipanchi.org',
      genre: 'Patriotic',

      title: 'Hello world 1',
      desc: 
      `మాధవా నీ ప్రేరణేకద సంఘ శక్తికి మూలము 
      నీ మార్గమేకద  హిందు జనతా సంఘటనకాధారము
      
      మౌనివై నీ యోగ బలమును సంఘ సేవలొ  ధారవోసి  
      జ్ఞానివై విజ్ఞాన దీపపు కాంతులను దశ దిశలు చూపి   
      శక్తివై నవయువత మదిలో దేశ భక్తిని వెలికితీసి 
      యుక్తిగా మన సంఘ రథమును   విజయపథమున నడిపినట్టి   ||మాధవా ||
      
      నీ మాటలే మంత్రాలుగా నీ చూపులే వేదాలుగా 
      హిందు జాతిని ఒకటి చేయగ ఏకతా యజ్ఞమ్ముచేసి 
      సంఘశాఖను  కల్పతరువు అఖండభారతమంతవేసి
      పూజ్య కేశవునాశయాలకు రూపమై  మా ముందు నిలిచిన ||మాధవా||`,
      url: 'http://www.vijayavipanchi.org/FileHandle.ashx?FileID=4710007',
      downloadUrl: 'http://www.vijayavipanchi.org/FileHandle.ashx?FileID=477'
    };
    return song;
  }


}
