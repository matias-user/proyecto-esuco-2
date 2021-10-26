import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeudoresComponent } from './components/deudores/deudores.component';
import { HistorialComponent } from './components/historial/historial.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch:'full'
  },{
    path:'deudores',
    component: DeudoresComponent
  },
  {
    path:'historial',
    component:HistorialComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
