import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { FooterExtendedComponent } from './components/footer-extended/footer-extended.component';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from '@material/material.module';

@NgModule({
  declarations: [FooterComponent, FooterExtendedComponent, CardComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [FooterComponent, FooterExtendedComponent, CardComponent],
})
export class SharedModule {}
