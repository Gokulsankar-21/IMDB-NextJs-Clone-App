import Link from "next/link";
import React from "react";

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className=" hover:text-amber-500">
      <Icon className="text-2xl inline sm:hidden" />
      <p className="px-2 uppercase text-[0.8rem] hidden sm:inline">{title}</p>
    </Link>
  );
}
