import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from '../actions/counter.actions';
import { initialState } from 'src/app/core/models/counter.state';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state: any) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state: any) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
