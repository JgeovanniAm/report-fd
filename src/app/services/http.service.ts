import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    })
  };

  constructor(
    private HttpClient: HttpClient,
    private router: Router
  ) { }

  public post(url: string, body: any): Observable<Object> {
    return this.HttpClient.post(url, body, this.httpOptions)
  }

  public get(url: string, token: any) {
    return this.HttpClient.get(url, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'report-access-token': token,
      })
    })
  }

  public token(): void {
    let token = localStorage.getItem('token');
    if (token) {
      this.get('/api/access', token).toPromise().catch(err => {
        this.router.navigate(['/'])
      })
    } else this.router.navigate(['/']);
  }
}
