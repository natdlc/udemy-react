import './ExpenseItem.css';

function ExpenseItem() {
	return (
		<div className="expense-item">
			<div>May 23rd 2022</div>
			<div className="expense-item__description">
				<h2>Breakfast</h2>
				<div className="expense-item__price">300</div>
			</div>
		</div>
	);
};

export default ExpenseItem;
