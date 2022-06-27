import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);

	async function fetchMoviesHandler() {
		let response = await fetch("https://swapi.dev/api/films/");
		let data = await response.json();
		setMovies(
			data.results.map((movie) => {
				return {
					id: movie.episode_id,
					title: movie.title,
					releaseDate: movie.release_date,
					openingText: movie.opening_crawl,
				};
			})
		);
	}

	const onFetchMoviesHandler = () => {
		fetchMoviesHandler();
	};

	return (
		<React.Fragment>
			<section>
				<button onClick={onFetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				<MoviesList movies={movies} />
			</section>
		</React.Fragment>
	);
}

export default App;
