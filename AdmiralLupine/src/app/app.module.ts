import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { TLImageGetService } from 'app/tlimage-get/tlimage-get.service';
import { DrawingsComponent } from './drawings/drawings.component';
import { ImageComponent } from './image/image.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DrawingsComponent,
    ImageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TLImageGetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
