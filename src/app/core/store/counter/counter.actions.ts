import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Counter] increment',
  props<{ number: number }>()
);
export const decrease = createAction('[Counter] decrease');
