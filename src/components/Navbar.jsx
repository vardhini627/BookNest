
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("booknest-logged-in") === "true"
  );

  useEffect(() => {
    setIsLoggedIn(
      localStorage.getItem("booknest-logged-in") === "true"
    );
  }, [location.pathname]);

  function logout() {
    localStorage.removeItem("booknest-logged-in");
    setIsLoggedIn(false);
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <BookOpen size={25} />
        BookNest
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {isLoggedIn && (
          <>
            <Link to="/explore">Explore Books</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/library">My Library</Link>
            <Link to="/dashboard">Dashboard</Link>
          </>
        )}

        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        ) : (
          <Link to="/login" onClick={logout}>
            Logout
          </Link>
        )}
      </div>
    </nav>
  );
}
