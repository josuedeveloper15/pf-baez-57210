import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './pipes/reverse.pipe';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { RepetirDirective } from './directives/repetir.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ReversePipe, ResaltadoDirective, RepetirDirective],
  imports: [CommonModule],
  exports: [
    ReversePipe,
    ResaltadoDirective,
    RepetirDirective,

    // Tambien podemos exportar otros modulos desde aqui...
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class SharedModule {}
