import classes from "./ErrorModal.module.css";
import Button from "../Button";

const ErrorModal = (props) => {
	const handleErrorModalClose = () => {
		props.onModalOpened(false);
	};

	return (
		<div className={classes["error-modal"]}>
			<h1>{props.title}</h1>
			<p>{props.message}</p>
			<Button onClick={handleErrorModalClose}>Close</Button>
		</div>
	);
};

export default ErrorModal;
