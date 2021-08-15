import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { FooterExtendedComponent } from './components/footer-extended/footer-extended.component';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from '@material/material.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    FooterComponent,
    FooterExtendedComponent,
    CardComponent,
    CarouselComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [
    FooterComponent,
    FooterExtendedComponent,
    CardComponent,
    CarouselComponent,
    HeaderComponent,
  ],
})
export class SharedModule {}
