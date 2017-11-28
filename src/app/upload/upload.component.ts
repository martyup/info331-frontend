import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {



  constructor(private http:HttpClient) { }

  ngOnInit() {

  }

  // uploadPictures(image:any){
  //
  //   var file:{} = {
  //     name:image.target.files[0].name,
  //     type:image.target.files[0].type,
  //     size:image.target.files[0].size,
  //   }
  //
  //   // Make the HTTP request:
  //   this.http.post('http://localhost:3000/api/events/1000/images',{fileMetadata:file},
  //   { headers:new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXZlbnRjb2RlIjoiMTAwMCIsImlhdCI6MTUxMDcwMDk2NX0.iGRADdEYzui3R0fRnlJEkyPL8YEmm9hOGbvMJlnBsaw') }).subscribe(data => {
  //     this.http.put(data['url'], image.target.files[0],   { headers:new HttpHeaders().set('Content-Type', file['type']) });
  //   });
  // }

}
