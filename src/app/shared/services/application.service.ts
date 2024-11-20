import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private token: string | null = null

  constructor() {
    this.loadToken()
  }

  public getToken(): string | null {
    return this.token
  }

  public setToken(newToken: string | null): void {
    this.token = newToken
    
    if (newToken) {
      localStorage.setItem('token', newToken)
    }
  }

  private loadToken(): void {
    const localToken = localStorage.getItem('token')
    console.log('try to get local storaged token', localToken)
    this.setToken(localToken)
  }
}
