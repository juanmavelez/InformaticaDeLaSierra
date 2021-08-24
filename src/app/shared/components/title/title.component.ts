import { Component, OnInit, Input } from '@angular/core';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { IImages } from '@core/models/images.model';
import { RoutingService } from '@core/services/routing.service';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() title: string;
  @Input() images: IImages;

  constructor(public routingService: RoutingService) {
    this.title = '';
    this.images = {
      desktop: '',
      tablet: '',
      phone: '',
    };
  }

  ngOnInit(): void {}
}
