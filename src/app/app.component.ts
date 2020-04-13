import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'bool';
  spanContent: string ='';
  
 focusoutHandler(event) {
  console.log("the value is" + event.target.value);
  this.spanContent = event.target.value;
}
onBtnCLick(inp:HTMLTextAreaElement){
    this.spanContent = inp.value;
  }
}
