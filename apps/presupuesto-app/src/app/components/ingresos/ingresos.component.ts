import { Component, OnInit } from '@angular/core';
import Ingreso from 'src/app/models/Ingreso.model';
import { IngresosEgresosService } from 'src/app/services/ingresos-egresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styles: []
})
export class IngresosComponent implements OnInit {

  public ingresos: Ingreso[] = [];

  constructor(private _service: IngresosEgresosService) { }

  ngOnInit() {
    this.ingresos = this._service.ingresos;
  }

  public delete(idx: number): void {
    this._service.deleteIngreso(idx);
  }

}
