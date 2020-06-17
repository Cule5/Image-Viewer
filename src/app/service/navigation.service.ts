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
  private factor:number;
  private isInitialized = false;
  private images: Array<ExtendedImage> = new Array<ExtendedImage>();
  private currentImage: ExtendedImage;
  private prevImage:ExtendedImage;

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
    this.prevImage=images[0];
  }

  public navigate(key: string): void{
    let newX = this.currentImage.x;
    let newY = this.currentImage.y;
    let currentTheta=this.viewer.controls.theta - this.currentImage.angleShift;
    
    this.factor=1;
    
    switch (key){
      case 'ArrowUp':
        if(currentTheta<=0 && currentTheta > -0.7853981634 ){
          newX = this.currentImage.x - 1*this.factor;
        }
        else if(currentTheta < -0.7853981634 && currentTheta > -2.3561944902 ){
          newY = this.currentImage.y + 1*this.factor;
        }
        else if(currentTheta < -2.3561944902 && currentTheta > -3.1415926536){
          newX = this.currentImage.x + 1*this.factor;
        }
        else if(currentTheta>=0 && currentTheta < 0.7853981634 ){
          newX = this.currentImage.x - 1*this.factor;
        }
        else if(currentTheta>=0.7853981634 && currentTheta < 2.3561944902 ){
          newY = this.currentImage.y - 1*this.factor;
        }
        else if(currentTheta>=2.3561944902 && currentTheta < 3.1415926536 ){
          newX = this.currentImage.x + 1*this.factor;
        }
        break;
      case 'ArrowDown':
        if(currentTheta<=0 && currentTheta > -0.7853981634 ){
          newX = this.currentImage.x + 1*this.factor;
        }
        else if(currentTheta < -0.7853981634 && currentTheta > -2.3561944902 ){
          newY = this.currentImage.y - 1*this.factor;
        }
        else if(currentTheta < -2.3561944902 && currentTheta > -3.1415926536){
          newX = this.currentImage.x - 1*this.factor;
        }
        else if(currentTheta>=0 && currentTheta < 0.7853981634 ){
          newX = this.currentImage.x + 1*this.factor;
        }
        else if(currentTheta>=0.7853981634 && currentTheta < 2.3561944902 ){
          newY = this.currentImage.y + 1*this.factor;
        }
        else if(currentTheta>=2.3561944902 && currentTheta < 3.1415926536 ){
          newX = this.currentImage.x - 1*this.factor;
        }
        break;
    }

    const image = this.images.find((element) => {
      return element.x === newX && element.y === newY;
    });

    if (image !== undefined){
      this.viewer.texture(image.image);
      this.prevImage=this.currentImage;
      this.currentImage = image;
      if(this.prevImage.angleShift===0)
        this.viewer.controls.theta+=this.currentImage.angleShift;
      
      if(this.currentImage.angleShift===0 && this.prevImage.angleShift!==0)
      this.viewer.controls.theta-=this.prevImage.angleShift;
    }
  }
}
