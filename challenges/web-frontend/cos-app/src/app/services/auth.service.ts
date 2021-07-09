import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }


  private loginUrl = 'https://api-core-dev.caronsale.de/api/v1/authentication/';

  loginUser(body, userId) {
    return this.http.put<any>(this.loginUrl + userId, body);
  }


  getLoggedInUser(auth_token): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get('https://api-core-dev.caronsale.de/api/v1/auction/dealership', {headers: headers})
  }
  
  
  


}
