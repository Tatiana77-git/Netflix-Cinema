
import "./Banner.css";
import { fakeMovies } from "../fakeData";

export default function Banner() {
  const movie = fakeMovies[0]; 

  return (
    <section className="banner" style={{ backgroundImage: `url(${movie.backdrop})` }}>
      <h1 className="banner_title">{movie.title}</h1>
    </section>
  );
}
