import { createReducer, on } from '@ngrx/store';
import { CarritoState } from 'src/app/core/models/carrito.state';
import { loadedCarrito} from '../actions/carrito.actions';

export const initialState: CarritoState = { carrito: [] };


export const carritoReducer = createReducer(
  initialState,
  on(loadedCarrito, (state, { carrito }) => {
   
    return { ...state, carrito };
  })
);
