// Gets the visible expenses in sorted order. Takes two arguments: expenses, which is the complete array of expenses, and filters that are used to filter the expenses shown.
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt   >= startDate
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <=  endDate
      const textMatch = expense.description.toLowerCase().includes  (text.toLowerCase())

      return startDateMatch && endDateMatch && textMatch
    })
    // Sorts the expenses by either date or amount
    .sort((a, b) => {
      if (sortBy === 'date') {
        return b.createdAt - a.createdAt
      }
      if (sortBy === 'amount') {
        // When sorting by amount, the highest amount obviously comes first.
        // However, if the amounts are equal, the newer expense comes first.
        if (b.amount - a.amount !== 0) {
          return b.amount - a.amount
        }
        return b.createdAt - a.createdAt
      }
    })
}

export default getVisibleExpenses