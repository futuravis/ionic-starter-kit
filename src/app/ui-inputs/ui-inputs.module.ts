import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiInputsPage } from './ui-inputs.page';
import { UiInputsPageRoutingModule } from './ui-inputs-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, UiInputsPageRoutingModule],
  declarations: [UiInputsPage],
})
export class UiInputsPageModule {}
