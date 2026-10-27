import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <BookOpen size={25} />
        BookNest
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/library">My Library</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}