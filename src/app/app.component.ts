import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.scss']
})
export class AppComponent implements OnInit {
  currencies: any[] = [];

  getCurrencies() {
    return fetch('https://openexchangerates.org/api/latest.json?app_id=ac592b2489b641c8a2c05fa1403616bf')
    .then(res => res.json())
    .then(data => this.currencies = Object.entries(data.rates));
  }

  ngOnInit(): void {
    this.getCurrencies();
  }
}
