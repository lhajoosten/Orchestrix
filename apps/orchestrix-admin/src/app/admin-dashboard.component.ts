import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LayoutComponent } from '@orchestrix-ui';

@Component({
  selector: 'app-orchestrix-admin-root',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  standalone: true,
  imports: [LayoutComponent, RouterModule],
})

export class AdminDashboardComponent implements OnInit {
  activeUsers = 0;
  systemStatus = 'Onbekend';

  constructor(private router: Router /*, private authService: AuthService */) {}

  ngOnInit(): void {
    // Initialiseer dashboardgegevens, bv. door een service aan te roepen
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    // Hier zou je data ophalen via een service. Voor nu wat dummy data:
    this.activeUsers = 125;
    this.systemStatus = 'Online';
  }

  openUserProfile(): void {
    // Logica om het gebruikersprofiel te openen
    console.log('Open user profile');
    // Bijvoorbeeld: navigeer naar het profieloverzicht
    this.router.navigate(['/admin/profile']);
  }

  logout(): void {
    // Logica om uit te loggen
    console.log('User logged out');
    // Als je een AuthService gebruikt, roep dan de logout methode aan
    // this.authService.logout();
    // Navigeer naar de loginpagina
    this.router.navigate(['/login']);
  }
}
