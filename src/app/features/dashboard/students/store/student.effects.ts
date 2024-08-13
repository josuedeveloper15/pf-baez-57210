import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { StudentActions } from './student.actions';
import { StudentsService } from '../../../../core/services/students.service';

@Injectable()
export class StudentEffects {
  loadStudents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentActions.loadStudents),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.studentsService.getStudents().pipe(
          map((data) => StudentActions.loadStudentsSuccess({ data })),
          catchError((error) =>
            of(StudentActions.loadStudentsFailure({ error }))
          )
        )
      )
    );
  });

  deleteStudent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentActions.deleteStudent),
      concatMap((action) =>
        this.studentsService.deleteStudentById(action.id).pipe(
          map((data) => StudentActions.deleteStudentSuccess({ data })),
          catchError((err) =>
            of(StudentActions.deleteStudentFailure({ error: err }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private studentsService: StudentsService
  ) {}
}
