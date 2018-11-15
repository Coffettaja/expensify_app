import numeral from 'numeral'

numeral.register('locale', 'fr', {
  delimiters: {
    thousands: ' ',
    decimal: ','
  },
  currency: {
    symbol: '€'
  }
})
numeral.locale('fr')


export default (amount) => numeral(amount / 100).format('0,0.00$')