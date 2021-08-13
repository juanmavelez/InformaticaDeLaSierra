import { Component } from '@angular/core';
//temporal
import { cards } from '@core/cards';
import { ICard } from '@core/models/card.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'InformaticaDeLaSierra';
  card: ICard;
  constructor() {
    this.card = cards.computer;
  }
}
