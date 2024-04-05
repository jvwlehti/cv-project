import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  Name = 'Jere Lehtinen';
  title = 'Junior software developer (with a electric engineer background)'
  bio = 'This is what I have say from myself'
}
