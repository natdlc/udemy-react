import { useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import Filter from "./Filter/Filter";

const Expenses = (props) => {
	const [yearSelected, setYearSelected] = useState("2020");

	const filteredExpenses = props.expenses.filter(
		(expense) => expense.date.getFullYear() === +yearSelected
	);

	const yearChangeHandler = (year) => {
		setYearSelected(year);
	};

	let expensesContent = <p>No expenses found</p>;

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((expense) => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}

	return (
		<Card className="expenses">
			<Filter onYearChange={yearChangeHandler} yearSelected={yearSelected} />
			{expensesContent}
		</Card>
	);
};

export default Expenses;
