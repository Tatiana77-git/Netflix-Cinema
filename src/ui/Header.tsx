import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav_link">Accueil</Link>
        <Link to="/movies" className="nav_link">Films</Link>
        <Link to="/series" className="nav_link">Séries</Link>
      </nav>
    </header>
  );
}
