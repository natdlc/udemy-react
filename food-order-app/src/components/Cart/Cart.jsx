import { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
	const closeModalHandler = () => {
		props.onModalClick(false);
	};

	const cartItems = (
		<ul className={classes["cart-items"]}>
			{[
				{
					id: "c1",
					name: "sushi",
					amount: 2,
					price: 12.99,
				},
			].map((item) => (
				<li key={item.id}>{item.name}</li>
			))}
		</ul>
	);

	return (
    <Modal onModalClick={closeModalHandler}>
			{cartItems}
			<div className={classes.total}>
				<span>total amount</span>
				<span>35.62</span>
			</div>
			<div className={classes.actions}>
				<button onClick={closeModalHandler} className={classes["button--alt"]}>
					Close
				</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
