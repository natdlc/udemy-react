import { useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useState } from "react";

const MealItemForm = (props) => {
	const [amountValid, setAmountValid] = useState(true);
	const amountInputRef = useRef();
	const submitHandler = (e) => {
		e.preventDefault();
		const enteredAmount = +amountInputRef.current.value;
		if (enteredAmount.length === 0 || enteredAmount < 1 || enteredAmount > 5) {
			setAmountValid(false);
			return;
		}

		setAmountValid(true);
		props.onAddToCart(enteredAmount);
	};
	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: `amount_${props.id}`,
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
			/>
			<button>+ Add</button>
			{!amountValid && <p>Please enter valid amount</p>}
		</form>
	);
};

export default MealItemForm;
