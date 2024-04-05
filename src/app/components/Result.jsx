import React from "react";
import Card from "./Card";

export default function Result({ result }) {
  // console.log(result.length);
  // result.map(m=>console.log(m.original_title))
  
  return (
    <div className="sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-6 gap-4 transition-all duration-500">{
      result && result.map((movie) =>{
        return  <Card  key={movie.id} movie={movie}/>
      })}</div>
  );
}
/**
 * ipa react la nama address la changes panna routing change agi client la component re-render agum
 * 
 * server ku req agathu - athu client la pathukum - itha verify panannaum
 * 
 * inga nextjs la nama address la ena changes pannalum namaku server la req varum 
 * so ivanga routing file system base panni pani irukanga athuketha res pogum
 */