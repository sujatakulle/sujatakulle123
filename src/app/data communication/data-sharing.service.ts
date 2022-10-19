import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private message = new BehaviorSubject("This is bydefault msg");
  currentData = this.message.asObservable(); //these two code line are compalsary
  
  constructor() { }
  setMessage(msg: any) {
    // console.log(msg);
    this.message.next(msg);
    
  }

  getMessage() {
    return this.currentData
  }

}
