import { useState } from "react";
import { Link } from "react-router-dom";
import books from "../data/books";

export default function ExploreBooks() {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author} ${book.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="page">
      <h1>Explore Books</h1>
      <p>Find a book that matches your interests.</p>

      <input
        className="search"
        placeholder="Search title, author or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      
<div className="book-grid">
  {filteredBooks.map((book) => (
    <article className="book-card" key={book.id}>
      <img src={book.image} alt={book.title} />

      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.category}</p>

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


      {filteredBooks.length === 0 && <p>No books found.</p>}
    </main>
  );
}