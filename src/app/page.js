import { resolve } from "styled-jsx/css";
import Result from "./components/Result";

export default async function Home({ searchParams }) {
  console.log("req to home page");
  console.log(searchParams.genre);
  // props la namaku req la irukura params varuthu - ithu yaru  anupura
  let genre = searchParams.genre || "fetchTrending";
  const API_KEY = process.env.API_KEY;
 
  genre = genre ==='fetchTrending' ? "/trending/all/week" : genre;
  genre = genre ==='fetchTopRated' ? "/movie/top_rated" : genre;
  genre = genre ==='fetchNowPlaying' ? "/movie/now_playing" : genre;
  genre = genre ==='fetchUpcoming' ? "/movie/upcoming" : genre;

  let page = searchParams.page || 1
  const res =await new Promise((resolve)=>{
    setTimeout(async()=>{

      const res = await fetch(`
      https://api.themoviedb.org/3${genre}?api_key=${API_KEY}&language=en-US&page=${page}`,
      {
        next:{
          revalidate:10
        } //NextFetchRequestConfig
      });
      resolve(res)
    },3000)
  })
  
  const data = await res.json();

  if(!res.ok){
     throw new Error("failed to fatch");
  }
  const result = await data.results;
  return (
    <div>
      <Result result={result} />
    </div>
  );
}
/**
 *
 * ithu home page
 * ithuku complete html ah seperated ah response ah nama anupuvom
 *
 */
/**
 *
 * Indha home page component client ku pogathu
 * ithu server side la process agi html ah res annum
 *
 * @Cruicial_info
 * inga next js fetch ellamae server side la than pannuvom
 * fetch pannitu athuku aprm than nama vantha res ah html ah mathi response ah client ku anupuvom
 *
 *  req varum bothu intha comp la fetch pandrom server side la athuku nama wait pannanum
 * so database endpoint - ithuku async function use pannanun
 *
 * epa fertch la res varutho apo client ku res ah send pannanum
 * athu varikum  client la respose poitae irukum
 * first header send agum navbar than res loding la iruku athu varikum nama client side la loaidng ah add pannidalam
 * then final ah home res kedachi html ah client ku anupuvom loading eduthuduvom
 *
 * @multiple_way_to_fetch
 * axios
 * https/https
 * node-fetch@2
 * resquest package
 *
 *
 * itha pathu understand panniten - nama manual ah http ah use panni res ah get pani process pandratha
 * andha packages ellam simplfy panni namaku tharum
 * athu ellathyum understand panniten
 * in tmdb la ella language layum fetch pannalam nu pathen
 *
 * tmdb la athorization 2 ways la iruku
 *    token
 *    api key
 * */
