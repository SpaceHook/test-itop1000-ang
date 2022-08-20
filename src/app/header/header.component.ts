import { Component, Input, OnChanges } from '@angular/core';
import { formatCurrency, getCurrency } from 'src/funcrions/functions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./logo.scss', './header.component.scss']
})

export class HeaderComponent implements OnChanges {
  @Input() currencies: string[] = [];

  usd: number = 0;
  eur: number = 0;

  ngOnChanges() {
    const findUsd = getCurrency(this.currencies, 'USD');
    const findEur = getCurrency(this.currencies, 'EUR');
    const findUah = getCurrency(this.currencies, 'UAH');
    
    if (findUsd) {
      this.usd = formatCurrency(findUah[1]);
    }

    if (findEur) {
      this.eur = formatCurrency(findUah[1] / findEur[1]);
    }
  }
}
