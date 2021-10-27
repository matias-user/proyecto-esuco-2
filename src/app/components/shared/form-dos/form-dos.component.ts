import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-form-dos',
  templateUrl: './form-dos.component.html',
  styles: [`
  :host ::ng-deep .p-button {
      margin: 0 .5rem 0 0;
      min-width: 10rem;
  }

  p {
      margin: 0;
  }

  .confirmation-content {
      display: flex;
      align-items: center;
      justify-content: center;
  }

  :host ::ng-deep .p-dialog .p-button {
      min-width: 6rem;
  }`]
})
export class FormDosComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  display: boolean = false;

    showDialog() {
        this.display = true;
    }
}
