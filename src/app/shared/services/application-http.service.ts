import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type RequestOptions = { headers: HttpHeaders, observe: 'response' }

@Injectable({
  providedIn: 'root'
})
export class ApplicationHttpService {

  public static readonly MEDIA_TYPE_APP_JSON = 'application/json';

  private BASE_URL: string = '/api'

  constructor(
    private httpClient: HttpClient,
  ) { }

  public get<T>(url: string, mediaType?: string): Observable<HttpResponse<T>> {
    return this.httpClient.get<T>(
      this.BASE_URL + url,
      this.generateHttpOptions(this.getMediaType(mediaType))
    );
  }

  post<T>(url: string, body: any, mediaType?: string): Observable<HttpResponse<T>> {
    return this.httpClient.post<T>(
      this.BASE_URL + url,
      body,
      this.generateHttpOptions(this.getMediaType(mediaType))
    );
  }

  put<T>(url: string, body: any, mediaType?: string): Observable<HttpResponse<T>> {
    return this.httpClient.put<T>(
      this.BASE_URL + url,
      body,
      this.generateHttpOptions(this.getMediaType(mediaType))
    );
  }

  delete<T>(url: string, mediaType?: string): Observable<HttpResponse<T>> {
    return this.httpClient.delete<T>(
      this.BASE_URL + url,
      this.generateHttpOptions(this.getMediaType(mediaType))
    );
  }

  private generateHttpOptions(mediaType: string): RequestOptions {
    return {
      headers: new HttpHeaders()
        .set('Accept', mediaType),
      observe: 'response'
    };
  }

  private getMediaType(mediaType: string | undefined): string {
    return mediaType
      ? mediaType
      : ApplicationHttpService.MEDIA_TYPE_APP_JSON
  }
}
