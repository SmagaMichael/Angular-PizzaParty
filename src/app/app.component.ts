import { Component } from '@angular/core';
import { Pizza } from './pizza';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pizzaparty';
  name = '4 fromages';

  // maSuperPizza est typée avec la chaine Pizza
  maSuperPizza : Pizza ={
    id:1,
    name : '4 fromages',
    price : 12,
    image :'4-fromages.jpg'
  };
}
