import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FilmResultsService } from './film-results.service'

@Component({
  selector: 'app-film-results',
  templateUrl: './film-results.component.html',
  styleUrls: ['./film-results.component.scss']
})
export class FilmResultsComponent implements OnInit{
  constructor() { 
  }

  ngOnInit(): void {
  }

}
