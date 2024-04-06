import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  Name = 'Jere Lehtinen';
  title = 'Junior software developer & electrical engineer'
  bio = 'This is what I have say from myself'
}
