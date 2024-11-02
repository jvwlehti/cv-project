import { Component } from '@angular/core';

import { EDUCATIONITEMS } from '../../data/list-educationItems';
import { WORKITEMS } from '../../data/list-workItems';
import {SKILLSITEMS} from "../../data/list-skillsItems";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  workItems = WORKITEMS;
  educationItems = EDUCATIONITEMS;
  skillItems = SKILLSITEMS;
 };
