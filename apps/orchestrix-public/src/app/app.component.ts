import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '@orchestrix-ui';

@Component({
  selector: 'app-orchestrix-public-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [LayoutComponent, RouterModule],
})

export class AppComponent {
  title = 'orchestrix-public';
}
