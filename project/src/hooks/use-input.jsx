import { useState } from "react";

const useInput = (config) => {
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
