import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    { path: 'menu', component: MenuComponent},
    { path: 'signup', component: SignUpComponent},
    { path: 'user', component: CardComponent},
    { path: '', component: CardComponent},
];
