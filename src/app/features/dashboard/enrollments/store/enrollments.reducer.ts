import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentsActions } from './enrollments.actions';
import { Enrollment, Student } from '../models';
import { Product } from '../../products/models';

export const enrollmentsFeatureKey = 'enrollments';

export interface State {
  isLoading: boolean;
  isLoadingStudentsAndProducts: boolean;
  enrollments: Enrollment[];
  students: Student[];
  products: Product[];
  error: unknown;
}

export const initialState: State = {
  isLoading: false,
  isLoadingStudentsAndProducts: false,
  enrollments: [],
  students: [],
  products: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(EnrollmentsActions.loadEnrollments, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(EnrollmentsActions.loadEnrollmentsSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      enrollments: action.data,
      error: null,
    };
  }),

  on(EnrollmentsActions.loadEnrollmentsFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  }),

  on(EnrollmentsActions.loadStudentsAndProducts, (state) => ({
    ...state,
    isLoadingStudentsAndProducts: true,
  })),
  on(EnrollmentsActions.loadStudentsAndProductsSuccess, (state, action) => ({
    ...state,
    isLoadingStudentsAndProducts: false,
    products: action.data.products,
    students: action.data.students,
    error: null,
  })),

  // Create Enrollment
  on(EnrollmentsActions.createEnrollmentSuccess, (state, action) => {
    return {
      ...state,
      enrollments: [...state.enrollments, action.data],
      error: null,
    };
  })
);

export const enrollmentsFeature = createFeature({
  name: enrollmentsFeatureKey,
  reducer,
});
