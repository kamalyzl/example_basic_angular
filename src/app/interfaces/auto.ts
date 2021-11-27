import { IMarca } from './marca';

export interface IAuto {
  idAuto: number;
  marca: IMarca;
  nombreAuto: string;
  precioAuto: number;
  stockAuto: number;
}
