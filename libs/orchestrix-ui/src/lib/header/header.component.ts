import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface HeaderAction {
  label: string;
  route?: string;
  onClick?: () => void;
  icon?: string;
}

@Component({
  selector: 'lib-orchestrix-ui-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() logo?: string;
  @Input() title?: string;
  @Input() actions: HeaderAction[] = [];
}
