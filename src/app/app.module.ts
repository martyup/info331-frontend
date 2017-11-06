import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { PicturesService } from './pictures.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DownloadComponent } from './event/download/download.component';
import { MainContentComponent } from './event/main-content/main-content.component';
import { EventComponent } from './event/event.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UploadComponent } from './upload/upload.component';

const routes:Routes = [
  { path: '', component:FrontpageComponent },
  //lag en default, for routen uten eventpin
  { path: 'event', component:EventComponent },
  { path: 'api/events/:eventPin', component:EventComponent },
  { path: 'createEvent', component:CreateEventComponent },
  { path: 'about', component:AboutComponent },
  { path: 'contact', component:ContactComponent },
  //her også
  { path: 'api/upload/:eventPin', component:UploadComponent },
  { path: 'upload', component:UploadComponent }
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
    AboutComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PicturesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
