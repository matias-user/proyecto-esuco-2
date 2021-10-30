import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    email: '',
    password: ''
  }
  constructor( private auth: AuthService) { }

  ngOnInit(): void {
  }
  ingresar(){
    const { email, password } = this.usuario;
    this.auth.login(email, password).then(res => {
      console.log( res);
    })
  }
  obtenerUsuario(){
    this.auth.obtenerUsuarioLogeado().subscribe(res => {
      console.log( res?.email)
    });
  }
  salir(){
    this.auth.logout();
  }
}
