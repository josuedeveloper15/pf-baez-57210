import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Student } from '../../enrollments/models';

export const StudentActions = createActionGroup({
  source: 'Student',
  events: {
    'Load Students': emptyProps(),
    'Load Students Success': props<{ data: Student[] }>(),
    'Load Students Failure': props<{ error: unknown }>(),
    'Delete Student': props<{ id: string }>(),
    'Delete Student Success': props<{ data: Student }>(),
    'Delete Student Failure': props<{ error: unknown }>(),
  },
});
