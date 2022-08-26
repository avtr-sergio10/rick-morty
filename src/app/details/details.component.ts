import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
import { Character } from '../character';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() character?: Character;
  constructor( private route: ActivatedRoute, public rest: RestService) {}

  ngOnInit(): void {
      // First get the character id from the current route.
      const routeParams = this.route.snapshot.paramMap;
      const characterIdFromRoute = Number(routeParams.get('id'));

      this.getCharacter(characterIdFromRoute);
  }

  getCharacter(id:number): void {
    this.rest.getCharacter(id).subscribe((resp: any) => {
      this.character = resp;
      console.log(this.character);
    });
  }

}
