import { useEffect, useState } from "react";
import useFetch from "../../hooks/use-fetch";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {

	const fetchedResponse = useFetch({
		url: "https://react-practice-d28a1-default-rtdb.firebaseio.com/tasks.json",
		head: {
			method: "POST",
			body: JSON.stringify({ text: "" }),
			headers: {
				"Content-Type": "application/json",
			},
		},
		logic: (data, arg) => {
			const generatedId = data.name; // firebase-specific => "name" contains generated id
			const createdTask = { id: generatedId, text: arg };

			props.onAddTask(createdTask);
		},
	});

	return (
		<Section>
			<TaskForm
				onEnterTask={fetchedResponse.fetchHandler}
				loading={fetchedResponse.isLoading}
			/>
			{fetchedResponse.error && <p>{fetchedResponse.error}</p>}
		</Section>
	);
};

export default NewTask;
