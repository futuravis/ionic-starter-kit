import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiCardsPage } from './ui-cards.page';
import { UiCardsPageRoutingModule } from './ui-cards-routing.module';
import { UiModule } from '../shared/ui/ui.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, UiCardsPageRoutingModule, UiModule],
  declarations: [UiCardsPage],
})
export class UiCardsPageModule {}
