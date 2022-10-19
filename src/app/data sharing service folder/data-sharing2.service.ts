import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharing2Service {
private message = new BehaviorSubject("message to check communication");
  currentdata = this.message.asObservable();

  constructor() { }
  setMessage(msg:any) {
    this.message.next(msg);
  }
  
  getMessage() {
    return this.currentdata
  }
}
function next(msg: any) {
  throw new Error('Function not implemented.');
}

