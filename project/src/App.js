import React, { useEffect } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useFetch from "./hooks/use-fetch";

function App() {
	const logic = (data) => {
		const loadedTasks = [];

		for (const taskKey in data) {
			loadedTasks.push({ id: taskKey, text: data[taskKey].text });
		}

		return loadedTasks;
	};

	const fetchedResponse = useFetch({
		url: "https://react-practice-d28a1-default-rtdb.firebaseio.com/tasks.json",
		logic,
		logicState: [],
	});

	useEffect(() => {
		fetchedResponse.fetchHandler();
	}, []);

	const taskAddHandler = (task) => {
		fetchedResponse.setLogicValue((prevTasks) => prevTasks.concat(task));
	};

	return (
		<React.Fragment>
			<NewTask onAddTask={taskAddHandler} />
			<Tasks
				items={fetchedResponse.logicValue}
				loading={fetchedResponse.isLoading}
				error={fetchedResponse.error}
				onFetch={fetchedResponse.fetchHandler}
			/>
		</React.Fragment>
	);
}

export default App;
