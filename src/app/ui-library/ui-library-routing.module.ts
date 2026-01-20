import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiLibraryPage } from './ui-library.page';

const routes: Routes = [
  {
    path: '',
    component: UiLibraryPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UiLibraryPageRoutingModule {}
