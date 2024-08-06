import { ActionReducerMap } from '@ngrx/store';
import { counterReducer, CounterState } from './counter/counter.reducer';

export interface RootState {
  counter: CounterState;
}

export const rootReducer: ActionReducerMap<RootState> = {
  // Listado de reducers
  counter: counterReducer,
};
