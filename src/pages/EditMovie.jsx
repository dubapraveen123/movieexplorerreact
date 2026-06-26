import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditMovie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    director: "",
    year: "",
    image: "",
    rating: ""
  });

  useEffect(() => {
    getMovie();
  }, []);

  async function getMovie() {
    try {
      const response = await api.get(`/movies/${id}`);
      setFormData(response.data);
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

    await api.put(`/movies/${id}`, formData);

    navigate("/movies");
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
  Edit Movie
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
  value={formData.title}
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
  value={formData.genre}
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
  value={formData.director}
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
  value={formData.year}
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
  value={formData.image}
  onChange={handleChange}
  style={{
    padding: "15px",
    border: "2px solid #dbe4f0",
    borderRadius: "12px"
  }}
/>

        <input
  type="number"
  step="0.1"
  name="rating"
  value={formData.rating}
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
          Update Movie
        </button>
      </form>
    </div>
  );
}

export default EditMovie;