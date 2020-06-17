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
    const image4 = new Image();
    const image4_1 = new Image();
    const image4_2 = new Image();
    const image4_3 = new Image();
    const image4_4 = new Image();
    const image5 = new Image();
    const image6 = new Image();
    const image7 = new Image();
    const image8 = new Image();
    const image9 = new Image();
    const image9_1 = new Image();
    const image9_2 = new Image();

    image1.src = '../../assets/1.jpg';
    image2.src = '../../assets/2.jpg';
    image3.src = '../../assets/3.jpg';
    image4.src = '../../assets/4.jpg';
    image4_1.src = '../../assets/4_1.jpg';
    image4_2.src = '../../assets/4_2.jpg';
    image4_3.src = '../../assets/4_3.jpg';
    image4_4.src = '../../assets/4_4.jpg';
    image5.src = '../../assets/5.jpg';
    image6.src = '../../assets/6.jpg';
    image7.src = '../../assets/7.jpg';
    image8.src = '../../assets/8.jpg';
    image9.src = '../../assets/9.jpg';
    image9_1.src = '../../assets/9_1.jpg';
    image9_2.src = '../../assets/9_2.jpg';

    const extendedImage1 = new ExtendedImage(image1, 0, 0,0);
    const extendedImage2 = new ExtendedImage(image2, 0, 1,0);
    const extendedImage3 = new ExtendedImage(image3, 0, 2,0);
    const extendedImage4 = new ExtendedImage(image4, 0, 3,0);
    const extendedImage4_1 = new ExtendedImage(image4_1, -1, 3,-1.57079633);
    const extendedImage4_2 = new ExtendedImage(image4_2, -2, 3,-1.57079633);
    const extendedImage4_3 = new ExtendedImage(image4_3, -3, 3,-1.57079633);
    const extendedImage4_4 = new ExtendedImage(image4_4, -4, 3,-1.57079633);
    const extendedImage5 = new ExtendedImage(image5, 0, 4,0);
    const extendedImage6 = new ExtendedImage(image6, 0, 5,0);
    const extendedImage7 = new ExtendedImage(image7, 0, 6,0);
    const extendedImage8 = new ExtendedImage(image8, 0, 7,0);
    const extendedImage9 = new ExtendedImage(image9, 0, 8,0);
    const extendedImage9_1 = new ExtendedImage(image9_1, 1, 8,1.57079633);
    const extendedImage9_2 = new ExtendedImage(image9_2, 2, 8,1.57079633);

    this.images.push(extendedImage1);
    this.images.push(extendedImage2);
    this.images.push(extendedImage3);
    this.images.push(extendedImage4);
    this.images.push(extendedImage4_1);
    this.images.push(extendedImage4_2);
    this.images.push(extendedImage4_3);
    this.images.push(extendedImage4_4);
    this.images.push(extendedImage5);
    this.images.push(extendedImage6);
    this.images.push(extendedImage7);
    this.images.push(extendedImage8);
    this.images.push(extendedImage9);
    this.images.push(extendedImage9_1);
    this.images.push(extendedImage9_2);

  }

}
