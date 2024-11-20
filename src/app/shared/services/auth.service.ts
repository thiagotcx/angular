import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request';
import { Router } from '@angular/router';
import { ApplicationService } from './application.service';
import { ApplicationHttpService } from './application-http.service';
import { map } from 'rxjs';

type LoginResponse = { token: string | null }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth: boolean = false

  constructor(
    private router: Router,
    private applicationService: ApplicationService,
    private httpService: ApplicationHttpService
  ) { }

  public getIsAuth(): boolean {
    return this.isAuth
  }

  public login({ email, password }: LoginRequest): void {
        // Printar para a gente ver no log
        console.log({
          email,
          password
        })

        let backendReturn: boolean = false

        // Chamar backend
        this.httpService.post<LoginResponse>('/api/URL', { email, password }, ApplicationHttpService.MEDIA_TYPE_APP_JSON)
          .pipe(
            map((httpResponse): LoginResponse => ({  
              token: httpResponse.body 
                ? httpResponse.body.token 
                : null
            })),

          )
          .subscribe({
            next: (response) => {
              this.applicationService.setToken(response.token)
              this.isAuth = backendReturn
              this.router.navigate(['/dashboard'])
            },
            error: (error) => {
              alert('Não foi possível fazer login')
              console.error(error)
            }
          })
  }

  public logout(): void {
    //
  }
}
