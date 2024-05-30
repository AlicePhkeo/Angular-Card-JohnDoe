import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, MenuComponent, CardComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

}
