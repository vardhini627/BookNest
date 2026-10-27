import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(
    localStorage.getItem("booknest-user") || "null"
  );

  const wishlist = JSON.parse(
    localStorage.getItem("booknest-wishlist") || "[]"
  );

  const library = JSON.parse(
    localStorage.getItem("booknest-library") || "[]"
  );

  function logout() {
    localStorage.removeItem("booknest-logged-in");
    navigate("/login");
  }

  return (
    <main className="page">
      <h1>My Dashboard</h1>
      <p>Welcome, {user?.name || "Reader"}!</p>

      <div className="stats-grid">
        <div className="stat-card">
          <h2>{wishlist.length}</h2>
          <p>Wishlist Books</p>
        </div>
        <div className="stat-card">
          <h2>{library.length}</h2>
          <p>Library Books</p>
        </div>
      </div>

      <div className="action-links">
        <Link className="btn" to="/explore">Discover Books</Link>
        <Link className="btn secondary" to="/library">My Library</Link>
        <Link className="btn secondary" to="/wishlist">My Wishlist</Link>
      </div>

      <button className="btn logout" onClick={logout}>Logout</button>
    </main>
  );
}