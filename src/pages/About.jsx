function About() {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "30px"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "10px"
        }}
      >
        🎬 Movie Explorer
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#cbd5e1",
          marginBottom: "40px"
        }}
      >
        Discover, Search and Manage your favorite
        movies with ease.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(3,1fr)",
          gap: "20px"
        }}
      >
        <div className="about-card">
          <h2>🔍 Search</h2>
          <p>
            Quickly search movies by
            title.
          </p>
        </div>

        <div className="about-card">
          <h2>❤️ Favorites</h2>
          <p>
            Save your favorite movies
            instantly.
          </p>
        </div>

        <div className="about-card">
          <h2>➕ Add Movies</h2>
          <p>
            Add new movies with
            posters and ratings.
          </p>
        </div>

        <div className="about-card">
          <h2>✏ Edit</h2>
          <p>
            Update movie details
            anytime.
          </p>
        </div>

        <div className="about-card">
          <h2>🗑 Delete</h2>
          <p>
            Remove unwanted movies
            easily.
          </p>
        </div>

        <div className="about-card">
          <h2>🔒 Secure Login</h2>
          <p>
            Only logged-in users can
            manage movies.
          </p>
        </div>
      </div>

      <div
        className="about-card"
        style={{
          marginTop: "30px"
        }}
      >
        <h2>💻 Technologies Used</h2>

        <p>⚛ React JS</p>
        <p>🛣 React Router</p>
        <p>📦 Redux Toolkit</p>
        <p>🌐 Axios</p>
        <p>🗄 JSON Server</p>
      </div>
    </div>
  );
}

export default About;