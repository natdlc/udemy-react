import useInput from "../hooks/use-input";

const BasicForm = () => {
	const firstNameValidator = (firstNameVal) => firstNameVal !== "";
	const lastNameValidator = (lastNameVal) => lastNameVal !== "";
	const emailValidator = (email) => email !== "" && email.includes("@");

	const firstName = useInput({
		initialValue: "",
		validator: firstNameValidator,
		errorText: "First name can't be empty",
	});
	const lastName = useInput({
		initialValue: "",
		validator: lastNameValidator,
		errorText: "Last name can't be empty",
	});

	const email = useInput({
		initialValue: "",
		validator: emailValidator,
		errorText: "Email is invalid or empty",
	});

	let formValid = false;

	let inputsValid = firstName.valid && lastName.valid && email.valid;

	if (inputsValid) formValid = true;

	const formSubmitHandler = (e) => {
		e.preventDefault();
		firstName.reset();
		lastName.reset();
		email.reset();
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div className="control-group">
				<div className={firstName.classes}>
					<label htmlFor="firstName">First Name</label>
					<input
						onChange={firstName.changeHandler}
						onBlur={firstName.blurHandler}
						onClick={firstName.clickHandler}
						type="text"
						id="firstName"
						value={firstName.value}
					/>
					{firstName.errorController}
				</div>
				<div className={lastName.classes}>
					<label htmlFor="lastName">Last Name</label>
					<input
						onChange={lastName.changeHandler}
						onBlur={lastName.blurHandler}
						onClick={lastName.clickHandler}
						type="text"
						id="lastName"
						value={lastName.value}
					/>
					{lastName.errorController}
				</div>
			</div>
			<div className={email.classes}>
				<label htmlFor="email">Email Address</label>
				<input
					onChange={email.changeHandler}
					onBlur={email.blurHandler}
					onClick={email.clickHandler}
					type="email"
					id="email"
					value={email.value}
				/>
				{email.errorController}
			</div>
			<div className="form-actions">
				<button disabled={!formValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
