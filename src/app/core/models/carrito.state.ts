import { CarritoModel } from './carrito.interface';

export interface CarritoState {
  loading:boolean;
  carrito: ReadonlyArray<CarritoModel>;
}
