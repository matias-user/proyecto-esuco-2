import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { FireService } from '../../services/fire.service';

@Component({
  selector: 'app-form-dos',
  templateUrl: './form-dos.component.html',
  styles: [`:host ::ng-deep .p-button {margin: 0 .5rem 0 0;min-width: 10rem;}
p {margin: 0;}.confirmation-content {display: flex;align-items: center;justify-content: center;
  }:host ::ng-deep .p-dialog .p-button {min-width: 6rem;}`]
})
export class FormDosComponent implements OnInit {

  patronRut: string = '^[0-9]+-[0-9kK]{1}$';

  constructor(private primengConfig: PrimeNGConfig, 
          private frm: FormBuilder,
          private fire: FireService) { }

  miFormulario: FormGroup =  this.frm.group({
    gasto: [ 0, [Validators.required, Validators.min(1)]],
    rut: ['', [Validators.required, Validators.pattern(this.patronRut)]],
    detalle: ['']
  })

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  guardar(){
    if( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.fire.guardarIngreso( 
      this.miFormulario.controls.gasto.value, false,
      this.miFormulario.controls.rut.value, this.miFormulario.controls.detalle.value
     )
     this.miFormulario.reset();
  }

  display: boolean = false;

  showDialog() {
      this.display = true;
  }
  esValido(campo: string){
    return this.miFormulario.controls[campo].errors
          && this.miFormulario.controls[campo].touched
  }
}
