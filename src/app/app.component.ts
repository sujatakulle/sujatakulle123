import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo5';
  html = [{ name: 'html2', path: 'html' },
    { name: 'html3', path: 'html/html3' },
    { name: 'html4', path: 'html/html4' },
  {name:'html5',path:'html/html5'},]

  constructor(private route1:Router) {

  }

  onSelectUGmenu(menu: any) {
    let route = menu.target.value;
    console.log(route);
    this.route1.navigate([route]);

    
  }

}
