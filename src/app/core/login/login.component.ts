import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from 'src/app/shared/models/login-request';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  // TERCEIRA IMPLEMENTACAO
  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  })

  // VALIDACOES
  public isFormInvalid(): boolean {
    return this.loginForm.invalid
  }

  public validateEmail(): string {
    const email = this.loginForm.get('email')
    
    if (email?.getError('email') && !email.getError('required')) {
      return 'Email está fora da formatação'
    }

    if (email?.getError('required')) {
      return 'Email é obrigatório'
    }

    return ''
  }

  public validatePassword(): string {
    if (this.loginForm.get('password')?.hasError) {
      return 'Senha é obrigatório'
    }

    return ''
  }

  // ENVIO
  public submit(): void {
    const { email, password } = this.loginForm.value

    // Chamar o service de autenticacao
    this.authService.login({
      email,
      password
    })

    // Resetar o formulario
    this.loginForm.reset()
  }

  
}
