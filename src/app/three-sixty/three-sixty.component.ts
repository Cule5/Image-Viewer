import { ExtendedImage } from './../model/extended-image';
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

  @ViewChild('canvasElement', { static: true })
  public canvas: ElementRef<HTMLCanvasElement>;

  @Input()
  public images: Array<ExtendedImage> = new Array<ExtendedImage>();

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.navigationService.navigate(event.key);
  }

  public constructor(private navigationService: NavigationService) { }

  public ngOnInit(): void {
    this.images[0].image.onload = () => {
      const viewer = create360Viewer({
        canvas: this.canvas.nativeElement
      });
      this.navigationService.initialize(viewer, this.images);
    };
  }

}
