import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  abono:number = 0;
  fecha!:Date;
  correcto:boolean = true;
  detalle:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
