import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiActionsPage } from './ui-actions.page';
import { UiActionsPageRoutingModule } from './ui-actions-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, UiActionsPageRoutingModule],
  declarations: [UiActionsPage],
})
export class UiActionsPageModule {}
