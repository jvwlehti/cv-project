import {Component, Input} from '@angular/core';
import {SkillItem} from "../../interfaces/skillItem";

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrl: './skills-item.component.css'
})
export class SkillsItemComponent {
  @Input() skillItem?: SkillItem;
}
