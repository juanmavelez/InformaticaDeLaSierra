import { Injectable } from '@angular/core';
import { urls } from '@core/urls';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  private urls = urls;
  constructor() {}

  get homeRoute(): string {
    return this.urls.home;
  }
  get contactRoute(): string {
    return this.urls.contact;
  }
  get computerRoute(): string {
    return this.urls.computer;
  }

  getRoute(route: string): string {
    switch (route) {
      case 'home':
        return this.homeRoute;
      case 'contact':
        return this.contactRoute;
      case 'computer':
        return this.computerRoute;

      default:
        return '';
    }
  }
}
