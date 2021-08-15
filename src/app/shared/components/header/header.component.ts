import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showNav: boolean;
  width: number;
  constructor() {
    this.showNav = false;
    this.width = window.innerWidth;
  }

  ngOnInit(): void {}

  click() {
    this.showNav = !this.showNav;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.width = window.innerWidth;
  }
}
