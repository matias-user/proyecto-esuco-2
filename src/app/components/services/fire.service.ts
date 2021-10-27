import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor( private afs: AngularFirestore ) { }

  guardarIngreso ( ingreso: number){
   
    const ingresar =  this.afs.collection<any>('ingresos');
    ingresar.add(ingreso);
  }
}
