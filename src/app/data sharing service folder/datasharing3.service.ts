import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Datasharing3Service {

  constructor(private http: HttpClient) { }
  getobsData() {
    return this.http.get(("https://dummyjson.com/products"));
  }

}
