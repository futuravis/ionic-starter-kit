import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiCardsPage } from './ui-cards.page';
import { UiCardsPageRoutingModule } from './ui-cards-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, UiCardsPageRoutingModule],
  declarations: [UiCardsPage],
})
export class UiCardsPageModule {}
