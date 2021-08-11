import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() imageUrl: string;
  @Input() content: string;
  @Input() newUrl: string;

  constructor() {
    this.title = '';
    this.imageUrl = '';
    this.content = '';
    this.newUrl = '';
  }

  ngOnInit(): void {}
}
