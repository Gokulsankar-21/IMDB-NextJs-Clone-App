import React from "react";

export default function page() {
  // console.log("req to about page");
  return (
    <div className="max-w-6xl mx-auto p-3 space-y-3">
      <h1 className="hover:text-amber-500 text-lg cursor-pointer">About</h1>
      <p>
        Welcome to our movie database website! We are a team of passionate movie
        enthusiasts who have come together to create a one-stop destination for
        all your movie-related needs. Our website is designed to provide you
        with a comprehensive database of movies from all around the world, along
        with the latest news, reviews, and trailers. Our movie database is
        constantly updated with new releases, ensuring that you have access to
        the latest and greatest in the world of cinema. You can search for
        movies by title, director, actor, genre, or release date, making it easy
        to find the perfect movie for any occasion.
      </p>
      <p>
        In addition to our extensive movie database, we also offer a platform
        for movie lovers to connect and share their thoughts on the latest
        releases. Our community section includes a forum where you can discuss
        your favorite films with like-minded individuals and read reviews and
        ratings from other users. We also have a section dedicated to movie news
        and trailers, keeping you updated with the latest happenings in the
        world of cinema.
      </p>
      <p>
        Thank you for visiting our website and we hope you enjoy your time
        browsing through our movie database. If you have any feedback or
        suggestions, please feel free to contact us. We are always looking for
        ways to improve and enhance the user experience on our website. Happy
        browsing!
      </p>
    </div>
  );
}
/**
 * inga filesystem than routing
 * so file system base espeacial ah folder name base panni routing nadakum - matha mudiyathu
 * ithu auomated ah matitom - so manual ah ethuvum panna matom
 *
 * nama entha rules break panna koodathu - ethavathu filename and folder structure changes panna we will get an error in nextjs
 *
 * inga next js la auth epdi irukanum nu na kathukunum - kathupen
 * next js user data va manage pandrathu pakkanum
 */
