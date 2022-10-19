import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  frm: any;
  showdata: boolean = false;
  data: any = [];
  dlt: any;
  i: any;
  constructor() { }

  ngOnInit(): void {
  }
  submitevent(frm: any) {
    console.log("form is submitted");
    console.log(frm.value);
    this.showdata = true;
    this.data.push(frm.value);
    console.log(this.data);
  }

  deleteitem(dlt: any) {
    console.log("data is deleted")
    this.data.forEach((element: any) => {
      if (dlt.name == element.name) {
        this.i = this.data.indexOf(dlt)
        this.data.splice((this.i), 1)
      }
    }
    );
  }
}