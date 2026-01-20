import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiInputsPage } from './ui-inputs.page';

const routes: Routes = [
  {
    path: '',
    component: UiInputsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UiInputsPageRoutingModule {}
