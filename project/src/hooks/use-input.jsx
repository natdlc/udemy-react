import { useState } from "react";

const useInput = (config) => {
	const [inputValue, setInputValue] = useState(config.initialInputValue);
	const [inputTouched, setInputTouched] = useState(false);

	const inputIsValid = config.inputValidator(inputValue);
	const inputIsInvalid = !inputIsValid && inputTouched;

	const inputChangeHandler = (event) => {
		setInputValue(event.target.value);
	};

	const inputBlurHandler = (event) => {
		setInputTouched(true);
	};
	const inputClasses = inputIsInvalid ? "form-control invalid" : "form-control";

	return {
		inputValue,
    inputIsValid,
    inputIsInvalid,
		setInputValue,
		setInputTouched,
		inputChangeHandler,
		inputBlurHandler,
		inputClasses,
	};
};

export default useInput;
