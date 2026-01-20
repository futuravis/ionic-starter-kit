import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroPage } from './intro.page';
import { IntroPageRoutingModule } from './intro-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, IntroPageRoutingModule],
  declarations: [IntroPage]
})
export class IntroPageModule {}
