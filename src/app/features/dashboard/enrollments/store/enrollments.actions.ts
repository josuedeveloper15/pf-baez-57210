import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {
  CreateEnrollmentPayload,
  Enrollment,
  LoadStudentsAndProductsResponse,
} from '../models';

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
    'Create Enrollment': props<{ payload: CreateEnrollmentPayload }>(),
    'Create Enrollment Success': props<{ data: Enrollment }>(),
    'Create Enrollment Failure': props<{ error: unknown }>(),
  },
});
