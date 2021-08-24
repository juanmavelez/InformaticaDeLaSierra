import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaptopRoutingModule } from './laptop-routing.module';
import { LaptopComponent } from './components/laptop/laptop.component';

import { SharedModule } from '@shared/shared.module';
@NgModule({
  declarations: [LaptopComponent],
  imports: [CommonModule, LaptopRoutingModule, SharedModule],
})
export class LaptopModule {}
