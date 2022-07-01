import { createSelector } from '@ngrx/store';
import { PokemonsState } from 'src/app/core/models/pokemons.state';
import { AppState } from 'src/app/core/models/app.state';

// Selector que tiene relacion con la propiedad 'pokemons' del AppState
export const selectPokemonsFeature = (state: AppState) => state.pokemons;

export const selectListPokemons = createSelector(
  selectPokemonsFeature,
  (state: PokemonsState) => {
    return state.pokemons;
  }
);



