import { createAction, props, union } from '@ngrx/store';

import { DetallesModel } from 'src/app/core/models/detalles.insterface';


export const loadDetalles = createAction(
    '[Detalles List] Load success',
    
  );
export const loadedDetalles = createAction(
  '[Detalles List] Loaded success',
  props<{ detalles: DetallesModel[] }>()
);
export const getPokemon = createAction(
  '[Detalles List] Get pokemon',
  props<{ pokemon: any }>()
);
export const loadedPokemon = createAction(
  '[Detalles List] Loaded pokemon ocurrido',
  props<{ name: string }>()
);