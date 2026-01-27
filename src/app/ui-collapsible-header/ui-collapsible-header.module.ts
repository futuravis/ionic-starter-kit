import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiCollapsibleHeaderPage } from './ui-collapsible-header.page';
import { UiCollapsibleHeaderPageRoutingModule } from './ui-collapsible-header-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, UiCollapsibleHeaderPageRoutingModule],
  declarations: [UiCollapsibleHeaderPage],
})
export class UiCollapsibleHeaderPageModule {}
