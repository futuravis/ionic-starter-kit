import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiButtonsPage } from './ui-buttons.page';
import { UiButtonsPageRoutingModule } from './ui-buttons-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, UiButtonsPageRoutingModule],
  declarations: [UiButtonsPage],
})
export class UiButtonsPageModule {}
