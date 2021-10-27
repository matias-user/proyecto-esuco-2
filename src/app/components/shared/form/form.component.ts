import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FireService } from '../../services/fire.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor( private formBuilder: FormBuilder, private afs: FireService ) { }

  miFormulario: FormGroup = this.formBuilder.group({
    ingreso: [ , [ Validators.required, Validators.min(0)]],
    // fechaIngr: [ ,  Validators.required]
  })
  esValido(){
    return this.miFormulario.controls.ingreso.errors
            && this.miFormulario.controls.ingreso.touched
  }
  ingresos(){
    if( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.afs.guardarIngreso( this.miFormulario.value )
  }
  abono:number = 0;
  fecha!:Date;
  correcto:boolean = true;
  detalle:string = '';
  

  ngOnInit(): void {
  }

}
