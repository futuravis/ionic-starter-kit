import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiActionsPage } from './ui-actions.page';

const routes: Routes = [
  {
    path: '',
    component: UiActionsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UiActionsPageRoutingModule {}
