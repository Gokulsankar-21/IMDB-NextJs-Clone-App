import { Suspense } from "react";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <Suspense>
      <div className="flex  gap-10 lg:gap-14 justify-center p-4 bg-amber-100 dark:bg-gray-600 ">
      <NavBarItem title="Trending" param="fetchTrending" />
      <NavBarItem title="Top Rated" param="fetchTopRated" />
      <NavBarItem title="Now Playing" param="fetchNowPlaying" />
      <NavBarItem title="Upcoming" param="fetchUpcoming" />
    </div>
    </Suspense>
  );
}
/**
 * nextjs hook
 * useSearchParams()
 */
/**
 * in next section we will work on imtb database for fetching api to get movie data
 */
