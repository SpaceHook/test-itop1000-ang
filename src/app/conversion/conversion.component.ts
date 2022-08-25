import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { formatCurrency, getCurrency } from 'src/app/funcrions/functions';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit, OnChanges {
  @Input() currencies: [string, number][] = [];
  @Input() currencyFrom: string = '';
  @Input() currencyTo: string = '';

  @Output() currencyFromChange = new EventEmitter();
  @Output() currencyToChange = new EventEmitter();

  amountFrom: number = 0;
  amountTo: number = 0;

  firstCurrency: number = 0;
  secondCurrency: number = 0;

  ngOnInit() {
    this.amountFrom = 0;
    this.amountTo = 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.firstCurrency = getCurrency(this.currencies, this.currencyFrom);
    this.secondCurrency = getCurrency(this.currencies, this.currencyTo);

    if ('currencyFrom' in changes) {
      this.amountTo = formatCurrency(this.amountFrom, this.firstCurrency, this.secondCurrency);
    }

    if ('currencyTo' in changes) {
      this.amountFrom = formatCurrency(this.amountTo, this.secondCurrency, this.firstCurrency);
    }
  }

  onKeyFrom(event: any) {
    this.amountTo = formatCurrency(event.target.value, this.firstCurrency, this.secondCurrency);
    this.amountFrom = event.target.value;
  }

  onChangeFrom(event: any) {   
    this.currencyFromChange.emit(event.target.value);
  }

  onKeyTo(event: any) {
    this.amountFrom = formatCurrency(event.target.value, this.secondCurrency, this.firstCurrency); 
    this.amountTo = event.target.value;
  }

  onChangeTo(event: any) {
    this.currencyToChange.emit(event.target.value);  
  }
}
