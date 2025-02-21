import { Component, ContentChild, TemplateRef } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-orchestrix-ui-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [HeaderComponent, SidenavComponent, FooterComponent, CommonModule],
  standalone: true
})
export class LayoutComponent {
  @ContentChild('headerTemplate') headerTemplate?: TemplateRef<any>;
  @ContentChild('sidenavTemplate') sidenavTemplate?: TemplateRef<any>;
  @ContentChild('footerTemplate') footerTemplate?: TemplateRef<any>;
}
