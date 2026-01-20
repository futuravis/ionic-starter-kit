import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiNavigationPage } from './ui-navigation.page';
import { UiNavigationPageRoutingModule } from './ui-navigation-routing.module';
import { UiModule } from '../shared/ui/ui.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, UiNavigationPageRoutingModule, UiModule],
  declarations: [UiNavigationPage],
})
export class UiNavigationPageModule {}
