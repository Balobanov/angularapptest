import {Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit{

  @Input()
  defaultColor: string = 'white';

  @Input()
  highlightColor: string = 'green';

  @HostListener('mouseenter')
  mouseEnter(){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseLeave(){
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor')
  get getColor() {
    return this.backgroundColor;
  }

  private backgroundColor: string;

  constructor(private elementWithHighLightDirective: ElementRef, private render: Renderer) {
    //this.render.setElementStyle(elementWithHighLightDirective.nativeElement, 'backgroundColor', this.backgroundColor);
  }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
}
