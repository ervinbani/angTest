import { Component, Injectable } from '@angular/core';
import { AppService } from './app.service'


@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private appService: AppService){}
  title: string = 'bool';
  
  getFilms(){

  }
 
  async getInput(event: string): Promise<any>{
    console.log(event);
    const fRes = await this.appService.loadData(event);
  }
}
