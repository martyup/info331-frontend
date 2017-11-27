import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  optPwd:string;
  adminPwd:string;
  startDate:string;
  endDate:string;
  location:string;
  desc:string;
  email:string;

  //optPassword, adminPassword, startDate, endDate, location, description, email
  //
  // event:{} = {
  //   optPassword:"123",
  //   adminPassword:"admin123",
  //   startDate:"",
  //   endDate:"",
  //   location:"",
  //   description:"",
  //   email:""
  // }

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
  }

  postEvent(eventName:string, email:string, optPwd:string, adminPwd:string, startDate:string, endDate:string, location:string, guests:string, desc:string){

    this.optPwd = optPwd;
    this.adminPwd = adminPwd;
    this.startDate = startDate;
    this.endDate = endDate;
    this.location = location;
    this.desc = desc;
    this.email = email;

    var event:{} = {
      optPassword:this.optPwd,
      adminPassword:this.adminPwd,
      startDate:this.startDate,
      endDate:this.endDate,
      location:this.location,
      description:this.desc,
      email:this.email
    }

    console.log(event);

    // this.http.post('http://localhost:3000/api/events', {event: event}).subscribe(res => {
    //   console.log(res);
    // });
    this.router.navigate(['/eventCreated']);
  }


}
