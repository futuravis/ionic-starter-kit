import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiNavigationPage } from './ui-navigation.page';

const routes: Routes = [
  {
    path: '',
    component: UiNavigationPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UiNavigationPageRoutingModule {}
