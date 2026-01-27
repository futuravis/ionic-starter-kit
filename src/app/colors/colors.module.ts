import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColorsPage } from './colors.page';
import { ColorsPageRoutingModule } from './colors-routing.module';


@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, ColorsPageRoutingModule],
  declarations: [ColorsPage]
})
export class ColorsPageModule {}
