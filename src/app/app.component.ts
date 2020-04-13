import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bool';
  
 focusoutHandler(event) {
  console.log("the value is" + event.target.value);
}
}
