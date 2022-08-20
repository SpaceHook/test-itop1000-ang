import { Component, Input, OnInit } from '@angular/core';
import { formatCurrency, getCurrency } from 'src/funcrions/functions';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent {
  @Input() currencies: string[] = [];

  amountFrom: number = 0;
  amountTo: number = 0;
  currencyFrom: string = 'USD';
  currencyTo: string = 'UAH';

  onKeyFrom(event: any) {
    const firstCurrency = getCurrency(this.currencies, this.currencyFrom)[1];
    const secondCurrency = getCurrency(this.currencies, this.currencyTo)[1];
    
    this.amountTo = formatCurrency(event.target.value * secondCurrency / firstCurrency);
    this.amountFrom = event.target.value;
  }

  onChangeFrom(event: any) {   
    this.currencyFrom = event.target.value;
  
    const firstCurrency = getCurrency(this.currencies, this.currencyFrom)[1];
    const secondCurrency = getCurrency(this.currencies, this.currencyTo)[1];
    
    this.amountTo = formatCurrency(this.amountFrom * secondCurrency / firstCurrency);
  }

  onKeyTo(event: any) {
    const firstCurrency = getCurrency(this.currencies, this.currencyFrom)[1];
    const secondCurrency = getCurrency(this.currencies, this.currencyTo)[1];
    
    this.amountFrom = formatCurrency(event.target.value * firstCurrency / secondCurrency);
    this.amountTo = event.target.value;
  }

  onChangeTo(event: any) {
    this.currencyTo = event.target.value;

    const firstCurrency = getCurrency(this.currencies, this.currencyFrom)[1];
    const secondCurrency = getCurrency(this.currencies, this.currencyTo)[1];
    
    this.amountFrom = formatCurrency(this.amountTo * firstCurrency / secondCurrency); 
  }
}
