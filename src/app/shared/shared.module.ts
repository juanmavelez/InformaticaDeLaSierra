import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './components/footer/footer.component';
import { FooterExtendedComponent } from './components/footer-extended/footer-extended.component';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from '@material/material.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { TitleComponent } from './components/title/title.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    FooterComponent,
    FooterExtendedComponent,
    CardComponent,
    CarouselComponent,
    HeaderComponent,
    FormsComponent,
    TitleComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
  exports: [
    FooterComponent,
    FooterExtendedComponent,
    CardComponent,
    CarouselComponent,
    HeaderComponent,
    FormsComponent,
    TitleComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
