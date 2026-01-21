import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { UiModule } from '../shared/ui/ui.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, HomePageRoutingModule, UiModule],
  declarations: [HomePage],
})
export class HomePageModule {}
