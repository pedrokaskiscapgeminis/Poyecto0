import { createSelector } from '@ngrx/store';
import { CarritoState } from 'src/app/core/models/carrito.state';
import { AppCarState } from 'src/app/core/models/appCar.state';

// Selector que tiene relacion con la propiedad 'pokemons' del AppState
export const selectCarritoFeature = (state: AppCarState) => state.carrito;

export const selectListCarrito = createSelector(
  selectCarritoFeature,
  (state: CarritoState) => {
    return state.carrito;
  }
);



