import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const App = () => {
	const [isCartModalOpen, setIsCartModalOpen] = useState(false);

	const modalClickHandler = (selection) => {
		setIsCartModalOpen(selection);
	};

	const cartModalHelper = isCartModalOpen ? (
		<Cart onModalClick={modalClickHandler} />
	) : (
		false
	);

	return (
    <>
      {cartModalHelper}
			<Header onModalClick={modalClickHandler} />
			<main>
				<Meals />
			</main>
		</>
	);
};

export default App;
