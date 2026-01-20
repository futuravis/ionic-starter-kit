import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, HomePageRoutingModule],
  declarations: [HomePage]
})
export class HomePageModule {}
