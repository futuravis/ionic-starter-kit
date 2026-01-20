import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiLayoutPage } from './ui-layout.page';

const routes: Routes = [
  {
    path: '',
    component: UiLayoutPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UiLayoutPageRoutingModule {}
