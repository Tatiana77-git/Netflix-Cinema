
// import { Link } from "react-router-dom";
// import { img } from "../services/Fetch";
// import "./Carousel.css";

// type Props = {
//   title: string;
//   movies: any[];
// };

// export default function Carousel({ title, movies }: Props) {
//   return (
//     <section className="carousel">
//       <h2>{title}</h2>
//       <div className="carousel__list">
//         {movies.map((m) => (
//           <Link to={`/movie/${m.id}`} key={m.id} className="carousel__item">
//             {m.poster_path && (
//               <img src={img(m.poster_path, "w342")} alt={m.title} />
//             )}
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }
// src/ui/Carousel.tsx
import { img } from "../services/Fetch";
import "./Carousel.css";

type Props = {
  title: string;
  movies: any[];
  onSelect?: (m: any) => void; 
};

export default function Carousel({ title, movies, onSelect }: Props) {
  return (
    <section className="carousel">
      <h2>{title}</h2>
      <div className="carousel__list">
        {movies.map((m) => (
          <div
            key={m.id}
            className="carousel__item"
            onClick={() => onSelect && onSelect(m)} 
          >
            {m.poster_path && (
              <img src={img(m.poster_path, "w342")} alt={m.title} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
