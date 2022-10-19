import { Component, OnInit } from '@angular/core';
import { Datasharing1Service } from '../data sharing service folder/datasharing1.service';
import { Datasharing3Service } from '../data sharing service folder/datasharing3.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  data: any = [];
  
  constructor(private mydata: Datasharing1Service, private mydata2: Datasharing3Service) { 
    console.log(this.mydata);
    this.getservicecompdata();
  }

  ngOnInit(): void {
  }
  getservicecompdata() {
    this.mydata.getservicedata().subscribe(
      (res: any) => {
        console.log(res)
      this.data=res.products},
      (err: any) => { console.log(err) });
    
  }


}
