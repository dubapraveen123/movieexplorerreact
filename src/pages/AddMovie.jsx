import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function AddMovie() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    director: "",
    year: "",
    image: "",
    rating: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post("/movies", formData);

    navigate("/movies");
  }

  return (
    <div className="form-container">
      <h1>Add Movie</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Movie Title"
          onChange={handleChange}
        />

        <input
          type="text"
          name="genre"
          placeholder="Genre"
          onChange={handleChange}
        />

        <input
          type="text"
          name="director"
          placeholder="Director"
          onChange={handleChange}
        />

        <input
          type="number"
          name="year"
          placeholder="Year"
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />

        <input
          type="number"
          step="0.1"
          name="rating"
          placeholder="Rating"
          onChange={handleChange}
        />

        <button type="submit">
          Add Movie
        </button>
      </form>
    </div>
  );
}

export default AddMovie;