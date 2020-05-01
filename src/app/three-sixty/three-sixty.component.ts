import { NavigationService } from './../service/navigation.service';
import { Component, OnInit, ViewChild, ElementRef, Input, HostListener } from '@angular/core';
const create360Viewer = require('360-image-viewer');
const canvasFit = require('canvas-fit');
const controls = require('orbit-controls')

@Component({
  selector: 'app-three-sixty',
  templateUrl: './three-sixty.component.html',
  styleUrls: ['./three-sixty.component.css']
})
export class ThreeSixtyComponent implements OnInit {

  private viewer: any;
  private imagesObj: HTMLImageElement[] = [];
  constructor() { }



  @ViewChild('canvasElement', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  @Input()
  images: string[];

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.viewer.texture(this.imagesObj[1]);
  }

  ngOnInit(): void {
    var image1=new Image();
    image1.src='../../assets/1.jpg';
    image1.onload = () => {

    this. viewer = create360Viewer({
        image:image1,
        canvas: this.canvas.nativeElement,
        theta:30*Math.PI
    });

    var image2=new Image();
    image2.src='../../assets/2 .jpg';
    this.imagesObj.push(image1);
    this.imagesObj.push(image2);
    const fit = canvasFit(this.viewer.canvas, window, window.devicePixelRatio);
    window.addEventListener('resize', fit, false);
    fit();
    this.viewer.start();

    };

  }

}
