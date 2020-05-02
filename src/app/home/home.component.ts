import { ExtendedImage } from './../model/extended-image';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public images: Array<ExtendedImage> = new Array<ExtendedImage>();
  constructor() { }


  ngOnInit(): void {
    const image1 = new Image();
    const image2 = new Image();
    const image3 = new Image();
    image1.src = '../../assets/1.jpg';
    image2.src = '../../assets/2.jpg';
    image3.src = '../../assets/3.jpg';
    const extendedImage1 = new ExtendedImage(image1, 0, 0);
    const extendedImage2 = new ExtendedImage(image2, 0, 1);
    const extendedImage3 = new ExtendedImage(image3, 0, 2);
    this.images.push(extendedImage1);
    this.images.push(extendedImage2);
    this.images.push(extendedImage3);
  }

}
