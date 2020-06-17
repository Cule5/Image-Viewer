

export class ExtendedImage{

  public image: HTMLImageElement;

  public x:number;

  public y:number;

  public angleShift:number;

  constructor(image:HTMLImageElement,x:number,y:number,angleShift:number){
    this.image=image;
    this.x=x;
    this.y=y;
    this.angleShift=angleShift;
  }
}
