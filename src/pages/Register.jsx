import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
  e.preventDefault();

  if (
    !user.name ||
    !user.email ||
    !user.password
  ) {
    alert("All fields are required");
    return;
  }

  await api.post("/users", user);

  navigate("/login");
}
  return (
  <div
    style={{
      width: "700px",
      margin: "40px auto",
      background: "white",
      padding: "35px",
      borderRadius: "20px"
    }}
  >
    <h1
      style={{
        color: "black",
        textAlign: "center",
        marginBottom: "30px"
      }}
    >
      Register
    </h1>

    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px"
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        style={{
          padding: "15px",
          border: "2px solid #dbe4f0",
          borderRadius: "12px"
        }}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        style={{
          padding: "15px",
          border: "2px solid #dbe4f0",
          borderRadius: "12px"
        }}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        style={{
          padding: "15px",
          border: "2px solid #dbe4f0",
          borderRadius: "12px"
        }}
      />

      <button
        type="submit"
        style={{
          padding: "15px",
          border: "none",
          borderRadius: "12px",
          background:
            "linear-gradient(90deg,#2563eb,#06b6d4)",
          color: "white",
          fontSize: "18px",
          cursor: "pointer"
        }}
      >
        Register
      </button>
    </form>
  </div>
);
}

export default Register;