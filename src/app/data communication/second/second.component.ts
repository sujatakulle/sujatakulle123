import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  data: any;

  constructor(private datasecond: DataSharingService) {
    this.datasecond.getMessage().subscribe((res: any) => {
      console.log(res)
      this.data = res;
    })

  }
    
  

  ngOnInit(): void {
  }

}