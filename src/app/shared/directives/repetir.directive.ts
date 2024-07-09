import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appRepetir]',
})
export class RepetirDirective implements OnChanges {
  @Input()
  appRepetir = 10;

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<unknown>
  ) {
    this.updateView();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateView();
  }

  updateView() {
    this.viewContainer.clear();

    for (let i = 0; i < this.appRepetir; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
