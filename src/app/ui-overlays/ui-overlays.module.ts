import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiOverlaysPage } from './ui-overlays.page';
import { UiOverlaysPageRoutingModule } from './ui-overlays-routing.module';
import { UiModule } from '../shared/ui/ui.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, UiOverlaysPageRoutingModule, UiModule],
  declarations: [UiOverlaysPage],
})
export class UiOverlaysPageModule {}
