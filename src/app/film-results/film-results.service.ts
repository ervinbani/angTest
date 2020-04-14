import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmResultsService {
  
  constructor() { }
  getResults(filmName: string){
    console.log("nome del film" + filmName);
  }
}
