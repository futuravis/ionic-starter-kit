import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiButtonsPage } from './ui-buttons.page';

const routes: Routes = [
  {
    path: '',
    component: UiButtonsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UiButtonsPageRoutingModule {}
