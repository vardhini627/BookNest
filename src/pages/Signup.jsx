import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const user = { name, email, password };

    localStorage.setItem("booknest-user", JSON.stringify(user));
    alert("Account created! Please login.");
    navigate("/login");
  }

  return (
    <main className="form-page">
      <form className="form-card" onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <p>Join the BookNest reading community.</p>

        <label>Full Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn" type="submit">Sign Up</button>
        <p>Already registered? <Link to="/login">Login</Link></p>
      </form>
    </main>
  );
}