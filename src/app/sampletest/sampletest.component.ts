import { compileDeclareInjectableFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Datasharing4Service } from '../data sharing service folder/datasharing4.service';

@Component({
  selector: 'app-sampletest',
  templateUrl: './sampletest.component.html',
  styleUrls: ['./sampletest.component.css']
})
export class SampletestComponent implements OnInit {
  data: any;

  constructor(private mydt: Datasharing4Service) { }

  ngOnInit(): void {
    this.getdata();
    this.senddata();
    this.updatedata();
  }

  getdata() {
    this.mydt.getApidata().subscribe((res: any) => { console.log(res.data) },
      (err: any) => { console.log(err) });
  }

  senddata() {
    this.data = {
      name: 'sujata',
      job: 'Asst. Professor',
     
    }
    this.mydt.sendApidata(this.data).subscribe(
      (res: any) => {
        console.log(res);
      }
    )
    
  }

  updatedata() {
    this.data = {
      name: 'Priya',
      job:'Asst. Professor',
    }
    this.mydt.updateApidata(this.data).subscribe(
      (res: any) => { console.log(res); }
    )
    
  }

  deldata() {
    
  }
}
