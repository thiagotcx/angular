import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {
    
  }

  public urlVehicle: string | any[] | null | undefined = "/veiculo"

  public navigateTo(url: string): void {
    this.router.navigate([url])
  }


  // PRIMEIRA IMPLEMENTACAO
  public emailFormControl: FormControl = new FormControl(
    "teste", 
    [Validators.email, Validators.required]
  );
  public passwordFormControl: FormControl = new FormControl(
    "", 
    [Validators.required, Validators.minLength(5)]
  );

  // SEGUNDA IMPLEMENTACAO
  public loginFormGroup: FormGroup = new FormGroup({
    email: new FormControl(
      "teste", 
      [Validators.email, Validators.required]
    ),
    password: new FormControl(
      "", 
      [Validators.required, Validators.minLength(5)]
    )
  })

  // VALIDACOES
  public submit(): void {
    console.log(this.loginFormGroup.value)
    this.loginFormGroup.reset()
  }

  public isFormInvalid(): boolean {
    return this.loginFormGroup.invalid
  }

  
}
