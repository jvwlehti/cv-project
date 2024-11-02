import { Component, Input } from '@angular/core';
import { TimelineItem } from '../../interfaces/timelineItem';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrl: './timeline-item.component.css'
})
export class TimelineItemComponent {
  @Input() timelineItem?: TimelineItem;
}
