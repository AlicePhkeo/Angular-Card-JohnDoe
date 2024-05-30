import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { RouterLink } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CardComponent, RouterLink, SignUpComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {}
