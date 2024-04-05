import React from 'react'
import Link from 'next/link'
export default function MovieCategorie({ categories }) {
    return (
        <div>
            <Link href={`/movie-categories/${categories}`} className='hover:text-amber-500 md:text-[1.12rem] cursor-pointer'>{categories}</Link>
        </div>
    )
}
/**
 * multiple links href - ithu server side comp
 * search - single routing - useRouter = client side comp
 */