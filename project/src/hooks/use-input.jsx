import { useState, useReducer } from "react";

const reducer = (state, action) => {
	switch (action.type) {
		case "USER_CHANGE":
			console.log(state);
			return { value: action.value, valid: state.validator(action.value) };
	}
};

const useInput = (config) => {
	const initialState = {
		value: config.initialValue,
		touched: false,
	};

	const [inputState, dispatchInput] = useReducer(reducer, initialState);

	const [value, setValue] = useState(config.initialValue);
	const [touched, setTouched] = useState(false);

	let valid = config.validator(value);
	let invalid = !valid && touched;

	let classes = invalid ? "form-control invalid" : "form-control";

	let errorView = <p className="error-text">{config.errorText}</p>;
	let errorController = invalid ? errorView : "";

	const changeHandler = (e) => setValue(e.target.value);

	const blurHandler = (e) => setTouched(true);
	const clickHandler = (e) => setTouched(false);

	const reset = () => {
		setValue("");
		setTouched(false);
	};

	return {
		value,
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
