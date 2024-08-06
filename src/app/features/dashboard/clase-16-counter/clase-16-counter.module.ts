import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Clase16CounterRoutingModule } from './clase-16-counter-routing.module';
import { Clase16CounterComponent } from './clase-16-counter.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [Clase16CounterComponent],
  imports: [CommonModule, SharedModule, Clase16CounterRoutingModule],
})
export class Clase16CounterModule {}
