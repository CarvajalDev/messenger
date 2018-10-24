import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  operation = 'login';
  email: string = null;
  password: string = null;

  constructor( private authenticationServices: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.authenticationServices.loginWithEmail(this.email, this.password).then(
      (data) => {
        alert('Inició sesion correctanmente');
        console.log(data);
      }
    ).catch( (error) => {
      alert('Error al iniciar sesion');
      console.log(error);
    } );
  }

  register() {
    this.authenticationServices.registerWithEmail(this.email, this.password).then(
      (data) => {
        alert('Registro exitoso');
        console.log(data);
      }
    ).catch( (error) => {
      alert('Error al registrarse');
      console.log(error);
    } );
  }

}
