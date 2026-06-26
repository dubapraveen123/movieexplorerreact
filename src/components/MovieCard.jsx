import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/favoriteSlice";
function MovieCard({ movie, onDelete }) {
  const dispatch = useDispatch();
  return (
    <div className="movie-card">
      <img
        src={movie.image}
        alt={movie.title}
      />

      <h3>{movie.title}</h3>

      <p>{movie.genre}</p>

      <p>⭐ {movie.rating}</p>

      <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "5px",
    marginTop: "15px"
  }}
>
  <Link to={`/movies/${movie.id}`}>
    <button
      style={{
        width: "90px",
        height: "40px",
        fontSize: "12px"
      }}
    >
      Details
    </button>
  </Link>

  <Link to={`/edit-movie/${movie.id}`}>
    <button
      style={{
        width: "60px",
        height: "40px",
        fontSize: "12px"
      }}
    >
      Edit
    </button>
  </Link>

  <button
    className="delete-btn"
    style={{
      width: "70px",
      height: "40px",
      fontSize: "12px"
    }}
    onClick={() => onDelete(movie.id)}
  >
    Delete
  </button>
  </div>
  <button
  style={{
    marginTop: "10px",
    width: "100%",
    background: "#ff6b35",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer"
  }}
  onClick={() =>
    dispatch(addFavorite(movie))
  }
>
  ❤ Add To Favorites
</button>
</div>
  );
}

export default MovieCard;