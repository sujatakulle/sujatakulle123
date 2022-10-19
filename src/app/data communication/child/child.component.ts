import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentData: any;
  @Output() event = new EventEmitter<any>();
  dataFromChildToParent: any;
  ex: any;
  constructor() {

    this.dataFromChildToParent = "this is my data from child componant"
    this.ex="by using @viewchild method for child to Parent communication:this is child data"
   }

  ngOnInit(): void {
  }
   sendDataFromChild() {
     this.event.emit(this.dataFromChildToParent)
   }

}
// function output() {
//   throw new Error('Function not implemented.');


