import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CoursesComponent } from './features/dashboard/courses/courses.component';
import { EnrollmentsComponent } from './features/dashboard/enrollments/enrollments.component';
import { CourseDetailComponent } from './features/dashboard/courses/pages/course-detail/course-detail.component';
import { HomeComponent } from './features/dashboard/home/home.component';
import { Clase10RxjsComponent } from './features/dashboard/clase-10-rxjs/clase-10-rxjs.component';
import { ProductsComponent } from './features/dashboard/products/products.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then(
        (referenciaAlArchivo) => referenciaAlArchivo.AuthModule
      ),
    // component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: '**', // Cualquier ruta que no coincida con las anteriores (basicmanete es un default)
    redirectTo: '/auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
