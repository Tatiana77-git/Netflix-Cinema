import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSeriesById, img } from "../services/Fetch";
import "./Details.css"

export default function SeriesDetail() {
  const { id } = useParams<{ id: string }>();
  const [serie, setSerie] = useState<any | null>(null);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const data = await getSeriesById(id);
        setSerie(data);
      } catch (err) {
        console.error("Erreur SeriesDetail:", err);
      }
    })();
  }, [id]);

  if (!serie) return <p>Chargement...</p>;

  return (
    <div className="detail">
      <h1>{serie.name}</h1>
      {serie.poster_path && (
        <img src={img(serie.poster_path, "w500")} alt={serie.name} />
      )}
      <p>{serie.overview}</p>
      <p>
        <strong>⭐ Note :</strong> {serie.vote_average}/10
      </p>
      <p>
        <strong>📅 Première diffusion :</strong> {serie.first_air_date}
      </p>
    </div>
  );
}