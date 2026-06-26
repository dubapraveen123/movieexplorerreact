import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Movies() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const user = localStorage.getItem("user");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] =
  useState("All");
const [sortRating, setSortRating] =
useState("");
const [formData, setFormData] = useState({
  title: "",
  genre: "",
  director: "",
  year: "",
  image: "",
  rating: ""
});

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    try {
      const response = await api.get("/movies");
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  }
function handleChange(e) {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
}

async function handleSubmit(e) {
  e.preventDefault();

  await api.post("/movies", formData);

  getMovies();

  setShowForm(false);

  setFormData({
    title: "",
    genre: "",
    director: "",
    year: "",
    image: "",
    rating: ""
  });
}
async function handleDelete(id) {
  try {
    await api.delete(`/movies/${id}`);

    getMovies();
  } catch (error) {
    console.log(error);
  }
}
const filteredMovies = movies
  .filter(
    (movie) =>
      movie.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      (selectedGenre === "All" ||
        movie.genre
          .toLowerCase()
          .includes(selectedGenre.toLowerCase()))
  )
  .sort((a, b) => {
    if (sortRating === "high") {
      return b.rating - a.rating;
    }

    if (sortRating === "low") {
      return a.rating - b.rating;
    }

    return 0;
  });
  return (
    <>
      <h1>Popular Movies</h1>
      <p>Total Movies: {movies.length}</p>
    <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "25px",
    flexWrap: "wrap"
  }}
>
  {/* Search */}

  <input
    type="text"
    placeholder="🔍 Search Movie..."
    value={searchTerm}
    onChange={(e) =>
      setSearchTerm(e.target.value)
    }
    style={{
      padding: "10px",
      width: "280px",
      borderRadius: "8px"
    }}
  />

  {/* Genre */}

  <select
    value={selectedGenre}
    onChange={(e) =>
      setSelectedGenre(e.target.value)
    }
    style={{
      padding: "10px",
      borderRadius: "8px"
    }}
  >
    <option value="All">All Genres</option>
    <option value="Action">Action</option>
    <option value="Drama">Drama</option>
    <option value="Fantasy">Fantasy</option>
    <option value="Historical">Historical</option>
    <option value="Sci-Fi">Sci-Fi</option>
  </select>

  {/* Sort */}

  <select
    value={sortRating}
    onChange={(e) =>
      setSortRating(e.target.value)
    }
    style={{
      padding: "10px",
      borderRadius: "8px"
    }}
  >
    <option value="">
      Sort Rating
    </option>

    <option value="high">
      High to Low
    </option>

    <option value="low">
      Low to High
    </option>
  </select>

  {/* Add Movie */}

  <button
    onClick={() => {
      if (!user) {
        navigate("/login");
        return;
      }

      setShowForm(!showForm);
    }}
    style={{
      padding: "10px 20px",
      background: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold"
    }}
  >
    + Add Movie
  </button>
</div>

{showForm && (
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
  Add Movie
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
  name="title"
  placeholder="Movie Title"
  onChange={handleChange}
  style={{
    padding: "15px",
    border: "2px solid #dbe4f0",
    borderRadius: "12px"
  }}
/>

   <input
  type="text"
  name="genre"
  placeholder="Genre"
  onChange={handleChange}
  style={{
    padding: "15px",
    border: "2px solid #dbe4f0",
    borderRadius: "12px"
  }}
/>

    <input
  type="text"
  name="director"
  placeholder="Director"
  onChange={handleChange}
  style={{
    padding: "15px",
    border: "2px solid #dbe4f0",
    borderRadius: "12px"
  }}
/>
    <input
  type="number"
  name="year"
  placeholder="Year"
  onChange={handleChange}
  style={{
    padding: "15px",
    border: "2px solid #dbe4f0",
    borderRadius: "12px"
  }}
/>
   <input
  type="text"
  name="image"
  placeholder="Image URL"
  onChange={handleChange}
  style={{
    padding: "15px",
    border: "2px solid #dbe4f0",
    borderRadius: "12px"
  }}
/>

    <input
  type="number"
  name="rating"
  placeholder="Rating"
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
  Save Movie
</button>
  </form>
</div>
)}

     <div className="movies-container">
  {filteredMovies.length > 0 ? (
    filteredMovies.map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
        onDelete={handleDelete}
      />
    ))
  ) : (
    <h2>Movie Not Found 😔</h2>
  )}
</div>
    </>
  );
}

export default Movies;