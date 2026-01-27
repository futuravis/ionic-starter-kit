import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiLabelsPage } from './ui-labels.page';
import { UiLabelsPageRoutingModule } from './ui-labels-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, UiLabelsPageRoutingModule],
  declarations: [UiLabelsPage],
})
export class UiLabelsPageModule {}
