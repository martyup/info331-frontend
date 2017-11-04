import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DownloadComponent } from './event/download/download.component';
import { MainContentComponent } from './event/main-content/main-content.component';
import { EventComponent } from './event/event.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes:Routes = [
  { path: '', component:FrontpageComponent },
  { path: 'event', component:EventComponent },
  { path: 'event/:eventPin', component:EventComponent },
  { path: 'createEvent', component:CreateEventComponent },
  { path: 'about', component:AboutComponent },
  { path: 'contact', component:ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DownloadComponent,
    MainContentComponent,
    EventComponent,
    CreateEventComponent,
    FrontpageComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
