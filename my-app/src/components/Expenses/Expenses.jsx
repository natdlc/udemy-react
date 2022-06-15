import { useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import Filter from "./Filter/Filter";

const Expenses = (props) => {
	const [yearSelected, setYearSelected] = useState("2020");
	const yearChangeHandler = (year) => {
		setYearSelected(year);
	};
	return (
		<Card className="expenses">
			<Filter onYearChange={yearChangeHandler} yearSelected={yearSelected} />
			{props.expenses.map((expense) => {
				return (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				);
			})}
		</Card>
	);
};

export default Expenses;
