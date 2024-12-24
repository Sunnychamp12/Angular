import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _strTestString = "";
  title = 'Welcome to Angular Sunny Champ';
  intNum = 100;
  getValue(paramStrVal:any) {
    return paramStrVal;
    
  }
  testFunction(paramStrVal:string){
    this._strTestString = this.getValue(paramStrVal);
    console.warn(this._strTestString);
  }
}
