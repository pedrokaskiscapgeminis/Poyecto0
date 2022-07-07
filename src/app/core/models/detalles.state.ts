import {DetallesModel } from './detalles.insterface';

export interface DetallesState {
  loading:boolean;
  pokemon: any;
  detalles: ReadonlyArray<DetallesModel>;
}