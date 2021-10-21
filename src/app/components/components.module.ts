import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './shared/menu/menu.component';
import { PrimeModule } from './prime/prime.module';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './shared/form/form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    PrimeModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports:[
    MenuComponent,
    HomeComponent,
  ]
})
export class ComponentsModule { }
