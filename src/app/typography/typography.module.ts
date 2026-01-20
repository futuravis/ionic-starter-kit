import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyPage } from './typography.page';
import { TypographyPageRoutingModule } from './typography-routing.module';
import { UiModule } from '../shared/ui/ui.module';


@NgModule({
  imports: [IonicModule, CommonModule, TypographyPageRoutingModule, UiModule],
  declarations: [TypographyPage]
})
export class TypographyPageModule {}
