import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ApplicationService } from './application.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private applicationService: ApplicationService,
  ) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('intercept', { request })
    
    const token = this.applicationService.getToken();

    const headers = token
      ? request.headers.set('Authorization', `Bearer ${token}`)
      : request.headers

    const authReq = request.clone({ headers })

    return next.handle(authReq)
      .pipe(catchError(x => this.handleAuthError(x)));
  }

  private handleAuthError(err: HttpErrorResponse): Observable<never> {
    if (err.status === 401 || err.status === 403) {
      this.router.navigateByUrl(`/entrar`);
    }

    return throwError(() => new Error(err.message));
  }

}
