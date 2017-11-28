import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-created',
  templateUrl: './event-created.component.html',
  styleUrls: ['./event-created.component.css']
})
export class EventCreatedComponent implements OnInit {

  eventCode:number = 1000;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToEvent(){
    this.router.navigate(['/api/events/' + this.eventCode]);
  }

}
