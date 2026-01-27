import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiChipsPage } from './ui-chips.page';
import { UiChipsPageRoutingModule } from './ui-chips-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, UiChipsPageRoutingModule],
  declarations: [UiChipsPage],
})
export class UiChipsPageModule {}
