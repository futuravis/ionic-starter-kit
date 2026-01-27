import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiFeedbackPage } from './ui-feedback.page';
import { UiFeedbackPageRoutingModule } from './ui-feedback-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, UiFeedbackPageRoutingModule],
  declarations: [UiFeedbackPage],
})
export class UiFeedbackPageModule {}
