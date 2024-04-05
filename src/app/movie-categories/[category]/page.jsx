import Result from '@/app/components/Result';
import React from 'react'

export default async function page({params}) {
  const category = params.category;
  console.log(category);
  const genreId = getGenreId(category)
  console.log(genreId);
  function getGenreId(cat){
   if(cat === "Action") return '28'
   if(cat === "Adventure") return '12'
   if(cat === "Animation") return '16'
   if(cat === "Comedy") return '35'
   if(cat === "Crime") return '80'
   if(cat === "Documentary") return '99'
   if(cat === "Drama") return '18'
   if(cat === "Family") return '10751'
   if(cat === "Fantasy") return '14'
   if(cat === "History") return '36'
   if(cat === "Horror") return '27'
   if(cat === "Music") return '10402'
   if(cat === "Mystery") return '9648'
   if(cat === "Romance") return '10749'
   if(cat === "Science Fiction") return '878'
   if(cat === "TV Movie ") return '10770'
   if(cat === "Music") return '10402'
   if(cat === "Thriller") return '53'
   if(cat === "War") return '10752'
   if(cat === "Western") return '37'
    }
  
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}&api_key=${process.env.API_KEY}`)
    
    if(!res.ok){
      throw new Error("Something went wrong, please try again ")
    }
    const data = await res.json();
    const results = data.results;

  return (
    <div>
      <h1 className='text-2xl font-semibold text-amber-500 mt-3 mb-1 text-center hover:underline cursor-pointer'>{category}</h1>
      <Result result={results} />
    </div>
  )
}
/*


*/