import { CarritoState } from './carrito.state';


// Aquí definimos las tablas de la base de datos
// Esto son datos que cualquier componente de la APP podrá consumir
export interface AppCarState {
 
  carrito: CarritoState
}