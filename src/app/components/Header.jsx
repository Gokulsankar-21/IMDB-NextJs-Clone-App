
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
export default function Header() {
  return (
    <div
      className="flex p-4 justify-between items-center
        max-w-6xl mx-auto"
    >
      {/* left side */}
      <div className="flex gap-8">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
        <MenuItem title="Movie List" address="/movie-list" Icon={BsFillInfoCircleFill} />
      </div>
      {/* right side */}
      <div className="flex gap-4 items-center">
        <DarkModeSwitch />

        <Link href={"/"} className="flex gap-1 items-center">
          <span
            className=" text-2xl  font-bold text-white
         bg-amber-500 rounded-lg px-2 py-1"
          >
            IMDb
          </span>
          <span className="text-2xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
}
/**
 * Use client :
 * hooks and events lam next la proecess agathu
 * server side la dom la iruathu
 * atha client side la than process pannanum anga than athu work agum
 *
 * By default ella components um => 'use server ' ah irukum
 *
 * itha next js pathukum
 *
 * 'use client' aha irukum pothum next js smart ah ithu client side nu understand pannikum
 *
 * ipa itha pathi na innum understand pannikiten
 */
/**
 * next js nama response server la ready pandra varaikum loading anupidum - atha kamichitu irukum
 * Promise and setinterval maari api kudukum bohu next js loading ah vechi manage pannuthu
 */