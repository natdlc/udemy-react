import { useState } from "react";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
	const [usernameState, setUsernameState] = useState("");
	const [ageState, setAgeState] = useState("");

	const addUserHandler = (event) => {
		event.preventDefault();
		props.onAddUser({
			user: usernameState,
			age: +ageState,
			id: Math.random().toString(),
		});
	};

	const usernameChangeHandler = (e) => setUsernameState(e.target.value);
	const ageChangeHandler = (e) => setAgeState(e.target.value);

	return (
		<Card className={`${styles.test} test2`}>
			<form onSubmit={addUserHandler} className={`${styles["form-wrapper"]}`}>
				<div className={styles["form-control-wrapper"]}>
					<label htmlFor="username">username</label>
					<input
						value={usernameState}
						onChange={usernameChangeHandler}
						className="basic-input"
						type="text"
						id="username"
					/>
				</div>
				<div className={styles["form-control-wrapper"]}>
					<label htmlFor="age">age</label>
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
