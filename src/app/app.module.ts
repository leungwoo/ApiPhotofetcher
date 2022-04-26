import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DisplayphotoComponent } from './displayphoto/displayphoto.component';
import { DisplayVideoComponent } from './display-video/display-video.component';

@NgModule({
  declarations: [AppComponent, DisplayphotoComponent, DisplayVideoComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
