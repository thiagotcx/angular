import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request';
import { Router } from '@angular/router';
import { ApplicationService } from './application.service';
import { ApplicationHttpService } from './application-http.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

type AuthState = {
  value: boolean,
  events: Observable<boolean>
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth: boolean = false
  private isAuthEvents: BehaviorSubject<boolean> = new BehaviorSubject(false)

  constructor(
    private router: Router,
    private applicationService: ApplicationService,
    private httpService: ApplicationHttpService
  ) { }

  public getIsAuth(): AuthState {
    return {
      value: this.isAuth,
      events: this.isAuthEvents.asObservable()
    }
  }

  public login({ email, password }: LoginRequest): void {
        this.httpService.post<{ accessToken: string }>('/login', { email, password }, ApplicationHttpService.MEDIA_TYPE_APP_JSON)
          .pipe(map((httpResponse) => httpResponse.body))
          .subscribe({
            next: (responseBody) => {
              if (responseBody && responseBody.accessToken) {
                this.applicationService.setToken(responseBody.accessToken)
                this.isAuth = true
                this.isAuthEvents.next(true)
                this.router.navigate(['/dashboard'])
              }
            },
            error: (error) => {
              alert('Não foi possível fazer login')
              console.error(error)
            }
          })
  }

  public logout(): void {
    this.isAuth = false
    this.isAuthEvents.next(false)
    this.router.navigate(['/entrar'])
  }
}
