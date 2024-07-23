import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule, MatButtonModule],
})
export class ProductsModule {}
