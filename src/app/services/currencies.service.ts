import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Url } from 'src/types/Url';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(private http: HttpClient,) { }

  getCurrencies() {
    return this.http.get<Url>('https://openexchangerates.org/api/latest.json?app_id=ac592b2489b641c8a2c05fa1403616bf');
  }
}
