import { Component } from '@angular/core';
import type { ActionSheetButton, AlertButton, PickerButton, PickerColumn, ToastButton } from '@ionic/angular';

@Component({
  selector: 'app-ui-overlays',
  templateUrl: './ui-overlays.page.html',
  styleUrls: ['./ui-overlays.page.scss'],
  standalone: false,
})
export class UiOverlaysPage {
  isAlertOpen = false;
  isActionSheetOpen = false;
  isToastOpen = false;
  isLoadingOpen = false;
  isModalOpen = false;
  isPopoverOpen = false;
  isPickerOpen = false;
  popoverEvent?: Event;

  selectedPriority = 'Balanced';

  alertButtons: AlertButton[] = [
    { text: 'Cancel', role: 'cancel' },
    { text: 'Confirm', role: 'confirm' },
  ];

  actionSheetButtons: ActionSheetButton[] = [
    { text: 'Assign', icon: 'person-add-outline' },
    { text: 'Duplicate', icon: 'copy-outline' },
    { text: 'Delete', role: 'destructive', icon: 'trash-outline' },
    { text: 'Cancel', role: 'cancel' },
  ];

  toastButtons: ToastButton[] = [{ text: 'Undo', role: 'cancel' }];

  pickerColumns: PickerColumn[] = [
    {
      name: 'priority',
      options: [
        { text: 'Low', value: 'low' },
        { text: 'Balanced', value: 'balanced' },
        { text: 'High', value: 'high' },
      ],
    },
  ];

  pickerButtons: PickerButton[] = [
    { text: 'Cancel', role: 'cancel' },
    {
      text: 'Save',
      handler: value => {
        const nextValue = value?.priority?.text as string | undefined;
        if (nextValue) {
          this.selectedPriority = nextValue;
        }
      },
    },
  ];

  openPopover(event: Event): void {
    this.popoverEvent = event;
    this.isPopoverOpen = true;
  }

  openLoading(): void {
    this.isLoadingOpen = true;
    setTimeout(() => {
      this.isLoadingOpen = false;
    }, 1200);
  }
}
