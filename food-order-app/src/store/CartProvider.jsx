import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;

		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id
		);

		const itemFound = state.items[existingCartItemIndex];

		if (itemFound) {
			itemFound.amount += action.item.amount;

			return {
				items: state.items,
				totalAmount: updatedTotalAmount,
			};
		}

		const updatedItems = state.items.concat(action.item);

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	return defaultCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

	const addItemToCartHandler = (item) => {
		dispatchCart({ type: "ADD", item });
	};

	const removeItemFromCartHandler = (id) => {
		dispatchCart({ type: "REMOVE", id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
