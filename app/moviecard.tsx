import Image from "next/image";
import React from "react";

type Props = {
  movie: movie;
}

const dataURI = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="

const MovieCard = (props: Props) => {
  return (
    <div className="movie cursor-pointer" key={props.movie.imdbID}>
      <div>
        <p>{props.movie.Year}</p>
      </div>

      <div>
        <Image
          src={props.movie.Poster !== "N/A" ? props.movie.Poster : "https://via.placeholder.com/400"}
          alt={props.movie.Title}
          width={300}
          height={300}
          quality={75}
          priority={false}
          placeholder='blur'
          blurDataURL={`data:image/png;base64,${dataURI}`}
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