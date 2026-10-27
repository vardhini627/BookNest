import { Link } from "react-router-dom";
import books from "../data/books";

export default function Library() {
  const ids = JSON.parse(
    localStorage.getItem("booknest-library") || "[]"
  );

  const libraryBooks = books.filter((book) => ids.includes(book.id));

  function removeBook(id) {
    const updated = ids.filter((bookId) => bookId !== id);
    localStorage.setItem("booknest-library", JSON.stringify(updated));
    window.location.reload();
  }

  return (
    <main className="page">
      <h1>My Library</h1>
      <p>Your personal collection of books.</p>

      {libraryBooks.length === 0 ? (
        <p>Your library is empty. <Link to="/explore">Find a book</Link></p>
      ) : (
        <div className="book-grid">
          {libraryBooks.map((book) => (
            <article className="book-card" key={book.id}>
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <Link to={`/read-book/${book.id}`}>Read Book</Link>
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