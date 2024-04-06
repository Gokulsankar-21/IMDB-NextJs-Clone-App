import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex w-full justify-center items-center py-2 border-t border-gray-400 gap-4 text-sm bottom-0">
      <p className="mr-2 ">{new Date().getFullYear()}@copyright</p>
      <p>
        Designed by{" "}
        <Link
          href="https://github.com/Gokulsankar-21"
          className="font-semibold hover:text-amber-500 hover:underline"
        >
          GokulDev
        </Link>
      </p>
    </div>
  );
}
