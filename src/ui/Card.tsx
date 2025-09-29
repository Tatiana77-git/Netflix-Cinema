import "./Card.css";

type Props = {
  title: string;
  poster: string;
};

export default function Card({ title, poster }: Props) {
  return (
    <div className="card">
      <img src={poster} alt={title} className="card__img" />
      <h3 className="card__title">{title}</h3>
    </div>
  );
}
