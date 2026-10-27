import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ExploreBooks from "./pages/ExploreBooks";
import BookDetails from "./pages/BookDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Wishlist from "./pages/Wishlist";
import Library from "./pages/Library";
import ReadBook from "./pages/ReadBook";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExploreBooks />} />
        <Route path="/book-details/:id" element={<BookDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/library" element={<Library />} />
        <Route path="/read-book/:id" element={<ReadBook />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<main className="page"><h1>404 — Page Not Found</h1></main>} />
      </Routes>

      <Footer />
    </>
  );
}