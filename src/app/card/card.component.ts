
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

imageSrc: string ="https://randomuser.me/api/portraits/lego/2.jpg";

name: string ="Doe";
firstname: string ="John";
age: number =30;
quote: string = "";

isShow: boolean = false;

hiddenAge(): void  {
  this.isShow = !this.isShow;
}

}
