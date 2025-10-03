
import { useEffect, useState } from "react";
import Banner from "../ui/Banner";
import Carousel from "../ui/Carousel";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "../services/Fetch";



export default function Home() {
  const [popular, setPopular] = useState<any[]>([]);
  const [topRated, setTopRated] = useState<any[]>([]);
  const [upcoming, setUpcoming] = useState<any[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<any | null>(null);

  useEffect(() => {
    (async () => {
      const p = await getPopularMovies();
      const t = await getTopRatedMovies();
      const u = await getUpcomingMovies();
      setPopular(p);
      setTopRated(t);
      setUpcoming(u);

      if (p.length >0) {
      setSelectedMovie(p[Math.floor(Math.random() * p.length)]);
      }
    })();
  }, []);

  


  return (
    <main>
      <Banner movie={selectedMovie} />
      <Carousel title="Films populaires" movies={popular}   onSelect={setSelectedMovie} />
      <Carousel title="Mieux notés" movies={topRated} onSelect={setSelectedMovie} />
      <Carousel title="À venir" movies={upcoming}  onSelect={setSelectedMovie} />
    </main>
  );
}
