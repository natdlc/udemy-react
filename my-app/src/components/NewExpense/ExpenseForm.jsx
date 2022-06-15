import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ onSaveExpenseData }) => {
	const [isBtnClicked, setIsBtnClicked] = useState(false);
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");

	// one useState alternative
	// const [userInput, setUserInput] = useState({
	// 	title: "",
	// 	amount: "",
	// 	date: "",
	// });

	// const titleChangeHandler = (e) => {
	// 	// wrong, does not save the latest state
	// 	setUserInput({ ...userInput, title: e.target.value });

	// 	//guarantees latest state snapshot
	// 	setUserInput((prevState) => {
	// 		return { ...prevState, title: e.target.value };
	// 	});
	// };

	const titleChangeHandler = (e) => setTitle(e.target.value);
	const amountChangeHandler = (e) => setAmount(e.target.value);
	const dateChangeHandler = (e) => setDate(e.target.value);

	const submitHandler = (e) => {
		e.preventDefault();
		const newExpenseData = { title, amount: +amount, date: new Date(date) };
		onSaveExpenseData(newExpenseData);
		setTitle("");
		setAmount("");
		setDate("");
		setIsBtnClicked(false);
	};

	const openFormHandler = () => setIsBtnClicked(true);

	const cancelBtnHandler = () => setIsBtnClicked(false);

	return isBtnClicked ? (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input value={title} onChange={titleChangeHandler} type="text" />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						value={amount}
						onChange={amountChangeHandler}
						type="number"
						min="0.01"
						step="0.01"
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						value={date}
						onChange={dateChangeHandler}
						type="date"
						min="2019-01-01"
						max="2022-12-31"
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button onClick={cancelBtnHandler} type="button">
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	) : (
		<button onClick={openFormHandler}>Add New Expense</button>
	);
};

export default ExpenseForm;
