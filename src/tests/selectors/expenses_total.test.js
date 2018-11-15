import getExpensesTotalAmount from '../../selectors/expenses_total'
import expenses from '../fixtures/expenses'


describe('getting total amount of all expenses', () => {
  test('should return 0 with no expenses', () => {
    expect(getExpensesTotalAmount([])).toBe(0)
  })
  test('should correctly add up a single expense', () => {
    const expectedValue = expenses[0].amount
    expect(getExpensesTotalAmount([expenses[0]])).toBe(expectedValue)
  })
  test('should correctly add up multiple expenses', () => {
    const dummyExpenses = [{ amount: 1 }, { amount: 2 }, { amount: 0 }]
    const expectedValue = 3
    expect(getExpensesTotalAmount(dummyExpenses)).toBe(expectedValue)
  })
})