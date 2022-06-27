import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMoviesHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(
				"https://react-practice-d28a1-default-rtdb.firebaseio.com/movies.json"
			);
			if (!response.ok) {
				throw new Error("Something went wrong!");
			}

			const data = await response.json();
			console.log(data);

			const loadedMovies = [];

			for (const key in data) {
				const { title, openingText, releaseDate } = data[key];
				loadedMovies.push({
					id: key,
					title,
					openingText,
					releaseDate,
				});
			}

			const transformedMovies = loadedMovies.map((movieData) => {
				const { id, title, openingText, releaseDate } = movieData;
				return { id, title, openingText, releaseDate };
			});
			setMovies(transformedMovies);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		fetchMoviesHandler();
	}, [fetchMoviesHandler]);

	async function addMovieHandler(movie) {
		console.log(movie);
		const response = await fetch(
			"https://react-practice-d28a1-default-rtdb.firebaseio.com/movies.json",
			{
				method: "POST",
				body: JSON.stringify(movie),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		const data = await response.json();
		console.log(data);
	}

	let content = <p>Found no movies.</p>;

	if (movies.length > 0) {
		content = <MoviesList movies={movies} />;
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	return (
		<React.Fragment>
			<section>
				<AddMovie onAddMovie={addMovieHandler} />
			</section>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>{content}</section>
		</React.Fragment>
	);
}

export default App;
