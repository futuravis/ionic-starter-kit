import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-inputs',
  templateUrl: './ui-inputs.page.html',
  styleUrls: ['./ui-inputs.page.scss'],
  standalone: false,
})
export class UiInputsPage {
  projectName = 'Starter kit';
  ownerEmail = '';
  description = '';
  status = '';
  helper = 'Visible to anyone in the workspace.';
  error = 'Project name is required.';
  notes = '';
  blockedReason = '';
  textareaHelp = 'Shared with the delivery team.';
  textareaError = 'Please include a reason.';
  priority = '';
  assignees: string[] = [];
  notifyWatchers = true;
  urgent = false;
}
