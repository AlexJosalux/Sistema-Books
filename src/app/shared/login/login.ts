import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email: string = '';
  password: string = '';


  private servicioAuth = inject(AuthService);
  private router = inject(Router)

  iniciarSesion(){
    this.servicioAuth.login(this.email, this.password).subscribe(success =>{
      if(success){
        alert('Bienvenido al sistema')
        this.router.navigate(['/usuarios']);
      }
    });
    /*
    if(!this.email || !this.password){
      alert('Campos inválidos')
      return;
    }
    this.servicioAuth.login(this.email, this.password);*/
  }
  cerrarSesion(){
    this.servicioAuth.logout();
  }

}
