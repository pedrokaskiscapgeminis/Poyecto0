import { createAction, props } from '@ngrx/store';
import { CarritoModel } from 'src/app/core/models/carrito.interface';


export const loadCarrito = createAction(
  '[Carrito List] Load success',
  
);

export const loadedCarrito = createAction(
  '[Carrito List] Loaded success',
  props<{ carrito: CarritoModel[] }>()
);
export const addToCart = createAction(
  '[Carrito List] Add to Cart',
  props<{ carrit: CarritoModel }>()
);
export const Delete = createAction(
  '[Carrito List] Delete to Cart',
  props<{ carri: CarritoModel }>()
);



