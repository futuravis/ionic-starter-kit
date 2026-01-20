import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiChipsPage } from './ui-chips.page';

const routes: Routes = [
  {
    path: '',
    component: UiChipsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UiChipsPageRoutingModule {}
