import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMAIL_ERROR_MESSAGES, PASSWORD_ERROR_MESSAGES } from 'src/app/shared/constants/error-messages';
import { getErrorTypeEnum } from 'src/app/shared/enums/error-type-enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {}

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



  public getErrorMessage(formField: string): ErrorMessage {
    const control = this.loginFormGroup.controls[formField]

    if (control && control.errors) {
      const errorTypeKey: string = Object.keys(control.errors)[0]

      switch (formField) {
        case 'email':
          return EMAIL_ERROR_MESSAGES[getErrorTypeEnum(errorTypeKey)]
        case 'password':
          return PASSWORD_ERROR_MESSAGES[getErrorTypeEnum(errorTypeKey)]
      }
    }

    return ''
  }
}

type ErrorMessage = string | undefined
