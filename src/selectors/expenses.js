import moment from 'moment'

// Gets the visible expenses in sorted order. Takes two arguments: expenses, which is the complete array of expenses, and filters that are used to filter the expenses shown.
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const createdAtMoment = moment(expense.createdAt)
      // If startDate is set on the calendar, check if the startDate is earlier than the createdAt of the expense, by day.
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
      const textMatch = expense.description.toLowerCase().includes  (text.toLowerCase())

      return startDateMatch && endDateMatch && textMatch
    })
    // Sorts the expenses by either date or amount,
    // if same date or amount, the one with the higher amount / date comes first
    .sort((a, b) => {
      if (sortBy === 'date') {
        const momentA = moment(a.createdAt)
        const momentB = moment(b.createdAt)
        if (momentA.isSame(momentB, 'day')) {
          return b.amount - a.amount
        }
        return b.createdAt - a.createdAt
      }
      if (sortBy === 'amount') {
        // When sorting by amount, the highest amount obviously comes first.
        // However, if the amounts are equal, the newer expense comes first.
        if (b.amount - a.amount === 0) {
          return b.createdAt - a.createdAt
        }
        return b.amount - a.amount
      }
    })
}

export default getVisibleExpenses