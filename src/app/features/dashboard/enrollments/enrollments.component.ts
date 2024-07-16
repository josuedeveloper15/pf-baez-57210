import { Component } from '@angular/core';
import { EnrollmentsService } from '../../../core/services/enrollments.service';
import { finalize, Observable, Subject } from 'rxjs';
import { Enrollment } from './models';
import { NotifierService } from '../../../core/services/notifier.service';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.scss',
})
export class EnrollmentsComponent {
  isLoading = true;
  // enrollments$: Observable<Enrollment[]>;
  enrollments: Enrollment[] = [];

  mySubject$ = new Subject();
  myObservable$ = new Observable((subscriber) => subscriber.next(1));

  constructor(
    private enrollmentsService: EnrollmentsService,
    private notifierService: NotifierService
  ) {
    this.mySubject$.next(1);

    this.enrollmentsService.getEnrollments().subscribe({
      next: (v) => (this.enrollments = v),
      complete: () => (this.isLoading = false),
    });

    // this.enrollments$ = this.enrollmentsService.getEnrollments().pipe(
    //   finalize(() => {
    //     // Cuando el observable ya se completo
    //     this.isLoading = false;
    //   })
    // );
  }

  addEnrollment(): void {
    this.enrollmentsService.addEnrollment().subscribe({
      next: (v) => (this.enrollments = v),
    });

    this.notifierService.sendNotification('Se agrego una inscripcion!');
  }
}
