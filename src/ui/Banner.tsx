
// import "./Banner.css";
// import { Link } from "react-router-dom";
// import { img } from "../services/Fetch";

// type Props = {
//   movie: any | null;
// };

// export default function Banner({ movie }: Props) {
//   if (!movie) return <section className="banner"><p>Chargement...</p></section>;

//   const bg = img(movie.backdrop_path, "w780");

//   return (
//     <section
//       className="banner"
//       style={bg ? { backgroundImage: `url(${bg})` } : undefined}
//     >
//       <div className="banner__overlay">
//         <h1>{movie.title}</h1>
//         {movie.overview && <p>{movie.overview}</p>}

//         {/* 🔘 Кнопка «Voir plus» ведёт на MovieDetail */}
//         <Link to={`/movie/${movie.id}`} className="banner__button">
//           Voir plus
//         </Link>
//       </div>
//     </section>
//   );
// }
// src/ui/Banner.tsx
import "./Banner.css";
import { Link } from "react-router-dom";
import { img } from "../services/Fetch";

type Props = {
  movie: any | null;
};

export default function Banner({ movie }: Props) {
  if (!movie) return <section className="banner"><p>Chargement...</p></section>;

  const bg = img(movie.backdrop_path, "w780");

  return (
    <section
      className="banner"
      style={bg ? { backgroundImage: `url(${bg})` } : undefined}
    >
      <div className="banner__overlay">
        <h1>{movie.title}</h1>
        
        {}
        <Link to={`/movie/${movie.id}`} className="banner__button">
          Voir plus
        </Link>
      </div>
    </section>
  );
}
