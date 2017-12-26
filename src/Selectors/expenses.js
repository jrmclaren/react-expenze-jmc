import moment from 'moment';
// Get visible expenses
export default (expenses, {text, sortBy, startDate, endDate} ) => {
	return expenses.filter( ( expense ) => {
			const createdAtMoment = moment(expense.createdAt)
			let startDateMatch =  startDate? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
			let endDateMatch = endDate? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
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
