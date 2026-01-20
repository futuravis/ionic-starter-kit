import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CustomAvatarComponent } from './avatar/custom-avatar.component';
import { CustomBadgeComponent } from './badge/custom-badge.component';
import { CustomButtonClearComponent } from './button/custom-button-clear.component';
import { CustomButtonComponent } from './button/custom-button.component';
import { CustomButtonOutlineComponent } from './button/custom-button-outline.component';
import { CustomCardComponent } from './card/custom-card.component';
import { CustomChipComponent } from './chip/custom-chip.component';
import { CustomInputComponent } from './input/custom-input.component';
import { CustomLabelComponent } from './label/custom-label.component';
import { CustomListItemComponent } from './list-item/custom-list-item.component';
import { CustomSelectComponent } from './select/custom-select.component';
import { CustomTextareaComponent } from './textarea/custom-textarea.component';
import { CustomToggleComponent } from './toggle/custom-toggle.component';

@NgModule({
  imports: [CommonModule, RouterModule, IonicModule],
  declarations: [
    CustomAvatarComponent,
    CustomBadgeComponent,
    CustomButtonClearComponent,
    CustomButtonComponent,
    CustomButtonOutlineComponent,
    CustomCardComponent,
    CustomChipComponent,
    CustomInputComponent,
    CustomLabelComponent,
    CustomListItemComponent,
    CustomSelectComponent,
    CustomTextareaComponent,
    CustomToggleComponent,
  ],
  exports: [
    CustomAvatarComponent,
    CustomBadgeComponent,
    CustomButtonClearComponent,
    CustomButtonComponent,
    CustomButtonOutlineComponent,
    CustomCardComponent,
    CustomChipComponent,
    CustomInputComponent,
    CustomLabelComponent,
    CustomListItemComponent,
    CustomSelectComponent,
    CustomTextareaComponent,
    CustomToggleComponent,
  ],
})
export class UiModule {}
