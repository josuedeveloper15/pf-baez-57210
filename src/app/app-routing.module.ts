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

const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
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
    ],
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
