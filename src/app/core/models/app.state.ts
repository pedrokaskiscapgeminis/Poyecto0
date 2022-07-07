import { CarritoState } from './carrito.state';
import { DetallesState } from './detalles.state';
import { PokemonsState } from './pokemons.state';

// Aquí definimos las tablas de la base de datos
// Esto son datos que cualquier componente de la APP podrá consumir
export interface AppState {
  pokemons: PokemonsState;
  carrito: CarritoState;
  detalles: DetallesState;
}

