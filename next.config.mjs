/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https', // multiple procals irukalam
                hostname:"image.tmdb.org"

            }
        ]
    }
};

export default nextConfig;
/**
 * 
 * nextjs la routing base panni nadakum
 * ipa src la ethavathu link kudutha nama route directory oda athu join agidum
 * ithu routing base panni iruku - ithu than nextjs workflow
 * 
 * nama ver oru http la src add panna athu intha maari eduthukum
 * https://3000-gokulsankar2-imdbnextjs-nvxwm18nhdd.ws-us110.gitpod.io/%28https:/api.themoviedb.org/3/4F0Q2RzJESpEHaMhm3bZFtISFXt.jpg%29
 * 
 * ithuku nama nextjs config la intha domain vantha athu root dir oda join pannama standalone req ah eduthukum
 */