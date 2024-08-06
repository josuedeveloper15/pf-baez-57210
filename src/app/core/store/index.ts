import { ActionReducerMap } from '@ngrx/store';
import {
  counterFeatureName,
  counterReducer,
  CounterState,
} from './counter/counter.reducer';
import { authFeatureName, authReducer, AuthState } from './auth/auth.reducer';

export interface RootState {
  [counterFeatureName]: CounterState;
  [authFeatureName]: AuthState;
}

export const rootReducer: ActionReducerMap<RootState> = {
  // Listado de reducers
  [counterFeatureName]: counterReducer,
  [authFeatureName]: authReducer,
};
