import { Link, useParams } from "react-router-dom";
import books from "../data/books";

export default function ReadBook() {
  const { id } = useParams();
  const book = books.find((item) => item.id === Number(id));

  if (!book) {
    return <main className="page"><h2>Book not found.</h2></main>;
  }

  return (
    <main className="page reader">
      <p><Link to="/library">← Back to My Library</Link></p>

      <h1>{book.title}</h1>
      <p>Written by {book.author}</p>

      <div className="reader-content">
        <h2>Welcome to your reading space</h2>
        <p>{book.description}</p>
        <p>
          This is a sample reading page for your project.
          You can replace this text with book content that you
          have permission to publish or with your own sample chapter.
        </p>
        <p>
          BookNest helps readers organize their favorite books and
          discover new reading interests.
        </p>
      </div>
    </main>
  );
}