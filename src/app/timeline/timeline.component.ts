import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { TimelineItem } from '../timelineItem';
import { ITEMS } from '../list-timelineItems';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  items = ITEMS;
 };
