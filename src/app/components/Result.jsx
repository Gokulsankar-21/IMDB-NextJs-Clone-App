import React from "react";

export default function Result({ result }) {
  console.log(result.length);
  return (
    <div>{result && result.map((movie) => <h3>movie.original_title</h3>)}</div>
  );
}
