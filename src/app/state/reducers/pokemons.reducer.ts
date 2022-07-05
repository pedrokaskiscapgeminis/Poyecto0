import { createReducer, on } from '@ngrx/store';
import { PokemonsState } from 'src/app/core/models/pokemons.state';
import { loadedPokemons} from '../actions/pokemon.actions';
import { loadPokemon} from '../actions/pokemon.actions';

export const initialState: PokemonsState = {
  pokemons: [],
  loading: false
};


export const pokemonsReducer = createReducer(
  initialState,
  on(loadPokemon,(state)=>{
    return {...state, loading:false}
  }),

  on(loadedPokemons, (state, { pokemons }) => {
   
    return { ...state,loading:true, pokemons };
  })
);
