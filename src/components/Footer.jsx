import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 BookNest. Your digital reading space.</p>

      <div>
        <Link to="/about">About Us</Link>
        {" | "}
        <Link to="/contact">Contact Us</Link>
      </div>
    </footer>
  );
}