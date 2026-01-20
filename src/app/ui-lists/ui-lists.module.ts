import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiListsPage } from './ui-lists.page';
import { UiListsPageRoutingModule } from './ui-lists-routing.module';
import { UiModule } from '../shared/ui/ui.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, UiListsPageRoutingModule, UiModule],
  declarations: [UiListsPage],
})
export class UiListsPageModule {}
