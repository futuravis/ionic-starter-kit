import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiFeedbackPage } from './ui-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: UiFeedbackPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UiFeedbackPageRoutingModule {}
