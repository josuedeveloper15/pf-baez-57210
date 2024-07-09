import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appResaltado]',
})
export class ResaltadoDirective implements OnChanges {
  @Input()
  color = 'yellow';

  constructor(private elementRef: ElementRef) {
    this.updateBgColor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateBgColor();
  }

  updateBgColor() {
    this.elementRef.nativeElement.style.backgroundColor = this.color;
  }
}
