import { useState, useEffect } from "react";

const useFetch = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [tasks, setTasks] = useState([]);

  const fetchTasks = async (taskText) => {
		setIsLoading(true);
    setError(null);
    try {
      
			const response = await fetch(
				"https://react-practice-d28a1-default-rtdb.firebaseio.com/tasks.json"
      );
      

			if (!response.ok) {
				throw new Error("Request failed!");
			}

			const data = await response.json();
			const loadedTasks = [];

			for (const taskKey in data) {
				loadedTasks.push({ id: taskKey, text: data[taskKey].text });
			}

      setTasks(loadedTasks);
      console.log('goes here');
		} catch (err) {
			setError(err.message || "Something went wrong!");
		}
		setIsLoading(false);
	};

	useEffect(() => {
		fetchTasks();
	}, []);

	const taskAddHandler = (task) => {
		setTasks((prevTasks) => prevTasks.concat(task));
	};

	return {
		taskAddHandler,
		tasks,
		isLoading,
		error,
		fetchTasks,
	};
};

export default useFetch;
