import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  name: string = "Sujata"
  link: any = "https://mail.google.com/mail/u/0/#inbox"
  lang: any = "Marathi";

  constructor() { }

  ngOnInit(): void {
  }
  detailedinformation() {
    console.log("hie, this is Angular coding session")
  }

}
