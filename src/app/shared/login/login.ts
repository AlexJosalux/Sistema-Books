import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private servicioAuth = inject(AuthService);
  private router = inject(Router);

  public errorLogin: boolean = false;

  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  iniciarSesion() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.getRawValue(); 
      this.errorLogin = false; 

      this.servicioAuth.login(email, password).subscribe({
        next: (success: boolean) => {
          if (success) {
            this.router.navigate(['/libros']);
          } else {
            this.errorLogin = true; 
          }
        },
        error: (err: any) => { 
          this.errorLogin = true;
          console.error('Fallo en la conexión:', err);
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  cerrarSesion() {
    this.servicioAuth.logout();
  }
}