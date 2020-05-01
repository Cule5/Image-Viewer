import { Injectable } from '@angular/core';
import { ExtendedImage } from '../model/extended-image';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private images: ExtendedImage[];
  constructor() { }


}
