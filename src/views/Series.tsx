import { useEffect, useState } from "react";
import Carousel from "../ui/Carousel";
import { getPopularSeries, getTopRatedSeries, getSeriesByGenre } from "../services/Fetch";

export default function Series() {
  const [popular, setPopular] = useState<any[]>([]);
  const [topRated, setTopRated] = useState<any[]>([]);
  const [drama, setDrama] = useState<any[]>([]);
  const [comedy, setComedy] = useState<any[]>([]);
  const [animation, setAnimation] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      setPopular(await getPopularSeries());      
      setTopRated(await getTopRatedSeries());     
      setDrama(await getSeriesByGenre(18));       
      setComedy(await getSeriesByGenre(35));      
      setAnimation(await getSeriesByGenre(16));   
    })();
  }, []);

  return (
    <main>
      <Carousel title="Populaires" movies={popular} type="series" />
      <Carousel title="Mieux notées" movies={topRated} type="series" />
      <Carousel title="Drame" movies={drama} type="series" />
      <Carousel title="Comédie" movies={comedy} type="series" />
      <Carousel title="Animation" movies={animation} type="series" />
    </main>
  );
}