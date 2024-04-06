import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  Name = 'Jere Lehtinen';
  title = 'Junior software developer & electrical engineer'
  bio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales urna vitae est venenatis mollis. Proin mattis lectus nisi, nec posuere quam cursus sit amet. Donec id nisl ullamcorper, luctus orci sed, elementum augue. Vestibulum a justo et dolor ornare fermentum. Curabitur et enim id massa placerat tempor. Ut posuere dignissim ultricies. '
}
