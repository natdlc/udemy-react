import { useReducer } from "react";

const reducer = (state, action) => {
	const updatedState = { touched: action.val, value: state.value };
	switch (action.type) {
		case "CHANGE":
			return { value: action.val, touched: state.touched };
		case "BLUR":
			return updatedState;
		case "CLICK":
			return updatedState;
		case "RESET":
			return updatedState;
		default:
			throw new Error();
	}
};

const useInput = (config) => {
	const [input, dispatchInput] = useReducer(reducer, {
		value: config.initialValue,
		touched: false,
	});

	let valid = config.validator(input.value);
	let invalid = !valid && input.touched;

	let classes = invalid ? "form-control invalid" : "form-control";

	let errorView = <p className="error-text">{config.errorText}</p>;
	let errorController = invalid ? errorView : "";

	const changeHandler = (e) =>
		dispatchInput({ type: "CHANGE", val: e.target.value });

	const blurHandler = (e) => dispatchInput({ type: "BLUR", val: true });
	const clickHandler = (e) => dispatchInput({ type: "CLICK", val: false });

	const reset = () => {
		dispatchInput({ type: "CHANGE", val: "" });
		dispatchInput({ type: "RESET", val: false });
	};

	return {
		value: input.value,
		valid,
		classes,
		errorController,
		changeHandler,
		blurHandler,
		clickHandler,
		reset,
	};
};

export default useInput;
