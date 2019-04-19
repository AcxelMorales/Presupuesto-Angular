import { Component } from '@angular/core';
import Ingreso from './models/Ingreso.model';
import Egreso from './models/Egreso.model';
import { IngresosEgresosService } from './services/ingresos-egresos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  constructor(private _service: IngresosEgresosService) {
    this.ingresos = this._service.ingresos;
    this.egresos = this._service.egresos;
  }

  getIngresoTotal(): number {
    let total = 0;
    this.ingresos.forEach(ingreso => {
      total += ingreso.valor;
    });

    return total;
  }

  getEgresoTotal(): number {
    let total = 0;
    this.egresos.forEach(egreso => {
      total += egreso.valor;
    });

    return total;
  }

  getPorcentajeTotal(): number {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal(): number {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }

}
