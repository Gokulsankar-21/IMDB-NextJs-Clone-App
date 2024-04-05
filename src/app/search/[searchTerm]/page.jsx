import Result from '@/app/components/Result';
import React from 'react'

export default async function SearchPage({params}) {
  // filesystem la iruka koodya param - client la address bar la iruka koodiyathu /search/serachTerm ithula searchTerm params ah nama filesystem la set panni irkom
  // 
    const searchTerm = params.searchTerm
   const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&include_adult=false&language=en-US&page=1`
   )
   if(!res.ok){
    throw new Error("Something went wrong. Please try again")
   }
   const data = await res.json();
   const results = data.results;

  return (
    <div>
    <Result result={results} />
    </div>
  )
}
/**
 * @next_js
 * na click pannum bothu api server la fetch agum athuku unda loading ah pakkava set pannanum
 * client la click bothu load agi server la res varum bothu thaniya ya oru loading effect ah tharunum
 */