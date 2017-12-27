const selectExpensesTotal = expenses => {
  return expenses
    .map(expense => expense.amount)
    .reduce((prevValue, value) => (prevValue + value), 0);
}
export { selectExpensesTotal }