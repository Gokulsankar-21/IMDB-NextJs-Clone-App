import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <div className="flex gap-10 justify-center p-4 bg-amber-100 dark:bg-gray-600 ">
      <NavBarItem title="Trending" param="fetchTrending" />
      <NavBarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
/**
 * nextjs hook
 * useSearchParams()
 */
/**
 * in next section we will work on imtb database for fetching api to get movie data
 */
