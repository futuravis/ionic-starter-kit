import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiInputsPage } from './ui-inputs.page';
import { UiInputsPageRoutingModule } from './ui-inputs-routing.module';
import { UiModule } from '../shared/ui/ui.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, UiInputsPageRoutingModule, UiModule],
  declarations: [UiInputsPage],
})
export class UiInputsPageModule {}
