import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LayoutComponent } from '@orchestrix-ui';

@Component({
  selector: 'app-orchestrix-public-root',
  templateUrl: './public-dashboard.component.html',
  styleUrls: ['./public-dashboard.component.scss'],
  standalone: true,
  imports: [LayoutComponent, RouterModule, CommonModule],
})

export class PublicDashboardComponent implements OnInit {
  latestTasks: Array<{ title: string }> = [];
  spotlightProjects: Array<{ name: string }> = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadPublicData();
  }

  loadPublicData(): void {
    this.latestTasks = [
      { title: 'Taak 1: Introductie' },
      { title: 'Taak 2: Voorbereiding' },
      { title: 'Taak 3: Uitvoering' }
    ];

    this.spotlightProjects = [
      { name: 'Project Alpha' },
      { name: 'Project Beta' },
      { name: 'Project Gamma' }
    ];
  }
}
