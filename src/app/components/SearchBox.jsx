"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function SearchBox() {
    const [search,setSearch] = useState('');
    const router =useRouter()
    const handleSubmit = (e)=>{
        e.preventDefault();
        router.push(`/search/${search}`);//inga router change agum then enaku req nadakum
    }
  return (
    <form onSubmit={handleSubmit} className='flex justify-between gap-4 px-4 max-w-6xl mx-auto'>
        <input type="text" placeholder='Search keyword...' className='py-4 px-4 flex-1 outline-none placeholder:text-gray-400 bg-transparent'
        
        value={search}
        onChange={(e)=>{
            setSearch(e.target.value)
        }}
        />
        <button type='submit' className='text-amber-500 disabled:text-gray-300' disabled={!search}>Search</button>
    </form>
  )
}
/**
 * useRouter from next/navigation 
 * next layum client side hooks iruku athu client side la work agum
 * next la router la change pannalae req nadakum
 */