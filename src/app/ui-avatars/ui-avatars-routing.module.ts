import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiAvatarsPage } from './ui-avatars.page';

const routes: Routes = [
  {
    path: '',
    component: UiAvatarsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UiAvatarsPageRoutingModule {}
