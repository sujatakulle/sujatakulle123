import { Component, OnInit } from '@angular/core';
import { DataSharing2Service } from '../data sharing service folder/data-sharing2.service';

@Component({
  selector: 'app-first2',
  templateUrl: './first2.component.html',
  styleUrls: ['./first2.component.css']
})
export class First2Component implements OnInit {

  constructor(private first2: DataSharing2Service) { }

  ngOnInit(): void {
  }

}
