import { Component } from '@angular/core';
import {SKILLSITEMS} from "../../data/list-skillsItems";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillItems = SKILLSITEMS;
}
