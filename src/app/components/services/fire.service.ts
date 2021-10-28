import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/compat/firestore';

interface ingreso{
  abono:number;
  fecha: number;
}
interface gastos{
  gasto:number;
  rut:string;
  detalle:string;
  fecha:number;
}

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor( private afs: AngularFirestore ) { }

  guardarIngreso ( ingreso: number, abonoOingr: boolean, ruts?:string, detalles?:string){
   
    if( abonoOingr){
      const ingresar =  this.afs.collection<ingreso>('ingresos');
      ingresar.add({abono: ingreso, fecha: Date.now() } );
    }else{
      const ingresar =  this.afs.collection<gastos>('gastos');
      ingresar.add({gasto: ingreso, rut:ruts!, detalle:detalles!, fecha: Date.now() } );
    }
    
  }
}
