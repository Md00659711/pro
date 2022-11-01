import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = 'election-dev/index.php';
  api_key='StripePaymentDev';
  constructor(private _http: HttpClient) { }

  public postLogin(req : any):Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('api-key', this.api_key);
    return this._http.post<any>(`${this.baseUrl}/User/sheetLogin`,req,{headers: headers});
  }
}
