import React from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useFetch from "./hooks/use-fetch";

function App() {
  const fetchedResponse = useFetch();

	return (
		<React.Fragment>
			<NewTask onAddTask={fetchedResponse.taskAddHandler} />
			<Tasks
				items={fetchedResponse.tasks}
				loading={fetchedResponse.isLoading}
				error={fetchedResponse.error}
				onFetch={fetchedResponse.fetchTasks}
			/>
		</React.Fragment>
	);
}

export default App;
