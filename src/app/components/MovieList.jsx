import React from 'react'
import MovieCategorie from './MovieCategories'

export default function MovieList({ results }) {
    return (
        <div className='py-2 px-4 max-w-2xl mx-auto'>
            <h1 className='text-2xl md:text-3xl text-amber-500 cursor-pointer font-semibold mt-1 text-center  '>Movies Categories</h1>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-5 max-w-xl mx-auto pl-8 translate-x-16">
                {results.map((genre) => (
                    <MovieCategorie key={genre.id} categories={genre.name} />
                ))}
            </div>
        </div>
    )
}
