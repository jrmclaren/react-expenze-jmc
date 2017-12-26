import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ( {description, amount, createdAt, id} = {} ) => (
			<div>
				<hr />
				<Link to={`/edit/${id}`}>
					<h3>{description}</h3>
				</Link>
				<p>Amount: {amount}</p>
				<p> Timestamp: {createdAt}</p>

			</div> 
		);
export default ExpenseListItem;
