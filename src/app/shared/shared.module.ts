import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './pipes/reverse.pipe';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { RepetirDirective } from './directives/repetir.directive';

@NgModule({
  declarations: [ReversePipe, ResaltadoDirective, RepetirDirective],
  imports: [CommonModule],
  exports: [ReversePipe, ResaltadoDirective, RepetirDirective],
})
export class SharedModule {}
