import { Component, Input, input } from '@angular/core';
import { PortfolioItem } from '../../portfolioItem';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.css'
})
export class PortfolioItemComponent {
  @Input() portfolioItem? : PortfolioItem
}
