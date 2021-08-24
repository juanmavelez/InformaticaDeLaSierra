import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComputerRoutingModule } from './computer-routing.module';
import { ComputerComponent } from './components/computer/computer.component';

import { SharedModule } from '@shared/shared.module';
@NgModule({
  declarations: [ComputerComponent],
  imports: [CommonModule, ComputerRoutingModule, SharedModule],
})
export class ComputerModule {}
