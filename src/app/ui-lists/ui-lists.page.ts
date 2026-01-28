import { Component } from '@angular/core';
import type { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-ui-lists',
  templateUrl: './ui-lists.page.html',
  styleUrls: ['./ui-lists.page.scss'],
  standalone: false,
})
export class UiListsPage {
  reorderItems = [
    { title: 'Review access request', subtitle: 'Due today' },
    { title: 'Schedule deployment', subtitle: 'Tomorrow' },
    { title: 'Update status page', subtitle: 'This week' },
  ];

  handleReorder(event: CustomEvent<ItemReorderEventDetail>): void {
    const from = event.detail.from;
    const to = event.detail.to;
    const updated = [...this.reorderItems];
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    this.reorderItems = updated;
    event.detail.complete();
  }
}
