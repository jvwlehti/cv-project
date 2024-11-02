import { Component } from '@angular/core';
import { PORTOLIOITEMS } from '../../data/list-portofolioItems';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  portfolioItems = PORTOLIOITEMS;
}
