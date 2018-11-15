const getExpensesTotalAmount = (expenses) => expenses.reduce((sum, current) => sum + current.amount, 0)

export default getExpensesTotalAmount