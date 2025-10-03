
import { useEffect, useState } from "react";
import Carousel from "../ui/Carousel";
import { getMoviesByGenre } from "../services/Fetch";

export default function Movies() {
  const [action, setAction] = useState<any[]>([]);
  const [comedy, setComedy] = useState<any[]>([]);
  const [drama, setDrama] = useState<any[]>([]);
  const [horror, setHorror] = useState<any[]>([]);
  const [animation, setAnimation] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      setAction(await getMoviesByGenre(28));   
      setComedy(await getMoviesByGenre(35));    
      setDrama(await getMoviesByGenre(18));    
      setHorror(await getMoviesByGenre(27));   
      setAnimation(await getMoviesByGenre(16)); 
    })();
  }, []);

  return (
    <main>
      <Carousel title="Action" movies={action} type="movie" />
      <Carousel title="Comédie" movies={comedy} type="movie" />
      <Carousel title="Drame" movies={drama} type="movie"  />
      <Carousel title="Horreur" movies={horror} type="movie"  />
      <Carousel title="Animation" movies={animation} type="movie" />
    </main>
  );
}
