import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { Clase10RxjsComponent } from './clase-10-rxjs/clase-10-rxjs.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/pages/course-detail/course-detail.component';
import { EnrollmentsComponent } from './enrollments/enrollments.component';
import { adminGuard } from '../../core/guards/admin.guard';

const routes: Routes = [
  // Ya sabemos que el path actual es /dashboard
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    // component: HomeComponent,
  },
  {
    path: 'products',
    canActivate: [adminGuard],
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
    // component: ProductsComponent,
  },
  {
    path: 'rxjs',
    component: Clase10RxjsComponent,
  },
  {
    // /dashboard/courses
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./clase-16-counter/clase-16-counter.module').then(
        (m) => m.Clase16CounterModule
      ),
  },
  {
    path: 'enrollments',
    loadChildren: () =>
      import('./enrollments/enrollments.module').then(
        (m) => m.EnrollmentsModule
      ),
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./students/students.module').then((m) => m.StudentsModule),
  },
  {
    path: '**', // Cualquier ruta que no coincida con las anteriores (basicmanete es un default)
    redirectTo: '/dashboard/home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
