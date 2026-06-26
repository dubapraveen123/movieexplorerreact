import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
  alert("Please enter email and password");
  return;
}

    const response = await api.get(
      `/users?email=${email}&password=${password}`
    );

    if (response.data.length > 0) {
      localStorage.setItem(
        "user",
        JSON.stringify(response.data[0])
      );

      navigate("/");
      window.location.reload();
    } else {
      alert("Invalid Credentials");
    }
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
      Login
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
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setEmail(e.target.value)
        }
        style={{
          padding: "15px",
          border: "2px solid #dbe4f0",
          borderRadius: "12px"
        }}
      />

      <input
        type="password"
        placeholder="Password"
        autoComplete="off"
        onChange={(e) =>
          setPassword(e.target.value)
        }
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
        Login
      </button>
    </form>
  </div>
  );
}

export default Login;