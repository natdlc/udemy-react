import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
	const nameValidator = (nameValue) => {
		return nameValue.trim() !== "";
	};

	const name = useInput({
		initialInputValue: "",
		inputValidator: nameValidator,
	});

	const emailValidator = (emailValue) => {
		return emailValue.trim() !== "";
	};

	const email = useInput({
		initialInputValue: "",
		inputValidator: emailValidator,
	});

	let formIsValid = false;
	let inputsValid = name.inputIsValid && email.inputIsValid;

	if (inputsValid) {
		formIsValid = true;
	}

	const resetInputs = (input) => {
		input.setInputValue("");
		input.setInputTouched(false);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		resetInputs(name);
		resetInputs(email);
	};

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={name.inputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={name.inputChangeHandler}
					onBlur={name.inputBlurHandler}
					value={name.inputValue}
				/>
				{name.inputIsInvalid && (
					<p className="error-text">Name must not be empty.</p>
				)}
			</div>
			<div className={email.inputClasses}>
				<label htmlFor="email">Your Email</label>
				<input
					type="email"
					id="email"
					onChange={email.inputChangeHandler}
					onBlur={email.inputBlurHandler}
					value={email.inputValue}
				/>
				{email.inputIsInvalid && (
					<p className="error-text">Email must not be empty.</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
