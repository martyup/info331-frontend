import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DownloadComponent } from './download/download.component';
import { MainContentComponent } from './main-content/main-content.component';
import { CheckedDirectiveDirective } from './main-content/checked-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DownloadComponent,
    MainContentComponent,
    CheckedDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
