import { Link, useParams } from "react-router-dom";
import books from "../data/books";

export default function BookDetails() {
  const { id } = useParams();
  const book = books.find((item) => item.id === Number(id));

  if (!book) {
    return <main className="page"><h2>Book not found.</h2></main>;
  }

  function addToWishlist() {
    const saved = JSON.parse(
      localStorage.getItem("booknest-wishlist") || "[]"
    );

    if (!saved.includes(book.id)) {
      localStorage.setItem(
        "booknest-wishlist",
        JSON.stringify([...saved, book.id])
      );
      alert("Added to your wishlist!");
    } else {
      alert("This book is already in your wishlist.");
    }
  }

  function addToLibrary() {
    const saved = JSON.parse(
      localStorage.getItem("booknest-library") || "[]"
    );

    if (!saved.includes(book.id)) {
      localStorage.setItem(
        "booknest-library",
        JSON.stringify([...saved, book.id])
      );
      alert("Added to My Library!");
    } else {
      alert("This book is already in your library.");
    }
  }

  return (
    <main className="page detail">
      <img src={book.image} alt={book.title} />
      <div>
        <h1>{book.title}</h1>
        <h3>By {book.author}</h3>
        <p className="book-rating">
          <span>★</span> {book.rating} / 5
        </p>

        <p className="book-readers">
          👥 {book.readers.toLocaleString()} readers
        </p>
        <p>Category: {book.category}</p>
        <p>{book.description}</p>

        <button className="btn" onClick={addToWishlist}>
          Add to Wishlist
        </button>

        <button className="btn secondary" onClick={addToLibrary}>
          Add to Library
        </button>

        <p><Link to={`/read-book/${book.id}`}>Read Book</Link></p>
      </div>
    </main>
  );
}