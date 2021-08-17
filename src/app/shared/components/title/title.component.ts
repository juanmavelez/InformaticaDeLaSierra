import { Component, OnInit, Input } from '@angular/core';
import { IImages } from '@core/models/images.model';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() title: string;
  @Input() images: IImages;

  constructor() {
    this.title = '';
    this.images = {
      desktop: '',
      tablet: '',
      phone: '',
    };
  }

  ngOnInit(): void {}
}
