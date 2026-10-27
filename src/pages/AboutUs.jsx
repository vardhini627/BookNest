import { Link } from "react-router-dom";
import { BookOpen, Heart, Users } from "lucide-react";

export default function AboutUs() {
  return (
    <main className="page">
      <section className="about-hero">
        <p className="eyebrow">ABOUT BOOKNEST</p>
        <h1>A little space for a big love of reading.</h1>
        <p>
          BookNest is a digital library concept created to help
          readers discover, organize, and enjoy books.
        </p>
      </section>

      <div className="stats-grid">
        <div className="stat-card">
          <BookOpen size={32} />
          <h3>Discover</h3>
          <p>Find books across different categories.</p>
        </div>

        <div className="stat-card">
          <Heart size={32} />
          <h3>Save Favorites</h3>
          <p>Keep your favorite books in one place.</p>
        </div>

        <div className="stat-card">
          <Users size={32} />
          <h3>For Readers</h3>
          <p>Build your own reading collection.</p>
        </div>
      </div>

      <Link className="btn" to="/explore">Start Exploring</Link>
    </main>
  );
}