import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { EDUCATIONITEMS } from '../../list-educationItems';
import { WORKITEMS } from '../../list-workItems';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  workItems = WORKITEMS;
  educationItems = EDUCATIONITEMS;
 };
