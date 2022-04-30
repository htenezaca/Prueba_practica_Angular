import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';


@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',
  styleUrls: ['./listar-vehiculo.component.css']
})
export class ListarVehiculoComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];

  constructor(private vehiculoService: VehiculoService) { }

  obtenerVehiculos(): void {
    this.vehiculoService.obtenerVehiculos().subscribe(vehiculos => this.vehiculos = vehiculos);
  }

  vehiculosPorMarca(vehiculos: Vehiculo[], attribute: string) {
    return vehiculos.filter(vehiculo => vehiculo.marca === attribute).length;
    }

  ngOnInit() {
    this.obtenerVehiculos();

  }


}
