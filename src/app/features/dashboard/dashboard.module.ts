import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CoursesModule } from './courses/courses.module';
import { MatListModule } from '@angular/material/list';
import { ClasePipesModule } from './clase-pipes/clase-pipes.module';
import { Clase10RxjsModule } from './clase-10-rxjs/clase-10-rxjs.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule, MatListModule],
})
export class DashboardModule {}
