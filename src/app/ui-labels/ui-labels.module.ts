import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiLabelsPage } from './ui-labels.page';
import { UiLabelsPageRoutingModule } from './ui-labels-routing.module';
import { UiModule } from '../shared/ui/ui.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, UiLabelsPageRoutingModule, UiModule],
  declarations: [UiLabelsPage],
})
export class UiLabelsPageModule {}
