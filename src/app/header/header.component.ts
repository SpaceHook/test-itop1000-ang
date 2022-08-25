import { Component, Input, OnChanges } from '@angular/core';
import { formatCurrency, getCurrency } from 'src/app/funcrions/functions';

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

    this.usd = Math.floor(findUah * 100) / 100;
    this.eur = Math.floor(findUah / findEur * 100) / 100;
  }
}
