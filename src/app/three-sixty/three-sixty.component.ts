import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
const create360Viewer = require('360-image-viewer');
const canvasFit = require('canvas-fit');

@Component({
  selector: 'app-three-sixty',
  templateUrl: './three-sixty.component.html',
  styleUrls: ['./three-sixty.component.css']
})
export class ThreeSixtyComponent implements OnInit {

  @ViewChild('canvasElement', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  constructor() { }

  ngOnInit(): void {
    const image=new Image();
    image.src='../../assets/1.jpg';
    image.onload = () => {

      const viewer = create360Viewer({
        image: image,
        canvas:this.canvas.nativeElement
      });

      const fit = canvasFit(viewer.canvas, window, window.devicePixelRatio);
      window.addEventListener('resize', fit, false);
      fit();


      viewer.start();


    };

  }
}
