import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent, HeaderComponent, LayoutComponent, SidenavComponent } from '@orchestrix-ui';
import { HeaderAction, MenuItem, FooterLink } from '@orchestrix-ui';

@Component({
  selector: 'app-orchestrix-admin-root',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LayoutComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent
  ],
})
export class AdminDashboardComponent {
  adminHeaderActions: HeaderAction[] = [
    { label: 'Dashboard', route: '/admin/dashboard', icon: 'fa-home' },
    { label: 'Users', route: '/admin/users', icon: 'fa-users' },
    { label: 'Settings', onClick: () => this.openSettings(), icon: 'fa-cog' },
    { label: 'Logout', onClick: () => this.logout(), icon: 'fa-sign-out' }
  ];

  adminMenuItems: MenuItem[] = [
    { label: 'Overview', route: '/admin/dashboard', icon: 'fa-chart-bar' },
    {
      label: 'User Management',
      icon: 'fa-users-cog',
      children: [
        { label: 'Users', route: '/admin/users', icon: 'fa-user' },
        { label: 'Roles', route: '/admin/roles', icon: 'fa-user-shield' }
      ]
    },
    { label: 'Projects', route: '/admin/projects', icon: 'fa-project-diagram' },
    { label: 'Settings', route: '/admin/settings', icon: 'fa-cog' }
  ];

  footerLinks: FooterLink[] = [
    { label: 'Admin Guide', url: '/admin/guide' },
    { label: 'Support', url: '/admin/support' },
    { label: 'Privacy Policy', url: '/privacy' }
  ];

  constructor(private router: Router) {}

  openSettings(): void {
    this.router.navigate(['/admin/settings']);
  }

  logout(): void {
    // Implement logout logic
    this.router.navigate(['/login']);
  }
}
