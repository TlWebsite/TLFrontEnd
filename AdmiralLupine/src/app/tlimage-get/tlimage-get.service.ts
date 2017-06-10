import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class TLImageGetService {
  domain = 'http://ec2-52-88-81-0.us-west-2.compute.amazonaws.com/TLWebAPI_deploy/api/Images/';

  constructor(private http: Http) {
  }

  getAllImages() {
    this.http.get(this.domain + "GetAllImages").subscribe(res => {
      const data = res.json();
      console.log(data);
      return data;
    })
  }

  getAllImageTypes() {
    return this.http.get(this.domain + "GetAllImageTypes").map(res => res.json());

    
  }

  getAllImageTags() {
    this.http.get(this.domain + "GetAllImageTags").subscribe(res => {
      const data = res.json();
      console.log(data);
      return data;
    })
  }

  getImageById(id) {
    this.http.get(this.domain + "GetImage/" + id).subscribe(res => {
      const data = res.json();
      console.log(data);
      return data;
    })
  }

  getImagesByType(type) {
    this.http.get(this.domain + "GetImagesByType?typeName" + type).subscribe(res => {
      const data = res.json();
      console.log(data);
      return data;
    })
  }

  getImagesByTag(tag) {
    this.http.get(this.domain + "GetImagesByType?tagName" + tag).subscribe(res => {
      const data = res.json();
      console.log(data);
      return data;
    })
  }

  /*
    getImagesWithOneOfMultipleTags(tags) {
      this.http.post()
      this.http.get(this.domain + "GetImagesWithOneOfMultipleTags").subscribe(res => {
        const data = res.json();
        console.log(data);
        return data;
      })
    }
  */

}
