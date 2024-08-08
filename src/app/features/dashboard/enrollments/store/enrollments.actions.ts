import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Enrollment, LoadStudentsAndProductsResponse } from '../models';

export const EnrollmentsActions = createActionGroup({
  source: 'Enrollments',
  events: {
    'Load Enrollments': emptyProps(),
    'Load Enrollments Success': props<{ data: Enrollment[] }>(),
    'Load Enrollments Failure': props<{ error: unknown }>(),
    'Load Students And Products': emptyProps(),
    'Load Students And Products Success': props<{
      data: LoadStudentsAndProductsResponse;
    }>(),
    'Load Students And Products Failure': props<{ error: unknown }>(),
  },
});
