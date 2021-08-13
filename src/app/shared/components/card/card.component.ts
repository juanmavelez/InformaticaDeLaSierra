import { Component, OnInit, Input } from '@angular/core';
import { ICard } from '@core/models/card.model';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: ICard;
  @Input() cardType: string;

  constructor() {
    this.cardType = 'normal';
    this.card = {
      title: '',
      content: '',
      newUrl: '',
      imageUrl: '',
    };
  }

  ngOnInit(): void {}
}
