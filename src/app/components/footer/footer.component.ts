import { Component } from '@angular/core';
import { FooterLinksComponent } from './footer-links.component';
import { FooterSocialsComponent } from './footer-socials.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterLinksComponent, FooterSocialsComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}
