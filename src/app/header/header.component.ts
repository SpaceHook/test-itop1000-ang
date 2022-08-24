import { Component, Input, OnChanges } from '@angular/core';
import { formatCurrency, getCurrency } from 'src/funcrions/functions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./logo.scss', './header.component.scss']
})

export class HeaderComponent implements OnChanges {
  @Input() currencies: [string, number][] = [];

  usd: number = 0;
  eur: number = 0;

  ngOnChanges() {
    const findEur = getCurrency(this.currencies, 'EUR');
    const findUah = getCurrency(this.currencies, 'UAH');

    this.usd = formatCurrency(findUah);
    this.eur = formatCurrency(findUah / findEur);
  }
}
