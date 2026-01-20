import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiAvatarsPage } from './ui-avatars.page';
import { UiAvatarsPageRoutingModule } from './ui-avatars-routing.module';
import { UiModule } from '../shared/ui/ui.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, UiAvatarsPageRoutingModule, UiModule],
  declarations: [UiAvatarsPage],
})
export class UiAvatarsPageModule {}
