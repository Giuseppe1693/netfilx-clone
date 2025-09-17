import React from "react";

function MovieCard({ movie }) {
  const poster =
    movie.Poster && movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x445?text=No+Image";

  return (
    <article className="relative w-80 aspect-[16/9] rounded overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-110 cursor-pointer">
      <img src={poster} alt={movie.Title} className="w-full h-full object-cover object-center" />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
        <h3 className="text-white font-semibold text-sm text-center">{movie.Title}</h3>
        <p className="text-gray-300 text-xs">{movie.Year}</p>
      </div>
    </article>
  );
}

export default MovieCard;
