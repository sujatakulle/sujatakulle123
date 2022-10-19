import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  dataFromParentToChild: any;
  childdatavar: any;
  @ViewChild(ChildComponent) childcmp: any;
  constructor() {
    this.dataFromParentToChild = "This is data from parent to child component";
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.childcmp.ex);
  } 

  childdata(ev: any) {
    console.log("this is custom event");
    this.childdatavar = ev;
    console.log(ev);
  }
}