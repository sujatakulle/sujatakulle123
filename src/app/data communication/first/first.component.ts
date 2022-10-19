import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  samplefirstdata: any;

  constructor(private datafirst : DataSharingService,private router:Router) {
    this.datafirst.getMessage().subscribe((res: any) => {
      console.log(res)
      
    })
 
   }

  ngOnInit(): void {
  }
  senddtfirst() {
    console.log("hie");
    this.samplefirstdata = "this is data from first component"
    this.datafirst.setMessage(this.samplefirstdata);
    this.router.navigate(['second']);
  }
  
}
