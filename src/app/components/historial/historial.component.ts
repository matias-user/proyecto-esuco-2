import { Component, OnInit } from '@angular/core';
import { Gastos } from '../interfaces/Gastos';
import { Ingreso } from '../interfaces/Ingresos';
import { FireService } from '../services/fire.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  listaGastos: Gastos[] = [];
  listaAbonos: Ingreso[] = [];
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
      this.listaGastos = [];
      data.forEach( (campo: any) => {
        
        this.listaGastos.push({
          id: campo.payload.doc.id,
          ...campo.payload.doc.data()
        })
      });
      console.log( this.listaGastos )
    })
    this.servicios.traerHistorialAbonos().subscribe( data => {
      this.listaAbonos = [];
      data.forEach( (campo: any) => {
        
        this.listaAbonos.push({
          id: campo.payload.doc.id,
          ...campo.payload.doc.data()
        })
      });
    })
  }
  eliminarIngreso(id:string, ingreso:string){
    this.servicios.eliminarIngreso(id,ingreso).then( () => {
      console.log('Se ha eliminado')
    }, error => console.log )
  }
}
