import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiDataDisplayPage } from './ui-data-display.page';
import { UiDataDisplayPageRoutingModule } from './ui-data-display-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, UiDataDisplayPageRoutingModule],
  declarations: [UiDataDisplayPage],
})
export class UiDataDisplayPageModule {}
