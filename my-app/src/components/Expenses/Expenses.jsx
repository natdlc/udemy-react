import { useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import Filter from "./Filter/Filter";

const Expenses = (props) => {
	const [yearSelected, setYearSelected] = useState("2020")
	const yearChangeHandler = (year) => {
		console.log(year);
		setYearSelected(year);
	}
	return (
		<Card className="expenses">
			<Filter onYearChange={yearChangeHandler} yearSelected={yearSelected} />
			<ExpenseItem
				title={props.expenses[0].title}
				amount={props.expenses[0].amount}
				date={props.expenses[0].date}
			/>
			<ExpenseItem
				title={props.expenses[1].title}
				amount={props.expenses[1].amount}
				date={props.expenses[1].date}
			/>
			<ExpenseItem
				title={props.expenses[2].title}
				amount={props.expenses[2].amount}
				date={props.expenses[2].date}
			/>
			<ExpenseItem
				title={props.expenses[3].title}
				amount={props.expenses[3].amount}
				date={props.expenses[3].date}
			/>
		</Card>
	);
};

export default Expenses;
