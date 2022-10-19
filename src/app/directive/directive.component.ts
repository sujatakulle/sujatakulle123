import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  num: number = 40;
  city: any = ["Pune", 'Latur', 'Mumbai', "Solapur", "benglore"]
  numm: number = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
