import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/core/models/app.state';
import { DetallesState } from 'src/app/core/models/detalles.state';

// Selector que tiene relacion con la propiedad 'pokemons' del AppState
export const selectDetallesFeature = (state: AppState) => state.detalles;

export const selectListDetalles = createSelector(
  selectDetallesFeature,
  (state: DetallesState) => {
    return state.detalles;
  }
);
export const selectLoadingDetalles = createSelector(
  selectDetallesFeature,
  (state: DetallesState) => {
    return state.loading;
  }
);
export const selectPokemon = createSelector(
  selectDetallesFeature,
  (state: DetallesState) => {
    return state.pokemon;
  }
);



