import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);
	const [moviesLoading, setMoviesLoading] = useState(false);

	const mapMovies = (movie) => {
		return {
			id: movie.episode_id,
			title: movie.title,
			releaseDate: movie.release_date,
			openingText: movie.opening_crawl,
		};
	};

	async function fetchMoviesHandler() {
		setMoviesLoading(true);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		const response = await fetch("https://swapi.dev/api/films/");
		const data = await response.json();
    setMovies(data.results.map(mapMovies));
		setMoviesLoading(false);
	}

	const onFetchMoviesHandler = () => {
		fetchMoviesHandler();
	};

	const moviesView = moviesLoading ? (
		<p>Loading data...</p>
	) : (
		<MoviesList movies={movies} />
	);

	return (
		<React.Fragment>
			<section>
				<button onClick={onFetchMoviesHandler}>Fetch Movies</button>
			</section>

			<section>{moviesView}</section>
		</React.Fragment>
	);
}

export default App;
