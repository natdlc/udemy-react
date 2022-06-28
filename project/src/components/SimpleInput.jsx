import { useState } from "react";

const SimpleInput = (props) => {
	const [nameInput, setNameInput] = useState("");

	const nameInputChangeHandler = (e) => {
		setNameInput(e.target.value);
	};

	const errorMsg = () => alert("name field cant be empty");

	const formSubmitHandler = (e) => {
		e.preventDefault();
		if (nameInput.length === 0) return errorMsg();
		setNameInput("");
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div className="form-control">
				<label htmlFor="name">Your Name</label>
				<input
					onChange={nameInputChangeHandler}
					value={nameInput}
					type="text"
					id="name"
				/>
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
