import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    alert("Thank you for contacting BookNest!");

    setForm({ name: "", email: "", message: "" });
  }

  return (
    <main className="form-page">
      <form className="form-card" onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <p>Have a question or suggestion? Send us a message.</p>

        <label>Name</label>
        <input
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
        />

        <label>Message</label>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          required
        />

        <button className="btn" type="submit">Send Message</button>
      </form>
    </main>
  );
}