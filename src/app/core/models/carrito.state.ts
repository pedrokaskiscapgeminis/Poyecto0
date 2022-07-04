import { CarritoModel } from './carrito.interface';

export interface CarritoState {
  carrito: ReadonlyArray<CarritoModel>;
}
