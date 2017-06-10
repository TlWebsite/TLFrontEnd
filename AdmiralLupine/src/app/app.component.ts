import { Component } from '@angular/core';
import { TLImageGetService } from 'app/tlimage-get/tlimage-get.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private imageService: TLImageGetService)
  {
  }

  GetAllImages($event) {
    this.imageService.getAllImages();
  }
}
