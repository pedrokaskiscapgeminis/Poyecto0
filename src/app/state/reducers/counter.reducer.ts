import { createReducer, on } from '@ngrx/store';
import { CarritoState } from 'src/app/core/models/carrito.state';
import { increment, decrement } from '../actions/counter.actions';



export const initialState: CarritoState = {
  carrito: [],
  
  loading: false
};
const _counterReducer = createReducer(
  initialState,
  
  on(increment, (state: any,{incre}) => {
    const otra = state.carrito.filter((pk: { name: string; }) =>{
      return pk.name != incre.name;
    });
    return {
      
      ...state,
     

        counter:state.counter + 1,

  
     
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
