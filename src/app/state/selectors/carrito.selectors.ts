import { createSelector } from '@ngrx/store';
import { CarritoState } from 'src/app/core/models/carrito.state';
import { AppState } from 'src/app/core/models/app.state';

// Selector que tiene relacion con la propiedad 'pokemons' del AppState
export const selectCarritoFeature = (state: AppState) => state.carrito;

export const selectListCarrito = createSelector(
  selectCarritoFeature,
  (state: CarritoState) => {
    return state.carrito;
  }
);
export const selectLoadingCarrito = createSelector(
  selectCarritoFeature,
  (state: CarritoState) => {
    return state.loading;
  }
);



