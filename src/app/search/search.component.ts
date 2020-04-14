import { Component,Input,  OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }
  @Output() user = new EventEmitter<{film:string}>();
 
  addInput(inp){
      //this.spanContent = inp.value;
      debugger
      this.user.emit(inp);
     
    }
  
  ngOnInit(): void {
  }

}
