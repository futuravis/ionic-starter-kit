import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'config',
        loadChildren: () => import('../components/components.module').then(m => m.ComponentsPageModule)
      },
      {
        path: 'libs',
        loadChildren: () => import('../ui-library/ui-library.module').then(m => m.UiLibraryPageModule)
      },
      {
        path: 'components',
        loadChildren: () => import('../components/components.module').then(m => m.ComponentsPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'typography',
        loadChildren: () => import('../typography/typography.module').then(m => m.TypographyPageModule)
      },
      {
        path: 'colors',
        loadChildren: () => import('../colors/colors.module').then(m => m.ColorsPageModule)
      },
      {
        path: 'ui-library',
        loadChildren: () => import('../ui-library/ui-library.module').then(m => m.UiLibraryPageModule)
      },
      {
        path: 'ui-layout',
        loadChildren: () => import('../ui-layout/ui-layout.module').then(m => m.UiLayoutPageModule)
      },
      {
        path: 'ui-collapsible-header',
        loadChildren: () => import('../ui-collapsible-header/ui-collapsible-header.module').then(m => m.UiCollapsibleHeaderPageModule)
      },
      {
        path: 'ui-navigation',
        loadChildren: () => import('../ui-navigation/ui-navigation.module').then(m => m.UiNavigationPageModule)
      },
      {
        path: 'ui-actions',
        loadChildren: () => import('../ui-actions/ui-actions.module').then(m => m.UiActionsPageModule)
      },
      {
        path: 'ui-buttons',
        loadChildren: () => import('../ui-buttons/ui-buttons.module').then(m => m.UiButtonsPageModule)
      },
      {
        path: 'ui-labels',
        loadChildren: () => import('../ui-labels/ui-labels.module').then(m => m.UiLabelsPageModule)
      },
      {
        path: 'ui-inputs',
        loadChildren: () => import('../ui-inputs/ui-inputs.module').then(m => m.UiInputsPageModule)
      },
      {
        path: 'ui-cards',
        loadChildren: () => import('../ui-cards/ui-cards.module').then(m => m.UiCardsPageModule)
      },
      {
        path: 'ui-lists',
        loadChildren: () => import('../ui-lists/ui-lists.module').then(m => m.UiListsPageModule)
      },
      {
        path: 'ui-data-display',
        loadChildren: () => import('../ui-data-display/ui-data-display.module').then(m => m.UiDataDisplayPageModule)
      },
      {
        path: 'ui-overlays',
        loadChildren: () => import('../ui-overlays/ui-overlays.module').then(m => m.UiOverlaysPageModule)
      },
      {
        path: 'ui-feedback',
        loadChildren: () => import('../ui-feedback/ui-feedback.module').then(m => m.UiFeedbackPageModule)
      },
      {
        path: 'ui-chips',
        loadChildren: () => import('../ui-chips/ui-chips.module').then(m => m.UiChipsPageModule)
      },
      {
        path: 'ui-avatars',
        loadChildren: () => import('../ui-avatars/ui-avatars.module').then(m => m.UiAvatarsPageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
