
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// export default function MovieDetail() {
//   const { id } = useParams<{ id: string }>();
//   const [movie, setMovie] = useState<any | null>(null);

//   useEffect(() => {
//     async function load() {
//       const res = await fetch(
//         `https://api.themoviedb.org/3/movie/${id}?api_key=${
//           import.meta.env.VITE_API_KEY
//         }&language=fr-FR`
//       );
//       const data = await res.json();
//       setMovie(data);
//     }
//     load();
//   }, [id]);

//   if (!movie) return <p>Chargement...</p>;

//   return (
//     <div style={{ padding: "2rem", color: "white" }}>
//       <h1>{movie.title}</h1>
//       <p>{movie.overview}</p>
//       {movie.poster_path && (
//         <img
//           src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
//           alt={movie.title}
//         />
//       )}
//     </div>
//   );
// }


// src/views/MovieDetail.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { img } from "../services/Fetch";

export default function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`
        );
        const data = await resp.json();
        setMovie(data);
      } catch (err) {
        console.error("Erreur MovieDetail:", err);
      }
    })();
  }, [id]);

  if (!movie) return <p>Chargement...</p>;

  return (
    <div style={{ padding: "1rem", color: "white" }}>
      <h1>{movie.title}</h1>
      <img src={img(movie.poster_path, "w500")} alt={movie.title} />
      <p>{movie.overview}</p>
      <p><strong>Note :</strong> {movie.vote_average}/10</p>
      <p><strong>Date de sortie :</strong> {movie.release_date}</p>
    </div>
  );
}
