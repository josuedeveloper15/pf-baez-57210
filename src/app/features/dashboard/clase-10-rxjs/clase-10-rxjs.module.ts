import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clase10RxjsComponent } from './clase-10-rxjs.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [Clase10RxjsComponent],
  imports: [CommonModule, SharedModule],
  exports: [Clase10RxjsComponent],
})
export class Clase10RxjsModule {}
