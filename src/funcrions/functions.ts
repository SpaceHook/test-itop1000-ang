export function getCurrency(currencies: any[], wantedCurrency: string) {
  const foundCurrency = currencies.find(currency => currency[0] === wantedCurrency);

  if (!foundCurrency) {
    return;
  }

  return foundCurrency[1];
};

export function formatCurrency(currency: number) {
  return Math.floor(currency * 100) / 100;
}