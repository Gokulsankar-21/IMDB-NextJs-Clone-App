"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function NavBarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <Suspense>
      <Link
        href={`/?genre=${param}`}
        className={`lg:text-lg text-sm  md:text-base font-medium mr-1 hover:text-amber-500 
        ${
          genre === param
            ? " underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg "
            : ""
        }`}
      >
        {title}
      </Link>
    </Suspense>
  );
}
/**
 * intha navbar item ah dynamic ah style pannuvom
 * ithu params aha vechi nama underline pannuvom
 * athuku next js la useSearchParams() hooks iruku
 * ithu "use client" la process aganum
 *
 *
 *
 *
 */
