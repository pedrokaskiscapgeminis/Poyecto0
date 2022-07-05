import { createAction, props } from '@ngrx/store';
import { PokemonModel } from 'src/app/core/models/Pokemon.interface';


export const loadPokemon = createAction(
  '[Pokemon List] Load success',
  
);
export const loadedPokemons = createAction(
  '[Pokemon List] Loaded success',
  props<{ pokemons: PokemonModel[] }>()
);



