import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");

	const titleChangeHandler = (e) => {
		setTitle(e.target.value);
	};
	const amountChangeHandler = (e) => {
		setAmount(e.target.value);
	};
	const dateChangeHandler = (e) => {
		setDate(e.target.value);
	};

	const addExpenseHandler = (e) => {
		e.preventDefault(e.target.value);
	};

	return (
		<form action="">
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input onChange={titleChangeHandler} type="text" />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						onChange={amountChangeHandler}
						type="number"
						min="0.01"
						step="0.01"
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						onChange={dateChangeHandler}
						type="date"
						min="2022-01-01"
						max="2022-12-31"
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button onClick={addExpenseHandler} type="submit">
					Add Expense
				</button>
			</div>
		</form>
	);
};
export default ExpenseForm;
