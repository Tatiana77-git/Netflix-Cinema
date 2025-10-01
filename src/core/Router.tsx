import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Movies from "../views/Movies";
import Series from "../views/Series";
import MovieDetail from "../views/MovieDetail"; // ← важно

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<Series />} />
      <Route path="/movie/:id" element={<MovieDetail />} /> {/* ← маршрут для деталей */}
    </Routes>
  );
}
