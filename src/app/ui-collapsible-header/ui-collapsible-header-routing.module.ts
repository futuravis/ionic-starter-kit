import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiCollapsibleHeaderPage } from './ui-collapsible-header.page';

const routes: Routes = [
  {
    path: '',
    component: UiCollapsibleHeaderPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UiCollapsibleHeaderPageRoutingModule {}
