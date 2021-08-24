import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss'],
})
export class LaptopComponent implements OnInit {
  @Input() location: string;
  constructor() {
    this.location = '';
  }

  ngOnInit(): void {}
}
