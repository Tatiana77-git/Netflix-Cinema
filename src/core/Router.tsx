import {  Routes, Route } from "react-router-dom";


import Home from "../views/Home";
import Movies from "../views/Movies";
import Series from "../views/Series";


export default function Router() {
  return (
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
       
      </Routes>
    
  );
}
