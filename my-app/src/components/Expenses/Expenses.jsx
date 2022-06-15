import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import Filter from "./Filter/Filter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
	const [yearSelected, setYearSelected] = useState("2020");

	const filteredExpenses = props.expenses.filter(
		(expense) => expense.date.getFullYear() === +yearSelected
	);

	const yearChangeHandler = (year) => {
		setYearSelected(year);
	};

	return (
		<Card className="expenses">
			<Filter onYearChange={yearChangeHandler} yearSelected={yearSelected} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
};

export default Expenses;
