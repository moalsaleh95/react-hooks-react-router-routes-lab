import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <div>
      <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/actors' element={<Actors />} />
      <Route path='/directors' element={<Directors />}/>
      </Routes>
    </div>
  )

}

export default App;
