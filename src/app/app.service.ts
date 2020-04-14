import { Injectable } from '@angular/core';
import { HttpClient,  HttpClientModule } from '@angular/common/http';
import { FilmData, FilmDetail } from './model/filmData';



@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  loadData(input: string): Promise<any> {
    const url: string= 'https://api.themoviedb.org/3/search/movie?api_key=936b60fb6691f67d5eda3a0a29507da1&query=' + input + ' language=it_IT';
  
    /*const data = {
        api_key:'936b60fb6691f67d5eda3a0a29507da1',
        query:input,
        language:'it_IT',
    };*/
    return this.http.get(url).toPromise();

  }

}
