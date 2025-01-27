import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <div>
   <h1>Directors Page</h1>
   {directors.map(director=> {
    return (
      <div>
        <p>{director.name}</p>
        <p>Movies:</p>
        <ul>
          {director.movies.map(movie=> {
            return (
              <li>{movie}</li>
            )
          })}
        </ul>
      </div>
    )
   })}
  </div>
  );
}

export default Directors;
