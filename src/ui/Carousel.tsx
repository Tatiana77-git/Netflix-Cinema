import "./Carousel.css";
import Card from "./Card";

type Movie = {
  id: number;
  title: string;
  poster: string;
};

type Props = {
  title: string;
  items: Movie[];
};

export default function Carousel({ title, items }: Props) {
  return (
    <section className="carousel">
      <h2>{title}</h2>
      <div className="carousel_track">
        {items.map((movie) => (
          <Card key={movie.id} title={movie.title} poster={movie.poster} />
        ))}
      </div>
    </section>
  );
}
