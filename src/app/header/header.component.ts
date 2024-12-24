import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  _strTestString = "";
  title = 'Welcome to Angular Champ';
  intNum = 100;
  getValue() {
    return "Welcome to angular Champ";
  }
  testFunction(){
    this._strTestString = this.getValue();
  }
}
