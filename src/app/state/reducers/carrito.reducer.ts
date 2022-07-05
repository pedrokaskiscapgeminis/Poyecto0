import { createReducer, on } from '@ngrx/store';
import { CarritoState } from 'src/app/core/models/carrito.state';
import { loadedCarrito} from '../actions/carrito.actions';
import { addToCart} from '../actions/carrito.actions';
import { Delete} from '../actions/carrito.actions';

export const initialState: CarritoState = {
  carrito: [],
  counter: 0
};


export const carritoReducer = createReducer(
  initialState,
  on(loadedCarrito, (state, { carrito }) => {
   
    return { ...state, carrito };
    
  }),
  on(addToCart, (state, { carrit }) => {
    const otra = state.carrito.filter((pk) =>{
      return pk.name != carrit.name;
    });
    return {

      ...state,

      carrito: [

        ...otra,

        ...[carrit],

      ],

    };

  }),
  on(Delete, (state, { carri }) => {
    const updated= state.carrito.filter((carr)=> {
    return carri.name !== carr.name;
  });

    return {

      ...state,

     carrito: updated

      

    };

  }),
  
  
);
