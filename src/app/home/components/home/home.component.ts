import { Component, OnInit } from '@angular/core';
import { cards } from '@core/cards';
import { ICard } from '@core/models/card.model';
import { IImages } from '@core/models/images.model';
import { urls } from '@core/urls';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string;
  images: IImages;
  cards: ICard[];
  urls = urls;
  constructor() {
    this.title = 'Resuelva sus problemas informáticos';
    this.images = {
      desktop: 'assets/images/home-desktop.jpeg',
      tablet: 'assets/images/home-tablet.jpeg',
      phone: 'assets/images/home-phone.png',
    };
    this.cards = cards;
  }

  ngOnInit(): void {}
}
