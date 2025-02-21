import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface MenuItem {
  label: string;
  route?: string;
  icon?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'lib-orchestrix-ui-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() menuItems: MenuItem[] = [];
}
