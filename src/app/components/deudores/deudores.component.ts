import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-deudores',
  templateUrl: './deudores.component.html',
  styleUrls: ['./deudores.component.css']
})
export class DeudoresComponent implements OnInit {

  items!: Observable<any[]>;
  constructor(private afs: AngularFirestore) {
    this.items = afs.collection('ingresos').valueChanges();
   }

  ngOnInit(): void {
  }

}
