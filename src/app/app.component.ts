import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppName';


  exemple= "Test data binding"

  isDisable = true


onclick(){

  alert("Hello")
}


}
