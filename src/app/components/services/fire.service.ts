import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Gastos } from '../interfaces/Gastos';
import { Ingreso } from '../interfaces/Ingresos';


@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor( private afs: AngularFirestore ) { }

  traerHistorialGastos():Observable<any>{
    return this.afs.collection('gastos').snapshotChanges();
  }
  traerHistorialAbonos():Observable<any>{
    return this.afs.collection('abonos').snapshotChanges();
  }

  guardarIngreso ( ingreso: number, abonoOingr: boolean, ruts?:string, detalles?:string){
   
    if( abonoOingr){
      const ingresar =  this.afs.collection<Ingreso>('abonos');
      ingresar.add({abono: ingreso, fecha: Date.now() } );
    }else{
      const ingresar =  this.afs.collection<Gastos>('gastos');
      ingresar.add({gasto: ingreso, rut:ruts!, detalle:detalles!, fecha: Date.now() } );
    }
    
  }
}
