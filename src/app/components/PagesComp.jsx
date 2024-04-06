"use client";
import Link from "next/link";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function PagesComp() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString()); // ithu client side string ah irukum | server side la req la object la irukum
  let genre = params.get("genre");
  console.log(genre);
  genre = genre ? "&genre=" + genre : "";
  let pathname = usePathname();
  console.log(pathname,genre);

  return (
    <div className="text-center pb-10 ">
      <ul className="flex gap-4 items-center justify-center">
        <Link href={pathname === "/" ? `/?page=1${genre}` : `?page=1`}>
          <li className="py-1 px-2 border rounded-md hover:text-white hover:border-amber-500 hover:bg-amber-500 transition duration-300">
            1
          </li>
        </Link>
        <Link href={pathname === "/" ? `/?page=2${genre}` : `?page=2`}>
          <li className="py-1 px-2 border rounded-md hover:text-white hover:border-amber-500 hover:bg-amber-500 transition duration-300">
            2
          </li>
        </Link>
        <Link href={pathname === "/" ? `/?page=3${genre}` : `?page=3`}>
          <li className="py-1 px-2 border rounded-md hover:text-white hover:border-amber-500 hover:bg-amber-500 transition duration-300">
            3
          </li>
        </Link>
      </ul>
    </div>
  );
}
