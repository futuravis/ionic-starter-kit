import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-collapsible-header',
  templateUrl: './ui-collapsible-header.page.html',
  styleUrls: ['./ui-collapsible-header.page.scss'],
  standalone: false,
})
export class UiCollapsibleHeaderPage {
  onSearch() {
    // Hook into search action if needed.
  }

  onFilter() {
    // Hook into filter action if needed.
  }
}
