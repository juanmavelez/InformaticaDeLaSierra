import { Component, OnInit, Input } from '@angular/core';
import { ICard } from '@core/models/card.model';
import { RoutingService } from '@core/services/routing.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: ICard;
  @Input() cardType: string;

  constructor(public routingService: RoutingService) {
    this.cardType = 'default';
    this.card = {
      name: '',
      title: '',
      content: '',
      newUrl: '',
      imageUrl: '',
    };
  }

  ngOnInit(): void {}
}
