import { Component } from '@angular/core';
import { CardOneComponent } from './card-one.component';
import { CardTwoComponent } from './card-two.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CardOneComponent, CardTwoComponent],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {}
