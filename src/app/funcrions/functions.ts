export function getCurrency(currencies: any[], wantedCurrency: string) {
  const foundCurrency = currencies.find(currency => currency[0] === wantedCurrency);

  if (!foundCurrency) {
    return;
  }

  return foundCurrency[1];
};

export function formatCurrency(value: number, dividedCurrency: number, multiCurrency: number,) {
  return Math.floor(value * multiCurrency / dividedCurrency * 100) / 100;
}