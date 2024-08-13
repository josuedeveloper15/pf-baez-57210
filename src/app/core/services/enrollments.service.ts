import { Injectable } from '@angular/core';
import { concatMap, delay, forkJoin, Observable, of } from 'rxjs';
import {
  CreateEnrollmentPayload,
  Enrollment,
  LoadStudentsAndProductsResponse,
  Student,
} from '../../features/dashboard/enrollments/models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Product } from '../../features/dashboard/products/models';

@Injectable({ providedIn: 'root' })
export class EnrollmentsService {
  private MY_DATABASE: Enrollment[] = [];

  constructor(private http: HttpClient) {}

  getEnrollments(): Observable<Enrollment[]> {
    // return of<Enrollment[]>(this.MY_DATABASE).pipe(delay(400));

    return this.http.get<Enrollment[]>(
      environment.apiUrl + '/sales?_embed=student&_embed=product'
    );
  }

  getStudentsAndProducts(): Observable<LoadStudentsAndProductsResponse> {
    return forkJoin({
      students: this.http.get<Student[]>(environment.apiUrl + '/students'),
      products: this.http.get<Product[]>(environment.apiUrl + '/products'),
    });
  }

  addEnrollment(payload: CreateEnrollmentPayload): Observable<Enrollment> {
    return this.http
      .post<Enrollment>(environment.apiUrl + '/sales', payload)
      .pipe(
        concatMap((enrollmentCreated) =>
          this.http.get<Enrollment>(
            environment.apiUrl +
              '/sales/' +
              enrollmentCreated.id +
              '?_embed=product&_embed=student'
          )
        )
      );
  }
}
