import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, RouterLink, MenuComponent, SignUpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Card';
}
