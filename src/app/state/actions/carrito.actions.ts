import { createAction, props } from '@ngrx/store';
import { CarritoModel } from 'src/app/core/models/carrito.interface';



export const loadedCarrito = createAction(
  '[Carrito List] Loaded success',
  props<{ carrito: CarritoModel[] }>()
);



