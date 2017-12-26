
import { addExpense, editExpense, removeExpense } from '../../Actions/expenses';
// Remove expense test
test(' Should return remove expense action object', () => {
	const action = removeExpense({ id: '123ABC' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123ABC'
	});
});
// Edit expense test
test(' Should return edited expense', () => {
	const action = editExpense('123ABC',{note: 'updated note'});
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123ABC',
		updates:{
			note: 'updated note'
		}
	});
});
// Add expense test
test('Should add expense with provided values', () => {
	const expenseData = {
		description: 'Rent',
		amount: 109500,
		createdAt: 1000,
		note: 'This was a test'
	}
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	});
});
//Add expense defaults type
test('Should setup expense with default values ', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			description: '',
			amount: 0, 
			createdAt: 0, 
			note: '',
			id: expect.any(String)
		}
	})
});