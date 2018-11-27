import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { Poney } from '../interfaces/poney';

@Directive({
  selector: '[ambRainbow]'
})
export class RainbowDirective {

  @Input('ambRainbow') color: string
  @Input() poney: Poney
  @Input() isEven: boolean

  constructor(private element: ElementRef) {}

  ngOnInit() {
    if (this.isEven) {
      this.element.nativeElement.style.backgroundColor = this.color
    }
  }

  @HostListener('dblclick') handleDblclick() {
    this.poney.distance += 5

    this.poney.img = this.poney.img.replace('running', 'rainbow')

    setTimeout(() => {
      this.poney.img = this.poney.img.replace('rainbow', 'running')
    }, 1000)
  }
}
