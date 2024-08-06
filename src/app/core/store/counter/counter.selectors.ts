import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterFeatureName, CounterState } from './counter.reducer';

export const selectCounterState =
  createFeatureSelector<CounterState>(counterFeatureName);

export const selectCounterStateValue = createSelector(
  selectCounterState,
  (state) => state.value
);

export const selectCounterStateValueX10 = createSelector(
  selectCounterState,
  (state) => state.value * 10
);
