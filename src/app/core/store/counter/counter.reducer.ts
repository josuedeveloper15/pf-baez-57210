import { createReducer, on } from '@ngrx/store';
import { decrease, increment } from './counter.actions';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterReducer = createReducer<CounterState>(
  initialState,
  // Al llamarse la accion increment entonces...
  on(increment, (state) => {
    return {
      ...state,
      value: state.value + 1,
    };
  }),
  // Al llamarse la accion decrease entonces...
  on(decrease, (state) => {
    return {
      ...state,
      value: state.value - 1,
    };
  })
);
