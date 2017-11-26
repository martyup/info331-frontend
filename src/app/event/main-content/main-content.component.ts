import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  results: string[] = [];
  private defaultPath:string = "~/git/Info331-Project/";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('http://localhost:3000/test').subscribe(data => {
      // Read the result field from the JSON response.
      this.results.push(data.toString());
      //img src: ""
    //   this.results = data['code'];
      console.log("tostring: " + data.toString());
      console.log("kun data: " + data);
      console.log("---- valueOf ----" + data.valueOf());
      console.log("---- this.results ----" + this.results);
    });
  }





}
