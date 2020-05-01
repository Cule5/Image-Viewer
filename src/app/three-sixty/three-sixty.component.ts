import { NavigationService } from './../service/navigation.service';
import { Component, OnInit, ViewChild, ElementRef, Input, HostListener } from '@angular/core';
const create360Viewer = require('360-image-viewer');
const canvasFit = require('canvas-fit');

@Component({
  selector: 'app-three-sixty',
  templateUrl: './three-sixty.component.html',
  styleUrls: ['./three-sixty.component.css']
})
export class ThreeSixtyComponent implements OnInit {

  private viewer: any;
  constructor() { }



  @ViewChild('canvasElement', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  @Input()
  images: string[];

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
      const image=new Image();
      image.src='../../assets/2 .jpg';
      image.onload = () => {

      this.viewer.texture(image);

      };
  }

  ngOnInit(): void {
    const image=new Image();
    image.src='../../assets/1.jpg';
    image.onload = () => {

    this. viewer = create360Viewer({
        image,
        canvas: this.canvas.nativeElement
    });

    const fit = canvasFit(this.viewer.canvas, window, window.devicePixelRatio);
    window.addEventListener('resize', fit, false);
    fit();
    this.viewer.start();

    };

  }

}
