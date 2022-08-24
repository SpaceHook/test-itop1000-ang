import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Url } from 'src/types/Url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.scss']
})
export class AppComponent implements OnInit {
  currencies: [string, number][] = [];
  currencyFrom: string = 'USD';
  currencyTo: string = 'UAH';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Url>('https://openexchangerates.org/api/latest.json?app_id=ac592b2489b641c8a2c05fa1403616bf')
    .subscribe(data => this.currencies = Object.entries(data.rates));
  }
}
