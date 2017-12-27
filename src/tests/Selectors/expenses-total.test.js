import { selectExpensesTotal } from '../../Selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 as default ', () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});

test('should correctly add up single expense', () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toBe(195);
});

test('should correctly add up multiple expense', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(114195);
});