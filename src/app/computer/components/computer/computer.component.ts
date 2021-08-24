import { Component, Input, OnInit } from '@angular/core';
import { IImages } from '@core/models/images.model';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss'],
})
export class ComputerComponent implements OnInit {
  @Input() location: string;
  title: string;
  images: IImages;
  constructor() {
    this.location = '';
    this.title = 'Reparacion de portatiles';
    this.images = {
      desktop: 'assets/images/reparacion-desktop.jpg',
      tablet: 'assets/images/reparacion-tablet.jpg',
      phone: 'assets/images/reparacion-phone.jpg',
    };
  }

  ngOnInit(): void {}
}
