import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  private results: string[] = [];
  //private defaultPath:string = "~/git/Info331-Project/";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('http://localhost:3000/api/events/1000/images').subscribe(data => {
      // Read the result field from the JSON response.
      //this.results.push(data.toString());
      //console.log(data[0].path);

      for(var image in data){
        this.results.push(data[image].path)
        //console.log(data[image].path);
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
