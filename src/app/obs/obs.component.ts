import { Component, OnInit } from '@angular/core';
import { Datasharing3Service } from '../data sharing service folder/datasharing3.service';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css']
})
export class ObsComponent implements OnInit {
  array: any;
 
  constructor(private mydata: Datasharing3Service) { 
    this.data()
  }

  ngOnInit(): void {
  }
  data() {
    this.mydata.getobsData().subscribe((res: any) => {
      console.log(res)
      this.array = res.products;
    },
      (err: any) => { console.log(err) })
    
    console.log(this.array);
  }


  }


// subscribe((res: any) => { console.log(res) },
//   (err: any) => { console.log(err) })