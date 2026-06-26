import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovie();
  }, []);

  async function getMovie() {
    try {
      const response = await api.get(`/movies/${id}`);
      setMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
     <img
  src={movie.image}
  alt={movie.title}
  className="details-image"
/>

      <h1>{movie.title}</h1>

      <h3>Genre</h3>
      <p>{movie.genre}</p>

      <h3>Director</h3>
      <p>{movie.director}</p>

      <h3>Year</h3>
      <p>{movie.year}</p>

      <h3>Rating</h3>
      <p>⭐ {movie.rating}</p>

      <h3>Famous For</h3>
      <p>{movie.famousFor}</p>

      <h3>Highlights</h3>

      <ul>
  {movie.highlights?.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
    </>
  );
}

export default MovieDetails;