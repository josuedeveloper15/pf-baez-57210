import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './store/student.effects';
import { StoreModule } from '@ngrx/store';
import { studentFeature } from './store/student.reducer';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    StudentsRoutingModule,
    EffectsModule.forFeature([StudentEffects]),
    StoreModule.forFeature(studentFeature),
  ],
})
export class StudentsModule {}
