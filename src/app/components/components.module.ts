import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './shared/menu/menu.component';
import { PrimeModule } from './prime/prime.module';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './shared/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeudoresComponent } from './deudores/deudores.component';
import { HistorialComponent } from './historial/historial.component';
import { AngularFirestoreModule  } from '@angular/fire/compat/firestore';
import { FormDosComponent } from './shared/form-dos/form-dos.component';

@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    FormComponent,
    DeudoresComponent,
    HistorialComponent,
    FormDosComponent
  ],
  imports: [
    CommonModule,
    PrimeModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  exports:[
    MenuComponent,
    HomeComponent,
  ]
})
export class ComponentsModule { }
