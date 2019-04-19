import { Injectable } from '@angular/core';
import Ingreso from '../models/Ingreso.model';
import Egreso from '../models/Egreso.model';

@Injectable({
  providedIn: 'root'
})
export class IngresosEgresosService {

  constructor() { }

  public ingresos: Ingreso[] = [];
  public egresos: Egreso[] = [];

  deleteIngreso(idx: number): void {
    this.ingresos.splice(idx, 1);
  }

  deleteEgreso(idx: number): void {
    this.egresos.splice(idx, 1);
  }

  addIngreso(ingreso: Ingreso): void {
    this.ingresos.push(ingreso);
  }

  addEgreso(egreso: Egreso): void {
    this.egresos.push(egreso);
  }

}
