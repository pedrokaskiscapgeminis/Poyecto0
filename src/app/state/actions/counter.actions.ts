import { createAction,props} from '@ngrx/store';
import { PokemonModel } from 'src/app/core/models/Pokemon.interface';

export const increment = createAction('increment', props<{ incre: PokemonModel }>());
export const decrement = createAction('decrement');

