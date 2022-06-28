import { useState, useRef } from "react";

const SimpleInput = (props) => {
	const nameInputRef = useRef();

	const nameInputChangeHandler = (e) => {
		const currentValue = nameInputRef.current.value;
		console.log(currentValue);
	};

	return (
		<form>
			<div className="form-control">
				<label htmlFor="name">Your Name</label>
				<input
					onChange={nameInputChangeHandler}
					ref={nameInputRef}
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
