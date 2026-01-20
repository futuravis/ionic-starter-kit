import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiListsPage } from './ui-lists.page';

const routes: Routes = [
  {
    path: '',
    component: UiListsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UiListsPageRoutingModule {}
