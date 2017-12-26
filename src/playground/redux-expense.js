import { createStore, combineReducers  } from 'redux';
import uuid from 'uuid';

// Reducers required
// ADD_EXPENSE
const addExpense = (
	{ 
		description = '', 
	  	note = '', 
	  	amount = 0, 
	  	createdAt = 0
	} = {}
) => ({
	type: 'ADD_EXPENSE',
	expense:	{
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
})
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id 
});
// EDIT_EXPENSE
const editExpense = ( id, updates ) => ({
	type: "EDIT_EXPENSE",
	id,
	updates
});
// SET_TEXT_FILTER
const setTextFilter = ( text = '' ) => ({
	type: "SET_TEXT_FILTER",
	text
});
// SORT_BY_DATE
const sortByDate = () => ({
	type: "SORT_BY_DATE",
	sortBy: 'date'
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
	type: "SORT_BY_AMOUNT",
	sortBy: 'amount'
});
// SET_START_DATE
const setStartDate =  startDate  => ( { 
	type: "SET_START_DATE",
	startDate
 });
// SET_END_DATE
const setEndDate =  endDate  => ({
	type: "SET_END_DATE",
	endDate
});
// Expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = ( state = expensesReducerDefaultState, action) => {
	switch(action.type){
		case 'ADD_EXPENSE':
			return [
				...state,
				action.expense
			];
		case 'REMOVE_EXPENSE':
 			 return state.filter( ( { id } ) => (id !== action.id) );
 		case 'EDIT_EXPENSE':
 			return state.map( expense => {
 				if(expense.id == action.id){
 					return { 
 						...expense, 
 						...action.updates
 					 }
 				} else {
 					return expense;
 				}
 			})
		default:
			return state;
	}
};

const filtersReducerDefaultState = {
		text: '', 
		sortBy: 'date', 
		startDate: undefined, 
		endDate: undefined
};

const filtersReducer = ( state = filtersReducerDefaultState, action ) => {
	switch(action.type){
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text
			};
		// use of fallthrough to stay D/R/Y
		case "SORT_BY_AMOUNT":
		case "SORT_BY_DATE" :
			return {
				...state,
				sortBy: action.sortBy
			}
		// use of fallthrough to stay D/R/Y
		case "SET_START_DATE": 
		case "SET_END_DATE":
			// get key from action function ignoring `type`
			const key = Object.keys(action)[1];
			return {
				// return the state
				...state,
				// return either the start or end date and it's value
				[key] : (action[key])
			}

		default: 
			return state;
	}
}

// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate} ) => {
	return expenses.filter( ( expense ) => {
			let startDateMatch =  typeof startDate !== 'number' || expense.createdAt >= startDate;
			let endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
			let textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
			// expenses.description as the text variable string inside of it
			// includes(); if one string includes another
			// convert both strings to lower case
			// 
			return startDateMatch && endDateMatch && textMatch;
	}).sort(( a, b  ) => {
		if( sortBy === 'date' ){
			return (a.createdAt < b.createdAt? 1 : -1);
		} else if( sortBy === 'amount') {
			return a.amount < b.amount? 1 : -1;
		}
	});
}

// Store creation 
const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
	);

store.subscribe( () => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch( addExpense( {description: 'Some rent', amount: 3100, createdAt: -21000} ) );
const expenseTwo = store.dispatch( addExpense( {description: 'Coffee', amount: 300, createdAt: -1000} ) );

// console.log(expenseOne);
// store.dispatch( removeExpense({id: expenseOne.expense.id }) );
// store.dispatch( editExpense(expenseTwo.expense.id, {amount: 500}) );
// store.dispatch( setTextFilter( 'rent' ));
// store.dispatch( setTextFilter());

store.dispatch(sortByAmount()); // amount
// store.dispatch(sortByDate()); // dates

// store.dispatch( setStartDate( 0 )  );
// store.dispatch( setStartDate()  );
// store.dispatch( setEndDate( 999 ) );
// store.dispatch( setEndDate() );

const demoState = {
	expenses: [{
		id: 'oinnkjnkjn',
		description: 'Rent',
		note: 'Hate rent',
		amount: 54500,
		createdAt: 0
	}],
	filters: {
		text: 'rent',
		sortBy: 'amount', // date or amount
		startDate: undefined,
		endDate: undefined
	}
};


