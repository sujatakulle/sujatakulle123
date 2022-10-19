import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piping',
  templateUrl: './piping.component.html',
  styleUrls: ['./piping.component.css']
})
export class PipingComponent implements OnInit {
  name:string='sujata'
  date: any = new Date();
  salary: any = 10000;
  constructor() { }

  ngOnInit(): void {
  }

}
