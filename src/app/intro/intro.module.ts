import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroPage } from './intro.page';
import { IntroPageRoutingModule } from './intro-routing.module';
import { UiModule } from '../shared/ui/ui.module';

@NgModule({
  imports: [IonicModule, CommonModule, IntroPageRoutingModule, UiModule],
  declarations: [IntroPage],
})
export class IntroPageModule {}
