import { Link } from "react-router-dom";
import books from "../data/books";

export default function Wishlist() {
  const ids = JSON.parse(
    localStorage.getItem("booknest-wishlist") || "[]"
  );

  const savedBooks = books.filter((book) => ids.includes(book.id));

  function removeBook(id) {
    const updated = ids.filter((bookId) => bookId !== id);
    localStorage.setItem("booknest-wishlist", JSON.stringify(updated));
    window.location.reload();
  }

  return (
    <main className="page">
      <h1>My Wishlist</h1>
      <p>Books you want to read later.</p>

      {savedBooks.length === 0 ? (
        <p>Your wishlist is empty. <Link to="/explore">Explore books</Link></p>
      ) : (
        <div className="book-grid">
          {savedBooks.map((book) => (
            <article className="book-card" key={book.id}>
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <Link to={`/book-details/${book.id}`}>View Details</Link>
              <button className="btn danger" onClick={() => removeBook(book.id)}>
                Remove
              </button>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}