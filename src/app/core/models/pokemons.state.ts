import { PokemonModel } from './Pokemon.interface';

export interface PokemonsState {
  loading:boolean,
  pokemons: ReadonlyArray<PokemonModel>;
}

