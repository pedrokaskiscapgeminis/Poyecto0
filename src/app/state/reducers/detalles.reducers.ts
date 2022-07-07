import { createReducer, on } from '@ngrx/store';
import { DetallesState } from 'src/app/core/models/detalles.state';
import { loadedDetalles } from '../actions/detalles.actions';
import { loadDetalles } from '../actions/detalles.actions';
import { getPokemon } from '../actions/detalles.actions';



export const initialState: DetallesState = {
  loading: false,
  detalles: [],
  pokemon: undefined
};


export const detallesReducer = createReducer(
  initialState,
  on(loadDetalles,(state)=>{
    return {...state, loading:false}
  }),

  on(loadedDetalles, (state, { detalles }) => {
   
    return { ...state,loading:true, detalles };
  }),
  
  on(getPokemon, (state, { pokemon }) => {
    return {
      ...state,
      pokemon: pokemon,
    };
  })

);
