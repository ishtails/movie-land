import { data } from "autoprefixer";
import Image from "next/image";
import React from "react";

type Props = {
  movie: movie;
}

const MovieCard = (props: Props) => {
  return (
    <div className="movie cursor-pointer" key={props.movie.imdbID}>
      <div>
        <p>{props.movie.Year}</p>
      </div>

      <div>
        <Image
          src={props.movie.Poster !== "N/A" ? props.movie.Poster : "/placeholder.png"}
          alt={props.movie.Title}
          width={1000}
          height={1500}
          priority={false}
          placeholder='blur'
          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
        />
      </div>

      <div>
        <span>{props.movie.Type}</span>
        <h3>{props.movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
