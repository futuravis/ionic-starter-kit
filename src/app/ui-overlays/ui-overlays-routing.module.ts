import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiOverlaysPage } from './ui-overlays.page';

const routes: Routes = [
  {
    path: '',
    component: UiOverlaysPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UiOverlaysPageRoutingModule {}
