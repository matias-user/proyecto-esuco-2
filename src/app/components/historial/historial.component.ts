import { Component, OnInit } from '@angular/core';
import { Gastos } from '../interfaces/Gastos';
import { FireService } from '../services/fire.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  listGastos: Gastos[] = [];
  cols!: any[];
  constructor(private servicios: FireService) { }

  ngOnInit(): void {
  this.obtenerDatos();  

  this.cols = [
      { field: 'rut', header: 'RUT' },
      { field: 'gasto', header: 'Gasto' },
      { field: 'detalle', header: 'Detalle' }
    ];
  }
  obtenerDatos(){
    this.servicios.traerHistorialGastos().subscribe( data => {
      this.listGastos = [];
      data.forEach( (campo: any) => {
        
        this.listGastos.push({
          id: campo.payload.doc.id,
          ...campo.payload.doc.data()
        })
      });
      console.log( this.listGastos )
    })
  }
}
