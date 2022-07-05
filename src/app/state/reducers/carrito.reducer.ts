import { createReducer, on } from '@ngrx/store';
import { CarritoState } from 'src/app/core/models/carrito.state';
import { loadCarrito, loadedCarrito} from '../actions/carrito.actions';
import { addToCart} from '../actions/carrito.actions';
import { Delete} from '../actions/carrito.actions';

export const initialState: CarritoState = {
  carrito: [],
  counter: 0,
  loading: false
};


export const carritoReducer = createReducer(
  initialState,
  on(loadCarrito,(state)=>{
    return {...state, false:false}
  }),

  on(addToCart, (state, { carrit }) => {
    const otra = state.carrito.filter((pk) =>{
      return pk.name != carrit.name;
    });
    return {

      ...state,
      loading:true,
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
