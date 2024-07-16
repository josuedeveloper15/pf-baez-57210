import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Enrollment } from '../../features/dashboard/enrollments/models';

@Injectable({ providedIn: 'root' })
export class EnrollmentsService {
  private MY_DATABASE: Enrollment[] = [
    {
      studentId: 'caS3',
      courseId: 'fjd32',
    },
    {
      studentId: 'caS4',
      courseId: 'fjd31',
    },
    {
      studentId: 'caS5',
      courseId: 'sjd32',
    },
  ];

  getEnrollments(): Observable<Enrollment[]> {
    return of<Enrollment[]>(this.MY_DATABASE).pipe(delay(400));
  }

  addEnrollment(): Observable<Enrollment[]> {
    this.MY_DATABASE.push({
      studentId: 'caS3',
      courseId: 'fjd32',
    });
    return this.getEnrollments();
  }
}
