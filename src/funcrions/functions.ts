export function getCurrency(currencies: any[], wantedCurrency: string) {
  return currencies.find(currency => currency[0] === wantedCurrency)
};

export function formatCurrency(currency: number) {
  return Math.floor(currency * 100) / 100;
}