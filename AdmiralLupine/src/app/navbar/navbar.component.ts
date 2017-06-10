import { Component, OnInit } from '@angular/core';
import { TLImageGetService } from 'app/tlimage-get/tlimage-get.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 imagetypes
 hardcodedtypes
  constructor(private imageService: TLImageGetService) { 
      imageService.getAllImageTypes().subscribe(res=>{this.imagetypes = res; console.log(res)});
     this.hardcodedtypes = ['test','test2'];
  }

  ngOnInit() {
    
  }

}
