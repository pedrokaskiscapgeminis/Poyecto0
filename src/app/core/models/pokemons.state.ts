import { PokemonModel } from './Pokemon.interface';

export interface PokemonsState {
  
  pokemons: ReadonlyArray<PokemonModel>;
}
