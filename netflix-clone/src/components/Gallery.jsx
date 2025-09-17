import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const OMDB_KEY = import.meta.env.VITE_OMDB_KEY;

function Gallery({ query, title }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let abort = false;
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_KEY}&s=${encodeURIComponent(query)}`);
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        if (data.Response === "False") throw new Error(data.Error || "No results");
        if (!abort) setMovies(data.Search || []);
      } catch (err) {
        if (!abort) setError(err.message);
      } finally {
        if (!abort) setLoading(false);
      }
    }
    fetchData();
    return () => {
      abort = true;
    };
  }, [query]);

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>

      {loading && (
        <div className="py-8 flex justify-center">
          <div className="loader">Loading...</div>
        </div>
      )}

      {error && <div className="bg-red-600 text-white p-3 rounded">Errore: {error}</div>}

      {!loading && !error && (
        <div className="flex overflow-x-auto space-x-4 py-2 scroll-smooth snap-x snap-mandatory scrollbar-hide">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="snap-start">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Gallery;
