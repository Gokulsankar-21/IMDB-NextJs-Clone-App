import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaThumbsUp }
 from 'react-icons/fa'
export default function Card({movie}) {
  return (
    <div className='group p-3 cursor-pointer sm:border sm:border-slate-400
    rounded-t-lg  sm:hover:shadow-md  sm:hover:shadow-slate-400 transition duration-300'>
        <Link href={`/movie/${movie.id}`}>
            <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path }`}  
            width={500}
            height={300}
            priority={true}
            quality={60}
            className='group-hover:opacity-70 sm:rounded-t-lg transition-opacity duration-300'
            />
      
        <div className="py-2 px-1">
            <p className='line-clamp-2 mb-2'>{movie.overview}</p>
            <h2 className='text-lg truncate font-bold mb-1' >{movie.title || movie.name}</h2>
            <p className="text-sm flex items-center gap-1">
                {movie.release_date || movie.first_air_date}
                <FaThumbsUp  className=' ml-3 hover:text-amber-500'/>
                {movie.vote_count}
            </p>
        </div>
        </Link>
    </div>
  )
}
/**
 * 
 * ipa /movie/moviei_id nu ref set panniten athuku nama innum ethuvm ready pannala athula layout ila athanala thu refresh aguthu
 */