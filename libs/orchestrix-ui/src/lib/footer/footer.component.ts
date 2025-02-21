import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FooterLink {
  label: string;
  url: string;
}

@Component({
  selector: 'lib-orchestrix-ui-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() footerText?: string;
  @Input() links: FooterLink[] = [];
}
