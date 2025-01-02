import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  Name = 'Jere Lehtinen'
  Image = '/assets/profilePic.png'
  title = 'Software developer & Electrical engineer'
  bio = 'I am eager to learn and motivated by challenging myself in a variety of tasks. I value a flexible work environment that supports healthy professional growth. ' +
  'My interests are particularly focused on backend development and cloud environments, but I also want to expand my skills in different areas of software development and combine my knowledge in information and electrical engineering.'
}
