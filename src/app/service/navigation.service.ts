import { element } from 'protractor';
import { ExtendedImage } from './../model/extended-image';
import { Injectable } from '@angular/core';
const create360Viewer = require('360-image-viewer');
const canvasFit = require('canvas-fit');

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private isInveredNvigation = false;
  private isInitialized = false;
  private images: Array<ExtendedImage> = new Array<ExtendedImage>();
  private currentImage: ExtendedImage;

  private viewer: any;
  constructor() { }

  public initialize(viewer: any, images: Array<ExtendedImage>): void{
    if (this.isInitialized) {
      return;
    }
    this.viewer = viewer;
    this.images = images;

    const fit = canvasFit(viewer.canvas, window, window.devicePixelRatio);
    window.addEventListener('resize', fit, false);
    fit();
    viewer.texture(images[0].image);
    viewer.start();
    this.currentImage=images[0];

  }

  public navigate(key: string): void{
    let newX = 0;
    let newY = 0;
    switch (key){
      case 'ArrowUp':
        newY = this.currentImage.y + 1;
        break;
      case 'ArrowDown':
        newY = this.currentImage.y - 1;
        break;
      case 'ArrowLeft':
        newX = this.currentImage.x - 1;
        break;
      case 'arrowright':
        newX = this.currentImage.x + 1;
        break;
    }

    const image = this.images.find((element) => {
      return element.x === newX && element.y === newY;
    });

    if (image !== undefined){
      this.viewer.texture(image.image);
      this.currentImage = image;
    }
  }
}
