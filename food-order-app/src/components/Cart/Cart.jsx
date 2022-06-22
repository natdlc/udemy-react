import { useEffect } from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const closeModalHandler = () => {
		props.onModalClick(false);
	};

	const onRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const onAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	useEffect(() => {
		// console.log("from cart modal");
	}, [cartCtx.items]);

	const cartItems = (
		<ul className={classes["cart-items"]}>
			{cartCtx.items.map((item) => {
				return (
					<CartItem
						key={item.id}
						id={item.id}
						name={item.name}
						price={item.price}
						amount={item.amount}
						onRemove={onRemoveHandler.bind(null, item.id)}
						onAdd={onAddHandler.bind(null, item)}
					/>
				);
			})}
		</ul>
	);

	return (
		<Modal onModalClick={closeModalHandler}>
			{cartItems}
			<div className={classes.total}>
				<span>total amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button onClick={closeModalHandler} className={classes["button--alt"]}>
					Close
				</button>
				{hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
