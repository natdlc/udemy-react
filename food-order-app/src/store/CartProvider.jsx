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
		let updatedItems;

		if (itemFound) {
			const updatedItem = {
				...itemFound,
				amount: itemFound.amount + action.item.amount,
			};

			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	} else if (action.type === "REMOVE") {
		const cartItem = state.items.find((item) => item.id === action.id);

		cartItem.amount--;
		const updatedTotalAmount = state.totalAmount - cartItem.price;

		const updatedItems = [...state.items];

		if (cartItem.amount === 0) {
			const cartItemIndex = state.items.indexOf(cartItem);
			updatedItems.splice(cartItemIndex, 1);
		}

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
