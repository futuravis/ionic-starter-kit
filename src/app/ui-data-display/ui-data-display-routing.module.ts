import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiDataDisplayPage } from './ui-data-display.page';

const routes: Routes = [
  {
    path: '',
    component: UiDataDisplayPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UiDataDisplayPageRoutingModule {}
