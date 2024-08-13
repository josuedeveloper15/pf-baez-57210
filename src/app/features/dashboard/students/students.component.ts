import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StudentActions } from './store/student.actions';
import { Observable } from 'rxjs';
import { Student } from '../enrollments/models';
import {
  selectIsLoadingStudents,
  selectStudents,
  selectStudentsError,
} from './store/student.selectors';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent implements OnInit {
  students$: Observable<Student[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<unknown>;

  constructor(private store: Store) {
    this.students$ = this.store.select(selectStudents);
    this.isLoading$ = this.store.select(selectIsLoadingStudents);
    this.error$ = this.store.select(selectStudentsError);
  }

  ngOnInit(): void {
    this.store.dispatch(StudentActions.loadStudents());
  }

  deleteStudent(id: string) {
    this.store.dispatch(StudentActions.deleteStudent({ id }));
  }

  reloadPage() {
    location.reload();
  }
}
