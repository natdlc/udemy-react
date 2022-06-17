import classes from "./User.module.css";

const User = (props) => {
	const deleteUserHandler = () => {
		props.onClickDelete(props.id);
	};
	return (
		<div onClick={deleteUserHandler} className={classes.user}>
			<p>{props.username}</p>
			<p>age: {props.age}</p>
		</div>
	);
};

export default User;
