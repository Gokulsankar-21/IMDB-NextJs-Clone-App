import Image from "next/image";
import React from "react";
export default async function MoviePage({ params }) {
  const movieId = params.id; // ithula nested ah kooda dynamic pages create pannikalam

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();
  //  console.log(movie);
  return (
    <div className="w-full pt-4 sm:pt-8">
      <div className="max-w-6xl mx-auto p-4 flex flex-col lg:flex-row md:space-x-6 content-center">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          priority={true}
      
          alt="movie-image"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          className="rounded-lg mx-auto"
        />
        <div className="p-2 sm:p-0">
          <h1 className="text-lg font-bold mt-1 sm:mt-0  mb-3">
            {movie.title || movie.name}
          </h1>
          <p className="text-base md:text-lg mb-3">
            <span className="mr-1 font-semibold">Overview:</span>
            {movie.overview}
          </p>

          <p className="mb-3">
            <span className="mr-1 font-semibold">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="mr-1 font-semibold">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
/**
 * in next section we will work on seach functionality
 */
