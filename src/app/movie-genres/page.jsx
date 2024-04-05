import React from 'react'
import MovieList from '../components/MovieList';

export default async function MovieListPage() {
    const res= await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en`)
    if(!res.ok){
        throw new Error('Something went wrong, please try again')
    }
    const data = await res.json();
    const results = data.genres;
  return (
    <div>
        <MovieList  results={results}/>
    </div>
  )
}
