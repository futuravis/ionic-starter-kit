import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-feedback',
  templateUrl: './ui-feedback.page.html',
  styleUrls: ['./ui-feedback.page.scss'],
  standalone: false,
})
export class UiFeedbackPage {
  items = Array.from({ length: 6 }, (_, index) => `Task ${index + 1}`);

  handleRefresh(event: CustomEvent): void {
    setTimeout(() => {
      const target = event.target as unknown as { complete: () => void };
      target.complete();
    }, 800);
  }

  loadMore(event: CustomEvent): void {
    setTimeout(() => {
      const nextItems = Array.from({ length: 4 }, (_, index) => `Task ${this.items.length + index + 1}`);
      this.items = [...this.items, ...nextItems];
      const target = event.target as unknown as { complete: () => void; disabled?: boolean };
      target.complete();
      if (this.items.length >= 18) {
        target.disabled = true;
      }
    }, 900);
  }
}
