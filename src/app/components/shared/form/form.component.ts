import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    ingreso: [ , [ Validators.required, Validators.min(0)]],
    // fechaIngr: [ ,  Validators.required]
  })
  esValido(){
    return this.miFormulario.controls.ingreso.errors
            && this.miFormulario.controls.ingreso.touched
  }

  abono:number = 0;
  fecha!:Date;
  correcto:boolean = true;
  detalle:string = '';
  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
  }

}
