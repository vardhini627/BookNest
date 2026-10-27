import { Link } from "react-router-dom";
import books from "../data/books";

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div>
          <p className="eyebrow">WELCOME TO BOOKNEST</p>
          <h1>Discover your next favorite book.</h1>
          <p>
            Explore inspiring stories, learn new skills,
            and build your reading habit.
          </p>
          <Link className="btn" to="/explore">
            Explore Books
          </Link>
        </div>
      </section>

      <h2>Popular Books</h2>

      <div className="book-grid">
        {books.slice(0, 3).map((book) => (
          <article className="book-card" key={book.id}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p className="book-rating">
              <span>★</span> {book.rating} / 5
            </p>

            <p className="book-readers">
              👥 {book.readers.toLocaleString()} readers
            </p>
            <Link to={`/book-details/${book.id}`}>
              View Details
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}