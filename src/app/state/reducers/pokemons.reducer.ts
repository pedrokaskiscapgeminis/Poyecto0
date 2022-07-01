import { createReducer, on } from '@ngrx/store';
import { PokemonsState } from 'src/app/core/models/pokemons.state';
import { loadedPokemons} from '../actions/pokemon.actions';

export const initialState: PokemonsState = { pokemons: [] };


export const pokemonsReducer = createReducer(
  initialState,
  on(loadedPokemons, (state, { pokemons }) => {
   
    return { ...state, pokemons };
  })
);
