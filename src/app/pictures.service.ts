import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class PicturesService {

  serverUrl:string = "http://localhost:3000/api/events/1000/images";

  constructor(private http:Http) { }

  //get pictures fra server
  // getEventPictures(){
  //   this.http.get(this.serverUrl);
  // }

}
