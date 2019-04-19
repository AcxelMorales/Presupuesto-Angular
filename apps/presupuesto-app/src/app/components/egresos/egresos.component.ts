import { Component, OnInit, Input } from '@angular/core';
import Egreso from 'src/app/models/Egreso.model';
import { IngresosEgresosService } from 'src/app/services/ingresos-egresos.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styles: []
})
export class EgresosComponent implements OnInit {

  public egresos: Egreso[] = [];
  @Input() ingresoTotal: number;

  constructor(private _service: IngresosEgresosService) { }

  ngOnInit(): void {
    this.egresos = this._service.egresos;
  }

  public delete(idx: number): void {
    this._service.deleteEgreso(idx);
  }

  public porcentaje(egreso: Egreso): number {
    return egreso.valor / this.ingresoTotal;
  }

}
