'use client'
import Link from "next/link";
import React from "react";
import { usePathname, useSearchParams } from 'next/navigation'

export default function PagesComp() {
    const searchParams = useSearchParams()
    const pathname = usePathname();

    const genre = searchParams.get('genre')
    console.log(pathname,searchParams);
  return (
    <div className="text-center ">
      <ul className="flex gap-4 items-center justify-center">
        <Link href={`/?page=1&genre=${genre}`}>
          <li className="py-1 px-2 border rounded-md hover:text-white hover:border-amber-500 hover:bg-amber-500 transition duration-300">1</li>
        </Link>
        <Link href={`/?page=2&genre=${genre}`}>
          <li className="py-1 px-2 border rounded-md hover:text-white hover:border-amber-500 hover:bg-amber-500 transition duration-300">2</li>
        </Link>
        <Link href={`/?page=3&genre=${genre}`}>
          <li className="py-1 px-2 border rounded-md hover:text-white hover:border-amber-500 hover:bg-amber-500 transition duration-300">3</li>
        </Link>
      </ul>
    </div>
  );
}
