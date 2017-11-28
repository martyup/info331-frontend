import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  private results: string[] = [];
  private eventCode:number;
  private getUrl:string = "http://localhost:3000/api/events/" + 1000 + "/images";
  //private defaultPath:string = "~/git/Info331-Project/";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('http://localhost:3000/api/events/1000/images',
    //this.http.get('https://my-project-1505152710417.appspot.com/api/events/1000/images',
    { headers:new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXZlbnRjb2RlIjoiMTAwMCIsImlhdCI6MTUxMDcwMDk2NX0.iGRADdEYzui3R0fRnlJEkyPL8YEmm9hOGbvMJlnBsaw') }).subscribe(data => {
      // Read the result field from the JSON response.
      //this.results.push(data.toString());
      //console.log(data[0].path);
      console.log(this.getUrl);
      for(var image in data){

        //if(!(data[image].safeSearch.adult.contains("LIKELY") || data[image].safeSearch.violence.contains("LIKELY"))){
        this.results.push(data[image].path)
        //console.log(data[image].path);
        //}
      }
      //img src: ""
      //this.results = data['code'];
      // console.log("tostring: " + data.toString());
      // console.log("kun data: " + data);
      // console.log("---- valueOf ----" + data.valueOf());
      // console.log("---- this.results ----" + this.results);
    });
  }





}
