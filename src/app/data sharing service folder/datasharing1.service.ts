import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Datasharing1Service {
  sample1: any;
  constructor(private http: HttpClient) {
    
  }
  getservicedata() {
    return this.http.get(("https://dummyjson.com/products"));
  }

  getobsData() {
    this.http.get(("https://dummyjson.com/products/categorie"))
  }
}


