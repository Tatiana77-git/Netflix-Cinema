
import { Link } from "react-router-dom";
import { img } from "../services/Fetch";
import "./Carousel.css";

type Props = {
  title: string;
  movies: any[];
  type?: "home" | "movie" |"series"
  onSelect?: (m: any) => void; 
};

export default function Carousel({ title, movies, type = "home", onSelect }: Props) {
  return (
    <section className="carousel">
      <h2>{title}</h2>
      <div className="carousel__list">
        {movies.map((m) =>
          type === "home" ? (
           
            <div
              key={m.id}
              className="carousel__item"
              onClick={() => onSelect && onSelect(m)}
            >
              {m.poster_path && (
                <img src={img(m.poster_path, "w342")} alt={m.title || m.name} />
              )}
            </div>
          ) : (
           
            <Link
              key={m.id}
              to={`/${type}/${m.id}`}
              className="carousel__item"
            >
              {m.poster_path && (
                <img src={img(m.poster_path, "w342")} alt={m.title || m.name} />
              )}
            </Link>
          )
        )}
      </div>
    </section>
  );
}