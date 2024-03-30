import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
export default function Header() {
  return (
    <div
      className="flex p-3 justify-between items-center
        max-w-6xl mx-auto"
    >
      {/* left side */}
      <div className="flex gap-4">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      {/* right side */}
      <div className="flex gap-1 items-center">
        <Link
          href={"/"}
          className="text-2xl font-bold text-white
         bg-amber-500 rounded-lg px-2 py-1"
        >
          IMDb
        </Link>
        <span className="text-2xl hidden sm:inline">Clone</span>
      </div>
    </div>
  );
}
