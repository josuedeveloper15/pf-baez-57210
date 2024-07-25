import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { Clase10RxjsComponent } from './clase-10-rxjs/clase-10-rxjs.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/pages/course-detail/course-detail.component';
import { EnrollmentsComponent } from './enrollments/enrollments.component';

const routes: Routes = [
  // Ya sabemos que el path actual es /dashboard
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    // component: HomeComponent,
  },
  {
    path: 'products',
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
    component: CoursesComponent,
  },
  {
    path: 'courses/:id',
    component: CourseDetailComponent,
  },
  {
    path: 'enrollments',
    component: EnrollmentsComponent,
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
