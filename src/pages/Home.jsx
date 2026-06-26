import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}

     <div
  style={{
    textAlign: "center",
    padding: "80px 20px",
  background:
  "linear-gradient(135deg,#111827,#1E293B,#111827)",
    borderRadius: "20px",
    marginBottom: "40px"
  }}
>
  <h1
    style={{
      fontSize: "48px",
      color: "white",
      marginBottom: "20px"
    }}
  >
    🎬 Movie Explorer
  </h1>

  <p
    style={{
      color: "#E2E8F0",
      fontSize: "22px",
      lineHeight: "35px"
    }}
  >
    Discover, Search and Manage
    <br />
    Your Favorite Movies
  </p>

  <button
    onClick={() => navigate("/movies")}
    style={{
      marginTop: "30px",
      padding: "15px 35px",
      background: "#F59E0B",
      color: "white",
      border: "none",
      borderRadius: "10px",
      fontSize: "18px",
      cursor: "pointer",
      fontWeight: "bold"
    }}
  >
    🎥 Browse Movies
  </button>
</div>
      <hr />

      {/* Trending Movies */}

      <h2
        style={{
          textAlign: "center",
          marginTop: "40px"
        }}
      >
        🔥 Trending Movies
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "30px",
          flexWrap: "wrap"
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src="/images/RRR.jpg"
            alt="RRR"
            style={{
              width: "180px",
              height: "250px",
              borderRadius: "12px"
            }}
          />
          <h3>RRR</h3>
        </div>

        <div style={{ textAlign: "center" }}>
          <img
            src="/images/BAHUBALI.jpg"
            alt="Bahubali"
            style={{
              width: "180px",
              height: "250px",
              borderRadius: "12px"
            }}
          />
          <h3>Bahubali</h3>
        </div>

        <div style={{ textAlign: "center" }}>
          <img
            src="/images/PUSPHA.jpg"
            alt="Pushpa"
            style={{
              width: "180px",
              height: "250px",
              borderRadius: "12px"
            }}
          />
          <h3>Pushpa</h3>
        </div>

        <div style={{ textAlign: "center" }}>
         <img
  src="https://m.media-amazon.com/images/M/MV5BNTU0ZjYxOWItOWViMC00YWVlLWJlMGUtZjc1YWU0NTlhY2ZhXkEyXkFqcGc@._V1_.jpg"
  alt="Salaar"
  style={{
    width: "180px",
    height: "250px",
    borderRadius: "12px"
  }}
/>

          <h3>Salaar</h3>
        </div>
      </div>

      <hr
        style={{
          marginTop: "50px"
        }}
      />

      {/* Features */}

      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px"
        }}
      >
        ⭐ Why Choose Movie Explorer?
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          padding: "20px"
        }}
      >
        <div className="about-card">
          <h2>🔍 Search</h2>
          <p>Find movies instantly.</p>
        </div>

        <div className="about-card">
          <h2>❤️ Favorites</h2>
          <p>Save favorite movies.</p>
        </div>

        <div className="about-card">
          <h2>➕ Add</h2>
          <p>Add new movies easily.</p>
        </div>

        <div className="about-card">
          <h2>✏ Edit</h2>
          <p>Edit movie details.</p>
        </div>

        <div className="about-card">
          <h2>🗑 Delete</h2>
          <p>Delete unwanted movies.</p>
        </div>

        <div className="about-card">
          <h2>🔒 Secure</h2>
          <p>Login protected actions.</p>
        </div>
      </div>

      <hr
        style={{
          marginTop: "40px"
        }}
      />

      {/* Top Rated */}

      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px"
        }}
      >
        🎥 Top Rated Movies
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          marginBottom: "50px"
        }}
      >
        <div className="about-card">
          <h3>RRR</h3>
          <p>⭐ 4.9</p>
        </div>

        <div className="about-card">
          <h3>Bahubali</h3>
          <p>⭐ 4.8</p>
        </div>

        <div className="about-card">
          <h3>Pushpa</h3>
          <p>⭐ 4.7</p>
        </div>

        <div className="about-card">
          <h3>Salaar</h3>
          <p>⭐ 4.8</p>
        </div>
      </div>
    </>
  );
}

export default Home;