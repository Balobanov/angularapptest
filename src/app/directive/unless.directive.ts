import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

  @Input()
  set unless(condition: boolean){
    if(!condition) {
      this.vcRef.createEmbeddedView(this.temp);
    }
    else
      this.vcRef.clear();
  }

  constructor(private temp: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
