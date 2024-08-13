import { createFeature, createReducer, on } from '@ngrx/store';
import { StudentActions } from './student.actions';
import { Student } from '../../enrollments/models';

export const studentFeatureKey = 'student';

export interface State {
  isLoadingStudents: boolean;
  students: Student[];
  error: unknown;
}

export const initialState: State = {
  isLoadingStudents: false,
  students: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(StudentActions.loadStudents, (state) => ({
    ...state,
    isLoadingStudents: true,
  })),
  on(StudentActions.loadStudentsSuccess, (state, action) => ({
    ...state,
    isLoadingStudents: false,
    students: action.data,
    error: null,
  })),
  on(StudentActions.loadStudentsFailure, (state, action) => ({
    ...state,
    isLoadingStudents: false,
    error: action.error,
  })),
  on(StudentActions.deleteStudentSuccess, (state, action) => {
    return {
      ...state,
      students: state.students.filter((s) => s.id !== action.data.id),
      error: null,
    };
  })
);

export const studentFeature = createFeature({
  name: studentFeatureKey,
  reducer,
});
