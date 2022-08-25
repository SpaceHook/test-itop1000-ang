import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from './services/currencies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.scss']
})
export class AppComponent implements OnInit {
  currencies: [string, number][] = [];
  currencyFrom: string = 'USD';
  currencyTo: string = 'UAH';

  constructor(private currenciesService: CurrenciesService) {}

  ngOnInit(): void {
    this.currenciesService.getCurrencies()
      .subscribe(data => this.currencies = Object.entries(data.rates));
  }
}
