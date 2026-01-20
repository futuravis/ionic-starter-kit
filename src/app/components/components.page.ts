import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
  standalone: false,
})
export class ComponentsPage {
  toggleValue = true;
  rangeValue = 40;
  segmentValue = 'daily';
  radioValue = 'standard';
  selectValue = 'priority';
}
