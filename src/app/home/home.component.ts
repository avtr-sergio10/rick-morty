import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Character } from '../character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  characters: Character[] = [];

  constructor(public rest: RestService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.rest.getCharacters().subscribe((resp: any) => {
      this.characters = resp.results;
      console.log(this.characters);
    });
  }


}
