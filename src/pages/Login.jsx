import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const user = JSON.parse(
      localStorage.getItem("booknest-user") || "null"
    );

    if (
      user &&
      user.email === email &&
      user.password === password
    ) {
      localStorage.setItem("booknest-logged-in", "true");
      navigate("/dashboard");
    } else {
      alert("Account not found or password is incorrect. Please sign up first.");
    }
  }

  return (
    <main className="form-page">
      <form className="form-card" onSubmit={handleSubmit}>
        <h1>Welcome Back!</h1>
        <p>Login to continue reading.</p>

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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn" type="submit">Login</button>
        <p>New to BookNest? <Link to="/signup">Create an account</Link></p>
      </form>
    </main>
  );
}