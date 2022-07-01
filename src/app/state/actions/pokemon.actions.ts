import { createAction, props } from '@ngrx/store';
import { PokemonModel } from 'src/app/core/models/Pokemon.interface';



export const loadedPokemons = createAction(
  '[Pokemon List] Loaded success',
  props<{ pokemons: PokemonModel[] }>()
);



