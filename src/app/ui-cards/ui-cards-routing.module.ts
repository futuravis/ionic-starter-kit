import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiCardsPage } from './ui-cards.page';

const routes: Routes = [
  {
    path: '',
    component: UiCardsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UiCardsPageRoutingModule {}
