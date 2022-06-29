import React from "react";
import { actors } from "../data";

function Actors() {
  return (
  <div>
    <h1>Actors Page</h1>
    {actors.map(director=> {
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

export default Actors;
