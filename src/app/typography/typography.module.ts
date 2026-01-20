import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyPage } from './typography.page';
import { TypographyPageRoutingModule } from './typography-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, TypographyPageRoutingModule],
  declarations: [TypographyPage]
})
export class TypographyPageModule {}
