'use client'
import React, { useEffect, useState } from 'react'
import MovieCard from "./moviecard";
import { searchMovies } from "./fetchMovies";
import Link from "next/link";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debounced, setDebounced] = useState(searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(debounced);
    }, 600);

    return () => clearTimeout(timer);
  }, [debounced]);

  useEffect(() => {
    searchMovies(searchTerm || "Marvel").then((movies) => {
      setMovies(movies);
    });
  }, [searchTerm]);

  return (
    <div className="app">
      <h1 className="font-bold"> MovieLand </h1>

      <div className="search flex flex-row">
        <input className=" text-white focus:cursor-auto"
          placeholder="Search for movies..."
          value={debounced}
          onChange={(e) => {
            setDebounced(e.target.value);
          }}
        />

        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={() => {
          searchMovies(searchTerm);
        }}>
          <path d="M29.8594 29.8594L39.4219 39.4219" stroke="#D88769" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.9062 33.0469C26.2682 33.0469 33.0469 26.2682 33.0469 17.9062C33.0469 9.54431 26.2682 2.76562 17.9062 2.76562C9.54431 2.76562 2.76562 9.54431 2.76562 17.9062C2.76562 26.2682 9.54431 33.0469 17.9062 33.0469Z" stroke="#D88769" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie: movie) => (
            <Link target="_blank" href={`https://www.imdb.com/title/${movie.imdbID}/`} key={movie.imdbID}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      ) : (
        <div>
          <h2>Nothing to show...</h2>
        </div>
      )}
    </div>
  );
};

export default App;