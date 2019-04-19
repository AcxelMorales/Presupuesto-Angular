import { Component } from '@angular/core';
import { IngresosEgresosService } from 'src/app/services/ingresos-egresos.service';
import Ingreso from 'src/app/models/Ingreso.model';
import Egreso from 'src/app/models/Egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent {

  tipo: string = 'ing';
  desc: string;
  valor: number;

  constructor(private _service: IngresosEgresosService) { }

  public tipoOperacion(evento): string {
    return this.tipo = evento.target.value;
  }

  public addItem(form: HTMLFormElement): void {
    if (this.tipo === 'ing') {
      this._service.addIngreso(new Ingreso(this.desc, this.valor));
      form.reset();
    } else {
      this._service.addEgreso(new Egreso(this.desc, this.valor));
      form.reset();
    }
  }

}
