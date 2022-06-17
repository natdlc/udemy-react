import { useState } from "react";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
	const [usernameState, setUsernameState] = useState("");
	const [ageState, setAgeState] = useState("");
	const [usernameValid, setUsernameValid] = useState(true);
	const [ageValid, setAgeValid] = useState(true);
	const [isErrorModalOpenedState, setIsErrorModalOpenedState] = useState(false);

	const handleErrorModalConfirm = (isModalOpened) => {
		setIsErrorModalOpenedState(isModalOpened);
	};

	const addUserHandler = (event) => {
		event.preventDefault();
		if (usernameState.trim().length === 0 || ageState < 1 || ageState > 150) {
			setIsErrorModalOpenedState(true);
			!usernameState && setUsernameValid(false);
			!(ageState >= 1 && ageState <= 150) && setAgeValid(false);
			return;
		}
		props.onAddUser({
			user: usernameState,
			age: +ageState,
			id: Math.random().toString(),
		});
		setUsernameState("");
		setAgeState("");
	};

	const usernameChangeHandler = (e) => {
		setUsernameValid(true);
		setUsernameState(e.target.value);
	};
	const ageChangeHandler = (e) => {
		setAgeValid(true);
		setAgeState(e.target.value);
	};

	const usernameValidity = !usernameValid && styles.usernameInvalid;
	const ageValidity = !ageValid && styles.ageInvalid;

	const errorMessage = "Invalid username or age"
				
			

	return (
		<Card className={`${styles.test} test2`}>
			{isErrorModalOpenedState && (
				<ErrorModal title={"ERROR"} message={errorMessage} onModalOpened={handleErrorModalConfirm} />
			)}
			<form onSubmit={addUserHandler} className={`${styles["form-wrapper"]}`}>
				<div className={`${styles["form-control-wrapper"]}`}>
					<label className={`${usernameValidity}`} htmlFor="username">
						username
					</label>
					<input
						value={usernameState}
						onChange={usernameChangeHandler}
						className="basic-input"
						type="text"
						id="username"
					/>
				</div>
				<div className={styles["form-control-wrapper"]}>
					<label className={`${ageValidity}`} htmlFor="age">
						age
					</label>
					<input
						value={ageState}
						onChange={ageChangeHandler}
						className="basic-input"
						type="number"
						id="age"
					/>
				</div>
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};
export default AddUser;
