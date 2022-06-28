import { useState } from "react";

const useFetch = (request) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [logicValue, setLogicValue] = useState(request.logicState);

	const fetchHandler = async (arg) => {
		setIsLoading(true);
		setError(null);
		try {
      const response = await fetch(request.url, request.head);
			if (!response.ok) {
				throw new Error("Request failed!");
			}

			const data = await response.json();
			setLogicValue(request.logic(data, arg));
		} catch (err) {
			setError(err.message || "Something went wrong!");
		}
		setIsLoading(false);
	};

	return {
		logicValue,
		setLogicValue,
		isLoading,
		error,
		fetchHandler,
	};
};

export default useFetch;
