import { useEffect } from "react";
import { useState } from "react";

const useCounter = (expression) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(expression);
		}, 1000);

		return () => clearInterval(interval);
	}, [expression]);

	return counter;
};

export default useCounter;
