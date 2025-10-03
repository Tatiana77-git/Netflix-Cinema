
  import { useParams } from "react-router-dom";
  import { useEffect, useState } from "react";
  import { img } from "../services/Fetch";
  import "./Details.css"

  export default function HomeDetail() {
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
          console.error("Erreur HomeDetail:", err);
        }
      })();
    }, [id]);

    if (!movie) return <p>Chargement...</p>;

    return (
      <div className="detail">    
      <h1>{movie.title}</h1>
       <img src={img(movie.poster_path, "w500")} alt={movie.title} />
        <p>{movie.overview}</p>
        <p><strong> ⭐Note :</strong> {movie.vote_average}/10</p>
        <p><strong> 📅Date de sortie :</strong> {movie.release_date}</p>
      </div>
    );
  }

