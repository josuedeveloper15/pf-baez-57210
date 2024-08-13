import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Enrollment, Student } from './models';
import { NotifierService } from '../../../core/services/notifier.service';
import { Store } from '@ngrx/store';
import { RootState } from '../../../core/store';
import { EnrollmentsActions } from './store/enrollments.actions';
import {
  selectEnrollments,
  selectEnrollmentsError,
  selectEnrollmentsIsLoading,
  selectEnrollmentsProducts,
  selectEnrollmentsStudents,
} from './store/enrollments.selectors';
import { Product } from '../products/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.scss',
})
export class EnrollmentsComponent implements OnInit {
  enrollmentForm: FormGroup;
  isLoading$: Observable<boolean>;
  enrollments$: Observable<Enrollment[]>;
  students$: Observable<Student[]>;
  products$: Observable<Product[]>;
  error$: Observable<unknown>;
  constructor(
    private notifierService: NotifierService,
    private store: Store<RootState>,
    private fb: FormBuilder
  ) {
    this.enrollments$ = this.store.select(selectEnrollments);
    this.isLoading$ = this.store.select(selectEnrollmentsIsLoading);
    this.error$ = this.store.select(selectEnrollmentsError);
    this.students$ = this.store.select(selectEnrollmentsStudents);
    this.products$ = this.store.select(selectEnrollmentsProducts);
    this.enrollmentForm = this.fb.group({
      studentId: [null, Validators.required],
      productId: [null, Validators.required],
    });
  }
  ngOnInit(): void {
    this.store.dispatch(EnrollmentsActions.loadEnrollments());
    this.store.dispatch(EnrollmentsActions.loadStudentsAndProducts());
  }

  addEnrollment(): void {
    // this.notifierService.sendNotification('Se agrego una inscripcion!');
    if (this.enrollmentForm.invalid) {
      alert('El form es invalido');
    } else {
      this.store.dispatch(
        EnrollmentsActions.createEnrollment({
          payload: {
            productId: this.enrollmentForm.get('productId')?.value,
            studentId: this.enrollmentForm.get('studentId')?.value,
          },
        })
      );
    }
  }
}
