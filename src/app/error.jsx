"use client"
import React, { useEffect } from 'react'

export default function Error({error,reset}) {
    useEffect(()=>{
console.log(error);
    },[error])
  return (
    <div className='text-center mt-6'>
        <h1 className=''>Something went wrong, please try again!</h1>
        <button className='hover:text-amber-500'
        onClick={()=>reset()}>Try again</button> 
    </div>
  )
}
/**
 * en use client na server la error vanthu iruku apo
 * error ah nama server la handle panna mudiyathu
 * it should be client side than
 * athuku aprm atula useEfffect add pandrathu ellam use client ku etha maari aidum
 */
/**
 * in next session we are gonna see the loading effect without any useEffect
 * next js has this feature by default
 * 
 */