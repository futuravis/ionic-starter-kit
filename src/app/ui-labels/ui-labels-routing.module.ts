import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiLabelsPage } from './ui-labels.page';

const routes: Routes = [
  {
    path: '',
    component: UiLabelsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UiLabelsPageRoutingModule {}
