import { Component, OnInit } from '@angular/core';
import { cards } from '@core/cards';
import { ICard } from '@core/models/card.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  cards: ICard[];
  constructor() {
    this.cards = cards;
  }

  ngOnInit(): void {}
}
