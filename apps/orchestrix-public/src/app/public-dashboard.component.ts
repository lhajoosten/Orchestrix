import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent, HeaderComponent, LayoutComponent, SidenavComponent } from '@orchestrix-ui';
import { HeaderAction, MenuItem, FooterLink } from '@orchestrix-ui';

@Component({
  selector: 'app-orchestrix-public-root',
  templateUrl: './public-dashboard.component.html',
  styleUrls: ['./public-dashboard.component.scss'],
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
export class PublicDashboardComponent {
  publicHeaderActions: HeaderAction[] = [
    { label: 'Home', route: '/home', icon: 'fa-home' },
    { label: 'Projects', route: '/projects', icon: 'fa-folder' },
    { label: 'About', route: '/about', icon: 'fa-info-circle' },
    { label: 'Login', route: '/login', icon: 'fa-sign-in' }
  ];

  publicMenuItems: MenuItem[] = [
    { label: 'Dashboard', route: '/dashboard', icon: 'fa-tachometer-alt' },
    { label: 'Projects', route: '/projects', icon: 'fa-folder-open' },
    { label: 'Resources', route: '/resources', icon: 'fa-book' },
    { label: 'Contact', route: '/contact', icon: 'fa-envelope' }
  ];

  footerLinks: FooterLink[] = [
    { label: 'About Us', url: '/about' },
    { label: 'Contact', url: '/contact' },
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Terms of Service', url: '/terms' }
  ];

  latestTasks = [
    { title: 'Getting Started Guide' },
    { title: 'Project Templates' },
    { title: 'Documentation' }
  ];

  spotlightProjects = [
    { name: 'Project Alpha', description: 'Featured project showcase' },
    { name: 'Project Beta', description: 'Innovation highlights' },
    { name: 'Project Gamma', description: 'Community spotlight' }
  ];

  constructor(private router: Router) {}
}
