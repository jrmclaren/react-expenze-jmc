import moment from 'moment';
// Filters reducers 
const filtersReducerDefaultState = {
		text: '', 
		sortBy: 'date', 
		startDate: moment().startOf('month'), 
		endDate: moment().endOf('month')
};

const  filtersReducer = ( state = filtersReducerDefaultState, action ) => {
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
			// get key from action function ignoring `type:`
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
export default filtersReducer;
