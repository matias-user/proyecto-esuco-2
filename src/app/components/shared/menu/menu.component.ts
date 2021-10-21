import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items!: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio',icon:'pi pi-home',routerLink:['/']},
      {label:'Ingresos y Gastos',icon:'pi pi-money-bill',routerLink:['/ingreso']},
      {label:'Deudores',icon:'pi pi-user'},
      {label:'Historial',icon:'pi pi-folder'}
    ]
  }

}
