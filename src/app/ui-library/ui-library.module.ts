import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiLibraryPage } from './ui-library.page';
import { UiLibraryPageRoutingModule } from './ui-library-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, UiLibraryPageRoutingModule],
  declarations: [UiLibraryPage],
})
export class UiLibraryPageModule {}
