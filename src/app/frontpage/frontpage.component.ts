import { Component, OnInit, OnDestroy } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit, OnDestroy {

  constructor(private router:Router) { }

  ngOnInit() {
    document.body.style.backgroundImage = "url('../assets/images/fijiidk.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
  }

  ngOnDestroy(){
    document.body.style.backgroundImage = "none";
  }

  eventPin:number;

  joinEvent(eventPin:number, wrongPin:HTMLDivElement){
    if(eventPin){
      this.eventPin = eventPin;
      this.router.navigate(['/event', eventPin]);
    }
    else {
      this.eventPin = eventPin;
      wrongPin.style.display = 'block';
    }

  }

}
