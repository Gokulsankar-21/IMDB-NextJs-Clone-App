import React from 'react'

export default function loading() {
  return (
    <div className='flex justify-center mt-14'>
         <img src="spinner.svg" alt="spinner"  className='h-52'/>
    </div>
  )
}

/**
 * @quick_actions
 * 
 * react project ah na cloud hosting moolima run pannnanum - dev tools ah analyse pananum
 * inga nextjs webpack module websocket protocal use pannuthu
 * so, ithu namaku connection create aguthu => wss://3000:gokulsankar
 * intercative data exchange nadanthukitae irukum
 * na cloud hosting env la dev pandren, athula vps antha websocket use pannala
 * na use pandra project la athu iruku, atha na browser la load panni irukun. athu nextjs panuthu
 * ethavathu changes nadantha nextjs athu dev mode la athu refresh pannuthu 
 * => wepack-hmr => wss:// status code => 101 Switching Protocols
 * ithae than react layum -> 
 *      vite => own => websocket , 
 *      create-react-app => webpack=> websocket iruku
 * 
 * dev mode la than websocket iruku => only for fase dev server kaga
 * production mode la ithu irukuathu
 * ithu project webprotocal use panni iruku na athu oru different persopctive la nadakum => online edtiors, online games, online trading=> @continuos_data_exchange thava padra ella edathulayum websocket use pannuvom
 * websocket la oru project pannuven soon
 * 
 * @cruical_info
 * na about page click panned enaku loading vanthichi again na vera tab poitu about ah click pannen fast ah vanthichi
 * ithu reason nextjs cache concept ah use pannuthu. atha na pakkava kathukiten => thevanatha note eluthi iruken
 * 
 * next js oru particulat time aprm atha cache ah remove pannalam
 * nama athigama req kudukum bothu server la fetch nadakum athu cache la store ahum -> client ku render agifum
 * anga again trending ku click panna nextjs fetch pannama cache la irunthu anupum
 * so, server la data iruku fetch panna matom - database - API use innoru db ko fetch pannathu
 * 
 * @advantage
 * ithanala fast ah namaku page load agaum 1st load anathukju aprm.
 * fast and speed ah irukum
 * namaku multiple users iruntha fetch API call athiga ma iruku -  loading time athigama irukum . itha nextjs easy and efficient ah solve pannuthu
 * ipa oru user en web app req pandranga na 1st time fetch nadakum apo athu cache la store agum then vera user vanthangana req pannum bothu cache la irukurathu anupum. ithanala namku fash and less api req irukum
 * less service amount fast ah irukum
 * 
 * but ithu up-to-date data va pakkka mudiyathu, ithula nextjs particular time aprm cache remove pannidum then again fetch pannum
 * intha mechanism la next jd work pannum
 * 
 * 
 * 
 * itha mathalam
 * revalidate kudutha namaku ena thavayo atha panna mudiyum.
 * revalitate:10000 every 10sec ku cache ah remove panni new fetch ah kudukalam
 * antha 10sec la entha req nadanthalum cache-res pogum ->many advantage - minor disadv
 * 
 * 
 * loading nextjs server la handle pannikuthu - client la ila
 * first fetch pannitu irukum bothu page ku pathila loading anuputhu
 * fetch anathuku aprm page.jsx ah anuputhu
 * simple technique
 * 
 * Nextjs oda complete workflow teriyanum
 * ipa standard ah agitu irukum
 * 
 * @notes
 *  nextjs la mutiple user ku authenticate pannalum antha movie data va than ellathukum distribute pannuvom  - ithu public ella user kum ore maari pogum = public api req
 * athanala itha cahe la vechikalam
 * ithae user data va db la fetch pannum bothu avanga data va cache ena pannaum nu pakkanum - private api req
 */
