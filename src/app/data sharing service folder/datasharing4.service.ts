import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Datasharing4Service {

  constructor(private http: HttpClient) { }
  
  getApidata() {
    return this.http.get("https://reqres.in/api/users?page=2");
  }

  sendApidata(dt:any) {
    return this.http.post('https://reqres.in/api/users',dt)
  }

  updateApidata(dt1:any) {
    return this.http.put('https://reqres.in/api/users/2',dt1)
  }

  delApidata() {
    
  }

}
