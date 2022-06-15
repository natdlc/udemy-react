import { useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import Filter from "./Filter/Filter";

const Expenses = (props) => {
	const [yearSelected, setYearSelected] = useState("2020");

	const showItems = (year) => {
		const expenses = props.expenses;
		const filtered = expenses.filter(
			(expense) => expense.date.getFullYear() == +year
		);
		const mappedExpenses = filtered.map((mappedExpense) => (
			<ExpenseItem
				key={mappedExpense.id}
				title={mappedExpense.title}
				amount={mappedExpense.amount}
				date={mappedExpense.date}
			/>
		));
		return mappedExpenses;
	};
	const [expenseItems, setExpenseItems] = useState(showItems(yearSelected));

	const yearChangeHandler = (year) => {
		setYearSelected(year);
		setExpenseItems(showItems(year));
	};

	return (
		<Card className="expenses">
			<Filter onYearChange={yearChangeHandler} yearSelected={yearSelected} />
			{expenseItems}
		</Card>
	);
};

export default Expenses;
