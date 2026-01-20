import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiLayoutPage } from './ui-layout.page';
import { UiLayoutPageRoutingModule } from './ui-layout-routing.module';
import { UiModule } from '../shared/ui/ui.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, UiLayoutPageRoutingModule, UiModule],
  declarations: [UiLayoutPage],
})
export class UiLayoutPageModule {}
