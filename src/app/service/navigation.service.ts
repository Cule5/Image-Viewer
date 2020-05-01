import { Injectable } from '@angular/core';
import { ExtendedImage } from '../model/extended-image';
// import { ExtendedImage } from '../model/extended-image';
// import { Direction } from '../model/direction';
const create360Viewer = require('360-image-viewer');
const canvasFit = require('canvas-fit');

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private isInveredNvigation = false;
  private isInitialized = false;
  private images: ExtendedImage[]=[];
  private viewer: any;
  constructor() { }

  initializeParameters(viewer:any,images:string[]):void{
    if(this.isInitialized) {
      return;
    }
    this.viewer=viewer;


  }

  navigate(key: string): void{
    switch(key){
      case 'arrowup':
        break;
      case '':
        break;
      case '':
        break;
      case '':
        break;

      default:

    }

  }

}
